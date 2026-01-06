import { useState } from "react";
import Button from "../ui/Button";

const API_BASE = "https://migrate2-west-react-45ra.vercel.app";

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

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? !prev.agree : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("🟡 Submitting contact form...");
  console.log("📤 Payload:", form);

  if (!form.agree) {
    alert("Please agree to terms & conditions");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    console.log("📡 Response status:", res.status);

    const data = await res.json();
    console.log("📥 Response body:", data);

    if (!res.ok) {
      alert(data.message || "Submission failed");
      return;
    }

    alert("Inquiry submitted successfully!");

    setForm({
      name: "",
      email: "",
      country: "",
      message: "",
      agree: false,
    });
  } catch (error) {
    console.error("❌ Fetch error:", error);
    alert("Server error. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border px-4 py-3"
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                required
                className="w-full rounded-xl border px-4 py-3"
              >
                <option value="">Select country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your visa requirement..."
                required
                className="w-full rounded-xl border px-4 py-3 min-h-[140px]"
              />

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                />
                <p className="text-sm text-gray-600">
                  I agree to the privacy policy and terms & conditions.
                </p>
              </div>

              <Button type="submit" className="w-full py-4" disabled={loading}>

                {loading ? "Submitting..." : "Submit Inquiry →"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
