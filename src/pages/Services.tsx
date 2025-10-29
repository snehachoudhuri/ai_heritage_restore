import { Sparkles, Image as ImageIcon, Archive } from "lucide-react";
import Header from "@/components/Header";
import parchmentBg from "@/assets/parchment-bg.jpeg";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "AI Image Restoration",
      description: "Remove noise, stains, and damage from manuscripts using advanced neural networks. Our AI carefully reconstructs missing details while preserving the authentic character of historical documents.",
    },
    {
      icon: ImageIcon,
      title: "Color Revival (GANs)",
      description: "Restore historical paintings and faded documents to their original vibrancy. Generative Adversarial Networks intelligently reconstruct colors based on historical context and patterns.",
    },
    {
      icon: Archive,
      title: "Digital Archiving",
      description: "Store and organize your restored heritage in secure, searchable collections. Create a lasting digital legacy of cultural treasures for future generations to explore and study.",
    },
  ];

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `url(${parchmentBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="min-h-screen bg-background/80 backdrop-blur-[2px]">
        <Header />

        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-heritage-tan">
              Our Services
            </h1>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Cutting-edge AI technology meets cultural heritage preservation. 
              Explore how we bring history back to life.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="bg-heritage-cream rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Additional Info Section */}
            <div className="mt-16 bg-primary/10 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Why Choose AI × Heritage?
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                We combine state-of-the-art machine learning with deep respect for cultural heritage. 
                Our restoration process is non-invasive, reversible, and designed to preserve the 
                authentic character of historical documents while making them accessible to modern audiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
