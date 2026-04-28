import { Mail, Phone, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Contact Us</h1>
      <p className="text-sm text-slate-500 mt-1">Need help with activation, billing, or pre-sales? We are here 24/7.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <section className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-5">
          <h2 className="text-lg font-semibold text-slate-900">Support Channels</h2>
          <div className="space-y-4 text-sm text-slate-700">
            <p className="flex items-center gap-2"><Mail size={16} className="text-indigo-600" /> support@softmart.in</p>
            <p className="flex items-center gap-2"><Phone size={16} className="text-indigo-600" /> +91 9207966059</p>
            <p className="flex items-center gap-2"><MessageSquare size={16} className="text-indigo-600" /> WhatsApp: +91 9207966059</p>
            <p className="text-slate-600">No. 16, Shop No. 2, 7th Cross Road, 6th Main, Narayana Gowda Layout, BTM Layout 1st Stage, Tavarekere, Bengaluru, Karnataka 560029</p>
            <p className="flex items-center gap-2"><MessageSquare size={16} className="text-indigo-600" /> Live chat in checkout flow (coming soon)</p>
            <p className="flex items-center gap-2"><Clock size={16} className="text-indigo-600" /> 24/7 priority response</p>
          </div>
        </section>

        <section className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Quick Contact Form</h2>
          <form className="mt-4 space-y-3">
            <input className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Your name" />
            <input className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Your email" />
            <textarea className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 min-h-28" placeholder="How can we help?" />
            <button type="button" className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
