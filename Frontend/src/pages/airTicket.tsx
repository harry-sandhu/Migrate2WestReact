import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function AirTicket() {
  return (
    <>
      <PageBanner
        title="Air Ticket Services"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Air Ticket" },
        ]}
      />

      <ServiceIntro
        title="Book Domestic & International Air Tickets"
        description="Get the best flight options with expert assistance, flexible booking support, and reliable after-booking service."
      />

      <SubServiceGrid
        services={[
          {
            title: "Domestic Air Tickets",
            desc: "Book affordable and convenient flights across India with trusted airlines.",
            active: true,
            // later → href: "/air-ticket/domestic"
          },
          {
            title: "International Air Tickets",
            desc: "Fly worldwide with competitive fares and end-to-end booking support.",
            active: true,
            // later → href: "/air-ticket/international"
          },
          {
            title: "Group Bookings",
            desc: "Special assistance and pricing for group and corporate travel.",
            active: false,
          },
          {
            title: "Flight Rescheduling & Cancellation",
            desc: "Support for rescheduling, cancellations, and refund processing.",
            active: false,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
