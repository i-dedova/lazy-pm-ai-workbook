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
  name: string;
  active: boolean;
}

export interface BaseNodeData {
  isPreview?: boolean;
  isMobile?: boolean;
  isTablet?: boolean;
  isMobileLandscape?: boolean;
  isTabletLandscape?: boolean;
}

export interface ListNodeData extends BaseNodeData {
  title: string;
  icon?: string;
  sections: FlowSection[];
  variant?: 'primary' | 'secondary';
  nodeRef?: React.RefObject<HTMLDivElement>;
}

export interface CenterNodeData extends BaseNodeData {
  title: string;
  tasks: FlowTask[];
  nodeRef?: React.RefObject<HTMLDivElement>;
}

export interface RightNodeData extends BaseNodeData {
  title: string;
  outputs: FlowOutput[];
  onOutputClick?: (outputName: string) => void;
  hasActiveWorkflow?: boolean;
}

export interface FlowProps {
  isPreview?: boolean;
  workflowData: Record<string, FlowWorkflow>;
  allLeftSections: string[];
  allCenterTasks: string[];
  allRightOutputs: string[];
  outputMappings?: Record<string, { leftSections: string[], centerTasks: string[] }>;
  workflowType?: "product-brain" | "meeting-memory" | "tech-bridge" | "data-wizard" | "voice-magic";
}