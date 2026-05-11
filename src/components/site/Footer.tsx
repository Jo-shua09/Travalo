import { Instagram, Music2, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/travola-logo.png";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.08_0.02_270)] py-12 text-white/70">
      <div className="mx-auto grid w-[min(1200px,92%)] gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2">
            <img src={logo} alt="Travola" className="h-8 w-auto" width={140} height={32} />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Travola Global Consults Ltd. - connecting dreams, simplifying journeys. A tech-savvy
            travel consultancy based in Lagos, serving clients worldwide.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[
              {
                icon: Music2,
                href: "https://www.tiktok.com/@travolaglobalconsult",
                label: "TikTok",
              },
              { icon: MessageCircle, href: "https://wa.me/2347079619684", label: "WhatsApp" },
              { icon: Mail, href: "mailto:info@travolaglobalconsults.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-primary-glow/40 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="#about" className="hover:text-white">
                Our Story
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#audience" className="hover:text-white">
                Who We Serve
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>C4 Starklin Plaza, 7 Akowonjo Road, Egbeda, Lagos</li>
            <li>
              <a className="hover:text-white" href="tel:+2347079619684">
                +234 707 961 9684
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="mailto:info@travolaglobalconsults.com">
                info@travolaglobalconsults.com
              </a>
            </li>
            <li>Mon – Fri · 9:00 AM – 5:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-[min(1200px,92%)] flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
        <p>© {new Date().getFullYear()} Travola Global Consults Ltd. All rights reserved.</p>
        <p>Connecting Dreams · Lagos, Nigeria</p>
      </div>
    </footer>
  );
}
