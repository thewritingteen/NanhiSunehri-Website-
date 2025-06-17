// app/help/page.js (or pages/help.js)

import Link from 'next/link';

export default function HelpPage() {
  return (
    <section className="py-20 bg-background text-foreground text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">
          How Can We Help You?
        </h1>
        <p className="font-body text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
          Whether you have a question about our initiatives, need support, or simply want to learn more,
          we're here to assist you every step of the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Visit Our FAQs Card */}
          <div className="bg-card p-8 rounded-md shadow-lg border border-border flex flex-col justify-between items-center text-left">
            <h3 className="font-headline text-2xl text-accent mb-3">Frequently Asked Questions</h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
              Find instant answers to the most common questions about Nanhi Sunehri, our programs,
              and how you can get involved.
            </p>
            <Link href="/faq" className="inline-flex items-center justify-center
              rounded-md text-sm font-medium transition-colors
              bg-secondary text-secondary-foreground px-5 py-2
              hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-ring focus-visible:ring-offset-2 w-full md:w-auto">
              Go to FAQs &rarr;
            </Link>
          </div>

          {/* Contact Us Directly Card */}
          <div className="bg-card p-8 rounded-md shadow-lg border border-border flex flex-col justify-between items-center text-left">
            <h3 className="font-headline text-2xl text-accent mb-3">Contact Us Directly</h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
              If you can't find what you're looking for, or need personalized assistance,
              please don't hesitate to reach out to our support team.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center
              rounded-md text-sm font-medium transition-colors
              bg-secondary text-secondary-foreground px-5 py-2
              hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-ring focus-visible:ring-offset-2 w-full md:w-auto">
              Send a Message &rarr;
            </Link>
          </div>
        </div>

        {/* Optional: More Resources or Call to Action */}
        <div className="mt-20">
          <h2 className="font-headline text-3xl text-foreground mb-4">Looking for Something Else?</h2>
          <p className="font-body text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
            Explore other sections of our website for more information on our mission, projects, and impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="inline-flex items-center justify-center
              rounded-md text-sm font-medium transition-colors
              bg-primary text-primary-foreground px-6 py-3
              hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-ring focus-visible:ring-offset-2">
              About Nanhi Sunehri
            </Link>
            <Link href="/blog" className="inline-flex items-center justify-center
              rounded-md text-sm font-medium transition-colors
              bg-muted text-muted-foreground px-6 py-3 border border-border
              hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-ring focus-visible:ring-offset-2">
              Visit Our Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
