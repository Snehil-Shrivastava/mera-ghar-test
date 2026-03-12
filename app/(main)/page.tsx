import HomeDesignEstimate from "../sections/HomeDesignEstimate";
import HomeDesignServices from "../sections/HomeDesignServices";
import HomePageCarousel from "../sections/HomePageCarousel";

const Page = () => {
  return (
    <div>
      <div id="home-carousel">
        <HomePageCarousel />
      </div>
      <HomeDesignServices />
      <HomeDesignEstimate />
    </div>
  );
};

export default Page;
