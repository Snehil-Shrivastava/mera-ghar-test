import FloatingBanner from "@/app/components/FloatingBanner";
import FoundersHeader from "@/app/sections/FoundersHeader";
import FoundersInfo from "@/app/sections/FoundersInfo";
import FoundersLore from "@/app/sections/FoundersLore";

const Page = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <FoundersHeader />
        <FloatingBanner />
      </div>
      <FoundersInfo />
      <FoundersLore />
    </div>
  );
};

export default Page;
