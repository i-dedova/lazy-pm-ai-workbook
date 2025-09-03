import React from 'react';
import { FlowPreview } from './FlowPreview';
import { FlowFull } from './FlowFull';
import { FlowProps } from './types';

export const FlowContainer = ({ isPreview = false, ...flowProps }: FlowProps) => {
  if (isPreview) {
    return <FlowPreview {...flowProps} />;
  }

  return <FlowFull {...flowProps} />;
};