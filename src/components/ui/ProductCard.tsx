'use client';

import Link from 'next/link';
import { ShoppingCart, Check } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/lib/cart-context';
import { StarRating } from './StarRating';
import { Badge, InstantDownloadBadge } from './Badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Discount ribbon */}
      {discount > 0 && (
        <div className="absolute top-3 right-3 z-10 bg-rose-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
          -{discount}%
        </div>
      )}

      {/* Icon area */}
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 px-6 pt-6 pb-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-2xl">
          {product.icon}
        </div>
        <div className="flex flex-col gap-1">
          {product.badge && <Badge variant={product.badge} />}
          <InstantDownloadBadge />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pb-5 pt-3 gap-3">
        <div>
          <Link href={`/products/${product.slug}`} className="hover:text-indigo-600 transition-colors">
            <h3 className="font-semibold text-slate-800 text-[15px] leading-snug">{product.name}</h3>
          </Link>
          <p className="text-slate-500 text-xs mt-1 line-clamp-2 leading-relaxed">{product.shortDescription}</p>
        </div>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mt-auto pt-2 border-t border-slate-100">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] text-slate-400 line-through">₹{product.originalPrice.toLocaleString()}</p>
              <p className="text-xl font-bold text-slate-900">
                ₹{product.price.toLocaleString()}
              </p>
            </div>
            <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Save ₹{(product.originalPrice - product.price).toLocaleString()}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className={`mt-3 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
              inCart
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-default'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-indigo-200 hover:shadow-md'
            }`}
          >
            {inCart ? (
              <><Check size={15} /> Added to Cart</>
            ) : (
              <><ShoppingCart size={15} /> Add to Cart</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
