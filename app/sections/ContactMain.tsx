import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const ContactMain = () => {
  return (
    <div className="py-20">
      <div className="w-[90%] max-lg:w-4/5 max-lg:justify-center max-w-360 mx-auto flex gap-20">
        <ContactInfo />
        <div className="flex-1 max-lg:hidden">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
