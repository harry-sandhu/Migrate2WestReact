import { useParams } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";

const SERVICE_CONTENT: Record<
  string,
  { title: string; description: string }
> = {
  "tourist-visa": {
    title: "Tourist Visa",
    description:
      "A Tourist Visa allows travelers to visit a foreign country for leisure, sightseeing, or personal travel purposes.",
  },
  "business-visa": {
    title: "Business Visa",
    description:
      "A Business Visa is issued for professionals attending meetings, conferences, or business-related activities.",
  },
  "student-visa": {
    title: "Student Visa",
    description:
      "A Student Visa enables individuals to study at recognized institutions abroad.",
  },
  "work-visa": {
    title: "Work Visa",
    description:
      "A Work Visa allows individuals to legally work and reside in a foreign country.",
  },
  "medical-visa": {
    title: "Medical Visa",
    description:
      "A Medical Visa is issued to patients traveling abroad for medical treatment.",
  },
};

export default function ServiceDetails() {
  const { slug } = useParams();

  const service =
    slug && SERVICE_CONTENT[slug]
      ? SERVICE_CONTENT[slug]
      : {
          title: "Visa Service",
          description:
            "Detailed information about this visa service will be available soon.",
        };

  return (
    <>
      <PageBanner
              title={service.title}
              breadcrumbs={[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: service.title },
              ]} bgImage={""}      />

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-4">
          {service.title}
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>

        <div className="mt-8">
          <a
            href="/apply-visa"
            className="inline-block bg-black text-white px-6 py-3 rounded-md"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
