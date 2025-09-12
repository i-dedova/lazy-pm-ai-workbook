import { FlowWorkflow } from '@/components/flow/types';

export const PRODUCT_BRAIN_WORKFLOWS: Record<string, FlowWorkflow> = {
  answers: {
    name: 'Quick Product Answers',
    leftSections: ['Strategy & OKRs', 'Feature Context', 'Competitor Intel'],
    centerTasks: ['Cross-link & Tag', 'Scan & Update'],
    color: 'hsl(150 40% 50%)'
  },
  artifacts: {
    name: 'Generate Artifacts', 
    leftSections: ['Feature Context', 'Artifact Templates', 'User Insights'],
    centerTasks: ['Generate Artifacts', 'Run Workflows', 'Brainstorm Ideas'],
    color: 'hsl(250 30% 60%)'
  },
  reports: {
    name: 'Performance Reports',
    leftSections: ['Strategy & OKRs', 'Funnels & KPIs'],
    centerTasks: ['Review KPIs', 'Scan & Update'],
    color: 'hsl(30 70% 55%)'
  }
};

export const PRODUCT_BRAIN_LEFT_SECTIONS = [
  'Claude Config',
  'Artifact Templates', 
  'Strategy & OKRs',
  'Feature Context',
  'User Insights',
  'Funnels & KPIs',
  'Competitor Intel',
  'Meeting Notes'
];

export const PRODUCT_BRAIN_CENTER_TASKS = [
  'Scan & Update',
  'Cross-link & Tag',
  'Run Workflows', 
  'Review KPIs',
  'Brainstorm Ideas',
  'Generate Artifacts'
];

export const PRODUCT_BRAIN_RIGHT_OUTPUTS = [
  'Up-to-date Docs',
  'Feature Answers',
  'Product Artifacts',
  'KPI Reports'
];

// Meeting Memory Workflow Data
export const MEETING_MEMORY_WORKFLOWS: Record<string, FlowWorkflow> = {
  updates: {
    name: 'Document Updates',
    leftSections: ['Calendar Sync', 'Meeting transcription', 'Obsidian Sync'],
    centerTasks: ['Proofread & Correct', 'Cross-link & Tag', 'Process & Sort'],
    color: 'hsl(200 50% 50%)'
  },
  todos: {
    name: 'Daily ToDo Generation',
    leftSections: ['Meeting transcription', 'Custom templates'],
    centerTasks: ['Process & Sort', 'Run Workflows'],
    color: 'hsl(120 40% 50%)'
  }
};

export const MEETING_MEMORY_LEFT_SECTIONS = [
  'Calendar Sync',
  'Meeting Transcription',
  'Custom Templates',
  'Obsidian Sync'
];

export const MEETING_MEMORY_CENTER_TASKS = [
  'Proofread & Correct',
  'Cross-link & Tag',
  'Process & Sort',
  'Run Workflows'
];

export const MEETING_MEMORY_RIGHT_OUTPUTS = [
  'Updated Docs',
  'Daily ToDo'
];

export const MEETING_MEMORY_OUTPUT_MAPPINGS: Record<string, { leftSections: string[], centerTasks: string[] }> = {
  'Updated Docs': {
    leftSections: ['Obsidian Sync', 'Meeting Transcription'],
    centerTasks: ['Proofread & Correct', 'Cross-link & Tag']
  },
  'Daily ToDo': {
    leftSections: ['Calendar Sync', 'Custom Templates'],
    centerTasks: ['Process & Sort', 'Run Workflows']
  }
};

// Tech Bridge Workflow Data
export const TECH_BRIDGE_WORKFLOWS: Record<string, FlowWorkflow> = {
  apis: {
    name: 'Understand APIs',
    leftSections: ['Repository Directory', 'Service Description'],
    centerTasks: ['Chat with Repository', 'Recent PRs'],
    color: 'hsl(200 50% 50%)'
  },
  tracking: {
    name: 'Check Tracking Triggers',
    leftSections: ['Repository Directory', 'Code Documentation'],
    centerTasks: ['Recent PRs', 'Code Review'],
    color: 'hsl(120 40% 50%)'
  }
};

export const TECH_BRIDGE_LEFT_SECTIONS = [
  'Repository Directory',
  'Service Description'
];

export const TECH_BRIDGE_CENTER_TASKS = [
  'Chat with Repository',
  'Recent PRs'
];

export const TECH_BRIDGE_RIGHT_OUTPUTS = [
  'Understand APIs',
  'Check Tracking Triggers'
];

export const TECH_BRIDGE_OUTPUT_MAPPINGS: Record<string, { leftSections: string[], centerTasks: string[] }> = {
  'Understand APIs': {
    leftSections: ['Service Description'],
    centerTasks: ['Chat with Repository']
  },
  'Check Tracking Triggers': {
    leftSections: ['Repository Directory'],
    centerTasks: ['Recent PRs']
  }
};

// Data Wizard Workflow Data
export const DATA_WIZARD_WORKFLOWS: Record<string, FlowWorkflow> = {
  incident: {
    name: 'Post-incident Analysis',
    leftSections: ['Check dashboards', 'Edit Google Sheets'],
    centerTasks: ['Data projections', 'seasonal analysis'],
    color: 'hsl(200 50% 50%)'
  },
  kpi: {
    name: 'KPI Reports',
    leftSections: ['Check dashboards', 'Download CSVs'],
    centerTasks: ['Calculate KPIs'],
    color: 'hsl(120 40% 50%)'
  },
  okr: {
    name: 'Weekly OKR Update',
    leftSections: ['Check dashboards', 'Download CSVs'],
    centerTasks: ['Calculate KPIs', 'A/B test analysis'],
    color: 'hsl(30 70% 55%)'
  },
  impact: {
    name: 'Impact Estimate',
    leftSections: ['Download CSVs', 'Edit Google Sheets'],
    centerTasks: ['Data projections', 'seasonal analysis'],
    color: 'hsl(280 50% 50%)'
  }
};

export const DATA_WIZARD_LEFT_SECTIONS = [
  'Check Dashboards',
  'Download CSVs',
  'Edit Google Sheets'
];

export const DATA_WIZARD_CENTER_TASKS = [
  'Calculate KPIs',
  'Data Projections',
  'Seasonal Analysis',
  'A/B Test Analysis'
];

export const DATA_WIZARD_RIGHT_OUTPUTS = [
  'Post-Incident Analysis',
  'KPI Reports',
  'Weekly OKR Update',
  'Impact Estimate'
];

export const DATA_WIZARD_OUTPUT_MAPPINGS: Record<string, { leftSections: string[], centerTasks: string[] }> = {
  'Post-Incident Analysis': {
    leftSections: ['Check Dashboards', 'Edit Google Sheets'],
    centerTasks: ['Data Projections', 'Seasonal Analysis']
  },
  'KPI Reports': {
    leftSections: ['Check Dashboards', 'Download CSVs'],
    centerTasks: ['Calculate KPIs']
  },
  'Weekly OKR Update': {
    leftSections: ['Check Dashboards', 'Download CSVs'],
    centerTasks: ['Calculate KPIs', 'A/B Test Analysis']
  },
  'Impact Estimate': {
    leftSections: ['Download CSVs', 'Edit Google Sheets'],
    centerTasks: ['Data Projections', 'Seasonal Analysis']
  }
};

// Voice Magic Workflow Data
export const VOICE_MAGIC_WORKFLOWS: Record<string, FlowWorkflow> = {
  ideas: {
    name: 'Ideas Captured',
    leftSections: ['Just Talk, A LOT'],
    centerTasks: ['Cross-device Notes'],
    color: 'hsl(200 50% 50%)'
  },
  artifacts: {
    name: 'Product Artifacts',
    leftSections: ['Snippet Copy-Paste'],
    centerTasks: ['Claude Workflows', 'Artifact Templates'],
    color: 'hsl(120 40% 50%)'
  }
};

export const VOICE_MAGIC_LEFT_SECTIONS = [
  'Just Talk, A LOT',
  'Snippet Copy-Paste'
];

export const VOICE_MAGIC_CENTER_TASKS = [
  'Cross-Device Notes',
  'Claude Workflows',
  'Artifact Templates'
];

export const VOICE_MAGIC_RIGHT_OUTPUTS = [
  'Ideas Captured',
  'Product Artifacts'
];

export const VOICE_MAGIC_OUTPUT_MAPPINGS: Record<string, { leftSections: string[], centerTasks: string[] }> = {
  'Ideas Captured': {
    leftSections: ['Just Talk, A LOT'],
    centerTasks: ['Cross-Device Notes']
  },
  'Product Artifacts': {
    leftSections: ['Snippet Copy-Paste'],
    centerTasks: ['Claude Workflows', 'Artifact Templates']
  }
};

export const OUTPUT_MAPPINGS: Record<string, { leftSections: string[], centerTasks: string[] }> = {
  'Up-to-date Docs': {
    leftSections: ['Claude Config', 'Feature Context', 'Meeting Notes'],
    centerTasks: ['Scan & Update', 'Cross-link & Tag', 'Run Workflows']
  },
  'Feature Answers': {
    leftSections: ['Feature Context', 'User Insights', 'Funnels & KPIs', 'Competitor Intel'],
    centerTasks: ['Run Workflows', 'Review KPIs', 'Brainstorm Ideas']
  },
  'Product Artifacts': {
    leftSections: ['Artifact Templates', 'Feature Context', 'User Insights', 'Funnels & KPIs'],
    centerTasks: ['Run Workflows', 'Generate Artifacts']
  },
  'KPI Reports': {
    leftSections: ['Strategy & OKRs', 'Funnels & KPIs', 'Competitor Intel'],
    centerTasks: ['Run Workflows', 'Review KPIs', 'Generate Artifacts']
  }
};