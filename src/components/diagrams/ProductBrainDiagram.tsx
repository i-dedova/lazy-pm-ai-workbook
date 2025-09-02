import { ReactFlow, Node, Edge, Background, Controls } from '@xyflow/react';
import { Brain, Database, Zap, Target } from 'lucide-react';

interface ProductBrainDiagramProps {
  isPreview?: boolean;
}

export const ProductBrainDiagram = ({ isPreview = false }: ProductBrainDiagramProps) => {
  const nodes: Node[] = [
    {
      id: '1',
      type: 'default',
      position: { x: 50, y: 50 },
      data: { 
        label: (
          <div className="flex items-center gap-2 text-xs">
            <Database className="h-4 w-4 text-blue-500" />
            Obsidian Vault
          </div>
        )
      },
      style: { 
        background: 'hsl(var(--primary) / 0.1)',
        border: '1px solid hsl(var(--primary) / 0.3)',
        fontSize: isPreview ? '10px' : '12px',
        width: isPreview ? 100 : 140,
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
            <Brain className="h-4 w-4 text-purple-500" />
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
      position: { x: 125, y: 150 },
      data: {
        label: (
          <div className="flex items-center gap-2 text-xs">
            <Target className="h-4 w-4 text-green-500" />
            95% Less Setup
          </div>
        )
      },
      style: {
        background: 'hsl(var(--highlight) / 0.1)',
        border: '1px solid hsl(var(--highlight) / 0.3)',
        fontSize: isPreview ? '10px' : '12px',
        width: isPreview ? 120 : 160,
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