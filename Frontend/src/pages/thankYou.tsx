import { useLocation, Navigate, Link } from "react-router-dom";
import jsPDF from "jspdf";
import logo from "../assets/images/logo.png";

/* ---------------- TYPES ---------------- */
interface ThankYouState {
  applicant: {
    name: string;
    phone: string;
    email: string;
  };
  passportType: "normal" | "express" | "consultation";
  applicantType: "adult" | "child";
  selectedSlot: string;
  totalAmount: number;
  referenceId: string;
  status: string;
  submittedAt: string;
  paymentMethod: "upi" | "bank" | "qr";
}

/* ---------------- COMPONENT ---------------- */
export default function ThankYou() {
  const location = useLocation();
  const state = location.state as ThankYouState | null;

  /* SAFETY */
  if (!state) {
    return <Navigate to="/" replace />;
  }

  const {
    applicant,
    passportType,
    applicantType,
    selectedSlot,
    totalAmount,
    referenceId,
    status,
    submittedAt,
    paymentMethod,
  } = state;

  /* ---------------- PDF RECEIPT ---------------- */
  function downloadReceipt() {
    const doc = new jsPDF();

    const primary = "#1D4ED8";
    const gray = "#6B7280";
    let y = 45;

    /* LOGO */
    doc.addImage(logo, "PNG", 15, 12, 40, 14);

    /* HEADER */
    doc.setFontSize(18);
    doc.setTextColor(primary);
    doc.text("Payment Receipt", 105, 22, { align: "center" });

    doc.setFontSize(10);
    doc.setTextColor(gray);
    doc.text("Migrate2West Global Services", 105, 28, {
      align: "center",
    });

    doc.setDrawColor(220);
    doc.line(15, 35, 195, 35);

    function row(label: string, value: string) {
      doc.setFont(undefined, "bold");
      doc.setTextColor(0);
      doc.text(label, 20, y);
      doc.setFont(undefined, "normal");
      doc.text(value, 85, y);
      y += 8;
    }

    /* META */
    row("Reference ID:", referenceId);
    row("Status:", status);
    row("Submitted On:", new Date(submittedAt).toLocaleString());

    y += 4;
    doc.line(15, y, 195, y);
    y += 10;

    /* APPLICANT */
    row("Name:", applicant.name);
    row("Phone:", applicant.phone);
    row("Email:", applicant.email);

    y += 4;
    doc.line(15, y, 195, y);
    y += 10;

    /* SERVICE */
    row(
      "Service:",
      passportType === "consultation"
        ? "Consultation Only"
        : `${passportType} Passport (${applicantType})`
    );

    row("Appointment:", new Date(selectedSlot).toLocaleString());
    row("Payment Method:", paymentMethod.toUpperCase());

    y += 4;
    doc.line(15, y, 195, y);
    y += 10;

    /* AMOUNT */
    doc.setFontSize(13);
    doc.setFont(undefined, "bold");
    doc.text("Total Amount Paid:", 20, y);
    doc.text(`₹ ${totalAmount}`, 85, y);

    y += 15;

    /* FOOTER */
    doc.setFontSize(10);
    doc.setFont(undefined, "normal");
    doc.setTextColor(gray);
    doc.text(
      "Thank you for choosing Migrate2West.\nOur team has received your payment details and will contact you shortly.",
      105,
      y,
      { align: "center" }
    );

    doc.save(`Receipt-${referenceId}.pdf`);
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="bg-[#f7f9fc] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 space-y-10">

        {/* SUCCESS HEADER */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">
            ✓
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Payment Submitted Successfully
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto">
            Thank you for completing your payment. Our team has received your
            details and will contact you shortly.
          </p>
        </div>

        {/* STATUS CARD */}
        <div className="bg-white rounded-3xl shadow p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">
              Application Status
            </h3>
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
              {status}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <p><strong>Reference ID:</strong> {referenceId}</p>
            <p><strong>Submitted:</strong> {new Date(submittedAt).toLocaleString()}</p>
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
            <p>
              <strong>Payment Method:</strong>{" "}
              {paymentMethod.toUpperCase()}
            </p>
            <p className="font-semibold">
              <strong>Amount Paid:</strong> ₹{totalAmount}
            </p>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={downloadReceipt}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Download Receipt (PDF)
          </button>

          <Link
            to="/"
            className="px-6 py-3 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-100 transition text-center"
          >
            Back to Home
          </Link>
        </div>

        {/* FOOTER */}
        <p className="text-xs text-gray-500 text-center max-w-xl mx-auto">
          Please keep your reference ID for future communication.
          Our support team will contact you shortly.
        </p>
      </div>
    </div>
  );
}
