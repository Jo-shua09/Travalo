import { CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  "Comprehensive visa profile assessment",
  "Country eligibility and rist evaluation for the UK, Canada & Schengen states",
  "Detailed bank statement and supporting document review",
  "Transparent guidance; apply now, strengthen your profile, or consider an alternative route",
  "Professional analysis of previous visa refusals (where applicable)",
  "Personalized action plan delivered directly via whatsApp",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[color:var(--bg)] py-14 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--lime-border)] bg-[color:var(--lime-dim)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--lime)]">
              Expert Visa Analysis Session
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-strong">
              One session can <span className="text-[color:var(--lime)]">change everything.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-[15px] leading-[1.8] text-[color:var(--muted-fg)]">
              A single 30-minute session gives you a complete, honest picture of where your
              application stands - and exactly what to do next.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-[500px]">
          <Reveal delay={200}>
            <div className="relative overflow-hidden rounded-2xl border border-[color:var(--lime-border)] bg-[color:var(--card-bg)] p-6 shadow-deep md:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-[color:var(--lime)]" />

              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--border-c)] pb-6">
                <div>
                  <h3 className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-strong">
                    <span className="text-[color:var(--lime)]">⭐</span> Expert Visa Analysis
                  </h3>
                </div>
                <div className="text-left md:text-right">
                  <div className="font-display text-3xl font-extrabold text-[color:var(--lime)]">
                    ₦39,999
                  </div>
                  <p className="mt-1 text-[16px] text-[color:var(--muted-fg)]">30 mins</p>
                </div>
              </div>

              <p className="mb-6 text-[14.5px] leading-[1.7] text-[color:var(--text)]">
                Travola carefully reviews every part of your profile and provides a tailored,
                practical action plan not just generic advice.
              </p>

              <div className="mb-8">
                <h4 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--dim)]">
                  Everything covered in your session
                </h4>
                <ul className="grid gap-3">
                  {features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[14px] text-[color:var(--text)]"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--lime)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/2347079619684?text=Hi%20Travola,%20I'd%20like%20to%20book%20the%20Expert%20Visa%20Analysis%20Session."
                target="_blank"
                rel="noopener"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--lime)] px-6 py-4 text-[15px] font-bold text-black [.light_&]:text-white transition hover:-translate-y-0.5"
              >
                Book Your Session <ArrowRight className="h-4 w-4" />
              </a>

              <div className="mt-5 space-y-2 text-center text-[12.5px] text-[color:var(--muted-fg)]">
                <p>
                  After payment you'll be connected directly on WhatsApp to schedule your session.
                </p>
                <p className="text-[11px] italic text-[color:var(--dim)]">
                  * Consultation date and time are booked based on availability.
                  <br />* There is no refund after payment!
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
