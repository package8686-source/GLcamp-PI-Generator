import { Logo } from "./Logo";
import { QRPlaceholder } from "./QRPlaceholder";

export function CoverPage() {
  return (
    <section id="cover" className="ebook-page relative overflow-hidden bg-forest-900 p-0 text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=86"
        alt="Premium outdoor camping landscape for GLcamp catalog cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,28,18,0.92),rgba(11,28,18,0.64),rgba(11,28,18,0.18))]" />
      <div className="relative flex min-h-[inherit] flex-col p-8 sm:p-12 lg:p-16">
        <Logo light />

        <div className="max-w-3xl pb-12 pt-20 sm:pt-28 lg:pt-32">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-white/75">Premium Outdoor Product Program</p>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-none tracking-normal sm:text-6xl lg:text-7xl">
            GLcamp Product Catalog 2026
          </h1>
          <p className="mt-7 text-3xl font-extrabold tracking-normal">GO LIMITLESS</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.82]">
            RV accessories, pickup truck accessories, camping and overland products with reliable production support and
            DDP shipping solutions.
          </p>
        </div>

        <div className="mt-auto flex flex-col justify-between gap-8 border-t border-white/25 pt-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-white/60">Website</p>
            <p className="mt-2 text-2xl font-bold">gltruckcamp.com</p>
          </div>
          <QRPlaceholder label="Website / WhatsApp" light />
        </div>
      </div>
    </section>
  );
}
