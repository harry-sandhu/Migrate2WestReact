import { useEffect, useState } from "react";
import useServiceData from "../hooks/useServiceData";

import Stepper from "../components/passport/Stepper";
import ApplicantForm from "../components/passport/ApplicantForm";
import ApplicationType from "../components/passport/ApplicationType";
import SlotPicker from "../components/passport/SlotPicker";
import PaymentCTA from "../components/passport/PaymentCTA";
import PageBanner from "../components/ui/PageBanner";

import { getBookedSlots } from "../api/public";
import aboutImg from "../assets/images/About-Us-Page.webp";
type Step = 1 | 2;
type PassportType = "normal" | "express" | "consultation";
type ApplicantType = "adult" | "child";

export default function PassportFresh() {
  const [step, setStep] = useState<Step>(1);
  const [completedStep1, setCompletedStep1] = useState(false);

  const { data, loading, error } = useServiceData();

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
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(true);

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

  /* ---------- RESET SLOT ---------- */
  useEffect(() => {
    setSelectedSlot(null);
  }, [passportType]);

  const isValid =
    form.name.trim().length > 1 &&
    form.phone.trim().length >= 10 &&
    form.email.includes("@");

  const now = new Date();

  function isSlotAllowed(slot: Date) {
    const diffHours =
      (slot.getTime() - now.getTime()) / (1000 * 60 * 60);

    const hour = slot.getHours();
    const isNormalTime = hour >= 10 && hour < 20;

    if (diffHours < 12) return false;

    if (passportType === "consultation") {
      if (diffHours < 24) return false;
      return isNormalTime;
    }

    if (passportType === "normal") {
      if (diffHours < 24) return false;
      return isNormalTime;
    }

    if (passportType === "express") {
      if (diffHours >= 12 && diffHours < 24) return true;
      return isNormalTime;
    }

    return false;
  }

  /* ---------- RESET INVALID SLOT ---------- */
  useEffect(() => {
    if (selectedSlot) {
      const slotDate = new Date(selectedSlot);
      if (!isSlotAllowed(slotDate)) {
        setSelectedSlot(null);
      }
    }
  }, [passportType]);

  /* ---------- GUARDS ---------- */
  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-center">{error}</div>;
  if (!data?.passportFresh)
    return <div className="p-10 text-center">Service data missing</div>;

  const PRICES = data.passportFresh;

  const basePrice =
    passportType === "consultation"
      ? PRICES.consultation
      : PRICES[passportType][applicantType];

  const totalAmount = basePrice;

  const subServiceName =
    passportType === "consultation"
      ? "Consultation"
      : passportType === "express"
      ? "Express Passport"
      : "Normal Passport";

  return (
    <div className="min-h-screen bg-[#f7f9fc]">

      <PageBanner
        title="Apply for Passport"
        bgImage={aboutImg}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Passport" },
        ]}
      />

      <section className="pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Passport Application Process
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Follow the steps below to complete your application
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

              <ApplicationType
                passportType={passportType}
                applicantType={applicantType}
                onPassportChange={setPassportType}
                onApplicantChange={setApplicantType}
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

              {!selectedSlot && (
                <p className="text-red-500 text-sm text-center">
                  Please select an appointment slot to continue
                </p>
              )}

              <div className={selectedSlot ? "" : "opacity-50 pointer-events-none"}>
                <PaymentCTA
                  state={{
                    serviceType: "passport",
                    serviceName: "Passport Application",
                    subServiceName,
                    applicant: form,
                    selectedSlot,
                    breakdown: { basePrice },
                    totalAmount,
                  }}
                />
              </div>

            </div>
          )}

        </div>
      </section>
    </div>
  );
}