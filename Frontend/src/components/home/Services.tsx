import passportImg from "../../assets/images/services/passport-services.jpg";
import visaImg from "../../assets/images/services/visa-services.jpg";
import airTicketImg from "../../assets/images/services/air-tickets.webp";
import hotelImg from "../../assets/images/services/hotel.webp";
import travelImg from "../../assets/images/services/travel-insurance.webp";
import PRImg from "../../assets/images/services/PR.webp";
import FRROImg from "../../assets/images/services/frro.webp";
import OCIImg from "../../assets/images/services/oci-card.webp";
import tourImg from "../../assets/images/services/tour-packages.webp";
import jobImg from "../../assets/images/services/job-assistance.webp";
import careerImg from "../../assets/images/services/career.webp";
import meetAssistImg from "../../assets/images/services/meet-assist.webp";
import coachingImg from "../../assets/images/services/coaching.webp";

import { Link } from "react-router-dom";


const services = [
  {
    title: "Passport Assistance",
    image: passportImg,
    desc: "Fresh passport applications, renewals, lost or damaged passports.",
    href: "/passport",
  },
  {
    title: "Visa Services",
    image: visaImg,
    desc: "Tourist, business, study and work visa assistance.",
    href: "/visa",
  },
  {
    title: "Air Ticketing",
    image: airTicketImg,
    desc: "Domestic and international flight bookings at best prices.",
    href: "/air-ticket",
  },
  {
    title: "Hotel Confirmation",
    image: hotelImg,
    desc: "Verified hotel bookings for visa and travel purposes.",
    href: "/hotel-confirmation",
  },
  {
    title: "Travel Insurance",
    image: travelImg,
    desc: "Mandatory and optional insurance coverage for travelers.",
    href: "/travel-insurance",
  },
  {
    title: "Permanent Residence",
    image: PRImg,
    desc: "PR application assistance for Canada and Australia.",
    href: "/permanent-residence",
  },
  {
    title: "FRRO Services",
    image: FRROImg,
    desc: "Foreigners registration, visa extension and compliance services.",
    href: "/frro",
  },
  {
    title: "OCI Card",
    image: OCIImg,
    desc: "OCI card application and renewal services for NRIs.",
    href: "/oci",
  },
  {
    title: "Tour Packages",
    image: tourImg,
    desc: "Domestic and international holiday packages.",
    href: "/tour-packages",
  },
  {
    title: "Job Assistance",
    image: jobImg,
    desc: "Resume building, job search and interview preparation.",
    href: "/job-assistance",
  },
  {
    title: "Career Counseling",
    image: careerImg,
    desc: "Career guidance for students and working professionals.",
    href: "/career-counseling",
  },
  {
    title: "Meet & Assist",
    image: meetAssistImg,
    desc: "Premium airport meet and greet assistance.",
    href: "/meet-and-assist",
  },
  {
    title: "Coaching",
    image: coachingImg,
    desc: "IELTS, PTE and CELPIP coaching programs.",
    href: "/coaching",
  },
];




export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-blue-50 rounded-full blur-3xl opacity-70" />

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
            Explore our most popular services, designed to make your
            journey smooth and stress-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
