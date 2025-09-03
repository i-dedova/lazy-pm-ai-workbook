import React from 'react';
import { FlowPreview } from './FlowPreview';
import { FlowFull } from './FlowFull';
import { FlowStatic } from './FlowStatic';
import { FlowProps } from './types';

interface FlowContainerProps extends FlowProps {
  isPreview?: boolean;
  useStatic?: boolean;
}

export const FlowContainer = ({ isPreview = false, useStatic = false, ...flowProps }: FlowContainerProps) => {
  if (isPreview) {
    return <FlowPreview {...flowProps} />;
  }

  if (useStatic) {
    return <FlowStatic {...flowProps} />;
  }

  return <FlowFull {...flowProps} />;
};