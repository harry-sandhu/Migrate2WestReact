import { Link } from "react-router-dom";

interface Props {
  state: {
    totalAmount: number;
    breakdown: {
      basePrice: number;
      expressConsultationFee: number;
    };
    selectedSlot: string | null;
  };
}

export default function PaymentCTA({ state }: Props) {
  const { totalAmount, breakdown, selectedSlot } = state;

  const isDisabled = !selectedSlot;

  return (
    <div className="bg-white rounded-3xl shadow p-6 space-y-4">

      {/* SUMMARY */}
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Passport Service</span>
          <span>₹{breakdown.basePrice}</span>
        </div>

        {breakdown.expressConsultationFee > 0 && (
          <div className="flex justify-between">
            <span>Express Consultation</span>
            <span>₹{breakdown.expressConsultationFee}</span>
          </div>
        )}

        <div className="border-t pt-3 flex justify-between font-semibold text-base">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        to={isDisabled ? "#" : "/payment"}
        state={state}
        className={`block text-center py-4 rounded-xl font-bold transition ${
          isDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
        onClick={(e) => {
          if (isDisabled) e.preventDefault();
        }}
      >
        Pay ₹{totalAmount} →
      </Link>

      {/* HELPER */}
      {isDisabled && (
        <p className="text-xs text-red-500 text-center">
          Please select an appointment slot to continue
        </p>
      )}
    </div>
  );
}
