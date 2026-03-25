import KitchenHeader from "@/app/sections/KitchenHeader";
import KitchenShowcaseGallery from "@/app/sections/KitchenShowcaseGallery";

const Page = () => {
  return (
    <div>
      <div id="page-hero">
        <KitchenHeader />
      </div>
      <KitchenShowcaseGallery />
    </div>
  );
};

export default Page;
