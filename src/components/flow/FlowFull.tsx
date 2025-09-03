import React, { useCallback, useMemo, useState, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useIsMobile } from '@/hooks/use-mobile';
import { nodeTypes } from './nodes';
import { FlowProps } from './types';

export const FlowFull = ({ 
  workflowData, 
  allLeftSections, 
  allCenterTasks, 
  outputs 
}: FlowProps) => {
  const [activeWorkflow, setActiveWorkflow] = useState<string | null>('answers');
  const isMobile = useIsMobile();

  const handleOutputClick = (outputType: string) => {
    setActiveWorkflow(activeWorkflow === outputType ? null : outputType);
  };

  const initialNodes: Node[] = useMemo(() => {
    const workflow = activeWorkflow ? workflowData[activeWorkflow] : null;
    const nodes: Node[] = [];

    // Output nodes - responsive positioning
    const baseY = 30;
    const spacing = isMobile ? 150 : 220;
    const startX = 20;

    outputs.forEach((output, idx) => {
      const isActiveOutput = activeWorkflow === output.outputType;
      
      nodes.push({
        id: `output-${idx}`,
        type: 'output',
        position: { x: startX + idx * spacing, y: baseY },
        data: { 
          ...output,
          isActive: isActiveOutput,
          onClick: handleOutputClick
        },
        draggable: true,
        zIndex: isActiveOutput ? 1000 : 1,
      });
    });

    // Left node - responsive positioning
    const leftX = isMobile ? 10 : 50;
    const leftY = 200;
    nodes.push({
      id: 'left-node',
      type: 'list',
      position: { x: leftX, y: leftY },
      data: {
        title: 'Obsidian Vault',
        sections: allLeftSections.map(section => ({
          name: section,
          active: workflow?.leftSections.includes(section) || false
        })),
        isPreview: false
      },
      draggable: true,
    });

    // Center node - responsive positioning
    const centerX = isMobile ? 250 : 400;
    const centerY = 200;
    nodes.push({
      id: 'center-node',
      type: 'center',
      position: { x: centerX, y: centerY },
      data: {
        title: 'Claude Code',
        tasks: allCenterTasks.map(task => ({
          name: task,
          active: workflow?.centerTasks.includes(task) || false
        })),
        isPreview: false
      },
      draggable: true,
    });

    return nodes;
  }, [activeWorkflow, isMobile, workflowData, allLeftSections, allCenterTasks, outputs]);

  const initialEdges: Edge[] = useMemo(() => {
    const workflow = activeWorkflow ? workflowData[activeWorkflow] : null;
    const edges: Edge[] = [];

    // Left <-> Center (bidirectional collaboration)
    edges.push({
      id: 'left-to-center',
      source: 'left-node',
      target: 'center-node',
      type: 'smoothstep',
      animated: !!workflow,
      style: { 
        stroke: workflow?.color || 'hsl(215 25% 27%)',
        strokeWidth: workflow ? 3 : 1,
        opacity: workflow ? 0.8 : 0.3
      },
    });

    edges.push({
      id: 'center-to-left',
      source: 'center-node', 
      target: 'left-node',
      type: 'smoothstep',
      animated: !!workflow,
      style: { 
        stroke: workflow?.color || 'hsl(215 25% 27%)',
        strokeWidth: workflow ? 3 : 1,
        opacity: workflow ? 0.8 : 0.3
      },
    });

    // Center -> Outputs
    outputs.forEach((output, i) => {
      const isActiveOutput = activeWorkflow === output.outputType;
      
      edges.push({
        id: `center-to-output-${i}`,
        source: 'center-node',
        target: `output-${i}`,
        type: 'smoothstep',
        animated: isActiveOutput,
        style: { 
          stroke: isActiveOutput ? workflow?.color : 'hsl(215 25% 27%)',
          strokeWidth: isActiveOutput ? 3 : 1,
          opacity: isActiveOutput ? 0.8 : 0.3
        },
      });
    });

    return edges;
  }, [activeWorkflow, workflowData, outputs]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update nodes when activeWorkflow changes
  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const onConnect = useCallback(() => {}, []);

  return (
    <div className={`w-full h-full md:h-[600px] bg-gradient-surface rounded-lg overflow-hidden relative ${
      isMobile ? 'mx-4' : ''
    }`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        proOptions={{ hideAttribution: true }}
        className="rounded-lg"
        fitViewOptions={{ 
          padding: isMobile ? 0.15 : 0.1,
          maxZoom: isMobile ? 0.8 : 1.2,
          minZoom: isMobile ? 0.6 : 0.5
        }}
      >
        <Background 
          color="hsl(220 13% 91%)" 
          size={2}
          gap={20}
        />
        <Controls 
          className="!bg-card/80 !border-border/50 !backdrop-blur-sm"
          showInteractive={false}
        />
      </ReactFlow>
    </div>
  );
};