import { Button } from '@/components/ui/Button';

const benefits = [
  {
    title: "Achieve Clarity & Deeper Market Understanding",
    description: "Systematically analyze performance, refine strategy with structured reviews, and grasp the 'why' behind your decisions through reflective journaling.",
  },
  {
    title: "Conquer Emotional Trading & Identify Triggers",
    description: "Master your psychology by overcoming costly traps like hope, fear, and revenge trading. Connect mood to market moves and spot triggers before they impact P&L.",
  },
  {
    title: "Forge Winning Habits & Discipline",
    description: "Boost self-awareness, enforce accountability, and cultivate the discipline needed for long-term profitability using tailored questions and frameworks.",
  },
  {
    title: "Transform Data into Action & Monitor Your Edge",
    description: "Receive actionable insights from your inputs and go beyond generic analytics by defining and tracking the custom metrics crucial to your unique strategy.",
  },
];

const WhyTradersUseIt = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-12">
          Stop Guessing, Start Growing with Mental Edge
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
          Stop guessing, start growing. Take control of your trading psychology and results today!
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