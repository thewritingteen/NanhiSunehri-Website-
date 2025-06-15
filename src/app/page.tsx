import HeroSection from "@/components/landing/hero-section";
import InvestmentSection from "@/components/landing/investment-section";
import MilestonesSection from "@/components/landing/milestones-section";
import FeaturesSection from "@/components/landing/features-section";
import TrustSection from "@/components/landing/trust-section";
import PricingSection from "@/components/landing/pricing-section";
import CtaSection from "@/components/landing/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InvestmentSection />
      <MilestonesSection />
      <FeaturesSection />
      <TrustSection />
      <PricingSection />
      <CtaSection />
    </>
  );
}
