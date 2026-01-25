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
        description="Prepare confidently for international language and entrance exams with expert trainers, structured plans, and personalized guidance."
      />

      <SubServiceGrid
        services={[
          {
            title: "IELTS Coaching",
            desc: "IELTS preparation for General, Academic, Medical & DULAT. (30 Hours)",
            active: true,
          },
          {
            title: "PTE Coaching",
            desc: "PTE Academic & PTE Core coaching with exam-focused strategies. (30 Hours)",
            active: true,
          },
          {
            title: "CELPIP Coaching",
            desc: "Specialized CELPIP training for Canada immigration. (30 Hours)",
            active: true,
          },
          {
            title: "GRE / GMAT / SAT",
            desc: "Comprehensive preparation for international entrance exams. (40 Hours)",
            active: true,
          },
          {
            title: "OET Coaching",
            desc: "OET preparation for Nursing & Medicine professionals. (30 Hours)",
            active: true,
          },
          {
            title: "French Language",
            desc: "Beginner to intermediate French language coaching. (30 Hours)",
            active: true,
          },
          {
            title: "German Language",
            desc: "German language training for study, work & migration. (30 Hours)",
            active: true,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
