import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { ExternalLink } from "lucide-react";

const portfolioProjects = [
  {
    id: 1,
    category: "Sports & Fitness",
    title: "Athletic Performance Series",
    client: "FitnessPro",
    description: "Moisture-wicking compression socks with targeted cushioning for peak athletic performance.",
    image: "https://cdn.hercules.app/file_oeapCi80FNI6OLYSCXR1yuEg",
    tags: ["Performance", "Compression", "Athletic"]
  },
  {
    id: 2,
    category: "Business & Professional",
    title: "Luxury Business Collection",
    client: "Corporate Solutions Inc.",
    description: "Premium dress socks featuring moisture management and all-day comfort for professionals.",
    image: "https://cdn.hercules.app/file_cTKu5ZRkWuaZtTEpZktn1qLD",
    tags: ["Business", "Premium", "Comfort"]
  },
  {
    id: 3,
    category: "Kids & Family",
    title: "Fun Kids Adventure Line",
    client: "Happy Feet Kids",
    description: "Colorful, durable socks with fun patterns that kids love and parents trust.",
    image: "https://cdn.hercules.app/file_xOLU35KSG73Zfq5MofK8UxM5",
    tags: ["Kids", "Colorful", "Durable"]
  },
  {
    id: 4,
    category: "Sustainability",
    title: "Eco-Conscious Collection",
    client: "Green Living Co.",
    description: "Sustainable socks made from organic cotton and recycled materials without compromising comfort.",
    image: "https://cdn.hercules.app/file_hgWTQ5qregwhdJOQof91Ngv5",
    tags: ["Sustainable", "Organic", "Eco-Friendly"]
  },
  {
    id: 5,
    category: "Entertainment & Gaming",
    title: "Gaming Culture Series",
    client: "GameHub",
    description: "Limited edition gaming-themed socks featuring popular characters and vibrant designs.",
    image: "https://cdn.hercules.app/file_N4xzsrkgg8OTZ9ueQ9CCERbA",
    tags: ["Gaming", "Limited Edition", "Pop Culture"]
  },
  {
    id: 6,
    category: "Healthcare",
    title: "Medical Compression Line",
    client: "HealthFirst",
    description: "Medical-grade compression socks designed for healthcare professionals and patients.",
    image: "https://cdn.hercules.app/file_0rdqY6aPwMzSmLvaqpaBl3yS",
    tags: ["Medical", "Compression", "Healthcare"]
  }
];

export default function Portfolio() {
  const handleViewPortfolio = () => {
    window.open('https://drive.google.com/drive/folders/1iLC2QJU4Tb_9FCAN7iLiu5YZAjLayvnY?usp=drive_link', '_blank');
  };

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our diverse range of sock designs across various industries and styles. 
            Each project represents our commitment to quality, creativity, and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="space-y-4">
              {/* Project Banner Image */}
              <div className="w-full h-64 relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.client}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {project.category}
                </Badge>
              </div>

              {/* Project Card */}
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>
                    <span className="font-medium">Client:</span> {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="mb-2" onClick={handleViewPortfolio}>
            <ExternalLink className="mr-2 h-4 w-4" />
            View Complete Portfolio
          </Button>
          <p className="text-sm text-muted-foreground">
            Browse our complete collection of designs and project galleries
          </p>
        </div>
      </div>
    </section>
  );
}