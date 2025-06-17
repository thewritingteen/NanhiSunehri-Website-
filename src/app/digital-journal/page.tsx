
import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookUser } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Journal - GoldenHeir',
  description: "Capture and cherish every precious moment of your child's journey with the Digital Journal.",
};

export default function DigitalJournalPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <Card className="max-w-3xl mx-auto shadow-xl">
        <CardHeader className="text-center">
         <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
  <div className="flex items-center space-x-3">
    <BookUser className="h-10 w-10 text-primary" />
    <CardTitle className="text-3xl md:text-4xl font-bold">Digital Journal</CardTitle>
  </div>
</div>

          <CardDescription className="text-lg text-muted-foreground mt-2">
            Capture and cherish every precious moment of your child's journey.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8 text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1514782831304-632d84503f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8ZGlnaXRhbCUyMGpvdXJuYWx8ZW58MHx8fHwxNzQ5NjUwOTU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Illustration of a digital baby journal with photos and milestones"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="baby memories"
            />
          </div>
          <p className="text-muted-foreground mb-6">
            Our Digital Journal feature allows you to create a living scrapbook of your child's life.
            Securely store photos, videos, notes, and sunheri virasaat. Document growth,
            first words, and all the special memories in one place.
          </p>
          <ul className="list-disc list-inside text-left text-muted-foreground mb-6 space-y-2">
            <li>Unlimited photo and video storage options.</li>
            <li>Track developmental sunheri virasaat with beautiful timelines.</li>
            <li>Easy-to-use interface for quick updates.</li>
            <li>Share securely with family and friends.</li>
          </ul>
          <p className="font-semibold text-primary">Start documenting your child's story today!</p>
        </CardContent>
      </Card>
    </div>
  );
}
