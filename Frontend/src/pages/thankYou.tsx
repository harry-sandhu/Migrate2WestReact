import {
  useLocation,
  Navigate,
  Link,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";

import jsPDF from "jspdf";
import logo from "../assets/images/logo.png";

import { getPaymentStatus } from "../api/public";

/* ---------------- TYPES ---------------- */
interface ThankYouState {
  serviceType: string;
  serviceName: string;
  subServiceName?: string;

  applicant: {
    name: string;
    phone: string;
    email: string;
  };

  selectedSlot?: string | null;

  totalAmount: number;
  referenceId: string;
  status: string;
  submittedAt: string | null;
  paymentMethod: "upi" | "bank" | "qr";
}

export default function ThankYou() {
  const location = useLocation();
  const state = location.state as ThankYouState | null;

  const [params] = useSearchParams();
  const orderId = params.get("order_id");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ThankYouState | null>(state);

  /* ---------- VERIFY PAYMENT ---------- */
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        if (orderId) {
          const order = await getPaymentStatus(orderId);

          setData({
            serviceType: "unknown",
            serviceName: "Service",
            applicant: {
              name: "N/A",
              phone: "N/A",
              email: "N/A",
            },
            totalAmount: order.amount || 0,
            referenceId: orderId,
            status:
              order.status === "PAID"
                ? "Payment Successful"
                : "Pending / Failed",
            submittedAt: new Date().toISOString(),
            paymentMethod: "upi",
          });
        }
      } catch (err) {
        console.error("Payment verification failed:", err);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [orderId]);

  /* ---------- GUARD ---------- */
  if (!orderId && !state) {
    return <Navigate to="/" replace />;
  }

  if (loading || !data) {
    return (
      <div className="p-10 text-center">Processing payment...</div>
    );
  }

  const {
    applicant,
    serviceName,
    subServiceName,
    selectedSlot,
    totalAmount,
    referenceId,
    status,
    submittedAt,
    paymentMethod,
  } = data;

  /* ---------- PDF ---------- */
  function downloadReceipt() {
    const doc = new jsPDF();
    const primary = "#1D4ED8";
    const gray = "#6B7280";
    let y = 45;

    doc.addImage(logo, "PNG", 15, 12, 40, 14);

    doc.setFontSize(18);
    doc.setTextColor(primary);
    doc.setFont("helvetica", "bold");
    doc.text("Payment Receipt", 105, 22, { align: "center" });

    doc.setFontSize(10);
    doc.setTextColor(gray);
    doc.text("Migrate2West Global Services", 105, 28, {
      align: "center",
    });

    doc.line(15, 35, 195, 35);

    function row(label: string, value: string) {
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0);
      doc.text(label, 20, y);

      doc.setFont("helvetica", "normal");
      doc.text(value, 85, y);
      y += 8;
    }

    row("Reference ID:", referenceId);
    row("Status:", status);
    row(
      "Submitted On:",
      submittedAt ? new Date(submittedAt).toLocaleString() : "N/A"
    );

    y += 6;

    row("Name:", applicant.name);
    row("Phone:", applicant.phone);
    row("Email:", applicant.email);

    y += 6;

    row(
      "Service:",
      subServiceName
        ? `${serviceName} (${subServiceName})`
        : serviceName
    );

    if (selectedSlot) {
      row(
        "Appointment:",
        new Date(selectedSlot).toLocaleString()
      );
    }

    row("Payment Method:", paymentMethod.toUpperCase());

    y += 6;

    doc.setFontSize(13);
    doc.text("Total Amount Paid:", 20, y);
    doc.text(`₹ ${totalAmount}`, 85, y);

    doc.save(`Receipt-${referenceId}.pdf`);
  }

  /* ---------- UI ---------- */
  return (
    <div className="bg-[#f7f9fc] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 space-y-10">

        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">
            ✓
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Payment Submitted Successfully
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto">
            Thank you for completing your payment.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow p-6 space-y-4">
          <h3 className="font-semibold text-lg">Payment Status</h3>

          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Reference ID:</strong> {referenceId}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Amount:</strong> ₹{totalAmount}</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={downloadReceipt}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl"
          >
            Download Receipt
          </button>

          <Link to="/" className="px-6 py-3 border rounded-xl">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}