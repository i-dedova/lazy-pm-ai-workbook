import { Node, Edge } from '@xyflow/react';

export const meetingMemoryNodes: Node[] = [
  {
    id: 'meeting',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { 
      label: '🎙️ Meeting' 
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
    id: 'granola',
    position: { x: 150, y: 80 },
    data: { 
      label: '🍓 Granola\nRecording' 
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
    id: 'claude-memory',
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
    id: 'tracking',
    position: { x: 150, y: 160 },
    data: { 
      label: '📋 Promise\nTracking' 
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
    id: 'result-memory',
    type: 'output',
    position: { x: 450, y: 80 },
    data: { 
      label: '🎯 400% Better\nFollow-through' 
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

export const meetingMemoryEdges: Edge[] = [
  {
    id: 'meeting-granola',
    source: 'meeting',
    target: 'granola',
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'granola-tracking',
    source: 'granola',
    target: 'tracking',
    style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 }
  },
  {
    id: 'granola-claude',
    source: 'granola',
    target: 'claude-memory',
    style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'claude-result-memory',
    source: 'claude-memory',
    target: 'result-memory',
    style: { stroke: 'hsl(var(--highlight))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'tracking-result-memory',
    source: 'tracking',
    target: 'result-memory',
    style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1 }
  }
];