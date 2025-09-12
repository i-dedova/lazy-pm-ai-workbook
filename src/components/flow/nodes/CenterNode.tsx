import { Handle, Position } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { CenterNodeData } from '../types';

export const CenterNode = ({ data }: { data: CenterNodeData }) => {
  const { title, tasks, isPreview, nodeRef, isMobile, isTablet, isMobileLandscape, isTabletLandscape } = data;
  
  // Determine if we're in zigzag mode (mobile portrait or tablet portrait)
  const isZigzagMode = (isMobile && !isMobileLandscape) || (isTablet && !isTabletLandscape);
  
  // Determine node size based on device and preview mode
  const nodeSize = isPreview ? 'xs' : (isMobile ? 'sm' : isTablet ? 'md' : 'lg');
  
  // Determine font sizes based on device
  const getTitleFontSize = () => {
    if (isPreview) return 'text-sm';
    if (isZigzagMode) return 'text-xl'; // Larger font for portrait modes
    if (isMobile) return 'text-base';
    if (isTablet) return 'text-lg'; 
    return 'text-xl'; // desktop
  };
  
  const getItemFontSize = () => {
    if (isPreview) return 'text-xs';
    if (isZigzagMode) return 'text-lg'; // Larger font for portrait modes
    if (isMobile) return 'text-sm';
    if (isTablet) return 'text-base';
    return 'text-lg'; // desktop
  };
  
  return (
    <>
      {/* Preview mode: Simple left and right connector dots */}
      {isPreview && (
        <>
          <div 
            className="absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 bg-highlight border-highlight shadow-md z-10"
          />
          <Handle
            type="target"
            position={Position.Left}
            style={{ 
              opacity: 0, 
              pointerEvents: 'none',
              left: '-4px'
            }}
          />
          <div 
            className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 bg-highlight border-highlight shadow-md z-10"
          />
          <Handle
            type="source"
            position={Position.Right}
            style={{ 
              opacity: 0, 
              pointerEvents: 'none',
              right: '-4px'
            }}
          />
        </>
      )}

      {/* Non-preview mode: Original handle */}
      {!isPreview && (
        <Handle
          type="target"
          position={Position.Left}
          style={{ opacity: 0, pointerEvents: 'none' }}
        />
      )}

      <BaseNode variant="accent" size={nodeSize} className="text-center relative" ref={nodeRef}>
        <div className={`flex items-center justify-center ${isPreview ? 'h-full' : 'mb-3'}`}>
          <h3 className={`font-semibold text-accent-foreground text-center ${getTitleFontSize()}`}>{title}</h3>
        </div>
        
        {!isPreview && (
          <div className="space-y-1">
            {tasks?.map((task, idx) => (
            <div 
              key={idx} 
              className={`
                flex items-center justify-center ${getItemFontSize()} rounded-lg px-2 py-1 
                transition-all duration-300 relative
                ${task.active 
                  ? 'text-accent-foreground bg-accent-foreground/30 scale-105 shadow-md' 
                  : 'text-accent-foreground/80 bg-accent-foreground/10'
                }
              `}
            >
              {/* Left connector dot with handle */}
              <div 
                className={`
                  absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 
                  transition-all duration-500 ease-in-out z-10
                  ${task.active 
                    ? 'bg-accent-foreground border-accent-foreground shadow-md opacity-100 animate-pulse' 
                    : 'opacity-0'
                  }
                `}
                style={{ animationDelay: task.active ? '0ms' : undefined }}
              >
                {task.active && (
                  <Handle
                    type="target"
                    position={Position.Left}
                    id={`center-left-${idx}`}
                    style={{ 
                      opacity: 0, 
                      pointerEvents: 'none',
                      width: '12px',
                      height: '12px',
                      border: 'none',
                      background: 'transparent'
                    }}
                  />
                )}
              </div>

              <span className="truncate text-center">{task.name}</span>
              
              {/* Right connector dot with handle - hidden in zigzag layout (portrait modes) */}
              {!isZigzagMode && (
                <div 
                  id={`connector-center-right-${idx}`}
                  className={`
                    absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 
                    transition-all duration-500 ease-in-out z-10
                    ${task.active 
                      ? 'bg-accent-foreground border-accent-foreground shadow-md opacity-100 animate-pulse' 
                      : 'opacity-0'
                    }
                  `}
                  style={{ animationDelay: task.active ? '0ms' : undefined }}
                >
                  {task.active && (
                    <Handle
                      type="source"
                      position={Position.Right}
                      id={`center-right-${idx}`}
                      style={{ 
                        opacity: 0, 
                        pointerEvents: 'none',
                        width: '12px',
                        height: '12px',
                        border: 'none',
                        background: 'transparent'
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
          </div>
        )}
      </BaseNode>
      
      {/* Non-preview mode: Original right handle */}
      {!isPreview && (
        <Handle
          type="source"
          position={Position.Right}
          style={{ opacity: 0, pointerEvents: 'none' }}
        />
      )}
    </>
  );
};