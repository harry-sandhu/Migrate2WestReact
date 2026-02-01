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

import { useState } from "react";

export default function ApplicantForm({
  form,
  isValid,
  onChange,
  onContinue,
}: Props) {
  const [notRobot, setNotRobot] = useState(false);

  const canContinue = isValid && notRobot;

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow space-y-6">
      <h2 className="text-2xl font-bold text-center">
        Applicant Details
      </h2>

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

      {/* Not a robot */}
      <label className="flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer">
        <input
          type="checkbox"
          checked={notRobot}
          onChange={(e) => setNotRobot(e.target.checked)}
          className="h-5 w-5 accent-blue-600"
        />
        <span className="text-sm text-gray-700">
          I’m not a robot
        </span>
      </label>

      <button
        disabled={!canContinue}
        onClick={onContinue}
        className={`w-full py-3 rounded-xl font-semibold transition-all ${
          canContinue
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Continue →
      </button>
    </div>
  );
}
