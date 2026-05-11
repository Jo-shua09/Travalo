const items = [
  "BBC Travel",
  "Forbes Africa",
  "TechCabal",
  "Schengen Visa Info",
  "TripAdvisor",
  "IATA",
  "Travel Weekly",
  "CNN Travel",
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary/50 py-8">
      <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by travelers · Featured in
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee gap-12 px-6">
          {[...items, ...items].map((label, i) => (
            <span
              key={i}
              className="font-display whitespace-nowrap text-xl font-semibold text-muted-foreground/70 sm:text-2xl"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
