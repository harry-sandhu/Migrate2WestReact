import {
  CreditCard,
  Clock,
  Users,
  User,
  Key,
  Phone,
} from "lucide-react";

const menu = [
  { label: "Applications", icon: CreditCard, active: true },
  { label: "History", icon: Clock },
  { label: "Applicants", icon: Users },
  { label: "My Account", icon: User },
  { label: "Password", icon: Key },
  { label: "Support", icon: Phone },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r hidden md:flex flex-col">
      <div className="p-6 font-bold text-lg">
        Migrate2West
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menu.map((item, i) => (
          <a
            key={i}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
              ${
                item.active
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            <item.icon size={18} />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
