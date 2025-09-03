import { FlowWorkflow, FlowOutput } from '@/components/flow/types';

export const PRODUCT_BRAIN_WORKFLOWS: Record<string, FlowWorkflow> = {
  answers: {
    name: 'Quick Product Answers',
    leftSections: ['Strategy & KPIs', 'Feature Context', 'Competitor Knowledge'],
    centerTasks: ['Cross-link', 'Scan & correct'],
    color: 'hsl(150 40% 50%)'
  },
  artifacts: {
    name: 'Generate Artifacts', 
    leftSections: ['Feature Context', 'Templates & Workflows', 'User Research'],
    centerTasks: ['Generate', 'Workflows', 'Brainstorm'],
    color: 'hsl(250 30% 60%)'
  },
  reports: {
    name: 'Performance Reports',
    leftSections: ['Strategy & KPIs', 'Templates & Workflows'],
    centerTasks: ['Review KPIs', 'Scan & correct'],
    color: 'hsl(30 70% 55%)'
  }
};

export const PRODUCT_BRAIN_LEFT_SECTIONS = [
  'Strategy & KPIs',
  'User Research', 
  'Feature Context',
  'Competitor Knowledge',
  'Claude Config',
  'Templates & Workflows'
];

export const PRODUCT_BRAIN_CENTER_TASKS = [
  'Cross-link',
  'Scan & correct',
  'Generate', 
  'Review KPIs',
  'Workflows',
  'Brainstorm'
];

export const PRODUCT_BRAIN_OUTPUTS: FlowOutput[] = [
  { outputType: 'answers', label: 'Product Answers', time: '~1 min' },
  { outputType: 'artifacts', label: 'Artifacts', time: '~30 mins' },
  { outputType: 'reports', label: 'Performance Reports', time: '~60 mins' }
];