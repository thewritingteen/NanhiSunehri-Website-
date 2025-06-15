"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import type { JewelryRecommendationsInput, JewelryRecommendationsOutput } from '@/ai/flows/jewelry-recommendations';
import { getJewelryRecommendationsAction } from './actions';
import RecommendationResults from './recommendation-results';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  goldAmountGrams: z.coerce.number().min(1, "Gold amount must be at least 1 gram."),
  childAgeYears: z.coerce.number().min(0, "Child's age cannot be negative.").max(18, "Child's age can be up to 18 years."),
});

type FormData = z.infer<typeof formSchema>;

export default function RecommendationForm() {
  const [recommendations, setRecommendations] = useState<JewelryRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goldAmountGrams: 10,
      childAgeYears: 5,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setRecommendations(null);
    try {
      const result = await getJewelryRecommendationsAction(data as JewelryRecommendationsInput);
      if (result && result.recommendations.length > 0) {
        setRecommendations(result);
      } else {
        toast({
          title: "No Recommendations Found",
          description: "Our AI couldn't find suitable jewelry for the given criteria. Please try different values.",
          variant: "default",
        });
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      toast({
        title: "Error",
        description: "Failed to get jewelry recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="goldAmountGrams"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="goldAmountGrams">Available Gold (grams)</FormLabel>
                <FormControl>
                  <Input id="goldAmountGrams" type="number" placeholder="e.g., 10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="childAgeYears"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="childAgeYears">Child's Age (years)</FormLabel>
                <FormControl>
                  <Input id="childAgeYears" type="number" placeholder="e.g., 5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Getting Recommendations...
              </>
            ) : (
              "Get Recommendations"
            )}
          </Button>
        </form>
      </Form>

      {recommendations && recommendations.recommendations.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-foreground">Our Recommendations</h2>
          <RecommendationResults recommendations={recommendations.recommendations} />
        </div>
      )}
    </div>
  );
}
