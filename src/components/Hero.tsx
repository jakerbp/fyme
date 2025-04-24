import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative flex items-start justify-center h-[calc(100vh-theme(spacing.14))] min-h-[500px]">
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-hero-background bg-cover bg-center opacity-80"></div>

      <div className="relative z-10 container px-4 md:px-6 text-center text-secondary-foreground pt-36 mt-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-heading mb-4">
          Find Your Mental Edge
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-secondary-foreground/90 md:text-xl mb-8">
          Take your trading to the next level. Build discipline, emotional awareness, and self-evaluation habits that compound over time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/coming-soon" size="lg" variant="default">
            Start Free
          </Button>
          <Button
            href="/assessment"
            size="lg"
            variant="outline"
            className="border-primary-foreground text-secondary-foreground hover:bg-primary-foreground hover:text-primary z-10"
          >
            Take the Mindset Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 