import React, { useCallback, useMemo } from 'react';
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

// Custom Node Components
const ObsidianNode = ({ data }: { data: any }) => (
  <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-4 shadow-elegant min-w-[200px]">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 rounded-full bg-primary/60"></div>
      <h3 className="font-semibold text-foreground text-sm">Obsidian Vault</h3>
    </div>
    <div className="space-y-2">
      {data.items?.map((item: string, idx: number) => (
        <div key={idx} className="text-xs text-muted-foreground bg-secondary/50 rounded-md px-2 py-1">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const ClaudeNode = ({ data }: { data: any }) => (
  <div className="bg-gradient-accent backdrop-blur-sm rounded-2xl p-6 shadow-glow min-w-[250px] text-center">
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="w-4 h-4 rounded-full bg-accent-foreground/80"></div>
      <h3 className="font-bold text-accent-foreground text-lg">Claude Code</h3>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {data.tasks?.map((task: string, idx: number) => (
        <div key={idx} className="flex items-center gap-2 text-xs text-accent-foreground/90 bg-accent-foreground/10 rounded-lg px-2 py-1">
          <div className="w-2 h-2 rounded-full bg-accent-foreground/60"></div>
          {task}
        </div>
      ))}
    </div>
  </div>
);

const OutputNode = ({ data }: { data: any }) => (
  <div className="bg-card/80 backdrop-blur-sm border border-highlight/30 rounded-xl p-4 shadow-elegant min-w-[180px]">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 rounded-full bg-highlight/70"></div>
      <h3 className="font-semibold text-foreground text-sm">Outputs</h3>
    </div>
    <div className="space-y-2">
      {data.metrics?.map((metric: { label: string; time: string }, idx: number) => (
        <div key={idx} className="bg-highlight/10 rounded-lg p-2">
          <div className="text-xs font-medium text-foreground">{metric.label}</div>
          <div className="text-xs text-highlight font-semibold">{metric.time}</div>
        </div>
      ))}
    </div>
  </div>
);

const nodeTypes = {
  obsidian: ObsidianNode,
  claude: ClaudeNode,
  output: OutputNode,
};

interface RadialFlowProps {
  isPreview?: boolean;
}

export const RadialFlow = ({ isPreview = false }: RadialFlowProps) => {
  // Create nodes in radial pattern
  const initialNodes: Node[] = useMemo(() => {
    const centerX = 300;
    const centerY = 200;
    const radius = isPreview ? 120 : 180;
    
    const nodes: Node[] = [
      // Claude Code at center
      {
        id: 'claude-center',
        type: 'claude',
        position: { x: centerX - 125, y: centerY - 50 },
        data: {
          tasks: [
            'Cross-link tags',
            'Scan & correct',
            'Update notes',
            'Review performance',
            'Workflow commands',
            'Brainstorm ideas'
          ]
        },
        draggable: !isPreview,
      },
    ];

    // Add orbiting nodes if not preview
    if (!isPreview) {
      // Obsidian nodes (inputs) - top half
      const obsidianItems = [
        ['Strategy & KPIs', 'User Research'],
        ['Feature Context', 'Competitor Knowledge'],
        ['Claude Config', 'Templates & Workflows']
      ];

      obsidianItems.forEach((items, idx) => {
        const angle = (idx * 120 - 60) * (Math.PI / 180); // -60, 60, 180 degrees
        const x = centerX + Math.cos(angle) * radius - 100;
        const y = centerY + Math.sin(angle) * radius - 50;
        
        nodes.push({
          id: `obsidian-${idx}`,
          type: 'obsidian',
          position: { x, y },
          data: { items },
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
          data: { metrics: [metric] },
          draggable: true,
        });
      });
    }

    return nodes;
  }, [isPreview]);

  // Create curved edges connecting everything to center
  const initialEdges: Edge[] = useMemo(() => {
    if (isPreview) return [];

    const edges: Edge[] = [];

    // Connect Obsidian nodes to Claude
    for (let i = 0; i < 3; i++) {
      edges.push({
        id: `obsidian-${i}-to-claude`,
        source: `obsidian-${i}`,
        target: 'claude-center',
        type: 'smoothstep',
        animated: true,
        style: { 
          stroke: 'hsl(215 25% 27%)', 
          strokeWidth: 2,
          opacity: 0.7 
        },
      });
    }

    // Connect Claude to Output nodes
    for (let i = 0; i < 3; i++) {
      edges.push({
        id: `claude-to-output-${i}`,
        source: 'claude-center',
        target: `output-${i}`,
        type: 'smoothstep',
        animated: true,
        style: { 
          stroke: 'hsl(250 30% 60%)', 
          strokeWidth: 2,
          opacity: 0.7 
        },
      });
    }

    return edges;
  }, [isPreview]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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