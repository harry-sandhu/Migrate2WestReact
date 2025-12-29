import PageBanner from "../components/ui/PageBanner";
import ApplicationTabs from "../components/application/ApplicationTabs";
import bannerImg from "../assets/images/breadcrumb-bg8.png";

export default function ApplyVisa() {
  return (
    <>
      <PageBanner
        title="Apply for Visa"
        bgImage={bannerImg}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Apply Visa" },
        ]}
      />

      {/* Application Section */}
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <ApplicationTabs />
          </div>
        </div>
      </section>
    </>
  );
}
