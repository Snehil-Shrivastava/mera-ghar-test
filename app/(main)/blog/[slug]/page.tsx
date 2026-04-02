import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch(process.env.WORDPRESS_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
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
    cache: "no-store",
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

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-[10vh]">
      <div className="flex flex-col gap-6 pt-10 pb-25 px-20 font-openSans max-w-360 mx-auto">
        {/* Render the dynamic Title */}
        <h2 className="text-3xl font-bold font-raleway">{post.title}</h2>

        {/* Render the dynamic WordPress Content (HTML) */}
        <div
          className="text-lg flex flex-col gap-4 wp-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default Page;
