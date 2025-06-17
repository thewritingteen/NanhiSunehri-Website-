// about/components/MissionVisionSection.js

export default function MissionVisionSection() {
  return (
    <section className="mission-vision-section section-padding bg-white">
      <div className="container grid-2-col">
        <div className="mission-content">
          <h2 className="section-title">Our Mission</h2>
          <p>
            Our mission is to **innovate and implement sustainable solutions** that address critical societal needs,
            focusing on education, safety, and community empowerment. We aim to leverage technology and human potential
            to create a significant, positive impact on individuals and communities alike.
          </p>
        </div>
        <div className="vision-content">
          <h2 className="section-title">Our Vision</h2>
          <p>
            To envision a future where every individual, especially the youth, is **equipped with the tools and knowledge**
            to overcome challenges, contribute meaningfully to society, and lead a life of dignity and purpose.
            We strive to be a catalyst for change, building a more resilient and equitable world.
          </p>
        </div>
      </div>
    </section>
  );
}
