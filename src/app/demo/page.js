// app/demo/page.js (or pages/demo.js)

import Link from 'next/link';
import { Input } from '@/components/ui/input'; // Assuming you have shadcn/ui Input component
import { Button } from '@/components/ui/button'; // Assuming you have shadcn/ui Button component

export default function DemoPage() {
  return (
    <section className="py-20 bg-background text-foreground text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">
          Schedule a Demo with Nanhi Sunehri
        </h1>
        <p className="font-body text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
          Experience how Nanhi Sunehri can empower your organization or community.
          Fill out the form below, and we'll get in touch to arrange a personalized demonstration.
        </p>

        <div className="bg-card p-8 rounded-md shadow-lg border border-border text-left mt-12">
          <h2 className="font-headline text-3xl text-accent mb-6 text-center">Your Demo Request</h2>
          {/*
            IMPORTANT: Replace "YOUR_FORMSPREE_DEMO_ENDPOINT_HERE" with the actual endpoint URL
            from your chosen 3rd party form service for demo requests.
            Remember to create a *new* Formspree form/endpoint specifically for demos
            to keep your submissions organized.
          */}
          <form action="YOUR_FORMSPREE_DEMO_ENDPOINT_HERE" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Full Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Jane Doe"
                className="bg-muted text-foreground placeholder-muted-foreground border-border focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Your Work Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="work@organization.com"
                className="bg-muted text-foreground placeholder-muted-foreground border-border focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">Organization/Community Name</label>
              <Input
                type="text"
                id="organization"
                name="organization"
                placeholder="My Awesome Org"
                className="bg-muted text-foreground placeholder-muted-foreground border-border focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number (Optional)</label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 98765 43210"
                className="bg-muted text-foreground placeholder-muted-foreground border-border focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">Area of Interest</label>
              <select
                id="interest"
                name="interest"
                className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Select an area</option>
                <option value="education-programs">Educational Programs</option>
                <option value="emergency-response">Emergency Response Solutions</option>
                <option value="community-empowerment">Community Empowerment Projects</option>
                <option value="partnership-inquiry">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Specific Needs or Questions</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us what you'd like to see or discuss during the demo..."
                className="flex h-auto w-full rounded-md border border-input bg-muted px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              ></textarea>
            </div>
            <div className="text-center">
              <Button type="submit" variant="primary" className="px-8 py-3 text-lg">
                Submit Demo Request
              </Button>
            </div>
          </form>
        </div>

        {/* Contact info for immediate needs */}
        <div className="mt-20 bg-muted p-8 rounded-md shadow-lg border border-border">
          <h2 className="font-headline text-3xl text-foreground mb-6 text-center">Have an urgent question?</h2>
          <p className="font-body text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
            If you need immediate assistance before your demo, feel free to contact us directly.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center
            rounded-md text-sm font-medium transition-colors
            bg-accent text-accent-foreground px-8 py-3
            hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-ring focus-visible:ring-offset-2">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
