const items = [
  { title: "Expertly Curated Tours" },
  { title: "Affordable & Flexible Packages" },
  { title: "24/7 Customer Support" },
  { title: "Certified & Experienced Guides" },
];

const WhyChoose = () => {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3">Why Travel with Us?</h2>
          <p className="text-gray-600">
            We specialize in crafting personalized journeys that suit every
            traveler’s dream.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="text-center border rounded-xl p-8 hover:shadow-lg transition"
            >
              <h5 className="font-semibold text-lg leading-snug">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
