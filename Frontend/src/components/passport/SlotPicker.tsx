import { useEffect, useState } from "react";

interface Props {
  bookedSlots: string[];
  selectedSlot: string | null;
  onSelect: (slot: string) => void;
  isSlotAllowed: (slot: Date) => boolean;
}

export default function SlotPicker({
  bookedSlots,
  selectedSlot,
  onSelect,
  isSlotAllowed,
}: Props) {

  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    d.setHours(0, 0, 0, 0);
    return d;
  });


  useEffect(() => {
    onSelect(null as any);
  }, [selectedDate]);


  const slots = Array.from({ length: 24 }).map((_, hour) => {
    const slot = new Date(selectedDate);
    slot.setHours(hour, 0, 0, 0);
    return slot;
  });


  const minDate = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  })();

  return (
    <div className="bg-white p-6 rounded-3xl shadow space-y-6">

      
      <div>
        <h3 className="font-bold text-lg">Select Appointment Slot</h3>
        <p className="text-sm text-gray-600 mt-1">
          Choose a date and an available time slot
        </p>
      </div>

      
      <div>
        <label className="block text-sm font-medium mb-2">
          Select Date
        </label>
        <input
          type="date"
          min={minDate}
          value={selectedDate.toISOString().slice(0, 10)}
          onChange={(e) => {
            const d = new Date(e.target.value);
            d.setHours(0, 0, 0, 0);
            setSelectedDate(d);
          }}
          className="rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-300 rounded-full" />
          Unavailable / Booked
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 border border-gray-400 rounded-full" />
          Available
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          Selected
        </span>
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {slots.map((slot) => {
          const iso = slot.toISOString().slice(0, 16);
          const booked = bookedSlots.includes(iso);
          const allowed = isSlotAllowed(slot);
          const selected = selectedSlot === iso;

          return (
            <button
              key={iso}
              disabled={!allowed || booked}
              onClick={() => onSelect(iso)}
              title={
                booked
                  ? "Already booked"
                  : !allowed
                  ? "Not available for selected service"
                  : "Available"
              }
              className={`p-3 rounded-xl text-sm transition-all ${
                selected
                  ? "bg-green-600 text-white"
                  : booked || !allowed
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "border hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              {slot.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </button>
          );
        })}
      </div>

      
      <p className="text-xs text-gray-500 leading-relaxed">
        • Normal & Consultation: slots available after 24 hours (10 AM – 8 PM)<br />
        • Express: priority slots after 12 hours + all normal slots
      </p>
    </div>
  );
}
