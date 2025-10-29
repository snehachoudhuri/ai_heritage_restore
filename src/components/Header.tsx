import { Link, useNavigate } from "react-router-dom";
import { User, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-heritage-tan/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-heritage-cream rounded-lg flex items-center justify-center">
              <Feather className="w-6 h-6 text-primary" />
            </div>
            <span className="text-primary-foreground font-semibold text-lg">AI × Heritage</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Profile Button */}
          <Button
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => navigate("/profile")}
          >
            <User className="w-5 h-5 mr-2" />
            Person X
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
