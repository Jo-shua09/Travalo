import { CheckCircle2 } from "lucide-react";
import about from "@/assets/about-traveler.jpg";
import { Reveal } from "./Reveal";

const points = [
  "Bridging the gap with transparency and technology",
  "Real humans, real follow-up - never abandoned mid-process",
  "Built on integrity, professionalism and excellence",
];

export function About() {
  return (
    <section id="about" className="relative bg-gradient-soft py-16 md:py-20">
      <div className="mx-auto grid w-[min(1200px,92%)] items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-card">
              <img
                src={about}
                alt="Travola traveler in an airport lounge"
                className="aspect-[1/1] w-full object-cover"
                width={1024}
                height={1280}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 hidden rounded-2xl border border-border bg-background p-4 shadow-elegant md:block">
              <div className="font-display text-3xl font-bold text-primary">2025</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Founded</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Our Story
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              Travel should be an <span className="bg-clip-text">experience</span> - not a source of
              stress.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Travola was founded out of a genuine passion for simplifying the complexities that
              surround visa applications and flight arrangements. We have evolved into a dynamic,
              tech-savvy and customer-focused consultancy - opening doors to global opportunities
              with confidence, clarity and convenience.
            </p>
          </Reveal>
          <ul className="mt-7 grid gap-3">
            {points.map((p, i) => (
              <Reveal key={p} delay={200 + i * 80}>
                <li className="flex items-start gap-3 text-sm text-foreground md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={420}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Start your journey
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                See what we do
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
