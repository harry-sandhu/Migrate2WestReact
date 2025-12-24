type Breadcrumb = {
  label: string;
  href?: string;
};

type Props = {
  title: string;
  bgImage: string;
  breadcrumbs: Breadcrumb[];
};

const PageBanner = ({ title, bgImage, breadcrumbs }: Props) => {
  return (
    <div
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bgImage})`,
      }}
    >
      <div className="container mx-auto px-4 text-white">
        <h1 className="text-4xl font-bold mb-3">{title}</h1>

        <ul className="flex gap-2 text-sm">
          {breadcrumbs.map((item, i) => (
            <li key={i} className="flex gap-2">
              {item.href ? (
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <span>/</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageBanner;
