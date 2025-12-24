const ContactInfo = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="border rounded-xl p-8 max-w-md text-center shadow-sm">
          <h4 className="text-xl font-semibold mb-2">Delhi Office</h4>
          <p className="mb-2">
            <strong>Contact:</strong>{" "}
            <a href="tel:+919217113001" className="text-blue-600">
              +91 92171 13001
            </a>
          </p>
          <p className="text-gray-600">
            Barakhamba Road, New Delhi 110001, India
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
