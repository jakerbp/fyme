'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { type Post } from 'content-collections';
import { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

interface RecentPostsCarouselProps {
  posts: Post[];
}

const RecentPostsCarousel: React.FC<RecentPostsCarouselProps> = ({ posts }) => {
  const options: EmblaOptionsType = {
      loop: posts.length > 3,
      align: 'start',
      containScroll: 'trimSnaps',
      slidesToScroll: 1,
  };
  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!posts || posts.length === 0) {
    return null;
  }

  const showButtons = posts.length > 1;

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">More Recent Articles</h2>
      
      {/* Relative container for carousel and side buttons */}
      <div className="relative group">
        {/* Previous Button Wrapper (positioned left) */}
        {showButtons && (
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 -translate-x-4 transition-transform duration-300 group-hover:-translate-x-5 opacity-75 group-hover:opacity-100">
            <Button
              size="icon"
              variant="default"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              aria-label="Previous post"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
        )}

        <div className="overflow-hidden px-4" ref={emblaRef}>
          <div className="flex -ml-4"> 
            {posts.map((post) => (
              <div key={post._meta.path} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_calc(100%/3)] pl-4 min-w-0">
                <div className="h-full p-6 border border-border bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <h3 className="text-xl font-semibold font-serif mb-2">
                    <Link href={`/blog/${post._meta.path}`} className="hover:text-primary transition-colors line-clamp-2 break-words">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{formatDate(post.date)}</p>
                  <p className="text-sm text-foreground/80 mb-4 font-sans flex-grow line-clamp-3">{post.summary}</p>
                  <Link href={`/blog/${post._meta.path}`} className="text-sm font-medium text-primary hover:underline font-sans mt-auto self-start">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button Wrapper (positioned right) */}
        {showButtons && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 translate-x-4 transition-transform duration-300 group-hover:translate-x-5 opacity-75 group-hover:opacity-100">
            <Button
              size="icon"
              variant="default"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              aria-label="Next post"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentPostsCarousel; 