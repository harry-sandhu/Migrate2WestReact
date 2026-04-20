import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function StudyAbroad() {
  return (
    <>
      <PageBanner
        title="Study Abroad"
        bgImage="/images/study-abroad-banner.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study Abroad" },
        ]}
      />

      <ServiceIntro
        title="Complete Study Abroad Assistance"
        description="From university selection to visa approval, we provide end-to-end guidance to help you study overseas with confidence."
      />

      <SubServiceGrid
  services={[
    {
      title: "Country Selection",
      desc: "Expert guidance to choose the right country based on your profile, budget, and career goals.",
      active: true,
      href: "/study-abroad/apply/country-selection",
    },
    {
      title: "University Shortlisting",
      desc: "Personalized university and course selection aligned with your academic background.",
      active: true,
      href: "/study-abroad/apply/university-shortlisting",
    },
    {
      title: "SOP & LOR Assistance",
      desc: "Professional drafting and review of Statement of Purpose and Letters of Recommendation.",
      active: true,
      href: "/study-abroad/apply/sop-lor",
    },
    {
      title: "Application Processing",
      desc: "Complete support with university application filing and documentation.",
      active: true,
      href: "/study-abroad/apply/application",
    },
    {
      title: "Offer Letter Assistance",
      desc: "Guidance in reviewing and securing university offer letters.",
      active: true,
      href: "/study-abroad/apply/offer-letter",
    },
    {
      title: "Student Visa Filing",
      desc: "Accurate visa documentation and filing with expert supervision.",
      active: true,
      href: "/study-abroad/apply/visa",
    },
    {
      title: "Education Loan Support",
      desc: "Assistance with student loan documentation and approvals.",
      active: true,
      href: "/study-abroad/apply/loan",
    },
    {
      title: "Pre-Departure Briefing",
      desc: "Complete orientation before you fly abroad.",
      active: true,
      href: "/study-abroad/apply/pre-departure",
    },
  ]}
/>

      <ServicesCTA />
    </>
  );
}