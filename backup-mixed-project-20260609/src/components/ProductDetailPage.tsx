import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import type { Product } from "../data/products";
import { PageShell } from "./PageShell";
import { QRPlaceholder } from "./QRPlaceholder";

type ProductDetailPageProps = {
  product: Product;
};

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  const whatsappText = encodeURIComponent(`Hello GLcamp, please send details and quotation for ${product.name} ${product.model}.`);

  return (
    <PageShell eyebrow={product.category} title={product.name}>
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="overflow-hidden rounded-sm border border-stone-200 bg-stone-100">
            <img className="h-[440px] w-full object-cover" src={product.images[0].src} alt={product.images[0].alt} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {product.images.slice(1, 3).map((image) => (
              <img
                key={image.src}
                className="h-32 w-full rounded-sm border border-stone-200 object-cover"
                src={image.src}
                alt={image.alt}
              />
            ))}
            {product.images.length < 2 && (
              <div className="flex h-32 items-center justify-center rounded-sm border border-dashed border-stone-300 text-sm font-semibold text-stone-400">
                Image Slot
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-forest-700">Model {product.model}</p>
          <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-normal text-ink">{product.tagline}</h3>
          <p className="mt-5 text-base leading-7 text-graphite">{product.description}</p>

          <div className="mt-7 space-y-3">
            {product.highlights.map((highlight) => (
              <div key={highlight} className="flex gap-3">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-forest-700" />
                <p className="text-sm font-semibold leading-6 text-ink">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a className="btn-primary justify-center" href={`https://wa.me/8618520119770?text=${whatsappText}`}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              className="btn-secondary justify-center"
              href={`mailto:gltruckcamp@gzgreenlight.com?subject=${encodeURIComponent(product.model + " Product Inquiry")}`}
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="print-avoid rounded-sm border border-stone-200">
          <div className="border-b border-stone-200 bg-stone-50 px-5 py-3">
            <h4 className="font-display text-lg font-extrabold text-ink">Specification</h4>
          </div>
          <dl className="divide-y divide-stone-200">
            {product.specs.map((spec) => (
              <div key={spec.label} className="grid grid-cols-[150px_1fr] gap-4 px-5 py-3 text-sm">
                <dt className="font-bold text-ink">{spec.label}</dt>
                <dd className="text-graphite">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-4">
          <InfoBlock title="Optional Features" items={product.optionalFeatures} />
          <InfoBlock title="Suitable For / Application" items={product.applications} />
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_320px]">
        <div className="rounded-sm bg-forest-50 p-5">
          <h4 className="font-display text-lg font-extrabold text-ink">Packaging & Delivery</h4>
          <div className="mt-3 grid gap-3 text-sm leading-6 text-graphite sm:grid-cols-3">
            <p>
              <strong className="block text-ink">Packaging</strong>
              {product.packaging}
            </p>
            <p>
              <strong className="block text-ink">Production Time</strong>
              {product.leadTime}
            </p>
            <p>
              <strong className="block text-ink">Shipping</strong>
              {product.shipping}
            </p>
          </div>
          <p className="mt-4 border-l-2 border-forest-700 pl-4 text-sm font-semibold leading-6 text-forest-900">{product.ddp}</p>
        </div>
        <div className="rounded-sm border border-stone-200 p-5">
          <QRPlaceholder label="Inquiry QR" />
        </div>
      </div>
    </PageShell>
  );
}

type InfoBlockProps = {
  title: string;
  items: string[];
};

function InfoBlock({ title, items }: InfoBlockProps) {
  return (
    <div className="print-avoid rounded-sm border border-stone-200 p-5">
      <h4 className="font-display text-lg font-extrabold text-ink">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-graphite">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-700" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
