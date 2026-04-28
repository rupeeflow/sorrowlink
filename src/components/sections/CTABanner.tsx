import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="relative bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl overflow-hidden px-8 py-12 text-white text-center shadow-2xl shadow-indigo-200">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium mb-5 border border-white/20">
            <Zap size={14} className="text-amber-300" /> Limited Time Deals — Up to 60% Off
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 tracking-tight">
            Don&apos;t miss today&apos;s software deals
          </h2>
          <p className="text-indigo-200 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Browse 50+ genuine software products across 6 categories. Instant delivery, secure checkout, 7-day refund guarantee.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-7 py-3 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg">
              Shop Now <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3 rounded-xl border border-white/20 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
