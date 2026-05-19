import { useState, useEffect } from "react";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";

const SLIDES = [
  {
    id: 1,
    heading: (
      <>
        Your visa application deserves more than a{" "}
        <span className="text-[color:var(--lime)]">lucky guess.</span>
      </>
    ),
    description:
      "We don't just advise. We do it with you. From the first document to the final submission - every step, no guesswork, no abandoned calls.",
    bgUrl: slide1,
  },
  {
    id: 2,
    heading: (
      <>
        Our expertise runs deeper than{" "}
        <span className="text-[color:var(--lime)]">forms and checklists.</span>
      </>
    ),
    description:
      "We know the rules, the refusal patterns, and the fine details that turn a rejection into an approval. First-time applicant or reapplying; you are in experienced hands.",
    bgUrl: slide2,
  },
  {
    id: 3,
    heading: (
      <>
        Travel should be an experience, not a{" "}
        <span className="text-[color:var(--lime)]">source of stress.</span>
      </>
    ),
    description:
      "Travola Global Consults Ltd. was founded out of a genuine passion for simplifying the complexities around visa applications. We open doors to global opportunities with confidence, clarity, and convenience.",
    bgUrl: slide3,
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000); // Changes slide every 7 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[color:var(--bg)] pt-24 md:pt-28 min-h-[90vh] flex items-center"
    >
      {/* Dynamic Background Carousel Layer */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-60" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, var(--bg) 5%, transparent, var(--bg) 95%), url(${slide.bgUrl})`,
            }}
          />
        ))}
      </div>

      {/* Static Decorative Elements */}
      <div
        aria-hidden
        className="hero-glow-blob pointer-events-none absolute -top-20 left-0 -z-10 h-[500px] w-[500px] rounded-full"
      />

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-4 pb-20 md:grid-cols-2 md:gap-12 md:px-8 md:pb-24">
        {/* Left Column: Text Carousel */}
        <div className="relative text-center md:text-left min-h-[380px] sm:min-h-[300px] md:min-h-[420px] flex flex-col justify-center">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-in-out transform ${
                index === currentSlide
                  ? "opacity-100 translate-y-0 relative pointer-events-auto"
                  : "opacity-0 translate-y-4 absolute inset-x-0 pointer-events-none"
              }`}
            >
              <h1 className="mt-6 text-balance font-display text-[clamp(2.1rem,5.5vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-strong">
                {slide.heading}
              </h1>

              <p className="mx-auto mt-5 max-w-[440px] text-pretty text-[15px] leading-[1.8] text-[color:var(--muted-fg)] md:mx-0 md:text-base">
                {slide.description}
              </p>
            </div>
          ))}

          {/* Persistent Action Buttons & Slide Indicators */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start md:items-start z-10">
            <div className="flex flex-col gap-4 w-full sm:w-auto sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[color:var(--lime)] px-7 py-3.5 text-sm font-bold text-black transition hover:-translate-y-0.5"
              >
                Book Your Expert Visa Analysis →
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[color:var(--border2)] bg-transparent px-6 py-3.5 text-sm font-medium text-strong transition hover:border-[color:var(--lime-border)] hover:text-[color:var(--lime)]"
              >
                See What's Covered
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Stats Grid (Replaced Video) */}
        <div className="mx-auto w-full max-w-[440px] md:max-w-none">
          {/* Wrapped in your custom Reveal component if needed */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "300+", v: "Approvals" },
              { k: "98%", v: "Quality Service" },
              { k: "20+", v: "Destinations" },
              { k: "24/7", v: "Support Team" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-[color:var(--border2)] bg-[color:var(--bg)] p-6 transition-all duration-300 hover:border-[color:var(--lime-border)] hover:shadow-[0_0_30px_rgba(var(--lime-rgb),0.05)] group"
                style={{
                  boxShadow: "var(--shadow-deep)",
                }}
              >
                <div className="font-display text-4xl font-extrabold tracking-tight text-[color:var(--lime)] group-hover:scale-105 transition-transform duration-300 origin-left">
                  {s.k}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--muted-fg)]">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Micro Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center gap-1.5">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-6 bg-[color:var(--lime)]"
                  : "w-1.5 bg-[color:var(--border2)]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
