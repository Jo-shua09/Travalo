import { Mail } from "lucide-react";
import logoWhite from "@/assets/travola-logo-white.png";
import logoFull from "@/assets/travola-logo-full.png";

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.73-1.52.4-.65.59-1.43.59-2.21 0-2.11 0-4.22 0-6.33z" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
              color: "text-white bg-black",
            },
            {
              icon: WhatsAppIcon,
              href: "https://wa.me/2347079619684",
              label: "WhatsApp",
              color: "text-white bg-[#25D366]",
            },
            {
              icon: Mail,
              href: "mailto:info@travolaglobalconsults.com",
              label: "Email",
              color: "text-white bg-[#EA4335]",
            },
          ].map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              aria-label={label}
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border-c)] text-[11px] font-medium text-[color:var(--dim)] transition hover:-translate-y-0.5 ${color}`}
            >
              <Icon className="h-4 w-4" />
              {/* <span>{label}</span> */}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
