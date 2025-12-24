const ContactMap = () => {
  return (
    <section className="pb-24">
      <div className="w-full h-[450px]">
        <iframe
          title="Office Location"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5647631857846!2d90.36311167605992!3d23.83407118555764"
        />
      </div>
    </section>
  );
};

export default ContactMap;
