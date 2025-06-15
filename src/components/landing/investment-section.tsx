
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, TrendingUp, Shield, Handshake } from "lucide-react";
import GoldChart from "./gold-chart"; // Assumed to be created

const features = [
  {
    Icon: Shield,
    title: "Secure Nanhi Tijori", // Changed
    description: "Your gold is 100% insured and stored in secure vaults with 24/7 surveillance.",
  },
  {
    Icon: TrendingUp,
    title: "Flexible SIPs",
    description: "Start with as little as ₹100 per month and build wealth consistently over time.",
  },
  {
    Icon: Award,
    title: "24K Pure Gold",
    description: "Only the purest 24K gold with 99.9% purity, certified and verified.",
  },
  {
    Icon: Handshake,
    title: "Partner Trust",
    description: "Backed by leading financial institutions and gold refineries.",
  },
];

export default function InvestmentSection() {
  return (
    <section id="investment" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Digital Gold Nanhi Tijori</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Secure your child's future with digital gold nanhi tijori that grow with them. Start small, dream big.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-stretch">
          <div className="w-full lg:w-1/2">
            <Card className="shadow-lg h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">Live Gold Rates</CardTitle>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Live Updates</span>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <GoldChart />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="shadow-md hover:shadow-xl transition-shadow duration-300 group bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <feature.Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
