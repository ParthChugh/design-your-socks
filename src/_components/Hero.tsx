import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background to-muted/50 min-h-screen">
      {/* Brand Header */}
      <div className="container mx-auto px-4 pt-6">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">🧦</div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-serif">
            Designyoursock
          </h1>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Professional Sock Design Service
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Transform Your
                <span className="text-primary"> Sock Ideas</span> Into 
                <span className="text-primary"> Production-Ready</span> Designs
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                From concept to manufacturing partnerships, we help entrepreneurs launch successful sock brands with expert design services and 48-hour delivery.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToContact}
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 hover:bg-accent"
                onClick={scrollToPricing}
              >
                View Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-semibold text-primary">
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">500+ Designs Created</span>
              </div>
              <div className="text-sm text-muted-foreground">
                ⚡ 48hr Delivery • 🎯 97% Satisfaction • 🔄 Unlimited Revisions
              </div>
            </div>
          </div>

          {/* Right Side - Sock Showcase */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop&crop=center"
                alt="Custom sock design sample 1"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center"
                alt="Custom sock design sample 2"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300 mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=400&h=400&fit=crop&crop=center"
                alt="Custom sock design sample 3"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center"
                alt="Custom sock design sample 4"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300 -mt-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center"
                alt="Custom sock design sample 5"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300 mt-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop&crop=center"
                alt="Custom sock design sample 6"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300 -mt-8"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-background border border-border rounded-lg px-4 py-2 shadow-lg">
              <div className="text-sm font-semibold text-primary">Fast Delivery</div>
              <div className="text-xs text-muted-foreground">48 Hours</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-lg px-4 py-2 shadow-lg">
              <div className="text-sm font-semibold text-primary">100% Custom</div>
              <div className="text-xs text-muted-foreground">Your Vision</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}