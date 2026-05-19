import { useRef, useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

const videos = [
  "/media/video1.mp4",
  "/media/video2.mp4",
  "/media/video3.mp4",
  "/media/video4.mov",
  "/media/video5.mov",
  "/media/video6.mov",
  "/media/video7.mov",
  "/media/video8.mov",
];

const reviews = [
  {
    name: "Mr David A",
    quote:
      "Working with Travola was easy and straightforward. Every step was well explained - we weren't just sending documents, we were educated on the purpose of each one. Approved on our first try.",
  },
  {
    name: "Mrs Zainab",
    quote:
      "From start to end, it was seamless. Even when nobody referred you to me, I came across your page on TikTok and my instincts were right about Travola. God bless you and the whole team.",
  },
  {
    name: "Mr Larry",
    quote:
      "Thanks for your assistance with the successful visa application. It wasn't easy after three refusals - you guys are really good at what you do. More referrals coming Travola way.",
  },
  {
    name: "Mr Nathaniel",
    quote:
      "UK visa approved on my first attempt - no stress, no hassles. Big thanks to Travola for a smooth, seamless and highly professional process.",
  },
  {
    name: "Mrs Moreni",
    quote:
      "I was very doubtful at first - there was so much fear around the visa process. Travola handled everything with patience and professionalism. My aunt's visa was granted.",
  },
  {
    name: "Miss Adesewa",
    quote:
      "A big thank you for a job well done with my mum's visa application. I didn't think she'd get the 2-year visa as a first-timer - but you made it possible.",
  },
  {
    name: "Mr Longe",
    quote: "Travola did it. You are just the best. Knowing you is awesome - no one does it better.",
  },
  {
    name: "Mr Papa Cwesi",
    quote:
      "God bless you for making people's travel dreams come through. Your company will experience the grace and power of the Most High blessings, in Jesus' name. Amen.",
  },
  {
    name: "Mr Adurah",
    quote:
      "God and Travola did it! Thank you so much for your expert job with this. It's approval - let's celebrate!",
  },
  {
    name: "Mrs Starbee",
    quote:
      "Thank you so much for making this dream come true. God bless you and your team - mom arrived safely today.",
  },
  {
    name: "Mrs Zee",
    quote:
      "Good evening Travola - thank you so much, we really do appreciate it. The work of your hands are blessed.",
  },
];

export function Testimonials() {
  const reviewsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollReviews = (direction: "left" | "right") => {
    if (reviewsContainerRef.current) {
      const scrollAmount = reviewsContainerRef.current.clientWidth;
      reviewsContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = reviewsContainerRef.current;
    const checkScrollability = () => {
      if (el) {
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(Math.ceil(el.scrollLeft) < el.scrollWidth - el.clientWidth);
      }
    };
    if (el) {
      checkScrollability();
      el.addEventListener("scroll", checkScrollability, { passive: true });
      window.addEventListener("resize", checkScrollability);
      return () => {
        el.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, []);

  return (
    <section id="testimonials" className="bg-[color:var(--bg)] py-14 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-14 max-w-[640px]">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--lime-border)] bg-[color:var(--lime-dim)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--lime)]">
              Client Reviews
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-strong">
              Real journeys. <span className="text-[color:var(--lime)]">Real outcomes.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mb-16">
          <Reveal>
            <h3 className="mb-6 flex items-center gap-2 font-display text-[17px] font-bold tracking-tight text-strong">
              <span className="text-[color:var(--lime)]">▶</span> Video Testimonials - Approvals
            </h3>
          </Reveal>
          <div className="relative overflow-x-hidden hide-scrollbar [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="marquee-track flex w-max [animation-duration:40s] hover:[animation-play-state:paused] group/track">
              {[...videos, ...videos].map((vid, i) => (
                <div key={i} className="w-[280px] shrink-0 p-[5px] sm:w-[320px]">
                  <video
                    src={vid}
                    onPlay={(e) =>
                      (e.currentTarget.closest(".marquee-track") as HTMLElement)?.style.setProperty(
                        "animation-play-state",
                        "paused",
                      )
                    }
                    onPause={(e) =>
                      (e.currentTarget.closest(".marquee-track") as HTMLElement)?.style.setProperty(
                        "animation-play-state",
                        "running",
                      )
                    }
                    controls
                    playsInline
                    preload="metadata"
                    className="block w-full aspect-[1/1] rounded-xl border border-[color:var(--border-c)] bg-black shadow-deep"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-y-4">
          <Reveal>
            <h3 className="flex items-center gap-2 font-display text-[17px] font-bold tracking-tight text-strong">
              <span className="text-[color:var(--lime)]">✍️</span> Written Reviews
            </h3>
          </Reveal>
          <div className="flex gap-2">
            <button
              onClick={() => scrollReviews("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--border2)] bg-[color:var(--bg3)] text-[color:var(--muted-fg)] transition hover:text-strong disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollReviews("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--border2)] bg-[color:var(--bg3)] text-[color:var(--muted-fg)] transition hover:text-strong disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={reviewsContainerRef}
          className="hide-scrollbar mt-6 grid snap-x py-5 snap-mandatory grid-flow-col auto-cols-full gap-4 overflow-x-hidden sm:auto-cols-[calc(50%-8px)] lg:auto-cols-[calc(33.333%-11px)]"
        >
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 60} className="snap-center sm:snap-start">
              <figure className="h-full rounded-xl border border-[color:var(--border-c)] bg-[color:var(--card-bg)] p-6 transition-colors hover:border-[color:var(--lime-border)]">
                <div className="font-mono text-[13px] tracking-[2px] text-[color:var(--lime)]">
                  ★★★★★
                </div>
                <blockquote className="mt-4 text-[13.5px] font-light italic leading-[1.75] text-[color:var(--muted-fg)]">
                  <span className="text-[color:var(--lime)]">“</span>
                  {r.quote}
                  <span className="text-[color:var(--lime)]">”</span>
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between text-[13px] font-bold text-strong">
                  <span>- {r.name}</span>
                  <span className="text-base leading-none" aria-label="United Kingdom">
                    🇬🇧
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
