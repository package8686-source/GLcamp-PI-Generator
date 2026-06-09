type QRPlaceholderProps = {
  label?: string;
  light?: boolean;
};

export function QRPlaceholder({ label = "QR Code", light = false }: QRPlaceholderProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={[
          "grid h-24 w-24 shrink-0 grid-cols-4 grid-rows-4 gap-1 border p-2",
          light ? "border-white/50 bg-white/10" : "border-stone-300 bg-white",
        ].join(" ")}
        aria-label={label}
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className={[
              "block",
              [0, 1, 4, 5, 10, 11, 14, 15, 3, 12].includes(index)
                ? light
                  ? "bg-white"
                  : "bg-forest-900"
                : light
                  ? "bg-white/20"
                  : "bg-stone-200",
            ].join(" ")}
          />
        ))}
      </div>
      <div className={light ? "text-white/80" : "text-graphite"}>
        <p className="text-sm font-bold">{label}</p>
        <p className="mt-1 text-xs leading-5">Reserved for WhatsApp or official website QR code.</p>
      </div>
    </div>
  );
}
