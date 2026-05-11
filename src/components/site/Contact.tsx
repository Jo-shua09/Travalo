import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[oklch(0.1_0.02_275)] py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />

      <div className="relative mx-auto grid w-[min(1200px,92%)] gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-glow">
              Get in touch
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-4xl">
              Let&apos;s plan your <span className="shimmer-text">next journey.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-md text-pretty text-base text-white/65 md:text-lg">
              Book a free consultation. We&apos;ll review your goals, recommend the right route and
              handle the rest - visa to take-off.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3">
            {[
              {
                icon: MapPin,
                label: "Office",
                value: "C4 Starklin Plaza, 7 Akowonjo Road, Egbeda, Lagos",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+234 707 961 9684",
                href: "tel:+2347079619684",
              },
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
              { icon: Clock, label: "Hours", value: "Mon – Fri · 9:00 AM – 6:00 PM" },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <Reveal key={label} delay={180 + i * 50}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener"
                    className="hover-lift group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition hover:border-primary-glow/40"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[11px] uppercase tracking-wider text-white/55">
                        {label}
                      </span>
                      <span className="block text-sm font-medium text-white">{value}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-0.5 group-hover:text-white" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-white/55">
                        {label}
                      </div>
                      <div className="text-sm font-medium">{value}</div>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget as HTMLFormElement);
              const name = fd.get("name");
              const email = fd.get("email");
              const dest = fd.get("destination");
              const msg = fd.get("message");
              const text = `Hi Travola, I'd like to book a consultation.%0A%0AName: ${name}%0AEmail: ${email}%0ADestination: ${dest}%0A%0A${msg}`;
              window.open(`https://wa.me/2347079619684?text=${text}`, "_blank");
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-8"
          >
            <h3 className="font-display text-xl font-bold md:text-2xl">Book a consultation</h3>
            <p className="mt-1 text-sm text-white/60">
              We typically respond within 1 business hour.
            </p>

            <div className="mt-6 grid gap-4">
              <label className="block">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                  Full name
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary-glow/60 focus:bg-white/[0.06]"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                    Email
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary-glow/60 focus:bg-white/[0.06]"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                    Destination
                  </span>
                  <input
                    name="destination"
                    type="text"
                    placeholder="UK, USA, Schengen…"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary-glow/60 focus:bg-white/[0.06]"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                  How can we help?
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about your travel goals…"
                  className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary-glow/60 focus:bg-white/[0.06]"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.02]"
              >
                Send via WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-[11px] text-white/45">
                By submitting you agree to be contacted about your enquiry.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
