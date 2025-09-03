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
  
  // Add tablet detection for better responsive behavior
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkTablet();
    window.addEventListener('resize', checkTablet);
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  const handleOutputClick = useCallback((outputType: string) => {
    const newActiveWorkflow = activeWorkflow === outputType ? null : outputType;
    setActiveWorkflow(newActiveWorkflow);
  }, [activeWorkflow]);

  const initialNodes: Node[] = useMemo(() => {
    const workflow = activeWorkflow ? workflowData[activeWorkflow] : null;
    const nodes: Node[] = [];

    // Output nodes - responsive positioning with better spacing
    const baseY = 50;
    const spacing = isMobile ? 180 : isTablet ? 250 : 300;
    const startX = isMobile ? 50 : isTablet ? 100 : 150;

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
        draggable: false,
        zIndex: isActiveOutput ? 1000 : 1,
      });
    });

    // Left node - responsive positioning with better spacing
    const leftX = isMobile ? 50 : isTablet ? 100 : 150;
    const leftY = isMobile ? 280 : 320;
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
      draggable: false,
    });

    // Center node - responsive positioning with better spacing
    const centerX = isMobile ? 300 : isTablet ? 400 : 500;
    const centerY = isMobile ? 280 : 320;
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
      draggable: false,
    });

    return nodes;
  }, [activeWorkflow, isMobile, isTablet, workflowData, allLeftSections, allCenterTasks, outputs, handleOutputClick]);

  const initialEdges: Edge[] = useMemo(() => {
    return [];
  }, []);

  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  // Update nodes when activeWorkflow changes
  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  return (
    <div className={`w-full h-full md:h-[600px] bg-gradient-surface rounded-lg overflow-hidden relative ${
      isMobile ? 'mx-4' : ''
    }`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        proOptions={{ hideAttribution: true }}
        className="rounded-lg"
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        panOnDrag={true}
        zoomOnScroll={true}
        zoomOnPinch={true}
        fitViewOptions={{ 
          padding: isMobile ? 0.2 : 0.15,
          maxZoom: 2.0,
          minZoom: 0.3
        }}
      >
        <Background 
          color="hsl(220 13% 91%)" 
          size={2}
          gap={20}
        />
        <Controls 
          className="!bg-card/80 !border-border/50 !backdrop-blur-sm !rounded-lg !shadow-lg"
          showInteractive={false}
          showZoom={true}
          showFitView={true}
          fitViewOptions={{
            padding: isMobile ? 0.2 : 0.15,
            maxZoom: 2.0,
            minZoom: 0.3
          }}
        />
      </ReactFlow>
    </div>
  );
};