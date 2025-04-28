import Image from 'next/image';
import mockupImage from '/public/images/mockup.png'; // Adjust path if needed

const WhatIsMentalEdge = () => {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Heading - Centered, original size, above columns */}
        <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-10 md:mb-12 text-center">
          What is Mental Edge?
        </h2>
        {/* Use items-stretch to make columns equal height */}
        <div className="flex flex-row items-stretch gap-6 md:gap-12 md:max-h-[400px]">
          {/* Text Content - w-1/2 */}
          <div className="w-1/2 text-left">
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Mental Edge is a dedicated performance coaching app designed specifically for traders. It provides the tools and structure to master your trading psychology, move beyond P&L fixation, and cultivate the discipline needed for consistent, long-term success.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              Navigate challenging emotions like fear and greed, break through cognitive biases impacting your decisions, and build robust review habits to continuously refine your edge.
            </p>
          </div>

          {/* Image Column - w-1/2, stretches vertically */}
          {/* Added relative positioning for the inner rotated div */}
          {/* Default to justify-start (mobile), center on md+ */}
          <div className="w-1/2 flex justify-start md:justify-center relative">
             {/* Rotation Wrapper - Positioned absolutely to fill parent, applies rotation */}
             {/* Adjusted to use relative w/ h-full instead of absolute */}
             <div className="relative w-full h-full transform rotate-3">
                {/* Image fills the height, width scales auto, allows overflow */}
                <Image
                  src={mockupImage}
                  alt="Mental Edge App Mockup"
                  width={300} // Base width for aspect ratio
                  height={600} // Base height for aspect ratio
                  className="h-full w-auto max-w-none object-contain rounded-lg"
                  placeholder="blur"
                  priority
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMentalEdge; 