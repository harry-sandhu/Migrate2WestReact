import { ChevronDown } from "lucide-react";

type Props = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FAQItem({ question, answer, isOpen, onToggle }: Props) {
  return (
    <div
      className={`rounded-xl border transition-all duration-300 bg-white
        ${
          isOpen
            ? "border-blue-200 shadow-md"
            : "border-gray-200 hover:border-blue-200"
        }`}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base md:text-lg font-semibold text-gray-900">
          {question}
        </span>

        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all
            ${
              isOpen
                ? "bg-blue-600 text-white rotate-180 border-blue-600"
                : "bg-gray-50 text-gray-500"
            }`}
        >
          <ChevronDown size={18} />
        </span>
      </button>

      {/* Answer */}
      <div
        className={`grid transition-all duration-300 ease-in-out
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden px-5 pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
