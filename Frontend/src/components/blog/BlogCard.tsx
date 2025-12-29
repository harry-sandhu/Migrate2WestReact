type Props = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

const BlogCard = ({ title, excerpt, image, slug }: Props) => {
  return (
    <a
      href={`/blog/${slug}`}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-5">
          {excerpt}
        </p>

        <span className="inline-flex items-center text-sm font-medium text-blue-600">
          Read more
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </a>
  );
};

export default BlogCard;
