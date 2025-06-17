// app/about/page.js

import AboutHeroSection from "./components/AboutHeroSection";
import MissionVisionSection from "./components/MissionVisionSection";
import ValuesSection from "./components/ValuesSection";
// import TeamSection from "./components/TeamSection"; // Uncomment if you add a team section
import CtaSection from "@/components/landing/cta-section"; // Reusing your existing CTA

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionVisionSection />
      <ValuesSection />
      {/* <TeamSection /> */} {/* Uncomment if you want to include a team section */}
      <CtaSection /> {/* You can reuse the existing CtaSection from your landing components */}
    </>
  );
}
