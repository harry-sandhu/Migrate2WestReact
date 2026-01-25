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
  "2026-01-12T11:00",
  "2026-01-12T15:00",
  "2026-01-14T14:00",
];

const PRICES = {
  normal: { adult: 3500, child: 2500 },
  express: { adult: 4500, child: 3500 },
  consultation: 800,
};

export default function PassportLost() {
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

  /* SLOT RULES — stricter for lost passports */
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

    // normal lost passport
    return diffHours >= 48;
  }

  useEffect(() => {
    if (selectedSlot) {
      const slotDate = new Date(selectedSlot);
      if (!isSlotAllowed(slotDate)) {
        setSelectedSlot(null);
      }
    }
  }, [passportType]);

  const basePrice =
    passportType === "consultation"
      ? PRICES.consultation
      : PRICES[passportType][applicantType];

  const totalAmount = basePrice;

  const subServiceName =
    passportType === "consultation"
      ? "Lost Passport Consultation"
      : passportType === "express"
      ? "Lost Passport (Express)"
      : "Lost Passport (Normal)";

  return (
    <div className="min-h-screen bg-[#f7f9fc]">

      <PageBanner
        title="Lost Passport"
        bgImage="/src/assets/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Passport", href: "/passport" },
          { label: "Lost Passport" },
        ]}
      />

      <section className="pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Lost Passport Application Process
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Assistance for lost passport cases with expert guidance
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

              {/* CONSULTATION ENABLED */}
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
                  serviceName: "Lost Passport",
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
