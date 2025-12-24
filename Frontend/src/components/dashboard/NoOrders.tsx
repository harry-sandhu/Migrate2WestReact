import { PlusSquare } from "lucide-react";

const NoOrders = () => {
  return (
    <div className="border border-dashed rounded-xl p-10 text-center bg-white">
      <h3 className="text-lg font-semibold mb-2">
        There Are Currently No Active
        <br />
        Or In-Progress Orders.
      </h3>

      <p className="text-gray-600 mb-6">
        Create your first order to begin managing them here.
      </p>

      <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        <PlusSquare size={18} />
        Create a New Order
      </button>
    </div>
  );
};

export default NoOrders;
