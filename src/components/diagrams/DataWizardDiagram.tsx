import { Node, Edge } from '@xyflow/react';

export const dataWizardNodes: Node[] = [
  {
    id: 'data-need',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { 
      label: '📊 Data Need' 
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
    id: 'comet',
    position: { x: 150, y: 80 },
    data: { 
      label: '☄️ Comet\nBrowser' 
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
    id: 'perplexity',
    position: { x: 300, y: 0 },
    data: { 
      label: '🔮 Perplexity\nPro' 
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
    id: 'automation',
    position: { x: 150, y: 160 },
    data: { 
      label: '⚙️ Auto\nFiltering' 
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
    id: 'result-data',
    type: 'output',
    position: { x: 450, y: 80 },
    data: { 
      label: '🎯 85% Less\nData Grunt Work' 
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

export const dataWizardEdges: Edge[] = [
  {
    id: 'need-comet',
    source: 'data-need',
    target: 'comet',
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'comet-automation',
    source: 'comet',
    target: 'automation',
    style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 }
  },
  {
    id: 'comet-perplexity',
    source: 'comet',
    target: 'perplexity',
    style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'perplexity-result',
    source: 'perplexity',
    target: 'result-data',
    style: { stroke: 'hsl(var(--highlight))', strokeWidth: 2 },
    animated: true
  },
  {
    id: 'automation-result',
    source: 'automation',
    target: 'result-data',
    style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1 }
  }
];