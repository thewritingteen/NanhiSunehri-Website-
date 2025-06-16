
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Landmark, ShieldCheck, Vault } from 'lucide-react';
import SparkleEffect from '@/components/ui/sparkle-effect';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 bg-cover bg-right-center bg-no-repeat"
      style={{ backgroundImage: "url('https://kisskissgoodnight.com/cdn/shop/articles/8_1400x.png?v=1634149768')" }}
      data-ai-hint="mother child"
    >
      <SparkleEffect count={15} />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-transparent" />
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">Invest in Gold, <span className="text-primary">Gift a Legacy</span></h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl">
            A future-ready way to secure your child's tomorrow — with memories that last a lifetime. Build wealth and create meaningful sunheri virasaat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="shadow-lg">
              <Link href="/#investment">Start Investing Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="shadow-lg">
              <Link href="/gift">Gift Gold</Link>
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-sm text-muted-foreground mb-3">Trusted by leading financial institutions</p>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center text-muted-foreground/80">
                <Landmark className="w-6 h-6 mr-2 text-primary" />
                <span className="font-medium">SecureTrust Partner</span>
              </div>
              <div className="flex items-center text-muted-foreground/80">
                <Vault className="w-6 h-6 mr-2 text-primary" />
                <span className="font-medium">GoldVault Inc.</span>
              </div>
              <div className="flex items-center text-muted-foreground/80">
                <ShieldCheck className="w-6 h-6 mr-2 text-primary" />
                <span className="font-medium">FinSecure Corp.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fallback image for styling if CSS background fails, or for better optimization if preferred */}
      <Image
        src="https://kisskissgoodnight.com/cdn/shop/articles/8_1400x.png?v=1634149768"
        alt="Hero background image of a mother and child"
        layout="fill"
        objectFit="cover"
        objectPosition="right center"
        className="-z-10 opacity-0" // Hidden, only for build-time optimization if needed
        data-ai-hint="mother child"
        priority
      />
    </section>
  );
}

