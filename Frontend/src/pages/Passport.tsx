import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function Passport() {
  return (
    <>
      <PageBanner
        title="Passport Assistance"
        bgImage="/src/assets/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Passport" },
        ]}
      />

      <ServiceIntro
        title="Apply, Renew or Replace Your Passport"
        description="Get expert assistance for all passport-related services with smooth processing, accurate documentation, and end-to-end guidance."
      />

      <SubServiceGrid
        services={[
          {
            title: "Fresh Passport",
            desc: "Apply for a new Indian passport with complete documentation and expert handling.",
            href: "/passport/fresh",
            active: true,
          },
          {
            title: "Renewal Passport",
            desc: "Renew your expired or expiring passport quickly and securely.",
            href: "/passport/renewal",
            active: true,
          },
          {
            title: "Lost Passport",
            desc: "Reapply for a lost passport with proper legal and procedural guidance.",
            href:"/passport/lost",
            active: true,
          },
          {
            title: "Damaged Passport",
            desc: "Replace your damaged passport with professional support.",
            href:"/passport/damaged",
            active: true,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
