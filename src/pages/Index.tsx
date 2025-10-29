import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import { useState } from "react";
import readingBook from "@/assets/reading-book.jpeg";
import booksShelf from "@/assets/books-shelf.jpeg";
import bundledDocs from "@/assets/bundled-documents.jpeg";
import parchmentBg from "@/assets/parchment-bg.jpeg";

const Index = () => {
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(0);

  const features = [
    {
      title: "View Gallery",
      description: "Browse your restored cultural archives and explore the beauty of preserved heritage documents.",
      image: readingBook,
      buttonText: "View",
      onClick: () => navigate("/gallery"),
    },
    {
      title: "Upload Pictures",
      description: "Upload damaged heritage pages to restore them using our advanced AI restoration technology.",
      image: booksShelf,
      buttonText: "Restore",
      onClick: () => navigate("/studio"),
    },
    {
      title: "View Demo",
      description: "Preview how our AI revives lost heritage and brings clarity to ancient manuscripts.",
      image: bundledDocs,
      buttonText: "Demo Result",
      onClick: () => navigate("/demo"),
    },
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % features.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + features.length) % features.length);
  };

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
      {/* Overlay for readability */}
      <div className="min-h-screen bg-background/80 backdrop-blur-[2px]">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Hero Text */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <ChevronRight key={i} className="w-6 h-6 text-primary" />
                    ))}
                  </div>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <div className="text-primary-foreground bg-primary px-6 py-3 rounded-2xl inline-block mb-4">
                    DIGITAL LAB
                  </div>
                  <div className="text-heritage-tan text-5xl md:text-6xl mt-4">
                    RESTORATION
                  </div>
                </h1>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                  Preserve and restore cultural heritage using cutting-edge AI technology. 
                  Transform damaged manuscripts into crystal-clear historical documents, 
                  bringing the past back to life with unprecedented clarity.
                </p>

                <Button
                  onClick={() => navigate("/studio")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg group mt-6"
                >
                  START
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex gap-1 mt-12">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-primary/30 rounded-full" />
                  ))}
                </div>
              </div>

              {/* Right: Carousel */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevCard}
                    className="p-3 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-all z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <div className="flex-1 overflow-hidden">
                    <div 
                      className="flex transition-transform duration-500 ease-out gap-4"
                      style={{ transform: `translateX(-${currentCard * 100}%)` }}
                    >
                      {features.map((feature, index) => (
                        <div key={index} className="min-w-full">
                          <FeatureCard {...feature} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={nextCard}
                    className="p-3 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-all z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex justify-center gap-2 mt-6">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCard(index)}
                      className={`h-2 rounded-full transition-all ${
                        currentCard === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="fixed bottom-8 right-8 flex gap-1 opacity-30">
          {[...Array(5)].map((_, i) => (
            <ChevronRight key={i} className="w-8 h-8 text-primary" />
          ))}
        </div>

        {/* Footer */}
        <footer className="border-t border-heritage-tan/20 py-6 mt-20">
          <div className="container mx-auto px-6 text-center text-muted-foreground">
            <p>© 2025 AI × Heritage | Preserving the past with AI.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
