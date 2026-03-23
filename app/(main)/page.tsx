import BookConsultation from "../sections/BookConsultation";
import HomeDesignProcess from "../sections/HomeDesignProcess";
import HomeDesignServices from "../sections/HomeDesignServices";
import HomePageShowReel from "../sections/HomePageShowReel";
import HomePageTestimonials from "../sections/HomePageTestimonials";

const Page = () => {
  return (
    <div>
      <div id="home-carousel">
        <HomePageShowReel />
      </div>
      <HomeDesignServices />
      <HomeDesignProcess />
      <HomePageTestimonials />
      <BookConsultation />
    </div>
  );
};

export default Page;
