import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { TrustBar } from "@/components/site/TrustBar";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Travola Global Consults - Connecting Dreams, Simplifying Journeys" },
      {
        name: "description",
        content:
          "Premium visa consulting and seamless flight arrangements designed for the modern traveler. Lagos-based, globally trusted.",
      },
      { property: "og:title", content: "Travola Global Consults - Connecting Dreams" },
      {
        property: "og:description",
        content:
          "Expert visa consulting, flight & hotel reservations, documentation advisory and corporate travel - built on trust and tech.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/2347079619684"
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="wa-pulse fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
