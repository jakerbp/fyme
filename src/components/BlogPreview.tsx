import Link from 'next/link';
import { allPosts, type Post } from 'content-collections';
import { Button } from '@/components/ui/Button';
import RecentPostsCarousel from '@/components/RecentPostsCarousel';

const BlogPreview = () => {
  const posts = allPosts
    .sort((a: Post, b: Post) => b.date.getTime() - a.date.getTime());

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-serif tracking-tight sm:text-4xl mb-6 text-center">
          Trader Psychology, Simplified
        </h2>
        <p className="text-lg text-muted-foreground/80 mb-12 text-center">
          Discover free insights, strategies, and tips for traders looking to improve their mental edge and trading performance.
        </p>
        {posts.length > 0 ? (
            <RecentPostsCarousel posts={posts} />
        ) : (
            <p className="text-center text-gray-500 md:col-span-3">No blog posts published yet.</p>
        )}
        <div className="text-center mt-12">
          <Button href="/blog">View All Posts</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview; 