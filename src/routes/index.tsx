import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Audience } from "@/components/site/Audience";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Travola Global Consults | Connecting Dreams, Simplifying Journeys" },
      {
        name: "description",
        content:
          "Premium visa consulting, flight & hotel bookings, documentation advisory, and corporate travel management services. Lagos-based, globally trusted. Let's plan your next journey.",
      },
      {
        name: "keywords",
        content:
          "Travola Global Consults, visa consulting, travel agency Lagos, flight bookings, UK visa, Schengen visa, US B1/B2, Canada IRCC, study abroad, family visa, corporate travel",
      },
      { property: "og:title", content: "Travola Global Consults | Connecting Dreams" },
      {
        property: "og:description",
        content:
          "Expert visa consulting, flight & hotel reservations, documentation advisory, and corporate travel - built on trust and tech.",
      },
      { property: "og:url", content: "https://travaloglobalconults.vercel.app/" },
      { property: "og:image", content: "https://travaloglobalconults.vercel.app/og-image.jpg" },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      { name: "twitter:title", content: "Travola Global Consults | Connecting Dreams" },
      {
        name: "twitter:description",
        content:
          "Expert visa consulting, flight & hotel reservations, documentation advisory, and corporate travel - built on trust and tech.",
      },
      { name: "twitter:image", content: "https://travaloglobalconults.vercel.app/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://travaloglobalconults.vercel.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Audience />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />

      <a
        href="https://wa.me/2347079619684"
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-elegant transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
