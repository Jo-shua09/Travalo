import { useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Mr David A",
    badge: "First-try approval",
    quote:
      "Working with Travola was easy and straightforward. Every step of the application was well explained - we weren't just sending documents, we were educated on the purpose of each one. Our visas were approved on our first try. Highly professional.",
  },
  {
    name: "Mrs Zainab",
    badge: "Found via TikTok",
    quote:
      "From start to end, it was seamless. Even when nobody referred you to me, I came across your page on TikTok and my instincts were right about Travola. God bless you and the whole team.",
  },
  {
    name: "Mr Larry",
    badge: "Successful after 3 refusals",
    quote:
      "Thanks for your assistance with the successful visa application. It wasn't easy after three refusals - you guys are really good at what you do. More referrals coming Travola way.",
  },
  {
    name: "Mr Nathaniel",
    badge: "UK Visa · 1st attempt",
    quote:
      "UK visa approved on my first attempt - no stress, no hassles. Big thanks to Travola for a smooth, seamless and highly professional process.",
  },
  {
    name: "Mr Longe",
    badge: "Repeat client",
    quote: "TRAVOLA DID IT. You are just the best - knowing you is awesome. No one does it better.",
  },
  {
    name: "Mrs Moreni",
    badge: "Family visa",
    quote:
      "I was very doubtful at first - there was so much fear around the visa process. Travola handled everything with patience and professionalism. My aunt's visa was granted. 100% recommend.",
  },
  {
    name: "Miss Adesewa",
    badge: "2-yr visa, first time",
    quote:
      "A big thank you for a job well done with my mum's visa application. I didn't think she'd get the 2-year visa as a first-timer - but you made it possible.",
  },
  {
    name: "Mrs Starbee",
    badge: "Safe arrival",
    quote:
      "Thank you so much for making this dream come true. God bless you and your team - mom arrived safely today.",
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? clientWidth / 2 : clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount),
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="bg-gradient-soft py-16 md:py-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl text-center md:text-left">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Client Stories
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Real journeys. <span>Real outcomes.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={140} className="hidden gap-3 md:flex">
            <button
              onClick={() => scroll("left")}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>

        <div
          ref={scrollRef}
          className="mt-8 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-8 md:mt-12 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={(i % 4) * 80}
              className="w-[92vw] max-w-md shrink-0 snap-center md:w-[400px]"
            >
              <figure className="hover-lift flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-primary/20" />
                  </div>
                  <blockquote className="mt-5 text-[15px] leading-relaxed text-foreground/90 md:text-base">
                    {r.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center justify-between border-t border-border/50 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-elegant">
                      {r.name
                        .split(" ")
                        .map((p) => p[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{r.name}</div>
                      <div className="mt-0.5 text-xs font-medium text-muted-foreground">
                        {r.badge}
                      </div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="mt-2 flex justify-center gap-4 md:hidden">
          <button
            onClick={() => scroll("left")}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors active:border-primary/40 active:text-primary"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors active:border-primary/40 active:text-primary"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
