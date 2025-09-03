import { BaseNode } from './BaseNode';
import { OutputNodeData } from '../types';

export const OutputNode = ({ data }: { data: OutputNodeData }) => {
  const { outputType, label, time, isActive, onClick } = data;
  
  return (
    <div 
      onClick={() => onClick(outputType)}
      className={`
        cursor-pointer transition-all duration-300 hover:scale-105
        ${isActive ? 'scale-110' : 'scale-100'}
      `}
      style={{
        zIndex: isActive ? 1000 : 1,
        position: 'relative',
        transform: isActive ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.2)' : undefined
      }}
    >
      <BaseNode 
        size="sm"
        className={`
          border transition-all duration-300 w-[200px]
          ${isActive 
            ? 'border-highlight/60 shadow-glow' 
            : 'border-highlight/30 hover:border-highlight/50'
          }
        `}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`
            w-3 h-3 rounded-full transition-all duration-300
            ${isActive ? 'bg-highlight animate-pulse' : 'bg-highlight/70'}
          `}></div>
          <h3 className="font-semibold text-foreground text-sm">Output</h3>
        </div>
        <div className={`
          rounded-lg p-3 transition-all duration-300
          ${isActive ? 'bg-highlight/20' : 'bg-highlight/10'}
        `}>
          <div className="text-sm font-medium text-foreground">{label}</div>
          <div className={`
            text-xs font-semibold transition-all duration-300
            ${isActive ? 'text-highlight' : 'text-highlight/80'}
          `}>
            {time}
          </div>
        </div>
      </BaseNode>
    </div>
  );
};