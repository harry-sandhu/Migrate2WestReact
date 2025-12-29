import ServiceCard from "./ServiceCard";
import serviceBg from "../../assets/images/home3-service-bg.png"

const services = [
  {
    title: "Passport Assistance",
    subtitle: "Fresh • Renewal • Lost • Damaged",
    image: serviceBg,
    href: "/passport",
  },
  {
    title: "Visa Services",
    subtitle: "Tourist • Business • Study • Work",
    image: serviceBg,
    href: "/visa",
  },
  {
    title: "Air Ticket",
    subtitle: "Domestic & International",
    image: serviceBg,
    href: "/air-ticket",
  },
  {
    title: "Hotel Confirmation",
    subtitle: "Visa Purpose",
    image: serviceBg,
    href: "/hotel-confirmation",
  },
  {
    title: "Travel Insurance",
    subtitle: "Domestic & International",
    image: serviceBg,
    href: "/travel-insurance",
  },
  {
    title: "Permanent Residence",
    subtitle: "Canada • Australia",
    image: serviceBg,
    href: "/permanent-residence",
  },
  {
    title: "FRRO Services",
    subtitle: "Registration & Extension",
    image: serviceBg,
    href: "/frro",
  },
  {
    title: "OCI Card",
    subtitle: "Application & Renewal",
    image: serviceBg,
    href: "/oci",
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Soft background depth */}
      <div className="absolute -top-40 right-0 w-[28rem] h-[28rem] bg-blue-50 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Context */}
          <div className="lg:col-span-4">
            <span className="inline-block text-sm font-semibold tracking-wide text-blue-700 uppercase mb-4">
              Our Services
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Complete Immigration
              <br className="hidden sm:block" />
              & Travel Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              From visa applications to post-arrival documentation, we provide
              reliable services tailored to your travel and migration needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <ServiceCard key={i} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
