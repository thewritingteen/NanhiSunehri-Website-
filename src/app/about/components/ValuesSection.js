// about/components/ValuesSection.js

export default function ValuesSection() {
  return (
    <section className="py-20 bg-muted text-muted-foreground text-center px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-headline text-4xl text-foreground mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value Item 1: Integrity */}
          <div className="bg-card text-card-foreground p-8 rounded-md shadow-lg border border-border">
            <h3 className="font-headline text-2xl text-accent mb-3">Integrity</h3>
            <p className="font-body text-base leading-relaxed">
              Operating with unwavering honesty, transparency, and strong ethical principles in all our endeavors.
              We build trust through consistent and reliable actions.
            </p>
          </div>

          {/* Value Item 2: Innovation */}
          <div className="bg-card text-card-foreground p-8 rounded-md shadow-lg border border-border">
            <h3 className="font-headline text-2xl text-accent mb-3">Innovation</h3>
            <p className="font-body text-base leading-relaxed">
              Continuously seeking creative and effective solutions to complex problems, embracing new ideas and technologies.
              We foster an environment where new ideas flourish.
            </p>
          </div>

          {/* Value Item 3: Compassion */}
          <div className="bg-card text-card-foreground p-8 rounded-md shadow-lg border border-border">
            <h3 className="font-headline text-2xl text-accent mb-3">Compassion</h3>
            <p className="font-body text-base leading-relaxed">
              Approaching every challenge and interaction with deep empathy, kindness, and a genuine desire to help.
              Our work is driven by a profound sense of care for others.
            </p>
          </div>

          {/* Value Item 4: Empowerment */}
          <div className="bg-card text-card-foreground p-8 rounded-md shadow-lg border border-border">
            <h3 className="font-headline text-2xl text-accent mb-3">Empowerment</h3>
            <p className="font-body text-base leading-relaxed">
              Fostering independence, building capabilities, and providing opportunities for individuals and communities to thrive.
              We enable others to realize their full potential.
            </p>
          </div>

          {/* Value Item 5: Collaboration */}
          <div className="bg-card text-card-foreground p-8 rounded-md shadow-lg border border-border">
            <h3 className="font-headline text-2xl text-accent mb-3">Collaboration</h3>
            <p className="font-body text-base leading-relaxed">
              Believing in the power of working together, building strong partnerships to achieve shared goals efficiently and effectively.
            </p>
          </div>

          {/* Value Item 6: Impact */}
          <div className="bg-card text-card-foreground p-8 rounded-md shadow-lg border border-border">
            <h3 className="font-headline text-2xl text-accent mb-3">Impact</h3>
            <p className="font-body text-base leading-relaxed">
              Committed to delivering measurable, meaningful, and sustainable positive change in society, focusing on tangible results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
