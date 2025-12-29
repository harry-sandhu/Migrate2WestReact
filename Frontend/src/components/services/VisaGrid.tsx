import VisaTypeCard from "./VisaTypeCard";
import { visaTypes } from "../../utils/visaTypes.ts";

export default function VisaTypeGrid() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Visa Type
          </h2>
          <p className="text-gray-600 text-lg">
            We provide expert assistance across all major visa categories.
            Select a visa type to view requirements, costs, and timelines.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visaTypes.map((visa) => (
            <VisaTypeCard key={visa.slug} {...visa} />
          ))}
        </div>
      </div>
    </section>
  );
}
