import FoundersHeader from "@/app/sections/FoundersHeader";
import FoundersInfo from "@/app/sections/FoundersInfo";
import FoundersLore from "@/app/sections/FoundersLore";

const Page = () => {
  return (
    <div>
      <div>
        <FoundersHeader />
      </div>
      <FoundersInfo />
      <FoundersLore />
    </div>
  );
};

export default Page;
