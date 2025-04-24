import { Button } from '@/components/ui/Button';

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-center">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-heading mb-6 text-primary-foreground">
          Ready to Improve Your Trading Mindset?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8">
          Take the first step towards consistent profitability by understanding your psychological edge.
        </p>
        <div className="flex justify-center space-x-4">
          <Button href="/coming-soon" size="lg" variant="outline" className="border-primary-foreground text-secondary-foreground hover:bg-primary-foreground hover:text-primary">
            Start Free
          </Button>
          <Button href="/assessment" size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
            Take the Mindset Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA; 