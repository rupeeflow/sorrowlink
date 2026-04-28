import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { CategoriesOverview } from '@/components/sections/CategoriesOverview';
import { TrustSignals } from '@/components/sections/TrustSignals';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTABanner } from '@/components/sections/CTABanner';
import { getTopSellingProducts } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Flame } from 'lucide-react';

export default function HomePage() {
  const topSelling = getTopSellingProducts();
  return (
    <>
      <HeroSection />
      <TrustSignals />
      <CategoriesOverview />
      <FeaturedProducts />
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-8">
            <Flame size={22} className="text-rose-500" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Top Selling This Month</h2>
              <p className="text-slate-500 text-sm mt-0.5">Most purchased by our customers.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topSelling.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <CTABanner />
    </>
  );
}
