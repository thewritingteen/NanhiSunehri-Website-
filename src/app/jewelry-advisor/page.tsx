
import RecommendationForm from '@/components/jewelry/recommendation-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gem } from 'lucide-react';

export default function JewelryAdvisorPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <Card className="max-w-3xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Gem className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">AI Jewelry Advisor</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Let our AI help you find the perfect sunheri virasaat jewelry based on your gold nanhi tijori and your child's age.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <RecommendationForm />
        </CardContent>
      </Card>
    </div>
  );
}
