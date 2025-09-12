import { Menu, X, Github, FileText } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Account for sticky header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg lg:text-xl font-bold text-primary">My Lazy PM's AI Workbook</h1>
          
          {/* Desktop Navigation - Single Line */}
          <div className="hidden xl:flex items-center gap-8">
            <nav className="flex gap-8">
              <button 
                onClick={() => scrollToSection("arsenal")}
                className="text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-all duration-200"
              >
                Arsenal
              </button>
              <button 
                onClick={() => scrollToSection("lab")}
                className="text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-all duration-200"
              >
                Lab
              </button>
              <a
                href="https://www.linkedin.com/in/innadedova/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-2"
              >
                <FaLinkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </nav>
            <ThemeToggle />
          </div>

          {/* Tablet - Inline Navigation */}
          <div className="hidden lg:flex xl:hidden items-center gap-3">
            <nav className="flex gap-4">
              <button 
                onClick={() => scrollToSection("arsenal")}
                className="text-xs text-muted-foreground hover:text-primary hover:bg-primary/10 px-2 py-1 rounded-md transition-all duration-200"
              >
                Arsenal
              </button>
              <button 
                onClick={() => scrollToSection("lab")}
                className="text-xs text-muted-foreground hover:text-primary hover:bg-primary/10 px-2 py-1 rounded-md transition-all duration-200"
              >
                Lab
              </button>
            </nav>
            <Button
              variant="outline"
              size="sm"
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 border-accent"
              asChild
            >
              <a href="https://www.linkedin.com/in/innadedova/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <FaLinkedin className="w-3 h-3" />
                <span className="text-xs">Connect</span>
              </a>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile - Hamburger Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-20 left-4 right-4 bg-card border border-border rounded-lg shadow-lg p-6">
            <nav className="space-y-4">
              <button 
                onClick={() => scrollToSection("arsenal")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Arsenal
              </button>
              <button 
                onClick={() => scrollToSection("lab")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Lab
              </button>
              <hr className="border-border" />
              <div className="pt-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://www.linkedin.com/in/innadedova/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};