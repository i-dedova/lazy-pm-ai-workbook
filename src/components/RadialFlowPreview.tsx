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

    // Responsive positioning for preview - show top halves properly
    const obsidianX = isMobile ? 30 : 50;
    const obsidianY = isMobile ? 60 : 80;  // Lower positioning to show more content
    const claudeX = isMobile ? 200 : 300;
    const claudeY = isMobile ? 60 : 80;

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
      isMobile ? 'h-[160px]' : 'h-[200px]'  // Increased height for better visibility
    }`}>
      <ReactFlow
        nodes={nodes}
        edges={[]}
        nodeTypes={nodeTypes}
        fitView={false}
        defaultViewport={isMobile ? { x: -30, y: -20, zoom: 0.7 } : { x: -20, y: -40, zoom: 0.8 }}
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