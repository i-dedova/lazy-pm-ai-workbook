import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WorkflowCardProps {
  title: string;
  tools: string;
  problem: string;
  magic: string;
  metric: string;
  impact: string;
  icon: string;
}

export const WorkflowCard = ({ title, tools, problem, magic, metric, impact, icon }: WorkflowCardProps) => {
  return (
    <Card className="h-full bg-gradient-surface border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{icon}</span>
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
    </Card>
  );
};