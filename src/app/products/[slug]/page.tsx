import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { products, getProductBySlug, getRelatedProducts } from '@/data/products';
import { StarRating } from '@/components/ui/StarRating';
import { Badge, InstantDownloadBadge } from '@/components/ui/Badge';
import { ProductCard } from '@/components/ui/ProductCard';
import { formatINR, calculateDiscountPercent } from '@/lib/pricing';
import { AddToCartButton } from '@/components/ui/AddToCartButton';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} - ${formatINR(product.price)}`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);
  const discountPercent = calculateDiscountPercent(product.originalPrice, product.price);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/products" className="hover:text-indigo-600">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </div>

      <section className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl">{product.icon}</span>
            {product.badge && <Badge variant={product.badge} />}
            <InstantDownloadBadge />
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">{product.name}</h1>
          <p className="text-slate-600 mt-3 leading-relaxed">{product.description}</p>

          <div className="mt-4">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-slate-50 rounded-2xl border border-slate-100 p-5">
            <h3 className="text-base font-semibold text-slate-900">FAQs</h3>
            <div className="mt-3 space-y-3 text-sm">
              <p className="text-slate-700"><span className="font-semibold">How will I receive my license?</span> You get instant digital delivery via email right after payment.</p>
              <p className="text-slate-700"><span className="font-semibold">Is this a genuine license?</span> Yes, all software keys are verified and authentic.</p>
              <p className="text-slate-700"><span className="font-semibold">Can I get support during installation?</span> Yes, our support team is available 24/7.</p>
            </div>
          </div>
        </div>

        <aside className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 h-fit lg:sticky lg:top-24">
          <p className="text-sm text-slate-500 line-through">{formatINR(product.originalPrice)}</p>
          <p className="text-4xl font-bold text-slate-900 mt-1">{formatINR(product.price)}</p>
          <p className="inline-flex mt-2 text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-100 px-2 py-1 rounded-full">
            Save {discountPercent}% today
          </p>

          <div className="mt-5 space-y-3">
            <AddToCartButton product={product} />
            <Link href="/checkout" className="w-full inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl py-3 transition-colors">
              Buy Now <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-5 space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-600" /> Secure SSL checkout</p>
            <p>7-day refund policy</p>
            <p>Instant download after payment</p>
          </div>
        </aside>
      </section>

      <section className="mt-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Related Products</h2>
          <Link href={`/products?category=${product.categorySlug}`} className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
            View more in {product.category}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {relatedProducts.map((related) => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </section>
    </div>
  );
}
