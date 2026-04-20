import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";
import aboutImg from "../assets/images/About-Us-Page.webp";
export default function PermanentResidence() {
  return (
    <>
      <PageBanner
        title="Permanent Residence"
        bgImage={aboutImg}
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
      href: "/permanent-residence/apply/canada",
    },
    {
      title: "Australia Permanent Residence",
      desc: "Permanent residency pathways including skilled migration programs.",
      active: true,
      href: "/permanent-residence/apply/australia",
    },
    {
      title: "Skilled Migration Assessment",
      desc: "Eligibility check and profile assessment for skilled migration.",
      active: true,
      href: "/permanent-residence/apply/assessment",
    },
    {
      title: "PR Consultation & Profile Review",
      desc: "One-on-one consultation to evaluate PR options and chances.",
      active: true,
      href: "/permanent-residence/apply/consultation",
    },
  ]}
/>

      <ServicesCTA />
    </>
  );
}
