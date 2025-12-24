import PageBanner from "../components/ui/PageBanner";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = () => {
  return (
    <>
      <PageBanner
        title="Our Services"
        bgImage="/src/assets/images/About-Us-Page.webp"
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
