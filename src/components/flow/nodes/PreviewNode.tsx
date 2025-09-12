import { Handle, Position } from '@xyflow/react';
import { BaseNode } from './BaseNode';

interface PreviewNodeData {
  title: string;
  showLeftConnector?: boolean;
  showRightConnector?: boolean;
}

export const PreviewNode = ({ data }: { data: PreviewNodeData }) => {
  const { title, showLeftConnector = true, showRightConnector = true } = data;

  return (
    <>
      {/* Left connector dot with handle */}
      {showLeftConnector && (
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

      <BaseNode
        size="md"
        className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
      >
        <div className="p-4">
          <h3 className="font-semibold text-foreground text-center text-sm">
            {title}
          </h3>
        </div>
      </BaseNode>

      {/* Right connector dot with handle */}
      {showRightConnector && (
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
    </>
  );
};