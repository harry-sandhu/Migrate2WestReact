import type { VisaDetail } from "../../utils/visaDetails";

type Props = {
  visa: VisaDetail;
};

function Item({ label, value }: { label: string; value?: boolean }) {
  if (value === undefined) return null;

  return (
    <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm">
      <span>{label}</span>
      <span className={value ? "text-green-600" : "text-red-500"}>
        {value ? "Allowed" : "Not Allowed"}
      </span>
    </div>
  );
}

export default function VisaEligibility({ visa }: Props) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8">
          Visa Eligibility Overview
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Item label="Work Permission" value={visa.eligibility.workAllowed} />
          <Item label="Spouse Allowed" value={visa.eligibility.spouseAllowed} />
          <Item
            label="Dependents Allowed"
            value={visa.eligibility.dependentAllowed}
          />
        </div>

        {visa.eligibility.ageLimit && (
          <p className="text-sm text-gray-600 mt-4">
            Age Limit: {visa.eligibility.ageLimit}
          </p>
        )}
      </div>
    </section>
  );
}
