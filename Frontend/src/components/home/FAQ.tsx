import { useState } from "react";

const faqs = [
  {
    q: "What services does your visa agency provide?",
    a: "We provide complete visa assistance including application guidance, document review, interview preparation, and tracking.",
  },
  {
    q: "How can I apply for a visa?",
    a: "You can start by submitting a visa inquiry form on our website or visiting our office.",
  },
  {
    q: "What documents are required?",
    a: "Valid passport, photos, visa form, travel itinerary, financial proof, and employment/education documents.",
  },
  {
    q: "How long does the visa process take?",
    a: "Processing time varies from a few days to several weeks depending on visa type and embassy.",
  },
  {
    q: "Can you guarantee visa approval?",
    a: "No agency can guarantee approval. Final decision rests with the embassy.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Questions & Answers</h2>
          <p className="text-gray-600 mt-2">
            We provide clear answers to common visa questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-5 py-4 font-medium flex justify-between"
                >
                  {f.q}
                  <span>{open === i ? "−" : "+"}</span>
                </button>

                {open === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <img
            src="/assets/images/img1.png"
            alt="FAQ"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
