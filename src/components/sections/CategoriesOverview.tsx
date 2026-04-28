import Link from 'next/link';
import { categories } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export function CategoriesOverview() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Browse by Category</h2>
          <p className="text-slate-500 mt-2 text-sm max-w-md mx-auto">
            Find exactly what you need from our curated software categories.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group flex flex-col items-center gap-3 p-5 bg-slate-50 hover:bg-white rounded-2xl border border-transparent hover:border-slate-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 leading-tight">{cat.name}</p>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center justify-center gap-1 group-hover:text-indigo-500 transition-colors">
                  Browse <ArrowRight size={10} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
