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
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
