import { useState } from "react";

interface Props {
  onBack: () => void;
}

export default function PaymentForm({ onBack }: Props) {
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 16);

    const formatted = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(formatted);
  };

  return (
    <form className="space-y-6">
      <h3 className="text-2xl font-semibold text-center mb-6">
        Payment Details
      </h3>

      {/* Cardholder */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Cardholder Name
        </label>
        <input
          type="text"
          className="w-full border rounded-lg px-4 py-2"
          placeholder="Name on card"
        />
      </div>

      {/* Card Number */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Card Number
        </label>
        <input
          type="text"
          inputMode="numeric"
          value={cardNumber}
          onChange={handleCardNumberChange}
          className="w-full border rounded-lg px-4 py-2 tracking-widest"
          placeholder="1234 5678 XXXX XXXX"
        />
      </div>

      {/* Expiry + CVV */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            inputMode="numeric"
            className="w-full border rounded-lg px-4 py-2"
            placeholder="MM/YY"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            CVV
          </label>
          <input
            type="password"
            inputMode="numeric"
            className="w-full border rounded-lg px-4 py-2"
            placeholder="•••"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-1/2 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
        >
          Back to Application
        </button>

        <button
          type="submit"
          className="w-full sm:w-1/2 bg-green-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Submit Payment
        </button>
      </div>
    </form>
  );
}
