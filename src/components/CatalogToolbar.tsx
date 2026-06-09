import { Download, Globe2, Mail, Printer, Search } from "lucide-react";
import { productCategories, type ProductCategory } from "../data/products";
import { Logo } from "./Logo";

type CatalogToolbarProps = {
  selectedCategory: ProductCategory | "All Products";
  query: string;
  resultCount: number;
  isExporting: boolean;
  onCategoryChange: (category: ProductCategory | "All Products") => void;
  onQueryChange: (query: string) => void;
  onPrint: () => void;
  onDownloadPdf: () => void;
};

export function CatalogToolbar({
  selectedCategory,
  query,
  resultCount,
  isExporting,
  onCategoryChange,
  onQueryChange,
  onPrint,
  onDownloadPdf,
}: CatalogToolbarProps) {
  return (
    <div className="no-print sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <a href="#cover" aria-label="Go to cover">
            <Logo compact />
          </a>

          <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-graphite">
            <a className="hover:text-forest-700" href="#brand">
              Brand
            </a>
            <a className="hover:text-forest-700" href="#categories">
              Categories
            </a>
            <a className="hover:text-forest-700" href="#products">
              Products
            </a>
            <a className="hover:text-forest-700" href="#contact">
              Contact
            </a>
            <a className="inline-flex items-center gap-1 hover:text-forest-700" href="https://gltruckcamp.com">
              <Globe2 className="h-4 w-4" />
              gltruckcamp.com
            </a>
            <a className="inline-flex items-center gap-1 hover:text-forest-700" href="mailto:gltruckcamp@gzgreenlight.com">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </nav>

          <div className="flex flex-wrap gap-2">
            <button className="btn-secondary" type="button" onClick={onPrint}>
              <Printer className="h-4 w-4" />
              Print / PDF
            </button>
            <button className="btn-primary" type="button" onClick={onDownloadPdf} disabled={isExporting}>
              <Download className="h-4 w-4" />
              {isExporting ? "Preparing..." : "Download PDF"}
            </button>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[minmax(260px,380px)_1fr_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              className="w-full rounded-sm border border-stone-300 bg-white py-3 pl-10 pr-4 text-sm text-ink outline-none transition focus:border-forest-700 focus:ring-2 focus:ring-forest-100"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search product name or model"
              type="search"
            />
          </label>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {(["All Products", ...productCategories] as const).map((category) => (
              <button
                key={category}
                className={[
                  "shrink-0 rounded-sm border px-3 py-2 text-xs font-bold uppercase transition",
                  selectedCategory === category
                    ? "border-forest-700 bg-forest-700 text-white"
                    : "border-stone-300 bg-white text-graphite hover:border-forest-700 hover:text-forest-700",
                ].join(" ")}
                type="button"
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="text-sm font-semibold text-stone-500">{resultCount} products shown</p>
        </div>
      </div>
    </div>
  );
}
