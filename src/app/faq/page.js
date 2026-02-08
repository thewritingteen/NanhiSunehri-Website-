import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Nanhi Sunehri's core purpose?",
      answer: "Nanhi Sunehri™ helps Indian parents build a golden future for their children through smart, milestone-based gold investments and culturally rooted jewelry gifting—made secure, meaningful, and digital."
    },
    {
      question: "How does Nanhi Sunehri handle gold investments?",
      answer: "Gold investments on our platform are backed by BIS-hallmarked digital gold, stored securely via our vault partners, and fully insured. Parents can invest starting from ₹100, with live pricing and AI-powered savings plans."
    },
    {
      question: "Can I gift gold or jewelry to someone using Nanhi Sunehri?",
      answer: "Yes! Through our Gift Registry and Wishlist features, family and friends can contribute toward a child's gold or milestone jewelry purchase—perfect for birthdays, naming ceremonies, or first steps."
    },
    {
      question: "What makes Nanhi Sunehri unique?",
      answer: "We combine fintech innovation with Indian tradition—offering milestone-based jewelry tracking, personalized baby journals, secure gold lockers, and regional language support for a truly family-first experience."
    },
    {
      question: "Is Nanhi Sunehri a safe  platform?",
      answer: "Absolutely. Nanhi Sunehri™ partners only with BIS-certified providers to ensure every investment is authentic, secure, and traceable. Your trust is our priority."
    }
  ];

  return (
    <section className="py-20 bg-background text-foreground text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="font-body text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
          Find answers to common queries about Nanhi Sunehri, our work, and how you can be a part of our journey.
        </p>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-md shadow-lg border border-border text-left"
            >
              <h3 className="font-semibold text-lg md:text-xl text-foreground mb-3">
                {faq.question}
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-muted p-8 rounded-md shadow-lg border border-border">
          <h2 className="font-headline text-3xl text-foreground mb-6">Still Have Questions?</h2>
          <p className="font-body text-lg text-foreground/80 mb-10">
            If you couldn't find the answer you were looking for, please don't hesitate to reach out to us directly.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center
            rounded-md text-sm font-medium transition-colors
            bg-accent text-accent-foreground px-8 py-3
            hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-ring focus-visible:ring-offset-2">
            Contact Our Support Team
          </Link>
        </div>
      </div>
    </section>
  );
}
