import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/80 via-primary to-secondary shadow-xl overflow-hidden text-primary-foreground">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Child's Golden Journey Today</h2>
            <p className="mb-8 max-w-2xl mx-auto text-lg opacity-90">
              Join thousands of parents who are securing their children's future while creating meaningful memories along the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-md">
                <Link href="/login-signup">Create Account</Link>
              </Button>
              {/*
                UPDATED BUTTON STYLE:
                - Changed text and border color to 'text-accent' and 'border-accent' (Deep Brown)
                  for better visibility on the gold/brown gradient background.
                - Adjusted hover state to match the overall theme while providing clear feedback.
              */}
              <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-md">
                <Link href="/demo">Schedule a Demo</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
