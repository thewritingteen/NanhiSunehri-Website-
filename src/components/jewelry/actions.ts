"use server";

import { getJewelryRecommendations, type JewelryRecommendationsInput, type JewelryRecommendationsOutput } from '@/ai/flows/jewelry-recommendations';

export async function getJewelryRecommendationsAction(
  input: JewelryRecommendationsInput
): Promise<JewelryRecommendationsOutput | null> {
  try {
    const result = await getJewelryRecommendations(input);
    return result;
  } catch (error) {
    console.error('Error in getJewelryRecommendationsAction:', error);
    // Optionally, you could re-throw a more specific error or return a structured error object
    // For now, returning null to indicate failure, which the client can handle.
    return null;
  }
}
