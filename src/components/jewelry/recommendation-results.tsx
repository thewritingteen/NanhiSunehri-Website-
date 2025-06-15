import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { JewelryRecommendationsOutput } from '@/ai/flows/jewelry-recommendations';

interface RecommendationResultsProps {
  recommendations: JewelryRecommendationsOutput['recommendations'];
}

export default function RecommendationResults({ recommendations }: RecommendationResultsProps) {
  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recommendations.map((item, index) => (
        <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full h-60">
            <Image
              src={item.imageUrl || `https://placehold.co/400x300.png?text=${encodeURIComponent(item.name)}`}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint="jewelry gold"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl">{item.name}</CardTitle>
            <CardDescription className="text-sm text-primary">{item.occasion}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
            <p className="text-sm font-medium text-foreground">
              Approx. Gold: <span className="text-primary">{item.approximateGoldGrams}g</span>
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="primary" className="w-full">Select Design</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
