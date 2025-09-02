import { Node, Edge } from '@xyflow/react';

export const productBrainNodes: Node[] = [
  {
    id: 'daily-work',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { 
      label: '📝 Daily Work' 
    },
    style: {
      background: 'hsl(var(--primary))',
      color: 'hsl(var(--primary-foreground))',
      border: '1px solid hsl(var(--primary))',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '8px'
    }
  },
  {
    id: 'obsidian',
    position: { x: 150, y: 80 },
    data: { 
      label: '🧠 Obsidian\nVault' 
    },
    style: {
      background: 'hsl(var(--accent))',
      color: 'hsl(var(--accent-foreground))',
      border: '1px solid hsl(var(--accent))',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '8px',
      whiteSpace: 'pre-line',
      textAlign: 'center'
    }
  },
  {
    id: 'claude',
    position: { x: 300, y: 0 },
    data: { 
      label: '🤖 Claude\nCode' 
    },
    style: {
      background: 'hsl(var(--highlight))',
      color: 'hsl(var(--highlight-foreground))',
      border: '1px solid hsl(var(--highlight))',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '8px',
      whiteSpace: 'pre-line',
      textAlign: 'center'
    }
  },
  {
    id: 'context',
    position: { x: 150, y: 160 },
    data: { 
      label: '⚡ Auto Context\nFeeding' 
    },
    style: {
      background: 'hsl(var(--secondary))',
      color: 'hsl(var(--secondary-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      fontSize: '11px',
      padding: '6px',
      whiteSpace: 'pre-line',
      textAlign: 'center'
    }
  },
  {
    id: 'result',
    type: 'output',
    position: { x: 450, y: 80 },
    data: { 
      label: '🎯 95% Less\nSetup Time' 
    },
    style: {
      background: 'hsl(var(--primary))',
      color: 'hsl(var(--primary-foreground))',
      border: '2px solid hsl(var(--primary))',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '8px',
      whiteSpace: 'pre-line',
      textAlign: 'center',
      fontWeight: 'bold'
    }
  }
];

export const productBrainEdges: Edge[] = [
  {
    id: 'work-obsidian',
    source: 'daily-work',
    target: 'obsidian',
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'obsidian-context',
    source: 'obsidian',
    target: 'context',
    style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 }
  },
  {
    id: 'obsidian-claude',
    source: 'obsidian',
    target: 'claude',
    style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'claude-result',
    source: 'claude',
    target: 'result',
    style: { stroke: 'hsl(var(--highlight))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'context-result',
    source: 'context',
    target: 'result',
    style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1 }
  }
];