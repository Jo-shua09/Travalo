import { Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[color:var(--bg)] pt-24 md:pt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
      <div
        aria-hidden
        className="hero-glow-blob pointer-events-none absolute -top-20 left-0 -z-10 h-[500px] w-[500px] rounded-full"
      />

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-4 pb-20 md:grid-cols-2 md:gap-12 md:px-8 md:pb-24">
        <div className="fade-up text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border2)] bg-[color:var(--bg3)] py-1.5 pl-1.5 pr-4 text-xs text-[color:var(--muted-fg)]">
            <span className="grid h-5 w-5 place-items-center rounded-full border border-[color:var(--lime-border)] bg-[color:var(--lime-dim)] text-[10px] text-[color:var(--lime)]">
              <Star className="h-2.5 w-2.5 fill-current" />
            </span>
            500+ approvals · No agents. Ever.
          </div>

          <h1 className="mt-6 text-balance font-display text-[clamp(2.1rem,5.5vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-strong">
            Your visa application deserves more than a{" "}
            <span className="text-[color:var(--lime)]">lucky guess.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[440px] text-pretty text-[15px] leading-[1.8] text-[color:var(--muted-fg)] md:mx-0 md:text-base">
            We don't just advise. We do it with you. From the first document to the final submission
            - every step, no guesswork, no abandoned calls.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start md:items-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[color:var(--lime)] px-7 py-3.5 text-sm font-bold text-black [.light_&]:text-white transition hover:-translate-y-0.5"
            >
              Book Your Expert Visa Analysis →
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--border2)] bg-transparent px-6 py-3.5 text-sm font-medium text-strong transition hover:border-[color:var(--lime-border)] hover:text-[color:var(--lime)]"
            >
              See What's Covered
            </a>
          </div>
        </div>

        <div className="fade-up mx-auto w-full max-w-[340px] md:max-w-none">
          <div
            className="relative overflow-hidden rounded-2xl border border-[color:var(--border2)] bg-black shadow-deep"
            style={{
              aspectRatio: "1 / 1",
              boxShadow:
                "0 0 0 1px var(--lime-border), var(--shadow-deep), 0 0 60px var(--hero-glow)",
            }}
          >
            <video
              src="/media/intro.mov"
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* <div className="pointer-events-none absolute bottom-4 left-4 right-4 font-mono text-[11px] uppercase tracking-[0.15em] text-white/90">
              <span className="rounded bg-black/50 px-2 py-1 backdrop-blur">
                Travola · Client Approval
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
