import BlogCard from "@/app/components/BlogCard";

// Function to fetch all posts
async function getPosts() {
  const res = await fetch(process.env.WORDPRESS_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GetAllPosts {
          posts {
            nodes {
              id
              title
              slug
              excerpt
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `,
    }),
  });
  const json = await res.json();
  return json?.data?.posts?.nodes || [];
}

const Page = async () => {
  const posts = await getPosts();

  return (
    <div className="pt-[10vh] bg-cream min-h-screen">
      <div className="grid grid-cols-2 gap-15 w-4/5 max-w-[1093px] mx-auto py-20">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {posts.map((post: any) => (
          <BlogCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            imageUrl={post.featuredImage?.node?.sourceUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
