import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/travola-logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#audience", label: "Who We Serve" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto w-[min(1200px,94%)]">
        <nav
          className={`flex items-center justify-between rounded-2xl border border-white/40 px-4 py-2.5 transition-all md:px-5 ${
            scrolled ? "glass shadow-card" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Travola Global Consults"
              className="h-9 w-auto md:h-10"
              width={160}
              height={40}
            />
          </a>
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/2347079619684"
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-2 text-xs font-semibold text-foreground transition hover:border-primary/40 hover:text-primary sm:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" /> 0707 961 9684
            </a>
            <a
              href="#contact"
              className="hidden items-center justify-center rounded-full bg-gradient-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03] md:inline-flex"
            >
              Book a Consultation
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-border bg-background/95 p-4 shadow-card backdrop-blur lg:hidden">
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center rounded-full bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
            >
              Book a Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
