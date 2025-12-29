import type { VisaDetail } from "../../utils/visaDetails";

type Props = {
  visa: VisaDetail;
};

export default function VisaProcessTimeline({ visa }: Props) {
  return (
    <section className="bg-white py-20 border-t">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-10">
          Visa Application Process
        </h3>

        <div className="relative pl-6">
          <div className="absolute left-1 top-0 h-full w-px bg-blue-200" />

          <div className="space-y-8">
            {visa.processSteps.map((step, i) => (
              <div key={i} className="relative flex gap-6">
                <span className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
