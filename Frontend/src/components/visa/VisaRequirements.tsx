type Props = {
  visa: any;
};

export default function VisaRequirements({ visa }: Props) {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Documents Required
          </h3>
          <p className="text-gray-600">
            Below is a general checklist. Additional documents may be required
            depending on the country and applicant profile.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {visa.requirements.map((doc: string, i: number) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                ✓
              </span>
              <p className="text-gray-700 leading-relaxed">
                {doc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
