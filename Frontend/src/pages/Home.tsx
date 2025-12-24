import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Services from "../components/home/Services";
import HowItWorks from "../components/home/HowItWorks";
import ContactCTA from "../components/home/ContactCTA";
import FAQ from "../components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <ContactCTA />
      <FAQ />
    </>
  );
}
