import { Link } from "react-router-dom";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

const ServiceCard = ({ title, subtitle, image, href }: Props) => {
  return (
    <Link
      to={href}
      className="
        group block overflow-hidden rounded-3xl
        bg-white
        shadow-[0_4px_14px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)]
      "
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* subtle divider shadow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h5 className="text-lg font-semibold text-blue-600 mb-1 tracking-tight">
          {title}
        </h5>

        <p className="text-sm leading-relaxed text-gray-600 mb-5">
          {subtitle}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
            Explore service →
          </span>

          {/* optional affordance */}
          <span className="text-gray-300 transition-colors duration-300 group-hover:text-primary">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
