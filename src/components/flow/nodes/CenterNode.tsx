import { BaseNode } from './BaseNode';
import { CenterNodeData } from '../types';

export const CenterNode = ({ data }: { data: CenterNodeData }) => {
  const { title, tasks } = data;
  
  return (
    <BaseNode variant="accent" className="text-center relative">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-4 h-4 rounded-full bg-accent-foreground/80"></div>
        <h3 className="font-bold text-accent-foreground text-lg">{title}</h3>
      </div>
      
      <div className="space-y-2">
        {tasks?.map((task, idx) => (
          <div 
            key={idx} 
            className={`
              flex items-center gap-2 text-sm rounded-lg px-3 py-2 
              transition-all duration-300
              ${task.active 
                ? 'text-accent-foreground bg-accent-foreground/30 scale-105 shadow-md' 
                : 'text-accent-foreground/80 bg-accent-foreground/10'
              }
            `}
          >
            <div className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${task.active ? 'bg-accent-foreground animate-pulse' : 'bg-accent-foreground/60'}
            `}></div>
            <span className="truncate">{task.name}</span>
          </div>
        ))}
      </div>
    </BaseNode>
  );
};