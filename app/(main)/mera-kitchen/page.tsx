import FloatingBanner from "@/app/components/FloatingBanner";
import KitchenHeader from "@/app/sections/KitchenHeader";
import KitchenShowcaseGallery from "@/app/sections/KitchenShowcaseGallery";

const Page = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <KitchenHeader />
        <FloatingBanner />
      </div>
      <KitchenShowcaseGallery />
    </div>
  );
};

export default Page;
