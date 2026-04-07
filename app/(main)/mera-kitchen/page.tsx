import KitchenHeader from "@/app/sections/KitchenHeader";
import KitchenShowcaseGallery from "@/app/sections/KitchenShowcaseGallery";

const Page = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <KitchenHeader />
      </div>
      <KitchenShowcaseGallery />
    </div>
  );
};

export default Page;
