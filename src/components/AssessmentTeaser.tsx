import { Button } from '@/components/ui/Button';

const AssessmentTeaser = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-heading mb-6">
          Are You Ready To Understand Your Current Mental Edge?
        </h2>
        <p className="text-lg text-muted-foreground/80 mb-6">
        If you are, know that truly understanding your edge demands answering tough questions. This assessment requires honesty and the willingness to dig deep into your psyche.
        </p>
        <Button href="/assessment" size="lg" variant="default">
          Start the Assessment
        </Button>
      </div>
    </section>
  );
};

export default AssessmentTeaser; 