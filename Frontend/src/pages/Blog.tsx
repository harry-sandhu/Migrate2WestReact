import { useEffect, useState } from "react";
import PageBanner from "../components/ui/PageBanner";
import BlogCard from "../components/blog/BlogCard";
import { Link } from "react-router-dom";
import { getBlogs } from "../api/public";

type BlogType = {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data || []);
      } catch (err) {
        console.error("Failed to load blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return <div className="p-20 text-center">Loading blogs...</div>;
  }

  if (!blogs.length) {
    return <div className="p-20 text-center">No blogs found</div>;
  }

  const [featured, ...rest] = blogs;

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

      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-24">

          {/* FEATURED */}
          {featured && (
            <div className="mb-14">
              <div className="group bg-white rounded-2xl shadow-md p-6 md:p-8">
                <div className="grid md:grid-cols-12 gap-8 items-center">

                  <div className="md:col-span-5">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>

                  <div className="md:col-span-7">
                    <h3 className="text-2xl font-bold mb-4">
                      {featured.title}
                    </h3>

                    <p className="text-gray-600 mb-6">
                      {featured.excerpt}
                    </p>

                    <Link
                      to={`/blog/${featured.slug}`}
                      className="text-blue-600 font-semibold"
                    >
                      Read article →
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* GRID */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((blog) => (
              <BlogCard key={blog._id} {...blog} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}