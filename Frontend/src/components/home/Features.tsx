export default function Features() {
  const features = [
    {
      stat: "99%",
      title: "Approval Rate",
      text: "High success rate with accurate documentation and expert handling.",
    },
    {
      stat: "48 hrs",
      title: "Fast Processing",
      text: "Quick turnaround for eligible visa applications.",
    },
    {
      stat: "100+",
      title: "Countries Covered",
      text: "Global visa expertise across major destinations worldwide.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background accents */}
      {/* Background accents */}
<div className="pointer-events-none absolute inset-0">
  {/* Top right blob */}
  <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-blue-200 rounded-full blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3" />

  {/* Bottom left blob */}
  <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-blue-300 rounded-full blur-3xl opacity-20 -translate-x-1/3 translate-y-1/3" />
</div>


      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Reliable visa solutions backed by experience, speed, and expertise.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-gray-50 rounded-3xl px-8 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Stat */}
              <div className="text-4xl font-extrabold text-blue-600 mb-4">
                {f.stat}
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {f.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
