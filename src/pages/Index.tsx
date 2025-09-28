import Hero from "../_components/Hero.tsx";
import Services from "../_components/Services.tsx";
import Process from "../_components/Process.tsx";
import Portfolio from "../_components/Portfolio.tsx";
import Testimonials from "../_components/Testimonials.tsx";
import Pricing from "../_components/Pricing.tsx";
import Contact from "../_components/Contact.tsx";
import Footer from "../_components/Footer.tsx";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}