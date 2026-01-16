import PageBanner from "../components/ui/PageBanner";
import ServiceIntro from "../components/services/ServicesIntro";
import SubServiceGrid from "../components/services/SubServiceGrid";
import ServicesCTA from "../components/services/ServicesCTA";

export default function OCI() {
  return (
    <>
      <PageBanner
        title="OCI Card Services"
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "OCI Card" },
        ]}
      />

      <ServiceIntro
        title="OCI Card Application & Renewal"
        description="Professional assistance for OCI card applications, renewals, and updates with accurate documentation and timely processing."
      />

      <SubServiceGrid
        services={[
          {
            title: "New OCI Card Application",
            desc: "Apply for a new OCI card with complete eligibility and document support.",
            active: true,
            // later → href: "/oci/new"
          },
          {
            title: "OCI Card Renewal",
            desc: "Renew or reissue OCI card due to passport or personal detail changes.",
            active: true,
            // later → href: "/oci/renewal"
          },
          {
            title: "OCI Miscellaneous Services",
            desc: "Update personal details, address, or passport information in OCI.",
            active: false,
          },
          {
            title: "OCI to Indian Visa Assistance",
            desc: "Guidance for OCI-related visa or travel requirements.",
            active: false,
          },
        ]}
      />

      <ServicesCTA />
    </>
  );
}
