import { Node, Edge } from '@xyflow/react';

export const voiceMagicNodes: Node[] = [
  {
    id: 'voice-note',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { 
      label: '🎤 Voice Note' 
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
    id: 'wispr',
    position: { x: 150, y: 80 },
    data: { 
      label: '🎧 Wispr\nFlow' 
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
    id: 'obsidian-voice',
    position: { x: 300, y: 0 },
    data: { 
      label: '🧠 Obsidian\nVault' 
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
    id: 'capture',
    position: { x: 150, y: 160 },
    data: { 
      label: '✨ Clean\nCapture' 
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
    id: 'result-voice',
    type: 'output',
    position: { x: 450, y: 80 },
    data: { 
      label: '🎯 80% Faster\nPRD Creation' 
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

export const voiceMagicEdges: Edge[] = [
  {
    id: 'voice-wispr',
    source: 'voice-note',
    target: 'wispr',
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'wispr-capture',
    source: 'wispr',
    target: 'capture',
    style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 }
  },
  {
    id: 'wispr-obsidian',
    source: 'wispr',
    target: 'obsidian-voice',
    style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'obsidian-result',
    source: 'obsidian-voice',
    target: 'result-voice',
    style: { stroke: 'hsl(var(--highlight))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'capture-result',
    source: 'capture',
    target: 'result-voice',
    style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1 }
  }
];