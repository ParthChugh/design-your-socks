import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Athletic Performance Series",
      client: "FitnessPro",
      category: "Sports & Fitness",
      description: "Moisture-wicking compression socks with ergonomic cushioning and anti-blister technology.",
      tags: ["Compression", "Moisture-Wicking", "Athletic"],
      image: "https://cdn.hercules.app/file_h5KEBQQsQJLA3udsMIsgoyap"
    },
    {
      title: "Luxury Business Collection", 
      client: "Executive Essentials",
      category: "Business & Professional",
      description: "Premium merino wool dress socks with sophisticated patterns for the modern professional.",
      tags: ["Merino Wool", "Business", "Premium"],
      image: "gradient-to-br from-gray-600 to-gray-800"
    },
    {
      title: "Fun Kids Adventure Line",
      client: "PlayTime Brands", 
      category: "Children & Family",
      description: "Colorful, playful designs featuring animals and adventure themes that kids absolutely love.",
      tags: ["Kids", "Colorful", "Playful"],
      image: "gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      title: "Eco-Conscious Collection",
      client: "GreenStep",
      category: "Sustainable Fashion",
      description: "Organic cotton and bamboo fiber socks with nature-inspired patterns and eco-friendly dyes.",
      tags: ["Organic", "Sustainable", "Bamboo"],
      image: "gradient-to-br from-green-400 to-emerald-600"
    },
    {
      title: "Gaming Culture Series",
      client: "PixelWear",
      category: "Gaming & Tech", 
      description: "8-bit inspired designs and gaming motifs that resonate with the gaming community.",
      tags: ["Gaming", "8-bit", "Pop Culture"],
      image: "gradient-to-br from-purple-500 to-pink-600"
    },
    {
      title: "Medical Compression Line",
      client: "HealthComfort",
      category: "Healthcare & Wellness",
      description: "Graduated compression socks designed for healthcare workers and people with circulation needs.",
      tags: ["Medical", "Compression", "Healthcare"],
      image: "gradient-to-br from-teal-400 to-cyan-600"
    }
  ];

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Work</Badge>
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4">
            Designs That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From athletic performance to luxury business wear, we've helped brands across 
            industries create sock designs that resonate with their target audiences and drive sales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 relative overflow-hidden">
                {project.image.startsWith('http') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className={`w-full h-full bg-${project.image}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Designs Created</div>
            </div>
            <div className="text-center"> 
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
          </div>
          
          <Button size="lg">
            View Complete Portfolio
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}