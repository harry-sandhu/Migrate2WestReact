import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Passport Assistance",
    subtitle: "Fresh • Renewal • Lost • Damaged",
    image: "/src/assets/images/service-passport.jpg",
    href: "/passport",
  },
  {
    title: "Visa Services",
    subtitle: "Tourist • Business • Study • Work",
    image: "/src/assets/images/service-visa.jpg",
    href: "/visa",
  },
  {
    title: "Air Ticket",
    subtitle: "Domestic & International",
    image: "/src/assets/images/service-flight.jpg",
    href: "/air-ticket",
  },
  {
    title: "Hotel Confirmation",
    subtitle: "Visa Purpose",
    image: "/src/assets/images/service-hotel.jpg",
    href: "/hotel-confirmation",
  },
  {
    title: "Travel Insurance",
    subtitle: "Domestic & International",
    image: "/src/assets/images/service-insurance.jpg",
    href: "/travel-insurance",
  },
  {
    title: "Permanent Residence",
    subtitle: "Canada • Australia",
    image: "/src/assets/images/service-pr.jpg",
    href: "/permanent-residence",
  },
  {
    title: "FRRO Services",
    subtitle: "Registration & Extension",
    image: "/src/assets/images/service-frro.jpg",
    href: "/frro",
  },
  {
    title: "OCI Card",
    subtitle: "Application & Renewal",
    image: "/src/assets/images/service-oci.jpg",
    href: "/oci",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <span className="text-blue-600 font-medium block mb-2">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Professional Immigration & Travel Services
          </h2>
          <p className="text-gray-600">
            Select a service to proceed with application or consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
