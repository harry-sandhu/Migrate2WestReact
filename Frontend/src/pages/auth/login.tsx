import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../api/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ---------- AUTO REDIRECT IF LOGGED IN ---------- */
  useEffect(() => {
    const token = localStorage.getItem("m2w_token");
    if (token) {
      navigate("/admin");
    }
  }, [navigate]);

  /* ---------- SUBMIT ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginUser(email, password);

      localStorage.setItem("m2w_token", data.token);
      localStorage.setItem("m2w_user", JSON.stringify(data.user));

      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (err: any) {
      console.error("LOGIN ERROR:", err);
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-2xl">
            🌍
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Migrate2West Login
        </h2>

        <p className="text-center text-sm text-gray-500 mb-6">
          Sign in to manage applications
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-lg border px-4 py-3"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border px-4 py-3"
            required
          />

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link to="/admin/register" className="underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}