interface PolicyLayoutProps {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}

export function PolicyLayout({ title, updatedAt, children }: PolicyLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h1>
        <p className="text-sm text-slate-500 mt-1">Last updated: {updatedAt}</p>
      </header>
      <article className="bg-white border border-slate-100 rounded-3xl shadow-sm p-6 sm:p-8 text-slate-700 leading-relaxed space-y-4">
        {children}
      </article>
    </div>
  );
}
