import { useState } from "react";
import ApplicationForm from "./ApplicationForm";
import PaymentForm from "./PaymentForm";

type Step = "application" | "payment";

export default function ApplicationTabs() {
  const [step, setStep] = useState<Step>("application");

  const isPayment = step === "payment";

  return (
    <div className="w-full">
      {/* Step Indicator */}
      {/* Step Indicator */}
<div className="mb-10">
  <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto">

    {/* Mobile vertical line */}
    <div className="absolute top-10 bottom-10 left-1/2 w-px bg-gray-200 sm:hidden" />

    {/* Step 1 */}
    <button
      onClick={() => setStep("application")}
      className="relative z-10 flex items-center gap-3 focus:outline-none bg-white px-2"
    >
      <div
        className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold transition
          ${
            step === "application"
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600 hover:bg-blue-200"
          }`}
      >
        1
      </div>
      <span
        className={`font-medium ${
          step === "application" ? "text-gray-900" : "text-gray-500"
        }`}
      >
        Application
      </span>
    </button>

    {/* Desktop horizontal line */}
    <div className="hidden sm:block flex-1 h-px bg-gray-200" />

    {/* Step 2 */}
    <button
      onClick={() => {
        if (step !== "payment") return;
      }}
      className="relative z-10 flex items-center gap-3 focus:outline-none bg-white px-2"
    >
      <div
        className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold transition
          ${
            isPayment
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-400"
          }`}
      >
        2
      </div>
      <span
        className={`font-medium ${
          isPayment ? "text-gray-900" : "text-gray-400"
        }`}
      >
        Payment
      </span>
    </button>
  </div>

  {/* Helper text */}
  <p className="text-center text-sm text-gray-500 mt-4 px-4">
    {step === "application"
      ? "Fill in your visa application details carefully."
      : "Review your details and complete the payment."}
  </p>
</div>


      {/* Step Content */}
      <div>
        {step === "application" && (
          <ApplicationForm onNext={() => setStep("payment")} />
        )}

        {step === "payment" && (
          <PaymentForm onBack={() => setStep("application")} />
        )}
      </div>
    </div>
  );
}
