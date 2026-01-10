type PassportType = "normal" | "express" | "consultation";
type ApplicantType = "adult" | "child";

interface Props {
  passportType: PassportType;
  applicantType: ApplicantType;
  onPassportChange: (type: PassportType) => void;
  onApplicantChange: (type: ApplicantType) => void;
}

const PRICES = {
  normal: { adult: 2500, child: 1500 },
  express: { adult: 3500, child: 2500 },
  consultation: 500,
};

export default function ApplicationType({
  passportType,
  applicantType,
  onPassportChange,
  onApplicantChange,
}: Props) {
  const isConsultation = passportType === "consultation";

  return (
    <div className="space-y-8">

      {/* SERVICE TYPE */}
      <div className="bg-white p-6 rounded-3xl shadow">
        <h3 className="font-bold text-lg mb-2">
          Select Service Type
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Choose how you want to proceed
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* NORMAL */}
          <button
            onClick={() => onPassportChange("normal")}
            className={`text-left p-5 rounded-2xl border transition ${
              passportType === "normal"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex justify-between mb-2">
              <h4 className="font-semibold">Normal Passport</h4>
              <span className="font-bold">
                ₹{PRICES.normal[applicantType]}
              </span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Passport + Consultation</li>
              <li>• Slots after 24 hours</li>
              <li>• 10 AM – 8 PM</li>
            </ul>
          </button>

          {/* EXPRESS */}
          <button
            onClick={() => onPassportChange("express")}
            className={`text-left p-5 rounded-2xl border transition ${
              passportType === "express"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex justify-between mb-2">
              <h4 className="font-semibold">Express Passport</h4>
              <span className="font-bold">
                ₹{PRICES.express[applicantType]}
              </span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Passport + Consultation</li>
              <li>• Slots after 12 hours</li>
              <li>• Priority processing</li>
            </ul>
          </button>

          {/* CONSULTATION */}
          <button
            onClick={() => onPassportChange("consultation")}
            className={`text-left p-5 rounded-2xl border transition ${
              passportType === "consultation"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex justify-between mb-2">
              <h4 className="font-semibold">Consultation Only</h4>
              <span className="font-bold">
                ₹{PRICES.consultation}
              </span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Expert guidance only</li>
              <li>• Normal slots only</li>
              <li>• No passport application</li>
            </ul>
          </button>
        </div>
      </div>

      {/* APPLICANT TYPE */}
      <div className="bg-white p-6 rounded-3xl shadow">
        <h3 className="font-bold text-lg mb-2">
          Applicant Type
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Not required for consultation-only
        </p>

        <div className="flex gap-4">
          {["adult", "child"].map((t) => (
            <button
              key={t}
              disabled={isConsultation}
              onClick={() => onApplicantChange(t as ApplicantType)}
              className={`px-6 py-3 rounded-xl border font-medium transition ${
                applicantType === t
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200"
              } ${isConsultation ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {t === "adult" ? "Adult" : "Child"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
