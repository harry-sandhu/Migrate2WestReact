import Button from "../ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-blue-600 font-medium">
            Need Visa Assistance?
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-6">
            To Get Visa Assistance, Schedule a Meeting.
          </h2>

          <Button variant="gold" hoverText="Schedule Now">
            Schedule a Consultation
          </Button>
        </div>

        <img
          src="/assets/images/home8-contact-img.png"
          alt="Visa Assistance"
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
