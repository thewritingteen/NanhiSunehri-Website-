// about/components/AboutHeroSection.js

// Assuming Link is needed for any potential call-to-action button
import Link from 'next/link';

export default function AboutHeroSection() {
  return (
    // Tailwind classes for consistent padding, background, and text alignment
    <section className="py-24 bg-background text-foreground text-center px-4">
      <div className="max-w-4xl mx-auto">
        {/* Using font-headline for H1, text-primary-foreground for contrast */}
        <h1 className="font-headline text-5xl md:text-6xl text-primary-foreground mb-6 leading-tight">
          About Nanhi Sunehri
        </h1>
        {/* Using font-body for general text */}
        <p className="font-body text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Empowering futures, one innovative step at a time.
        </p>
        <p className="font-body text-lg text-foreground/70 mb-10 max-w-3xl mx-auto">
          At Nanhi Sunehri, we are passionately dedicated to transforming lives through impactful initiatives.
          Our journey began with a vision to create sustainable solutions for real-world challenges,
          fostering growth, safety, and community empowerment. We believe in nurturing bright minds and building a resilient future.
        </p>
        {/* Example Button - replicate your homepage button styles */}
        {/*
        <Link href="/contact" className="inline-flex items-center justify-center
          rounded-md text-sm font-medium transition-colors
          bg-primary text-primary-foreground px-6 py-3
          hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-ring focus-visible:ring-offset-2">
          Get in Touch
        </Link>
        */}
      </div>
    </section>
  );
}
