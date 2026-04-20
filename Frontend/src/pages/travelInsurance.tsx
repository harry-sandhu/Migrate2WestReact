import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";
import aboutImg from "../assets/images/About-Us-Page.webp";
export default function TravelInsurance() {
  return (
    <>
      <PageBanner
        title="Travel Insurance"
        bgImage={aboutImg}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Travel Insurance" },
        ]}
      />

      <ServiceIntro
        title="Travel Insurance for Safe & Secure Journeys"
        description="Protect your travel with comprehensive insurance coverage for medical emergencies, trip cancellations, and unexpected events."
      />

      <SubServiceGrid
        services={[
          {
            title: "International Travel Insurance",
            desc: "Medical, baggage, and trip protection for overseas travel.",
            active: true,
            href: "/travel-insurance/apply/international",
          },
          {
            title: "Domestic Travel Insurance",
            desc: "Coverage for travel within India including medical and trip delays.",
            active: true,
            href: "/travel-insurance/apply/domestic",
          },
          {
            title: "Student Travel Insurance",
            desc: "Insurance plans tailored for students studying abroad.",
            active: true,
            href: "/travel-insurance/apply/student",
          },
          {
            title: "Senior Citizen Travel Insurance",
            desc: "Special coverage plans designed for senior travelers.",
            active: true,
            href: "/travel-insurance/apply/senior-citizen",
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}