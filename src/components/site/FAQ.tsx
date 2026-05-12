import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "What services does Travola Global Consults offer?",
    answer:
      "We offer comprehensive visa consultation & processing (including tourist, study, business, and family visas), flight & hotel bookings, travel insurance, documentation advisory (e.g., passports, invitation letters), and corporate travel management services.",
  },
  {
    question: "How long does the visa application process typically take?",
    answer:
      "The duration varies significantly based on the country, visa type, and current processing times of the respective embassy or consulate. We provide estimated timelines during your consultation, but the final decision timeframe is outside our control. Our meticulous preparation aims to minimize delays.",
  },
  {
    question: "What is your success rate for visa applications?",
    answer:
      "We pride ourselves on a 98% first-try visa approval rate. This high success is attributed to our thorough preparation, expert guidance, and ensuring all documentation aligns perfectly with immigration requirements.",
  },
  {
    question: "Do you guarantee visa approval?",
    answer:
      "While we guarantee to submit the strongest possible application on your behalf, we cannot guarantee visa approval. The final decision rests solely with the immigration authorities of the destination country. We ensure every effort is made to present your case favorably.",
  },
  {
    question: "How do I start my application process with Travola Global Consults?",
    answer:
      "To begin, simply book a free consultation through our website or contact us directly via WhatsApp or phone. During this session, we'll assess your travel goals, advise on the best route, and guide you through each subsequent step of your journey.",
  },
  {
    question: "Can I book flights and hotels through you without using your visa services?",
    answer:
      "Yes, absolutely! We offer stand-alone flight and hotel booking services tailored to your schedule and budget. These can be utilized independently or as part of a complete travel package alongside our visa services.",
  },
  {
    question: "Where is Travola Global Consults located, and do you serve international clients?",
    answer:
      "Our primary office is located in Lagos, Nigeria. However, we are proud to serve a diverse client base globally through our robust online platforms and virtual consultation services, ensuring you receive top-tier service no matter your location.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-background py-16 md:py-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Help & Support
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-4xl">
              Common Questions
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
              Find answers to the most frequently asked questions about our services, processes, and
              what to expect.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:mt-10">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 80}>
              <details className="group rounded-xl border border-border bg-card p-4 md:p-5 shadow-card transition-all duration-300 open:border-primary-glow/40 open:shadow-lg">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-foreground transition-colors group-hover:text-primary-glow md:text-base">
                  {faq.question}
                  <svg
                    className="ml-4 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180 group-open:text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-3 text-xs leading-relaxed text-muted-foreground md:mt-4 md:text-sm">
                  {faq.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
