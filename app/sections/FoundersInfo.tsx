import Image from "next/image";

import anuragAgarwal from "@/public/anurag-agarwal.png";
import tabrezRashid from "@/public/tabrez-rashid.png";

const FoundersInfo = () => {
  return (
    <>
      <div className="py-20">
        <div className="w-[90%] max-w-360 mx-auto flex gap-10">
          <div className="flex-[1.25]">
            <div className="pb-4 max-xl:pb-3 border-b border-b-neutral-300 flex flex-col gap-5">
              <h2 className="capitalize text-brand-brown font-bold text-[60px] max-xl:text-[40px]">
                Mr. Anurag Agarwal
              </h2>
            </div>
            <div className="pt-6 max-xl:pt-4 font-openSans flex flex-col gap-2 text-neutral-700 text-sm">
              <p>
                Born and brought up in Lucknow, Uttar Pradesh a first generation
                businessman with an MBA.
              </p>
              <p>
                From a small self started trading business of home interior
                products in the year 1999 in the bustling old city of Lucknow he
                changed the rules of the game at a very early stage.
              </p>
              <p>
                He put customer service, solutions-centricity and trust as the
                corner stone in a trade dominated by price and scale.
              </p>
              <p>
                Over the years he emerged as one of the strongest player and an
                extremely loved person in the sector.
              </p>
              <p>
                A frequent and avid visitor to worldwide exhibitions and
                seminars, he utilised the global exposure to study and
                understand international products and trends making them the
                bedrock of his product and solution offerings to the consumers.
                He didn&apos;t just grow with time, he evolved and upgraded!
              </p>
              <p>
                With an affable demeanour he continued to strive and provide
                product and solutions way ahead of times to the market, making
                him the preferred choice of both Architects/Designers as well as
                customers building homes.
              </p>
              <p>
                Come 2017, he transformed the market by building a first of its
                kind 10,000 Square Feet experience centre where both designers
                and clients could spend hours exploring with him the design,
                form and function solutions and products for their dream house
                and interior spaces.
              </p>
              <p>
                One of the first to realise the customers need for solutions
                instead of brass tack products he founded his own automated
                furniture factory with top of the line European machinery in
                2021.
              </p>
              <p>
                Today he stands tall as an expert of home interiors solutions,
                with deep understanding of structural, design and functional
                products to an acute aesthetic sense and the biggest palate of
                design based products.
              </p>
              <p>
                Successfully integrating his mastery of the products into
                customised solutions for all categories of homes and spaces.
              </p>
            </div>
          </div>
          <div
            className="flex-1 relative flex justify-end items-center"
            style={{
              height: "inherit",
            }}
          >
            <div className="w-full relative h-full max-h-170">
              <Image
                src={anuragAgarwal}
                alt=""
                fill
                className="object-cover xl:object-contain h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-cream">
        <div className="w-[90%] max-w-360 mx-auto flex gap-10 flex-row-reverse">
          <div className="flex-[1.25]">
            <div className="pb-4 max-xl:pb-3 border-b border-b-neutral-300 flex flex-col gap-5">
              <h2 className="capitalize text-brand-brown font-bold text-[60px] max-xl:text-[40px]">
                Mr. Tabrez Rashid
              </h2>
            </div>
            <div className="pt-6 max-xl:pt-4 font-openSans flex flex-col gap-2 text-neutral-700 text-sm">
              <p>
                A Kolkata boy who grew up in times when the environment and
                market place was dominated by leftist value system which
                presented limited opportunities. West Bengal of the late
                90&apos;s!
              </p>
              <p>
                But having the privilege of top-end education accessible even
                with limited means he completed his Masters in Business
                Administration and joined a home interiors product company and
                relocated to Hyderabad as a trainee.
              </p>
              <p>
                Starting the journey of his professional career with extreme
                passion and dynamism he rose through the ranks in his
                organisation.
              </p>
              <p>
                Early years are formative for all but he leveraged his diversity
                into an extremely formidable building block for rising high in
                his industry.
              </p>
              <p>
                Getting career breaks at critical stages to work in various
                organisations that are the best in class brands today but were
                themselves transitioning in a semi-organised industry at a time
                when the nation also was evolving drastically.
              </p>
              <p>Challenges galore and opportunities aplenty.</p>
              <p>
                Working in diverse markets while he was climbing the
                professional ladder of the industry he evolved into a specialist
                and an expert of the tradecraft.
              </p>
              <p>
                Through fair & transparent business practices he developed a
                strong and vast network of fellow professionals,
                Architects/Designers and channel partners in the home interiors
                industry.
              </p>
              <p>
                For the last ten years he has been in leadership roles and
                managed successful brands and portfolios, leading to a deep
                understanding of home interiors products and solutions.
              </p>
              <p>
                Privileged and thankful, he has learnt through association and
                conducting of business from some of the best promoters in the
                interiors infrastructure industry.
              </p>
              <p>
                And with time he has evolved into one of the most recognised and
                trusted professional of the industry leading to a personal
                legacy that goes beyond the brands he has represented.
              </p>
            </div>
          </div>
          <div
            className="flex-1 relative flex justify-end items-center"
            style={{
              height: "inherit",
            }}
          >
            <div className="w-full relative h-full max-h-170">
              <Image
                src={tabrezRashid}
                alt=""
                fill
                className="object-cover xl:object-contain h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundersInfo;
