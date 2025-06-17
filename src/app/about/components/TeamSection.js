// about/components/TeamSection.js

// You'll need the Image component if you're using Next.js for optimized images
import Image from 'next/image';

export default function TeamSection() {
  return (
    <section className="py-20 bg-background text-foreground text-center px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-headline text-4xl text-primary mb-12">Meet Our Team</h2>
        <p className="font-body text-lg text-foreground/80 max-w-xl mx-auto mb-10">
          We are a diverse group of passionate individuals dedicated to the mission of Nanhi Sunehri, working together to make a difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-card text-card-foreground p-8 rounded-md shadow-lg border border-border">
            <Image
              src="https://placehold.co/150x150/EAE8D6/4D4033?text=JD" // Placeholder: Replace with path to actual team image in /public
              alt="John Doe"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 object-cover aspect-square" // Ensures circular, proper aspect ratio
            />
            <h3 className="font-headline text-2xl text-accent mb-2">John Doe</h3>
            <p className="font-body text-base text-muted-foreground mb-4">Founder & CEO</p>
            <p className="font-body text-sm leading-relaxed">
              John is the visionary behind Nanhi Sunehri, bringing years of expertise in social impact and technological innovation.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-card text-card-foreground p-8 rounded-md shadow-lg border border-border">
            <Image
              src="https://placehold.co/150x150/EAE8D6/4D4033?text=JS" // Placeholder: Replace with path to actual team image
              alt="Jane Smith"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 object-cover aspect-square"
            />
            <h3 className="font-headline text-2xl text-accent mb-2">Jane Smith</h3>
            <p className="font-body text-base text-muted-foreground mb-4">Head of Programs</p>
            <p className="font-body text-sm leading-relaxed">
              Jane oversees the execution of our initiatives, ensuring they align with our mission and deliver measurable results.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-card text-card-foreground p-8 rounded-md shadow-lg border border-border">
            <Image
              src="https://placehold.co/150x150/EAE8D6/4D4033?text=AS" // Placeholder: Replace with path to actual team image
              alt="Amit Sharma"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 object-cover aspect-square"
            />
            <h3 className="font-headline text-2xl text-accent mb-2">Amit Sharma</h3>
            <p className="font-body text-base text-muted-foreground mb-4">Lead Technologist</p>
            <p className="font-body text-sm leading-relaxed">
              Amit leads our technological advancements, developing robust and innovative solutions that drive our impact.
            </p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </section>
  );
}

