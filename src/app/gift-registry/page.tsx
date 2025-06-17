
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gift Registry - Nanhi Sunheri',
  description: 'Make it easy for friends and family to contribute to your child\'s golden future with our Gift Registry.',
};

export default function GiftRegistryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <Card className="max-w-3xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
  <div className="flex items-center justify-center space-x-3">
    <Gift className="h-10 w-10 text-primary" />
    <CardTitle className="text-3xl md:text-4xl font-bold">Gift Registry</CardTitle>
  </div>
</div>

          <CardDescription className="text-lg text-muted-foreground mt-2">
            Make it easy for friends and family to contribute to your child's golden future.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8 text-center">
          <p className="text-muted-foreground mb-6">
            Set up a personalized gift registry for birthdays, festivals, or any special occasion.
            Loved ones can contribute directly to your child's gold nanhi tijori, helping build a secure foundation.
          </p>
          <ul className="list-disc list-inside text-left text-muted-foreground mb-6 space-y-2">
            <li>Create and shareable registry links for any event.</li>
            <li>Receive contributions directly into the gold nanhi tijori.</li>
            <li>Personalized thank you messages for contributors.</li>
            <li>Track contributions and manage your registry with ease.</li>
          </ul>
          <p className="font-semibold text-primary">Start building your child's legacy with the help of loved ones.</p>
        </CardContent>
      </Card>
    </div>
  );
}
