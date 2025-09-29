import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { CheckCircle, Palette, FileText, Users, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Custom Sock Design",
      description: "Transform your vision into professional sock designs with unlimited revisions and 48-hour delivery.",
      features: [
        "Unlimited design revisions",
        "Professional vector files", 
        "Color matching expertise",
        "Brand guideline compliance"
      ],
      price: "$297"
    },
    {
      icon: FileText,
      title: "Design + Production Files", 
      description: "Complete package with production-ready technical specifications for seamless manufacturing.",
      features: [
        "Production-ready tech packs",
        "Detailed manufacturing specs",
        "Material recommendations",
        "Quality control guidelines"
      ],
      price: "$497",
      popular: true
    },
    {
      icon: Users,
      title: "Full-Service Partnership",
      description: "End-to-end solution including manufacturing connections and ongoing support for your sock business.",
      features: [
        "Manufacturing partnerships",
        "Ongoing design support", 
        "Business consultation",
        "Supply chain guidance"
      ],
      price: "Custom"
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Design Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial concepts to production-ready files, we provide comprehensive sock design services tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 ${service.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-md">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className={service.popular ? 'pt-8' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant={service.popular ? "default" : "outline"}>
                  {service.price === "Custom" ? "Contact Us" : "Get Started"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}