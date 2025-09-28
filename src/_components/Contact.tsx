import { useState } from "react";
import { useMutation } from "convex/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { 
  MessageCircle, 
  Calculator, 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  quantity: z.string().min(1, "Please select a quantity range"),
  timeline: z.string().min(1, "Please select a timeline"),
  budget: z.string().min(1, "Please select a budget range"),
  description: z.string().min(10, "Please provide project details"),
});

type ContactForm = z.infer<typeof contactSchema>;
type QuoteForm = z.infer<typeof quoteSchema>;

export default function Contact() {
  const [activeTab, setActiveTab] = useState("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submitContact = useMutation(api.contacts.submitContact);
  const submitQuote = useMutation(api.contacts.submitQuote);

  const contactForm = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const quoteForm = useForm<QuoteForm>({
    resolver: zodResolver(quoteSchema),
  });

  const handleContactSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      await submitContact({
        ...data,
        source: "contact",
      });
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      contactForm.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuoteSubmit = async (data: QuoteForm) => {
    setIsSubmitting(true);
    try {
      await submitQuote(data);
      toast.success("Quote request submitted! We'll send you a detailed proposal within 24 hours.");
      quoteForm.reset();
    } catch (error) {
      toast.error("Failed to submit quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: "hello@designyoursocks.com",
      description: "Get a response within 2 hours"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us", 
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      details: "123 Design Street, Creative City, NY 10001",
      description: "By appointment only"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Response Time",
      details: "< 2 Hours",
      description: "Average email response time"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get Started</Badge>
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl mb-4">
            Ready to Transform Your Sock Ideas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch today for a free consultation. We'll discuss your project requirements 
            and provide a detailed proposal within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Let's Start Your Project
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="contact">General Inquiry</TabsTrigger>
                    <TabsTrigger value="quote">Get Quote</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="contact" className="mt-6">
                    <form onSubmit={contactForm.handleSubmit(handleContactSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name">Name *</Label>
                          <Input 
                            id="contact-name"
                            placeholder="Your full name"
                            {...contactForm.register("name")}
                          />
                          {contactForm.formState.errors.name && (
                            <p className="text-sm text-destructive">{contactForm.formState.errors.name.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="contact-email">Email *</Label>
                          <Input 
                            id="contact-email"
                            type="email"
                            placeholder="your.email@example.com"
                            {...contactForm.register("email")}
                          />
                          {contactForm.formState.errors.email && (
                            <p className="text-sm text-destructive">{contactForm.formState.errors.email.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contact-company">Company (optional)</Label>
                        <Input 
                          id="contact-company"
                          placeholder="Your company name"
                          {...contactForm.register("company")}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contact-message">Message *</Label>
                        <Textarea 
                          id="contact-message"
                          placeholder="Tell us about your sock design project..."
                          rows={4}
                          {...contactForm.register("message")}
                        />
                        {contactForm.formState.errors.message && (
                          <p className="text-sm text-destructive">{contactForm.formState.errors.message.message}</p>
                        )}
                      </div>
                      
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="quote" className="mt-6">
                    <form onSubmit={quoteForm.handleSubmit(handleQuoteSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="quote-name">Name *</Label>
                          <Input 
                            id="quote-name"
                            placeholder="Your full name"
                            {...quoteForm.register("name")}
                          />
                          {quoteForm.formState.errors.name && (
                            <p className="text-sm text-destructive">{quoteForm.formState.errors.name.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="quote-email">Email *</Label>
                          <Input 
                            id="quote-email"
                            type="email"
                            placeholder="your.email@example.com"
                            {...quoteForm.register("email")}
                          />
                          {quoteForm.formState.errors.email && (
                            <p className="text-sm text-destructive">{quoteForm.formState.errors.email.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="quote-company">Company (optional)</Label>
                        <Input 
                          id="quote-company"
                          placeholder="Your company name"
                          {...quoteForm.register("company")}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Project Type *</Label>
                          <Select onValueChange={(value) => quoteForm.setValue("projectType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="design_only">Design Only ($497)</SelectItem>
                              <SelectItem value="design_production">Design + Production Files ($797)</SelectItem>
                              <SelectItem value="full_service">Full-Service Partnership (Custom)</SelectItem>
                            </SelectContent>
                          </Select>
                          {quoteForm.formState.errors.projectType && (
                            <p className="text-sm text-destructive">{quoteForm.formState.errors.projectType.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Expected Quantity</Label>
                          <Select onValueChange={(value) => quoteForm.setValue("quantity", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select quantity range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="100-500">100 - 500 pairs</SelectItem>
                              <SelectItem value="500-1000">500 - 1,000 pairs</SelectItem>
                              <SelectItem value="1000-5000">1,000 - 5,000 pairs</SelectItem>
                              <SelectItem value="5000+">5,000+ pairs</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Timeline</Label>
                          <Select onValueChange={(value) => quoteForm.setValue("timeline", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="When do you need this?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP (Rush fees apply)</SelectItem>
                              <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                              <SelectItem value="2-4weeks">2-4 weeks</SelectItem>
                              <SelectItem value="1-2months">1-2 months</SelectItem>
                              <SelectItem value="flexible">Flexible timeline</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Budget Range</Label>
                          <Select onValueChange={(value) => quoteForm.setValue("budget", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-500">Under $500</SelectItem>
                              <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                              <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                              <SelectItem value="2500+">$2,500+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="quote-description">Project Description *</Label>
                        <Textarea 
                          id="quote-description"
                          placeholder="Describe your sock design vision, target audience, style preferences, etc..."
                          rows={4}
                          {...quoteForm.register("description")}
                        />
                        {quoteForm.formState.errors.description && (
                          <p className="text-sm text-destructive">{quoteForm.formState.errors.description.message}</p>
                        )}
                      </div>
                      
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? "Submitting..." : "Request Quote"}
                        <Calculator className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium">{info.title}</div>
                      <div className="text-sm text-muted-foreground mb-1">{info.details}</div>
                      <div className="text-xs text-muted-foreground">{info.description}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="text-2xl">⚡</div>
                  <div className="font-semibold">Fast Response Guarantee</div>
                  <div className="text-sm text-muted-foreground">
                    We respond to all inquiries within 2 hours during business hours. 
                    Need something urgent? Call us directly!
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Currently online</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}