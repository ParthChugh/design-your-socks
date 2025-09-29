import { Users, FileText, Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";

export default function Services() {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Custom Sock Design",
      description: "Professional design services to bring your sock concept to life with unlimited revisions and fast turnaround.",
      features: ["Custom illustrations", "Color matching", "Pattern design", "Brand integration", "48-hour delivery"]
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Design + Production Files",
      description: "Complete design service plus production-ready files formatted for manufacturing with technical specifications.",
      features: ["Custom design", "Production files", "Technical specs", "Manufacturer guidelines", "Quality assurance"],
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Full-Service Partnership",
      description: "End-to-end service from design to manufacturing partnership connections and ongoing business support.",
      features: ["Complete design service", "Manufacturer sourcing", "Quality control", "Business consultation", "Ongoing support"]
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From initial concept to production-ready designs, we provide comprehensive sock design services
            tailored to your business needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-lg transition-shadow duration-300 ${
                service.popular ? 'border-primary shadow-lg' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}