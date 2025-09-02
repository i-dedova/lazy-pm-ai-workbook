import { ReactFlow, Node, Edge, Background, Controls } from '@xyflow/react';

interface TechBridgeDiagramProps {
  isPreview?: boolean;
}

export const TechBridgeDiagram = ({ isPreview = false }: TechBridgeDiagramProps) => {
  const baseSize = isPreview ? { width: 80, height: 45 } : { width: 180, height: 80 };
  const fontSize = isPreview ? '10px' : '14px';
  
  const nodes: Node[] = [
    {
      id: '1',
      type: 'default',
      position: isPreview ? { x: 20, y: 30 } : { x: 150, y: 100 },
      data: { 
        label: (
          <div className="text-center">
            <div className="font-medium text-gray-700">⚙️ GitHub</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Copilot</div>}
          </div>
        )
      },
      style: { 
        background: '#ffffff',
        border: '2px solid #6b7280',
        borderRadius: '12px',
        fontSize,
        ...baseSize,
        boxShadow: '0 2px 8px rgba(107, 114, 128, 0.15)'
      }
    },
    {
      id: '2', 
      type: 'default',
      position: isPreview ? { x: 120, y: 30 } : { x: 400, y: 100 },
      data: {
        label: (
          <div className="text-center">
            <div className="font-medium text-blue-600">🗺️ Repo Map</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Navigation</div>}
          </div>
        )
      },
      style: {
        background: '#ffffff',
        border: '2px solid #3b82f6',
        borderRadius: '12px',
        fontSize,
        ...baseSize,
        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)'
      }
    }
  ];

  const edges: Edge[] = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'smoothstep',
      style: { 
        stroke: '#3b82f6', 
        strokeWidth: 2,
        strokeDasharray: isPreview ? '5,5' : 'none'
      }
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
      panOnDrag={!isPreview}
      zoomOnScroll={!isPreview}
      zoomOnPinch={!isPreview}
    >
      <Background 
        color="#e5e7eb" 
        size={isPreview ? 0.5 : 1}
        style={{ opacity: 0.3 }}
      />
      {!isPreview && <Controls />}
    </ReactFlow>
  );
};