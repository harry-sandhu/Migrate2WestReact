import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function FRRO() {
  return (
    <>
      <PageBanner
        title="FRRO Services"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FRRO Services" },
        ]}
      />

      <ServiceIntro
        title="FRRO Registration & Immigration Compliance"
        description="Hassle-free FRRO services for foreign nationals with accurate documentation and government-compliant processing."
      />

      <SubServiceGrid
        services={[
          {
            title: "FRRO Registration",
            desc: "Mandatory registration assistance for foreign nationals in India.",
            active: true,
            // later → href: "/frro/registration"
          },
          {
            title: "Visa Extension",
            desc: "Support for extending visa validity through FRRO procedures.",
            active: true,
            // later → href: "/frro/visa-extension"
          },
          {
            title: "Exit Permit",
            desc: "FRRO exit permit processing for foreign nationals.",
            active: false,
          },
          {
            title: "Change of Address / Details",
            desc: "Update personal or address details with FRRO authorities.",
            active: false,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
