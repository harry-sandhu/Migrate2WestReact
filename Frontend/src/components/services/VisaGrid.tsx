// src/components/services/VisaGrid.tsx

import VisaCard from "./VisaCard";
import { visaPackages } from "../../utils/constants";

export default function VisaGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visaPackages.map((visa) => (
            <VisaCard
              key={visa.slug}
              title={visa.title}
              image={visa.image}
              processingTime={visa.processingTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
