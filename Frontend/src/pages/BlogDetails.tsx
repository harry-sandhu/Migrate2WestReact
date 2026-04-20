import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PageBanner from "../components/ui/PageBanner";
import { getBlogBySlug } from "../api/public";

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const loadBlog = async () => {
      try {
        const data = await getBlogBySlug(slug);
        setBlog(data);
      } catch (err) {
        console.error("Failed to load blog:", err);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [slug]);

  if (loading) {
    return <div className="p-20 text-center">Loading...</div>;
  }

  if (!blog) {
    return <div className="p-20 text-center">Blog not found</div>;
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
        <div className="max-w-3xl mx-auto px-4">

          <p className="text-xl mb-10">
            {blog.excerpt}
          </p>

          <article className="space-y-6">
            {blog.content?.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </article>

          <div className="mt-10">
            <Link to="/blog" className="text-blue-600">
              ← Back
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}