import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import SuccessBanner from "../components/dashboard/SuccessBanner";
import NoOrders from "../components/dashboard/NoOrders";

const Application = () => {
  return (
    <DashboardLayout>
      <SuccessBanner />

      <DashboardHeader
        title="List of Your Applications"
        action={
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            New Application
          </button>
        }
      />

      <NoOrders />
    </DashboardLayout>
  );
};

export default Application;
