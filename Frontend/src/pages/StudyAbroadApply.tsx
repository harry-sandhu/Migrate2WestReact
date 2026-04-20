import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import useServiceData from "../hooks/useServiceData";

import PageBanner from "../components/ui/PageBanner";
import ApplicationForm from "../components/forms/ApplicationForm";
import SlotPicker from "../components/passport/SlotPicker";
import PaymentCTA from "../components/passport/PaymentCTA";

import { studyAbroadConfig } from "../utils/studyAbroadConfig";
import { getBookedSlots } from "../api/public";

export default function StudyAbroadApply() {
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
  if (!slug) return <Navigate to="/study-abroad" replace />;

  const config =
    studyAbroadConfig[
      slug as keyof typeof studyAbroadConfig
    ];

  if (!config) return <Navigate to="/study-abroad" replace />;

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-center">{error}</div>;

  /* ---------- DYNAMIC PRICING ---------- */
  const dynamicFee =
    data?.studyAbroad?.[slug]?.serviceFee;

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
    const isOfficeTime = hour >= 10 && hour < 19;

    return isOfficeTime && diffHours >= 12;
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc]">

      <PageBanner
        title={finalConfig.title}
        bgImage="/images/study-abroad-banner.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study Abroad", href: "/study-abroad" },
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
            title="Student Details"
            subtitle="Enter your details to start your study abroad journey"
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
          {!selectedSlot && (
            <p className="text-red-500 text-sm text-center">
              Please select a slot to continue
            </p>
          )}

          {/* PAYMENT */}
          <div className={selectedSlot ? "" : "opacity-50 pointer-events-none"}>
            <PaymentCTA
              state={{
                serviceType: "study-abroad",
                serviceName: "Study Abroad",
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