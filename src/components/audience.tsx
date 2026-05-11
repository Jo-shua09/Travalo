import { useReveal } from "@/hooks/use-reveal";
import { GraduationCap, Users, Plane, Building2 } from "lucide-react";

const audiences = [
  {
    Icon: GraduationCap,
    title: "Students",
    desc: "Study abroad pathways, school visas and timely scheduling.",
  },
  {
    Icon: Users,
    title: "Families",
    desc: "Vacations, reunions and group travel handled end-to-end.",
  },
  {
    Icon: Plane,
    title: "Tourists",
    desc: "Tourist visas and curated bookings for global explorers.",
  },
  {
    Icon: Building2,
    title: "Corporate Clients",
    desc: "Streamlined business travel and staff relocation programs.",
  },
];

type AudienceItem = (typeof audiences)[number] & { index: number };

function AudienceCard({ Icon, title, desc, index }: AudienceItem) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className="reveal hover-lift group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-7"
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold sm:text-xl">{title}</h3>
      <p className="mt-1.5 text-sm text-white/70">{desc}</p>
    </div>
  );
}

export function Audience() {
  const head = useReveal<HTMLDivElement>();
  return (
    <section id="audience" className="bg-ink py-16 text-ink-foreground sm:py-20">
      <div className="mx-auto w-[min(94%,1200px)]">
        <div ref={head} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-glow">
            Who we serve
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Built for every kind of traveler.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <AudienceCard key={a.title} {...a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
