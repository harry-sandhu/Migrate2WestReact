const ContactMap = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-x-0 -top-32 h-64 bg-blue-50 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Section Header */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Find Us on the Map
          </h3>
          <p className="text-gray-600">
            Visit our New Delhi office for in-person consultation.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
  title="Migrate2West Office Location"
  src="https://www.google.com/maps?q=GP-57%20Near%20NDPL%20Office%20Saraswati%20Vihar%20North%20West%20Delhi%20110034%20India&output=embed"
  className="w-full h-[320px] sm:h-[420px] lg:h-[480px] border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;
