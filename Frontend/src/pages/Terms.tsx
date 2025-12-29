import PageBanner from "../components/ui/PageBanner";

export default function TermsConditions() {
  return (
    <>
      <PageBanner
              title="Terms & Conditions"
              breadcrumbs={[
                  { label: "Home", href: "/" },
                  { label: "Terms & Conditions" },
              ]} bgImage={""}      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 space-y-10 text-gray-700 leading-relaxed">

          <p>
            These Terms & Conditions govern the use of services provided by
            <strong> Migrate2west Global</strong>. By accessing our website or
            services, you agree to these terms.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-2">1. Nature of Services</h3>
            <p>
              We provide visa and immigration consultancy services. We are not a
              government body or visa-issuing authority.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. No Visa Guarantee</h3>
            <p>
              Visa approvals depend entirely on embassies and authorities.
              Migrate2west Global does not guarantee outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Client Responsibility</h3>
            <p>
              Clients must provide accurate, complete, and genuine information.
              Any false data may result in rejection or termination of services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Fees & Refunds</h3>
            <p>
              Consultancy fees are non-refundable once services begin unless
              stated otherwise in writing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Limitation of Liability</h3>
            <p>
              We are not liable for embassy decisions, delays, rejections, or
              third-party service failures.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">6. Governing Law</h3>
            <p>
              These terms are governed by the laws of India, with jurisdiction
              in Delhi courts only.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
