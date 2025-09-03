import React, { useMemo } from 'react';
import { ReactFlow, Background, Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useIsMobile } from '@/hooks/use-mobile';
import { nodeTypes } from './RadialFlowNodes';
import { ALL_VAULT_SECTIONS, ALL_CLAUDE_TASKS } from './RadialFlowTypes';

export const RadialFlowPreview = () => {
  const isMobile = useIsMobile();

  const nodes: Node[] = useMemo(() => {
    const nodes: Node[] = [];

    // Responsive positioning for preview
    const obsidianX = isMobile ? 20 : 50;
    const obsidianY = isMobile ? 20 : 120;
    const claudeX = isMobile ? 180 : 280;
    const claudeY = isMobile ? 20 : 120;

    // Obsidian Vault
    nodes.push({
      id: 'obsidian-vault',
      type: 'obsidian',
      position: { x: obsidianX, y: obsidianY },
      data: {
        sections: ALL_VAULT_SECTIONS.map(section => ({
          name: section,
          active: false
        })),
        isPreview: true
      },
      draggable: false,
    });

    // Claude Code
    nodes.push({
      id: 'claude-center',
      type: 'claude',
      position: { x: claudeX, y: claudeY },
      data: {
        tasks: ALL_CLAUDE_TASKS.map(task => ({
          name: task,
          active: false
        })),
        isPreview: true
      },
      draggable: false,
    });

    return nodes;
  }, [isMobile]);

  return (
    <div className={`w-full bg-gradient-surface overflow-hidden ${
      isMobile ? 'h-[120px]' : 'h-[180px]'
    }`}>
      <ReactFlow
        nodes={nodes}
        edges={[]}
        nodeTypes={nodeTypes}
        fitView={false}
        defaultViewport={isMobile ? { x: -20, y: 0, zoom: 0.6 } : { x: 0, y: 0, zoom: 1 }}
        attributionPosition="bottom-right"
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        zoomOnPinch={false}
        panOnDrag={false}
      >
        <Background color="hsl(220 13% 91%)" size={1} />
      </ReactFlow>
    </div>
  );
};