import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const handleViewPortfolio = () => {
    window.open("https://drive.google.com/drive/folders/1iLC2QJU4Tb_9FCAN7iLiu5YZAjLayvnY?usp=drive_link", "_blank");
  };

  const portfolioItems = [
    {
      id: 1,
      category: "Sports & Fitness",
      title: "Athletic Performance Series",
      client: "FitnessPro",
      description: "Moisture-wicking compression socks with targeted cushioning for marathon runners.",
      badge: "Sports & Fitness",
      image: "https://cdn.hercules.app/file_0rdqY6aPwMzSmLvaqpaBl3yS"
    },
    {
      id: 2,
      category: "Corporate",
      title: "Luxury Business Collection", 
      client: "Executive Corp",
      description: "Premium dress socks with subtle branding and anti-odor technology.",
      badge: "Corporate",
      image: "https://cdn.hercules.app/file_IOdkbD1vHVeOvwV0CYVbKler"
    },
    {
      id: 3,
      category: "Children",
      title: "Fun Kids Adventure Line",
      client: "Little Explorers",
      description: "Colorful, educational socks with animal patterns and non-slip grips.",
      badge: "Children",
      image: "https://cdn.hercules.app/file_KNDpo5NN6nB5bRb8zqeu3jaB"
    },
    {
      id: 4,
      category: "Sustainable",
      title: "Eco-Conscious Collection",
      client: "GreenStep Co",
      description: "Bamboo fiber socks with recycled packaging and carbon-neutral shipping.",
      badge: "Sustainable",
      image: "https://cdn.hercules.app/file_XzQ0vpi1xjoorQ9VSztSwqSE"
    },
    {
      id: 5,
      category: "Gaming",
      title: "Gaming Culture Series",
      client: "PixelWear",
      description: "Retro gaming-themed socks with LED fiber optic elements and comfort padding.",
      badge: "Gaming",
      image: "https://cdn.hercules.app/file_HMgRSBy4tWDI0ySYXguj7P2Y"
    },
    {
      id: 6,
      category: "Medical",
      title: "Medical Compression Line",
      client: "HealthCare Plus",
      description: "Graduated compression socks designed for healthcare professionals and patients.",
      badge: "Medical",
      image: "https://cdn.hercules.app/file_nh4cMTk11jh6ierxvO9fqfbB"
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept sketches to production-ready designs, see how we've helped clients 
            launch successful sock brands across diverse markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <div key={item.id} className="space-y-4">
              {/* Banner Image */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={item.image}
                  alt={`${item.title} sock design showcase`}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">Client: {item.client}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={handleViewPortfolio} size="lg" className="group">
            View Complete Portfolio
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Browse our complete collection of 500+ sock designs and client success stories
          </p>
        </div>
      </div>
    </section>
  );
}