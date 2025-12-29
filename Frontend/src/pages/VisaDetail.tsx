import { useParams, Navigate } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";

import VisaHero from "../components/visa/VisaHero";
import VisaCostEstimator from "../components/visa/VisaCostEstimator";
import VisaEligibility from "../components/visa/VisaEligibility";
import VisaProcessTimeline from "../components/visa/VisaProcessTimeline";
import VisaRequirements from "../components/visa/VisaRequirements";
import VisaCTA from "../components/visa/VisaCTA";

import { visaDetails } from "../utils/visaDetails";

export default function VisaDetail() {
  const { slug } = useParams();

  const visa = visaDetails[slug as keyof typeof visaDetails];

  if (!visa) {
    return <Navigate to="/visa" replace />;
  }

  return (
    <>
      {/* Banner */}
      <PageBanner
        title={visa.title}
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Visa", href: "/visa" },
          { label: visa.title },
        ]}
      />

      {/* Hero */}
      <VisaHero visa={visa} />

      {/* Cost Estimator (VERY IMPORTANT) */}
      <VisaCostEstimator visa={visa} />

      {/* Eligibility Snapshot */}
      <VisaEligibility visa={visa} />

      {/* Process Timeline */}
      <VisaProcessTimeline visa={visa} />

      {/* Documents */}
      <VisaRequirements visa={visa} />

      {/* Final CTA */}
      <VisaCTA />
    </>
  );
}
