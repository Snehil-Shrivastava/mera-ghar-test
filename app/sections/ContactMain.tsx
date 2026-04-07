import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import FloatingBanner from "../components/FloatingBanner";

const ContactMain = () => {
  return (
    <div className="py-20">
      <div className="w-[90%] max-lg:w-4/5 max-sm:w-[90%] max-w-360 mx-auto">
        <FloatingBanner />
        <div className="flex gap-20 max-lg:justify-center pt-10">
          <ContactInfo />
          <div className="flex-1 max-lg:hidden">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
