import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import heroGlobe from "@/assets/hero-globe.jpg";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = Math.min(window.scrollY, 800);
      bgRef.current.style.transform = `translate3d(0, ${y * 0.15}px, 0) scale(${1 + y * 0.0003})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-background text-foreground">
      <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform">
        <img
          src={heroGlobe}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-20"
          width={1536}
          height={1280}
        />
      </div>

      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-balance">
            <span className="block">Connecting Dreams,</span>
            <span className="block shimmer-text text-foreground">Simplifying Journeys.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-foreground md:text-lg">
            Expert visa consulting and seamless flight arrangements designed for the modern
            traveler. From your first appointment to take-off - handled with precision.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#services"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card/70 sm:w-auto"
            >
              Get Started
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary-glow" /> 98% visa approval rate
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Trusted across Africa & beyond</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Founded 2025 · Lagos, NG</span>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-4 md:gap-4">
          {[
            { k: "1,000+", v: "Visas processed" },
            { k: "60+", v: "Destinations" },
            { k: "98%", v: "First-try approvals" },
            { k: "24/7", v: "Client support" },
          ].map((s, i) => (
            <div
              key={s.v}
              className="floaty rounded-2xl border border-border bg-card p-4 text-left backdrop-blur md:p-5"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <div className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground md:text-xs">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
