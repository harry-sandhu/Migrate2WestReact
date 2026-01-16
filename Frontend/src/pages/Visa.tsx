import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function Visa() {
  return (
    <>
      <PageBanner
        title="Visa Services"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Visa Services" },
        ]}
      />

      <ServiceIntro
        title="Choose the Right Visa for Your Travel"
        description="We provide expert assistance across all major visa categories with accurate documentation, clear timelines, and end-to-end guidance."
      />

      <SubServiceGrid
        services={[
          {
            title: "Tourist Visa",
            desc: "Travel for leisure, sightseeing, or visiting family and friends.",
            href: "/visa/tourist",
            active: true,
          },
          {
            title: "Student Visa",
            desc: "Study abroad at recognized universities and institutions.",
            href: "/visa/student",
            active: true,
          },
          {
            title: "Business Visa",
            desc: "Attend meetings, conferences, and business activities overseas.",
            href: "/visa/business",
            active: true,
          },
          {
            title: "Work Visa",
            desc: "Work legally abroad with employer sponsorship.",
            href: "/visa/work",
            active: true,
          },
          {
            title: "Medical Visa",
            desc: "Seek medical treatment at international hospitals.",
            href: "/visa/medical",
            active: true,
          },
          {
            title: "Spouse / Dependent Visa",
            desc: "Join your spouse or family member living abroad.",
            href: "/visa/spouse",
            active: true,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
