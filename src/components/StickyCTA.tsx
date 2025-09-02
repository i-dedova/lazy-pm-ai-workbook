import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Github, ExternalLink } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConnectVisible, setIsConnectVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after user has scrolled past hero section
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight);
    };

    // Observer for connect section visibility
    const connectObserver = new IntersectionObserver(
      ([entry]) => {
        setIsConnectVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the connect section is visible
        rootMargin: "-80px 0px -80px 0px" // Account for header height
      }
    );

    const connectSection = document.getElementById("connect");
    if (connectSection) {
      connectObserver.observe(connectSection);
    }

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (connectSection) {
        connectObserver.unobserve(connectSection);
      }
    };
  }, []);

  // Hide sticky CTA if connect section is visible or if not visible at all
  if (!isVisible || isConnectVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
      <Button 
        size="lg"
        className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-opacity shadow-lg px-6 py-3 rounded-full font-semibold"
        asChild
      >
        <a href="https://www.linkedin.com/in/innadedova/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-5 h-5 mr-2" />
          Connect on LinkedIn
        </a>
      </Button>
    </div>
  );
};