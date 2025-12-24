const services = [
  {
    title: "Tourist Visa",
    image: "/assets/images/img4.jpeg",
    desc:
      "A Tourist Visa allows travelers to visit a foreign country for leisure, sightseeing, or personal trips.",
  },
  {
    title: "Business Visa",
    image: "/assets/images/visa-img2.jpg",
    desc:
      "A Business Visa allows professionals to travel for meetings, conferences, or negotiations.",
  },
  {
    title: "Student Visa",
    image: "/assets/images/img6.jpg",
    desc:
      "A Student Visa allows individuals to study at an accredited institution abroad.",
  },
  {
    title: "Medical Visa",
    image: "/assets/images/img5.jpeg",
    desc:
      "A Medical Visa is granted for receiving treatment in recognized hospitals.",
  },
  {
    title: "Work Visa",
    image: "/assets/images/img7.jpeg",
    desc:
      "A Work Visa allows individuals to live and work abroad legally.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What We Offer</h2>
          <p className="text-gray-600 mt-2">
            A curated list of the most popular visa categories.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={s.image}
                alt={s.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
