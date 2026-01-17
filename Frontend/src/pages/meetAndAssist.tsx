import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function MeetAndAssist() {
  return (
    <>
      <PageBanner
        title="Meet & Assist"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Meet & Assist" },
        ]}
      />

      <ServiceIntro
        title="Airport Meet & Assist Services"
        description="Smooth airport experience with professional meet and assist services for arrivals, departures, and transit."
      />

      <SubServiceGrid
        services={[
          {
            title: "Arrival Assistance",
            desc: "Support at airport arrivals including immigration and baggage assistance.",
            active: true,
          },
          {
            title: "Departure Assistance",
            desc: "Hassle-free departure support with check-in and boarding assistance.",
            active: true,
          },
          {
            title: "Transit Assistance",
            desc: "Seamless transit support at connecting airports.",
            active: false,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
