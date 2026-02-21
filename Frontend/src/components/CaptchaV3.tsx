import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface Props {
  onVerified: () => void;
}

export default function CaptchaCheckboxV3({ onVerified }: Props) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [status, setStatus] = useState<
    "idle" | "verifying" | "verified"
  >("idle");

  const handleCheck = async () => {
    if (!executeRecaptcha || status !== "idle") return;

    try {
      setStatus("verifying");

      // 🔹 simulate real network delay for UX realism
      await new Promise((r) => setTimeout(r, 1200));

      // 🔹 generate v3 token silently
      await executeRecaptcha("checkbox_verify");

      setStatus("verified");
      onVerified();
    } catch {
      setStatus("idle");
    }
  };

  return (
    <div
      onClick={handleCheck}
      className="flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer select-none transition hover:bg-gray-50"
    >
      {/* Checkbox */}
      <div className="h-5 w-5 rounded border flex items-center justify-center">
        {status === "verifying" && (
          <div className="h-3 w-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
        )}

        {status === "verified" && (
          <svg
            className="h-4 w-4 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      {/* Text */}
      <span className="text-sm text-gray-700">
        {status === "idle" && "I’m not a robot"}
        {status === "verifying" && "Checking…"}
        {status === "verified" && "You’re verified"}
      </span>

      {/* Fake Google badge feel */}
      <div className="ml-auto text-[10px] text-gray-400">
        reCAPTCHA
      </div>
    </div>
  );
}
