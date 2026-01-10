import { useState } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";

/* ---------------- TYPES ---------------- */
type PaymentMethod = "upi" | "bank" | "qr";

interface PaymentState {
  applicant: {
    name: string;
    phone: string;
    email: string;
  };
  passportType: "normal" | "express" | "consultation";
  applicantType: "adult" | "child";
  selectedSlot: string;
  totalAmount: number;
}

/* ---------------- COMPONENT ---------------- */
export default function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as PaymentState | null;

  /* ---------------- SAFETY ---------------- */
  if (!state) {
    return <Navigate to="/" replace />;
  }

  const {
    applicant,
    passportType,
    applicantType,
    selectedSlot,
    totalAmount,
  } = state;

  /* ---------------- LOCAL STATE ---------------- */
  const [method, setMethod] = useState<PaymentMethod | null>(null);
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
  function handleSubmit() {
    if (!isValid) return;

    const receiptPayload = {
      ...state,
      paymentMethod: method,
      paymentDetails: {
        utr: form.utr,
        bankName: form.bankName,
        accountLast4: form.accountLast4,
        appUsed: form.appUsed,
        paymentDate: form.date,
      },
      referenceId: "MW-" + Date.now(),
      status: "Pending Verification",
      submittedAt: new Date().toISOString(),
    };

    navigate("/thank-you", { state: receiptPayload });
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="bg-[#f7f9fc] min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-10">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Confirm Your Payment
          </h1>
          <p className="text-gray-600 mt-2">
            Share your payment details for verification
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-white rounded-3xl shadow p-6">
          <h3 className="font-semibold text-lg mb-4">
            Application Summary
          </h3>

          <div className="text-sm text-gray-700 space-y-2">
            <p>
              <strong>Service:</strong>{" "}
              {passportType === "consultation"
                ? "Consultation Only"
                : `${passportType} passport (${applicantType})`}
            </p>

            <p>
              <strong>Appointment:</strong>{" "}
              {new Date(selectedSlot).toLocaleString()}
            </p>

            <p className="font-semibold">
              <strong>Amount Paid:</strong> ₹{totalAmount}
            </p>
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="bg-white rounded-3xl shadow p-6 space-y-6">
          <h3 className="font-semibold text-lg">
            Payment Method
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { key: "upi", label: "UPI" },
              { key: "bank", label: "Bank Transfer" },
              { key: "qr", label: "QR Scan" },
            ].map((m) => (
              <button
                key={m.key}
                onClick={() => setMethod(m.key as PaymentMethod)}
                className={`p-4 rounded-xl border font-medium transition ${
                  method === m.key
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* PAYMENT DETAILS */}
        {method && (
          <div className="bg-white rounded-3xl shadow p-6 space-y-6">

            <h3 className="font-semibold text-lg">
              Payment Details
            </h3>

            {/* COMMON FIELDS */}
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
                placeholder="Phone Number"
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

            {/* UPI / QR */}
            {(method === "upi" || method === "qr") && (
              <div className="grid sm:grid-cols-2 gap-4">
                {method === "qr" && (
                  <input
                    placeholder="App Used (GPay / PhonePe / Paytm)"
                    value={form.appUsed}
                    onChange={(e) =>
                      setForm({ ...form, appUsed: e.target.value })
                    }
                    className="border rounded-xl px-4 py-3"
                  />
                )}
                <input
                  placeholder="Transaction ID / UTR"
                  value={form.utr}
                  onChange={(e) =>
                    setForm({ ...form, utr: e.target.value })
                  }
                  className="border rounded-xl px-4 py-3"
                />
              </div>
            )}

            {/* BANK */}
            {method === "bank" && (
              <div className="grid sm:grid-cols-3 gap-4">
                <input
                  placeholder="Bank Name"
                  value={form.bankName}
                  onChange={(e) =>
                    setForm({ ...form, bankName: e.target.value })
                  }
                  className="border rounded-xl px-4 py-3"
                />
                <input
                  placeholder="Account Last 4 Digits"
                  maxLength={4}
                  value={form.accountLast4}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      accountLast4: e.target.value,
                    })
                  }
                  className="border rounded-xl px-4 py-3"
                />
                <input
                  placeholder="Transaction Reference"
                  value={form.utr}
                  onChange={(e) =>
                    setForm({ ...form, utr: e.target.value })
                  }
                  className="border rounded-xl px-4 py-3"
                />
              </div>
            )}

            {/* SUBMIT */}
            <button
              disabled={!isValid}
              onClick={handleSubmit}
              className={`w-full py-4 rounded-xl font-bold transition ${
                isValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Submit Payment Details →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
