import AboutPageMotto from "@/app/sections/AboutPageMotto";
import AboutPageHeader from "@/app/sections/AboutPageHeader";
import AboutPageInfo from "@/app/sections/AboutPageInfo";
import AboutPageGoal from "@/app/sections/AboutPageGoal";
import AboutPageValues from "@/app/sections/AboutPageValues";

const Page = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <AboutPageHeader />
      </div>
      <AboutPageInfo />
      <AboutPageMotto />
      <AboutPageGoal />
      <AboutPageValues />
    </div>
  );
};

export default Page;
