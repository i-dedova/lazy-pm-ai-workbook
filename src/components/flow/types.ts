export interface FlowWorkflow {
  name: string;
  leftSections: string[];
  centerTasks: string[];
  color: string;
}

export interface FlowSection {
  name: string;
  active: boolean;
}

export interface FlowTask {
  name: string;
  active: boolean;
}

export interface FlowOutput {
  outputType: string;
  label: string;
  time: string;
}

export interface BaseNodeData {
  isPreview?: boolean;
}

export interface ListNodeData extends BaseNodeData {
  title: string;
  icon?: string;
  sections: FlowSection[];
  variant?: 'primary' | 'secondary';
}

export interface CenterNodeData extends BaseNodeData {
  title: string;
  tasks: FlowTask[];
}

export interface OutputNodeData extends BaseNodeData {
  outputType: string;
  label: string;
  time: string;
  isActive?: boolean;
  onClick: (outputType: string) => void;
}

export interface FlowProps {
  isPreview?: boolean;
  workflowData: Record<string, FlowWorkflow>;
  allLeftSections: string[];
  allCenterTasks: string[];
  outputs: FlowOutput[];
}