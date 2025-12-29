import touristImg from "../../assets/images/img4.jpeg";
import businessImg from "../../assets/images/visa-img2.jpg";
import studentImg from "../../assets/images/img6.jpg";
import medicalImg from "../../assets/images/img5.jpeg";
import workImg from "../../assets/images/img7.jpeg";

const services = [
  {
    title: "Tourist Visa",
    image: touristImg,
    desc: "Travel for leisure, sightseeing, or personal visits abroad.",
  },
  {
    title: "Business Visa",
    image: businessImg,
    desc: "Attend meetings, conferences, or business negotiations.",
  },
  {
    title: "Student Visa",
    image: studentImg,
    desc: "Study at accredited institutions across the globe.",
  },
  {
    title: "Medical Visa",
    image: medicalImg,
    desc: "Receive treatment from recognized international hospitals.",
  },
  {
    title: "Work Visa",
    image: workImg,
    desc: "Live and work abroad legally with proper authorization.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-blue-50 rounded-full blur-3xl opacity-70" />

        {/* Diagonal accent lines */}
        <div className="absolute top-20 left-1/4 w-64 h-px bg-blue-100 rotate-45" />
        <div className="absolute bottom-24 right-1/4 w-64 h-px bg-blue-100 rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What We Offer
          </h2>
          <p className="text-gray-600 mt-3">
            Explore our most popular visa services, designed to make your
            journey smooth and stress-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {s.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {s.desc}
                </p>

                <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:underline">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
