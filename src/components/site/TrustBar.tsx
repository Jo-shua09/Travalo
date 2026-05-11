const items = [
  "UK Visa Approvals",
  "Schengen Specialists",
  "USA · B1/B2",
  "Canada IRCC",
  "Dubai · UAE",
  "Australia Subclass 600",
  "IATA Partner Carriers",
  "Corporate Travel",
];

export function TrustBar() {
  return (
    <section aria-label="Trusted by" className="border-y border-border bg-background py-6">
      <div className="mx-auto w-[min(1200px,94%)]">
        <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Trusted across visa categories worldwide
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee whitespace-nowrap">
            {[...items, ...items].map((it, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-sm font-medium text-foreground/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                {it}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
