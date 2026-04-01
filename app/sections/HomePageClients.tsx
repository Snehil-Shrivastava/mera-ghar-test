import ClientTestimonialslides from "../components/ClientTestimonialSlides";

const HomePageClients = () => {
  return (
    <div className="py-20 bg-white">
      <div className="flex flex-col items-center gap-15 w-[90%] max-w-360 mx-auto">
        <h1 className="text-brand-brown font-bold text-[40px]/[48px] max-lg:text-[32px]/[40px] max-md:text-xl w-200 max-lg:w-160 max-md:w-[90%] text-center capitalize">
          Powered By
        </h1>
        <div className="max-xl:pt-10 max-lg:pt-8 w-[90%] max-1440p:max-w-250 max-xl:max-w-200 md:max-lg:max-w-150 max-md:w-4/5 mx-auto">
          <ClientTestimonialslides />
        </div>
      </div>
    </div>
  );
};

export default HomePageClients;
