import {
  ArrowUpRight,
  Plane,
  FileCheck2,
  Briefcase,
  Stamp,
  ShieldCheck,
  CalendarClock,
} from "lucide-react";
import visaImg from "@/assets/service-visa.jpg";
import flightImg from "@/assets/service-flight.jpg";
import docsImg from "@/assets/service-docs.jpg";
import corpImg from "@/assets/service-corporate.jpg";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="relative bg-background py-16 md:py-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Our Services
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-4xl">
              Everything you need to <span className="">travel with confidence</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
              From visa strategy to take-off - a single, tech-enabled team that handles the moving
              parts so you don&apos;t have to.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="mt-8 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:mt-10 md:grid-cols-6 md:gap-5">
          {/* Visa - large dark hero card */}
          <Reveal className="md:col-span-4 md:row-span-2">
            <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.12_0.03_275)] text-white shadow-card">
              <img
                src={visaImg}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                width={1024}
                height={1024}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.02_275)] via-[oklch(0.1_0.02_275)]/70 to-transparent" />
              <div className="relative flex h-full flex-col justify-between gap-8 p-7 md:p-9">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider backdrop-blur">
                    <Stamp className="h-3.5 w-3.5 text-primary-glow" /> Featured
                  </span>
                  <ArrowUpRight className="h-5 w-5 opacity-70 transition group-hover:rotate-12 group-hover:opacity-100" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
                    Visa Consulting & Processing
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-white/70 md:text-base">
                    Tourist, study, business and family visas across UK, USA, Schengen, Canada, UAE
                    & more - with industry-leading first-try approval rates.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-5 text-left">
                    {[
                      { k: "98%", v: "Approval rate" },
                      { k: "60+", v: "Destinations" },
                      { k: "1k+", v: "Travelers" },
                    ].map((s) => (
                      <div key={s.v}>
                        <div className="font-display text-xl font-bold md:text-2xl">{s.k}</div>
                        <div className="text-[11px] uppercase tracking-wider text-white/55">
                          {s.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Flight & hotel */}
          <Reveal delay={80} className="md:col-span-2">
            <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Plane className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
                Flight & Hotel Reservations
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Cost-effective bookings for individuals and groups, plus flexible accommodation
                across global hubs.
              </p>
              <img
                src={flightImg}
                alt=""
                aria-hidden
                className="mt-5 aspect-[16/9] w-full rounded-xl object-cover"
                width={1024}
                height={576}
                loading="lazy"
              />
            </article>
          </Reveal>

          {/* Documentation */}
          <Reveal delay={120} className="md:col-span-2">
            <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FileCheck2 className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
                Documentation Advisory
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Professional preparation, review and organization of every document - done right the
                first time.
              </p>
            </article>
          </Reveal>

          {/* Corporate */}
          <Reveal delay={160} className="md:col-span-2">
            <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.16_0.04_275)] p-6 text-white shadow-card">
              <img
                src={corpImg}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-25 transition-transform duration-700 group-hover:scale-110"
                width={1024}
                height={1024}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-transparent" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-12" />
                </div>
                <h3 className="mt-8 font-display text-xl font-bold tracking-tight">
                  Corporate Travel Management
                </h3>
                <p className="mt-2 max-w-xs text-sm text-white/75">
                  Streamlined solutions for teams managing frequent or large-scale travel.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Insurance */}
          <Reveal delay={200} className="md:col-span-2">
            <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-gradient-soft p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
                Travel Insurance
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reliable protection against the unexpected - vetted partners, instant certificates.
              </p>
              <img
                src={docsImg}
                alt=""
                aria-hidden
                className="mt-5 aspect-[16/9] w-full rounded-xl object-cover"
                width={1024}
                height={576}
                loading="lazy"
              />
            </article>
          </Reveal>

          {/* Appointments */}
          <Reveal delay={240} className="md:col-span-2">
            <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CalendarClock className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
                Early Appointment Scheduling
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Secure timely visa interview slots - even during peak season - without the
                guesswork.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
