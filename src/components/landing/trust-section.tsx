
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, Landmark, Lock, Vault, CreditCard, BadgeCheck } from 'lucide-react';

const securityFeatures = [
  { Icon: ShieldCheck, title: "100% Insured Gold", description: "Every gram of gold is fully insured against theft, damage, or loss." },
  { Icon: Landmark, title: "Regulatory Compliance", description: "We adhere to all RBI and SEBI guidelines for digital gold investments." },
  { Icon: Lock, title: "Bank-Grade Encryption", description: "256-bit encryption for all transactions and personal data." },
  { Icon: Vault, title: "Physical Gold Backing", description: "Every digital gram is backed by physical gold stored in secure vaults." },
];

const faqItems = [
  {
    id: "faq1",
    question: "How is my digital gold stored and secured?",
    answer: "Your digital gold is backed 100% by physical gold stored in secure vaults with 24/7 surveillance, armed guards, and multiple security systems. The gold is fully insured against theft, damage, or loss. You receive a digital certificate of ownership for every purchase."
  },
  {
    id: "faq2",
    question: "Can I withdraw my gold investment at any time?",
    answer: "Yes, you can sell your digital gold back to us at any time at the current market rate. The funds will be credited to your linked bank account within 1-2 business days. There is a small selling fee of 0.5% of the transaction value."
  },
  {
    id: "faq3",
    question: "How do I convert my digital gold into jewelry?",
    answer: "You can convert your digital gold into physical jewelry through our platform. Simply select a design from our catalog or request a custom design, choose how much gold you want to convert, and our artisans will craft your jewelry. We charge no making fees, only the actual crafting costs."
  },
  {
    id: "faq4",
    question: "What happens to my child's account when they turn 18?",
    answer: "When your child turns 18, they can choose to take control of their account. We'll guide them through the transition process, explaining their investment and all the features available. They can continue investing, convert to jewelry, or withdraw the investment as needed."
  }
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Trust &amp; Security</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Your child's future deserves the highest standards of security and compliance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-card-foreground">Our Security Promise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {securityFeatures.map(feature => (
                  <div key={feature.title} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-card-foreground">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-4 text-card-foreground">Our Trusted Partners</h4>
                  <div className="flex flex-wrap gap-6 items-center">
                    {[Landmark, Vault, ShieldCheck, CreditCard].map((Icon, idx) => (
                       <Icon key={idx} className="w-8 h-8 text-muted-foreground/70" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <Image 
              src="https://images.unsplash.com/photo-1610375461246-83df859d849d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxnb2xkJTIwYmFyc3xlbnwwfHx8fDE3NDk3MDg0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Secure Gold Bars in Vault" 
              width={600} 
              height={450} 
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="gold vault"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card p-4 rounded-lg shadow-2xl max-w-xs border border-border">
              <div className="flex items-center gap-3 mb-2">
                <BadgeCheck className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-card-foreground">Verified &amp; Audited</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Our gold reserves are audited quarterly by independent agencies to ensure 100% backing.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20">
          <Card className="bg-muted/30 p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-foreground">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
              {faqItems.map(faq => (
                <AccordionItem key={faq.id} value={faq.id} className="bg-card border-border rounded-lg shadow-sm">
                  <AccordionTrigger className="p-4 md:p-5 text-left font-medium text-card-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 md:p-5 pt-0 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
}
