import React from 'react';
import {
  ReactFlow,
  Background,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useIsMobile } from '@/hooks/use-mobile';
import { nodeTypes } from './nodes';
import { FlowProps } from './types';

export const FlowPreview = ({ 
  workflowData, 
  allLeftSections, 
  allCenterTasks, 
  outputs 
}: FlowProps) => {
  const isMobile = useIsMobile();

  const nodes: Node[] = [
    {
      id: 'preview-left-node',
      type: 'list',
      position: { x: 50, y: 50 },
      data: {
        title: 'Obsidian Vault',
        sections: allLeftSections.slice(0, 2).map(section => ({
          name: section,
          active: false
        })),
        isPreview: true,
        variant: 'primary'
      },
      draggable: false,
    },
    {
      id: 'preview-center-node',
      type: 'center', 
      position: { x: 250, y: 50 },
      data: {
        title: 'Claude Code',
        tasks: allCenterTasks.slice(0, 2).map(task => ({
          name: task,
          active: false
        })),
        isPreview: true
      },
      draggable: false,
    },
    {
      id: 'preview-output-node',
      type: 'output',
      position: { x: 450, y: 80 },
      data: {
        ...outputs[0],
        isActive: false,
        onClick: () => {}
      },
      draggable: false,
    }
  ];

  const edges: Edge[] = [];


  return (
    <div 
      className="w-full bg-gradient-surface rounded-lg overflow-hidden"
      style={{ height: '280px' }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        fitViewOptions={{ 
          padding: 0.3,
          maxZoom: 1.0,
          minZoom: 0.4
        }}
      >
        <Background 
          color="hsl(220 13% 91%)" 
          size={1}
          gap={15}
        />
      </ReactFlow>
    </div>
  );
};