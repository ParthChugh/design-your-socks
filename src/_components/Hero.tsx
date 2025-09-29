import { Button } from "@/components/ui/button.tsx";
import { ArrowRight, Sparkles, TrendingUp, ExternalLink } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIi8+Cjwvc3ZnPgo=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
                onClick={() => scrollToSection("contact")}
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 hover:bg-accent"
                onClick={() => scrollToSection("portfolio")}
              >
                View Portfolio
                <ExternalLink className="ml-2 w-5 h-5" />
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
                src="https://cdn.hercules.app/file_IzLbgi1WU8C2xpHzuVnDgLdl"
                alt="Custom sock design sample 1"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://cdn.hercules.app/file_oG69oriAI2ONYm9u8zoSA6U3"
                alt="Custom sock design sample 2"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300 mt-8"
              />
              <img 
                src="https://cdn.hercules.app/file_mzsELZDjB1DZ7b4oylJFM2UH"
                alt="Custom sock design sample 3"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://cdn.hercules.app/file_cALuCwK2kknSRMhY5jtYn2Nb"
                alt="Custom sock design sample 4"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300 -mt-4"
              />
              <img 
                src="https://cdn.hercules.app/file_h5KEBQQsQJLA3udsMIsgoyap"
                alt="Custom sock design sample 5"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300 mt-4"
              />
              <img 
                src="https://cdn.hercules.app/file_8q86OBxhJTYZ4GmPYPD79e1k"
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
    </section>
  );
}