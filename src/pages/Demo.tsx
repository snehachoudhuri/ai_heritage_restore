import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import demoOriginal from "@/assets/demo-original.jpg";
import demoRestored from "@/assets/demo-restored.jpeg";
import parchmentBg from "@/assets/parchment-bg.jpeg";

const Demo = () => {
  const navigate = useNavigate();
  const [sliderPosition, setSliderPosition] = useState(50);

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
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-heritage-tan">
              Experience AI Restoration
            </h1>
            <p className="text-center text-muted-foreground text-lg mb-12">
              Slide to compare the original damaged manuscript with the AI-restored version
            </p>

            {/* Image Comparison Slider */}
            <div className="bg-heritage-cream rounded-3xl p-8 shadow-xl mb-8">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                {/* Before Image */}
                <img 
                  src={demoOriginal} 
                  alt="Original damaged manuscript" 
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* After Image with clip-path */}
                <div 
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img 
                    src={demoRestored} 
                    alt="Restored manuscript" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Slider Control */}
                <div 
                  className="absolute inset-y-0 w-1 bg-primary cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-1 h-6 bg-primary-foreground rounded-full mr-1" />
                    <div className="w-1 h-6 bg-primary-foreground rounded-full ml-1" />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  After
                </div>

                {/* Interactive overlay for dragging */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to restore your own historical documents?
              </p>
              <Button
                onClick={() => navigate("/studio")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-6 text-lg group"
              >
                Try it Yourself
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
