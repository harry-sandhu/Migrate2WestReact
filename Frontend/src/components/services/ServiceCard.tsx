type Props = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

const ServiceCard = ({ title, subtitle, image, href }: Props) => {
  return (
    <a
      href={href}
      className="block rounded-xl overflow-hidden border hover:shadow-lg transition"
    >
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4 text-center">
        <h5 className="font-semibold text-lg mb-1">{title}</h5>
        <span className="text-sm text-gray-500">{subtitle}</span>
      </div>
    </a>
  );
};

export default ServiceCard;
