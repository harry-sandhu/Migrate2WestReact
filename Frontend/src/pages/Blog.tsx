import PageBanner from "../components/ui/PageBanner";
import BlogCard from "../components/blog/BlogCard";

const blogs = [
  {
    title: "How to Apply for a Tourist Visa",
    excerpt: "Step-by-step guide for smooth tourist visa approval.",
    image: "/src/assets/images/blog1.jpg",
    slug: "tourist-visa-guide",
  },
];

const Blog = () => {
  return (
    <>
      <PageBanner
        title="Blog"
        bgImage="/src/assets/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <BlogCard key={i} {...blog} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
