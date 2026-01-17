import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function CareerCounseling() {
  return (
    <>
      <PageBanner
        title="Career Counseling"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Career Counseling" },
        ]}
      />

      <ServiceIntro
        title="Career Guidance for Students & Professionals"
        description="Get expert career counseling tailored for young professionals and experienced candidates planning their next move."
      />

      <SubServiceGrid
        services={[
          {
            title: "Young Professional Counseling",
            desc: "Career planning and guidance for fresh graduates and early professionals.",
            active: true,
          },
          {
            title: "Career Professional Counseling",
            desc: "Strategic career guidance for experienced professionals.",
            active: true,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
