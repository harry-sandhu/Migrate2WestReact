import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 font-medium"
      >
        {question}
        <ChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-4 pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
