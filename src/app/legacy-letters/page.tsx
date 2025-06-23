
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legacy Letters - Nanhi Sunheri',
  description: 'Share your wisdom, love, and dreams with your child, to be read in the future through Legacy Letters.',
};

export default function LegacyLettersPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <Card className="max-w-3xl mx-auto shadow-xl">
        <CardHeader className="text-center">
         <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
  <div className="flex items-center justify-center space-x-3">
    <Mail className="h-10 w-10 text-primary" />
    <CardTitle className="text-3xl md:text-4xl font-bold">Legacy Letters</CardTitle>
  </div>
</div>

          <CardDescription className="text-lg text-muted-foreground mt-2">
            Share your wisdom, love, and dreams with your child, to be read in the future.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8 text-center">
          <p className="text-muted-foreground mb-6">
            Write heartfelt letters that will be delivered to your child at specific ages or sunheri virasaat you choose.
            A timeless gift of your words, guidance, and cherished memories, sealed for the future.
          </p>
          <ul className="list-disc list-inside text-left text-muted-foreground mb-6 space-y-2">
            <li>Schedule letters for future birthdays, graduations, or other important dates.</li>
            <li>Include photos, videos, and audio messages to make them even more personal.</li>
            <li>End-to-end encryption ensures your messages remain private and secure.</li>
            <li>A beautiful way to pass on family stories and values.</li>
          </ul>
          <p className="font-semibold text-primary">Craft your messages of love today.</p>
        </CardContent>
      </Card>
    </div>
  );
}
