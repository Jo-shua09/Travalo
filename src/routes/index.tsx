import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Audience } from "@/components/audience";
import { Contact } from "@/components/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Travola Global Consults - Connecting Dreams, Simplifying Journeys" },
      {
        name: "description",
        content:
          "Premium visa consulting and seamless flight arrangements for the modern traveler. Tech-driven, transparent and trusted across Africa and beyond.",
      },
      { property: "og:title", content: "Travola Global Consults - Connecting Dreams" },
      {
        property: "og:description",
        content:
          "Expert visa consulting & flight arrangements for students, families, tourists and corporates.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Audience />
      <Testimonials />
      <Contact />
    </main>
  );
}
