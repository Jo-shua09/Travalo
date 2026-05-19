import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: MapPin, label: "Office", value: "C4 Starklin Plaza, 7 Akowonjo Road, Egbeda, Lagos" },
  { icon: Phone, label: "Phone", value: "+234 707 961 9684", href: "tel:+2347079619684" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: "https://wa.me/2347079619684",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@travolaglobalconsults.com",
    href: "mailto:info@travolaglobalconsults.com",
  },
  { icon: Clock, label: "Hours", value: "Mon – Fri · 9:00 AM – 4:00 PM" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[color:var(--bg2)] py-14 md:py-20">
      <div
        aria-hidden
        className="hero-glow-blob pointer-events-none absolute inset-x-0 bottom-0 h-[400px]"
      />

      <div className="relative mx-auto grid max-w-[1280px] gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--lime-border)] bg-[color:var(--lime-dim)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--lime)]">
              Get in Touch
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-strong">
              Let's plan your <span className="text-[color:var(--lime)]">next journey.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-md text-[15px] leading-[1.8] text-[color:var(--muted-fg)]">
              Book a free consultation. We'll review your goals, recommend the right route and
              handle the rest - visa to take-off.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3">
            {items.map(({ icon: Icon, label, value, href }, i) => {
              const inner = (
                <>
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[color:var(--border2)] bg-[color:var(--bg3)] text-[color:var(--lime)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--dim)]">
                      {label}
                    </span>
                    <span className="block text-[14px] font-medium text-strong">{value}</span>
                  </span>
                </>
              );
              return (
                <Reveal key={label} delay={180 + i * 50}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener"
                      className="hover-lift group flex items-center gap-4 rounded-xl border border-[color:var(--border-c)] bg-[color:var(--card-bg)] p-4"
                    >
                      {inner}
                      <ArrowRight className="h-4 w-4 text-[color:var(--dim)] transition group-hover:translate-x-0.5 group-hover:text-[color:var(--lime)]" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-xl border border-[color:var(--border-c)] bg-[color:var(--card-bg)] p-4">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget as HTMLFormElement);
              const text = `Hi Travola, I'd like to book a consultation.%0A%0AName: ${fd.get("name")}%0AEmail: ${fd.get("email")}%0ADestination: ${fd.get("destination")}%0A%0A${fd.get("message")}`;
              window.open(`https://wa.me/2347079619684?text=${text}`, "_blank");
            }}
            className="rounded-2xl border border-[color:var(--border-c)] bg-[color:var(--card-bg)] p-6 md:p-8"
          >
            <h3 className="font-display text-xl font-bold text-strong">Book a consultation</h3>
            <p className="mt-1 text-[13px] text-[color:var(--muted-fg)]">
              We typically respond within 1 business hour.
            </p>

            <div className="mt-6 grid gap-4">
              <FormField name="name" label="Full name" required placeholder="Jane Doe" />
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  name="email"
                  type="email"
                  label="Email"
                  required
                  placeholder="you@email.com"
                />
                <FormField
                  name="destination"
                  label="Destination"
                  placeholder="UK, USA, Schengen…"
                />
              </div>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--dim)]">
                  How can we help?
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about your travel goals…"
                  className="mt-1.5 w-full resize-none rounded-lg border border-[color:var(--border2)] bg-[color:var(--bg3)] px-4 py-3 text-sm text-strong placeholder:text-[color:var(--dim)] outline-none transition focus:border-[color:var(--lime-border)]"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[color:var(--lime)] px-6 py-3.5 text-sm font-bold text-black [.light_&]:text-white transition hover:-translate-y-0.5"
              >
                Send via WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FormField({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--dim)]">
        {label}
      </span>
      <input
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-[color:var(--border2)] bg-[color:var(--bg3)] px-4 py-3 text-sm text-strong placeholder:text-[color:var(--dim)] outline-none transition focus:border-[color:var(--lime-border)]"
      />
    </label>
  );
}
