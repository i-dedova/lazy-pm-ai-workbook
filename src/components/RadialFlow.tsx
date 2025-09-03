import React, { useCallback, useMemo, useState, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Workflow scenarios that drive the connections
const WORKFLOWS = {
  artifact: {
    name: 'Generate Artifact',
    inputs: [0, 1, 2], // Read from config, features, strategy
    outputs: [1], // Creates artifacts
    color: 'hsl(250 30% 60%)'
  },
  crosslink: {
    name: 'Cross-link Notes',
    inputs: [2], // Uses config/templates
    outputs: [0], // Quick answers
    color: 'hsl(150 40% 50%)'
  },
  report: {
    name: 'Performance Report', 
    inputs: [0], // Scans strategy/KPIs
    outputs: [2], // Performance reports
    color: 'hsl(30 70% 55%)'
  }
};

// Custom Node Components
const ObsidianNode = ({ data }: { data: any }) => {
  const isActive = data.activeInputs?.includes(data.nodeIndex);
  
  return (
    <div className={`bg-card/80 backdrop-blur-sm border rounded-xl p-4 shadow-elegant min-w-[200px] transition-all duration-300 ${
      isActive ? 'border-primary/60 shadow-glow scale-105' : 'border-primary/20'
    }`}>
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
          isActive ? 'bg-primary animate-pulse' : 'bg-primary/60'
        }`}></div>
        <h3 className="font-semibold text-foreground text-sm">{data.title || 'Obsidian Vault'}</h3>
      </div>
      <div className="space-y-2">
        {data.items?.map((item: string, idx: number) => (
          <div key={idx} className={`text-xs rounded-md px-2 py-1 transition-all duration-300 ${
            isActive ? 'text-foreground bg-primary/20' : 'text-muted-foreground bg-secondary/50'
          }`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const ClaudeNode = ({ data }: { data: any }) => {
  const currentWorkflow = data.currentWorkflow;
  
  return (
    <div className="bg-gradient-accent backdrop-blur-sm rounded-2xl p-6 shadow-glow min-w-[280px] text-center relative overflow-hidden">
      {/* Workflow indicator */}
      {currentWorkflow && (
        <div className="absolute top-2 right-2 px-2 py-1 bg-accent-foreground/20 rounded-full">
          <span className="text-xs text-accent-foreground/80">{currentWorkflow}</span>
        </div>
      )}
      
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-4 h-4 rounded-full bg-accent-foreground/80 animate-pulse"></div>
        <h3 className="font-bold text-accent-foreground text-lg">Claude Code</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {data.tasks?.map((task: { name: string; active: boolean }, idx: number) => (
          <div key={idx} className={`flex items-center gap-2 text-xs rounded-lg px-2 py-1 transition-all duration-300 ${
            task.active 
              ? 'text-accent-foreground bg-accent-foreground/30 scale-105' 
              : 'text-accent-foreground/90 bg-accent-foreground/10'
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
  const isActive = data.activeOutputs?.includes(data.nodeIndex);
  
  return (
    <div className={`bg-card/80 backdrop-blur-sm border rounded-xl p-4 shadow-elegant min-w-[180px] transition-all duration-300 ${
      isActive ? 'border-highlight/60 shadow-glow scale-105' : 'border-highlight/30'
    }`}>
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
          isActive ? 'bg-highlight animate-pulse' : 'bg-highlight/70'
        }`}></div>
        <h3 className="font-semibold text-foreground text-sm">Outputs</h3>
      </div>
      <div className="space-y-2">
        {data.metrics?.map((metric: { label: string; time: string }, idx: number) => (
          <div key={idx} className={`rounded-lg p-2 transition-all duration-300 ${
            isActive ? 'bg-highlight/20' : 'bg-highlight/10'
          }`}>
            <div className="text-xs font-medium text-foreground">{metric.label}</div>
            <div className={`text-xs font-semibold transition-all duration-300 ${
              isActive ? 'text-highlight' : 'text-highlight/80'
            }`}>{metric.time}</div>
          </div>
        ))}
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
  const [currentWorkflow, setCurrentWorkflow] = useState<keyof typeof WORKFLOWS>('artifact');
  
  // Cycle through workflows every 4 seconds
  useEffect(() => {
    if (isPreview) return;
    
    const workflowKeys = Object.keys(WORKFLOWS) as (keyof typeof WORKFLOWS)[];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % workflowKeys.length;
      setCurrentWorkflow(workflowKeys[currentIndex]);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPreview]);

  // Create nodes in radial pattern with dynamic data
  const initialNodes: Node[] = useMemo(() => {
    const centerX = 300;
    const centerY = 200;
    const radius = isPreview ? 120 : 180;
    
    const workflow = WORKFLOWS[currentWorkflow];
    
    const nodes: Node[] = [
      // Claude Code at center
      {
        id: 'claude-center',
        type: 'claude',
        position: { x: centerX - 140, y: centerY - 60 },
        data: {
          currentWorkflow: workflow.name,
          tasks: [
            { name: 'Cross-link', active: currentWorkflow === 'crosslink' },
            { name: 'Scan & correct', active: currentWorkflow === 'crosslink' },
            { name: 'Generate', active: currentWorkflow === 'artifact' },
            { name: 'Review KPIs', active: currentWorkflow === 'report' },
            { name: 'Workflows', active: currentWorkflow === 'artifact' },
            { name: 'Brainstorm', active: currentWorkflow === 'artifact' }
          ]
        },
        draggable: !isPreview,
      },
    ];

    // Add orbiting nodes if not preview
    if (!isPreview) {
      // Obsidian nodes (inputs) - top half
      const obsidianData = [
        { title: 'Strategy Hub', items: ['Strategy & KPIs', 'User Research'] },
        { title: 'Context Vault', items: ['Feature Context', 'Competitor Knowledge'] },
        { title: 'Config Center', items: ['Claude Config', 'Templates & Workflows'] }
      ];

      obsidianData.forEach((data, idx) => {
        const angle = (idx * 120 - 60) * (Math.PI / 180); // -60, 60, 180 degrees
        const x = centerX + Math.cos(angle) * radius - 100;
        const y = centerY + Math.sin(angle) * radius - 50;
        
        nodes.push({
          id: `obsidian-${idx}`,
          type: 'obsidian',
          position: { x, y },
          data: { 
            ...data,
            nodeIndex: idx,
            activeInputs: workflow.inputs
          },
          draggable: true,
        });
      });

      // Output nodes - bottom positions
      const outputMetrics = [
        { label: 'Product Answers', time: '~1 min' },
        { label: 'Artifacts', time: '~30 mins' },
        { label: 'Performance Reports', time: '~60 mins' }
      ];

      outputMetrics.forEach((metric, idx) => {
        const angle = (idx * 60 + 210) * (Math.PI / 180); // 210, 270, 330 degrees
        const x = centerX + Math.cos(angle) * radius - 90;
        const y = centerY + Math.sin(angle) * radius - 40;
        
        nodes.push({
          id: `output-${idx}`,
          type: 'output',
          position: { x, y },
          data: { 
            metrics: [metric],
            nodeIndex: idx,
            activeOutputs: workflow.outputs
          },
          draggable: true,
        });
      });
    }

    return nodes;
  }, [isPreview, currentWorkflow]);

  // Create dynamic edges based on current workflow
  const initialEdges: Edge[] = useMemo(() => {
    if (isPreview) return [];

    const workflow = WORKFLOWS[currentWorkflow];
    const edges: Edge[] = [];

    // Connect active Obsidian nodes to Claude
    workflow.inputs.forEach(inputIdx => {
      edges.push({
        id: `obsidian-${inputIdx}-to-claude`,
        source: `obsidian-${inputIdx}`,
        target: 'claude-center',
        type: 'smoothstep',
        animated: true,
        style: { 
          stroke: workflow.color,
          strokeWidth: 3,
          opacity: 0.8
        },
      });
    });

    // Connect Claude to active Output nodes
    workflow.outputs.forEach(outputIdx => {
      edges.push({
        id: `claude-to-output-${outputIdx}`,
        source: 'claude-center',
        target: `output-${outputIdx}`,
        type: 'smoothstep',
        animated: true,
        style: { 
          stroke: workflow.color,
          strokeWidth: 3,
          opacity: 0.8
        },
      });
    });

    // Add inactive connections with lower opacity
    for (let i = 0; i < 3; i++) {
      if (!workflow.inputs.includes(i)) {
        edges.push({
          id: `obsidian-${i}-to-claude-inactive`,
          source: `obsidian-${i}`,
          target: 'claude-center',
          type: 'smoothstep',
          animated: false,
          style: { 
            stroke: 'hsl(215 25% 27%)', 
            strokeWidth: 1,
            opacity: 0.2 
          },
        });
      }
      
      if (!workflow.outputs.includes(i)) {
        edges.push({
          id: `claude-to-output-${i}-inactive`,
          source: 'claude-center',
          target: `output-${i}`,
          type: 'smoothstep',
          animated: false,
          style: { 
            stroke: 'hsl(215 25% 27%)', 
            strokeWidth: 1,
            opacity: 0.2 
          },
        });
      }
    }

    return edges;
  }, [isPreview, currentWorkflow]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  // Update nodes when workflow changes
  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const onConnect = useCallback(() => {}, []);

  if (isPreview) {
    // Simple preview version
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
    <div className="w-full h-[500px] bg-gradient-surface rounded-lg overflow-hidden">
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