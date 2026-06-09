export const productCategories = [
  "RV Awnings",
  "Portable Air Conditioners",
  "Pickup Truck Canopies",
  "Tonneau Covers",
  "Bed Lift Systems",
  "Trailer Dollies",
  "RV Windows",
  "Pickup Accessories",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  category: ProductCategory;
  name: string;
  model: string;
  tagline: string;
  description: string;
  images: ProductImage[];
  specs: ProductSpec[];
  optionalFeatures: string[];
  leadTime: string;
  shipping: string;
  ddp: string;
  highlights: string[];
  packaging: string;
  applications: string[];
};

export const categoryNotes: Record<ProductCategory, string> = {
  "RV Awnings": "Cassette awnings and outdoor shade systems for RVs, vans and caravans.",
  "Portable Air Conditioners": "Compact climate solutions for camping, RV, tent and overland use.",
  "Pickup Truck Canopies": "Premium canopy shells designed for pickup touring and commercial utility.",
  "Tonneau Covers": "Hard and soft bed covers for secure cargo protection and daily pickup use.",
  "Bed Lift Systems": "Space-saving lift systems for camper vans, trailers and customized interiors.",
  "Trailer Dollies": "Electric and manual moving solutions for trailers, caravans and workshops.",
  "RV Windows": "Sliding, awning and bonded windows for RV, camper and specialty vehicle builds.",
  "Pickup Accessories": "Overland-ready exterior and cargo accessories for pickup truck builds.",
};

export const products: Product[] = [
  {
    id: "rv-awning-450",
    category: "RV Awnings",
    name: "Premium Cassette RV Awning",
    model: "GL-RA450",
    tagline: "Clean shade system for RV, caravan and overland builds.",
    description:
      "A refined cassette awning built for outdoor comfort, clean side-wall integration and reliable touring use.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=82",
        alt: "Outdoor camping landscape suitable for RV awning presentation",
      },
      {
        src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=82",
        alt: "Premium camping shade scene",
      },
    ],
    specs: [
      { label: "Length", value: "2.5 m / 3.0 m / 3.5 m / 4.5 m optional" },
      { label: "Fabric", value: "UV-resistant waterproof outdoor fabric" },
      { label: "Frame", value: "Aluminum alloy cassette and support arms" },
      { label: "Operation", value: "Manual or motorized optional" },
    ],
    optionalFeatures: ["LED light strip", "Side privacy wall", "Motorized control", "Custom color housing"],
    leadTime: "15-25 days after order confirmation",
    shipping: "Sea freight, air freight or consolidated shipment",
    ddp: "DDP shipping available for USA, EU, UK, Australia and selected markets.",
    highlights: [
      "Premium cassette design with clean exterior appearance",
      "Stable support arms for touring and camping use",
      "Custom length and housing color available",
      "Suitable for RV manufacturers, dealers and retrofit projects",
    ],
    packaging: "Export carton with foam protection. Pallet packaging available for bulk orders.",
    applications: ["Motorhomes", "Caravans", "Camper vans", "Overland vehicles"],
  },
  {
    id: "portable-ac-1200",
    category: "Portable Air Conditioners",
    name: "Portable Camping Air Conditioner",
    model: "GL-AC1200",
    tagline: "Compact cooling for tents, vans and mobile outdoor setups.",
    description:
      "A portable cooling unit designed for flexible outdoor comfort, quick installation and compact storage.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1600&q=82",
        alt: "Tent camping scene for portable air conditioner application",
      },
      {
        src: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=82",
        alt: "Outdoor camping setup for portable cooling",
      },
    ],
    specs: [
      { label: "Cooling Capacity", value: "Approx. 1200 W class" },
      { label: "Power Supply", value: "AC power / portable power station compatible options" },
      { label: "Control", value: "Digital panel and remote control optional" },
      { label: "Use Scene", value: "Tent, RV, cabin, mobile workspace" },
    ],
    optionalFeatures: ["Drainage kit", "Extended air duct", "Remote control", "Private label packaging"],
    leadTime: "20-30 days depending on order quantity",
    shipping: "Carton shipment by sea, air or express",
    ddp: "DDP door-to-door delivery can be arranged for sample and bulk orders.",
    highlights: [
      "Compact form factor for outdoor travel",
      "Easy setup with flexible ducting",
      "OEM branding and packaging support",
      "Reliable supplier service for seasonal demand planning",
    ],
    packaging: "Single carton with inner foam. Drop-test packaging can be customized.",
    applications: ["Camping tents", "RV bedrooms", "Pickup campers", "Outdoor events"],
  },
  {
    id: "pickup-canopy-pro",
    category: "Pickup Truck Canopies",
    name: "Overland Pickup Truck Canopy",
    model: "GL-PC01",
    tagline: "Premium enclosed storage and touring platform for pickup trucks.",
    description:
      "A robust canopy solution for pickup owners who need security, weather protection and an overland-ready profile.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=82",
        alt: "Pickup truck in outdoor terrain for canopy application",
      },
      {
        src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=82",
        alt: "Pickup truck exterior detail",
      },
    ],
    specs: [
      { label: "Material", value: "Aluminum alloy / fiberglass options" },
      { label: "Window", value: "Side lift-up or sliding window optional" },
      { label: "Finish", value: "Powder coating or automotive paint matching" },
      { label: "Compatibility", value: "Custom fit by pickup model and bed size" },
    ],
    optionalFeatures: ["Roof rack", "Side tool boxes", "Interior LED light", "Central locking"],
    leadTime: "25-40 days for standard and custom production",
    shipping: "Sea freight in protective crate or container loading",
    ddp: "DDP shipping available for dealer and distributor orders.",
    highlights: [
      "Designed for touring, trade and utility use",
      "Custom fit support for multiple pickup platforms",
      "Weather-resistant sealing and secure locking options",
      "Professional packaging for international shipping",
    ],
    packaging: "Wooden crate or reinforced export frame for long-distance transport.",
    applications: ["Overland builds", "Commercial fleets", "Pickup camping", "Outdoor service vehicles"],
  },
  {
    id: "tonneau-cover-hard",
    category: "Tonneau Covers",
    name: "Hard Folding Tonneau Cover",
    model: "GL-TC75",
    tagline: "Low-profile cargo protection for daily pickup and overland travel.",
    description:
      "A practical hard folding tonneau cover with a clean surface, secure cargo coverage and easy bed access.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=82",
        alt: "Pickup style vehicle presentation for tonneau cover",
      },
      {
        src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=82",
        alt: "Vehicle rear bed accessory application",
      },
    ],
    specs: [
      { label: "Panel", value: "Aluminum honeycomb / FRP optional" },
      { label: "Structure", value: "Tri-fold or multi-fold design" },
      { label: "Surface", value: "Matte black weather-resistant finish" },
      { label: "Installation", value: "Clamp-on installation, no drilling for most models" },
    ],
    optionalFeatures: ["Model-specific fitment", "Logo label", "Retail color box", "Dealer instruction sheet"],
    leadTime: "15-25 days for common pickup models",
    shipping: "Flat carton packaging, suitable for LCL or container orders",
    ddp: "DDP service available for Amazon, dealer warehouse and direct customer delivery.",
    highlights: [
      "Secure bed coverage with clean exterior styling",
      "Quick folding access to pickup bed",
      "Weather-resistant sealing system",
      "Good choice for dealers and e-commerce programs",
    ],
    packaging: "Heavy-duty carton with corner protection and installation accessories.",
    applications: ["Pickup cargo protection", "Dealer accessories", "E-commerce replacement parts"],
  },
  {
    id: "bed-lift-system",
    category: "Bed Lift Systems",
    name: "Electric Bed Lift System",
    model: "GL-BL500",
    tagline: "Space-saving sleeping platform lift for RV and camper interiors.",
    description:
      "An electric lift system for compact interiors, allowing sleeping platforms to rise cleanly when not in use.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1515876305430-f06edab8282a?auto=format&fit=crop&w=1600&q=82",
        alt: "Camper interior mood for bed lift system",
      },
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=82",
        alt: "Interior sleeping space suitable for RV lift system",
      },
    ],
    specs: [
      { label: "Drive", value: "Electric motor with synchronized lifting mechanism" },
      { label: "Load", value: "Custom load capacity by project requirement" },
      { label: "Control", value: "Wall switch / remote control optional" },
      { label: "Application", value: "RV, camper van, trailer and tiny mobile cabin" },
    ],
    optionalFeatures: ["Custom rail length", "Safety lock", "Remote control", "OEM wiring harness"],
    leadTime: "20-35 days depending on customization",
    shipping: "Export carton or pallet shipment",
    ddp: "DDP delivery can be quoted based on destination and order volume.",
    highlights: [
      "Improves usable interior space",
      "Project-based customization available",
      "Smooth lifting for premium camper layouts",
      "Suitable for builders and conversion factories",
    ],
    packaging: "Protective carton with labeled parts and installation accessories.",
    applications: ["Class B RV", "Camper van conversion", "Travel trailers", "Mobile cabins"],
  },
  {
    id: "trailer-dolly-350",
    category: "Trailer Dollies",
    name: "Electric Trailer Dolly",
    model: "GL-TD350",
    tagline: "Controlled trailer movement for workshops, storage yards and private use.",
    description:
      "A compact trailer moving solution for safer positioning of trailers, campers and light utility equipment.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1528590928707-1f6e9b264acf?auto=format&fit=crop&w=1600&q=82",
        alt: "Trailer and outdoor road application",
      },
      {
        src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=82",
        alt: "Outdoor vehicle movement environment",
      },
    ],
    specs: [
      { label: "Type", value: "Electric trailer mover / dolly" },
      { label: "Capacity", value: "Project capacity options available" },
      { label: "Wheel", value: "All-terrain tire optional" },
      { label: "Use", value: "Trailer, caravan, boat trailer and utility trailer positioning" },
    ],
    optionalFeatures: ["Battery system", "Custom hitch adapter", "Storage cover", "Private label"],
    leadTime: "20-30 days after deposit",
    shipping: "Carton or pallet shipment by sea freight",
    ddp: "DDP available for dealer warehouse delivery and sample orders.",
    highlights: [
      "Improves trailer positioning safety",
      "Compact storage footprint",
      "Useful for workshops, yards and private garages",
      "Custom adapter support for different hitch types",
    ],
    packaging: "Export carton or pallet with foam and hardware kit.",
    applications: ["Caravan storage", "Boat trailer movement", "Trailer dealer yards", "Workshops"],
  },
  {
    id: "rv-window-700",
    category: "RV Windows",
    name: "RV Sliding Window System",
    model: "GL-RW700",
    tagline: "Clean glazing solution for RV, trailer and specialty vehicle builds.",
    description:
      "A durable RV window platform with multiple opening styles, custom size support and professional sealing options.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=82",
        alt: "Exterior vehicle and cabin window inspiration",
      },
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=82",
        alt: "Interior window and living space application",
      },
    ],
    specs: [
      { label: "Type", value: "Sliding / awning / fixed window optional" },
      { label: "Glass", value: "Tempered glass, tint optional" },
      { label: "Frame", value: "Aluminum frame with sealing system" },
      { label: "Size", value: "Standard or custom dimensions" },
    ],
    optionalFeatures: ["Privacy tint", "Mosquito screen", "Blind system", "Custom radius corner"],
    leadTime: "20-35 days based on specification",
    shipping: "Protective carton and pallet for glass products",
    ddp: "DDP service available with reinforced packaging planning.",
    highlights: [
      "Custom size and opening style support",
      "Designed for vehicle exterior use",
      "Clean appearance for premium RV projects",
      "Good fit for manufacturers and conversion workshops",
    ],
    packaging: "Foam-protected carton with pallet reinforcement for glass safety.",
    applications: ["RV manufacturing", "Camper trailers", "Food trucks", "Specialty vehicles"],
  },
  {
    id: "pickup-accessory-kit",
    category: "Pickup Accessories",
    name: "Pickup Overland Accessory Kit",
    model: "GL-PA-KIT",
    tagline: "Curated exterior accessories for pickup camping and overland upgrades.",
    description:
      "A flexible accessory program covering racks, storage, lighting and exterior utility upgrades for pickup builds.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=82",
        alt: "Overland outdoor destination for pickup accessories",
      },
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",
        alt: "Outdoor travel route for pickup accessory application",
      },
    ],
    specs: [
      { label: "Product Range", value: "Rack, storage, steps, lighting and exterior utility parts" },
      { label: "Finish", value: "Powder-coated black or custom finish" },
      { label: "Fitment", value: "Universal and model-specific options" },
      { label: "Program", value: "OEM, ODM and dealer assortment support" },
    ],
    optionalFeatures: ["Custom logo", "Retail packaging", "Bundle kit", "Market-specific assortment"],
    leadTime: "15-30 days by item and order plan",
    shipping: "Carton, pallet or mixed container shipment",
    ddp: "DDP service can support mixed accessory shipments for dealers.",
    highlights: [
      "Flexible product mix for overland and pickup markets",
      "Supports OEM and distributor product programs",
      "Reliable production coordination from sample to bulk",
      "DDP shipping solutions for easier import planning",
    ],
    packaging: "Carton or pallet packaging based on accessory type and destination.",
    applications: ["Pickup upgrades", "Outdoor retail", "Dealer bundles", "Overland projects"],
  },
];
