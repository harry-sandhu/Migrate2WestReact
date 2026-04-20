import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("m2w_token");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("m2w_token");
    localStorage.removeItem("m2w_user");
    navigate("/admin/login");
  };

  const user = JSON.parse(localStorage.getItem("m2w_user") || "null");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow p-6 flex justify-between">
        <h1 className="text-xl font-bold">User Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-semibold mb-2">
          Welcome, {user?.email}
        </h2>
        <p className="text-gray-600">
          This is your user dashboard.
        </p>
      </div>
    </div>
  );
}