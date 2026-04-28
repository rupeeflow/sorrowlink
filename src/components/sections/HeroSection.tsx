import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)', backgroundSize: '48px 48px' }}
      />
      {/* Gradient blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-600 rounded-full opacity-20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full opacity-20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            <Zap size={14} className="text-amber-400" />
            Instant Digital Delivery — No Shipping Needed
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Genuine Software
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">
              Licenses at Best
            </span>
            Prices in India
          </h1>

          <p className="text-indigo-200 text-lg sm:text-xl mb-8 max-w-xl leading-relaxed">
            Antivirus, Office suites, Developer tools, Windows licenses & more. 100% verified. Activate instantly. Backed by our 7-day refund guarantee.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-900/40 text-base"
            >
              Browse Software <ArrowRight size={18} />
            </Link>
            <Link
              href="/products?category=antivirus-security"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-colors text-base backdrop-blur-sm"
            >
              View Antivirus Deals
            </Link>
          </div>

          {/* Social proof row */}
          <div className="flex flex-wrap gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>10,000+ Licenses Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="fill-amber-400 text-amber-400" />
              <span>4.7/5 from 8,000+ reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-sky-400" />
              <span>Delivery in under 2 minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating product cards (decorative) */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 pr-8 space-y-4 opacity-80">
        {[
          { icon: '🛡️', name: 'QuickShield Pro', price: '₹499', badge: 'Popular' },
          { icon: '💻', name: 'CodeEditor Pro', price: '₹599', badge: 'Top Selling' },
          { icon: '🖥️', name: 'Windows 11 Pro', price: '₹3,499', badge: '' },
        ].map((card, i) => (
          <div
            key={card.name}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-56 shadow-xl"
            style={{ transform: `translateX(${i % 2 === 0 ? '0' : '24px'})` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl">
                {card.icon}
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">{card.name}</p>
                <p className="text-indigo-300 text-xs font-bold">{card.price}</p>
              </div>
            </div>
            {card.badge && (
              <span className="mt-2 inline-block text-[11px] font-semibold bg-indigo-500/40 text-indigo-200 px-2 py-0.5 rounded-full">
                {card.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
