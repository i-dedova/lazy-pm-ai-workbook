import { Node, Edge } from '@xyflow/react';

export const techBridgeNodes: Node[] = [
  {
    id: 'api-question',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { 
      label: '❓ API Question' 
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
    id: 'copilot',
    position: { x: 150, y: 80 },
    data: { 
      label: '👨‍💻 GitHub\nCopilot' 
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
    id: 'repo-map',
    position: { x: 300, y: 0 },
    data: { 
      label: '🗺️ Repository\nMap' 
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
    id: 'research',
    position: { x: 150, y: 160 },
    data: { 
      label: '🔍 Proactive\nResearch' 
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
    id: 'result-tech',
    type: 'output',
    position: { x: 450, y: 80 },
    data: { 
      label: '🎯 90% Faster\nTech Answers' 
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

export const techBridgeEdges: Edge[] = [
  {
    id: 'question-copilot',
    source: 'api-question',
    target: 'copilot',
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'copilot-research',
    source: 'copilot',
    target: 'research',
    style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 }
  },
  {
    id: 'copilot-repo',
    source: 'copilot',
    target: 'repo-map',
    style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'repo-result',
    source: 'repo-map',
    target: 'result-tech',
    style: { stroke: 'hsl(var(--highlight))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'research-result',
    source: 'research',
    target: 'result-tech',
    style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1 }
  }
];