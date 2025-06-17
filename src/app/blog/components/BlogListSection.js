// blog/components/BlogListSection.js
// (or components/BlogListSection.js if using Pages Router)

import Link from 'next/link';
// import Image from 'next/image'; // Uncomment if you plan to use post images

export default function BlogListSection() {
  const blogPosts = [
    {
      id: 'sustainable-education',
      title: 'Fostering Sustainable Education in Rural Communities',
      date: 'June 10, 2024',
      excerpt: 'Discover how Nanhi Sunehri is implementing innovative educational programs that are both effective and environmentally conscious, ensuring long-term learning benefits.',
      image: 'https://placehold.co/400x250/EDE5CC/4D4033?text=Education' // Placeholder
    },
    {
      id: 'tech-for-good',
      title: 'Leveraging Technology for Social Good: Our Latest Innovations',
      date: 'May 28, 2024',
      excerpt: 'Explore the cutting-edge technological solutions Nanhi Sunehri is developing to address societal challenges, from health to digital literacy.',
      image: 'https://placehold.co/400x250/EDE5CC/4D4033?text=Tech' // Placeholder
    },
    {
      id: 'community-empowerment-stories',
      title: 'Stories of Empowerment: How Your Support Makes a Difference',
      date: 'May 15, 2024',
      excerpt: 'Read heartwarming stories from individuals and families whose lives have been positively impacted by Nanhi Sunehri\'s community-driven initiatives.',
      image: 'https://placehold.co/400x250/EDE5CC/4D4033?text=Community' // Placeholder
    },
    {
      id: 'future-of-nanhi-sunehri',
      title: 'The Road Ahead: Nanhi Sunehri\'s Vision for the Future',
      date: 'April 22, 2024',
      excerpt: 'Get an exclusive look at our upcoming projects, strategic partnerships, and long-term goals for creating a more impactful and sustainable future.',
      image: 'https://placehold.co/400x250/EDE5CC/4D4033?text=Future' // Placeholder
    }
  ];

  return (
    <section className="py-20 bg-background text-foreground text-center px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">
          Our Latest Insights
        </h1>
        <p className="font-body text-lg text-foreground/80 max-w-xl mx-auto mb-16">
          Stay informed with news, updates, and inspiring stories from the world of Nanhi Sunehri.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"> {/* Changed to 2 columns for blog list */}
          {blogPosts.map((post) => (
            // Blog post card styling consistent with your theme
            <div key={post.id} className="bg-card p-6 rounded-md shadow-lg border border-border text-left">
              {/* If using Next.js Image: */}
              {/* <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover w-full h-auto"
              /> */}
              {/* Otherwise, use standard img: */}
              <img
                src={post.image}
                alt={post.title}
                className="rounded-md mb-4 object-cover w-full h-auto"
                style={{ height: '250px' }} // Ensures consistent height for placeholders
              />

              <h3 className="font-headline text-2xl text-accent mb-2 leading-tight">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">{post.date}</p>
              <p className="font-body text-base text-foreground/90 mb-5 leading-relaxed">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-300">
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>

        {/* Optional: Pagination or Load More button */}
        {/* <div className="mt-16">
          <Button variant="primary">Load More Posts</Button>
        </div> */}
      </div>
    </section>
  );
}
