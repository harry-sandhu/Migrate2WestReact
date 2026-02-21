import { useState } from "react";
import CaptchaCheckboxV3 from "../../components/CaptchaV3";

interface Props {
  form: {
    name: string;
    phone: string;
    email: string;
  };
  isValid: boolean;
  onChange: (field: string, value: string) => void;
  onContinue: () => void;
}

export default function ApplicantForm({
  form,
  isValid,
  onChange,
  onContinue,
}: Props) {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const canContinue = isValid && captchaVerified && !loading;

  const handleContinue = async () => {
    if (!canContinue) return;

    try {
      setLoading(true);

      // frontend-only flow for now
      onContinue();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow space-y-6">
      <h2 className="text-2xl font-bold text-center">Applicant Details</h2>

      {/* Inputs */}
      {["name", "phone", "email"].map((field) => (
        <input
          key={field}
          placeholder={
            field === "name"
              ? "Full Name"
              : field === "phone"
              ? "Mobile Number"
              : "Email Address"
          }
          value={(form as any)[field]}
          onChange={(e) => onChange(field, e.target.value)}
          className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}

      {/* ✅ Your captcha component */}
      <CaptchaCheckboxV3 onVerified={() => setCaptchaVerified(true)} />

      {/* Continue button */}
      <button
        disabled={!canContinue}
        onClick={handleContinue}
        className={`w-full py-3 rounded-xl font-semibold transition-all ${
          canContinue
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {loading ? "Processing..." : "Continue →"}
      </button>
    </div>
  );
}
