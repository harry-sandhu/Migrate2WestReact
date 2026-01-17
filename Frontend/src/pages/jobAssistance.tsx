import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function JobAssistance() {
  return (
    <>
      <PageBanner
        title="Job Assistance"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Job Assistance" },
        ]}
      />

      <ServiceIntro
        title="Professional Job Assistance & Career Support"
        description="Enhance your career prospects with expert resume services, interview preparation, and job market guidance."
      />

      <SubServiceGrid
        services={[
          {
            title: "Resume Making",
            desc: "Professionally crafted resumes tailored to industry standards.",
            active: true,
          },
          {
            title: "Cover Letter Writing",
            desc: "Customized cover letters to strengthen job applications.",
            active: true,
          },
          {
            title: "Interview Preparation",
            desc: "Mock interviews and expert guidance to boost confidence.",
            active: true,
          },
          {
            title: "Resume Marketing",
            desc: "Strategic resume distribution to increase interview calls.",
            active: false,
          },
          {
            title: "Career Counseling",
            desc: "Personalized career guidance based on skills and goals.",
            active: true,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
