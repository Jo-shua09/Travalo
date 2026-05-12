import {
  ArrowUpRight,
  Plane,
  FileCheck2,
  Stamp,
  ShieldCheck,
  MessageCircle,
  Building2,
  GraduationCap,
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
                    Professional Visa Processing Assistance
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70 md:text-base">
                    We provide reliable and professional assistance throughout the visa application
                    process, helping clients prepare accurate documentation, complete application
                    forms correctly, and present strong applications that align with immigration
                    requirements. Our goal is to simplify the process and minimize avoidable errors
                    or delays.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Visa Consultation */}
          <Reveal delay={80} className="md:col-span-2">
            <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
                Visa Consultation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Our expert consultation services are designed to guide clients on the most suitable
                visa options based on their travel purpose, eligibility, and personal circumstances.
                We offer personalized advice on application procedures, supporting documents, travel
                history, sponsorship, and overall visa strategy.
              </p>
            </article>
          </Reveal>

          {/* Flight Ticketing */}
          <Reveal delay={120} className="md:col-span-2">
            <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Plane className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
                Flight Ticketing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We assist clients with local and international flight reservations, offering
                convenient and competitive travel options tailored to their schedules and budgets.
                Our team helps secure suitable routes, travel dates, and fare options for seamless
                travel planning.
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

          {/* Hotel Booking */}
          <Reveal delay={160} className="md:col-span-2">
            <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-gradient-soft p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
                Hotel Booking
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We provide hotel reservation services for travelers seeking comfortable and secure
                accommodation options abroad. Whether for tourism, business, study, or family
                visits, we help clients book suitable hotels that align with their preferences and
                travel plans.
              </p>
            </article>
          </Reveal>

          {/* Student Admission and Visa Assistance */}
          <Reveal delay={200} className="md:col-span-4">
            <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.16_0.04_275)] p-6 text-white shadow-card md:p-8">
              <img
                src={corpImg}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-25 transition-transform duration-700 group-hover:scale-110"
                width={1024}
                height={1024}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-[oklch(0.16_0.04_275)]/80 to-transparent" />
              <div className="relative h-full flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-12" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight md:text-3xl">
                  Student Admission and Visa Assistance
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                  We support prospective international students with school applications, admission
                  processing, and student visa guidance. From selecting suitable institutions and
                  programs to preparing admission and visa documentation, we assist students
                  throughout the entire study abroad process.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Insurance */}
          <Reveal delay={240} className="md:col-span-3">
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
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We help clients obtain valid travel insurance policies that meet embassy and
                international travel requirements. Our travel insurance solutions provide coverage
                for medical emergencies, trip interruptions, and other unforeseen travel-related
                situations.
              </p>
            </article>
          </Reveal>

          {/* Travel Documents Assistance */}
          <Reveal delay={280} className="md:col-span-3">
            <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FileCheck2 className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
                Travel Documents Assistance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We assist with the processing and organization of essential travel documents,
                including passports, invitation letters, supporting documents, and other
                travel-related requirements. Our service ensures that clients are properly guided
                and adequately prepared for their journeys.
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
        </div>
      </div>
    </section>
  );
}
