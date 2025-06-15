
// This is a server-side file!
'use server';

/**
 * @fileOverview Recommends sunheri virasaat jewelry designs based on the amount of gold invested and the child's age.
 *
 * - `getJewelryRecommendations` - A function that suggests appropriate jewelry.
 * - `JewelryRecommendationsInput` - The input type for the `getJewelryRecommendations` function.
 * - `JewelryRecommendationsOutput` - The return type for the `getJewelryRecommendations` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JewelryRecommendationsInputSchema = z.object({
  goldAmountGrams: z.number().describe('The amount of gold in grams available for the jewelry.'),
  childAgeYears: z.number().describe('The age of the child in years.'),
});
export type JewelryRecommendationsInput = z.infer<typeof JewelryRecommendationsInputSchema>;

const JewelryRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      name: z.string().describe('The name of the jewelry item.'),
      description: z.string().describe('A short description of the jewelry item.'),
      occasion: z.string().describe('The occasion or sunheri virasaat the jewelry is suitable for.'),
      approximateGoldGrams: z.number().describe('The approximate amount of gold in grams required.'),
      imageUrl: z.string().describe('URL of the jewelry image'),
    })
  ).describe('A list of recommended jewelry items.'),
});
export type JewelryRecommendationsOutput = z.infer<typeof JewelryRecommendationsOutputSchema>;

export async function getJewelryRecommendations(input: JewelryRecommendationsInput): Promise<JewelryRecommendationsOutput> {
  return jewelryRecommendationsFlow(input);
}

const jewelryRecommendationsPrompt = ai.definePrompt({
  name: 'jewelryRecommendationsPrompt',
  input: {schema: JewelryRecommendationsInputSchema},
  output: {schema: JewelryRecommendationsOutputSchema},
  prompt: `Based on the amount of gold available ({{{goldAmountGrams}}} grams) and the child's age ({{{childAgeYears}}} years), recommend some appropriate sunheri virasaat jewelry. Return a JSON array of jewelry options that fit within the gold amount. Each object in the array should contain the name, description, occasion, approximateGoldGrams, and imageUrl of the jewelry item.

Ensure the approximateGoldGrams is less than or equal to the goldAmountGrams available. The occasion should be relevant to the child's age.

Respond in JSON format.
`,
});

const jewelryRecommendationsFlow = ai.defineFlow(
  {
    name: 'jewelryRecommendationsFlow',
    inputSchema: JewelryRecommendationsInputSchema,
    outputSchema: JewelryRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await jewelryRecommendationsPrompt(input);
    return output!;
  }
);

