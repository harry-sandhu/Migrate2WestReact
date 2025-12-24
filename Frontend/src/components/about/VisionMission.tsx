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
    <section className="pb-24 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">
          Our Vision, Mission & Goal
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="border rounded-xl p-8 hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-3">
                {card.title}
              </h4>
              <p className="text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
