import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { 
  MessageCircle, 
  Lightbulb, 
  Palette, 
  FileCheck, 
  Factory, 
  CheckCircle,
  ArrowDown
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Discovery Call",
      description: "We start with a detailed consultation to understand your vision, target market, and specific requirements.",
      timeline: "Day 1",
      deliverables: ["Project brief", "Style preferences", "Timeline confirmation"]
    },
    {
      number: "02", 
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Concept Development",
      description: "Our designers create initial concepts based on your brief, exploring different styles and approaches.",
      timeline: "Day 1-2",
      deliverables: ["3-5 initial concepts", "Style variations", "Color palette options"]
    },
    {
      number: "03",
      icon: <Palette className="h-6 w-6" />,
      title: "Design Refinement", 
      description: "We refine your chosen concept with unlimited revisions until it perfectly matches your vision.",
      timeline: "Day 2-3",
      deliverables: ["Refined designs", "Multiple colorways", "Pattern variations"]
    },
    {
      number: "04",
      icon: <FileCheck className="h-6 w-6" />,
      title: "Technical Files",
      description: "We prepare all production-ready files with detailed specifications for manufacturing.",
      timeline: "Day 3-4", 
      deliverables: ["Vector files", "Tech specs", "Color guides", "Manufacturing notes"]
    },
    {
      number: "05",
      icon: <Factory className="h-6 w-6" />,
      title: "Production Support",
      description: "Optional manufacturing partnership connection and ongoing support throughout production.",
      timeline: "Ongoing",
      deliverables: ["Manufacturer introduction", "Quality guidelines", "Production monitoring"]
    }
  ];

  return (
    <section id="process" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Process</Badge>
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4">
            From Idea to Production in 5 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures your sock designs are completed quickly 
            and efficiently, with complete transparency every step of the way.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-6">
                  <CardHeader className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {step.number}
                      </div>
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {step.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {step.timeline}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="lg:col-span-2 pt-6">
                    <p className="text-muted-foreground mb-6 text-lg">
                      {step.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">What You'll Receive:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6">
                  <div className="p-2 rounded-full bg-muted">
                    <ArrowDown className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="font-medium">Average completion time: 4-5 business days</span>
          </div>
        </div>
      </div>
    </section>
  );
}