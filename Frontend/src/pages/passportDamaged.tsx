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
type DamageType = "minor" | "major";

export default function PassportDamaged() {
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
  const [damageType, setDamageType] =
    useState<DamageType>("minor");

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

  /* ---------- RESET SLOT ON TYPE CHANGE ---------- */
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
    const isOfficeTime = hour >= 10 && hour < 18;
    if (!isOfficeTime) return false;

    if (passportType === "consultation") return diffHours >= 24;
    if (passportType === "express") return diffHours >= 24;

    return diffHours >= 48;
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
  if (!data?.passportDamaged)
    return <div className="p-10 text-center">Service data missing</div>;

  const PRICES = data.passportDamaged;

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
        bgImage={aboutImg}
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
                      { key: "minor", label: "Minor Damage" },
                      { key: "major", label: "Major Damage" },
                    ].map((d) => (
                      <button
                        key={d.key}
                        onClick={() =>
                          setDamageType(d.key as DamageType)
                        }
                        className={`p-4 rounded-xl border ${
                          damageType === d.key
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200"
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

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
                  Please select an appointment slot to continue
                </p>
              )}

              {/* PAYMENT */}
              <div className={selectedSlot ? "" : "opacity-50 pointer-events-none"}>
                <PaymentCTA
                  state={{
                    serviceType: "passport",
                    serviceName: "Damaged Passport",
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