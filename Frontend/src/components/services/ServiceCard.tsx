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
      className="group relative block overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h5 className="text-lg font-semibold text-white mb-1">
          {title}
        </h5>

        <span className="text-sm text-white/80 mb-4">
          {subtitle}
        </span>

        <span className="inline-flex items-center text-sm font-medium text-white transition-all duration-300 group-hover:translate-x-1">
          Explore service →
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
