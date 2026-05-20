import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What services does Travola Global Consults offer?",
    a: "We provide professional visa processing assistance, visa consultation, flight ticketing, hotel booking, student admission and visa assistance, travel insurance, and general travel documents assistance - all handled with professionalism and real follow-through.",
  },
  {
    q: "Do you guarantee visa approval?",
    a: "No honest consultancy can guarantee visa approval - the final decision rests solely with the embassy or immigration authority. However, we significantly increase your chances by preparing strong applications, accurate documentation and honest assessments of your eligibility.",
  },
  {
    q: "How long does the visa application process take?",
    a: "Processing times vary by country and visa type. Some visas take a few weeks, others several months. We keep you informed at every stage and help you plan your travel timeline accordingly.",
  },
  {
    q: "Can you help with student admissions abroad?",
    a: "Yes. We assist with school selection, application processing, admission letters and student visa guidance - from your first inquiry to your final documentation.",
  },
  {
    q: "Do I need to visit your office in Lagos?",
    a: "Not necessarily. Many steps can be handled online. However, some stages - like biometrics - require your physical presence at an official visa application centre. We guide you through every requirement so nothing is missed.",
  },
  {
    q: "What countries do you process visas for?",
    a: "We cover a wide range of destinations including the UK, USA, Canada, Schengen countries, Australia, African Countries and many others. Reach out and we will confirm eligibility for your specific destination.",
  },
  {
    q: "How do I get started?",
    a: "Simply click the 'Book a Consultation' button, fill out the contact form or message us directly on WhatsApp. We will assess your situation and recommend the best path forward.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[color:var(--bg2)] py-14 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-14 max-w-[640px]">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--lime-border)] bg-[color:var(--lime-dim)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--lime)]">
              FAQ
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-strong">
              Questions? <span className="text-[color:var(--lime)]">We have answers.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={q} delay={i * 50}>
                <div
                  className={`rounded-xl border transition-colors duration-200 ${
                    isOpen
                      ? "border-[color:var(--lime-border)] bg-[color:var(--card-bg)]"
                      : "border-[color:var(--border-c)] bg-[color:var(--card-bg)] hover:border-[color:var(--border2)]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[15px] font-semibold leading-snug tracking-tight text-strong">
                      {q}
                    </span>
                    <span
                      className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border text-[color:var(--lime)] transition-all ${
                        isOpen
                          ? "border-[color:var(--lime-border)] bg-[color:var(--lime-dim)]"
                          : "border-[color:var(--border2)] bg-[color:var(--bg3)]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-[13.5px] leading-[1.8] text-[color:var(--muted-fg)] md:px-6 md:pb-6">
                      {a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
