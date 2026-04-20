import { useEffect, useState } from "react";
import { getSlotsAdmin, deleteSlot } from "../../api/admin";

export default function AdminSlots() {
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    const d = await getSlotsAdmin();
    setData(d.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteSlot(id);
    fetchData();
  };

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Booked Slots</h1>

      {data.map((s) => (
        <div
          key={s._id}
          className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
        >
          <div className="space-y-1">
            <p className="font-semibold">{s.applicant?.name}</p>

            <p className="text-sm text-gray-500">
              {s.serviceType} → {s.subService}
            </p>

            <p className="text-sm">
              Slot: {new Date(s.slot).toLocaleString()}
            </p>
          </div>

          <button
            onClick={() => handleDelete(s._id)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
}