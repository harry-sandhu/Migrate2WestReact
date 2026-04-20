import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import useServiceData from "../hooks/useServiceData";

import PageBanner from "../components/ui/PageBanner";
import ApplicationForm from "../components/forms/ApplicationForm";
import PaymentCTA from "../components/passport/PaymentCTA";

import { ociConfig } from "../utils/ociConfig";

export default function OCIApply() {
  const { slug } = useParams<{ slug: string }>();

  const { data, loading, error } = useServiceData();

  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    email: "",
  });

  if (!slug) {
    return <Navigate to="/oci" replace />;
  }

  const config =
    ociConfig[
      slug as keyof typeof ociConfig
    ];

  if (!config) {
    return <Navigate to="/oci" replace />;
  }

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-center">{error}</div>;

  const dynamicFee =
    data?.oci?.[slug]?.serviceFee;

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
          { label: "OCI Card", href: "/oci" },
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
            subtitle="Enter your details for OCI processing"
            value={applicant}
            onChange={(field, value) =>
              setApplicant({ ...applicant, [field]: value })
            }
          />

          <PaymentCTA
            disabled={!isValid}
            state={{
              serviceType: "oci",
              serviceName: "OCI Card Services",
              subServiceName: finalConfig.title,
              applicant,

              // ✅ REQUIRED FIX
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