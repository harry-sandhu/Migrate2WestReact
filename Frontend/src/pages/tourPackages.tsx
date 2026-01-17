import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function TourPackages() {
  return (
    <>
      <PageBanner
        title="Tour Packages"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tour Packages" },
        ]}
      />

      <ServiceIntro
        title="Customized Tour Packages for Every Traveler"
        description="Explore domestic and international destinations with well-planned tour packages, transparent pricing, and reliable travel support."
      />

      <SubServiceGrid
        services={[
          {
            title: "Domestic Tour Packages",
            desc: "Explore popular destinations across India with curated travel plans.",
            active: true,
          },
          {
            title: "International Tour Packages",
            desc: "Discover international destinations with complete travel arrangements.",
            active: true,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
