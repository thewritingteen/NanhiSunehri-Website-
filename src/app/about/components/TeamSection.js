// about/components/TeamSection.js

// import Image from 'next/image'; // Uncomment if using Next.js Image component

export default function TeamSection() {
  return (
    <section className="team-section section-padding bg-white">
      <div className="container text-center">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">The dedicated individuals behind Nanhi Sunehri.</p>
        <div className="team-members-grid">
          {/* Example Team Member */}
          <div className="team-member">
            {/* If using Next.js Image: */}
            {/* <Image src="/images/team/member1.jpg" alt="[Team Member Name]" width={150} height={150} className="team-photo" /> */}
            {/* Otherwise, use a standard <img> tag: */}
            {/* <img src="/images/team/member1.jpg" alt="[Team Member Name]" className="team-photo" /> */}
            <h3>[Team Member Name]</h3>
            <p className="role">[Role, e.g., Founder & CEO]</p>
            <p className="bio-short">Brief description of their expertise and contribution to Nanhi Sunehri.</p>
          </div>

          {/* Add more team members by duplicating the div.team-member block */}
          <div className="team-member">
            {/* ... another team member ... */}
          </div>
        </div>
      </div>
    </section>
  );
}
