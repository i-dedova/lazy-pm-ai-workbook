import { ReactFlow, Node, Edge, Background, Controls } from '@xyflow/react';
import { Mic, MessageSquare, CheckCircle, TrendingUp } from 'lucide-react';

interface MeetingMemoryDiagramProps {
  isPreview?: boolean;
}

export const MeetingMemoryDiagram = ({ isPreview = false }: MeetingMemoryDiagramProps) => {
  const nodes: Node[] = [
    {
      id: '1',
      type: 'default',
      position: { x: 50, y: 50 },
      data: { 
        label: (
          <div className="flex items-center gap-2 text-xs">
            <Mic className="h-4 w-4 text-red-500" />
            Granola
          </div>
        )
      },
      style: { 
        background: 'hsl(var(--primary) / 0.1)',
        border: '1px solid hsl(var(--primary) / 0.3)',
        fontSize: isPreview ? '10px' : '12px',
        width: isPreview ? 80 : 120,
        height: isPreview ? 40 : 60
      }
    },
    {
      id: '2', 
      type: 'default',
      position: { x: 180, y: 50 },
      data: {
        label: (
          <div className="flex items-center gap-2 text-xs">
            <MessageSquare className="h-4 w-4 text-blue-500" />
            Claude Code
          </div>
        )
      },
      style: {
        background: 'hsl(var(--accent) / 0.1)',
        border: '1px solid hsl(var(--accent) / 0.3)',
        fontSize: isPreview ? '10px' : '12px',
        width: isPreview ? 100 : 140,
        height: isPreview ? 40 : 60
      }
    },
    {
      id: '3',
      type: 'default', 
      position: { x: 50, y: 150 },
      data: {
        label: (
          <div className="flex items-center gap-2 text-xs">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Action Items
          </div>
        )
      },
      style: {
        background: 'hsl(var(--highlight) / 0.1)',
        border: '1px solid hsl(var(--highlight) / 0.3)',
        fontSize: isPreview ? '10px' : '12px',
        width: isPreview ? 100 : 140,
        height: isPreview ? 40 : 60
      }
    },
    {
      id: '4',
      type: 'default', 
      position: { x: 200, y: 150 },
      data: {
        label: (
          <div className="flex items-center gap-2 text-xs">
            <TrendingUp className="h-4 w-4 text-orange-500" />
            400% Better
          </div>
        )
      },
      style: {
        background: 'hsl(var(--muted) / 0.3)',
        border: '1px solid hsl(var(--muted-foreground) / 0.3)',
        fontSize: isPreview ? '10px' : '12px',
        width: isPreview ? 100 : 140,
        height: isPreview ? 40 : 60
      }
    }
  ];

  const edges: Edge[] = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'smoothstep',
      style: { stroke: 'hsl(var(--primary))' }
    },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      type: 'smoothstep',
      style: { stroke: 'hsl(var(--accent))' }
    },
    {
      id: 'e3-4',
      source: '3',
      target: '4',
      type: 'smoothstep',
      style: { stroke: 'hsl(var(--highlight))' }
    }
  ];

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView
      attributionPosition="bottom-left"
      nodesDraggable={!isPreview}
      nodesConnectable={!isPreview}
      elementsSelectable={!isPreview}
      style={{ background: 'transparent' }}
    >
      <Background />
      {!isPreview && <Controls />}
    </ReactFlow>
  );
};