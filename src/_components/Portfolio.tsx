import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const handleViewPortfolio = () => {
    window.open('https://drive.google.com/drive/folders/1iLC2QJU4Tb_9FCAN7iLiu5YZAjLayvnY?usp=drive_link', '_blank');
  };

  return (
    <section className="py-24 bg-muted/30" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of sock designs across different industries and styles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Athletic Performance Series */}
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://cdn.hercules.app/file_0rdqY6aPwMzSmLvaqpaBl3yS"
                alt="Athletic Performance Series sock designs"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Sports & Fitness</Badge>
                </div>
                <CardTitle className="text-xl">Athletic Performance Series</CardTitle>
                <p className="text-sm text-muted-foreground">Client: FitnessPro</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Moisture-wicking compression socks with enhanced cushioning for optimal athletic performance and recovery.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Luxury Business Collection */}
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://cdn.hercules.app/file_IOdkbD1vHVeOvwV0CYVbKler"
                alt="Luxury Business Collection sock designs"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Business</Badge>
                </div>
                <CardTitle className="text-xl">Luxury Business Collection</CardTitle>
                <p className="text-sm text-muted-foreground">Client: Corporate Elite</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Premium dress socks featuring sophisticated patterns and luxury materials for the discerning professional.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Fun Kids Adventure Line */}
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://cdn.hercules.app/file_KNDpo5NN6nB5bRb8zqeu3jaB"
                alt="Fun Kids Adventure Line sock designs"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Kids</Badge>
                </div>
                <CardTitle className="text-xl">Fun Kids Adventure Line</CardTitle>
                <p className="text-sm text-muted-foreground">Client: PlayTime Co.</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Colorful and playful designs that spark imagination, made with soft, durable materials perfect for active children.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Eco-Conscious Collection */}
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://cdn.hercules.app/file_XzQ0vpi1xjoorQ9VSztSwqSE"
                alt="Eco-Conscious Collection sock designs"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Eco-Friendly</Badge>
                </div>
                <CardTitle className="text-xl">Eco-Conscious Collection</CardTitle>
                <p className="text-sm text-muted-foreground">Client: GreenStep</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sustainable sock designs using organic cotton and recycled materials with nature-inspired patterns.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Gaming Culture Series */}
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://cdn.hercules.app/file_HMgRSBy4tWDI0ySYXguj7P2Y"
                alt="Gaming Culture Series sock designs"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Gaming</Badge>
                </div>
                <CardTitle className="text-xl">Gaming Culture Series</CardTitle>
                <p className="text-sm text-muted-foreground">Client: GameOn!</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bold, vibrant designs featuring gaming-inspired graphics and comfortable extended-wear materials for long gaming sessions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Medical Compression Line */}
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://cdn.hercules.app/file_nh4cMTk11jh6ierxvO9fqfbB"
                alt="Medical Compression Line sock designs"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Medical</Badge>
                </div>
                <CardTitle className="text-xl">Medical Compression Line</CardTitle>
                <p className="text-sm text-muted-foreground">Client: HealthCare Plus</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Therapeutic compression socks designed for medical professionals and patients requiring circulation support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Centered Button Section with Proper Spacing */}
        <div className="text-center pt-12 mt-16 border-t border-border">
          <h3 className="text-xl font-semibold mb-2">Explore Our Complete Work</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            View our comprehensive portfolio with detailed project galleries and client case studies
          </p>
          <Button onClick={handleViewPortfolio} size="lg" className="gap-2">
            <ExternalLink className="w-4 h-4" />
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}