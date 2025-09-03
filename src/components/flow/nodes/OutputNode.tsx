import { Handle, Position } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { OutputNodeData } from '../types';

export const OutputNode = ({ data }: { data: OutputNodeData }) => {
  const { outputType, label, time, isActive, onClick } = data;
  const nodeSize = data.isPreview ? 'sm' : 'md';
  
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ opacity: 0, pointerEvents: 'none' }}
      />
      <div 
        onClick={() => onClick(outputType)}
        className="cursor-pointer transition-all duration-300 hover:scale-105"
      >
        <BaseNode variant="primary" size={nodeSize}>
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-accent animate-pulse' : 'bg-accent/60'}`}></div>
            <h3 className={`font-bold text-foreground ${data.isPreview ? 'text-sm' : 'text-lg'}`}>{time}</h3>
          </div>
          <div className="space-y-1">
            <div 
              className={`
                flex items-center ${data.isPreview ? 'text-xs' : 'text-sm'} rounded-lg px-2 py-1 
                transition-all duration-300
                ${isActive 
                  ? 'text-accent bg-accent/20 border border-accent/40 scale-105' 
                  : 'text-accent/80 bg-accent/10'
                }
              `}
            >
              <span className="truncate font-medium">{label}</span>
            </div>
          </div>
        </BaseNode>
      </div>
    </>
  );
};