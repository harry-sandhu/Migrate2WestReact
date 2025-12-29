const cards = [
  {
    title: "Our Vision",
    text:
      "To become the most trusted global migration and visa consultancy, empowering people to explore new horizons worldwide.",
  },
  {
    title: "Our Mission",
    text:
      "To simplify visa and migration processes through expert guidance, innovative solutions, and exceptional client support.",
  },
  {
    title: "Our Goal",
    text:
      "To help individuals, students, and professionals achieve their dreams of living, studying, or working abroad.",
  },
];

const VisionMission = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Vision, Mission & Goal
          </h2>
          <p className="text-gray-600 text-lg">
            What drives us forward and defines how we serve our clients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Accent bar */}
              <div className="h-1 w-10 bg-blue-600 rounded-full mb-6 transition-all duration-300 group-hover:w-16" />

              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {card.title}
              </h4>

              <p className="text-gray-600 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
