import { Button } from "@/components/ui/button.tsx";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold">DesignYourSocks</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("services")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("process")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Process
          </button>
          <button 
            onClick={() => scrollToSection("portfolio")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection("pricing")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="ml-4"
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>Turn Your Designs into a Profitable Business</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-balance lg:text-6xl">
              From Concept to 
              <span className="text-primary"> Custom Socks</span> 
              in Days, Not Months
            </h1>
            
            <p className="text-xl text-muted-foreground text-balance max-w-2xl">
              Professional sock design service that transforms your ideas into production-ready files. 
              We handle everything from concept to manufacturing partnerships, so you can focus on building your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="text-base px-8 py-4"
              >
                Start Your Design Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="text-base px-8 py-4"
              >
                View Our Work
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Designs Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">48hr</div>
                <div className="text-sm text-muted-foreground">Avg. Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">97%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4">
                {/* Mock sock designs */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-border/50 flex items-center justify-center"
                  >
                    <div className="text-center text-xs text-muted-foreground">
                      Sock Design #{i + 1}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                Production Ready!
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-background border rounded-lg px-3 py-2 shadow-lg">
              <span className="text-sm font-medium">✨ Custom Designs</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background border rounded-lg px-3 py-2 shadow-lg">
              <span className="text-sm font-medium">🚀 Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
    </section>
  );
}