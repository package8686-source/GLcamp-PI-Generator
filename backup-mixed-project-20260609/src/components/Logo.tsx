type LogoProps = {
  compact?: boolean;
  light?: boolean;
};

export function Logo({ compact = false, light = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={[
          "flex shrink-0 items-center justify-center rounded-sm border font-display font-extrabold tracking-normal",
          compact ? "h-9 w-9 text-sm" : "h-12 w-12 text-base",
          light ? "border-white/60 text-white" : "border-forest-700 text-forest-700",
        ].join(" ")}
      >
        GL
      </div>
      <div className={compact ? "leading-tight" : "leading-tight"}>
        <div
          className={[
            "font-display font-extrabold tracking-normal",
            compact ? "text-lg" : "text-2xl",
            light ? "text-white" : "text-ink",
          ].join(" ")}
        >
          GLcamp
        </div>
        {!compact && (
          <div className={["text-xs font-semibold uppercase", light ? "text-white/75" : "text-graphite"].join(" ")}>
            GO LIMITLESS
          </div>
        )}
      </div>
    </div>
  );
}
