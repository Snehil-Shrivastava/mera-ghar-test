import PageBanner from "@/app/components/PageBanner";
import TestimonilaCard from "@/app/components/TestimonilaCard";
import { Testimonials } from "@/lib/data";

const Page = () => {
  const testimonialData = Testimonials;
  return (
    <div>
      <div>
        <PageBanner heading="Testimonials" />
      </div>
      <div className="py-20 flex flex-col gap-15">
        <div className="w-[90%] max-w-360 mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-x-15 gap-y-15 place-items-center">
          {testimonialData.map((testimonials, index) => (
            <TestimonilaCard
              key={index}
              quote={testimonials.quote}
              name={testimonials.name}
              location={testimonials.location}
              bgColor="bg-cream"
              truncate={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
