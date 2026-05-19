const flags = [
  { code: "🇺🇸", name: "United States" },
  { code: "🇬🇧", name: "United Kingdom" },
  { code: "🇨🇦", name: "Canada" },
  { code: "🇩🇪", name: "Germany" },
  { code: "🇫🇷", name: "France" },
  { code: "🇮🇹", name: "Italy" },
  { code: "🇪🇸", name: "Spain" },
  { code: "🇳🇱", name: "Netherlands" },
  { code: "🇧🇪", name: "Belgium" },
  { code: "🇨🇭", name: "Switzerland" },
  { code: "🇸🇪", name: "Sweden" },
  { code: "🇳🇴", name: "Norway" },
  { code: "🇩🇰", name: "Denmark" },
  { code: "🇮🇪", name: "Ireland" },
  { code: "🇵🇹", name: "Portugal" },
  { code: "🇦🇹", name: "Austria" },
  { code: "🇫🇮", name: "Finland" },
  { code: "🇬🇷", name: "Greece" },
  { code: "🇲🇽", name: "Mexico" },
  { code: "🇧🇷", name: "Brazil" },
  { code: "🇦🇷", name: "Argentina" },
  { code: "🇿🇦", name: "South Africa" },
  { code: "🇪🇬", name: "Egypt" },
  { code: "🇰🇪", name: "Kenya" },
  { code: "🇬🇭", name: "Ghana" },
  { code: "🇲🇦", name: "Morocco" },
  { code: "🇷🇼", name: "Rwanda" },
  { code: "🇲🇺", name: "Mauritius" },
  { code: "🇸🇪", name: "Sweden" },
  { code: "🇨🇱", name: "Chile" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Visa approvals across countries"
      className="border-y border-[color:var(--border-c)] bg-[color:var(--bg2)] py-8"
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--dim)]">
          Approvals across Different Countries
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track whitespace-nowrap [animation-duration:30s]">
            {[...flags, ...flags].map((f, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2.5 text-sm font-medium text-[color:var(--muted-fg)]"
              >
                <span className="text-2xl leading-none">{f.code}</span>
                <span>{f.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
