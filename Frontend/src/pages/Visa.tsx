import PageBanner from "../components/ui/PageBanner";
import VisaGrid from "../components/services/VisaGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function Visa() {
  return (
    <>
      <PageBanner
        title="Visa Information"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Visa Information" },
        ]}
      />

      <VisaGrid />

      <ServicesCTA />
    </>
  );
}
