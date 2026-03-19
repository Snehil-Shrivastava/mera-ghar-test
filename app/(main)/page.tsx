import HomeDesignEstimate from "../sections/HomeDesignEstimate";
import HomeDesignServices from "../sections/HomeDesignServices";
import HomePageShowReel from "../sections/HomePageShowReel";

const Page = () => {
  return (
    <div>
      <div id="home-carousel">
        <HomePageShowReel />
      </div>
      <HomeDesignServices />
      <HomeDesignEstimate />
    </div>
  );
};

export default Page;
