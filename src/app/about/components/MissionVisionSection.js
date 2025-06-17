// about/components/MissionVisionSection.js

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-card text-card-foreground px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <h2 className="font-headline text-4xl text-primary mb-4">Our Mission</h2>
          <p className="font-body text-lg leading-relaxed">
            Our mission is to **innovate and implement sustainable solutions** that address critical societal needs,
            with a strong focus on education, community well-being, and leveraging cutting-edge technology.
            We strive to create lasting positive impacts for individuals and communities. We are committed to fostering an environment of learning and growth.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-headline text-4xl text-primary mb-4">Our Vision</h2>
          <p className="font-body text-lg leading-relaxed">
            We envision a future where every individual, especially the youth, is **equipped with the tools and knowledge**
            to overcome challenges, contribute meaningfully to society, and lead a life of dignity and purpose.
            Nanhi Sunehri aims to be a beacon of hope and a catalyst for a more resilient and equitable world,
            empowering communities to build their own bright futures.
          </p>
        </div>
      </div>
    </section>
  );
}
