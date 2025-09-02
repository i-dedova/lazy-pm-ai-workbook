import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Brain, MessageSquare, Code, BarChart3, Mic, Expand } from "lucide-react";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";

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

  return (
    <Card className="border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 group">
      <div className="md:flex md:gap-8 p-6">
        {/* Left Half - All Content */}
        <div className="md:flex-1 space-y-6">
          {/* Icon and Title */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <IconComponent className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg lg:text-xl font-semibold text-foreground mb-3">{title}</CardTitle>
              <Badge variant="secondary" className="text-xs font-medium px-3 py-1 rounded-xl">
                {tools}
              </Badge>
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
          <div className="p-4 bg-highlight/10 border border-highlight/30 rounded-xl">
            <p className="text-sm lg:text-base font-semibold text-highlight">
              {metric}
            </p>
          </div>
        </div>
        
        {/* Right Half - Interactive Workflow Diagram */}
        <div className="md:flex-1 mt-6 md:mt-0">
          <div className="relative h-full md:min-h-[280px]">
            {/* Mini Preview */}
            <div className="h-full rounded-xl border border-border/50 bg-background/50 overflow-hidden">
              <WorkflowDiagram type={diagramType} isPreview={true} />
            </div>
            
            {/* Expand Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="absolute top-3 right-3 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
                >
                  <Expand className="h-4 w-4 mr-2" />
                  View Flow
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-hidden">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold">{title} - Workflow</DialogTitle>
                </DialogHeader>
                <div className="h-[70vh]">
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