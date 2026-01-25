import { useEffect, useState } from "react";

import Stepper from "../components/passport/Stepper";
import ApplicantForm from "../components/passport/ApplicantForm";
import ApplicationType from "../components/passport/ApplicationType";
import SlotPicker from "../components/passport/SlotPicker";
import PaymentCTA from "../components/passport/PaymentCTA";
import PageBanner from "../components/ui/PageBanner";

type Step = 1 | 2;
type PassportType = "normal" | "express" | "consultation";
type ApplicantType = "adult" | "child";

const bookedSlots = [
  "2026-01-11T11:00",
  "2026-01-11T15:00",
  "2026-01-13T14:00",
];

const PRICES = {
  normal: { adult: 2000, child: 1200 },
  express: { adult: 3000, child: 2200 },
  consultation: 500,
};

export default function PassportRenewal() {
  const [step, setStep] = useState<Step>(1);
  const [completedStep1, setCompletedStep1] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [passportType, setPassportType] =
    useState<PassportType>("normal");
  const [applicantType, setApplicantType] =
    useState<ApplicantType>("adult");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const isValid =
    form.name.trim().length > 1 &&
    form.phone.trim().length >= 10 &&
    form.email.includes("@");

  const now = new Date();

  /* ✅ SLOT RULES (NO CONFLICTS) */
  function isSlotAllowed(slot: Date) {
    const diffHours =
      (slot.getTime() - now.getTime()) / (1000 * 60 * 60);

    const hour = slot.getHours();
    const isOfficeTime = hour >= 10 && hour < 18;
    if (!isOfficeTime) return false;

    if (passportType === "consultation") {
      return diffHours >= 24;
    }

    if (passportType === "express") {
      return diffHours >= 12;
    }

    // normal renewal
    return diffHours >= 24;
  }

  useEffect(() => {
    if (selectedSlot) {
      const slotDate = new Date(selectedSlot);
      if (!isSlotAllowed(slotDate)) {
        setSelectedSlot(null);
      }
    }
  }, [passportType]);

  /* ✅ PRICE LOGIC (SAFE) */
  const basePrice =
    passportType === "consultation"
      ? PRICES.consultation
      : PRICES[passportType][applicantType];

  const totalAmount = basePrice;

  const subServiceName =
    passportType === "consultation"
      ? "Passport Renewal Consultation"
      : passportType === "express"
      ? "Passport Renewal (Express)"
      : "Passport Renewal (Normal)";

  return (
    <div className="min-h-screen bg-[#f7f9fc]">

      <PageBanner
        title="Passport Renewal"
        bgImage="/src/assets/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Passport", href: "/passport" },
          { label: "Renewal" },
        ]}
      />

      <section className="pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Passport Renewal Process
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Renew or consult with our passport experts
            </p>
          </div>

          <Stepper
            step={step}
            completedStep1={completedStep1}
            onStepChange={setStep}
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4">

          {step === 1 && (
            <ApplicantForm
              form={form}
              isValid={isValid}
              onChange={(field, value) =>
                setForm({ ...form, [field]: value })
              }
              onContinue={() => {
                setCompletedStep1(true);
                setStep(2);
              }}
            />
          )}

          {step === 2 && (
            <div className="space-y-10">

              {/* ✅ CONSULTATION ENABLED */}
              <ApplicationType
                passportType={passportType}
                applicantType={applicantType}
                onPassportChange={setPassportType}
                onApplicantChange={setApplicantType}
              />

              <SlotPicker
                bookedSlots={bookedSlots}
                selectedSlot={selectedSlot}
                onSelect={setSelectedSlot}
                isSlotAllowed={isSlotAllowed}
              />

              <PaymentCTA
                state={{
                  serviceType: "passport",
                  serviceName: "Passport Renewal",
                  subServiceName,
                  applicant: form,
                  selectedSlot,
                  breakdown: {
                    basePrice,
                  },
                  totalAmount,
                }}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
