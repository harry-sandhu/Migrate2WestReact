import PageBanner from "../components/ui/PageBanner";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesCTA from "../components/services/ServicesCTA";
import aboutImg from "../assets/images/About-Us-Page.webp";
const Services = () => {
  return (
    <>
      <PageBanner
        title="Our Services"
        bgImage={aboutImg}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <ServicesGrid />
      <ServicesCTA />
    </>
  );
};

export default Services;
