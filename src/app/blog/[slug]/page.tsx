import { allPosts, type Post } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RecentPostsCarousel from "@/components/RecentPostsCarousel";
import ShareButtons from "@/components/ShareButtons";

// Generate static paths for all posts at build time
export async function generateStaticParams() {
  return allPosts.map((post: Post) => ({ // Added Post type hint
    slug: post._meta.path, // Use the path (filename without extension) as the slug
  }));
}

// Helper function to format date (can be moved to a shared utils file later)
const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // Find the post by slug (which matches the file path)
  const post = allPosts.find((p: Post) => p._meta.path === slug); // Added Post type hint

  // If post not found, render 404 page
  if (!post) {
    notFound();
  }

  // Get recent posts (excluding the current one)
  const recentPosts = allPosts
    .filter((p: Post) => p._meta.path !== slug) // Exclude current post
    .sort((a: Post, b: Post) => b.date.getTime() - a.date.getTime()) // Sort by date descending
    .slice(0, 10); // Take the top 10

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Back to Blog Link */}
      <Link
        href="/blog"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold font-serif mb-3">{post.title}</h1>
          <p className="text-sm text-gray-600">{formatDate(post.date)}</p>
        </header>

        {/* Render the HTML content generated from Markdown */}
        <div
          className="prose lg:prose-xl max-w-none font-sans"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Add ShareButtons component here */}
      <ShareButtons title={post.title} slug={slug} />

      {/* Use the RecentPostsCarousel component */}
      <RecentPostsCarousel posts={recentPosts} />
    </div>
  );
} 