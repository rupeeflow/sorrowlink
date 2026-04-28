import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Arjun Sharma', role: 'Freelance Developer, Mumbai', avatar: 'AS', rating: 5, text: 'Bought CodeEditor Pro and Windows 11 Pro. Both activated instantly. The keys were 100% genuine and delivery was under 60 seconds. SoftMart is my go-to now.' },
  { name: 'Priya Mehta', role: 'Small Business Owner, Delhi', rating: 5, avatar: 'PM', text: 'InvoicePro Business is exactly what I needed for GST billing. Got it at ₹1,299 vs ₹1,999 elsewhere. Checkout was super smooth with UPI.' },
  { name: 'Rohit Verma', role: 'IT Manager, Bangalore', rating: 5, avatar: 'RV', text: 'We bought SecureGuard Ultimate for our team. Setup was simple, VPN works great. The enterprise pricing makes sense for 3 devices. Highly recommend.' },
  { name: 'Sneha Iyer', role: 'Graphic Designer, Pune', rating: 4, avatar: 'SI', text: 'PDF Master Suite at ₹399 is an absolute steal. Does everything I need — editing, merging, converting. No subscriptions, lifetime license. Love it!' },
  { name: 'Karan Gupta', role: 'Startup Founder, Hyderabad', rating: 5, avatar: 'KG', text: 'ProjectFlow Pro transformed how our 5-person team collaborates. The Kanban view + Gantt charts combo is amazing. Best ₹1,999 I spent this year.' },
  { name: 'Ananya Roy', role: 'CA & Tax Consultant, Kolkata', rating: 5, avatar: 'AR', text: 'AccountingPro handles our GSTR filing seamlessly. Support team responded in 20 minutes when I had a question. Genuinely impressed by the service.' },
];

export function Testimonials() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Loved by 10,000+ customers</h2>
          <p className="text-slate-400 mt-2 text-sm">Real reviews from real buyers across India.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={14} className={s <= t.rating ? 'fill-amber-400 text-amber-400' : 'fill-white/10 text-white/10'} />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
