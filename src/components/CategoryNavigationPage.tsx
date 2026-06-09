import { ArrowRight } from "lucide-react";
import { categoryNotes, productCategories, type ProductCategory } from "../data/products";
import { PageShell } from "./PageShell";

type CategoryNavigationPageProps = {
  selectedCategory: ProductCategory | "All Products";
  onCategoryChange: (category: ProductCategory | "All Products") => void;
};

export function CategoryNavigationPage({ selectedCategory, onCategoryChange }: CategoryNavigationPageProps) {
  return (
    <PageShell id="categories" eyebrow="Catalog Navigation" title="Product Categories">
      <div className="grid gap-4 sm:grid-cols-2">
        {productCategories.map((category, index) => (
          <button
            key={category}
            className={[
              "group print-avoid flex min-h-32 flex-col justify-between rounded-sm border p-5 text-left transition",
              selectedCategory === category
                ? "border-forest-700 bg-forest-700 text-white"
                : "border-stone-200 bg-white text-ink hover:border-forest-700 hover:bg-forest-50",
            ].join(" ")}
            type="button"
            onClick={() => onCategoryChange(category)}
          >
            <span
              className={[
                "text-xs font-bold uppercase tracking-[0.2em]",
                selectedCategory === category ? "text-white/60" : "text-forest-700",
              ].join(" ")}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="block font-display text-2xl font-extrabold tracking-normal">{category}</span>
              <span className={["mt-3 block text-sm leading-6", selectedCategory === category ? "text-white/75" : "text-graphite"].join(" ")}>
                {categoryNotes[category]}
              </span>
            </span>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
              View products
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </button>
        ))}
      </div>
    </PageShell>
  );
}
