import { ShieldCheck, Zap, RefreshCw, CreditCard, Headphones, Award } from 'lucide-react';

const signals = [
  { icon: ShieldCheck, label: '100% Genuine', desc: 'All licenses are verified authentic', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Zap, label: 'Instant Delivery', desc: 'License key delivered in under 2 min', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: RefreshCw, label: '7-Day Refund', desc: 'Not satisfied? Full refund guaranteed', color: 'text-sky-600', bg: 'bg-sky-50' },
  { icon: CreditCard, label: 'Secure Payment', desc: 'UPI, Cards, Net Banking & Wallets', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Headphones, label: '24/7 Support', desc: 'Help via chat, email, and phone', color: 'text-violet-600', bg: 'bg-violet-50' },
  { icon: Award, label: '10,000+ Orders', desc: 'Trusted by thousands of customers', color: 'text-rose-600', bg: 'bg-rose-50' },
];

export function TrustSignals() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {signals.map(({ icon: Icon, label, desc, color, bg }) => (
          <div key={label} className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center mb-3`}>
              <Icon size={20} className={color} />
            </div>
            <p className="text-slate-800 font-semibold text-sm">{label}</p>
            <p className="text-slate-400 text-xs mt-1 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
