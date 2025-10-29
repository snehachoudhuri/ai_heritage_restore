import { useState } from "react";
import { Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { toast } from "sonner";
import demoOriginal from "@/assets/demo-original.jpg";
import demoRestored from "@/assets/demo-restored.jpeg";
import parchmentBg from "@/assets/parchment-bg.jpeg";

const Studio = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setRestoredImage(null);
        toast.success("Image uploaded successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRestore = () => {
    if (!uploadedImage) {
      toast.error("Please upload an image first!");
      return;
    }

    setIsProcessing(true);
    toast.info("AI restoration in progress...");

    // Simulate AI processing with CSS filters
    setTimeout(() => {
      // Create a canvas to apply filters
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = img.width;
          canvas.height = img.height;
          
          // Apply enhancement filters
          ctx.filter = 'contrast(1.3) brightness(1.1) saturate(1.2) sharpen(1)';
          ctx.drawImage(img, 0, 0);
          
          setRestoredImage(canvas.toDataURL());
          setIsProcessing(false);
          toast.success("Restoration complete!");
          
          // Save to localStorage
          const restorations = JSON.parse(localStorage.getItem('restorations') || '[]');
          restorations.push({
            original: uploadedImage,
            restored: canvas.toDataURL(),
            date: new Date().toISOString(),
          });
          localStorage.setItem('restorations', JSON.stringify(restorations));
        }
      };
      img.src = uploadedImage;
    }, 2000);
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
      <div className="min-h-screen bg-background/80 backdrop-blur-[2px]">
        <Header />

        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-heritage-tan">
              AI Restoration Studio
            </h1>

            <div className={`grid gap-8 max-w-6xl mx-auto transition-all duration-500 ease-in-out ${uploadedImage ? 'lg:grid-cols-1' : 'lg:grid-cols-2'}`}>
              {/* Left Card: Before/After Display */}
              <div className={`bg-heritage-cream rounded-3xl p-8 shadow-xl transition-all duration-500 ease-in-out ${uploadedImage ? 'animate-scale-in' : ''}`}>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-center text-foreground">Original</h3>
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted border-2 border-heritage-tan/30">
                      <img 
                        src={uploadedImage || demoOriginal} 
                        alt="Original" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-center text-foreground">Restored</h3>
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted border-2 border-heritage-tan/30">
                      {restoredImage ? (
                        <img 
                          src={restoredImage} 
                          alt="Restored" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img 
                          src={demoRestored} 
                          alt="Demo Restored" 
                          className="w-full h-full object-cover opacity-50"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={handleRestore}
                    disabled={isProcessing || !uploadedImage}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full py-6 text-lg group"
                  >
                    {isProcessing ? "Processing..." : "START"}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {uploadedImage && (
                    <Button
                      onClick={() => {
                        setUploadedImage(null);
                        setRestoredImage(null);
                      }}
                      variant="outline"
                      className="w-full py-6 text-lg rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Upload Another Image
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Card: Upload Area */}
              {!uploadedImage && (
                <div className="bg-heritage-cream rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center animate-fade-in">
                <div className="w-full max-w-md">
                  <div className="border-4 border-dashed border-heritage-tan/40 rounded-3xl p-12 text-center hover:border-primary/60 transition-colors">
                    <Upload className="w-20 h-20 mx-auto mb-6 text-primary" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Drag and drop an image or
                    </h3>
                    <label htmlFor="file-upload">
                      <Button
                        type="button"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg cursor-pointer"
                        onClick={() => document.getElementById('file-upload')?.click()}
                      >
                        CHOOSE FILE
                      </Button>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
