import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageSquare, Code, BarChart3, Mic } from "lucide-react";

interface WorkflowCardProps {
  title: string;
  tools: string;
  problem: string;
  magic: string;
  metric: string;
  impact: string;
  icon: "brain" | "message" | "code" | "chart" | "mic";
  index: number;
}

const iconMap = {
  brain: Brain,
  message: MessageSquare,
  code: Code,
  chart: BarChart3,
  mic: Mic,
};

export const WorkflowCard = ({ title, tools, problem, magic, metric, impact, icon, index }: WorkflowCardProps) => {
  const IconComponent = iconMap[icon];
  const isEven = index % 2 === 0;

  return (
    <Card className="h-full bg-card border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 group">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className={`flex gap-8 p-6 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
          {/* Content Side */}
          <div className="flex-1 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <IconComponent className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
                <Badge variant="secondary" className="text-sm font-medium">
                  {tools}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-base">The Problem:</h4>
                <p className="text-muted-foreground leading-relaxed">{problem}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-base">The Magic:</h4>
                <p className="text-muted-foreground leading-relaxed">{magic}</p>
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm font-medium text-primary">
                  <span className="font-semibold">Success Metric:</span> {metric}
                </p>
              </div>
              
              <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm font-medium text-accent">
                  <span className="font-semibold">Team Impact:</span> {impact}
                </p>
              </div>
            </div>
          </div>
          
          {/* Diagram Side */}
          <div className="w-80 flex items-center">
            <div className="w-full h-64 bg-muted/30 rounded-xl border border-dashed border-muted-foreground/30 flex items-center justify-center">
              <p className="text-sm text-muted-foreground text-center italic">
                Workflow diagram<br />placeholder
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <CardHeader className="pb-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold text-foreground mb-2">{title}</CardTitle>
              <Badge variant="secondary" className="text-xs font-medium">
                {tools}
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0 space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">The Problem:</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{problem}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-2">The Magic:</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{magic}</p>
          </div>
          
          <div className="space-y-3 pt-2">
            <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm font-medium text-primary">
                <span className="font-semibold">Success Metric:</span> {metric}
              </p>
            </div>
            
            <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-sm font-medium text-accent">
                <span className="font-semibold">Team Impact:</span> {impact}
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/30">
            <p className="text-xs text-muted-foreground text-center italic">
              Workflow diagram placeholder
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};