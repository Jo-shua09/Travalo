import { MessageCircle, Mail } from "lucide-react";
import logoWhite from "@/assets/travola-logo-white.png";
import logoFull from "@/assets/travola-logo-full.png";

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.73-1.52.4-.65.59-1.43.59-2.21 0-2.11 0-4.22 0-6.33z" />
  </svg>
);

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
            {
              icon: TiktokIcon,
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
