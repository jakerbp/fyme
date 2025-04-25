"use client";

import { useState } from "react";
import { allPosts, type Post } from "content-collections";
import Link from "next/link";
import { Button } from '@/components/ui/Button';

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

  const [visiblePosts, setVisiblePosts] = useState(5);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
  };

  return (
    <>
      {/* Full-width header section with primary background */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold font-serif mb-4">Blog</h1>
          <p className="text-lg opacity-90">
            Actionable insights, tips, tricks, and information about the psychology of trading, plus a look at the features included in Mental Edge.
          </p>
        </div>
      </div>

      {/* Main content area */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-8">
          {sortedPosts.slice(0, visiblePosts).map((post: Post) => (
            <article key={post._meta.path} className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold font-serif mb-2">
                <Link href={`/blog/${post._meta.path}`} className="hover:text-primary transition-colors">
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

        {visiblePosts < sortedPosts.length && (
          <div className="mt-12 text-center">
            <Button
              variant="default"
              onClick={loadMorePosts}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </>
  );
} 