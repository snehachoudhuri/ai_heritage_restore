import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  onClick: () => void;
  className?: string;
}

const FeatureCard = ({ title, description, image, buttonText, onClick, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-heritage-cream rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col",
      className
    )}>
      <div className="aspect-video rounded-2xl overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <Button
        onClick={onClick}
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full group"
      >
        {buttonText}
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default FeatureCard;
