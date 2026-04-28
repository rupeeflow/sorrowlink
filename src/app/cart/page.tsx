'use client';

import Link from 'next/link';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { formatINR } from '@/lib/pricing';

export default function CartPage() {
  const { items, totalPrice, removeFromCart, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
          <ShoppingBag size={28} className="text-slate-500" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Your cart is empty</h1>
        <p className="text-slate-500 mt-2">Browse software products and add your first license.</p>
        <Link href="/products" className="inline-flex mt-6 items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 rounded-xl">
          Browse Software <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Your Cart</h1>
      <p className="text-sm text-slate-500 mt-1">Review items and proceed to secure checkout.</p>

      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        <section className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <article key={product.id} className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl">{product.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h2 className="text-base font-semibold text-slate-900">{product.name}</h2>
                      <p className="text-sm text-slate-500 mt-0.5">{product.category}</p>
                    </div>
                    <button onClick={() => removeFromCart(product.id)} className="text-slate-400 hover:text-rose-600 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-xl border border-slate-200 overflow-hidden">
                      <button
                        onClick={() => updateQuantity(product.id, Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-slate-600 hover:bg-slate-50"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center text-sm font-semibold text-slate-800">{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, quantity + 1)} className="px-3 py-2 text-slate-600 hover:bg-slate-50">
                        <Plus size={14} />
                      </button>
                    </div>

                    <p className="text-lg font-bold text-slate-900">{formatINR(product.price * quantity)}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm h-fit lg:sticky lg:top-24">
          <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between text-slate-600">
              <span>Subtotal</span>
              <span>{formatINR(totalPrice)}</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Delivery</span>
              <span className="text-emerald-600 font-semibold">Free (Digital)</span>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-800">Total</span>
              <span className="text-xl font-bold text-slate-900">{formatINR(totalPrice)}</span>
            </div>
          </div>

          <Link href="/checkout" className="mt-6 w-full inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl py-3 transition-colors">
            Proceed to Checkout <ArrowRight size={16} />
          </Link>
          <Link href="/products" className="mt-3 w-full inline-flex justify-center text-sm font-semibold text-indigo-600 hover:text-indigo-700">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
