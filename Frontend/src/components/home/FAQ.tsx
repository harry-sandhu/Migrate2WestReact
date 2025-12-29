import { useEffect, useRef, useState } from "react";
import faqImg from "../../assets/images/img1.png";

const faqs = [
  {
    q: "What services does your visa agency provide?",
    a: "We provide complete visa assistance including application guidance, document review, interview preparation, and application tracking.",
  },
  {
    q: "How can I apply for a visa?",
    a: "You can start by submitting a visa inquiry form on our website or by scheduling a consultation with our experts.",
  },
  {
    q: "What documents are required?",
    a: "A valid passport, photographs, visa application form, travel itinerary, financial proof, and employment or education documents.",
  },
  {
    q: "How long does the visa process take?",
    a: "Processing times vary from a few days to several weeks depending on the visa type and embassy regulations.",
  },
  {
    q: "Can you guarantee visa approval?",
    a: "No agency can guarantee approval. Final decisions are always made by the embassy or consulate.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white">
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Clear answers to the most common visa-related questions.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2 items-start">
          {/* FAQ List */}
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-medium text-gray-900"
                >
                  <span className="pr-4">{f.q}</span>
                  <span className="text-xl text-blue-600">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-200
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="absolute -inset-6 bg-blue-100 rounded-3xl -z-10" />
            <img
              src={faqImg}
              alt="Visa FAQ"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
