const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  console.log("slug", slug);

  return (
    <div className="pt-[10vh]">
      <div className="flex flex-col gap-6 py-10 px-20 font-openSans">
        <h2 className="text-3xl font-bold font-raleway">Heading </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
          molestiae labore facilis asperiores id odit, accusamus deserunt
          officia!
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
          molestiae labore facilis asperiores id odit, accusamus deserunt
          officia!
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
          molestiae labore facilis asperiores id odit, accusamus deserunt
          officia!
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
          molestiae labore facilis asperiores id odit, accusamus deserunt
          officia!
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
          molestiae labore facilis asperiores id odit, accusamus deserunt
          officia!
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
          molestiae labore facilis asperiores id odit, accusamus deserunt
          officia!
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
          molestiae labore facilis asperiores id odit, accusamus deserunt
          officia!
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
          molestiae labore facilis asperiores id odit, accusamus deserunt
          officia!
        </p>
      </div>
    </div>
  );
};

export default Page;
