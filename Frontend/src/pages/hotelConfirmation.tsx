import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function HotelConfirmation() {
  return (
    <>
      <PageBanner
        title="Hotel Confirmation"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hotel Confirmation" },
        ]}
      />

      <ServiceIntro
        title="Hotel Confirmation for Visa & Travel"
        description="Get valid and verifiable hotel confirmation for visa applications, travel planning, and immigration requirements."
      />

      <SubServiceGrid
        services={[
          {
            title: "Visa Purpose Hotel Confirmation",
            desc: "Hotel booking confirmation accepted for visa and embassy submissions.",
            active: true,
            href: "/hotel-confirmation/apply/visa-purpose",
          },
          {
            title: "Dummy Hotel Booking",
            desc: "Temporary hotel reservation for visa application and documentation needs.",
            active: true,
            href: "/hotel-confirmation/apply/dummy-booking",
          },
          {
            title: "International Hotel Booking",
            desc: "Confirmed hotel bookings for international travel plans.",
            active: true,
            href: "/hotel-confirmation/apply/international",
          },
          {
            title: "Group & Long-Stay Booking",
            desc: "Hotel confirmations for group travel and extended stays.",
            active: true,
            href: "/hotel-confirmation/apply/group-longstay",
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
