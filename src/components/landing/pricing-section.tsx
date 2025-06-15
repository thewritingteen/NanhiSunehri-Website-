
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Check, X } from 'lucide-react';

const plans = {
  monthly: [
    {
      name: "Starter",
      price: "₹299",
      billingCycle: "/month",
      description: "Perfect for new parents just starting their gold nanhi tijori journey.",
      features: [
        { text: "Digital gold nanhi tijori", included: true },
        { text: "Basic sunheri virasaat tracking", included: true },
        { text: "Digital journal (5GB storage)", included: true },
        { text: "Legacy letters", included: false },
        { text: "Gift registry", included: false },
      ],
      popular: false,
    },
    {
      name: "Family",
      price: "₹599",
      billingCycle: "/month",
      description: "Our recommended plan with all essential features for your child's journey.",
      features: [
        { text: "Digital gold nanhi tijori", included: true },
        { text: "Advanced sunheri virasaat tracking", included: true },
        { text: "Digital journal (20GB storage)", included: true },
        { text: "Legacy letters (up to 10)", included: true },
        { text: "Basic gift registry", included: true },
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹999",
      billingCycle: "/month",
      description: "The ultimate package with exclusive benefits and priority service.",
      features: [
        { text: "Digital gold nanhi tijori", included: true },
        { text: "Comprehensive sunheri virasaat tracking", included: true },
        { text: "Digital journal (Unlimited storage)", included: true },
        { text: "Legacy letters (Unlimited)", included: true },
        { text: "Advanced gift registry + Reminders", included: true },
        { text: "Priority jewelry crafting", included: true },
      ],
      popular: false,
    },
  ],
  annual: [
    {
      name: "Starter",
      price: "₹2,990",
      billingCycle: "/year",
      description: "Perfect for new parents just starting their gold nanhi tijori journey.",
      features: [
        { text: "Digital gold nanhi tijori", included: true },
        { text: "Basic sunheri virasaat tracking", included: true },
        { text: "Digital journal (5GB storage)", included: true },
        { text: "Legacy letters", included: false },
        { text: "Gift registry", included: false },
      ],
      popular: false,
    },
    {
      name: "Family",
      price: "₹5,990",
      billingCycle: "/year",
      description: "Our recommended plan with all essential features for your child's journey.",
      features: [
        { text: "Digital gold nanhi tijori", included: true },
        { text: "Advanced sunheri virasaat tracking", included: true },
        { text: "Digital journal (20GB storage)", included: true },
        { text: "Legacy letters (up to 10)", included: true },
        { text: "Basic gift registry", included: true },
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹9,990",
      billingCycle: "/year",
      description: "The ultimate package with exclusive benefits and priority service.",
      features: [
        { text: "Digital gold nanhi tijori", included: true },
        { text: "Comprehensive sunheri virasaat tracking", included: true },
        { text: "Digital journal (Unlimited storage)", included: true },
        { text: "Legacy letters (Unlimited)", included: true },
        { text: "Advanced gift registry + Reminders", included: true },
        { text: "Priority jewelry crafting", included: true },
      ],
      popular: false,
    },
  ],
};

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const currentPlans = isAnnual ? plans.annual : plans.monthly;

  return (
    <section id="pricing" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Pricing Plans</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your family's needs. All plans include digital gold nanhi tijori capabilities.
          </p>
          
          <div className="flex justify-center items-center mt-8 space-x-3">
            <Label htmlFor="billing-toggle" className={`text-muted-foreground ${!isAnnual ? 'text-primary font-semibold' : ''}`}>Monthly</Label>
            <Switch 
              id="billing-toggle" 
              checked={isAnnual} 
              onCheckedChange={setIsAnnual}
              aria-label="Toggle billing cycle" 
            />
            <Label htmlFor="billing-toggle" className={`text-muted-foreground ${isAnnual ? 'text-primary font-semibold' : ''}`}>
              Annual <span className="text-primary text-sm font-medium">(Save 20%)</span>
            </Label>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {currentPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`flex flex-col bg-card shadow-md hover:shadow-xl transition-shadow duration-300 ${plan.popular ? 'border-2 border-primary transform lg:scale-105 z-10' : 'border border-border'}`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-medium text-center py-1">
                  MOST POPULAR
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-card-foreground">{plan.name}</CardTitle>
                <div className="flex items-end gap-1 mt-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground mb-1">{plan.billingCycle}</span>
                </div>
                <CardDescription className="text-sm h-12">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className={`flex items-start ${!feature.included ? 'opacity-60' : ''}`}>
                      {feature.included ? <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" /> : <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />}
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  className="w-full whitespace-nowrap"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
