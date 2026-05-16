import { Instagram, Music2, MessageCircle, Mail } from "lucide-react";
import logoWhite from "@/assets/travola-logo-white.png";
import logoFull from "@/assets/travola-logo-full.png";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border-c)] bg-[color:var(--bg)] py-8">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 md:px-8">
        <a href="#top" aria-label="Travola" className="inline-flex">
          <img
            src={logoWhite}
            alt="Travola Global Consults"
            className="h-8 w-auto block [.light_&]:hidden"
          />
          <img
            src={logoFull}
            alt="Travola Global Consults"
            className="h-8 w-auto hidden [.light_&]:block"
          />
        </a>
        <p className="font-mono text-[11px] text-[color:var(--dim)]">
          © {new Date().getFullYear()} Travola Global Consults Ltd. - Connecting Dreams.
        </p>
        <div className="flex items-center gap-2">
          {[
            { icon: Music2, href: "https://www.tiktok.com/@travolaglobalconsult", label: "TikTok" },
            { icon: MessageCircle, href: "https://wa.me/2347079619684", label: "WhatsApp" },
            { icon: Mail, href: "mailto:info@travolaglobalconsults.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--border-c)] text-[color:var(--dim)] transition hover:-translate-y-0.5 hover:border-[color:var(--lime-border)] hover:text-[color:var(--lime)]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
