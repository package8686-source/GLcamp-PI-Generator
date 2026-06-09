import type { ReactNode } from "react";

type PageShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function PageShell({ id, eyebrow, title, children, className = "" }: PageShellProps) {
  return (
    <section id={id} className={`ebook-page ${className}`}>
      {(eyebrow || title) && (
        <header className="mb-8 flex items-end justify-between gap-6 border-b border-stone-200 pb-5">
          <div>
            {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.22em] text-forest-700">{eyebrow}</p>}
            {title && <h2 className="mt-2 font-display text-3xl font-extrabold tracking-normal text-ink">{title}</h2>}
          </div>
          <span className="hidden text-sm font-semibold uppercase text-stone-400 sm:block">GLcamp</span>
        </header>
      )}
      {children}
    </section>
  );
}
