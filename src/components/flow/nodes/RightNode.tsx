import { Handle, Position } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { RightNodeData } from '../types';

export const RightNode = ({ data }: { data: RightNodeData }) => {
  const { title, outputs, isPreview, onOutputClick, hasActiveWorkflow, isMobile, isTablet, isMobileLandscape, isTabletLandscape } = data;
  
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
      {/* Preview mode: Simple left connector dot */}
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

      <BaseNode variant="primary" size={nodeSize} className="text-center relative">
        <div className={`flex items-center justify-center ${isPreview ? 'h-full' : 'mb-3'}`}>
          <h3 className={`font-semibold text-foreground dark:text-highlight text-center ${getTitleFontSize()}`}>{title}</h3>
        </div>
        
        {!isPreview && (
          <div className="space-y-1">
            {outputs?.map((output, idx) => (
            <div 
              key={idx} 
              onClick={() => onOutputClick && onOutputClick(output.name)}
              className={`
                flex items-center justify-center ${getItemFontSize()} rounded-lg px-2 py-1 
                transition-all duration-300 cursor-pointer hover:scale-102 relative
                ${output.active 
                  ? 'text-[#E09E47] dark:text-highlight bg-[#E09E47]/30 dark:bg-highlight/30 border border-[#E09E47]/40 dark:border-highlight/40 scale-105 shadow-md' 
                  : 'text-foreground/80 dark:text-highlight/80 bg-muted dark:bg-highlight/10 hover:bg-muted/80 dark:hover:bg-highlight/20'
                }
              `}
              style={{
                animation: !output.active && !isPreview && !hasActiveWorkflow
                  ? `pulse-ring 3s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite ${idx * 0.5}s` 
                  : undefined
              }}
            >
              {/* Connector dot with handle - position changes based on mobile portrait zigzag layout */}
              <div 
                id={`connector-right-${idx}`}
                className={`
                  absolute ${isZigzagMode ? '-right-1' : '-left-1'} top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 
                  transition-all duration-500 ease-in-out z-10
                  ${output.active 
                    ? 'bg-[#E09E47] dark:bg-highlight border-[#E09E47] dark:border-highlight shadow-md opacity-100 animate-pulse' 
                    : 'opacity-0'
                  }
                `}
                style={{ animationDelay: output.active ? '0ms' : undefined }}
              >
                {output.active && (
                  <>
                    {/* Zigzag mode (portrait modes): source handle to connect TO convergence 1 */}
                    {isZigzagMode && (
                      <Handle
                        type="source"
                        position={Position.Right}
                        id={`right-source-${idx}`}
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
                    
                    {/* All other views: target handle to receive FROM convergence 2 */}
                    {!isZigzagMode && (
                      <Handle
                        type="target"
                        position={Position.Left}
                        id={`right-target-${idx}`}
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
                  </>
                )}
              </div>

              <span className="truncate text-center">{output.name}</span>
            </div>
          ))}
          </div>
        )}
      </BaseNode>
    </>
  );
};