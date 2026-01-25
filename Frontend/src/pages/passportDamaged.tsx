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
type DamageType = "minor" | "major";

const bookedSlots = [
  "2026-01-13T11:00",
  "2026-01-13T15:00",
  "2026-01-15T14:00",
];

const PRICES = {
  normal: {
    adult: { minor: 3000, major: 4000 },
    child: { minor: 2000, major: 3000 },
  },
  express: {
    adult: { minor: 4000, major: 5000 },
    child: { minor: 3000, major: 4000 },
  },
  consultation: 700,
};

export default function PassportDamaged() {
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
  const [damageType, setDamageType] =
    useState<DamageType>("minor");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const isValid =
    form.name.trim().length > 1 &&
    form.phone.trim().length >= 10 &&
    form.email.includes("@");

  const now = new Date();

  /* SLOT RULES — damaged passport */
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
      return diffHours >= 24;
    }

    // normal damaged passport
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

  /* PRICE LOGIC */
  const basePrice =
    passportType === "consultation"
      ? PRICES.consultation
      : PRICES[passportType][applicantType][damageType];

  const totalAmount = basePrice;

  const subServiceName =
    passportType === "consultation"
      ? "Damaged Passport Consultation"
      : `Damaged Passport (${passportType}, ${damageType})`;

  return (
    <div className="min-h-screen bg-[#f7f9fc]">

      <PageBanner
        title="Damaged Passport"
        bgImage="/src/assets/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Passport", href: "/passport" },
          { label: "Damaged Passport" },
        ]}
      />

      <section className="pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Damaged Passport Application Process
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Apply for a replacement passport in case of damage
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

              {/* PASSPORT TYPE */}
              <ApplicationType
                passportType={passportType}
                applicantType={applicantType}
                onPassportChange={setPassportType}
                onApplicantChange={setApplicantType}
              />

              {/* DAMAGE TYPE */}
              {passportType !== "consultation" && (
                <div className="bg-white rounded-3xl shadow p-6 space-y-4">
                  <h3 className="font-semibold text-lg">
                    Damage Type
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        key: "minor",
                        label: "Minor Damage",
                        desc: "Torn pages, faded print, small water marks",
                      },
                      {
                        key: "major",
                        label: "Major Damage",
                        desc: "Burnt, missing pages, unreadable details",
                      },
                    ].map((d) => (
                      <button
                        key={d.key}
                        onClick={() =>
                          setDamageType(d.key as DamageType)
                        }
                        className={`p-4 rounded-xl border text-left transition ${
                          damageType === d.key
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium">
                          {d.label}
                        </div>
                        <div className="text-sm text-gray-600">
                          {d.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <SlotPicker
                bookedSlots={bookedSlots}
                selectedSlot={selectedSlot}
                onSelect={setSelectedSlot}
                isSlotAllowed={isSlotAllowed}
              />

              <PaymentCTA
                state={{
                  serviceType: "passport",
                  serviceName: "Damaged Passport",
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
