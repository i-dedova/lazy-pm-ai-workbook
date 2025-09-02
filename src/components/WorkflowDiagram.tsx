import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WorkflowDiagramProps {
  title: string;
  nodes: any[];
  edges: any[];
  metric: string;
  className?: string;
}

export const WorkflowDiagram = ({ title, nodes, edges, metric, className }: WorkflowDiagramProps) => {
  return (
    <Card className={`bg-card/80 border-border/50 hover:border-primary/30 transition-colors ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
        <CardDescription className="text-sm font-medium text-primary">{metric}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full rounded-lg border border-border/30 bg-muted/20">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            attributionPosition="bottom-left"
            proOptions={{ hideAttribution: true }}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            panOnDrag={false}
            className="workflow-diagram"
          >
            <Background color="hsl(var(--muted-foreground))" size={1} />
          </ReactFlow>
        </div>
      </CardContent>
    </Card>
  );
};