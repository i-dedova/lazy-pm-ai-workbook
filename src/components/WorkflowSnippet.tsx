import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Brain, MessageSquare, Code, BarChart3, Mic, Expand } from "lucide-react";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { WorkflowPreview } from "@/components/WorkflowPreview";
import { useIsMobile } from "@/hooks/use-mobile";

interface WorkflowSnippetProps {
  title: string;
  tools: string;
  keyBenefits: string[];
  metric: string;
  icon: "brain" | "message" | "code" | "chart" | "mic";
  diagramType: "product-brain" | "meeting-memory" | "tech-bridge" | "data-wizard" | "voice-magic";
}

const iconMap = {
  brain: Brain,
  message: MessageSquare,
  code: Code,
  chart: BarChart3,
  mic: Mic,
};

export const WorkflowSnippet = ({ title, tools, keyBenefits, metric, icon, diagramType }: WorkflowSnippetProps) => {
  const IconComponent = iconMap[icon];
  const isMobile = useIsMobile();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Check if device is touch-based (mobile or tablet) - no hover capability
  const isTouchDevice = isMobile || (typeof window !== 'undefined' && 'ontouchstart' in window);

  // Handle back button to close dialog on mobile/tablet
  useEffect(() => {
    if (!isTouchDevice) return; // Only handle back button on touch devices
    
    const handlePopState = (event: PopStateEvent) => {
      if (isDialogOpen) {
        event.preventDefault();
        setIsDialogOpen(false);
        // Push a new state to prevent actual navigation
        window.history.pushState(null, '', window.location.pathname);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDialogOpen) {
        setIsDialogOpen(false);
      }
    };

    if (isDialogOpen) {
      // Push a state when dialog opens so we can catch the back navigation
      window.history.pushState(null, '', window.location.pathname);
      window.addEventListener('popstate', handlePopState);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDialogOpen, isTouchDevice]);

  return (
    <Card className="border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 group">
      <div className="md:flex md:gap-8 p-6">
        {/* Left Half - All Content */}
        <div className="md:flex-1 space-y-6">
          {/* Icon and Title */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <IconComponent className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-xl lg:text-2xl font-semibold text-foreground mb-3">{title}</CardTitle>
            </div>
          </div>
          
          {/* Benefits */}
          <ul className="space-y-2">
            {keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm lg:text-base text-muted-foreground">
                <span className="text-accent text-lg">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          {/* Metric */}
          <div className="p-4 bg-highlight/10 border border-[#E09E47] dark:border-highlight/30 rounded-xl">
            <p className="text-sm lg:text-base font-semibold text-[#E09E47] dark:text-highlight">
              {metric}
            </p>
          </div>
        </div>
        
        {/* Right Half - Static Workflow Diagram */}
        <div className="md:flex-1 mt-6 md:mt-0">
          <div className="relative h-40 sm:h-48 md:h-64 lg:h-72">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <div className="h-full rounded-xl bg-background border border-border/30 cursor-pointer hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                  <div className="relative h-full p-3">
                    <WorkflowPreview type={diagramType} />
                  </div>
                  
                  {/* Expansion hint - positioned to avoid overlaying mobile diagram */}
                  <div className={`absolute bottom-0 right-0 sm:bottom-1 sm:right-1 md:bottom-2 md:right-2 z-10 transition-opacity duration-200 pointer-events-none ${
                    isTouchDevice ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <div className="flex items-center space-x-1 sm:space-x-2 text-[10px] sm:text-xs text-muted-foreground bg-background/90 backdrop-blur-sm rounded-md px-1.5 py-0.5 sm:px-2 sm:py-1 shadow-sm">
                      <span>Expand for detailed workflow</span>
                      <Expand className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] sm:max-w-[90vw] sm:w-[90vw] md:max-w-[85vw] md:w-[85vw] lg:max-w-[75vw] lg:w-[75vw] max-h-[85vh] h-[85vh] sm:max-h-[90vh] sm:h-[90vh] md:max-h-[95vh] md:h-[95vh] p-3 sm:p-4 md:p-5 lg:p-6 mx-auto overflow-visible">
                <DialogTitle className="sr-only">Workflow Diagram</DialogTitle>
                <div className="h-full w-full">
                  <WorkflowDiagram type={diagramType} isPreview={false} />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </Card>
  );
};