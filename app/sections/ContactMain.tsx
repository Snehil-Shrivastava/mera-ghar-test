import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const ContactMain = () => {
  return (
    <div className="py-20">
      <div className="w-[90%] max-w-360 mx-auto flex gap-20">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMain;
