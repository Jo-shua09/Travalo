import { useReveal } from "@/hooks/use-reveal";
import {
  StampIcon,
  Plane,
  FileText,
  Briefcase,
  Shield,
  CalendarClock,
  ArrowUpRight,
} from "lucide-react";

type Item = {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
  span?: string;
  highlight?: string;
  tone?: "dark" | "light" | "primary";
};

const items: Item[] = [
  {
    title: "Visa Consulting & Processing",
    desc: "Expert handling of tourist, study and short-term visa applications with industry-leading approval rates.",
    Icon: StampIcon,
    span: "lg:col-span-2 lg:row-span-2",
    highlight: "98% approval rate",
    tone: "dark",
  },
  {
    title: "Flight & Hotel Reservations",
    desc: "Cost-effective bookings for individuals, families and groups - anywhere in the world.",
    Icon: Plane,
    tone: "light",
  },
  {
    title: "Documentation Advisory",
    desc: "Professional review and preparation of every document - nothing missed, nothing rushed.",
    Icon: FileText,
    tone: "light",
  },
  {
    title: "Corporate Travel Management",
    desc: "Streamlined travel programs for businesses managing frequent or large-scale movement.",
    Icon: Briefcase,
    span: "lg:col-span-2",
    tone: "primary",
  },
  {
    title: "Travel Insurance",
    desc: "Reliable cover for the unexpected, wherever you go.",
    Icon: Shield,
    tone: "light",
  },
  {
    title: "Early Appointment Scheduling",
    desc: "Secure timely visa interview slots, even in peak season.",
    Icon: CalendarClock,
    tone: "light",
  },
];

function Card({ item }: { item: Item }) {
  const ref = useReveal<HTMLDivElement>();
  const tone =
    item.tone === "dark"
      ? "bg-ink text-ink-foreground border-white/10"
      : item.tone === "primary"
        ? "bg-gradient-primary text-primary-foreground border-transparent"
        : "bg-card text-card-foreground border-border";
  return (
    <div
      ref={ref}
      className={`reveal hover-lift group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 sm:p-8 ${tone} ${item.span ?? ""}`}
    >
      {item.tone === "dark" && (
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-primary opacity-40 blur-3xl" />
      )}
      <div className="relative flex items-start justify-between">
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl ${
            item.tone === "light"
              ? "bg-gradient-primary text-primary-foreground"
              : "bg-white/10 text-white"
          }`}
        >
          <item.Icon className="h-5 w-5" />
        </span>
        <ArrowUpRight
          className={`h-5 w-5 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${
            item.tone === "light" ? "text-primary" : "text-white"
          }`}
        />
      </div>
      <div className="relative mt-12">
        {item.highlight && (
          <span className="mb-3 inline-flex rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider">
            {item.highlight}
          </span>
        )}
        <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl">
          {item.title}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed sm:text-[0.95rem] ${
            item.tone === "light" ? "text-muted-foreground" : "text-white/75"
          }`}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const headRef = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto w-[min(94%,1200px)]">
        <div ref={headRef} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            What we do
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            A full suite of travel solutions, beautifully orchestrated.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From visa to take-off, every detail handled by experts who care.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((it) => (
            <Card key={it.title} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
