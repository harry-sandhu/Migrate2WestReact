import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

import PageBanner from "../components/ui/PageBanner";
import ApplicationForm from "../components/forms/ApplicationForm";
import SlotPicker from "../components/passport/SlotPicker";
import PaymentCTA from "../components/passport/PaymentCTA";

/* ---------- TYPES ---------- */
interface VisaPaymentState {
  serviceType: "visa";
  serviceName: string;
  subServiceName: string;

  applicant: {
    name: string;
    phone: string;
    email: string;
  };

  selectedSlot: string | null;

  breakdown: {
    basePrice: number;
  };

  totalAmount: number;

  meta: {
    country: string;
    people: number;
    express: boolean;
  };
}

/* ---------- PAGE ---------- */
export default function VisaSlot() {
  const location = useLocation();
  const state = location.state as VisaPaymentState | null;

  /* SAFETY */
  if (!state) {
    return <Navigate to="/visa" replace />;
  }

  const {
    serviceName,
    subServiceName,
    totalAmount,
    breakdown,
    meta,
  } = state;

  const [form, setForm] = useState(state.applicant);
  const [selectedSlot, setSelectedSlot] =
    useState<string | null>(null);

  const isValid =
    form.name.trim().length > 1 &&
    form.phone.trim().length >= 10 &&
    form.email.includes("@") &&
    !!selectedSlot;

  /* MOCK SLOTS (replace later with API) */
  const bookedSlots = [
    "2026-01-12T11:00",
    "2026-01-12T15:00",
    "2026-01-14T14:00",
  ];

  const now = new Date();

  function isSlotAllowed(slot: Date) {
    const diffHours =
      (slot.getTime() - now.getTime()) / (1000 * 60 * 60);

    const hour = slot.getHours();
    const isOfficeTime = hour >= 10 && hour < 18;
    if (!isOfficeTime) return false;

    return meta.express ? diffHours >= 12 : diffHours >= 24;
  }

  /* RESET SLOT IF RULES CHANGE */
  useEffect(() => {
    if (selectedSlot) {
      const slotDate = new Date(selectedSlot);
      if (!isSlotAllowed(slotDate)) {
        setSelectedSlot(null);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f9fc]">

      <PageBanner
        title={serviceName}
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Visa", href: "/visa" },
          { label: serviceName },
        ]}
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* INTRO */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Book a Consultation Call
            </h2>
            <p className="text-gray-600 mt-2">
              Select a time slot to speak with our visa experts
            </p>
          </div>

          {/* APPLICANT FORM */}
          <ApplicationForm
  title="Applicant Details"
  subtitle="We’ll use this information to contact you"
  value={form}
  onChange={(field, value) =>
    setForm({ ...form, [field]: value })
  }
/>


          {/* SLOT PICKER */}
          <SlotPicker
            bookedSlots={bookedSlots}
            selectedSlot={selectedSlot}
            onSelect={setSelectedSlot}
            isSlotAllowed={isSlotAllowed}
          />

          {/* PAYMENT CTA */}
          <PaymentCTA
  disabled={!isValid}
  state={{
    ...state,
    applicant: form,
    selectedSlot,
    breakdown,
    totalAmount,
  }}
/>


          
        </div>
      </section>
    </div>
  );
}
