import { useEffect, useState } from "react";
import { getPayments, updatePaymentStatus } from "../../api/admin";

export default function AdminPayments() {
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    const d = await getPayments();
    setData(d.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const markPaid = async (id: string) => {
    await updatePaymentStatus(id, "paid");
    fetchData();
  };

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Payments</h1>

      {data.map((p) => (
        <div
          key={p._id}
          className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
        >
          <div className="space-y-1">
            <p className="font-semibold">{p.applicant?.name}</p>
            <p className="text-sm text-gray-500">
              {p.serviceType} → {p.subService}
            </p>
            <p className="text-sm">Slot: {p.slot}</p>
            <p className="text-lg font-bold">₹{p.amount}</p>
          </div>

          <div className="flex flex-col items-end gap-2">

            {/* STATUS BADGE */}
            <span
              className={`px-3 py-1 rounded-full text-sm
                ${p.status === "paid"
                  ? "bg-green-100 text-green-700"
                  : p.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-200"
                }`}
            >
              {p.status}
            </span>

            {/* ACTION */}
            {p.status !== "paid" && (
              <button
                onClick={() => markPaid(p._id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Mark Paid
              </button>
            )}

          </div>
        </div>
      ))}
    </div>
  );
}