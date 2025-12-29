import { useState } from "react";
import { Link } from "react-router-dom";

export default function PassportFresh() {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <div className="visa-agency">
      {/* Breadcrumb */}
      <div
        className="relative bg-cover bg-center py-20 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(/images/About-Us-Page.webp)",
        }}
      >
        <h1 className="text-4xl font-bold text-white">Fresh Passport</h1>
        <ul className="mt-4 flex justify-center gap-2 text-white text-sm">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/passport" className="hover:underline">
              Passport
            </Link>
          </li>
          <li>/</li>
          <li>Fresh Passport</li>
        </ul>
      </div>

      {/* ABOUT */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-sm uppercase tracking-wide text-gray-500">
            Fresh Passport
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            Apply for a New Indian Passport
          </h2>
          <p className="text-gray-600">
            Apply for a new Indian Passport with expert guidance, accurate
            documentation, and hassle-free processing.
          </p>

          <div className="mt-10 max-w-md mx-auto border rounded-lg p-6 text-left">
            <h4 className="font-semibold mb-3">Documents Required</h4>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Aadhaar Card</li>
              <li>Additional documents may be required</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STEP 1 */}
      {step === 1 && (
        <section className="pb-20">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-2">
              Applicant Details
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Enter your basic details to continue.
            </p>

            <div className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-4 py-2"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Contact Number</label>
                <input
                  type="tel"
                  className="w-full border rounded px-4 py-2"
                  placeholder="+91 XXXXX XXXXX"
                />
                <small className="text-gray-500">
                  OTP verification will be required
                </small>
              </div>

              <div>
                <label className="block mb-1 font-medium">Email ID</label>
                <input
                  type="email"
                  className="w-full border rounded px-4 py-2"
                  placeholder="Enter email"
                />
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
              >
                Submit & Continue
              </button>
            </div>
          </div>
        </section>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-2">
              Fees & Appointment
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Select a processing option or consultation.
            </p>

            {/* Fees */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="border rounded-lg p-6 text-center">
                <h4 className="font-semibold mb-2">Normal Processing</h4>
                <p>Adult: <strong>₹2,500</strong></p>
                <p>Child (Below 10): <strong>₹1,500</strong></p>
              </div>

              <div className="border rounded-lg p-6 text-center">
                <h4 className="font-semibold mb-2">Tatkal Processing</h4>
                <p>Adult: <strong>₹4,500</strong></p>
                <p>Child (Below 10): <strong>₹3,500</strong></p>
              </div>
            </div>

            {/* Appointment */}
            <div className="max-w-md mx-auto border rounded-lg p-6 text-center mb-10">
              <h4 className="font-semibold mb-2">Consultation Option</h4>
              <p>Consultation Fee: <strong>₹500</strong></p>
              <p className="text-gray-600 mb-4">
                Expert guidance & document verification.
              </p>
              <input
                type="datetime-local"
                className="w-full border rounded px-4 py-2"
              />
            </div>

            {/* Payment */}
            <div className="text-center">
              <Link
                to="/payment"
                className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800"
              >
                Proceed to Payment
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
