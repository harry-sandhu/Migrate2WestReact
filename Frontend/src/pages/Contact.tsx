import PageBanner from "../components/ui/PageBanner";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import aboutImg from "../assets/images/About-Us-Page.webp";


const Contact = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        bgImage={aboutImg}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default Contact;
