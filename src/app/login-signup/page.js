// app/login-signup/page.js (or pages/login-signup.js)

import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you have shadcn/ui Button component
// import Image from 'next/image'; // Uncomment if you want to use app screenshot/icons

export default function LoginSignupAppPage() {
  return (
    <section className="py-20 bg-background text-foreground text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">
          Access Your Account
        </h1>
        <p className="font-body text-lg text-foreground/80 mb-10">
          For seamless and secure login or to create a new account, please use the Nanhi Sunehri mobile application.
          Our app provides a personalized and enhanced experience for all our users.
        </p>

        {/* Optional: Add a placeholder for an app screenshot or app store badges */}
        {/*
        <div className="mb-12">
          <Image
            src="https://placehold.co/400x250/EAE8D6/4D4033?text=App+Screenshot"
            alt="Nanhi Sunehri App"
            width={400}
            height={250}
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>
        */}

        <h2 className="font-headline text-3xl text-accent mb-6">Download Our App Today!</h2>
        <p className="font-body text-base text-muted-foreground mb-8">
          Available on both Android and iOS devices.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link href="#" passHref> {/* Replace '#' with actual Google Play Store link */}
            <Button variant="primary" className="px-8 py-3 text-lg">
              Download on Google Play
            </Button>
          </Link>
          <Link href="#" passHref> {/* Replace '#' with actual Apple App Store link */}
            <Button variant="secondary" className="px-8 py-3 text-lg">
              Download on the App Store
            </Button>
          </Link>
        </div>

        {/* Optional: Link back to homepage or contact */}
        <p className="font-body text-sm text-foreground/70">
          Have questions about our app? <Link href="/contact" className="text-primary hover:underline">Contact our support team</Link>.
        </p>
      </div>
    </section>
  );
}
