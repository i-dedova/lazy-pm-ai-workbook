import { ReactFlow, Node, Edge, Background, Controls } from '@xyflow/react';

interface MeetingMemoryDiagramProps {
  isPreview?: boolean;
}

export const MeetingMemoryDiagram = ({ isPreview = false }: MeetingMemoryDiagramProps) => {
  const baseSize = isPreview ? { width: 55, height: 35 } : { width: 130, height: 70 };
  const fontSize = isPreview ? '9px' : '13px';
  
  const nodes: Node[] = [
    {
      id: '1',
      type: 'default',
      position: isPreview ? { x: 5, y: 15 } : { x: 50, y: 100 },
      data: { 
        label: (
          <div className="text-center">
            <div className="font-medium text-red-600">🎙️ Granola</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Meeting Recorder</div>}
          </div>
        )
      },
      style: { 
        background: '#ffffff',
        border: '2px solid #ef4444',
        borderRadius: '8px',
        fontSize,
        ...baseSize,
        boxShadow: '0 2px 6px rgba(239, 68, 68, 0.15)'
      }
    },
    {
      id: '2', 
      type: 'default',
      position: isPreview ? { x: 70, y: 15 } : { x: 210, y: 100 },
      data: {
        label: (
          <div className="text-center">
            <div className="font-medium text-blue-600">🤖 Claude</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Process & Sort</div>}
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
      position: isPreview ? { x: 135, y: 15 } : { x: 370, y: 100 },
      data: {
        label: (
          <div className="text-center">
            <div className="font-medium text-green-600">✅ TODOs</div>
            {!isPreview && <div className="text-xs text-gray-600 mt-1">Daily Actions</div>}
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
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'straight',
      style: { 
        stroke: '#ef4444', 
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