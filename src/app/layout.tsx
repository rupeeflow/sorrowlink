import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'SoftMart – Genuine Software Licenses at Best Prices', template: '%s | SoftMart' },
  description: 'Buy genuine antivirus, productivity, developer, and business software licenses at the best prices. Instant digital delivery. 100% verified.',
  keywords: ['software license', 'antivirus', 'Windows 11', 'office suite', 'developer tools', 'buy software online India'],
  openGraph: { type: 'website', siteName: 'SoftMart', locale: 'en_IN' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-slate-50 antialiased">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
