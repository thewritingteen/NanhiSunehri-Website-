// about/components/ValuesSection.js

export default function ValuesSection() {
  return (
    <section className="values-section section-padding bg-blue-light text-center">
      <div className="container">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Integrity</h3>
            <p>Operating with honesty, transparency, and strong moral principles in all our endeavors.</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>Continuously seeking creative and effective solutions to complex problems.</p>
          </div>
          <div className="value-item">
            <h3>Compassion</h3>
            <p>Approaching every challenge and interaction with empathy and care.</p>
          </div>
          <div className="value-item">
            <h3>Empowerment</h3>
            <p>Fostering independence and capabilities in individuals and communities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
