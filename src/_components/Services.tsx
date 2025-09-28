import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { 
  Palette, 
  FileText, 
  Factory, 
  Zap, 
  Users, 
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Sock Design",
      description: "Transform your ideas into professional sock designs with our expert design team",
      features: [
        "Unlimited revisions until perfect",
        "Multiple colorway options", 
        "Brand guideline compliance",
        "Technical specifications included"
      ],
      badge: "Most Popular",
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Production-Ready Files",
      description: "Get all the technical files needed to manufacture your socks anywhere in the world",
      features: [
        "Vector artwork (.AI, .EPS)",
        "Technical specification sheets",
        "Color matching guides",
        "Manufacturing instructions"
      ],
      badge: "Essential",
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing Partnership",
      description: "Connect with our trusted manufacturing partners for seamless production",
      features: [
        "Pre-vetted manufacturer network",
        "Quality control standards",
        "Competitive pricing",
        "Direct shipping options"
      ],
      badge: "Premium",
      color: "from-purple-500/10 to-pink-500/10"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "48-Hour Turnaround",
      description: "Get your first design concepts within 48 hours of project start"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dedicated Design Team",
      description: "Work directly with experienced sock designers who understand the industry"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Commercial Rights Included",
      description: "Full commercial usage rights included with every design package"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4">
            Everything You Need to Launch Your Sock Brand
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial concept to production-ready files, we provide comprehensive design services 
            that eliminate the guesswork and accelerate your time to market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {service.badge}
                  </Badge>
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}