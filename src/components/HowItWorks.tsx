import { Button } from '@/components/ui/Button';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const HowItWorks = () => {
  const features = [
    {
      title: 'Emotional Management Modules',
      description: 'Tools to manage greed, fear, anxiety, regret and more.',
    },
    {
      title: 'Structured Performance Reviews',
      description: 'Systematically analyze cognitive performance with Daily, Weekly, Monthly, Quarterly & Annual review frameworks.',
    },
    {
      title: 'Cognitive Enhancement Tools',
      description: 'Sharpen decision-making with tools designed to block cognitive biases and improve decision quality.',
    },
    {
      title: '360° Session Support',
      description: 'Modules to prepare you mentally pre-session, stay focussed mid-session and review effectively post-session.',
    },
    {
      title: 'Custom Metric Tracking',
      description: 'Define and monitor your own custom metrics for unique personalized insights.',
    },
    {
      title: 'Reflective Journaling Prompts',
      description: 'Guided questions to deepen self-understanding and uncover the \'why\' behind your decisions.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-6">
          How Mental Edge Works
        </h2>
        <p className="text-lg text-muted-foreground/80 mb-12">
          Mental Edge shifts the focus from P&L to process. It provides structured tools and insights to master your trading psychology, improve consistency, and achieve repeatable results.
        </p>
        <div className="mb-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground/90 mb-1">{feature.title}</p>
                  <p className="text-muted-foreground/90 text-sm">{feature.description}</p>
                  {/* Note: Removed subItems display logic as it's no longer in the data */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Button href="/coming-soon" size="lg" variant="default">
            Start Free
          </Button>
          <Button href="/assessment" size="lg" variant="outline">
            Take the Mindset Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 