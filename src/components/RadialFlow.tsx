import React from 'react';
import { RadialFlowPreview } from './RadialFlowPreview';
import { RadialFlowFull } from './RadialFlowFull';
import { RadialFlowProps } from './RadialFlowTypes';

export const RadialFlow = ({ isPreview = false }: RadialFlowProps) => {
  if (isPreview) {
    return <RadialFlowPreview />;
  }

  return <RadialFlowFull />;
};