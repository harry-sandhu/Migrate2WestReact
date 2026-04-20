import PageBanner from "../components/ui/PageBanner";
import AboutIntro from "../components/about/AboutIntro";
import WhyChoose from "../components/about/WhyChoose";
import VisionMission from "../components/about/VisionMission";
import aboutImg from "../assets/images/About-Us-Page.webp";

const About = () => {
  return (
    <>
      <PageBanner
        title="About Migrate2West"
        bgImage={aboutImg}
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
