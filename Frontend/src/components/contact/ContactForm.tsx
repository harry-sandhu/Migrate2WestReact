import { useState } from "react";
import Button from "../ui/Button";

const API_BASE = import.meta.env.VITE_API_BASE;

const countries = [
  "USA","Canada","UK","Australia","Germany","France","Italy","New Zealand",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "", // ✅ NEW
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
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, // ✅ FIXED
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("📤 Payload:", form);

    if (!form.agree) {
      alert("Please agree to terms & conditions");
      return;
    }

    if (!form.phone) {
      alert("Phone number is required");
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

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Submission failed");
        return;
      }

      alert("Inquiry submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
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
      <div className="max-w-3xl mx-auto py-20 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid sm:grid-cols-2 gap-4">
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
                placeholder="Email"
                required
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>

            {/* ✅ PHONE FIELD */}
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full rounded-xl border px-4 py-3"
            />

            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              required
              className="w-full rounded-xl border px-4 py-3"
            >
              <option value="">Select country</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your requirement..."
              required
              className="w-full rounded-xl border px-4 py-3 min-h-[120px]"
            />

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
              <p className="text-sm text-gray-600">
                I agree to the privacy policy and terms.
              </p>
            </div>

            <Button type="submit" className="w-full py-4" disabled={loading}>
              {loading ? "Submitting..." : "Submit Inquiry →"}
            </Button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;