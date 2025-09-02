import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, FileText, Github, ExternalLink } from "lucide-react";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after user has scrolled past hero section
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
      <div className="bg-gradient-accent rounded-full px-6 py-3 shadow-lg border border-accent/20">
        <div className="flex items-center gap-3">
          <Button 
            size="sm" 
            variant="secondary" 
            className="bg-background/20 hover:bg-background/30 text-accent-foreground border-background/30 rounded-full"
          >
            <Linkedin className="w-4 h-4" />
          </Button>
          <span className="text-accent-foreground font-medium text-sm">Let's Connect</span>
          <Button 
            size="sm" 
            variant="secondary" 
            className="bg-background/20 hover:bg-background/30 text-accent-foreground border-background/30 rounded-full"
          >
            <FileText className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};