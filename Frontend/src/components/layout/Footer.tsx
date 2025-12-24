export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h5 className="text-white font-semibold mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            <li>Apply for a Visa</li>
            <li>Apply for Passport</li>
            <li>Visa Requirements</li>
            <li>Embassies & Consulates</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Account</h5>
          <ul className="space-y-2 text-sm">
            <li>Finish Application</li>
            <li>Manage Applicants</li>
            <li>Manage Orders</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Office</h5>
          <p className="text-sm">
            <strong>New Delhi</strong><br />
            Barakhamba Road, New Delhi 110001<br />
            Mon–Fri: 9:30 AM – 6:30 PM<br />
            +91 92171 13001
          </p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Questions?</h5>
          <p className="text-sm">info@migrate2west.com</p>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © 2025 <span className="text-white">Migrate2West</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
