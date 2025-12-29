import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  slug: string;
};

export default function VisaTypeCard({ title, description, slug }: Props) {
  return (
    <Link
      to={`/visa/${slug}`}
      className="group relative rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-blue-600 rounded-t-2xl" />

      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      <span className="inline-flex items-center text-blue-600 font-semibold">
        View details
        <span className="ml-1 transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
