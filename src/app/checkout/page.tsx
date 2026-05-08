'use client';

import { FormEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatINR } from '@/lib/pricing';
import { createPaymentIntent } from '@/lib/payment';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [error, setError] = useState('');

  const hasItems = items.length > 0;
  const itemsCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    if (!hasItems) {
      setError('Your cart is empty. Add at least one product to continue.');
      return;
    }

    setIsSubmitting(true);
    try {
      const paymentIntent = await createPaymentIntent({
        fullName,
        email,
        items: items.map((item) => ({ productId: item.product.id, quantity: item.quantity })),
        totalAmount: totalPrice,
      });
      setOrderId(paymentIntent.orderId);
      clearCart();
    } catch {
      setError('Unable to start payment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Secure Checkout</h1>
        <p className="text-sm text-slate-500 mt-1">Step 3 of 4: Confirm details and proceed to payment.</p>
      </div>

      {!hasItems && !orderId && (
        <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
          Your cart is currently empty. <Link href="/products" className="font-semibold underline">Browse products</Link> to continue.
        </div>
      )}

      {orderId ? (
        <section className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm p-8 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <CheckCircle2 size={26} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-4">Order created successfully</h2>
          <p className="text-slate-600 mt-2 text-sm">Your payment request is ready. Payment API integration can now replace this placeholder flow.</p>
          <p className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Order ID: {orderId}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/products" className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold">
              Continue Shopping
            </Link>
            <button onClick={() => router.push('/')} className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Back to Home
            </button>
          </div>
        </section>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">Your Details</h2>
            <div className="mt-5 space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  id="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                  placeholder="Jathin Sharma"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">Payment (placeholder)</p>
              <p className="text-xs text-slate-500 mt-1">
                Razorpay/Stripe/PayU integration can be connected using the `createPaymentIntent()` hook.
              </p>
            </div> */}

            {error && <p className="mt-4 text-sm text-rose-600">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting || !hasItems}
              className="mt-6 w-full inline-flex justify-center items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-semibold py-3 text-sm transition-colors"
            >
              <Lock size={16} />
              {isSubmitting ? 'Processing...' : 'Proceed to Pay'}
            </button>
          </form>

          <aside className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 h-fit">
            <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>
            <p className="text-xs text-slate-500 mt-1">{itemsCount} item(s) in this order</p>
            <div className="mt-5 space-y-3">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between text-sm">
                  <div className="min-w-0 pr-3">
                    <p className="font-medium text-slate-800 truncate">{item.product.name}</p>
                    <p className="text-slate-500 text-xs">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-slate-900">{formatINR(item.product.price * item.quantity)}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-800">Total</span>
              <span className="text-2xl font-bold text-slate-900">{formatINR(totalPrice)}</span>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
