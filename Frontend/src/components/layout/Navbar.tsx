import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visaOpen, setVisaOpen] = useState(false);
  const [packageOpen, setPackageOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/assets/images/logo.png" alt="Migrate2West" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-8 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>

          {/* Visa dropdown */}
          <div className="relative">
            <button
              onClick={() => setVisaOpen(!visaOpen)}
              className="flex items-center gap-1"
            >
              Visa ▾
            </button>
            {visaOpen && (
              <ul className="absolute top-full mt-2 w-48 bg-white shadow rounded-md">
                {["Tourist", "Business", "Student", "Work", "Medical", "Spouse"].map(
                  (v) => (
                    <li key={v}>
                      <Link
                        to="/visa-details"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {v} Visa
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>

          {/* Package dropdown */}
          <div className="relative">
            <button
              onClick={() => setPackageOpen(!packageOpen)}
              className="flex items-center gap-1"
            >
              Visa Package ▾
            </button>
            {packageOpen && (
              <ul className="absolute top-full mt-2 w-56 bg-white shadow rounded-md">
                <li>
                  <Link to="/visa" className="block px-4 py-2 hover:bg-gray-100">
                    Visa Package
                  </Link>
                </li>
                <li>
                  <Link
                    to="/visa-details"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Package Details
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Right */}
        <div className="hidden xl:flex items-center gap-4">
          <div className="text-sm">
            <p className="text-gray-500">Need Help?</p>
            <a href="tel:+919217113001" className="font-semibold">
              +91 92171 13001
            </a>
          </div>
          <Button variant="black">Login</Button>
        </div>

        {/* Mobile button */}
        <button
          className="xl:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden bg-white border-t">
          <nav className="flex flex-col p-4 gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
            <Button variant="black">Login</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
