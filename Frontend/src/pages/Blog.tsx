import PageBanner from "../components/ui/PageBanner";
import BlogCard from "../components/blog/BlogCard";
import blogimage from "../assets/images/2222.jpeg";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "How to Apply for a Tourist Visa",
    excerpt:
      "A step-by-step guide to ensure a smooth and successful tourist visa application.",
    image: blogimage,
    slug: "tourist-visa-guide",
  },
  {
    title: "Common Reasons Why Visa Applications Get Rejected",
    excerpt:
      "Avoid common mistakes that lead to visa rejection and improve your approval chances.",
    image: blogimage,
    slug: "visa-rejection-reasons",
  },
  {
    title: "Student Visa Checklist: Documents You Must Prepare",
    excerpt:
      "An essential checklist of documents required for student visa applications.",
    image: blogimage,
    slug: "student-visa-document-checklist",
  },
  {
    title: "Tourist vs Business Visa: What’s the Difference?",
    excerpt:
      "Understand the key differences between tourist and business visas before applying.",
    image: blogimage,
    slug: "tourist-vs-business-visa",
  },
  {
    title: "How Early Should You Apply for a Visa?",
    excerpt:
      "Learn the ideal visa application timelines to avoid delays and stress.",
    image: blogimage,
    slug: "when-to-apply-for-visa",
  },
  {
    title: "Top Tips for a Successful Visa Interview",
    excerpt:
      "Practical tips to help you feel confident and prepared for your visa interview.",
    image: blogimage,
    slug: "visa-interview-tips",
  },
];

export default function Blog() {
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

      {/* Blog Section */}
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          {/* Section intro */}
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Visa & Immigration Insights
            </h2>
            <p className="text-gray-600 text-lg">
              Practical guides, expert tips, and updates to help you apply with confidence.
            </p>
          </div>

          {/* Featured Blog */}
<div className="mb-14">
  <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 md:p-8">
    
    <div className="grid md:grid-cols-12 gap-8 items-center">
      
      {/* Image (compact, editorial) */}
      <div className="md:col-span-5">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <img
            src={featured.image}
            alt={featured.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Content */}
      <div className="md:col-span-7">
        <span className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
          Featured Article
        </span>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
          {featured.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
          {featured.excerpt}
        </p>

        <Link
  to={`/blog/${featured.slug}`}
  className="inline-flex items-center text-blue-600 font-semibold"
>
  Read article
  <span className="ml-1 transition-transform group-hover:translate-x-1">
    →
  </span>
</Link>

      </div>

    </div>
  </div>
</div>



          {/* Blog Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((blog, i) => (
              <BlogCard key={i} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
