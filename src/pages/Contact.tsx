import { Mail, MessageSquare, Send } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import parchmentBg from "@/assets/parchment-bg.jpeg";
const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };
  return <div className="min-h-screen" style={{
    backgroundImage: `url(${parchmentBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      <div className="min-h-screen bg-background/80 backdrop-blur-[2px]">
        <Header />

        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-heritage-tan">
              Contact Us
            </h1>
            <p className="text-center text-muted-foreground text-lg mb-12">
              Have questions about heritage restoration? We're here to help.
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-heritage-cream rounded-3xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                    <Input id="name" type="text" placeholder="Your full name" required className="mt-2 bg-background border-heritage-tan/30" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required className="mt-2 bg-background border-heritage-tan/30" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                    <Textarea id="message" placeholder="Tell us how we can help..." rows={5} required className="mt-2 bg-background border-heritage-tan/30 resize-none" />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-heritage-cream rounded-3xl p-8 shadow-xl h-full">
                  <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                    <Mail className="w-6 h-6 text-primary" />
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p>support@aiheritage.com</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                      <p>We typically respond within 24-48 hours</p>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;