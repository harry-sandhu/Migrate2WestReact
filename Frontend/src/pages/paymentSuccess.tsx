import { useState } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";

import { submitManualPayment } from "../api/public";

/* ---------------- TYPES ---------------- */
type PaymentMethod = "upi" | "bank" | "qr";

interface PaymentState {
  serviceType: string;
  serviceName: string;
  subServiceName?: string;

  applicant: {
    name: string;
    phone: string;
    email: string;
  };

  selectedSlot?: string | null;

  breakdown: {
    basePrice: number;
    additionalFee?: number;
  };

  totalAmount: number;
}

/* ---------------- COMPONENT ---------------- */
export default function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as PaymentState | null;

  if (!state) return <Navigate to="/" replace />;

  /* ✅ SAFE destructuring */
  const {
    applicant,
    serviceType,
    serviceName,
    subServiceName,
    selectedSlot,
    totalAmount,
  } = state;

  /* ---------------- LOCAL STATE ---------------- */
  const [method, setMethod] = useState<PaymentMethod | null>(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: applicant.name,
    phone: applicant.phone,
    email: applicant.email,
    utr: "",
    bankName: "",
    accountLast4: "",
    appUsed: "",
    date: "",
  });

  /* ---------------- VALIDATION ---------------- */
  const isValid =
    !!method &&
    form.name.trim().length > 0 &&
    form.phone.trim().length >= 10 &&
    form.email.includes("@") &&
    form.date &&
    (method === "upi" || method === "qr"
      ? form.utr.trim().length > 0
      : form.bankName.trim().length > 0 &&
        form.accountLast4.trim().length === 4 &&
        form.utr.trim().length > 0);

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async () => {
    if (!isValid) return;

    try {
      setLoading(true);

      await submitManualPayment({
        serviceType,
        subService: subServiceName,
        slot: selectedSlot,
        applicant,
        amount: totalAmount,
        method,
        paymentDetails: {
          utr: form.utr,
          bankName: form.bankName,
          accountLast4: form.accountLast4,
          appUsed: form.appUsed,
          date: form.date,
        },
      });

      const receiptPayload = {
        ...state,
        paymentMethod: method,
        referenceId: "MW-" + Date.now(),
        status: "Pending Verification",
        submittedAt: new Date().toISOString(),
      };

      navigate("/thank-you", { state: receiptPayload });

    } catch (err) {
      console.error(err);
      alert("Failed to submit payment");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="bg-[#f7f9fc] min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-10">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Confirm Your Payment
          </h1>
          <p className="text-gray-600 mt-2">
            Share your payment details for verification
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-white rounded-3xl shadow p-6">
          <h3 className="font-semibold text-lg mb-4">
            Service Summary
          </h3>

          <div className="text-sm text-gray-700 space-y-2">
            <p>
              <strong>Service:</strong> {serviceName}
              {subServiceName && (
                <span className="text-gray-500">
                  {" "}({subServiceName})
                </span>
              )}
            </p>

            {selectedSlot && (
              <p>
                <strong>Appointment:</strong>{" "}
                {new Date(selectedSlot).toLocaleString()}
              </p>
            )}

            <p className="font-semibold">
              <strong>Amount Paid:</strong> ₹{totalAmount}
            </p>
          </div>
        </div>

        {/* METHOD SELECT */}
        <div className="bg-white rounded-3xl shadow p-6 space-y-6">
          <h3 className="font-semibold text-lg">
            Payment Method
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">
            {["upi", "bank", "qr"].map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m as PaymentMethod)}
                className={`p-4 rounded-xl border font-medium ${
                  method === m
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                {m.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* FORM */}
        {method && (
          <div className="bg-white rounded-3xl shadow p-6 space-y-6">

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="border rounded-xl px-4 py-3"
              />
              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="border rounded-xl px-4 py-3"
              />
              <input
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="border rounded-xl px-4 py-3"
              />
              <input
                type="date"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
                className="border rounded-xl px-4 py-3"
              />
            </div>

            <input
              placeholder="Transaction ID / UTR"
              value={form.utr}
              onChange={(e) =>
                setForm({ ...form, utr: e.target.value })
              }
              className="border rounded-xl px-4 py-3"
            />

            {method === "bank" && (
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  placeholder="Bank Name"
                  value={form.bankName}
                  onChange={(e) =>
                    setForm({ ...form, bankName: e.target.value })
                  }
                  className="border rounded-xl px-4 py-3"
                />
                <input
                  placeholder="Last 4 Digits"
                  maxLength={4}
                  value={form.accountLast4}
                  onChange={(e) =>
                    setForm({ ...form, accountLast4: e.target.value })
                  }
                  className="border rounded-xl px-4 py-3"
                />
              </div>
            )}

            <button
              disabled={!isValid || loading}
              onClick={handleSubmit}
              className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Payment Details"}
            </button>

          </div>
        )}
      </div>
    </div>
  );
}