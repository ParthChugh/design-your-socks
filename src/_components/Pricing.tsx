import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { CheckCircle, ArrowRight, Zap, Crown, Star } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Design Only",
      icon: <Zap className="h-6 w-6" />,
      price: "$297",
      originalPrice: null,
      description: "Perfect for entrepreneurs with existing manufacturing connections",
      badge: null,
      features: [
        "Custom sock design (up to 3 concepts)",
        "Unlimited revisions", 
        "Production-ready vector files (.AI, .EPS)",
        "Technical specification sheet",
        "Color matching guide",
        "48-hour initial concept delivery",
        "Full commercial usage rights",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Design + Production Files",
      icon: <Star className="h-6 w-6" />,
      price: "$497",
      originalPrice: "$997",
      description: "Most comprehensive package for serious sock entrepreneurs",
      badge: "Most Popular",
      features: [
        "Everything in Design Only, plus:",
        "Advanced technical documentation",
        "Manufacturing instruction guide",
        "Quality control checklist", 
        "Multiple colorway options (up to 5)",
        "Pattern variations",
        "Sizing specifications",
        "Material recommendations",
        "Priority support (24hr response)"
      ],
      cta: "Start Your Project", 
      popular: true
    },
    {
      name: "Full-Service Partnership",
      icon: <Crown className="h-6 w-6" />,
      price: "Custom",
      originalPrice: null,
      description: "Complete end-to-end service from design to delivered products",
      badge: "Premium",
      features: [
        "Everything in Design + Production, plus:",
        "Manufacturer partner introduction",
        "Direct manufacturing coordination",
        "Quality control oversight",
        "Shipping & logistics support",
        "Ongoing design iterations",
        "Brand consultation",
        "Dedicated account manager",
        "Priority production scheduling"
      ],
      cta: "Schedule Consultation",
      popular: false
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Simple Pricing</Badge>
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4">
            Choose Your Success Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the package that fits your needs 
            and budget. All packages include unlimited revisions until you're 100% satisfied.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold shadow-lg">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {plan.icon}
                  </div>
                </div>
                
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-lg text-muted-foreground line-through mb-1">
                      {plan.originalPrice}
                    </div>
                  )}
                  <div className="text-4xl font-bold">
                    {plan.price}
                    {plan.name !== "Full-Service Partnership" && (
                      <span className="text-lg font-normal text-muted-foreground">/project</span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <Badge variant="secondary" className="mt-2 bg-green-500/10 text-green-700 border-green-200">
                      Save $200
                    </Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={scrollToContact}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">💰</div>
              <div className="font-semibold mb-1">Money-Back Guarantee</div>
              <div className="text-sm text-muted-foreground">
                100% satisfaction guaranteed or full refund
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">🚀</div>
              <div className="font-semibold mb-1">Fast Delivery</div>
              <div className="text-sm text-muted-foreground">
                First concepts delivered within 48 hours
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">🔒</div>
              <div className="font-semibold mb-1">Full Commercial Rights</div>
              <div className="text-sm text-muted-foreground">
                Own your designs completely, no ongoing fees
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Need a Custom Quote?</h3>
            <p className="text-muted-foreground mb-4">
              Large volume projects, ongoing design relationships, or unique requirements? 
              Let's create a custom package that fits your specific needs.
            </p>
            <Button variant="outline" onClick={scrollToContact}>
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}