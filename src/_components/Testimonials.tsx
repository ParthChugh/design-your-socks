import { Card, CardContent } from "@/components/ui/card.tsx";
import { Avatar, AvatarFallback } from "@/components/ui/avatar.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder",
      company: "ActiveStep Athletics",
      avatar: "SC",
      rating: 5,
      text: "DesignYourSocks transformed our vision into reality. Their technical expertise and creative flair helped us launch our athletic sock line 3 months ahead of schedule. The production files were flawless, and our manufacturer had zero questions.",
      result: "Launched 3 months early, 40% faster time-to-market"
    },
    {
      name: "Marcus Rodriguez",
      role: "Brand Manager", 
      company: "Executive Essentials",
      avatar: "MR",
      rating: 5,
      text: "The quality of work exceeded our expectations. We needed luxury dress socks that would compete with established brands, and they delivered designs that actually look more premium. Our sales speak for themselves.",
      result: "300% increase in first-quarter sales"
    },
    {
      name: "Jennifer Walsh",
      role: "Creative Director",
      company: "EcoWear Collective",
      avatar: "JW", 
      rating: 5,
      text: "Working with this team was seamless from start to finish. They understood our sustainable brand values and created designs that perfectly capture our eco-conscious message. The manufacturing connections were invaluable.",
      result: "Successful launch in 12 retail locations"
    },
    {
      name: "David Kim",
      role: "Entrepreneur",
      company: "GameSocks Pro",
      avatar: "DK",
      rating: 5,
      text: "As a first-time entrepreneur, I was worried about the technical aspects of sock design. They guided me through every step and delivered production-ready files that my manufacturer called 'some of the best they've seen.'",
      result: "Crowdfunding goal exceeded by 250%"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Client Success Stories</Badge>
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4">
            Trusted by Sock Entrepreneurs Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped businesses like yours 
            turn sock designs into profitable ventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute top-6 right-6 text-muted-foreground/20">
                <Quote className="h-8 w-8" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Result badge */}
                <div className="mb-6">
                  <Badge className="bg-green-500/10 text-green-700 border-green-200 hover:bg-green-500/20">
                    📈 {testimonial.result}
                  </Badge>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-muted/50 rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">4.9/5</div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground">Average Rating</div>
            </div>
            
            <div className="w-px h-12 bg-border"></div>
            
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">97%</div>
              <div className="text-xs text-muted-foreground">Client Satisfaction</div>
            </div>
            
            <div className="w-px h-12 bg-border"></div>
            
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">150+</div>
              <div className="text-xs text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}