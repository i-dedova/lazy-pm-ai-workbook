export interface WorkflowType {
  name: string;
  vaultSections: string[];
  claudeTasks: string[];
  color: string;
}

export const WORKFLOWS: Record<string, WorkflowType> = {
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

export const ALL_VAULT_SECTIONS = [
  'Strategy & KPIs',
  'User Research', 
  'Feature Context',
  'Competitor Knowledge',
  'Claude Config',
  'Templates & Workflows'
];

export const ALL_CLAUDE_TASKS = [
  'Cross-link',
  'Scan & correct',
  'Generate', 
  'Review KPIs',
  'Workflows',
  'Brainstorm'
];

export interface RadialFlowProps {
  isPreview?: boolean;
}