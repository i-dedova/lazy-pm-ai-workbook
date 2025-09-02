import { useState } from "react";
import { Menu, X, Linkedin, FileText, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg lg:text-xl font-bold text-primary">My Lazy PM's AI Workbook</h1>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block border-t border-border/30">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex justify-center gap-8">
              <button 
                onClick={() => scrollToSection("arsenal")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Arsenal
              </button>
              <button 
                onClick={() => scrollToSection("lab")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Lab
              </button>
              <button 
                onClick={() => scrollToSection("connect")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Connect
              </button>
            </nav>
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
                AI Arsenal
              </button>
              <button 
                onClick={() => scrollToSection("lab")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                What's Cooking
              </button>
              <hr className="border-border" />
              <div className="pt-2">
                <Button variant="outline" className="w-full justify-start">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};