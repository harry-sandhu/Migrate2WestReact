type Props = {
  visa: any;
};

export default function VisaInfoSection({ visa }: Props) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-2">

        {visa.sections.people && (
          <InfoCard title="Number of Travelers">
            Individual or group applications supported.
          </InfoCard>
        )}

        {visa.sections.university && (
          <InfoCard title="University Requirement">
            Admission from a recognized institution is mandatory.
          </InfoCard>
        )}

        {visa.sections.funds && (
          <InfoCard title="Financial Proof">
            Bank statements or sponsorship proof required.
          </InfoCard>
        )}

        {visa.sections.language && (
          <InfoCard title="Language Proficiency">
            IELTS / TOEFL scores may be required.
          </InfoCard>
        )}

      </div>
    </section>
  );
}

function InfoCard({ title, children }: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}
