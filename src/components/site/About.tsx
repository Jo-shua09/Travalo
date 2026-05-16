import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  "No agents, no middlemen - direct expert handling end-to-end",
  "Real follow-up at every stage - never abandoned mid-process",
  "Built on integrity, professionalism and complete transparency",
  "Tech-savvy workflow that keeps you informed in real time",
];

export function About() {
  return (
    <section id="about" className="relative bg-[color:var(--bg)] py-14 md:py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--lime-border)] bg-[color:var(--lime-dim)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--lime)]">
              About Travola
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-strong">
              Travel should be an experience -{" "}
              <span className="text-[color:var(--lime)]">not a source of stress.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-[15px] leading-[1.8] text-[color:var(--muted-fg)]">
              Travola Global Consults Ltd. was founded out of a genuine passion for simplifying the
              complexities that surround visa applications and travel arrangements. We have evolved
              into a dynamic, tech-savvy, customer-focused consultancy - opening doors to global
              opportunities with confidence, clarity and convenience.
            </p>
          </Reveal>
          <ul className="mt-7 grid gap-3">
            {points.map((p, i) => (
              <Reveal key={p} delay={200 + i * 60}>
                <li className="flex items-start gap-3 text-[14px] text-[color:var(--text)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--lime)]" />
                  <span>{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-3">
            {[
              { k: "500+", v: "Approvals" },
              { k: "98%", v: "First-try rate" },
              { k: "60+", v: "Destinations" },
              { k: "24/7", v: "Support" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-[color:var(--border-c)] bg-[color:var(--card-bg)] p-6 transition hover:border-[color:var(--lime-border)]"
              >
                <div className="font-display text-4xl font-extrabold tracking-tight text-[color:var(--lime)]">
                  {s.k}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--dim)]">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
