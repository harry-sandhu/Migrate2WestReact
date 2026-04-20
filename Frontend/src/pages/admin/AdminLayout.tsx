import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("m2w_token");
    localStorage.removeItem("m2w_user");
    navigate("/admin/login");
  };

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Payments", path: "/admin/payments" },
    { name: "Slots", path: "/admin/slots" },
    { name: "Service Data", path: "/admin/services" },
    { name: "Blogs", path: "/admin/blogs" },
    { name: "Testimonials", path: "/admin/testimonials" },
    { name: "Contacts", path: "/admin/contacts" },
    { name: "Users", path: "/admin/users" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col">

        <h2 className="text-2xl font-bold mb-8 text-blue-600">
          Admin Panel
        </h2>

        <nav className="flex flex-col gap-2">
          {menu.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg transition
                ${location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={logout}
          className="mt-auto bg-red-500 text-white py-2 rounded-lg"
        >
          Logout
        </button>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}