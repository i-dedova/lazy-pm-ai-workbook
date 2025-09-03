import React, { useCallback, useMemo, useState } from 'react';
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

// Workflow scenarios triggered by output clicks
const WORKFLOWS = {
  answers: {
    name: 'Quick Product Answers',
    vaultSections: ['Strategy & KPIs', 'Feature Context', 'Competitor Knowledge'],
    claudeTasks: ['Cross-link', 'Scan & correct'],
    color: 'hsl(150 40% 50%)'
  },
  artifacts: {
    name: 'Generate Artifacts', 
    vaultSections: ['Feature Context', 'Templates & Workflows', 'User Research'],
    claudeTasks: ['Generate', 'Workflows', 'Brainstorm'],
    color: 'hsl(250 30% 60%)'
  },
  reports: {
    name: 'Performance Reports',
    vaultSections: ['Strategy & KPIs', 'Templates & Workflows'],
    claudeTasks: ['Review KPIs', 'Scan & correct'],
    color: 'hsl(30 70% 55%)'
  }
};

// Custom Node Components
const ObsidianNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-elegant min-w-[280px]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-4 h-4 rounded-full bg-primary/60"></div>
        <h3 className="font-bold text-foreground text-lg">Obsidian Vault</h3>
      </div>
      <div className="space-y-2">
        {data.sections?.map((section: { name: string; active: boolean }, idx: number) => (
          <div key={idx} className={`text-sm rounded-lg px-3 py-2 transition-all duration-300 ${
            section.active 
              ? 'text-foreground bg-primary/20 border border-primary/40 scale-105' 
              : 'text-muted-foreground bg-secondary/50'
          }`}>
            {section.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const ClaudeNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-gradient-accent backdrop-blur-sm rounded-2xl p-6 shadow-glow min-w-[280px] text-center relative">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-4 h-4 rounded-full bg-accent-foreground/80"></div>
        <h3 className="font-bold text-accent-foreground text-lg">Claude Code</h3>
      </div>
      
      <div className="space-y-2">
        {data.tasks?.map((task: { name: string; active: boolean }, idx: number) => (
          <div key={idx} className={`flex items-center gap-2 text-sm rounded-lg px-3 py-2 transition-all duration-300 ${
            task.active 
              ? 'text-accent-foreground bg-accent-foreground/30 scale-105 shadow-md' 
              : 'text-accent-foreground/80 bg-accent-foreground/10'
          }`}>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              task.active ? 'bg-accent-foreground animate-pulse' : 'bg-accent-foreground/60'
            }`}></div>
            {task.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const OutputNode = ({ data }: { data: any }) => {
  const isActive = data.isActive;
  
  return (
    <div 
      onClick={() => data.onClick(data.outputType)}
      className={`bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-elegant min-w-[200px] cursor-pointer transition-all duration-300 hover:scale-105 ${
        isActive ? 'shadow-glow scale-105' : 'hover:border-highlight/50'
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
          isActive ? 'bg-highlight animate-pulse' : 'bg-highlight/70'
        }`}></div>
        <h3 className="font-semibold text-foreground text-sm">Output</h3>
      </div>
      <div className={`rounded-lg p-3 transition-all duration-300 ${
        isActive ? 'bg-highlight/20' : 'bg-highlight/10'
      }`}>
        <div className="text-sm font-medium text-foreground">{data.label}</div>
        <div className={`text-xs font-semibold transition-all duration-300 ${
          isActive ? 'text-highlight' : 'text-highlight/80'
        }`}>{data.time}</div>
      </div>
    </div>
  );
};

const nodeTypes = {
  obsidian: ObsidianNode,
  claude: ClaudeNode,
  output: OutputNode,
};

interface RadialFlowProps {
  isPreview?: boolean;
}

export const RadialFlow = ({ isPreview = false }: RadialFlowProps) => {
  const [activeWorkflow, setActiveWorkflow] = useState<keyof typeof WORKFLOWS | null>(isPreview ? null : 'answers');

  const handleOutputClick = (outputType: string) => {
    const workflowKey = outputType as keyof typeof WORKFLOWS;
    setActiveWorkflow(activeWorkflow === workflowKey ? null : workflowKey);
  };

  // Create nodes in linear horizontal layout: Vault <-> Claude -> Outputs
  const initialNodes: Node[] = useMemo(() => {
    const workflow = activeWorkflow ? WORKFLOWS[activeWorkflow] : null;
    
    const allVaultSections = [
      'Strategy & KPIs',
      'User Research', 
      'Feature Context',
      'Competitor Knowledge',
      'Claude Config',
      'Templates & Workflows'
    ];

    const allClaudeTasks = [
      'Cross-link',
      'Scan & correct',
      'Generate', 
      'Review KPIs',
      'Workflows',
      'Brainstorm'
    ];

    const nodes: Node[] = [
      // Obsidian Vault - Left
      {
        id: 'obsidian-vault',
        type: 'obsidian',
        position: { x: 50, y: 150 },
        data: {
          sections: allVaultSections.map(section => ({
            name: section,
            active: workflow?.vaultSections.includes(section) || false
          }))
        },
        draggable: !isPreview,
      },
      // Claude Code - Center  
      {
        id: 'claude-center',
        type: 'claude',
        position: { x: 400, y: 150 },
        data: {
          tasks: allClaudeTasks.map(task => ({
            name: task,
            active: workflow?.claudeTasks.includes(task) || false
          }))
        },
        draggable: !isPreview,
      }
    ];

    // Add output nodes if not preview - moved to top
    if (!isPreview) {
      const outputs = [
        { outputType: 'answers', label: 'Product Answers', time: '~1 min' },
        { outputType: 'artifacts', label: 'Artifacts', time: '~30 mins' },
        { outputType: 'reports', label: 'Performance Reports', time: '~60 mins' }
      ];

      outputs.forEach((output, idx) => {
        nodes.push({
          id: `output-${idx}`,
          type: 'output',
          position: { x: 150 + idx * 220, y: 20 },
          data: { 
            ...output,
            isActive: activeWorkflow === output.outputType,
            onClick: handleOutputClick
          },
          draggable: true,
        });
      });
    }

    return nodes;
  }, [isPreview, activeWorkflow]);

  // Create edges showing data flow
  const initialEdges: Edge[] = useMemo(() => {
    if (isPreview) return [];

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
  }, [isPreview, activeWorkflow]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update nodes when activeWorkflow changes
  React.useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const onConnect = useCallback(() => {}, []);

  if (isPreview) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-surface">
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
          zoomOnScroll={false}
          panOnScroll={false}
          zoomOnPinch={false}
          panOnDrag={false}
        >
          <Background color="hsl(220 13% 91%)" size={1} />
        </ReactFlow>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] bg-gradient-surface rounded-lg overflow-hidden relative">
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