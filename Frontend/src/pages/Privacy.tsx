import PageBanner from "../components/ui/PageBanner";

export default function PrivacyPolicy() {
  return (
    <>
      <PageBanner
              title="Privacy Policy"
              breadcrumbs={[
                  { label: "Home", href: "/" },
                  { label: "Privacy Policy" },
              ]} bgImage={""}      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 space-y-10 text-gray-700 leading-relaxed">

          <p>
            <strong>Migrate2west Global</strong> is committed to protecting the
            privacy and personal information of its clients and website users.
            By using our website or services, you agree to the practices
            described in this Privacy Policy.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personal details (name, contact, DOB, nationality)</li>
              <li>Passport and immigration information</li>
              <li>Educational and employment details</li>
              <li>Payment confirmation references</li>
              <li>Technical data such as IP address and cookies</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Use of Information</h3>
            <p>
              Information is used to process visa applications, provide
              consultancy services, communicate updates, comply with legal
              obligations, and improve user experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Information Sharing</h3>
            <p>
              We may share required data with embassies, consulates, VFS centers,
              airlines, insurance providers, or authorities when legally
              necessary. We do not sell personal data.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Data Security</h3>
            <p>
              Reasonable technical and administrative measures are taken to
              protect data. However, absolute security cannot be guaranteed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Governing Law</h3>
            <p>
              This policy is governed by the laws of India. Jurisdiction lies
              exclusively with courts in Delhi, India.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
