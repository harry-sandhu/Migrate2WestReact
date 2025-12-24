import PageBanner from "../components/ui/PageBanner";

const BlogDetails = () => {
  return (
    <>
      <PageBanner
        title="How to Apply for a Tourist Visa"
        bgImage="/src/assets/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Details" },
        ]}
      />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-gray-600 mb-6">
            Applying for a tourist visa can be confusing. This guide will
            simplify the process for you.
          </p>

          <p className="text-gray-600">
            From documentation to embassy appointments, Migrate2West helps you
            every step of the way.
          </p>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
