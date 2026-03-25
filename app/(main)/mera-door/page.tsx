import DoorHeader from "@/app/sections/DoorHeader";
import DoorShowcaseGallery from "@/app/sections/DoorShowcaseGallery";

const Page = () => {
  return (
    <div>
      <div id="page-hero">
        <DoorHeader />
      </div>
      <DoorShowcaseGallery />
    </div>
  );
};

export default Page;
