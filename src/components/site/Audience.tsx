import { GraduationCap, Users, Plane, Building2 } from "lucide-react";
import { Reveal } from "./Reveal";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Study-abroad visas, university documentation and timely interview slots.",
  },
  {
    icon: Users,
    title: "Families",
    desc: "Multi-applicant family visas and reunion travel handled end-to-end.",
  },
  {
    icon: Plane,
    title: "Tourists",
    desc: "Tailored leisure itineraries with visa, flights and stay aligned.",
  },
  {
    icon: Building2,
    title: "Corporates",
    desc: "Centralized travel management for distributed teams and frequent flyers.",
  },
];

export function Audience() {
  return (
    <section
      id="audience"
      className="relative overflow-hidden bg-[oklch(0.1_0.02_275)] py-16 text-white md:py-20"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />

      <div className="relative mx-auto w-[min(1200px,92%)]">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-glow">
              Who We Serve
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-4xl">
              Built for every kind of traveler
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-pretty text-base text-white/65 md:text-lg">
              Whether you&apos;re chasing a degree, a holiday or a quarterly board meeting - we
              tailor the journey to you.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-4">
          {audiences.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-glow/60 to-transparent" />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-elegant">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-white/65">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
