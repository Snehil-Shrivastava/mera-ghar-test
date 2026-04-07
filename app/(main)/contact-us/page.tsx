import ContactHeader from "@/app/sections/ContactHeader";
import ContactMain from "@/app/sections/ContactMain";

const page = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <ContactHeader />
      </div>
      <ContactMain />
    </div>
  );
};

export default page;
