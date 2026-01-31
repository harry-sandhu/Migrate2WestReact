import ServiceCard from "./ServiceCard";
import passportBg from "../../assets/images/services/passport.jpeg"
import visaBg from "../../assets/images/services/visa-services.jpg"
import airTicketBg from "../../assets/images/services/air-tickets.webp"
import hotelBg from "../../assets/images/services/hotel.webp"
import travelBg from "../../assets/images/services/travel-insurance.webp"
import PRBg from "../../assets/images/services/PR.webp"
import FRROBg from "../../assets/images/services/frro.webp"
import OCIBg from "../../assets/images/services/oci-card.webp"
import tourBg from "../../assets/images/services/tour-packages.webp";
import jobBg from "../../assets/images/services/job-assistance.webp";
import careerBg from "../../assets/images/services/career.webp";
import meetAssistBg from "../../assets/images/services/meet-assist.webp";
import coachingBg from "../../assets/images/services/coaching.webp";

const services = [
  {
    title: "Passport Assistance",
    subtitle: "Fresh • Renewal • Lost • Damaged",
    image: passportBg,
    href: "/passport",
    featured: true,
    highlight: "Most Popular",
  },
  {
    title: "Visa Services",
    subtitle: "Tourist • Business • Study • Work",
    image: visaBg,
    href: "/visa",
    featured: true,
    highlight: "High Demand",
  },
  {
    title: "Air Ticket",
    subtitle: "Domestic & International",
    image: airTicketBg,
    href: "/air-ticket",
  },
  {
    title: "Hotel Confirmation",
    subtitle: "Visa Purpose",
    image: hotelBg,
    href: "/hotel-confirmation",
  },
  {
    title: "Travel Insurance",
    subtitle: "Domestic & International",
    image: travelBg,
    href: "/travel-insurance",
  },
  {
    title: "Permanent Residence",
    subtitle: "Canada • Australia",
    image: PRBg,
    href: "/permanent-residence",
    highlight: "Expert Handling",
  },
  {
    title: "FRRO Services",
    subtitle: "Registration & Extension",
    image: FRROBg,
    href: "/frro",
  },
  {
    title: "OCI Card",
    subtitle: "Application & Renewal",
    image: OCIBg,
    href: "/oci",
  },

  {
    title: "Tour Packages",
    subtitle: "Domestic • International",
    image: tourBg,
    href: "/tour-packages",
  },
  {
    title: "Job Assistance",
    subtitle: "Resume • Interview • Career",
    image: jobBg,
    href: "/job-assistance",
  },
  {
    title: "Career Counseling",
    subtitle: "Young • Career Professionals",
    image: careerBg,
    href: "/career-counseling",
  },
  {
    title: "Meet & Assist",
    subtitle: "Airport Assistance",
    image: meetAssistBg,
    href: "/meet-and-assist",
  },
  {
    title: "Coaching",
    subtitle: "IELTS • PTE • CELPIP",
    image: coachingBg,
    href: "/coaching",
  },
];


const ServicesGrid = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background depth */}
      <div className="absolute -top-40 right-0 w-[28rem] h-[28rem] bg-blue-50 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Context */}
          <div className="lg:col-span-4 sticky top-32">
            <span className="inline-block text-sm font-semibold tracking-wide text-blue-700 uppercase mb-4">
              Our Services
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              End-to-End Immigration
              <br className="hidden sm:block" />
              & Travel Assistance
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We simplify complex government procedures with expert guidance,
              accurate documentation, and dedicated support at every step.
            </p>

            {/* Trust bullets */}
            <ul className="space-y-3 text-gray-700">
              <li>✔ Government-compliant process</li>
              <li>✔ Experienced documentation experts</li>
              <li>✔ Transparent pricing & timelines</li>
            </ul>
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
