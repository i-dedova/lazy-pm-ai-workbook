import { ReactFlow, Node, Edge, Background, Controls } from '@xyflow/react';
import { Github, Code, Search, Zap } from 'lucide-react';

interface TechBridgeDiagramProps {
  isPreview?: boolean;
}

export const TechBridgeDiagram = ({ isPreview = false }: TechBridgeDiagramProps) => {
  const nodes: Node[] = [
    {
      id: '1',
      type: 'default',
      position: { x: 50, y: 50 },
      data: { 
        label: (
          <div className="flex items-center gap-2 text-xs">
            <Github className="h-4 w-4 text-gray-600" />
            GitHub Copilot
          </div>
        )
      },
      style: { 
        background: 'hsl(var(--primary) / 0.1)',
        border: '1px solid hsl(var(--primary) / 0.3)',
        fontSize: isPreview ? '10px' : '12px',
        width: isPreview ? 110 : 150,
        height: isPreview ? 40 : 60
      }
    },
    {
      id: '2', 
      type: 'default',
      position: { x: 200, y: 50 },
      data: {
        label: (
          <div className="flex items-center gap-2 text-xs">
            <Search className="h-4 w-4 text-blue-500" />
            Repository Map
          </div>
        )
      },
      style: {
        background: 'hsl(var(--accent) / 0.1)',
        border: '1px solid hsl(var(--accent) / 0.3)',
        fontSize: isPreview ? '10px' : '12px',
        width: isPreview ? 110 : 150,
        height: isPreview ? 40 : 60
      }
    },
    {
      id: '3',
      type: 'default', 
      position: { x: 125, y: 150 },
      data: {
        label: (
          <div className="flex items-center gap-2 text-xs">
            <Zap className="h-4 w-4 text-yellow-500" />
            90% Faster Answers
          </div>
        )
      },
      style: {
        background: 'hsl(var(--highlight) / 0.1)',
        border: '1px solid hsl(var(--highlight) / 0.3)',
        fontSize: isPreview ? '10px' : '12px',
        width: isPreview ? 130 : 170,
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