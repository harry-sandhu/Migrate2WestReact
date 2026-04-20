import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";
import aboutImg from "../assets/images/About-Us-Page.webp";
export default function FRRO() {
  return (
    <>
      <PageBanner
        title="FRRO Services"
        bgImage={aboutImg}
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
      href: "/frro/apply/registration",
    },
    {
      title: "Visa Extension",
      desc: "Support for extending visa validity through FRRO procedures.",
      active: true,
      href: "/frro/apply/visa-extension",
    },
    {
      title: "Exit Permit",
      desc: "FRRO exit permit processing for foreign nationals.",
      active: true,
      href: "/frro/apply/exit-permit",
    },
    {
      title: "Change of Address / Details",
      desc: "Update personal or address details with FRRO authorities.",
      active: true,
      href: "/frro/apply/change-details",
    },
  ]}
/>

      <ServicesCTA />
    </>
  );
}
