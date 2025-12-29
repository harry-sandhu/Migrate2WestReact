import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        
        {/* Logo / Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-2xl">
            🌍
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Migrate2West Login
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign in to manage applications
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold tracking-wide hover:bg-neutral-800 transition"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <Link to="/admin/forgot-password" className="hover:underline">
            Forgot Password?
          </Link>
          <span className="mx-2">|</span>
          <Link to="/admin/register" className="hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
