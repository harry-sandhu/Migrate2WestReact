import PageBanner from "../components/ui/PageBanner";
import AboutIntro from "../components/about/AboutIntro";
import WhyChoose from "../components/about/WhyChoose";
import VisionMission from "../components/about/VisionMission";

const About = () => {
  return (
    <>
      <PageBanner
        title="About Migrate2West"
        bgImage="/src/assets/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Migrate2West" },
        ]}
      />

      <AboutIntro />
      <WhyChoose />
      <VisionMission />
    </>
  );
};

export default About;
