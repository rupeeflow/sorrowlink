interface BadgeProps {
  variant: 'Popular' | 'Best Value' | 'New' | 'Top Selling';
}

const styles: Record<string, string> = {
  Popular: 'bg-indigo-100 text-indigo-700 border border-indigo-200',
  'Best Value': 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  New: 'bg-sky-100 text-sky-700 border border-sky-200',
  'Top Selling': 'bg-amber-100 text-amber-700 border border-amber-200',
};

export function Badge({ variant }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide ${styles[variant]}`}>
      {variant}
    </span>
  );
}

export function InstantDownloadBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
      ⚡ Instant Download
    </span>
  );
}
