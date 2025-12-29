const items = [
  {
    num: "01",
    title: "Expert Visa Consultants",
    desc: "Applications handled by experienced professionals with precision and care.",
  },
  {
    num: "02",
    title: "Honest & Transparent Process",
    desc: "Clear documentation, realistic timelines, and zero false promises.",
  },
  {
    num: "03",
    title: "End-to-End Support",
    desc: "From eligibility checks to final submission, we manage the full journey.",
  },
  {
    num: "04",
    title: "Global Visa Coverage",
    desc: "Support for study, work, travel, and medical visas worldwide.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background depth */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-0 w-[28rem] h-[28rem] bg-blue-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Statement */}
          <div className="lg:col-span-5">
            <span className="inline-block mb-6 text-sm font-semibold tracking-wide text-blue-700 uppercase">
              Why Choose Migrate2West
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Visa Decisions
              <br />
              Made With Confidence
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              We don’t just process applications. We guide people through
              life-changing decisions with clarity, accuracy, and responsibility.
            </p>
          </div>

          {/* Right Structured Proof */}
          <div className="lg:col-span-7 space-y-10">
            {items.map((item) => (
              <div
                key={item.num}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Number */}
                <span className="absolute -top-5 left-6 text-6xl font-extrabold text-blue-100">
                  {item.num}
                </span>

                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent line */}
                <div className="mt-6 h-px w-12 bg-blue-600 transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
