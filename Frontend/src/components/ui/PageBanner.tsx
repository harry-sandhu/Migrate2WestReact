import { Link } from "react-router-dom";

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
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Decorative shape */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80">
              {breadcrumbs.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="hover:text-white transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">
                      {item.label}
                    </span>
                  )}

                  {i < breadcrumbs.length - 1 && (
                    <span className="text-white/50">›</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
