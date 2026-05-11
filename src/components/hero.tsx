import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-airport.jpg";
import globeImg from "@/assets/globe.jpg";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 800);
        el.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.05)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform">
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent,oklch(0.1_0.03_280)_70%)]" />
      </div>

      <div className="mx-auto grid w-[min(94%,1200px)] grid-cols-1 items-center gap-10 pb-24 pt-36 sm:pt-40 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:pb-32 lg:pt-44">
        <div className="max-w-2xl">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            Tech-savvy travel consultancy · Est. 2025
          </span> */}
          <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Connecting Dreams, <span className="gradient-text-animated">Simplifying Journeys.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Expert visa consulting and seamless flight arrangements designed for the modern traveler
            - transparent, dependable, and beautifully handled from start to finish.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Get Started
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 sm:gap-8">
            {[
              { k: "98%", v: "Visa success rate" },
              { k: "30+", v: "Destinations served" },
              { k: "5★", v: "Avg. client rating" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-xs text-white/60 sm:text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-[480px] lg:block">
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <img
            src={globeImg}
            alt="Glowing 3D globe with flight paths"
            className="float relative h-full w-full rounded-[2rem] object-cover shadow-elegant"
            width={1024}
            height={1024}
          />
          <div className="glass-dark absolute -bottom-4 -left-4 rounded-2xl border border-white/10 px-4 py-3 text-xs text-white/80 shadow-elegant">
            ✦ Visas approved on first try
          </div>
          <div className="glass-dark absolute -right-4 top-6 rounded-2xl border border-white/10 px-4 py-3 text-xs text-white/80 shadow-elegant">
            ✈︎ Lagos → London · 6h 30m
          </div>
        </div>
      </div>
    </section>
  );
}
