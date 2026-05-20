import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import logoFull from "@/assets/travola-logo-full.png";
import logoWhite from "@/assets/travola-logo-white.png";

const links = [
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const t = (localStorage.getItem("travola-theme") as "dark" | "light") || "dark";
    setTheme(t);
    document.documentElement.classList.toggle("light", t === "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("travola-theme", next);
    } catch {}
  };

  return (
    <header className="nav-glass fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4 md:px-8">
        <a href="#top" aria-label="Travola - Connecting Dreams" className="flex items-center gap-2">
          <img
            src={logoWhite}
            alt="Travola Global Consults"
            className="block h-8 w-auto md:h-9 [.light_&]:hidden"
          />
          <img
            src={logoFull}
            alt="Travola Global Consults"
            className="hidden h-8 w-auto md:h-9 [.light_&]:block"
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-[13px] font-medium text-[color:var(--muted-fg)] transition hover:bg-[color:var(--bg3)] hover:text-strong"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--border2)] bg-[color:var(--bg3)] text-[color:var(--muted-fg)] transition hover:text-strong"
          >
            {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-lg bg-[color:var(--lime)] px-4 py-2 text-[13px] font-bold text-black [.light_&]:text-white transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Book a Session →
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--border2)] bg-[color:var(--bg3)] text-[color:var(--muted-fg)] lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[color:var(--border-c)] bg-[color:var(--bg2)] lg:hidden">
          <ul className="mx-auto grid max-w-[1280px] gap-1 px-4 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-[color:var(--muted-fg)] hover:bg-[color:var(--bg3)] hover:text-strong"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-lg bg-[color:var(--lime)] px-3 py-3 text-center text-sm font-bold text-black [.light_&]:text-white"
              >
                Book a Session →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
