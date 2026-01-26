import { useEffect } from "react";

import {
  getAirportsByCountry,
  formatAirportLabel,
} from "../../assets/data/airportByCountry";
import { airportsByCountry } from "../../assets/data/airportsByCountry";

interface FlightDetails {
  fromCountry: string;
  toCountry?: string;

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
}

interface Props {
  serviceType: "domestic" | "international" | "group";
  value: FlightDetails;
  onChange: (field: keyof FlightDetails, value: any) => void;
}

const countries = Object.keys(airportsByCountry);

export default function FlightDetailsForm({
  serviceType,
  value,
  onChange,
}: Props) {

  /* 🔁 AUTO-SYNC COUNTRY FOR DOMESTIC */
  useEffect(() => {
    if (serviceType === "domestic" && value.fromCountry) {
      onChange("toCountry", value.fromCountry);
    }
  }, [serviceType, value.fromCountry]);

  const fromAirports = getAirportsByCountry(value.fromCountry);
  const toAirports = getAirportsByCountry(
    serviceType === "domestic" ? value.fromCountry : value.toCountry
  );

  return (
    <div className="bg-white rounded-3xl shadow p-8 space-y-10">

      {/* HEADER */}
      <div>
        <h3 className="text-xl font-semibold">Flight Details</h3>
        <p className="text-sm text-gray-600 mt-1">
          Tell us your travel plan so we can find the best flight options for you.
        </p>
      </div>

      {/* COUNTRIES */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-800">Travel Route</h4>

        <div className="grid md:grid-cols-2 gap-4">
          {/* FROM COUNTRY */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Departure Country
            </label>
            <select
              className="mt-1 w-full border rounded-xl px-4 py-3"
              value={value.fromCountry}
              onChange={(e) => {
                onChange("fromCountry", e.target.value);
                onChange("fromAirport", "");
                onChange("toAirport", "");
                onChange("layoverAirport", "");
              }}
            >
              <option value="">Select country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* TO COUNTRY (NOT FOR DOMESTIC) */}
          {serviceType !== "domestic" && (
            <div>
              <label className="text-sm font-medium text-gray-700">
                Destination Country
              </label>
              <select
                className="mt-1 w-full border rounded-xl px-4 py-3"
                value={value.toCountry || ""}
                onChange={(e) => {
                  onChange("toCountry", e.target.value);
                  onChange("toAirport", "");
                  onChange("layoverAirport", "");
                }}
              >
                <option value="">Select country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* AIRPORTS */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-800">Airport Selection</h4>

        <div className="grid md:grid-cols-2 gap-4">
          {/* FROM AIRPORT */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              From Airport
            </label>
            <select
              disabled={!value.fromCountry}
              className="mt-1 w-full border rounded-xl px-4 py-3 disabled:bg-gray-100"
              value={value.fromAirport}
              onChange={(e) => {
                onChange("fromAirport", e.target.value);
                onChange("toAirport", "");
                onChange("layoverAirport", "");
              }}
            >
              <option value="">
                {value.fromCountry ? "Select airport" : "Select country first"}
              </option>
              {fromAirports.map((a) => (
                <option key={a.code} value={a.code}>
                  {formatAirportLabel(a)}
                </option>
              ))}
            </select>
          </div>

          {/* TO AIRPORT */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              To Airport
            </label>
            <select
              disabled={
                !value.fromAirport ||
                (serviceType !== "domestic" && !value.toCountry)
              }
              className="mt-1 w-full border rounded-xl px-4 py-3 disabled:bg-gray-100"
              value={value.toAirport}
              onChange={(e) => {
                onChange("toAirport", e.target.value);
                onChange("layoverAirport", "");
              }}
            >
              <option value="">
                {value.fromAirport
                  ? "Select airport"
                  : "Select from airport first"}
              </option>
              {toAirports
                .filter((a) => a.code !== value.fromAirport)
                .map((a) => (
                  <option key={a.code} value={a.code}>
                    {formatAirportLabel(a)}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      {/* LAYOVER */}
      {value.fromAirport && value.toAirport && (
        <div>
          <label className="text-sm font-medium text-gray-700">
            Layover Airport (optional)
          </label>
          <select
            className="mt-1 w-full border rounded-xl px-4 py-3"
            value={value.layoverAirport || ""}
            onChange={(e) => onChange("layoverAirport", e.target.value)}
          >
            <option value="">No layover</option>
            {toAirports
              .filter(
                (a) =>
                  a.code !== value.fromAirport &&
                  a.code !== value.toAirport
              )
              .map((a) => (
                <option key={a.code} value={a.code}>
                  {formatAirportLabel(a)}
                </option>
              ))}
          </select>
        </div>
      )}

      {/* TRIP TYPE */}
      <div>
        <label className="text-sm font-medium text-gray-700">Trip Type</label>
        <select
          className="mt-1 w-full border rounded-xl px-4 py-3"
          value={value.tripType}
          onChange={(e) => onChange("tripType", e.target.value)}
        >
          <option value="one-way">One Way</option>
          <option value="round-trip">Round Trip</option>
        </select>
      </div>

      {/* DATES */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="date"
          className="border rounded-xl px-4 py-3"
          value={value.departureDate}
          onChange={(e) => onChange("departureDate", e.target.value)}
        />

        {value.tripType === "round-trip" && (
          <input
            type="date"
            className="border rounded-xl px-4 py-3"
            value={value.returnDate || ""}
            onChange={(e) => onChange("returnDate", e.target.value)}
          />
        )}
      </div>
    </div>
  );
}
