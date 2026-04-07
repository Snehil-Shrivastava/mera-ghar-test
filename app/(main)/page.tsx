import BookConsultation from "../sections/BookConsultation";
import HomeDesignProcess from "../sections/HomeDesignProcess";
import HomeDesignServices from "../sections/HomeDesignServices";
import HomePageClients from "../sections/HomePageClients";
import HomePageShowReel from "../sections/HomePageShowReel";
import HomePageTestimonials from "../sections/HomePageTestimonials";

const Page = () => {
  return (
    <div>
      <div id="page-hero" style={{ position: "relative" }}>
        <HomePageShowReel />
      </div>
      <HomeDesignServices />
      <HomeDesignProcess />
      <HomePageTestimonials />
      <HomePageClients />
      <BookConsultation />
    </div>
  );
};

export default Page;
