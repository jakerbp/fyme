import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const ComingSoonPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="container mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary font-heading mb-4 sm:text-5xl md:text-6xl">
          Coming Soon!
        </h1>
        <p className="text-lg text-foreground/80 mb-8 md:text-xl">
          We're putting the finishing touches on the Mental Edge platform. In the meantime, discover your trading mindset profile by taking our free assessment.
        </p>
        <Button href="/assessment" size="lg" variant="default">
          Take the Mindset Assessment
        </Button>
      </div>
    </main>
  );
};

export default ComingSoonPage; 