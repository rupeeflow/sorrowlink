import { getFeaturedProducts } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface FeaturedProductsProps {
  title?: string;
  subtitle?: string;
  showLink?: boolean;
}

export function FeaturedProducts({
  title = 'Featured Products',
  subtitle = 'Handpicked software deals with the biggest discounts.',
  showLink = true,
}: FeaturedProductsProps) {
  const products = getFeaturedProducts();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
          <p className="text-slate-500 mt-1 text-sm">{subtitle}</p>
        </div>
        {showLink && (
          <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-indigo-600 font-semibold text-sm hover:gap-2.5 transition-all">
            View all <ArrowRight size={15} />
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
