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
      className="border rounded-xl overflow-hidden hover:shadow-lg transition block"
    >
      <img src={image} className="h-48 w-full object-cover" />

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{excerpt}</p>
      </div>
    </a>
  );
};

export default BlogCard;
