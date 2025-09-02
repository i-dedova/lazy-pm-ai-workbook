import { ReactFlow, Node, Edge, Background, Controls } from '@xyflow/react';

interface TechBridgeDiagramProps {
  isPreview?: boolean;
}

export const TechBridgeDiagram = ({ isPreview = false }: TechBridgeDiagramProps) => {
  const baseSize = isPreview ? { width: 60, height: 35 } : { width: 140, height: 70 };
  const fontSize = isPreview ? '9px' : '13px';
  
  const nodes: Node[] = [
    {
      id: '1',
      type: 'default',
      position: isPreview ? { x: 10, y: 15 } : { x: 50, y: 100 },
      data: { 
        label: (
          <div className="text-center">
            <div className="font-medium text-gray-700">🐙 GitHub</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Copilot</div>}
          </div>
        )
      },
      style: { 
        background: '#ffffff',
        border: '2px solid #6b7280',
        borderRadius: '8px',
        fontSize,
        ...baseSize,
        boxShadow: '0 2px 6px rgba(107, 114, 128, 0.15)'
      }
    },
    {
      id: '2', 
      type: 'default',
      position: isPreview ? { x: 80, y: 15 } : { x: 220, y: 100 },
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
        borderRadius: '8px',
        fontSize,
        ...baseSize,
        boxShadow: '0 2px 6px rgba(59, 130, 246, 0.15)'
      }
    },
    {
      id: '3',
      type: 'default', 
      position: isPreview ? { x: 150, y: 15 } : { x: 390, y: 100 },
      data: {
        label: (
          <div className="text-center">
            <div className="font-medium text-green-600">💬 Tech Q&A</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Real-time</div>}
          </div>
        )
      },
      style: {
        background: '#ffffff',
        border: '2px solid #10b981',
        borderRadius: '8px',
        fontSize,
        ...baseSize,
        boxShadow: '0 2px 6px rgba(16, 185, 129, 0.15)'
      }
    }
  ];

  const edges: Edge[] = [
    {
      id: 'e1-3',
      source: '1',
      target: '3',
      type: 'straight',
      style: { 
        stroke: '#6b7280', 
        strokeWidth: 2
      }
    },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      type: 'straight',
      style: { 
        stroke: '#3b82f6', 
        strokeWidth: 2
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