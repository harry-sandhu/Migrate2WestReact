import { X } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function PolicyModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-bold mb-4 text-gray-900">
          Privacy & Terms
        </h3>

        <p className="text-gray-600 mb-6 text-sm">
          By continuing, you agree to our Terms & Conditions and Privacy Policy.
          Please review them before proceeding.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/terms"
            onClick={onClose}
            className="text-blue-600 font-medium hover:underline"
          >
            View Terms & Conditions →
          </Link>

          <Link
            to="/privacy"
            onClick={onClose}
            className="text-blue-600 font-medium hover:underline"
          >
            View Privacy Policy →
          </Link>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition"
        >
          I Understand & Agree
        </button>
      </div>
    </div>
  );
}
