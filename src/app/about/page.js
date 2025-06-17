// app/about/page.js

// Import the specific components for your About Us page
import AboutHeroSection from "./components/AboutHeroSection";
import MissionVisionSection from "./components/MissionVisionSection";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection"; // Optional: Uncomment if you include a team section

// You can reuse your existing CtaSection directly from your landing components
import CtaSection from "@/components/landing/cta-section";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionVisionSection />
      <ValuesSection />
      {/* Uncomment the line below if you want to include a 'Meet the Team' section */}
      {/* <TeamSection /> */}
      <CtaSection /> {/* Reuses the CTA section from your homepage's components */}
    </>
  );
}
