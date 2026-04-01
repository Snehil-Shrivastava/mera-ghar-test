import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/full-home-interiors.webp";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  imageUrl?: string;
}

const BlogCard = ({ title, excerpt, slug, imageUrl }: BlogCardProps) => {
  return (
    <div className="px-3 pt-3 pb-6 shadow-md rounded-md flex flex-col gap-6 bg-white max-lg:max-w-120">
      <div className="w-full h-50 relative min-h-50">
        {/* Use WP image if it exists, otherwise fallback to placeholder */}
        <Image
          src={imageUrl || placeholder}
          alt={title}
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col gap-6 pr-6">
        <div>
          <h4 className="text-xl font-bold">{title}</h4>
          {/* WordPress returns excerpts as HTML paragraphs */}
          <div
            className="opacity-70 text-sm line-clamp-3"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
        <div>
          <Link
            href={`/blog/${slug}`}
            className="bg-copper px-3 py-2 text-cream"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
