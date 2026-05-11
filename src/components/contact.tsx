import { useReveal } from "@/hooks/use-reveal";
import { Logo } from "./logo";
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";

const tiktok = "https://www.tiktok.com/@travolaglobalconsult";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-[min(94%,1200px)]">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-primary p-8 text-primary-foreground shadow-elegant sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-black/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                Let's talk
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Ready to plan your next journey?
              </h2>
              <p className="mt-4 max-w-md text-white/80">
                Reach out for a free consultation - we'll guide you from application to arrival.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/2347079619684"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <a
                  href="mailto:info@travolaglobalconsults.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
                >
                  <Mail className="h-4 w-4" /> Email Us
                </a>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Item Icon={MapPin} title="Office">
                C4 Starklin Plaza, 7 Akowonjo Road, Egbeda, Lagos
              </Item>
              <Item Icon={Phone} title="Phone / WhatsApp">
                +234 707 961 9684
              </Item>
              <Item Icon={Mail} title="Email">
                info@travolaglobalconsults.com
              </Item>
              <Item Icon={Clock} title="Business Hours">
                Mon – Fri · 9:00am – 5:00pm
              </Item>
            </ul>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-16 w-[min(94%,1200px)]">
        <div className="grid gap-10 border-t border-border pt-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Travola Global Consults Ltd - connecting dreams through transparent, dependable,
              tech-driven travel consulting.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-foreground">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Follow</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={tiktok} target="_blank" rel="noreferrer" className="hover:text-foreground">
                  TikTok · @travolaglobalconsult
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347079619684"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:info@travolaglobalconsults.com" className="hover:text-foreground">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Travola Global Consults Ltd. All rights reserved.</p>
          <p>Lagos, Nigeria · Serving travelers worldwide</p>
        </div>
      </footer>
    </section>
  );
}

function Item({
  Icon,
  title,
  children,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/70">{title}</p>
        <p className="mt-1 break-words text-sm text-white">{children}</p>
      </div>
    </li>
  );
}
