import { allPosts, type Post } from "content-collections";
import Link from "next/link";

// Helper function to format date (optional, adjust as needed)
const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogIndexPage() {
  // Sort posts by date, newest first
  const sortedPosts = allPosts.sort((a: Post, b: Post) => b.date.getTime() - a.date.getTime());

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl"> {/* Basic container styling */}
      <h1 className="text-4xl font-bold font-serif mb-8">Blog</h1> {/* Using font-serif for Libre Baskerville */}

      <div className="space-y-8">
        {sortedPosts.map((post: Post) => (
          <article key={post._meta.path} className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-semibold font-serif mb-2">
              <Link href={`/blog/${post._meta.path}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              {formatDate(post.date)}
            </p>
            <p className="text-gray-700">{post.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
} 