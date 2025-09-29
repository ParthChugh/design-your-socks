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
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            From athletic performance to luxury fashion, see how we've helped brands create iconic sock designs that drive sales and build customer loyalty.
          </p>
        </div>

        <div className="space-y-16">
          {/* Athletic Performance Series */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="https://cdn.hercules.app/file_0rdqY6aPwMzSmLvaqpaBl3yS"
                alt="Athletic Performance Series Socks"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="px-3 py-1">
                    Sports & Fitness
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">Athletic Performance Series</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Client:</strong> FitnessPro
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Moisture-wicking compression socks with targeted cushioning zones. Features include arch support, seamless toe construction, and antimicrobial treatment. Available in 6 colorways with custom logo placement.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Luxury Business Collection */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="https://cdn.hercules.app/file_cTKu5ZRkWuaZtTEpZktn1qLD"
                alt="Luxury Business Collection Socks"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="px-3 py-1">
                    Business & Professional
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">Luxury Business Collection</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Client:</strong> Corporate Solutions Inc.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Premium dress socks featuring moisture management and all-day comfort for professionals. Available in 4 elegant colorways with custom monogramming options.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Fun Kids Adventure Line */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="https://cdn.hercules.app/file_xOLU35KSG73Zfq5MofK8UxM5"
                alt="Fun Kids Adventure Line Socks"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="px-3 py-1">
                    Kids & Family
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">Fun Kids Adventure Line</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Client:</strong> Happy Feet Kids
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Colorful, durable socks with fun patterns that kids love and parents trust. Features include reinforced stitching, non-slip soles, and eco-friendly materials.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Eco-Conscious Collection */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="https://cdn.hercules.app/file_hgWTQ5qregwhdJOQof91Ngv5"
                alt="Eco-Conscious Collection Socks"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="px-3 py-1">
                    Sustainability
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">Eco-Conscious Collection</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Client:</strong> Green Living Co.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sustainable socks made from organic cotton and recycled materials without compromising comfort. Features include biodegradable packaging and carbon-neutral shipping.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Gaming Culture Series */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="https://cdn.hercules.app/file_N4xzsrkgg8OTZ9ueQ9CCERbA"
                alt="Gaming Culture Series Socks"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="px-3 py-1">
                    Entertainment & Gaming
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">Gaming Culture Series</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Client:</strong> GameHub
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Limited edition gaming-themed socks featuring popular characters and vibrant designs. Available in 3 exclusive colorways with custom in-game character patterns.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Medical Compression Line */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="https://cdn.hercules.app/file_0rdqY6aPwMzSmLvaqpaBl3yS"
                alt="Medical Compression Line Socks"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="px-3 py-1">
                    Healthcare
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">Medical Compression Line</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Client:</strong> HealthFirst
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Medical-grade compression socks designed for healthcare professionals and patients. Features include graduated compression, breathable mesh, and hypoallergenic materials.
                </p>
              </CardContent>
            </Card>
          </div>
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