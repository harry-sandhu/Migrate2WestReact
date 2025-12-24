const AboutIntro = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Migrate2West</h2>

          <p className="mb-4 text-gray-600">
            At Migrate2West, we make global travel and migration simple, secure,
            and stress-free. Whether you’re planning to study abroad, work
            overseas, or explore new destinations, our team of visa experts is
            here to guide you every step of the way.
          </p>

          <p className="mb-4 text-gray-600">
            With years of experience and partnerships across multiple embassies
            and consulates, Migrate2West offers end-to-end support — from document
            preparation and application submission to interview guidance and
            travel planning.
          </p>

          <p className="text-gray-600">
            Our mission is to help you reach your goals with confidence.
            Wherever your journey takes you, Migrate2West ensures you get there
            smoothly.
          </p>
        </div>

        <div className="hidden lg:block">
          <img
            src="/src/assets/images/abt.png"
            alt="About Migrate2West"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
