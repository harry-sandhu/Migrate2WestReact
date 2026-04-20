import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import useServiceData from "../hooks/useServiceData";

import PageBanner from "../components/ui/PageBanner";
import ApplicationForm from "../components/forms/ApplicationForm";
import SlotPicker from "../components/passport/SlotPicker";
import PaymentCTA from "../components/passport/PaymentCTA";

import { meetAssistConfig } from "../utils/meetAssistConfig";
import { getBookedSlots } from "../api/public";
import aboutImg from "../assets/images/About-Us-Page.webp";
export default function MeetAssistApply() {
  const { slug } = useParams<{ slug: string }>();

  const { data, loading, error } = useServiceData();

  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(true);

  /* ---------- SAFETY ---------- */
  if (!slug) return <Navigate to="/meet-assist" replace />;

  const config =
    meetAssistConfig[
      slug as keyof typeof meetAssistConfig
    ];

  if (!config) return <Navigate to="/meet-assist" replace />;

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-center">{error}</div>;

  /* ---------- DYNAMIC PRICING ---------- */
  const dynamicFee =
    data?.meetAssist?.[slug]?.serviceFee;

  const finalConfig = {
    ...config,
    serviceFee: dynamicFee ?? config.serviceFee,
  };

  /* ---------- FETCH SLOTS ---------- */
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const slots = await getBookedSlots();
        setBookedSlots(slots);
      } catch (err) {
        console.error("Failed to fetch slots:", err);
      } finally {
        setLoadingSlots(false);
      }
    };

    fetchSlots();
  }, []);

  const isValid =
    applicant.name.trim().length > 1 &&
    applicant.phone.trim().length >= 10 &&
    applicant.email.includes("@") &&
    !!selectedSlot;

  const now = new Date();

  function isSlotAllowed(slot: Date) {
    const diffHours =
      (slot.getTime() - now.getTime()) / (1000 * 60 * 60);

    const hour = slot.getHours();
    const isOfficeTime = hour >= 6 && hour <= 22; // airport flexibility

    return isOfficeTime && diffHours >= 6;
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc]">

      <PageBanner
        title={finalConfig.title}
        bgImage={aboutImg}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Meet & Assist", href: "/meet-assist" },
          { label: finalConfig.title },
        ]}
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* DESCRIPTION */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600">
              {finalConfig.description}
            </p>
          </div>

          {/* FORM */}
          <ApplicationForm
            title="Passenger Details"
            subtitle="Enter details for airport assistance service"
            value={applicant}
            onChange={(field, value) =>
              setApplicant({ ...applicant, [field]: value })
            }
          />

          {/* SLOT PICKER */}
          <div id="slot-section">
            {loadingSlots ? (
              <p className="text-center text-gray-500">
                Loading available slots...
              </p>
            ) : (
              <SlotPicker
                bookedSlots={bookedSlots}
                selectedSlot={selectedSlot}
                onSelect={setSelectedSlot}
                isSlotAllowed={isSlotAllowed}
              />
            )}
          </div>

          {/* SLOT REQUIRED */}
          {/* VALIDATION MESSAGE */}
{!isValid && (
  <p className="text-red-500 text-sm text-center">
    Please complete all details and select a time slot
  </p>
)}

{/* PAYMENT */}
<div className={isValid ? "" : "opacity-50 pointer-events-none"}>
            <PaymentCTA
              state={{
                serviceType: "meet-assist",
                serviceName: "Meet & Assist",
                subServiceName: finalConfig.title,
                applicant,
                selectedSlot,
                breakdown: {
                  basePrice: finalConfig.serviceFee,
                },
                totalAmount: finalConfig.serviceFee,
              }}
            />
          </div>

        </div>
      </section>
    </div>
  );
}