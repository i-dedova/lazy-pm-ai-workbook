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
      id: 'left-node',
      type: 'list',
      position: { x: isMobile ? 10 : 50, y: 50 },
      data: {
        title: 'Obsidian Vault',
        sections: allLeftSections.slice(0, 3).map(section => ({
          name: section,
          active: false
        })),
        isPreview: true
      },
      draggable: false,
    },
    {
      id: 'center-node',
      type: 'center',
      position: { x: isMobile ? 200 : 300, y: 50 },
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
      id: 'output-node',
      type: 'output',
      position: { x: isMobile ? 380 : 550, y: 80 },
      data: {
        ...outputs[0],
        isActive: false,
        onClick: () => {}
      },
      draggable: false,
    }
  ];

  const edges: Edge[] = [
    {
      id: 'left-to-center',
      source: 'left-node',
      target: 'center-node',
      type: 'smoothstep',
      animated: false,
      style: { stroke: 'hsl(215 25% 27%)', strokeWidth: 2, opacity: 0.6 }
    },
    {
      id: 'center-to-output',
      source: 'center-node',
      target: 'output-node',
      type: 'smoothstep',
      animated: false,
      style: { stroke: 'hsl(215 25% 27%)', strokeWidth: 2, opacity: 0.6 }
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-surface rounded-lg overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        fitViewOptions={{ 
          padding: isMobile ? 0.4 : 0.6,
          maxZoom: isMobile ? 0.5 : 0.6,
          minZoom: 0.3
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