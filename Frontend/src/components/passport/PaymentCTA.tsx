import { Link } from "react-router-dom";

export interface PaymentState {
  serviceType: string;
  serviceName: string;
  subServiceName?: string;

  applicant: {
    name: string;
    phone: string;
    email: string;
  };
  
  flightDetails?: {
    fromCountry: string;
    toCountry: string;

    fromAirport: string;
    toAirport: string;
    layoverAirport?: string;

    tripType: "one-way" | "round-trip";
    departureDate: string;
    returnDate?: string;

    adults: number;
    children: number;
    infants: number;

    notes?: string;
  };
  
  hotelDetails?: {
    city: string;
    country: string;
    checkIn: string;
    checkOut: string;
    rooms: number;
    guests: number;
    notes?: string;
  };

  selectedSlot?: string | null;

  breakdown: {
    basePrice: number;
    additionalFee?: number;
  };

  totalAmount: number;
}

interface Props {
  state: PaymentState;
  disabled?: boolean;
}

export default function PaymentCTA({ state, disabled = false }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow p-6 space-y-4">
      {/* SUMMARY */}
      <div className="flex justify-between text-sm">
        <span>
          {state.serviceName}
          {state.subServiceName && ` (${state.subServiceName})`}
        </span>
        <span>₹{state.breakdown.basePrice}</span>
      </div>

      <div className="border-t pt-3 flex justify-between font-semibold">
        <span>Total</span>
        <span>₹{state.totalAmount}</span>
      </div>

      {/* CTA */}
      <Link
        to={disabled ? "#" : "/payment"}
        state={disabled ? null : state}
        onClick={(e) => {
          if (disabled) e.preventDefault();
        }}
        className={`block text-center py-4 rounded-xl font-bold transition
          ${
            disabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }
        `}
      >
        Pay ₹{state.totalAmount} →
      </Link>

      {disabled && (
        <p className="text-xs text-red-500 text-center">
          Please fill required details and select a slot to continue
        </p>
      )}
    </div>
  );
}
