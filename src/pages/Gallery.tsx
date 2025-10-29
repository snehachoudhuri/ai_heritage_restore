import { useState, useEffect } from "react";
import { Filter } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import parchmentBg from "@/assets/parchment-bg.jpeg";

type FilterType = "all" | "originals" | "restored";

interface Restoration {
  original: string;
  restored: string;
  date: string;
}

const Gallery = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [restorations, setRestorations] = useState<Restoration[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('restorations');
    if (stored) {
      setRestorations(JSON.parse(stored));
    }
  }, []);

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
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-heritage-tan">
              Restoration Gallery
            </h1>
            <p className="text-center text-muted-foreground text-lg mb-12">
              Browse your collection of restored heritage documents
            </p>

            {/* Filters */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <Filter className="w-5 h-5 text-primary" />
              <div className="flex gap-2">
                {(["all", "originals", "restored"] as FilterType[]).map((type) => (
                  <Button
                    key={type}
                    onClick={() => setFilter(type)}
                    variant={filter === type ? "default" : "outline"}
                    className={`rounded-full capitalize ${
                      filter === type 
                        ? "bg-primary text-primary-foreground" 
                        : "border-heritage-tan text-foreground hover:bg-heritage-tan/20"
                    }`}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            {restorations.length === 0 ? (
              <div className="bg-heritage-cream rounded-3xl p-16 text-center shadow-xl max-w-2xl mx-auto">
                <p className="text-xl text-muted-foreground mb-4">
                  No restorations yet
                </p>
                <p className="text-muted-foreground">
                  Upload your first image in the Restoration Studio to begin building your gallery!
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {restorations.map((restoration, index) => (
                  <div key={index} className="bg-heritage-cream rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {(filter === "all" || filter === "originals") && (
                        <div>
                          <p className="text-xs font-semibold mb-2 text-muted-foreground">Before</p>
                          <div className="aspect-[3/4] rounded-xl overflow-hidden border-2 border-heritage-tan/30">
                            <img 
                              src={restoration.original} 
                              alt="Original" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                      {(filter === "all" || filter === "restored") && (
                        <div className={filter === "restored" ? "col-span-2" : ""}>
                          <p className="text-xs font-semibold mb-2 text-muted-foreground">After</p>
                          <div className="aspect-[3/4] rounded-xl overflow-hidden border-2 border-heritage-tan/30">
                            <img 
                              src={restoration.restored} 
                              alt="Restored" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      {new Date(restoration.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
