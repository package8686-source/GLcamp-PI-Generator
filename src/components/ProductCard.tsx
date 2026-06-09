import { Mail, MessageCircle } from "lucide-react";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const whatsappText = encodeURIComponent(`Hello GLcamp, I would like to inquire about ${product.name} ${product.model}.`);

  return (
    <article className="print-avoid grid overflow-hidden rounded-sm border border-stone-200 bg-white sm:grid-cols-[220px_1fr]">
      <div className="bg-stone-100">
        <img className="h-full min-h-64 w-full object-cover" src={product.images[0].src} alt={product.images[0].alt} />
      </div>
      <div className="flex flex-col p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest-700">{product.category}</p>
            <h3 className="mt-2 font-display text-2xl font-extrabold tracking-normal text-ink">{product.name}</h3>
            <p className="mt-1 text-sm font-bold text-stone-500">Model: {product.model}</p>
          </div>
          <span className="w-fit rounded-sm bg-forest-50 px-3 py-2 text-xs font-bold uppercase text-forest-700">
            DDP Available
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-graphite">{product.description}</p>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-400">Main Specs</p>
            <dl className="mt-3 space-y-2 text-sm">
              {product.specs.slice(0, 4).map((spec) => (
                <div key={spec.label} className="grid grid-cols-[100px_1fr] gap-3">
                  <dt className="font-semibold text-ink">{spec.label}</dt>
                  <dd className="text-graphite">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-400">Commercial Details</p>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="grid grid-cols-[100px_1fr] gap-3">
                <dt className="font-semibold text-ink">Options</dt>
                <dd className="text-graphite">{product.optionalFeatures.slice(0, 3).join(", ")}</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-3">
                <dt className="font-semibold text-ink">Lead Time</dt>
                <dd className="text-graphite">{product.leadTime}</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-3">
                <dt className="font-semibold text-ink">Shipping</dt>
                <dd className="text-graphite">{product.shipping}</dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="mt-5 border-l-2 border-forest-700 bg-forest-50 px-4 py-3 text-sm font-semibold leading-6 text-forest-900">
          {product.ddp}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <a className="btn-primary text-xs" href={`https://wa.me/8618520119770?text=${whatsappText}`}>
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a className="btn-secondary text-xs" href={`mailto:gltruckcamp@gzgreenlight.com?subject=${encodeURIComponent(product.model + " Inquiry")}`}>
            <Mail className="h-4 w-4" />
            Email Inquiry
          </a>
        </div>
      </div>
    </article>
  );
}
