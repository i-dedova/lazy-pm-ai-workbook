import React from 'react';
import { FlowContainer } from './flow/FlowContainer';
import { 
  PRODUCT_BRAIN_WORKFLOWS,
  PRODUCT_BRAIN_LEFT_SECTIONS,
  PRODUCT_BRAIN_CENTER_TASKS,
  PRODUCT_BRAIN_OUTPUTS
} from '@/data/workflows';

interface RadialFlowProps {
  isPreview?: boolean;
}

export const RadialFlow = ({ isPreview = false }: RadialFlowProps) => {
  return (
    <FlowContainer
      isPreview={isPreview}
      workflowData={PRODUCT_BRAIN_WORKFLOWS}
      allLeftSections={PRODUCT_BRAIN_LEFT_SECTIONS}
      allCenterTasks={PRODUCT_BRAIN_CENTER_TASKS}
      outputs={PRODUCT_BRAIN_OUTPUTS}
    />
  );
};