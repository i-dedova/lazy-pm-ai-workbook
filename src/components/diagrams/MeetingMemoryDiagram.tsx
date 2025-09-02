import { ReactFlow, Node, Edge, Background, Controls } from '@xyflow/react';

interface MeetingMemoryDiagramProps {
  isPreview?: boolean;
}

export const MeetingMemoryDiagram = ({ isPreview = false }: MeetingMemoryDiagramProps) => {
  const baseSize = isPreview ? { width: 70, height: 45 } : { width: 160, height: 80 };
  const fontSize = isPreview ? '10px' : '14px';
  
  const nodes: Node[] = [
    {
      id: '1',
      type: 'default',
      position: isPreview ? { x: 10, y: 30 } : { x: 100, y: 100 },
      data: { 
        label: (
          <div className="text-center">
            <div className="font-medium text-red-600">🎤 Granola</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Recording</div>}
          </div>
        )
      },
      style: { 
        background: '#ffffff',
        border: '2px solid #ef4444',
        borderRadius: '12px',
        fontSize,
        ...baseSize,
        boxShadow: '0 2px 8px rgba(239, 68, 68, 0.15)'
      }
    },
    {
      id: '2', 
      type: 'default',
      position: isPreview ? { x: 90, y: 30 } : { x: 300, y: 100 },
      data: {
        label: (
          <div className="text-center">
            <div className="font-medium text-blue-600">💬 Claude</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Processing</div>}
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
      id: '3',
      type: 'default', 
      position: isPreview ? { x: 50, y: 85 } : { x: 200, y: 220 },
      data: {
        label: (
          <div className="text-center">
            <div className="font-medium text-green-600">✅ Actions</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Tracked</div>}
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
    }
  ];

  const edges: Edge[] = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'smoothstep',
      style: { 
        stroke: '#ef4444', 
        strokeWidth: 2,
        strokeDasharray: isPreview ? '3,3' : 'none'
      }
    },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      type: 'smoothstep',
      style: { 
        stroke: '#3b82f6', 
        strokeWidth: 2,
        strokeDasharray: isPreview ? '3,3' : 'none'
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