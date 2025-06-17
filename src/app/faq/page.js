// faq/components/FAQSection.js
// (or components/FAQSection.js if using Pages Router)

"use client"; // <-- THIS MUST BE THE VERY FIRST LINE

import { useState } from 'react'; // Now it should be allowed

export default function FAQSection() {
  // State to manage which FAQ item is open (if implementing simple accordion)
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Nanhi Sunehri's primary mission?",
      answer: "Nanhi Sunehri is dedicated to transforming lives through impactful initiatives focused on sustainable education, community well-being, and leveraging technology for social good. Our primary mission is to empower individuals and communities for a brighter future."
    },
    {
      question: "How does Nanhi Sunehri fund its projects?",
      answer: "We primarily fund our projects through a combination of grants from philanthropic organizations, corporate social responsibility (CSR) partnerships, and individual donations. We also explore innovative funding models to ensure long-term sustainability."
    },
    {
      question: "How can I get involved or volunteer?",
      answer: "We welcome passionate individuals to join our mission! You can explore current opportunities on our 'Careers' page, or reach out via our 'Contact Us' page to inquire about specific volunteer roles or partnerships."
    },
    {
      question: "What kind of impact has Nanhi Sunehri made so far?",
      answer: "We have successfully implemented educational programs reaching over [X number] children, deployed tech solutions impacting [Y number] communities, and facilitated empowerment initiatives for [Z number] individuals. You can read more about our impact on our 'About Us' and 'Blog' pages."
    },
    {
      question: "Is Nanhi Sunehri a registered non-profit organization?",
      answer: "Yes, Nanhi Sunehri is a registered non-profit organization, committed to transparency and accountability in all our operations. Details about our registration and governance are available upon request."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              className="bg-card p-6 rounded-md shadow-lg border border-border text-left cursor-pointer"
              onClick={() => toggleFAQ(index)} // Simple click to open/close
            >
              <h3 className="font-semibold text-lg md:text-xl text-foreground flex justify-between items-center">
                {faq.question}
                {/* Simple indicator for open/close state */}
                <span className="text-primary text-2xl ml-4">{openIndex === index ? '-' : '+'}</span>
              </h3>
              {openIndex === index && ( // Only show answer if openIndex matches
                <p className="font-body text-base text-muted-foreground mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Call to action if questions aren't answered */}
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
