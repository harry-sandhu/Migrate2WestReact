import PageBanner from "../components/ui/PageBanner";
import FAQItem from "../components/faq/FAQItem";

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
      "Initial consultation is free. Charges apply only after service confirmation.",
  },
];

const FAQ = () => {
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

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
