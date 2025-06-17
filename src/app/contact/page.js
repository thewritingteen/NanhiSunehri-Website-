// app/contact/page.js (or pages/contact.js)

import Link from 'next/link';
import { Input } from '@/components/ui/input'; // Assuming you have shadcn/ui Input component
import { Button } from '@/components/ui/button'; // Assuming you have shadcn/ui Button component

export default function ContactPage() {
  return (
    <section className="py-20 bg-background text-foreground text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">
          Get in Touch with Nanhi Sunehri
        </h1>
        <p className="font-body text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question, a suggestion, or want to explore collaboration opportunities,
          please fill out the form below or reach out to us directly.
        </p>

        <div className="bg-card p-8 rounded-md shadow-lg border border-border text-left mt-12">
          <h2 className="font-headline text-3xl text-accent mb-6 text-center">Send Us a Message</h2>
          {/*
            UPDATED: The 'action' attribute now uses your provided Formspree endpoint.
            Ensure the 'name' attribute on each input field matches what your service expects.
          */}
          <form action="https://formspree.io/f/xldnlrrz" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
              <Input
                type="text"
                id="name"
                name="name" // Ensure this name matches your service's expectation
                placeholder="John Doe"
                className="bg-muted text-foreground placeholder-muted-foreground border-border focus:ring-primary focus:border-primary"
                required // HTML5 validation for basic client-side check
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Your Email</label>
              <Input
                type="email"
                id="email"
                name="email" // Ensure this name matches your service's expectation
                placeholder="you@example.com"
                className="bg-muted text-foreground placeholder-muted-foreground border-border focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <Input
                type="text"
                id="subject"
                name="subject" // Ensure this name matches your service's expectation
                placeholder="Inquiry about partnership"
                className="bg-muted text-foreground placeholder-muted-foreground border-border focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message</label>
              <textarea
                id="message"
                name="message" // Ensure this name matches your service's expectation
                rows="5"
                placeholder="Type your message here..."
                className="flex h-auto w-full rounded-md border border-input bg-muted px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <Button type="submit" variant="primary" className="px-8 py-3 text-lg">
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Optional: Direct Contact Info */}
        <div className="mt-20 bg-muted p-8 rounded-md shadow-lg border border-border">
          <h2 className="font-headline text-3xl text-foreground mb-6 text-center">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-lg text-accent mb-2">Email Us</h3>
              <p className="font-body text-base text-muted-foreground">
                For general inquiries: <a href="mailto:arpthunder@gmail.com" className="text-primary hover:underline">arpthunder@gmail.com</a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-accent mb-2">Our Office</h3>
              <p className="font-body text-base text-muted-foreground">
                Nanhi Sunehri Headquarters <br />
                123 Empowerment Lane <br />
                City, State, Country - 12345
              </p>
              <p className="font-body text-base text-muted-foreground mt-2">
                Phone: +91 9337969238
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
