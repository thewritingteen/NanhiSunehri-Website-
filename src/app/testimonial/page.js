// testimonials/components/TestimonialsSection.js
// (or components/TestimonialsSection.js if using Pages Router)

// You might import Image if you plan to use profile pictures for testimonials
// import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Nanhi Sunehri's programs have truly transformed our community. The focus on practical skills and holistic development has opened up new opportunities for our children that we never thought possible. A golden legacy indeed!",
      author: "Priya Sharma",
      role: "Community Leader, Rural Empowerment Initiative",
      avatar: "https://placehold.co/80x80/EDE5CC/4D4033?text=PS" // Placeholder, replace with real image
    },
    {
      quote: "The innovative educational tools provided by Nanhi Sunehri are simply outstanding. My child's learning journey has become so engaging and effective. It's empowering to see such dedication to our children's future.",
      author: "Rajesh Kumar",
      role: "Parent & Educator",
      avatar: "https://placehold.co/80x80/EDE5CC/4D4033?text=RK" // Placeholder, replace with real image
    },
    {
      quote: "Working with Nanhi Sunehri on their latest project was an inspiring experience. Their commitment to sustainable solutions and collaborative approach ensures that real, lasting change is made. Truly building a brighter tomorrow.",
      author: "Dr. Anjali Singh",
      role: "Development Sector Consultant",
      avatar: "https://placehold.co/80x80/EDE5CC/4D4033?text=AS" // Placeholder, replace with real image
    },
  ];

  return (
    // Section uses bg-background and text-foreground for a light, readable base
    <section className="py-20 bg-background text-foreground text-center px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main title for the section, using font-headline and primary color */}
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">
          What Our Community Says
        </h1>
        <p className="font-body text-lg text-foreground/80 max-w-xl mx-auto mb-4">
          Hear directly from individuals and communities whose lives have been touched by Nanhi Sunehri's initiatives.
        </p>

        {/* Disclaimer for testing purposes - added here */}
        <p className="text-sm text-muted-foreground italic mb-16 max-w-xl mx-auto">
          Please note: The testimonials displayed here are fictional and for demonstration purposes only.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            // Each testimonial card, bg-card, rounded-md, shadow, border
            <div
              key={index}
              className="bg-card p-8 rounded-md shadow-lg border border-border flex flex-col items-center justify-center text-left"
            >
              {/* Quote icon (optional) */}
              <blockquote className="relative mb-6 text-foreground/90 font-body text-lg italic leading-relaxed before:content-['“'] before:absolute before:-top-4 before:-left-4 before:text-primary before:text-6xl before:opacity-20 after:content-['”'] after:absolute after:-bottom-4 after:right-0 after:text-primary after:text-6xl after:opacity-20">
                {testimonial.quote}
              </blockquote>

              <div className="flex items-center mt-auto pt-6 border-t border-muted/50 w-full">
                {/* Avatar */}
                {/* If using Next.js Image: */}
                {/* <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full object-cover aspect-square mr-4"
                /> */}
                {/* Otherwise, use standard img: */}
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
