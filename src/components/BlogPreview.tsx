import Link from 'next/link';
import { allPosts, type Post } from 'content-collections';
import { Button } from '@/components/ui/Button';

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPreview = () => {
  const latestPosts = allPosts
    .sort((a: Post, b: Post) => b.date.getTime() - a.date.getTime())
    .slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-serif tracking-tight sm:text-4xl mb-6 text-center">
          Trader Psychology, Simplified
        </h2>
        <p className="text-lg text-muted-foreground/80 mb-6 text-center">
          Discover free insights, strategies, and tips for traders looking to improve their mental edge and trading performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <div key={post._meta.path} className="p-6 border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold font-serif mb-2">
                <Link href={`/blog/${post._meta.path}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-2">{formatDate(post.date)}</p>
              <p className="text-foreground/80 text-sm mb-4 font-sans">{post.summary}</p>
              <Link href={`/blog/${post._meta.path}`} className="text-sm font-medium text-primary hover:underline font-sans">
                Read More &rarr;
              </Link>
            </div>
          ))}
          {latestPosts.length === 0 && (
              <p className="text-center text-gray-500 md:col-span-3">No blog posts published yet.</p>
          )}
        </div>
        <div className="text-center">
          <Button href="/blog">View All Posts</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview; 