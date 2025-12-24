import { CheckCircle, X } from "lucide-react";

const SuccessBanner = () => {
  return (
    <div className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <CheckCircle className="text-green-600 mt-1" />

      <div className="flex-1">
        <strong className="block">
          Welcome to Migrate2West
        </strong>
        <span className="text-sm text-gray-600">
          You are successfully logged in.
        </span>
      </div>

      <button className="text-gray-400 hover:text-gray-600">
        <X size={18} />
      </button>
    </div>
  );
};

export default SuccessBanner;
