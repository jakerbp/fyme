import { Button } from '@/components/ui/Button';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const HowItWorks = () => {
  const features = [
    {
      title: 'Achieve Unmatched Clarity with Structured Reviews',
      description: 'Systematically analyze your performance and refine your strategy with built-in Daily, Weekly, Monthly, Quarterly, and Annual review frameworks. Stop repeating mistakes and start building consistent success.',
    },
    {
      title: 'Forge Winning Habits',
      description: 'Cut through the noise with tailored questions designed to boost your self-awareness, enforce accountability, and cultivate the discipline required for long-term profitability.',
    },
    {
      title: 'Conquer Costly Psychological Traps',
      description: 'Master your trading psychology! Our dedicated emotional-awareness modules help you identify and overcome common pitfalls like:',
      subItems: [
        'Letting hope and fantasy dictate decisions.',
        'Trading from resentment and a need for control.',
        'Being paralyzed by guilt, shame, or entitlement.',
        'Falling victim to revenge trades or chasing elusive "big wins".',
      ],
    },
    {
      title: 'Deepen Your Market Understanding',
      description: 'Go beyond surface-level analysis with guided, reflective journaling prompts that help you truly understand the \'why\' behind your trading decisions.',
    },
    {
      title: 'Connect Mood to Market Moves',
      description: 'Leverage powerful mood tracking capabilities to visualize the critical link between your emotional state and your trading outcomes. Identify your triggers before they impact your P&L.',
    },
    {
      title: 'Transform Data into Decisions',
      description: 'Don\'t just track – improve. Receive actionable insights based directly on your inputs, providing clear steps to refine your approach.',
    },
    {
        title: 'Monitor Your Unique Edge',
        description: 'Go beyond generic analytics. Define and track the custom metrics that matter most to your specific trading style and strategy.',
      },
    {
      title: 'Prepare, Perform, Reflect',
      description: 'Use Mental Edge before trading to prepare your mindset, during sessions to stay calm and focused, and afterwards to analyze performance and learn.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-6">
          How Mental Edge Helps You Gain Your Edge
        </h2>
        <p className="text-lg text-muted-foreground/80 mb-12">
          Tired of emotional trading errors and inconsistent results? Mental Edge provides the structure and insight you need to elevate your trading game by finding your mental edge.
        </p>
        <div className="mb-12 text-left">
          {/* <h3 className="text-2xl font-semibold font-heading mb-6 text-center">
            Here's how we help you:
          </h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground/90 mb-1">{feature.title}</p>
                  <p className="text-muted-foreground/90 text-sm mb-1">{feature.description}</p>
                  {feature.subItems && (
                    <ul className="list-['-_'] list-inside ml-4 mt-1 space-y-1 text-xs text-muted-foreground/70">
                      {feature.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  )}
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