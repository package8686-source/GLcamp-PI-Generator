import type { Product } from "../data/products";
import { PageShell } from "./PageShell";
import { ProductCard } from "./ProductCard";

type ProductShowcasePageProps = {
  products: Product[];
  pageIndex: number;
  totalPages: number;
};

export function ProductShowcasePage({ products, pageIndex, totalPages }: ProductShowcasePageProps) {
  const title = totalPages > 1 ? `Product Showcase ${pageIndex + 1}/${totalPages}` : "Product Showcase";

  return (
    <PageShell id={pageIndex === 0 ? "products" : undefined} eyebrow="Selected Products" title={title}>
      <div className="space-y-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageShell>
  );
}
