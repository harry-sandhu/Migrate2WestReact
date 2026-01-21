import { Link, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";

import qr from "../assets/images/qr.jpeg";
/* ---------- Types ---------- */
interface PaymentState {
  applicant: {
    name: string;
    phone: string;
    email: string;
  };
  passportType: "normal" | "express" | "consultation";
  applicantType: "adult" | "child";
  selectedSlot: string | null;
  breakdown: {
    basePrice: number;
    expressConsultationFee: number;
  };
  totalAmount: number;
}

/* ---------- Page ---------- */
export default function Payment() {
  const location = useLocation();
  const state = location.state as PaymentState | null;
  const [showQR, setShowQR] = useState(false);

  // Redirect if page is opened directly
  if (!state) {
    return <Navigate to="/" replace />;
  }

  const {
    applicant,
    passportType,
    applicantType,
    selectedSlot,
    breakdown,
    totalAmount,
  } = state;

  return (
    <div className="bg-[#f7f9fc] min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Complete Your Payment
          </h1>
          <p className="text-gray-600 text-lg">
            Secure payment for your passport application
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* PAYMENT METHODS */}
          <div className="lg:col-span-2 space-y-8">

            {/* UPI */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">
                UPI Payment (Recommended)
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-600 mb-2">UPI ID</p>
                  <div className="bg-gray-100 rounded-xl px-4 py-3 font-medium">
                    migrate2west@okhdfcbank
                  </div>

                  <p className="text-sm text-gray-500 mt-3">
                    Pay using Google Pay, PhonePe, Paytm or any UPI app
                  </p>
                </div>

                <div className="flex justify-center">
  <img
    src={qr}
    alt="Scan & Pay QR"
    className="w-40 h-40 rounded-xl cursor-pointer border bg-white"
    onClick={() => setShowQR(true)}
  />

  {showQR && (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-pointer"
      onClick={() => setShowQR(false)}
    >
      <img
        src={qr}
        alt="QR Fullscreen"
        className="max-w-[90vw] max-h-[90vh] rounded-2xl bg-white p-4"
      />
    </div>
  )}
</div>

              </div>
            </div>

            {/* BANK */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">
                Bank Transfer
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                <p><strong>Account Name:</strong> Migrate2west Global</p>
                <p><strong>Bank:</strong> HDFC Bank</p>
                <p><strong>Account No:</strong> 1234567890</p>
                <p><strong>IFSC:</strong> HDFC0000123</p>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                After payment, please share the transaction reference with our team.
              </p>
            </div>

            {/* CARD */}
            <div className="bg-gray-100 rounded-3xl p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Card / Net Banking
              </h3>
              <p className="text-gray-500">
                Credit Card, Debit Card & Net Banking support coming soon.
              </p>
            </div>

          </div>

          {/* SUMMARY */}
          <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-24">
            <h3 className="text-xl font-semibold mb-6">
              Payment Summary
            </h3>

            <div className="space-y-4 text-gray-700">

              <div className="flex justify-between">
                <span>
                  {passportType === "consultation"
                    ? "Consultation Only"
                    : passportType === "express"
                    ? "Express Passport"
                    : "Normal Passport"}{" "}
                  ({applicantType})
                </span>
                <span>₹{breakdown.basePrice}</span>
              </div>

              {breakdown.expressConsultationFee > 0 && (
                <div className="flex justify-between">
                  <span>Express Consultation</span>
                  <span>₹{breakdown.expressConsultationFee}</span>
                </div>
              )}

              <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>

            {/* APPLICANT INFO */}
            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p><strong>Applicant:</strong> {applicant.name}</p>
              <p><strong>Phone:</strong> {applicant.phone}</p>
              <p><strong>Email:</strong> {applicant.email}</p>
            </div>

            {/* SLOT */}
            {selectedSlot && (
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <strong>Appointment Slot:</strong>{" "}
                  {new Date(selectedSlot).toLocaleString()}
                </p>
              </div>
            )}

            {/* TERMS */}
            <div className="mt-6 text-sm text-gray-600">
              By proceeding, you agree to our{" "}
              <Link to="/terms" className="underline hover:text-black">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline hover:text-black">
                Privacy Policy
              </Link>.
            </div>

            {/* CONFIRM */}
            <Link
              to="/payment-success"
              state={state}
              className="block mt-8 text-center bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              I’ve Completed the Payment →
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}
