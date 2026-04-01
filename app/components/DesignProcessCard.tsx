import Image from "next/image";

const DesignProcessCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <div className="py-11 max-xl:py-0 flex flex-col gap-8 items-center text-center">
      <div>
        <Image src={icon} alt="" width={40} height={40} />
      </div>
      <div className="lg:max-xl:w-52">
        <h3 className="text-xl max-xl:text-lg text-brand-brown font-bold">
          {title}
        </h3>
        <p className="text-brand-brown pt-2 max-w-70 mx-auto text-base max-xl:text-sm">
          {description}
        </p>
      </div>
      {/* <div className="uppercase text-lg font-semibold bg-copper text-cream py-4 px-8">
        <button className="flex gap-2 items-center">
          <span>Learn more</span>
          <ArrowRight />
        </button>
      </div> */}
    </div>
  );
};

export default DesignProcessCard;
