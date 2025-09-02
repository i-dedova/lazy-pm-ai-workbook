import { ReactFlow, Node, Edge, Background, Controls } from '@xyflow/react';
import { Mic, FileText, Zap, Clock } from 'lucide-react';

interface VoiceMagicDiagramProps {
  isPreview?: boolean;
}

export const VoiceMagicDiagram = ({ isPreview = false }: VoiceMagicDiagramProps) => {
  const nodes: Node[] = [
    {
      id: '1',
      type: 'default',
      position: { x: 50, y: 50 },
      data: { 
        label: (
          <div className="flex items-center gap-2 text-xs">
            <Mic className="h-4 w-4 text-red-500" />
            Wispr Flow
          </div>
        )
      },
      style: { 
        background: 'hsl(var(--primary) / 0.1)',
        border: '1px solid hsl(var(--primary) / 0.3)',
        fontSize: isPreview ? '10px' : '12px',
        width: isPreview ? 90 : 130,
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
            <FileText className="h-4 w-4 text-blue-500" />
            Obsidian
          </div>
        )
      },
      style: {
        background: 'hsl(var(--accent) / 0.1)',
        border: '1px solid hsl(var(--accent) / 0.3)',
        fontSize: isPreview ? '10px' : '12px',
        width: isPreview ? 90 : 130,
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
            <Zap className="h-4 w-4 text-yellow-500" />
            Voice to PRD
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
      position: { x: 180, y: 150 },
      data: {
        label: (
          <div className="flex items-center gap-2 text-xs">
            <Clock className="h-4 w-4 text-green-500" />
            80% Faster
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
      id: 'e1-3',
      source: '1',
      target: '3',
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