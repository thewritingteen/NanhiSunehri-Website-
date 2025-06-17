"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import SparkleEffect from '@/components/ui/sparkle-effect';

const jewelryItems = [
  {
    id: 1,
    name: "First Birthday Bracelet",
    gold: "2g",
    description: "A delicate bracelet with charms to celebrate your baby's first year.",
    craftingTime: "2 weeks",
    imageUrl: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxicmFjZWxldHxlbnwwfHx8fDE3NDk3MDg3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "gold bracelet baby"
  },
  {
    id: 2,
    name: "First Earrings",
    gold: "1.5g",
    description: "Delicate earrings for your child's ear-piercing ceremony.",
    craftingTime: "1 week",
    imageUrl: "https://images.unsplash.com/photo-1617493255060-2745a8c22ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxlYXJyaW5nc3xlbnwwfHx8fDE3NDk3MDg3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "gold earrings child"
  },
  {
    id: 3,
    name: "Fifth Birthday Pendant",
    gold: "3g",
    description: "A special pendant to mark your child's fifth year sunheri virasaat.",
    craftingTime: "3 weeks",
    imageUrl: "https://images.unsplash.com/photo-1631965004544-1762fc696476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwZW5kYW50fGVuFufDB8fHx8MTc0OTcwODg3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "gold pendant child"
  },
  {
    id: 4,
    name: "Achievement Ring",
    gold: "4g",
    description: "A special ring to celebrate academic or extracurricular achievements.",
    craftingTime: "3 weeks",
    imageUrl: "https://images.unsplash.com/photo-1628926379972-9843ad139a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8cmluZyUyMHxlbnwwfHx8fDE3NDk3MDg5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "gold ring child"
  },
  {
    id: 5,
    name: "Graduation Necklace",
    gold: "5g",
    description: "Elegant necklace to commemorate educational sunheri virasaat.",
    craftingTime: "4 weeks",
    imageUrl: "https://images.unsplash.com/photo-1636103952204-0b738c225264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8bmVja2xhY2V8ZW58MHx8fHwxNzQ5NzA4OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "gold necklace graduation"
  },
];

function JewelryCard({ item }: { item: typeof jewelryItems[0] }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="flex-shrink-0 w-72 md:w-80 bg-card rounded-lg shadow-md overflow-hidden group relative transition-all duration-300 hover:shadow-xl">
      <div className="h-64 overflow-hidden">
        <Image 
          src={item.imageUrl} 
          alt={item.name} 
          width={500} 
          height={500} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          data-ai-hint={item.aiHint}
        />
        {/* Sparkle Effect for AI Hint - This would be a separate component */}
        {/* {item.aiHint && <SparkleEffect />} */}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-card-foreground">{item.name}</h3>
          <span className="text-primary font-medium">{item.gold}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 h-16">{item.description}</p>
        {/* Removed the "Convert Gold" button and its containing div */}
      </CardContent>
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute top-3 right-3 w-8 h-8 bg-background/80 rounded-full shadow-md hover:bg-background"
        onClick={() => setIsFavorite(!isFavorite)}
        aria-label="Favorite"
      >
        <Heart className={`w-4 h-4 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-muted-foreground hover:text-red-500'}`} />
      </Button>
    </Card>
  );
}

export default function MilestonesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="milestones" className="py-16 md:py-20 bg-background relative">
      <SparkleEffect count={10} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Sunheri Virasaat Jewelry</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Convert your digital gold into meaningful jewelry pieces that mark your child's special moments.
          </p>
           <Button variant="link" asChild className="text-primary text-lg mt-4">
             <Link href="/jewelry-advisor">Explore with AI Jewelry Advisor <ArrowRight className="ml-2 h-5 w-5" /></Link>
           </Button>
        </div>
        
        <div className="relative">
          <div ref={carouselRef} className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide">
            {jewelryItems.map((item) => (
              <JewelryCard key={item.id} item={item} />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full shadow-md z-10 -ml-2 sm:-ml-5 hover:bg-background"
            onClick={() => scroll('left')}
            aria-label="Previous jewelry item"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full shadow-md z-10 -mr-2 sm:-mr-5 hover:bg-background"
            onClick={() => scroll('right')}
            aria-label="Next jewelry item"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="mt-16 md:mt-20 bg-muted/30 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Gold Conversion Process</h3>
            <p className="text-muted-foreground mb-6">
              Converting your digital gold into physical jewelry is simple and transparent. Choose a design, select the amount of gold, and our artisans will craft a beautiful piece for your child's sunheri virasaat.
            </p>
            <div className="space-y-4">
              {[
                { title: "Select a Design", description: "Browse our collection or request a custom design." },
                { title: "Choose Gold Amount", description: "Decide how much of your digital gold to convert." },
                { title: "Crafting & Delivery", description: "Our artisans craft your jewelry and deliver it to your doorstep." }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1535484305382-556d4487b33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbWFraW5nfGVufDB8fHx8MTc0OTcwOTAxMnww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Gold Crafting Process" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
                data-ai-hint="jewelry crafting artisan"
              />
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full shadow-md">
                Zero Making Charges
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
