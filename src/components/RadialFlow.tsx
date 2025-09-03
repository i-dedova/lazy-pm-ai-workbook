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
  useStatic?: boolean;
}

export const RadialFlow = ({ isPreview = false, useStatic = false }: RadialFlowProps) => {
  return (
    <FlowContainer
      isPreview={isPreview}
      useStatic={useStatic}
      workflowData={PRODUCT_BRAIN_WORKFLOWS}
      allLeftSections={PRODUCT_BRAIN_LEFT_SECTIONS}
      allCenterTasks={PRODUCT_BRAIN_CENTER_TASKS}
      outputs={PRODUCT_BRAIN_OUTPUTS}
    />
  );
};