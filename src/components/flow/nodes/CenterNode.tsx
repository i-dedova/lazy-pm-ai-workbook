import { Handle, Position } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { CenterNodeData } from '../types';

export const CenterNode = ({ data }: { data: CenterNodeData }) => {
  const { title, tasks, isPreview } = data;
  const nodeSize = isPreview ? 'sm' : 'md';
  
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ opacity: 0, pointerEvents: 'none' }}
      />
      <BaseNode variant="accent" size={nodeSize} className="text-center relative">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-accent-foreground/80"></div>
          <h3 className={`font-bold text-accent-foreground ${isPreview ? 'text-sm' : 'text-lg'}`}>{title}</h3>
        </div>
        
        <div className="space-y-1">
          {tasks?.map((task, idx) => (
            <div 
              key={idx} 
              className={`
                flex items-center gap-2 ${isPreview ? 'text-xs' : 'text-sm'} rounded-lg px-2 py-1 
                transition-all duration-300
                ${task.active 
                  ? 'text-accent-foreground bg-accent-foreground/30 scale-105 shadow-md' 
                  : 'text-accent-foreground/80 bg-accent-foreground/10'
                }
              `}
            >
              <div className={`
                w-1.5 h-1.5 rounded-full transition-all duration-300
                ${task.active ? 'bg-accent-foreground animate-pulse' : 'bg-accent-foreground/60'}
              `}></div>
              <span className="truncate">{task.name}</span>
            </div>
          ))}
        </div>
      </BaseNode>
      <Handle
        type="source"
        position={Position.Right}
        style={{ opacity: 0, pointerEvents: 'none' }}
      />
    </>
  );
};