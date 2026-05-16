import { Reveal } from "./Reveal";

const stages = [
  {
    title: "Extensive Consultation",
    desc: "Detailed assessment of personal, financial, travel and immigration history - bank statements, employment, family ties, travel history and strong ties to the home country - to determine eligibility and improve approval chances.",
  },
  {
    title: "Application Form Completion & Review",
    desc: "We carefully complete the visa application form with accurate, consistent information and thoroughly review every entry to eliminate errors, inconsistencies or omissions that could affect the outcome.",
  },
  {
    title: "Visa Fee Payment & Biometrics Booking",
    desc: "We process the visa fee payment, then assist in selecting a convenient biometrics center and booking your preferred date and time for biometrics enrolment.",
  },
  {
    title: "Document Provision by Applicant",
    desc: "You provide the supporting documents requested - bank statements, employment letters, business documents, invitation letters, proof of accommodation and other relevant evidence.",
  },
  {
    title: "Document Sorting & Uploading",
    desc: "All documents are professionally organized, reviewed and arranged according to visa requirements, then uploaded for clarity, completeness and easy assessment by the immigration officer.",
  },
  {
    title: "Submission of Application",
    desc: "Once everything is reviewed and uploaded successfully, the application is formally submitted to the relevant embassy or immigration authority for processing.",
  },
  {
    title: "Follow-Up & Updates",
    desc: "We monitor progress and share updates, assist with additional document requests, prepare you for interviews where applicable, and guide you until a final decision is received.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[color:var(--bg2)] py-14 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-14 max-w-[640px]">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--lime-border)] bg-[color:var(--lime-dim)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--lime)]">
              7-Stage Process
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-strong">
              We don't just advise.{" "}
              <span className="text-[color:var(--lime)]">We do it with you.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-[15px] leading-[1.8] text-[color:var(--muted-fg)]">
              From the first document to the final submission - we are right there, every step of
              the way. No guesswork. No abandoned calls. No confusing instructions handed to you
              with no follow-through.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[color:var(--border-c)] sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="hover-lift group h-full border-b border-r border-[color:var(--border-c)] bg-[color:var(--card-bg)] p-7 transition">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--border2)] bg-[color:var(--bg3)] font-mono text-xs font-bold text-[color:var(--lime)] transition group-hover:bg-[color:var(--lime)] group-hover:text-black">
                    0{i + 1}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[color:var(--dim)]">
                    Stage {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-[17px] font-bold leading-snug tracking-tight text-strong">
                  {s.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[color:var(--muted-fg)]">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
          <div className="hidden border-b border-r border-[color:var(--border-c)] bg-[color:var(--card-bg)] p-7 lg:block">
            <div className="flex h-full flex-col justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[color:var(--dim)]">
                Ready when you are
              </span>
              <div>
                <h3 className="font-display text-[17px] font-bold leading-snug tracking-tight text-strong">
                  Start your application today.
                </h3>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[color:var(--lime)] px-4 py-2.5 text-[13px] font-bold text-black [.light_&]:text-white transition hover:-translate-y-0.5"
                >
                  Book a Session →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
