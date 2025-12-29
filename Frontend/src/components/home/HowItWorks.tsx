import stepImg from "../../assets/images/1.png";

const steps = [
  {
    step: "01",
    title: "Apply Online",
    desc: "Complete your visa application online with smart checks to avoid mistakes.",
    image: stepImg,
  },
  {
    step: "02",
    title: "We Handle Documents",
    desc: "Upload documents digitally. No embassy queues — our experts take care of everything.",
    image: stepImg,
  },
  {
    step: "03",
    title: "Get Your Visa",
    desc: "Track progress in real time and receive your visa quickly without stress.",
    image: stepImg,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How Migrate2West Works
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            A simple 3-step journey from application to approval.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Lines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-200 md:hidden" />
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-blue-200" />

          <div className="grid gap-20 md:grid-cols-3 relative">
            {steps.map((s, index) => (
              <div
                key={s.step}
                className={`relative bg-white rounded-3xl p-8 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                ${index === 1 ? "md:-translate-y-10" : ""}`}
              >
                {/* Decorative diagonal lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-l border-blue-100 rotate-45" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-r border-blue-100 rotate-45" />
                </div>

                {/* Step number (corner watermark) */}
                <span className="absolute top-4 right-6 text-6xl font-extrabold text-blue-300/70 select-none">
                  {s.step}
                </span>

                {/* Image */}
                <div className="relative z-10 mt-6 mb-6 flex justify-center">
                  <div className="h-28 w-28 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {s.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
