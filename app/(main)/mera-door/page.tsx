import DoorHeader from "@/app/sections/DoorHeader";
import DoorShowcaseGallery from "@/app/sections/DoorShowcaseGallery";

const Page = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <DoorHeader />
      </div>
      <DoorShowcaseGallery />
    </div>
  );
};

export default Page;
