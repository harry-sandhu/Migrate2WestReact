interface HotelStayDetails {
  city: string;
  country: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
  guests: number;
  notes?: string;
}

interface Props {
  value: HotelStayDetails;
  onChange: (field: keyof HotelStayDetails, value: any) => void;
}

export default function HotelStayForm({ value, onChange }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow p-8 space-y-8">

      {/* HEADER */}
      <div>
        <h3 className="text-xl font-semibold">Hotel Stay Details</h3>
        <p className="text-sm text-gray-600 mt-1">
          Provide stay details so we can arrange the correct hotel confirmation.
        </p>
      </div>

      {/* LOCATION */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">
            City
          </label>
          <input
            placeholder="City / Location"
            className="mt-1 w-full border rounded-xl px-4 py-3"
            value={value.city}
            onChange={(e) => onChange("city", e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            placeholder="Country"
            className="mt-1 w-full border rounded-xl px-4 py-3"
            value={value.country}
            onChange={(e) => onChange("country", e.target.value)}
          />
        </div>
      </div>

      {/* DATES */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Check-in Date
          </label>
          <input
            type="date"
            className="mt-1 w-full border rounded-xl px-4 py-3"
            value={value.checkIn}
            onChange={(e) => onChange("checkIn", e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Check-out Date
          </label>
          <input
            type="date"
            className="mt-1 w-full border rounded-xl px-4 py-3"
            value={value.checkOut}
            onChange={(e) => onChange("checkOut", e.target.value)}
          />
        </div>
      </div>

      {/* ROOMS & GUESTS */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="number"
          min={1}
          placeholder="Number of Rooms"
          className="border rounded-xl px-4 py-3"
          value={value.rooms}
          onChange={(e) => onChange("rooms", Number(e.target.value))}
        />

        <input
          type="number"
          min={1}
          placeholder="Number of Guests"
          className="border rounded-xl px-4 py-3"
          value={value.guests}
          onChange={(e) => onChange("guests", Number(e.target.value))}
        />
      </div>

      {/* NOTES */}
      <div>
        <label className="text-sm font-medium text-gray-700">
          Additional Notes (optional)
        </label>
        <textarea
          placeholder="Room preference, budget range, special requests…"
          className="mt-1 w-full border rounded-xl px-4 py-3"
          value={value.notes || ""}
          onChange={(e) => onChange("notes", e.target.value)}
        />
      </div>
    </div>
  );
}
