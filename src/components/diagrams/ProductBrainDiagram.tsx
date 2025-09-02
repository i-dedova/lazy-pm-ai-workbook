import { ReactFlow, Node, Edge, Background, Controls } from '@xyflow/react';

interface ProductBrainDiagramProps {
  isPreview?: boolean;
}

export const ProductBrainDiagram = ({ isPreview = false }: ProductBrainDiagramProps) => {
  const baseSize = isPreview ? { width: 80, height: 50 } : { width: 180, height: 80 };
  const fontSize = isPreview ? '11px' : '14px';
  
  const nodes: Node[] = [
    {
      id: '1',
      type: 'default',
      position: isPreview ? { x: 10, y: 10 } : { x: 50, y: 50 },
      data: { 
        label: (
          <div className="text-center">
            <div className="font-medium text-blue-600">📋 AS24 Vault</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Knowledge Base</div>}
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
    },
    {
      id: '2', 
      type: 'default',
      position: isPreview ? { x: 120, y: 10 } : { x: 300, y: 50 },
      data: {
        label: (
          <div className="text-center">
            <div className="font-medium text-purple-600">🏷️ Smart Tags</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Auto-linking</div>}
          </div>
        )
      },
      style: {
        background: '#ffffff',
        border: '2px solid #8b5cf6',
        borderRadius: '12px',
        fontSize,
        ...baseSize,
        boxShadow: '0 2px 8px rgba(139, 92, 246, 0.15)'
      }
    },
    {
      id: '3',
      type: 'default', 
      position: isPreview ? { x: 10, y: 70 } : { x: 50, y: 180 },
      data: {
        label: (
          <div className="text-center">
            <div className="font-medium text-green-600">🧠 Claude Code</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Context Engine</div>}
          </div>
        )
      },
      style: {
        background: '#ffffff',
        border: '2px solid #10b981',
        borderRadius: '12px',
        fontSize,
        ...baseSize,
        boxShadow: '0 2px 8px rgba(16, 185, 129, 0.15)'
      }
    },
    {
      id: '4',
      type: 'default', 
      position: isPreview ? { x: 120, y: 70 } : { x: 300, y: 180 },
      data: {
        label: (
          <div className="text-center">
            <div className="font-medium text-orange-600">📖 PRDs</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Auto-generated</div>}
          </div>
        )
      },
      style: {
        background: '#ffffff',
        border: '2px solid #f97316',
        borderRadius: '12px',
        fontSize,
        ...baseSize,
        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.15)'
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
    },
    {
      id: 'e1-3',
      source: '1',
      target: '3',
      type: 'smoothstep',
      style: { 
        stroke: '#3b82f6', 
        strokeWidth: 2,
        strokeDasharray: isPreview ? '5,5' : 'none'
      }
    },
    {
      id: 'e2-4',
      source: '2',
      target: '4',
      type: 'smoothstep',
      style: { 
        stroke: '#8b5cf6', 
        strokeWidth: 2,
        strokeDasharray: isPreview ? '5,5' : 'none'
      }
    },
    {
      id: 'e3-4',
      source: '3',
      target: '4',
      type: 'smoothstep',
      style: { 
        stroke: '#10b981', 
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