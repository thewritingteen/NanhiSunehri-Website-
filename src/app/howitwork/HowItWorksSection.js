// components/HowItWorksSection.js (Now located in your main components directory)

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Ideation & Research",
      description: "We begin by identifying critical challenges and conducting in-depth research to understand the needs of our target communities. This foundational step ensures our solutions are relevant and impactful.",
      icon: "💡" // Unicode emoji for simplicity, replace with SVG/LucideIcon if preferred
    },
    {
      title: "Design & Development",
      description: "Our team meticulously designs innovative solutions, leveraging modern technology and sustainable practices. This phase involves prototyping, testing, and refining to ensure robustness and user-friendliness.",
      icon: "💻"
    },
    {
      title: "Community Engagement",
      description: "We work closely with local communities, beneficiaries, and stakeholders to ensure our solutions are culturally sensitive and meet real-world needs. Feedback loops are crucial for continuous improvement.",
      icon: "🤝"
    },
    {
      title: "Implementation & Training",
      description: "Once developed, we implement our solutions on the ground, often providing comprehensive training and support to ensure successful adoption and long-term sustainability within the communities.",
      icon: "🚀"
    },
    {
      title: "Monitoring & Impact Assessment",
      description: "Post-implementation, we rigorously monitor the progress and assess the impact of our initiatives. Data-driven insights help us measure success and identify areas for further enhancement.",
      icon: "📊"
    },
    {
      title: "Scaling & Sustainability",
      description: "Successful projects are then scaled to reach more individuals and communities. We focus on building self-sustaining models that can continue to thrive independently, creating lasting change.",
      icon: "🌱"
    }
  ];

  return (
    // ADDED: id="investment" to match the footer link's href="/#investment"
    <section id="investment" className="py-20 bg-card text-card-foreground text-center px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-headline text-4xl text-primary mb-12">How We Work</h2>
        <p className="font-body text-lg text-foreground/80 max-w-xl mx-auto mb-16">
          Our process is driven by a commitment to innovation, collaboration, and creating measurable impact.
          Here's a glimpse into the journey of our initiatives:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-muted p-8 rounded-md shadow-lg border border-border flex flex-col items-center justify-center"
            >
              <div className="text-5xl mb-6" role="img" aria-label={step.title}>
                {step.icon}
              </div>
              <h3 className="font-headline text-2xl text-accent mb-3">{step.title}</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
