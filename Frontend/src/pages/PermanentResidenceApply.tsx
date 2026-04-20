import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import useServiceData from "../hooks/useServiceData";

import PageBanner from "../components/ui/PageBanner";
import ApplicationForm from "../components/forms/ApplicationForm";
import PaymentCTA from "../components/passport/PaymentCTA";

import { permanentResidenceConfig } from "../utils/permanentResidenceConfig";

export default function PermanentResidenceApply() {
  const { slug } = useParams<{ slug: string }>();

  const { data, loading, error } = useServiceData();

  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    email: "",
  });

  if (!slug) {
    return <Navigate to="/permanent-residence" replace />;
  }

  const config =
    permanentResidenceConfig[
      slug as keyof typeof permanentResidenceConfig
    ];

  if (!config) {
    return <Navigate to="/permanent-residence" replace />;
  }

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-center">{error}</div>;

  const keyMap: Record<string, string> = {
    canada: "canada",
    australia: "australia",
    assessment: "assessment",
    consultation: "consultation",
  };

  const backendKey = keyMap[slug];

  const dynamicFee =
    data?.permanentResidence?.[backendKey]?.serviceFee;

  const finalConfig = {
    ...config,
    serviceFee: dynamicFee ?? config.serviceFee,
  };

  const isValid =
    applicant.name.trim().length > 1 &&
    applicant.phone.trim().length >= 10 &&
    applicant.email.includes("@");

  return (
    <div className="min-h-screen bg-[#f7f9fc]">

      <PageBanner
        title={finalConfig.title}
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Permanent Residence", href: "/permanent-residence" },
          { label: finalConfig.title },
        ]}
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600">
              {finalConfig.description}
            </p>
          </div>

          <ApplicationForm
            title="Applicant Details"
            subtitle="Enter your contact details for PR processing"
            value={applicant}
            onChange={(field, value) =>
              setApplicant({ ...applicant, [field]: value })
            }
          />

          <PaymentCTA
            disabled={!isValid}
            state={{
              serviceType: "permanent-residence",
              serviceName: "Permanent Residence",
              subServiceName: finalConfig.title,
              applicant,

              // ✅ REQUIRED FOR BACKEND
              selectedSlot: "no-slot",

              breakdown: {
                basePrice: finalConfig.serviceFee,
              },
              totalAmount: finalConfig.serviceFee,
            }}
          />

          {!isValid && (
            <p className="text-center text-sm text-red-500">
              Please fill all required details to continue
            </p>
          )}
        </div>
      </section>
    </div>
  );
}