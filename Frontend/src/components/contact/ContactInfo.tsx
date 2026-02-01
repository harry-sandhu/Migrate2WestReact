const ContactInfo = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full mb-4">
            Contact Information
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3">
            Visit or Call Our Office
          </h3>
          <p className="text-gray-600">
            Our team is available for guidance, queries, and consultations.
          </p>
        </div>

        {/* Info Card */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl rounded-3xl bg-gray-50 shadow-md hover:shadow-xl transition overflow-hidden">
            
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-700" />

            <div className="p-8 sm:p-10 text-center">
              
              {/* Office */}
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                New Delhi Office
              </h4>

              {/* Phone */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Email
                </p>
                <a
  href="mailto:info@migrate2west.com"
  className="inline-block mt-2 font-medium text-gray-900 hover:text-white transition"
>
  info@migrate2west.com
</a>

                <p className="text-sm text-gray-500 mt-1">
                  Mon – Fri · 9:30 AM – 6:30 PM
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-6" />

              {/* Address */}
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Address
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Gp-57, Landmark Near Ndpl Office
                  <br />
                 Saraswati Vihar,North West Delhi,Delhi,India ,110034
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
