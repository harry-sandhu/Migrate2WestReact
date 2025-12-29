type Props = {
  visa: any;
};

export default function VisaHero({ visa }: Props) {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-3 items-start">
        
        {/* Left Content */}
        <div className="lg:col-span-2">
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full mb-4">
            Visa Information
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {visa.title}
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl">
            {visa.shortDesc}
          </p>
        </div>

        {/* Right Summary Card */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm space-y-4">
          
          <div>
            <p className="text-sm text-gray-500">Entry Type</p>
            <p className="font-semibold text-gray-900">
              {visa.entryType}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Visa Validity</p>
            <p className="font-semibold text-gray-900">
              {visa.validity}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Processing Time</p>
            <p className="font-semibold text-gray-900">
              {visa.supportedCountries[0]?.processingDays}
            </p>
          </div>

          <div className="pt-3 border-t text-sm text-gray-500">
            Varies by country & application type
          </div>
        </div>
      </div>
    </section>
  );
}
