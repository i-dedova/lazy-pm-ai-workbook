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
  const isMobile = window.innerWidth < 768;
  const isPreview = data.isPreview;
  
  // Mobile collapsed preview - just show header
  if (isPreview && isMobile) {
    return (
      <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-3 shadow-elegant min-w-[160px]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary/60"></div>
          <h3 className="font-semibold text-foreground text-sm">Obsidian Vault</h3>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-elegant min-w-[220px] md:min-w-[280px]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-4 h-4 rounded-full bg-primary/60"></div>
        <h3 className="font-bold text-foreground text-lg">Obsidian Vault</h3>
      </div>
      <div className="space-y-2">
        {data.sections?.map((section: { name: string; active: boolean }, idx: number) => (
          <div key={idx} className={`flex items-center gap-2 text-sm rounded-lg px-3 py-2 transition-all duration-300 ${
            section.active 
              ? 'text-foreground bg-primary/20 border border-primary/40 scale-105' 
              : 'text-muted-foreground bg-secondary/50'
          }`}>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              section.active ? 'bg-primary animate-pulse' : 'bg-primary/60'
            }`}></div>
            <span className="truncate">{section.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ClaudeNode = ({ data }: { data: any }) => {
  const isMobile = window.innerWidth < 768;
  const isPreview = data.isPreview;
  
  // Mobile collapsed preview - just show header
  if (isPreview && isMobile) {
    return (
      <div className="bg-gradient-accent backdrop-blur-sm rounded-2xl p-3 shadow-glow min-w-[140px] text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent-foreground/80"></div>
          <h3 className="font-semibold text-accent-foreground text-sm">Claude Code</h3>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-accent backdrop-blur-sm rounded-2xl p-6 shadow-glow min-w-[220px] md:min-w-[280px] text-center relative">
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
            <span className="truncate">{task.name}</span>
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
      className={`bg-card/80 backdrop-blur-sm border rounded-xl p-4 shadow-elegant w-[200px] cursor-pointer transition-all duration-300 hover:scale-105 ${
        isActive ? 'border-highlight/60 shadow-glow scale-110' : 'border-highlight/30 hover:border-highlight/50'
      }`}
      style={{
        zIndex: isActive ? 1000 : 1,
        position: 'relative',
        transform: isActive ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.2)' : undefined
      }}
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

  // Create nodes in proper spaced layout: Outputs -> Vault <-> Claude
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

    const nodes: Node[] = [];

    // Add output nodes if not preview - positioned at top with proper spacing
    if (!isPreview) {
      const outputs = [
        { outputType: 'answers', label: 'Product Answers', time: '~1 min' },
        { outputType: 'artifacts', label: 'Artifacts', time: '~30 mins' },
        { outputType: 'reports', label: 'Performance Reports', time: '~60 mins' }
      ];

      // Different spacing for mobile vs desktop/tablet in expanded view
      const baseY = 30;
      const spacing = window.innerWidth < 768 ? 150 : 220; // Tight on mobile, proper spacing on desktop/tablet
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
    }

    // Obsidian Vault - Different spacing for mobile vs desktop in expanded view
    const obsidianX = isPreview ? 50 : (window.innerWidth < 768 ? 10 : 50);
    const obsidianY = isPreview ? (window.innerWidth < 768 ? 80 : 120) : 200;
    nodes.push({
      id: 'obsidian-vault',
      type: 'obsidian',
      position: { x: obsidianX, y: obsidianY },
      data: {
        sections: allVaultSections.map(section => ({
          name: section,
          active: workflow?.vaultSections.includes(section) || false
        })),
        isPreview
      },
      draggable: !isPreview,
    });

    // Claude Code - Different spacing for mobile vs desktop in expanded view
    const claudeX = isPreview ? (window.innerWidth < 768 ? 220 : 280) : (window.innerWidth < 768 ? 250 : 400);
    const claudeY = isPreview ? (window.innerWidth < 768 ? 80 : 120) : 200;
    nodes.push({
      id: 'claude-center',
      type: 'claude',
      position: { x: claudeX, y: claudeY },
      data: {
        tasks: allClaudeTasks.map(task => ({
          name: task,
          active: workflow?.claudeTasks.includes(task) || false
        })),
        isPreview
      },
      draggable: !isPreview,
    });

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
      <div className="w-full h-[180px] flex items-center justify-center bg-gradient-surface">
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
          fitViewOptions={{ padding: 0.1 }}
        >
          <Background color="hsl(220 13% 91%)" size={1} />
        </ReactFlow>
      </div>
    );
  }

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