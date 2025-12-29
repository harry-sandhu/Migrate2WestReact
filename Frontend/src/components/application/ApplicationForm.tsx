interface Props {
  onNext: () => void;
}

export default function ApplicationForm({ onNext }: Props) {
  return (
    <form className="space-y-10">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-900">
          Visa Application Details
        </h3>
        <p className="text-gray-500 mt-2 text-sm">
          Please provide accurate information as per your passport.
        </p>
      </div>

      {/* Visa Info */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Visa Information
        </h4>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Visa Type
          </label>
          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option>Arrival Card</option>
            <option>Tourist Visa</option>
            <option>Business Visa</option>
          </select>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Contact Details
        </h4>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Personal Info */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Applicant Details
        </h4>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Citizenship
          </label>
          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option>India</option>
            <option>USA</option>
            <option>Canada</option>
            <option>United Kingdom</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-4">
        <button
          type="button"
          onClick={onNext}
          className="w-full rounded-xl bg-blue-600 py-4 text-white font-semibold text-base shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition active:scale-[0.98]"
        >
          Continue to Payment →
        </button>

        <p className="text-center text-xs text-gray-500 mt-3">
          You can review your details before final submission.
        </p>
      </div>
    </form>
  );
}
