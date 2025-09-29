import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "Sports & Fitness",
    title: "Athletic Performance Series",
    client: "FitnessPro",
    description: "Moisture-wicking compression socks with advanced cushioning and arch support for professional athletes.",
    image: "https://cdn.hercules.app/file_0rdqY6aPwMzSmLvaqpaBl3yS",
  },
  {
    id: 2,
    category: "Corporate",
    title: "Luxury Business Collection",
    client: "Executive Brands",
    description: "Premium dress socks with subtle branding and moisture management for corporate professionals.",
    image: "https://cdn.hercules.app/file_cTKu5ZRkWuaZtTEpZktn1qLD",
  },
  {
    id: 3,
    category: "Kids",
    title: "Fun Kids Adventure Line",
    client: "Little Explorer Co.",
    description: "Colorful, durable socks with fun patterns and characters that kids love to wear.",
    image: "https://cdn.hercules.app/file_xOLU35KSG73Zfq5MofK8UxM5",
  },
  {
    id: 4,
    category: "Sustainability",
    title: "Eco-Conscious Collection",
    client: "Green Step",
    description: "Sustainable socks made from recycled materials with minimal environmental impact.",
    image: "https://cdn.hercules.app/file_hgWTQ5qregwhdJOQof91Ngv5",
  },
  {
    id: 5,
    category: "Gaming",
    title: "Gaming Culture Series",
    client: "GameZone",
    description: "Themed socks for gaming enthusiasts with custom graphics and comfortable all-day wear.",
    image: "https://cdn.hercules.app/file_N4xzsrkgg8OTZ9ueQ9CCERbA",
  },
  {
    id: 6,
    category: "Healthcare",
    title: "Medical Compression Line",
    client: "HealthCare Plus",
    description: "Graduated compression socks designed for medical professionals and patients with circulation needs.",
    image: "https://cdn.hercules.app/file_0rdqY6aPwMzSmLvaqpaBl3yS",
  },
];

export default function Portfolio() {
  const handleViewPortfolio = () => {
    window.open("https://drive.google.com/drive/folders/1iLC2QJU4Tb_9FCAN7iLiu5YZAjLayvnY?usp=drive_link", "_blank");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From athletic performance to luxury business wear, see how we've helped brands create stunning sock designs
            that drive sales and build customer loyalty.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="space-y-6">
              {/* Project Banner Image */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={project.image}
                  alt={`${project.title} - Professional sock design showcase`}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-white/80">Client: {project.client}</p>
                </div>
              </div>

              {/* Project Details Card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>Client: {project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={handleViewPortfolio}
            className="bg-primary hover:bg-primary/90"
          >
            <ExternalLink className="mr-2 size-5" />
            View Complete Portfolio
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Browse our full collection of sock designs and project galleries
          </p>
        </div>
      </div>
    </section>
  );
}