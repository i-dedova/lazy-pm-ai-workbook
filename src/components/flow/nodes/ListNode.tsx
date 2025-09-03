import { Handle, Position } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { ListNodeData } from '../types';

export const ListNode = ({ data }: { data: ListNodeData }) => {
  const { title, sections, variant = 'primary', isPreview } = data;
  const nodeSize = isPreview ? 'sm' : 'md';
  
  return (
    <>
      <BaseNode variant={variant} size={nodeSize}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-primary/60"></div>
          <h3 className={`font-bold text-foreground ${isPreview ? 'text-sm' : 'text-lg'}`}>{title}</h3>
        </div>
        <div className="space-y-1">
          {sections?.map((section, idx) => (
            <div 
              key={idx} 
              className={`
                flex items-center gap-2 ${isPreview ? 'text-xs' : 'text-sm'} rounded-lg px-2 py-1 
                transition-all duration-300
                ${section.active 
                  ? 'text-foreground bg-primary/20 border border-primary/40 scale-105' 
                  : 'text-muted-foreground bg-secondary/50'
                }
              `}
            >
              <div className={`
                w-1.5 h-1.5 rounded-full transition-all duration-300
                ${section.active ? 'bg-primary animate-pulse' : 'bg-primary/60'}
              `}></div>
              <span className="truncate">{section.name}</span>
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