import { useReveal } from "@/hooks/use-reveal";
import { Quote } from "lucide-react";

type Review = { name: string; quote: string; tag?: string };

const reviews: Review[] = [
  {
    name: "Mr. David A.",
    tag: "First-time applicants",
    quote:
      "Every step was well explained - we weren't just sending documents. They followed up on every process, including biometrics. Our visas were approved on our first try. Highly professional.",
  },
  {
    name: "Mrs. Zainab",
    tag: "TikTok referral",
    quote:
      "I came across your page on TikTok and my instincts were right. From start to end, it was seamless. God bless you and the whole team.",
  },
  {
    name: "Mr. Larry",
    tag: "Approved after 3 refusals",
    quote:
      "Successful after three refusals. You guys are really good at what you do. More referrals coming Travola way.",
  },
  {
    name: "Mr. Nathaniel",
    tag: "UK Visa",
    quote:
      "UK visa approved on my first attempt - no stress, no hassles. Smooth, seamless and highly professional. Highly recommended!",
  },
  {
    name: "Mrs. Moreni",
    tag: "Family visa",
    quote:
      "I was doubtful at first - there was so much fear around the visa process. Travola handled everything with patience. My aunt's visa was granted. 100% recommend.",
  },
  {
    name: "Miss Adesewa",
    tag: "2-year visa",
    quote:
      "Honestly, I didn't think she would get the 2-year visa as it was her first time, but you made it possible. I'll definitely recommend your services.",
  },
];

function Card({ r, i }: { r: Review; i: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <figure
      ref={ref}
      className="reveal hover-lift break-inside-avoid rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7"
      style={{ transitionDelay: `${(i % 3) * 80}ms` }}
    >
      <Quote className="h-7 w-7 text-primary/60" />
      <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-foreground/90">
        "{r.quote}"
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground">
          {r.name.split(" ").slice(-1)[0][0]}
        </span>
        <span>
          <span className="block text-sm font-semibold">{r.name}</span>
          {r.tag && <span className="block text-xs text-muted-foreground">{r.tag}</span>}
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const head = useReveal<HTMLDivElement>();
  return (
    <section id="testimonials" className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-[min(94%,1200px)]">
        <div ref={head} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Loved by travelers
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Real stories from real journeys.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Don't take our word for it - hear from the dreamers we've already helped.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
          {reviews.map((r, i) => (
            <div key={r.name} className="mb-5 lg:mb-6">
              <Card r={r} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
