import { useState } from "react";
import PageBanner from "../components/ui/PageBanner";
import FAQItem from "../components/faq/FAQItem";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How long does visa processing take?",
    answer:
      "Processing time depends on the country and visa type. It usually ranges from a few days to several weeks.",
  },
  {
    question: "Do you provide document assistance?",
    answer:
      "Yes, we help with document preparation, verification, and submission.",
  },
  {
    question: "Is consultation paid?",
    answer:
      "Initial consultation is minimal. Charges apply only after service confirmation.",
  },
  {
    question: "Can you guarantee visa approval?",
    answer:
      "No agency can guarantee approval. Final decisions are made by embassies, but we help maximize success chances.",
  },
  {
    question: "Do you help with visa interviews?",
    answer:
      "Yes, we provide interview preparation and expert guidance to help you attend confidently.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        bgImage="/src/assets/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      {/* FAQ Section */}
      <section className="relative bg-gray-50 py-24 overflow-hidden">
        {/* Background accents */}
        <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 -right-40 w-[24rem] h-[24rem] bg-blue-50 rounded-full blur-3xl opacity-60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT SIDE – Context */}
            <div className="lg:col-span-4">
              <span className="inline-block text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">
                Help Center
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 leading-tight">
                Answers to Common <br className="hidden sm:block" />
                Visa Questions
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Everything you need to know before applying. If you don’t find
                your answer here, our experts are just one click away.
              </p>

              <Link to="/contact">
  <Button variant="gold" className="px-8 py-4">
    Talk to an Expert
  </Button>
</Link>
            </div>

            {/* RIGHT SIDE – FAQs */}
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                  />
                ))}
              </div>

              {/* Bottom helper */}
              <div className="mt-10 rounded-2xl bg-white border border-gray-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-gray-600">
                  Still confused or need personalized guidance?
                </p>
                
  <Link to="/contact">
    <Button variant="primary" className="px-6">
      Schedule a Consultation
    </Button>
  </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
