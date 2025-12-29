import { useParams, Link } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import { blogs } from "../assets/data/blogs";

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageBanner
        title={blog.title}
        bgImage={blog.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: blog.title },
        ]}
      />

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            {blog.excerpt}
          </p>

          <article className="space-y-6 text-gray-700 leading-relaxed text-lg">
            {blog.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to="/blog"
              className="text-blue-600 font-semibold hover:underline"
            >
              ← Back to Blog
            </Link>

            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Need Visa Help?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
