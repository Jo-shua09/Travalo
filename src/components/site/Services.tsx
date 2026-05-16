import {
  Plane,
  FileCheck2,
  Stamp,
  ShieldCheck,
  Hotel,
  GraduationCap,
  FolderCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: FileCheck2,
    title: "Professional Visa Processing Assistance",
    desc: "Reliable, professional assistance throughout the visa application process - preparing accurate documentation, completing forms correctly and presenting strong applications that align with immigration requirements.",
  },
  {
    icon: Stamp,
    title: "Visa Consultation",
    desc: "Expert consultation on the most suitable visa options based on your travel purpose, eligibility and circumstances - personalized advice on procedures, supporting documents, travel history and sponsorship.",
  },
  {
    icon: Plane,
    title: "Flight Ticketing",
    desc: "Local and international flight reservations with convenient, competitive options tailored to your schedule and budget - suitable routes, dates and fares for seamless travel.",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    desc: "Hotel reservations for travelers seeking comfortable, secure accommodation abroad - whether for tourism, business, study or family visits, matched to your preferences and plans.",
  },
  {
    icon: GraduationCap,
    title: "Student Admission & Visa Assistance",
    desc: "End-to-end support for international students - school applications, admission processing and student visa guidance from program selection to final documentation.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    desc: "Valid travel insurance that meets embassy and international travel requirements - coverage for medical emergencies, trip interruptions and unforeseen travel situations.",
  },
  {
    icon: FolderCheck,
    title: "Travel Documents Assistance",
    desc: "Processing and organization of essential travel documents - passports, invitation letters, supporting documents and other travel-related requirements, properly guided and prepared.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[color:var(--bg)] py-14 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-14 max-w-[640px]">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--lime-border)] bg-[color:var(--lime-dim)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--lime)]">
              Services
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-strong">
              Everything you need to{" "}
              <span className="text-[color:var(--lime)]">travel with confidence.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 60}>
              <article className="hover-lift h-full rounded-xl border border-[color:var(--border-c)] bg-[color:var(--card-bg)] p-6">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-[color:var(--border2)] bg-[color:var(--bg3)] text-[color:var(--lime)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-[15px] font-bold tracking-tight text-strong">
                  {title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[color:var(--muted-fg)]">
                  {desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
