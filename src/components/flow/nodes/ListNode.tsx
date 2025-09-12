import { Handle, Position } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { ListNodeData } from '../types';

export const ListNode = ({ data }: { data: ListNodeData }) => {
  const { title, sections, variant = 'primary', isPreview, nodeRef, isMobile, isTablet, isMobileLandscape, isTabletLandscape } = data;
  
  // Determine node size based on device and preview mode
  const nodeSize = isPreview ? 'xs' : (isMobile ? 'sm' : isTablet ? 'md' : 'lg');
  
  // Check if in zigzag mode (portrait orientations)
  const isZigzagMode = (isMobile && !isMobileLandscape) || (isTablet && !isTabletLandscape);
  
  // Determine font sizes based on device - matching CenterNode and RightNode
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
      {/* Preview mode: Simple right connector dot */}
      {isPreview && (
        <>
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

      <BaseNode variant={variant} size={nodeSize} ref={nodeRef}>
        <div className={`flex items-center justify-center ${isPreview ? 'h-full' : 'mb-3'}`}>
          <h3 className={`font-semibold text-foreground text-center ${getTitleFontSize()}`}>{title}</h3>
        </div>
        {!isPreview && (
          <div className="space-y-1">
            {sections?.map((section, idx) => (
            <div 
              key={idx} 
              className={`
                flex items-center justify-center ${getItemFontSize()} rounded-lg px-2 py-1 
                transition-all duration-300 relative
                ${section.active 
                  ? 'text-foreground bg-primary/20 border border-primary/40 scale-105' 
                  : 'text-muted-foreground bg-secondary/50'
                }
              `}
            >
              <span className="truncate text-center">{section.name}</span>
              
              {/* Right connector dot with handle */}
              <div 
                className={`
                  absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 
                  transition-all duration-500 ease-in-out z-10
                  ${section.active 
                    ? 'bg-primary border-primary shadow-md opacity-100 animate-pulse' 
                    : 'opacity-0'
                  }
                `}
                style={{ animationDelay: section.active ? '0ms' : undefined }}
              >
                {section.active && (
                  <Handle
                    type="source"
                    position={Position.Right}
                    id={`left-${idx}`}
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
            </div>
          ))}
          </div>
        )}
      </BaseNode>
      
      {/* Non-preview mode: Original handle */}
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