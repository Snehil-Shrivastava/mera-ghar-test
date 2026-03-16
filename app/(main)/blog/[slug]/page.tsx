// const Page = ({ params }: { params: { slug: string } }) => {
//   const { slug } = params;

//   console.log("slug", slug);

//   return (
//     <div className="pt-[10vh]">
//       <div className="flex flex-col gap-6 py-10 px-20 font-openSans">
//         <h2 className="text-3xl font-bold font-raleway">Heading </h2>
//         <p className="text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//           assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
//           molestiae labore facilis asperiores id odit, accusamus deserunt
//           officia!
//         </p>
//         <p className="text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//           assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
//           molestiae labore facilis asperiores id odit, accusamus deserunt
//           officia!
//         </p>
//         <p className="text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//           assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
//           molestiae labore facilis asperiores id odit, accusamus deserunt
//           officia!
//         </p>
//         <p className="text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//           assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
//           molestiae labore facilis asperiores id odit, accusamus deserunt
//           officia!
//         </p>
//         <p className="text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//           assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
//           molestiae labore facilis asperiores id odit, accusamus deserunt
//           officia!
//         </p>
//         <p className="text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//           assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
//           molestiae labore facilis asperiores id odit, accusamus deserunt
//           officia!
//         </p>
//         <p className="text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//           assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
//           molestiae labore facilis asperiores id odit, accusamus deserunt
//           officia!
//         </p>
//         <p className="text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//           assumenda facere in unde fuga saepe debitis, at optio eius nam maxime
//           molestiae labore facilis asperiores id odit, accusamus deserunt
//           officia!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Page;

// app/(main)/blog/[slug]/page.tsx

// Tell Next.js all possible slugs at build time
export async function generateStaticParams() {
  const res = await fetch(process.env.WORDPRESS_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GetAllSlugs {
          posts {
            nodes {
              slug
            }
          }
        }
      `,
    }),
  });
  const json = await res.json();
  const posts = json?.data?.posts?.nodes || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return posts.map((post: any) => ({ slug: post.slug }));
}

// Fetch single post by slug
async function getPost(slug: string) {
  const res = await fetch(process.env.WORDPRESS_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GetPost($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            title
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      `,
      variables: { slug },
    }),
  });
  const json = await res.json();
  return json?.data?.post;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  //   console.log("post", post);

  if (!post) {
    return (
      <div className="pt-[10vh]">
        <div className="flex flex-col gap-6 py-10 px-20 font-openSans text-center">
          <h2 className="text-3xl font-bold font-raleway">Post Not Found</h2>
        </div>
      </div>
    );
  }

  return (
    // <div className="pt-[10vh]">
    //   <div className="flex flex-col gap-6 py-10 px-20 font-openSans">
    //     <h2 className="text-3xl font-bold font-raleway">Heading</h2>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
    //       earum non, aut illum nesciunt corrupti tempora labore necessitatibus
    //       sunt est fugiat facilis et dolorum possimus voluptates ea nemo iusto.
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
    //       earum non, aut illum nesciunt corrupti tempora labore necessitatibus
    //       sunt est fugiat facilis et dolorum possimus voluptates ea nemo iusto.
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
    //       earum non, aut illum nesciunt corrupti tempora labore necessitatibus
    //       sunt est fugiat facilis et dolorum possimus voluptates ea nemo iusto.
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
    //       earum non, aut illum nesciunt corrupti tempora labore necessitatibus
    //       sunt est fugiat facilis et dolorum possimus voluptates ea nemo iusto.
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
    //       earum non, aut illum nesciunt corrupti tempora labore necessitatibus
    //       sunt est fugiat facilis et dolorum possimus voluptates ea nemo iusto.
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
    //       earum non, aut illum nesciunt corrupti tempora labore necessitatibus
    //       sunt est fugiat facilis et dolorum possimus voluptates ea nemo iusto.
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
    //       earum non, aut illum nesciunt corrupti tempora labore necessitatibus
    //       sunt est fugiat facilis et dolorum possimus voluptates ea nemo iusto.
    //     </p>
    //   </div>
    // </div>

    <div className="pt-[10vh]">
      <div className="flex flex-col gap-6 py-10 px-20 font-openSans">
        {/* Render the dynamic Title */}
        <h2 className="text-3xl font-bold font-raleway">{post.title}</h2>

        {/* Render the dynamic WordPress Content (HTML) */}
        {/* If you installed @tailwindcss/typography, add 'prose prose-lg' to className below */}
        <div
          className="text-lg flex flex-col gap-4 wp-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default Page;
