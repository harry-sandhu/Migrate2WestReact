import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function TravelInsurance() {
  return (
    <>
      <PageBanner
        title="Travel Insurance"
        bgImage="/images/About-Us-Page.webp"
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
            // later → href: "/travel-insurance/international"
          },
          {
            title: "Domestic Travel Insurance",
            desc: "Coverage for travel within India including medical and trip delays.",
            active: true,
            // later → href: "/travel-insurance/domestic"
          },
          {
            title: "Student Travel Insurance",
            desc: "Insurance plans tailored for students studying abroad.",
            active: true,
            // later → href: "/travel-insurance/student"
          },
          {
            title: "Senior Citizen Travel Insurance",
            desc: "Special coverage plans designed for senior travelers.",
            active: false,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
