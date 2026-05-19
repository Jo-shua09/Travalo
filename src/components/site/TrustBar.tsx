import React from "react";

// Updated with standard lowercase 2-letter ISO country codes
const flags = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "ca", name: "Canada" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "it", name: "Italy" },
  { code: "es", name: "Spain" },
  { code: "nl", name: "Netherlands" },
  { code: "be", name: "Belgium" },
  { code: "ch", name: "Switzerland" },
  { code: "se", name: "Sweden" },
  { code: "no", name: "Norway" },
  { code: "dk", name: "Denmark" },
  { code: "ie", name: "Ireland" },
  { code: "pt", name: "Portugal" },
  { code: "at", name: "Austria" },
  { code: "fi", name: "Finland" },
  { code: "gr", name: "Greece" },
  { code: "mx", name: "Mexico" },
  { code: "br", name: "Brazil" },
  { code: "ar", name: "Argentina" },
  { code: "za", name: "South Africa" },
  { code: "eg", name: "Egypt" },
  { code: "ke", name: "Kenya" },
  { code: "gh", name: "Ghana" },
  { code: "ma", name: "Morocco" },
  { code: "rw", name: "Rwanda" },
  { code: "mu", name: "Mauritius" },
  { code: "cl", name: "Chile" },
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
                className="inline-flex items-center gap-3 text-sm font-medium text-[color:var(--muted-fg)] mr-12"
              >
                {/* High-quality vector flag source from FlagCDN */}
                <img
                  src={`https://flagcdn.com/${f.code}.svg`}
                  alt={`${f.name} Flag`}
                  className="h-4 w-6 object-cover rounded-sm shadow-sm"
                  loading="lazy"
                />
                <span>{f.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
