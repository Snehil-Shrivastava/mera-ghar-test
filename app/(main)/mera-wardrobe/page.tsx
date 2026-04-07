import WardrobeHeader from "@/app/sections/WardrobeHeader";
import WardrobeShowcaseGallery from "@/app/sections/WardrobeShowcaseGallery";

const Page = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <WardrobeHeader />
      </div>
      <WardrobeShowcaseGallery />
    </div>
  );
};

export default Page;
