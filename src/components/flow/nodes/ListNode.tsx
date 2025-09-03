import { BaseNode } from './BaseNode';
import { ListNodeData } from '../types';

export const ListNode = ({ data }: { data: ListNodeData }) => {
  const { title, sections, variant = 'primary' } = data;
  
  return (
    <BaseNode variant={variant}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-4 h-4 rounded-full bg-primary/60"></div>
        <h3 className="font-bold text-foreground text-lg">{title}</h3>
      </div>
      <div className="space-y-2">
        {sections?.map((section, idx) => (
          <div 
            key={idx} 
            className={`
              flex items-center gap-2 text-sm rounded-lg px-3 py-2 
              transition-all duration-300
              ${section.active 
                ? 'text-foreground bg-primary/20 border border-primary/40 scale-105' 
                : 'text-muted-foreground bg-secondary/50'
              }
            `}
          >
            <div className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${section.active ? 'bg-primary animate-pulse' : 'bg-primary/60'}
            `}></div>
            <span className="truncate">{section.name}</span>
          </div>
        ))}
      </div>
    </BaseNode>
  );
};