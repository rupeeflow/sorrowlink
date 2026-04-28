'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Suspense } from 'react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initCategory);
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = products;
    if (selectedCategory !== 'all') result = result.filter((p) => p.categorySlug === selectedCategory);
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    result = result.filter((p) => p.rating >= minRating);
    switch (sortBy) {
      case 'low-high': result = [...result].sort((a, b) => a.price - b.price); break;
      case 'high-low': result = [...result].sort((a, b) => b.price - a.price); break;
      case 'rating': result = [...result].sort((a, b) => b.rating - a.rating); break;
      case 'popular': result = [...result].sort((a, b) => b.reviewCount - a.reviewCount); break;
    }
    return result;
  }, [selectedCategory, sortBy, priceRange, minRating]);

  const currentCategory = categories.find((c) => c.slug === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          {currentCategory ? currentCategory.name : 'All Software Products'}
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          {currentCategory ? currentCategory.description : 'Browse our full catalog of genuine software licenses.'}
          <span className="ml-2 font-medium text-slate-700">({filtered.length} products)</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-60 shrink-0">
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <SlidersHorizontal size={16} /> Filters <ChevronDown size={14} className={`ml-auto transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            {/* Category filter */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h3 className="font-semibold text-slate-800 text-sm mb-4">Category</h3>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-colors ${selectedCategory === 'all' ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-colors flex items-center gap-2 ${selectedCategory === cat.slug ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    <span>{cat.icon}</span> {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h3 className="font-semibold text-slate-800 text-sm mb-4">Price Range</h3>
              <div className="space-y-2">
                {[
                  { label: 'All Prices', range: [0, 5000] as [number, number] },
                  { label: 'Budget (₹0 – ₹800)', range: [0, 800] as [number, number] },
                  { label: 'Mid-tier (₹800 – ₹2000)', range: [800, 2000] as [number, number] },
                  { label: 'Premium (₹2000+)', range: [2000, 5000] as [number, number] },
                ].map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setPriceRange(opt.range)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-colors ${
                      priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1]
                        ? 'bg-indigo-50 text-indigo-700 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating filter */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h3 className="font-semibold text-slate-800 text-sm mb-4">Rating</h3>
              <div className="space-y-2">
                {[
                  { label: 'All Ratings', value: 0 },
                  { label: '4.5★ & above', value: 4.5 },
                  { label: '4.0★ & above', value: 4 },
                  { label: '3.5★ & above', value: 3.5 },
                ].map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setMinRating(opt.value)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-colors ${
                      minRating === opt.value ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort bar */}
          <div className="flex items-center justify-between mb-5 bg-white rounded-xl border border-slate-100 px-4 py-3">
            <span className="text-sm text-slate-500">{filtered.length} results</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-medium text-slate-700 bg-transparent border-none outline-none cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-semibold text-slate-600">No products found</p>
              <p className="text-sm mt-1">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-400">Loading products…</div>}>
      <ProductsContent />
    </Suspense>
  );
}
