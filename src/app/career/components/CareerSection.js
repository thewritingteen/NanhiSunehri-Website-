// career/components/CareerSection.js
// (or components/CareerSection.js if using Pages Router)

import Link from 'next/link';
// import Image from 'next/image'; // Uncomment if you plan to use images for career page

export default function CareerSection() {
  const jobListings = [
    {
      id: 'program-manager-education',
      title: 'Program Manager - Education Initiatives',
      location: 'Delhi, India',
      type: 'Full-time',
      description: 'Lead and manage educational projects, focusing on curriculum development and community outreach in underserved areas. Requires strong leadership and a passion for learning.',
      link: '#' // Placeholder for actual job application link
    },
    {
      id: 'software-engineer-ai',
      title: 'Software Engineer - AI/ML Development',
      location: 'Remote / Bangalore, India',
      type: 'Full-time',
      description: 'Develop and deploy AI-powered solutions for emergency response and data analysis. Requires expertise in Python, machine learning frameworks, and cloud platforms.',
      link: '#'
    },
    {
      id: 'community-outreach-specialist',
      title: 'Community Outreach Specialist',
      location: 'Various Rural Locations',
      type: 'Full-time',
      description: 'Engage directly with communities to identify needs, build relationships, and facilitate the adoption of Nanhi Sunehri\'s solutions. Excellent communication skills required.',
      link: '#'
    },
    {
      id: 'marketing-communications-intern',
      title: 'Marketing & Communications Intern',
      location: 'Mumbai, India',
      type: 'Internship',
      description: 'Assist in developing and executing marketing strategies, managing social media, and creating compelling content to promote Nanhi Sunehri\'s mission. Strong writing skills preferred.',
      link: '#'
    }
  ];

  return (
    <div className="career-page-container">
      {/* Hero Section for Careers */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl md:text-6xl mb-6 leading-tight">
            Join Our Mission
          </h1>
          <p className="font-body text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
            Become a part of Nanhi Sunehri and contribute to building a brighter future.
          </p>
          <p className="font-body text-lg opacity-80 mb-10 max-w-3xl mx-auto">
            We are always looking for passionate and talented individuals to join our growing team.
            If you're driven by impact and innovation, explore our opportunities.
          </p>
          {/* Example Button */}
          <Link href="#open-positions" className="inline-flex items-center justify-center
            rounded-md text-sm font-medium transition-colors
            bg-background text-foreground px-8 py-3
            hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-ring focus-visible:ring-offset-2">
            View Open Positions
          </Link>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-card text-card-foreground px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-headline text-4xl text-primary mb-12">Why Work With Nanhi Sunehri?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-item bg-muted p-8 rounded-md shadow-lg border border-border">
              <h3 className="font-headline text-2xl text-accent mb-3">Meaningful Impact</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Contribute directly to projects that make a tangible difference in communities.
              </p>
            </div>
            <div className="card-item bg-muted p-8 rounded-md shadow-lg border border-border">
              <h3 className="font-headline text-2xl text-accent mb-3">Innovative Environment</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Work at the forefront of social innovation, utilizing technology for good.
              </p>
            </div>
            <div className="card-item bg-muted p-8 rounded-md shadow-lg border border-border">
              <h3 className="font-headline text-2xl text-accent mb-3">Growth & Development</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Opportunities for continuous learning, skill enhancement, and career progression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-background text-foreground px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline text-4xl text-primary text-center mb-12">Current Openings</h2>

          <div className="space-y-6">
            {jobListings.map((job) => (
              <div key={job.id} className="bg-card p-6 rounded-md shadow-lg border border-border flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0 md:mr-8">
                  <h3 className="font-headline text-2xl text-accent leading-tight">{job.title}</h3>
                  <p className="font-body text-base text-muted-foreground">
                    {job.location} &bull; {job.type}
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="font-body text-sm text-foreground/90 mb-4 md:mb-0">
                    {job.description}
                  </p>
                </div>
                <Link href={job.link} className="inline-flex items-center justify-center
                  rounded-md text-sm font-medium transition-colors
                  bg-secondary text-secondary-foreground px-5 py-2
                  hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-ring focus-visible:ring-offset-2 whitespace-nowrap">
                  Apply Now &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* No current openings message (optional) */}
          {jobListings.length === 0 && (
            <p className="font-body text-lg text-foreground/70 text-center mt-10">
              No openings currently available. Please check back soon!
            </p>
          )}
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-20 bg-muted text-muted-foreground text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl text-foreground mb-6">Can't Find Your Role?</h2>
          <p className="font-body text-lg text-foreground/80 mb-10">
            If you're passionate about our mission and believe you can contribute, we'd still love to hear from you. Send us your resume!
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center
            rounded-md text-sm font-medium transition-colors
            bg-accent text-accent-foreground px-8 py-3
            hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-ring focus-visible:ring-offset-2">
            Submit General Application
          </Link>
        </div>
      </section>
    </div>
  );
}
