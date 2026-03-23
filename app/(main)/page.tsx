import HomeDesignProcess from "../sections/HomeDesignProcess";
import HomeDesignServices from "../sections/HomeDesignServices";
import HomePageShowReel from "../sections/HomePageShowReel";

const Page = () => {
  return (
    <div>
      <div id="home-carousel">
        <HomePageShowReel />
      </div>
      <HomeDesignServices />
      <HomeDesignProcess />
    </div>
  );
};

export default Page;
