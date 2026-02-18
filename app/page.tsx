import { PromoBanner } from './components/PromoBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoBar } from './components/LogoBar';
import { PricingCards } from './components/PricingCards';
import { Testimonials } from './components/Testimonials';
import { WeightLossCalculator } from './components/WeightLossCalculator';
import { ResultsGrid } from './components/ResultsGrid';
import { MetabolismSection } from './components/MetabolismSection';
import { StatsCards } from './components/StatsCards';
import { HowItWorks } from './components/HowItWorks';
import { SupportSection } from './components/SupportSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQ } from './components/FAQ';
import { Guarantee } from './components/Guarantee';
import { TeamGrid } from './components/TeamGrid';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-text">
      <PromoBanner />

      <div className="relative bg-[linear-gradient(#faf0e4_10%,#fff_100%)] pt-10 pb-7.5 flex flex-col gap-5 px-4">
        <Header />
        <Hero />
      </div>

      <LogoBar />
      <PricingCards />
      <Testimonials />
      <WeightLossCalculator />
      <ResultsGrid />
      <MetabolismSection />
      <StatsCards />
      <HowItWorks />
      <SupportSection />
      <ReviewsSection />
      <FAQ />
      <Guarantee />
      <TeamGrid />
      <FeaturesGrid />
      <Footer />
    </div>
  );
}
