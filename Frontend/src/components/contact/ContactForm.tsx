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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Get in Touch!</h2>
            <p className="text-gray-600">
              We’re excited to hear from you. Send us your inquiry below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-3"
                  placeholder="Rahul Oberoi"
                />
              </div>

              <div>
                <label className="block mb-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-3"
                  placeholder="info@migrate2west.com"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Where are you going?</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3"
              >
                <option value="">Select country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3 min-h-[120px]"
                placeholder="Write something about your inquiry"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
              <span className="text-sm">
                I agree to the privacy policy & terms.
              </span>
            </div>

            <Button>Submit Now</Button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
