import { useMemo, useRef, useState } from "react";
import { BrandIntroPage } from "./components/BrandIntroPage";
import { CatalogToolbar } from "./components/CatalogToolbar";
import { CategoryNavigationPage } from "./components/CategoryNavigationPage";
import { ClosingPage } from "./components/ClosingPage";
import { CoverPage } from "./components/CoverPage";
import { PageShell } from "./components/PageShell";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { ProductShowcasePage } from "./components/ProductShowcasePage";
import { products, type Product, type ProductCategory } from "./data/products";

const PRODUCTS_PER_SHOWCASE_PAGE = 2;

function App() {
  const catalogRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "All Products">("All Products");
  const [query, setQuery] = useState("");
  const [isExporting, setIsExporting] = useState(false);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [product.name, product.model, product.category, product.description].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        );

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  const productPages = useMemo(() => chunkArray(filteredProducts, PRODUCTS_PER_SHOWCASE_PAGE), [filteredProducts]);

  function handlePrint() {
    window.print();
  }

  async function handleDownloadPdf() {
    if (!catalogRef.current) return;

    setIsExporting(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      await html2pdf()
        .set({
          filename: "GLcamp-Product-Catalog-2026.pdf",
          image: { type: "jpeg", quality: 0.96 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            scrollY: 0,
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },
          pagebreak: {
            mode: ["css", "legacy"],
            avoid: [".print-avoid"],
          },
        })
        .from(catalogRef.current)
        .save();
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <>
      <CatalogToolbar
        selectedCategory={selectedCategory}
        query={query}
        resultCount={filteredProducts.length}
        isExporting={isExporting}
        onCategoryChange={setSelectedCategory}
        onQueryChange={setQuery}
        onPrint={handlePrint}
        onDownloadPdf={handleDownloadPdf}
      />

      <main className="catalog-shell px-4 py-8 sm:px-6 lg:px-8">
        <div ref={catalogRef}>
          <CoverPage />
          <BrandIntroPage />
          <CategoryNavigationPage selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

          {filteredProducts.length > 0 ? (
            productPages.map((pageProducts, index) => (
              <ProductShowcasePage
                key={pageProducts.map((product) => product.id).join("-")}
                products={pageProducts}
                pageIndex={index}
                totalPages={productPages.length}
              />
            ))
          ) : (
            <PageShell id="products" eyebrow="Selected Products" title="No Matching Products">
              <div className="flex min-h-96 items-center justify-center rounded-sm border border-dashed border-stone-300 bg-stone-50 p-10 text-center">
                <div>
                  <p className="font-display text-3xl font-extrabold text-ink">No product matched your current filter.</p>
                  <p className="mt-3 text-graphite">Clear the search or choose another category to continue browsing.</p>
                </div>
              </div>
            </PageShell>
          )}

          {filteredProducts.map((product) => (
            <ProductDetailPage key={product.id} product={product} />
          ))}

          <ClosingPage />
        </div>
      </main>
    </>
  );
}

function chunkArray<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

export default App;
