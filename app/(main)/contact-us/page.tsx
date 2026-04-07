import FloatingBanner from "@/app/components/FloatingBanner";
import ContactHeader from "@/app/sections/ContactHeader";
import ContactMain from "@/app/sections/ContactMain";

const page = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <ContactHeader />
        <FloatingBanner />
      </div>
      <ContactMain />
    </div>
  );
};

export default page;
