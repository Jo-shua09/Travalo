import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight, MessageCircle, Mail } from "lucide-react";
import { Logo } from "@/components/logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#audience", label: "Who We Serve" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto w-[min(96%,1200px)]">
          <div
            className={`glass flex items-center justify-between rounded-2xl border border-border/60 px-4 py-2.5 transition-all duration-500 sm:px-5 ${
              scrolled ? "shadow-soft" : ""
            }`}
          >
            <a href="#top" className="flex items-center gap-2">
              <Logo className="h-10 w-auto sm:h-12" />
            </a>
            <nav className="hidden items-center gap-7 lg:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="story-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/2347079619684"
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] sm:inline-flex"
              >
                <Phone className="h-3.5 w-3.5" />
                Book a Consultation
              </a>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="relative z-[60] grid h-11 w-11 place-items-center rounded-full border border-border bg-background/80 backdrop-blur transition-colors lg:hidden"
              >
                <span className="relative h-5 w-5">
                  <Menu
                    className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                      open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                      open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className={`absolute -left-24 top-10 h-72 w-72 rounded-full bg-gradient-primary opacity-40 blur-3xl transition-all duration-700 ${
              open ? "translate-y-0 opacity-40" : "-translate-y-10 opacity-0"
            }`}
          />
          <div
            className={`absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-primary-glow opacity-30 blur-3xl transition-all delay-150 duration-700 ${
              open ? "translate-y-0 opacity-30" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div
          className={`relative flex h-full flex-col px-6 pb-10 pt-24 text-ink-foreground transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <nav className="mt-6 flex flex-1 flex-col">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                className={`group flex items-center justify-between border-b border-white/10 py-5 font-display text-xl font-semibold transition-all duration-500 sm:text-4xl ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 group-hover:bg-[length:100%_2px]">
                  {l.label}
                </span>
                <ArrowUpRight className="h-6 w-6 text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
              </a>
            ))}
          </nav>

          <div
            style={{ transitionDelay: open ? `${120 + links.length * 70}ms` : "0ms" }}
            className={`mt-8 space-y-3 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href="https://wa.me/2347079619684"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a
              href="mailto:info@travolaglobalconsults.com"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold text-white backdrop-blur"
            >
              <Mail className="h-4 w-4" /> Email Us
            </a>
            <p className="pt-2 text-center text-xs text-white/50">
              C4 Starklin Plaza, Egbeda · Lagos
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
