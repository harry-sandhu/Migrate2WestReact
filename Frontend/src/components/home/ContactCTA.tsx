import Button from "../ui/Button";
import contactImg from "../../assets/images/home8-contact-img.png";
import { Link } from "react-router-dom";


export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 border border-blue-100 rotate-45" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 border border-blue-100 rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          {/* Content */}
          <div className="relative">
            <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full mb-5">
              Need Visa Assistance?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Speak with a Visa Expert <br />
              Before You Apply
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Get personalized guidance, understand requirements clearly, and
              avoid costly mistakes. Our experts guide you from start to finish.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link to="/contact">
  <Button variant="gold" className="px-10 py-4 text-base w-full sm:w-auto">
    Schedule a Consultation
  </Button>
</Link>


              <span className="text-sm text-gray-500">
                No obligation • Proper initial guidance
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-8 bg-blue-100 rounded-[2.5rem] -z-10" />
            <img
              src={contactImg}
              alt="Visa Assistance"
              className="rounded-[2.5rem] shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
