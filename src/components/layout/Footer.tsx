import Link from 'next/link';
import Image from 'next/image';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const productLinks = [
  { href: '/products?category=antivirus-security', label: 'Antivirus & Security' },
  { href: '/products?category=productivity-tools', label: 'Productivity Tools' },
  { href: '/products?category=developer-tools', label: 'Developer Tools' },
  { href: '/products?category=business-software', label: 'Business Software' },
  { href: '/products?category=operating-systems', label: 'Operating Systems' },
  { href: '/products?category=utility-software', label: 'Utility Software' },
];

const policyLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/refund-policy', label: 'Refund Policy' },
  { href: '/delivery-policy', label: 'Delivery Policy' },
  { href: '/contact', label: 'Contact Us' },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/company-logo.svg" alt="SoftMart" width={152} height={40} className="h-9 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Genuine software licenses at the best prices. Instant digital delivery. 100% verified products with secure checkout.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-indigo-400 shrink-0" />
                <span>support@softmart.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-indigo-400 shrink-0" />
                <span>+91 9207966059</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                <span>No. 16, Shop No. 2, 7th Cross Road, 6th Main, Narayana Gowda Layout, BTM Layout 1st Stage, Tavarekere, Bengaluru, Karnataka 560029</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Policies</h4>
            <ul className="space-y-2.5">
              {policyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Why SoftMart?</h4>
            <ul className="space-y-3 text-sm">
              {[
                { icon: '🔒', text: 'SSL Secured Checkout' },
                { icon: '✅', text: '100% Genuine Licenses' },
                { icon: '⚡', text: 'Instant Digital Delivery' },
                { icon: '🔄', text: '7-Day Refund Policy' },
                { icon: '💳', text: 'UPI, Cards, Net Banking' },
                { icon: '🎧', text: '24/7 Customer Support' },
              ].map((t) => (
                <li key={t.text} className="flex items-center gap-2">
                  <span>{t.icon}</span>
                  <span>{t.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} SoftMart. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-500">
            <Shield size={14} className="text-emerald-500" />
            <span>Secured by 256-bit SSL encryption</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
