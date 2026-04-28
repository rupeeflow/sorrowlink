'use client';

import { ShoppingCart, Check } from 'lucide-react';
import type { Product } from '@/data/products';
import { useCart } from '@/lib/cart-context';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <button
      onClick={() => addToCart(product)}
      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-colors ${
        inCart ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
      } ${className ?? ''}`}
    >
      {inCart ? (
        <>
          <Check size={16} />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart size={16} />
          Add to Cart
        </>
      )}
    </button>
  );
}
