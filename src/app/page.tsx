import Hero from '@/components/Hero';
import WhatIsMentalEdge from '@/components/WhatIsMentalEdge';
import HowItWorks from '@/components/HowItWorks';
import WhyTradersUseIt from '@/components/WhyTradersUseIt';
import AssessmentTeaser from '@/components/AssessmentTeaser';
import BlogPreview from '@/components/BlogPreview';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsMentalEdge />
      <HowItWorks />
      <WhyTradersUseIt />
      <AssessmentTeaser />
      <BlogPreview /> {/* Contains placeholder content for now */}
      <FinalCTA />
    </>
  );
}
