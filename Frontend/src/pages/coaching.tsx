import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function Coaching() {
  return (
    <>
      <PageBanner
        title="Coaching"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Coaching" },
        ]}
      />

      <ServiceIntro
        title="Language & Exam Coaching"
        description="Prepare confidently for international language exams with expert coaching and structured study plans."
      />

      <SubServiceGrid
        services={[
          {
            title: "IELTS Coaching",
            desc: "Comprehensive IELTS preparation for study, work, and migration.",
            active: true,
          },
          {
            title: "PTE Coaching",
            desc: "Targeted PTE training with exam-focused strategies.",
            active: true,
          },
          {
            title: "CELPIP Coaching",
            desc: "Specialized CELPIP preparation for Canada immigration.",
            active: true,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
