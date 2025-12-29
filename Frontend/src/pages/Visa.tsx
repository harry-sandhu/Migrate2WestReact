// src/pages/Visa.tsx

import PageBanner from "../components/ui/PageBanner";
import VisaGrid from "../components/services/VisaGrid";
import ServicesCTA from "../components/services/ServicesCTA";


export default function Visa() {
  return (
    <>
      <PageBanner
        title="Travel Packages"
        breadcrumbs={["Home", "Visa"]}
        backgroundImage="/images/About-Us-Page.webp"
      />

      <VisaGrid />

      <ServicesCTA />

     
    </>
  );
}
