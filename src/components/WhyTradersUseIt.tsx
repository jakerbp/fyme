import { Button } from '@/components/ui/Button';

const benefits = [
  {
    title: "Control Trading Emotions",
    description: "Stop fear, greed, and revenge trading. Manage anxiety and build resilience to stay calm under pressure.",
  },
  {
    title: "Make Sharper Decisions",
    description: "Identify and overcome cognitive biases. Improve trade rationale and execute with enhanced mental clarity.",
  },
  {
    title: "Build Lasting Discipline",
    description: "Cultivate consistency with structured reviews, habit-building prompts, and cognitive performance tracking.",
  },
  {
    title: "Optimize Your Unique Edge",
    description: "Gain actionable insights from your data and learn how to spot triggers before they impact your P&L.",
  },
];

const WhyTradersUseIt = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-12">
          Why Traders Choose Mental Edge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-secondary-foreground text-primary-foreground rounded-lg shadow-sm flex flex-col">
              <h3 className="text-xl font-semibold font-heading mb-2">{benefit.title}</h3>
              <p className="flex-grow">{benefit.description}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-foreground/80 mb-8">
          Stop chasing outcomes, start mastering your process. Take control of your trading psychology and build the consistency needed for sustainable long-term results.
        </p>
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

export default WhyTradersUseIt; 