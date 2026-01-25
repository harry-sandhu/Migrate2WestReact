import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import type { CountryCost, VisaDetail } from "../../utils/visaDetails";

type Props = {
  visa: VisaDetail;
  slug: string;
};

export default function VisaCostEstimator({ visa,slug }: Props) {
  const [country, setCountry] = useState<CountryCost | null>(null);
  const [people, setPeople] = useState(1);
  const [express, setExpress] = useState(false);
  const navigate = useNavigate();
  const base = country?.baseCost ?? 0;
  const perPerson = visa.additionalCosts.perPerson * people;
  const expressFee = express
    ? visa.additionalCosts.expressProcessing ?? 0
    : 0;

  const total = base + perPerson + expressFee;

  return (
    <section className="bg-white py-20 border-t">
      <div className="max-w-5xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-start">

        {/* Left */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Visa Cost Estimator
          </h3>
          <p className="text-gray-600 mb-6">
            Select country, number of applicants and options to estimate your visa cost.
          </p>

          {/* Country */}
          <select
            className="w-full rounded-xl border px-4 py-3 mb-4"
            onChange={(e) =>
              setCountry(
                visa.supportedCountries.find(
                  (c) => c.country === e.target.value
                ) || null
              )
            }
          >
            <option value="">Select Destination Country</option>
            {visa.supportedCountries.map((c) => (
              <option key={c.country} value={c.country}>
                {c.country}
              </option>
            ))}
          </select>

          {/* People */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Number of Applicants</label>
            <input
              type="number"
              min={1}
              value={people}
              onChange={(e) => setPeople(+e.target.value)}
              className="w-full rounded-xl border px-4 py-3 mt-1"
            />
          </div>

          {/* Express */}
          {visa.additionalCosts.expressProcessing && (
            <label className="flex items-center gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={express}
                onChange={() => setExpress(!express)}
              />
              Express Processing
            </label>
          )}
        </div>

        {/* Right */}
        <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
          <h4 className="font-semibold text-lg">Estimated Cost</h4>

          <div className="flex justify-between text-sm">
            <span>Base Visa Fee</span>
            <span>₹ {base.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Service Fee</span>
            <span>₹ {perPerson.toLocaleString()}</span>
          </div>

          {express && (
            <div className="flex justify-between text-sm">
              <span>Express Processing</span>
              <span>₹ {expressFee.toLocaleString()}</span>
            </div>
          )}

          <hr />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹ {total.toLocaleString()}</span>
          </div>

          <Button
          type="button"
  variant="gold"
  className="w-full mt-4"
  disabled={!country}
  onClick={() => {
    if (!country) return;

    navigate(`/visa/${slug}/slot`, {
      state: {
        serviceType: "visa",
        serviceName: visa.title,
        subServiceName: `${country.country} ${
          express ? "Express" : "Normal"
        }`,

        applicant: {
          name: "",
          phone: "",
          email: "",
        },

        selectedSlot: null,

        breakdown: {
          basePrice: total,
        },

        totalAmount: total,

        meta: {
          country: country.country,
          people,
          express,
        },
      },
    });
  }}
>
  Proceed to Apply
</Button>


          <p className="text-xs text-gray-500 text-center">
            * Embassy fees not included. Final cost may vary.
          </p>
        </div>
      </div>
    </section>
  );
}
