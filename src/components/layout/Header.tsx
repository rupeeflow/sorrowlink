'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect, useMemo } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { searchProducts, Product } from '@/data/products';

export function Header() {
  const { totalItems } = useCart();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const results: Product[] = useMemo(() => {
    if (query.trim().length <= 1) return [];
    return searchProducts(query).slice(0, 6);
  }, [query]);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function handleSelect(slug: string) {
    setQuery('');
    setOpen(false);
    router.push(`/products/${slug}`);
  }

  const navLinks = [
    { href: '/products', label: 'All Products' },
    { href: '/products?category=antivirus-security', label: 'Security' },
    { href: '/products?category=developer-tools', label: 'Dev Tools' },
    { href: '/products?category=business-software', label: 'Business' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/company-logo.svg" alt="SoftMart" width={152} height={40} priority className="h-9 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 ml-4">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div ref={searchRef} className="flex-1 max-w-md relative mx-4 hidden sm:block">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => {
                  const nextQuery = e.target.value;
                  setQuery(nextQuery);
                  setOpen(nextQuery.trim().length > 1);
                }}
                placeholder="Search software…"
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border border-transparent focus:border-indigo-300 focus:bg-white focus:outline-none rounded-xl transition-all"
              />
            </div>
            {open && results.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50">
                {results.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect(p.slug)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-left transition-colors"
                  >
                    <span className="text-lg">{p.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800 truncate">{p.name}</p>
                      <p className="text-xs text-slate-400 truncate">{p.category}</p>
                    </div>
                    <span className="text-sm font-bold text-indigo-600 shrink-0">₹{p.price.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Cart */}
            <Link href="/cart" className="relative p-2 rounded-xl hover:bg-slate-100 transition-colors">
              <ShoppingCart size={20} className="text-slate-700" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </Link>

            <Link href="/checkout" className="hidden sm:inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors">
              Buy Now
            </Link>

            {/* Mobile menu button */}
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors">
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenu && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-100 space-y-1">
            {/* Mobile search */}
            <div className="relative mb-3">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => {
                  const nextQuery = e.target.value;
                  setQuery(nextQuery);
                  setOpen(nextQuery.trim().length > 1);
                }}
                placeholder="Search software…"
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 focus:outline-none rounded-xl"
              />
            </div>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileMenu(false)} className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">
                {l.label}
              </Link>
            ))}
            <Link href="/checkout" onClick={() => setMobileMenu(false)} className="block mt-2 text-center px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl">
              Buy Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
