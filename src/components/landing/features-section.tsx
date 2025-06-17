import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { BookUser, Mail, Gift, Check, ArrowRight } from 'lucide-react';

const featuresData = [
  {
    Icon: BookUser,
    title: "Baby's Digital Journal",
    description: "Document your child's precious moments with text, photos, and videos in a secure digital journal that grows with them.",
    imageUrl: "",
    aiHint: "digital journal baby",
    listItems: [
      "Unlimited photo and video storage",
      "Sunheri Virasaat tracking with reminders",
      "Growth charts and development tracking",
    ],
    href: "/digital-journal",
  },
  {
    Icon: Mail,
    title: "Legacy Letters",
    description: "Write time-locked digital letters for your child to be unlocked at key ages or sunheri virasaat you choose.",
    imageUrl: "",
    aiHint: "legacy letters child",
    listItems: [
      "Schedule letters for future birthdays",
      "Include photos, videos, and audio messages",
      "Bank-level encryption and security",
    ],
    href: "/legacy-letters",
  },
  {
    Icon: Gift,
    title: "Gift Registry",
    description: "Create a personalized registry where friends and family can contribute to your child's gold fund for special occasions.",
    imageUrl: "",
    aiHint: "gift registry gold",
    listItems: [
      "Shareable links for birthdays and events",
      "Personalized thank you messages",
      "Track contributions and send reminders",
    ],
    href: "/gift-registry",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Subscription Plan Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            More than just gold nanhi tijori. Create memories, document sunheri virasaat, and build a legacy for your child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <Card key={feature.title} className="bg-card rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 bg-primary/5 flex items-center justify-center relative p-4">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={500}
                  height={300}
                  className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={feature.aiHint}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-card-foreground">
                  <feature.Icon className="w-6 h-6 mr-2 text-primary" />
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.listItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={feature.href} className="text-primary font-medium hover:underline flex items-center mt-auto">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
