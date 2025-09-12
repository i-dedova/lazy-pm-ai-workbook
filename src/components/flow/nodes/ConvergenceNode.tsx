import { Handle, Position } from '@xyflow/react';

interface ConvergenceNodeData {
  active?: boolean;
  isMobile?: boolean;
  isMobileLandscape?: boolean;
  isTablet?: boolean;
  isTabletLandscape?: boolean;
}

export const ConvergenceNode = ({ data }: { data: ConvergenceNodeData }) => {
  const { active = false, isMobile, isMobileLandscape, isTablet, isTabletLandscape } = data;
  
  // Determine if we're in zigzag mode (mobile portrait or tablet portrait)
  const isZigzagMode = (isMobile && !isMobileLandscape) || (isTablet && !isTabletLandscape);
  
  
  return (
    <>
      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
        style={{ 
          opacity: 0, 
          pointerEvents: 'none',
          left: '-4px'
        }}
      />
      
      {/* Convergence dot - small pulsating circle */}
      <div 
        className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ease-in-out ${
          active 
            ? 'bg-[#E09E47] dark:bg-highlight border-[#E09E47] dark:border-highlight shadow-lg animate-pulse opacity-100' 
            : 'opacity-0 bg-transparent border-transparent'
        }`} 
        style={{ 
          animationDelay: active ? '0ms' : undefined
        }} 
      />
      
      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        style={{ 
          opacity: 0, 
          pointerEvents: 'none',
          right: '-4px'
        }}
      />
      
      {/* Bottom handle for zigzag mode (portrait modes) */}
      {isZigzagMode && (
        <Handle
          type="target"
          position={Position.Bottom}
          id="convergence-bottom"
          style={{ 
            opacity: 0, 
            pointerEvents: 'none',
            bottom: '-4px'
          }}
        />
      )}
    </>
  );
};