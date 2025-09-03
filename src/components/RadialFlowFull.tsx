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
import { nodeTypes } from './RadialFlowNodes';
import { WORKFLOWS, ALL_VAULT_SECTIONS, ALL_CLAUDE_TASKS } from './RadialFlowTypes';

export const RadialFlowFull = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<keyof typeof WORKFLOWS | null>('answers');
  const isMobile = useIsMobile();

  const handleOutputClick = (outputType: string) => {
    const workflowKey = outputType as keyof typeof WORKFLOWS;
    setActiveWorkflow(activeWorkflow === workflowKey ? null : workflowKey);
  };

  const initialNodes: Node[] = useMemo(() => {
    const workflow = activeWorkflow ? WORKFLOWS[activeWorkflow] : null;
    const nodes: Node[] = [];

    // Output nodes - responsive positioning
    const outputs = [
      { outputType: 'answers', label: 'Product Answers', time: '~1 min' },
      { outputType: 'artifacts', label: 'Artifacts', time: '~30 mins' },
      { outputType: 'reports', label: 'Performance Reports', time: '~60 mins' }
    ];

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

    // Obsidian Vault - responsive positioning
    const obsidianX = isMobile ? 10 : 50;
    const obsidianY = 200;
    nodes.push({
      id: 'obsidian-vault',
      type: 'obsidian',
      position: { x: obsidianX, y: obsidianY },
      data: {
        sections: ALL_VAULT_SECTIONS.map(section => ({
          name: section,
          active: workflow?.vaultSections.includes(section) || false
        })),
        isPreview: false
      },
      draggable: true,
    });

    // Claude Code - responsive positioning
    const claudeX = isMobile ? 250 : 400;
    const claudeY = 200;
    nodes.push({
      id: 'claude-center',
      type: 'claude',
      position: { x: claudeX, y: claudeY },
      data: {
        tasks: ALL_CLAUDE_TASKS.map(task => ({
          name: task,
          active: workflow?.claudeTasks.includes(task) || false
        })),
        isPreview: false
      },
      draggable: true,
    });

    return nodes;
  }, [activeWorkflow, isMobile]);

  const initialEdges: Edge[] = useMemo(() => {
    const workflow = activeWorkflow ? WORKFLOWS[activeWorkflow] : null;
    const edges: Edge[] = [];

    // Vault <-> Claude (bidirectional collaboration)
    edges.push({
      id: 'vault-to-claude',
      source: 'obsidian-vault',
      target: 'claude-center',
      type: 'smoothstep',
      animated: !!workflow,
      style: { 
        stroke: workflow?.color || 'hsl(215 25% 27%)',
        strokeWidth: workflow ? 3 : 1,
        opacity: workflow ? 0.8 : 0.3
      },
    });

    edges.push({
      id: 'claude-to-vault',
      source: 'claude-center', 
      target: 'obsidian-vault',
      type: 'smoothstep',
      animated: !!workflow,
      style: { 
        stroke: workflow?.color || 'hsl(215 25% 27%)',
        strokeWidth: workflow ? 3 : 1,
        opacity: workflow ? 0.8 : 0.3
      },
    });

    // Claude -> Outputs
    for (let i = 0; i < 3; i++) {
      const outputTypes = ['answers', 'artifacts', 'reports'];
      const isActiveOutput = activeWorkflow === outputTypes[i];
      
      edges.push({
        id: `claude-to-output-${i}`,
        source: 'claude-center',
        target: `output-${i}`,
        type: 'smoothstep',
        animated: isActiveOutput,
        style: { 
          stroke: isActiveOutput ? workflow?.color : 'hsl(215 25% 27%)',
          strokeWidth: isActiveOutput ? 3 : 1,
          opacity: isActiveOutput ? 0.8 : 0.3
        },
      });
    }

    return edges;
  }, [activeWorkflow]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update nodes when activeWorkflow changes
  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const onConnect = useCallback(() => {}, []);

  return (
    <div className="w-full h-full md:h-[600px] bg-gradient-surface rounded-lg overflow-hidden relative">
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
        fitViewOptions={{ padding: 0.1 }}
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