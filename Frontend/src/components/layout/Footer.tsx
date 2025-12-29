export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 grid gap-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Services */}
        <div>
          <h5 className="text-white font-semibold mb-5">Services</h5>
          <ul className="space-y-3 text-sm">
            {[
              "Apply for a Visa",
              "Apply for Passport",
              "Visa Requirements",
              "Embassies & Consulates",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div>
          <h5 className="text-white font-semibold mb-5">Account</h5>
          <ul className="space-y-3 text-sm">
            {["Finish Application", "Manage Applicants", "Manage Orders"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Office */}
        <div>
          <h5 className="text-white font-semibold mb-5">Office</h5>
          <p className="text-sm leading-relaxed text-gray-400">
            <span className="font-semibold text-gray-200">New Delhi</span>
            <br />
            Barakhamba Road, New Delhi 110001
            <br />
            Mon–Fri: 9:30 AM – 6:30 PM
            <br />
            <a
              href="tel:+919217113001"
              className="inline-block mt-2 font-medium text-gray-200 hover:text-white transition"
            >
              +91 92171 13001
            </a>
          </p>
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
            <span className="inline-block animate-heartbeat text-red-500">
              ❤️
            </span>
            <a
              href="https://github.com/harry-sandhu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline underline-offset-4 transition font-medium"
            >
              Primordic
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
