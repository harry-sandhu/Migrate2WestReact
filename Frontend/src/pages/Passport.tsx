import { Link } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import Button from "../components/ui/Button";

/* ---------- Types ---------- */
type PassportService = {
  title: string;
  desc: string;
  active: boolean;
  href?: string;
};

/* ---------- Data ---------- */
const passportServices: PassportService[] = [
  {
    title: "Fresh Passport",
    desc: "Apply for a new Indian passport with complete documentation and expert handling.",
    href: "/passport/fresh",
    active: true,
  },
  {
    title: "Renewal Passport",
    desc: "Renew your expired or expiring passport quickly and securely.",
    active: false,
  },
  {
    title: "Lost Passport",
    desc: "Reapply for a lost passport with proper legal and procedural guidance.",
    active: false,
  },
  {
    title: "Damaged Passport",
    desc: "Replace your damaged passport with professional support.",
    active: false,
  },
];

/* ---------- Component ---------- */
export default function Passport() {
  return (
    <>
      {/* Banner */}
      <PageBanner
        title="Passport Assistance"
        bgImage="/src/assets/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Passport" },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apply, Renew or Replace Your Passport
          </h2>
          <p className="text-gray-600 text-lg">
            Get expert assistance for all passport-related services with smooth
            processing, accurate documentation, and end-to-end guidance.
          </p>
        </div>
      </section>

      {/* Services */}
<section className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  {/* Ambient background */}
  <div className="absolute -top-40 right-0 w-[30rem] h-[30rem] bg-blue-100/60 rounded-full blur-3xl" />
  <div className="absolute bottom-0 -left-40 w-[26rem] h-[26rem] bg-indigo-100/40 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {passportServices.map((item) => (
        <div
          key={item.title}
          className={`group relative rounded-3xl p-7 transition-all duration-300
            ${
              item.active
                ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl"
                : "bg-white/80 backdrop-blur border border-gray-100 hover:-translate-y-1 hover:shadow-xl"
            }`}
        >
          {/* Status badge */}
          {!item.active && (
            <span className="absolute top-5 right-5 text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
              Coming Soon
            </span>
          )}

          {/* Decorative dot */}
          <div
            className={`h-12 w-12 rounded-xl mb-6 flex items-center justify-center
              ${
                item.active
                  ? "bg-white/20"
                  : "bg-blue-50 text-blue-600"
              }`}
          >
            <div className="h-3 w-3 rounded-full bg-current opacity-80" />
          </div>

          <h4
            className={`text-lg font-semibold mb-3 ${
              item.active ? "text-white" : "text-gray-900"
            }`}
          >
            {item.title}
          </h4>

          <p
            className={`text-sm mb-8 leading-relaxed ${
              item.active ? "text-blue-100" : "text-gray-600"
            }`}
          >
            {item.desc}
          </p>

          {/* CTA */}
          {item.active && item.href ? (
            <Link to={item.href}>
              <Button
                variant="white"
                className="w-full bg-white text-blue-700 hover:bg-gray-100"
              >
                Apply Now →
              </Button>
            </Link>
          ) : (
            <div className="text-sm font-medium text-gray-400">
              Launching soon
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Not sure which passport service applies to you?
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            Talk to our experts and get clear guidance before you apply.
          </p>

          <Link to="/contact">
            <Button variant="gold" className="px-10 py-4 text-base">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
