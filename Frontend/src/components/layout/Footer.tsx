import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const services = [
  {
    title: "Passport Assistance",
    href: "/passport",
    featured: true,
    highlight: "Most Popular",
  },
  {
    title: "Visa Services",
    href: "/visa",
    featured: true,
    highlight: "High Demand",
  },
  { title: "Air Ticket", href: "/air-ticket" },
  { title: "Hotel Confirmation", href: "/hotel-confirmation" },
  { title: "Travel Insurance", href: "/travel-insurance" },
  {
    title: "Permanent Residence",
    href: "/permanent-residence",
    featured: true,
    highlight: "Expert Handling",
  },
  { title: "FRRO Services", href: "/frro" },
  { title: "OCI Card", href: "/oci" },
  { title: "Tour Packages", href: "/tour-packages" },
  { title: "Job Assistance", href: "/job-assistance" },
  { title: "Career Counseling", href: "/career-counseling" },
  { title: "Meet & Assist", href: "/meet-and-assist" },
  { title: "Coaching", href: "/coaching" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 grid gap-12 sm:grid-cols-2 md:grid-cols-4">
        
        {/* Services */}
        <div>
          <h5 className="text-white font-semibold mb-5">Services</h5>
          <ul className="space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.title} className="flex items-center gap-2">
                <Link to={service.href} className="hover:text-white transition">
                  {service.title}
                </Link>

                {service.featured && (
                  <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded-full">
                    {service.highlight}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div>
          <h5 className="text-white font-semibold mb-5">Account</h5>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Finish Application", href: "/apply" },
              { label: "Manage Applicants", href: "/dashboard" },
              { label: "Manage Orders", href: "/orders" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Office */}
        <div>
          <h5 className="text-white font-semibold mb-5">Office</h5>
          <p className="text-sm leading-relaxed text-gray-400">
            <span className="font-semibold text-gray-200">New Delhi</span>
            <br />
            Gp-57, Landmark Near NDPL Office, Saraswati Vihar,
            <br />
            North West Delhi, Delhi, India – 110034
            <br />
            10 AM to 7 PM IST
          </p>

          <a
            href="mailto:info@migrate2west.com"
            className="inline-block mt-3 text-sm font-medium text-gray-200 hover:text-white transition"
          >
            info@migrate2west.com
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4 text-xl">
            <a
              href="https://www.linkedin.com/company/migrate2west"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com/migrate2west"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/migrate2west"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-white font-semibold mb-5">Questions?</h5>
          <a
            href="mailto:info@migrate2west.com"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            info@migrate2west.com
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-500 space-y-2">
          <p>
            © 2025{" "}
            <span className="text-gray-200 font-medium">
              Migrate2West
            </span>
            . All Rights Reserved.
          </p>

          <p className="flex items-center justify-center gap-2">
            Made by
            <span className="inline-block animate-heartbeat text-red-500">❤️</span>
            <a
              href="https://github.com/harry-sandhu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline underline-offset-4 transition font-medium"
            >
              Primordic
            </a>
            <span className="text-gray-600">• Powered by</span>
            <span className="text-gray-300 font-medium">
              AdGrow Media
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
