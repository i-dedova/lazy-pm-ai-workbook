import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageSquare, Code, BarChart3, Mic } from "lucide-react";

interface WorkflowSnippetProps {
  title: string;
  tools: string;
  keyBenefits: string[];
  metric: string;
  icon: "brain" | "message" | "code" | "chart" | "mic";
}

const iconMap = {
  brain: Brain,
  message: MessageSquare,
  code: Code,
  chart: BarChart3,
  mic: Mic,
};

export const WorkflowSnippet = ({ title, tools, keyBenefits, metric, icon }: WorkflowSnippetProps) => {
  const IconComponent = iconMap[icon];

  return (
    <Card className="border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 group">
      <div className="lg:flex lg:gap-8 p-6">
        {/* Left Half - All Content */}
        <div className="lg:flex-1 space-y-6">
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
        
        {/* Right Half - Workflow Diagram */}
        <div className="lg:flex-1 mt-6 lg:mt-0">
          <div className="p-8 bg-muted/30 rounded-xl border border-dashed border-muted-foreground/30 h-full lg:min-h-[200px] flex items-center justify-center">
            <p className="text-xs lg:text-sm text-muted-foreground text-center italic">
              Workflow diagram
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};