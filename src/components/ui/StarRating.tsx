import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md';
}

export function StarRating({ rating, reviewCount, size = 'sm' }: StarRatingProps) {
  const starSize = size === 'sm' ? 12 : 16;
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={starSize}
            className={star <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}
          />
        ))}
      </div>
      <span className={`${size === 'sm' ? 'text-xs' : 'text-sm'} text-slate-500 font-medium`}>
        {rating.toFixed(1)}
        {reviewCount !== undefined && (
          <span className="text-slate-400 font-normal"> ({reviewCount.toLocaleString()})</span>
        )}
      </span>
    </div>
  );
}
