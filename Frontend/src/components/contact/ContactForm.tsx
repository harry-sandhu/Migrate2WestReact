import { useState } from "react";
import Button from "../ui/Button";

const countries = [
  "USA",
  "Canada",
  "UK",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "New Zealand",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? !form.agree : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* soft background accent */}
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Let’s Start Your Journey
          </h2>
          <p className="text-gray-600 text-lg">
            Share your details and our experts will get back to you shortly.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rahul Oberoi"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="info@migrate2west.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination Country
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your visa requirement..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 min-h-[140px]
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mt-1"
                />
                <p className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{" "}
                  <span className="text-blue-600 underline cursor-pointer">
                    privacy policy
                  </span>{" "}
                  and terms & conditions.
                </p>
              </div>

              {/* Submit */}
              <Button className="w-full py-4 text-base">
                Submit Inquiry →
              </Button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
