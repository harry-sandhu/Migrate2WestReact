import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../../api/auth";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      setIsError(true);
      setLoading(false);
      return;
    }

    try {
      await registerUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      setMessage("Registration successful! Redirecting...");
      setIsError(false);

      setTimeout(() => {
        navigate("/admin/login");
      }, 1500);

    } catch (err: any) {
      console.error("REGISTER ERROR:", err);
      setMessage(err.message || "Registration failed");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">

        <h2 className="text-xl font-bold text-center mb-4">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full border p-2 rounded"
            required
          />

          {message && (
            <p
              className={`text-center text-sm ${
                isError ? "text-red-600" : "text-green-600"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white p-2 rounded disabled:opacity-50"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          <Link to="/admin/login" className="underline">
            Already have an account? Login
          </Link>
        </p>
      </div>
    </div>
  );
}