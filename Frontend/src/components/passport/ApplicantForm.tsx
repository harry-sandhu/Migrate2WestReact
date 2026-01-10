interface Props {
  form: {
    name: string;
    phone: string;
    email: string;
  };
  isValid: boolean;
  onChange: (field: string, value: string) => void;
  onContinue: () => void;
}

export default function ApplicantForm({
  form,
  isValid,
  onChange,
  onContinue,
}: Props) {
  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow space-y-6">
      <h2 className="text-2xl font-bold text-center">
        Applicant Details
      </h2>

      {["name", "phone", "email"].map((field) => (
        <input
          key={field}
          placeholder={
            field === "name"
              ? "Full Name"
              : field === "phone"
              ? "Mobile Number"
              : "Email Address"
          }
          value={(form as any)[field]}
          onChange={(e) => onChange(field, e.target.value)}
          className="w-full rounded-xl border px-4 py-3"
        />
      ))}

      <button
        disabled={!isValid}
        onClick={onContinue}
        className={`w-full py-3 rounded-xl font-semibold ${
          isValid
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-400"
        }`}
      >
        Continue →
      </button>
    </div>
  );
}
