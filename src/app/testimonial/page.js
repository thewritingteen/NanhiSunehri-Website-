// app/testimonial/page.js

'use client';

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Nanhi Sunehri made investing in gold for my daughter so simple and emotional. I love how every milestone is celebrated with tradition and technology. It’s more than an app—it’s a memory bank.",
      author: "Priya Sharma",
      role: "Mother of 2-year-old Meera",
      avatar: "https://placehold.co/80x80/EDE5CC/4D4033?text=PS"
    },
    {
      quote: "As a new parent, I was confused about gold savings. Nanhi Sunehri guided me with an AI savings plan and real-time prices. Now, I’m gifting my son a golden future, one step at a time.",
      author: "Rajesh Kumar",
      role: "First-time Father & Financial Advisor",
      avatar: "https://placehold.co/80x80/EDE5CC/4D4033?text=RK"
    },
    {
      quote: "I've never seen an app blend Indian culture and fintech so beautifully. Nanhi Sunehri’s jewelry gifting by milestones is genius—and the baby journal made me cry. This is India-first innovation.",
      author: "Dr. Anjali Singh",
      role: "Tech Mom & Pediatrician",
      avatar: "https://placehold.co/80x80/EDE5CC/4D4033?text=AS"
    },
  ];

  return (
    <section className="py-20 bg-background text-foreground text-center px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">
          What Our Community Says
        </h1>
        <p className="font-body text-lg text-foreground/80 max-w-xl mx-auto mb-4">
          Hear directly from individuals and families building a golden future with Nanhi Sunehri.
        </p>
        <p className="text-sm text-muted-foreground italic mb-16 max-w-xl mx-auto">
          Please note: The testimonials displayed here are fictional and for demonstration purposes only.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-md shadow-lg border border-border flex flex-col items-center justify-center text-left"
            >
              <blockquote className="relative mb-6 text-foreground/90 font-body text-lg italic leading-relaxed before:content-['“'] before:absolute before:-top-4 before:-left-4 before:text-primary before:text-6xl before:opacity-20 after:content-['”'] after:absolute after:-bottom-4 after:right-0 after:text-primary after:text-6xl after:opacity-20">
                {testimonial.quote}
              </blockquote>

              <div className="flex items-center mt-auto pt-6 border-t border-muted/50 w-full">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="rounded-full object-cover aspect-square mr-4 w-14 h-14"
                />
                <div className="flex-grow">
                  <p className="font-semibold text-foreground text-base">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
