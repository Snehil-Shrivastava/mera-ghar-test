import AboutPageHeader from "@/app/sections/AboutPageHeader";
import AboutPageInfo from "@/app/sections/AboutPageInfo";

const Page = () => {
  return (
    <div>
      <div id="page-hero">
        <AboutPageHeader />
      </div>
      <AboutPageInfo />
    </div>
  );
};

export default Page;
