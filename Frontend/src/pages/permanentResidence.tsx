import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function PermanentResidence() {
  return (
    <>
      <PageBanner
        title="Permanent Residence"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Permanent Residence" },
        ]}
      />

      <ServiceIntro
        title="Permanent Residence & Immigration Programs"
        description="Get expert guidance for permanent residency programs with complete profile evaluation, documentation, and application support."
      />

      <SubServiceGrid
        services={[
          {
            title: "Canada Permanent Residence",
            desc: "Apply for Canada PR through Express Entry, PNP, and other immigration programs.",
            active: true,
            // later → href: "/permanent-residence/canada"
          },
          {
            title: "Australia Permanent Residence",
            desc: "Permanent residency pathways including skilled migration programs.",
            active: true,
            // later → href: "/permanent-residence/australia"
          },
          {
            title: "Skilled Migration Assessment",
            desc: "Eligibility check and profile assessment for skilled migration.",
            active: false,
          },
          {
            title: "PR Consultation & Profile Review",
            desc: "One-on-one consultation to evaluate PR options and chances.",
            active: false,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
