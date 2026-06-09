import { CheckCircle2, Factory, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { PageShell } from "./PageShell";

const strengths = [
  {
    icon: PackageCheck,
    title: "DDP Shipping",
    text: "Door-to-door shipping support for easier import planning and market entry.",
  },
  {
    icon: Factory,
    title: "Custom Production",
    text: "OEM, ODM, model-fit customization and private label support for partners.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Quality",
    text: "Export-focused packaging, practical material selection and dependable production control.",
  },
  {
    icon: Truck,
    title: "Professional Service",
    text: "From sample order to bulk shipment, GLcamp supports clear communication and stable delivery.",
  },
];

export function BrandIntroPage() {
  return (
    <PageShell id="brand" eyebrow="Brand Introduction" title="Built For Premium Outdoor Mobility">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-lg leading-8 text-graphite">
            GLcamp focuses on RV accessories, pickup truck accessories, camping products and overland equipment for
            global buyers, dealers and vehicle conversion projects.
          </p>
          <p className="mt-5 text-lg leading-8 text-graphite">
            Our catalog is designed around products that are practical for real outdoor use: RV awnings, portable air
            conditioners, pickup truck canopies, tonneau covers, bed lift systems, trailer dollies, RV windows and
            accessory programs for pickup builds.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {["Premium", "Outdoor", "RV", "Pickup", "Overland", "Reliable"].map((word) => (
              <div key={word} className="flex items-center gap-3 border-l-2 border-forest-700 bg-forest-50 px-4 py-3">
                <CheckCircle2 className="h-5 w-5 text-forest-700" />
                <span className="font-bold text-ink">{word}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-stone-200 bg-stone-50">
          <img
            className="h-72 w-full object-cover"
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=82"
            alt="Overland pickup vehicle in an outdoor environment"
          />
          <div className="grid gap-0 divide-y divide-stone-200">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="grid grid-cols-[44px_1fr] gap-4 bg-white p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-forest-700 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-extrabold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-graphite">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
