import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-2 text-sm font-medium transition-all duration-200
     ${
       isActive
         ? "text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-blue-600"
         : "text-gray-700 hover:text-blue-600"
     }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Migrate2West" className="h-9 md:h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-10">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            Why Choose Us
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>

          <NavLink to="/faq" className={navLinkClass}>
            FAQ
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="hidden xl:flex items-center gap-6">
          <div className="text-right leading-tight">
            <p className="text-xs text-gray-500">Need Help?</p>
            <a
              href="tel:+919217113001"
              className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition"
            >
              +91 92171 13001
            </a>
          </div>

          <Link to="/admin/login">
            <Button variant="black" className="px-5">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-xl hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[100vh]" : "max-h-0"
        }`}
      >
        <nav className="bg-white border-t px-6 py-8 flex flex-col gap-6 text-base">
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Blog", to: "/blog" },
            { label: "FAQ", to: "/faq" },
            { label: "Contact", to: "/contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}

          <Link to="/admin/login" onClick={() => setOpen(false)}>
            <Button variant="black" className="w-full mt-4">
              Login
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
