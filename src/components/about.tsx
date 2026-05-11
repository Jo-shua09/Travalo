import { useReveal } from "@/hooks/use-reveal";
import aboutImg from "@/assets/about-traveler.jpg";
import { Check } from "lucide-react";

const points = [
  "Transparent process from consultation to take-off",
  "Tech-driven application tracking & reminders",
  "Personalized guidance for first-time and frequent flyers",
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="bg-background py-16 sm:py-20">
      <div
        ref={ref}
        className="reveal mx-auto grid w-[min(94%,1200px)] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-primary opacity-20 blur-2xl" />
          <img
            src={aboutImg}
            alt="A confident traveler with passport and boarding pass in a modern lounge"
            loading="lazy"
            width={1080}
            height={1600}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
          />
          <div className="absolute -bottom-6 right-4 hidden rounded-2xl border border-border bg-card p-4 shadow-soft sm:block">
            <p className="font-display text-3xl font-bold text-primary">2025</p>
            <p className="text-xs text-muted-foreground">Founded with purpose</p>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Our Story
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Bridging the gap in travel with{" "}
            <span className="text-gradient">trust & technology</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Travola was born from a simple observation - too many travelers struggle with visa
            complexity, unreliable agents, and missed opportunities. We built a modern consultancy
            that pairs human expertise with smart processes, so every journey begins with confidence
            and clarity.
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground/90 sm:text-base">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
