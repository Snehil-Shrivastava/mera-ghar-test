import WardrobeHeader from "@/app/sections/WardrobeHeader";
import WardrobeShowcaseGallery from "@/app/sections/WardrobeShowcaseGallery";

const Page = () => {
  return (
    <div>
      <div id="page-hero">
        <WardrobeHeader />
      </div>
      <WardrobeShowcaseGallery />
    </div>
  );
};

export default Page;
