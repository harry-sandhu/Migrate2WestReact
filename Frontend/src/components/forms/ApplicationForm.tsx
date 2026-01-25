type Applicant = {
  name: string;
  phone: string;
  email: string;
};

interface Props {
  value: Applicant;
  onChange: (field: keyof Applicant, value: string) => void;
  title?: string;
  subtitle?: string;
}

export default function ApplicationForm({
  value,
  onChange,
  title = "Applicant Details",
  subtitle = "Enter your contact information",
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow p-6 space-y-6">

      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          {subtitle}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          placeholder="Full Name"
          value={value.name}
          onChange={(e) => onChange("name", e.target.value)}
          className="border rounded-xl px-4 py-3 w-full"
        />

        <input
          placeholder="Phone Number"
          value={value.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className="border rounded-xl px-4 py-3 w-full"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={value.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="border rounded-xl px-4 py-3 w-full sm:col-span-2"
        />
      </div>
    </div>
  );
}
