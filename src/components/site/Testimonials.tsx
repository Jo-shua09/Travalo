import { Reveal } from "./Reveal";

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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((vid, i) => (
              <Reveal key={vid} delay={i * 60}>
                <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border-c)] bg-black shadow-deep">
                  <video
                    src={vid}
                    controls
                    playsInline
                    preload="metadata"
                    className="block w-full"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <h3 className="mb-6 flex items-center gap-2 font-display text-[17px] font-bold tracking-tight text-strong">
            <span className="text-[color:var(--lime)]">✍️</span> Written Reviews
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 60}>
              <figure className="h-full rounded-xl border border-[color:var(--border-c)] bg-[color:var(--card-bg)] p-6 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.035] hover:border-[color:var(--lime-border)] hover:shadow-deep">
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
