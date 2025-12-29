import aboutImg from "../../assets/images/abt.png";

const AboutIntro = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 -left-40 w-[30rem] h-[30rem] bg-blue-50 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Content */}
         <div className="lg:col-span-7">
  <div className="mb-8 flex items-center gap-4">
    <span className="text-sm font-semibold tracking-wide text-blue-700 uppercase">
      Our Story
    </span>
    <span className="h-px w-12 bg-blue-200" />
  </div>

  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
    Simplifying Global Travel <br className="hidden sm:block" />
    with Trusted Visa Expertise
  </h2>

  <p className="text-gray-700 text-lg mb-6 leading-relaxed max-w-2xl">
    At <span className="font-medium text-gray-900">Migrate2West</span>,
    we make global travel and migration simple, secure, and stress-free.
    Whether you’re planning to study abroad, work overseas, or explore
    new destinations, our experts guide you every step of the way.
  </p>

  <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
    With years of experience and trusted partnerships across embassies
    and consulates, we provide end-to-end support — from document
    preparation and application submission to interview guidance and
    travel planning.
  </p>

  <p className="text-gray-600 leading-relaxed max-w-2xl">
    Our mission is simple: help you move forward with confidence.
    Wherever your journey takes you, we keep the process smooth,
    transparent, and reliable.
  </p>
</div>


          {/* Image */}
          <div className="lg:col-span-5 relative">
            {/* Offset image card */}
            <div className="relative lg:-translate-y-12">
              <div className="absolute -inset-6 bg-blue-100/50 rounded-3xl -z-10" />

              <img
                src={aboutImg}
                alt="About Migrate2West"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
