import { useState } from "react";
import { Expand } from "lucide-react";
import { FlowFull } from "./flow/FlowFull";
import { 
  PRODUCT_BRAIN_WORKFLOWS,
  PRODUCT_BRAIN_LEFT_SECTIONS,
  PRODUCT_BRAIN_CENTER_TASKS,
  PRODUCT_BRAIN_RIGHT_OUTPUTS,
  OUTPUT_MAPPINGS,
  MEETING_MEMORY_WORKFLOWS,
  MEETING_MEMORY_LEFT_SECTIONS,
  MEETING_MEMORY_CENTER_TASKS,
  MEETING_MEMORY_RIGHT_OUTPUTS,
  MEETING_MEMORY_OUTPUT_MAPPINGS,
  TECH_BRIDGE_WORKFLOWS,
  TECH_BRIDGE_LEFT_SECTIONS,
  TECH_BRIDGE_CENTER_TASKS,
  TECH_BRIDGE_RIGHT_OUTPUTS,
  TECH_BRIDGE_OUTPUT_MAPPINGS,
  DATA_WIZARD_WORKFLOWS,
  DATA_WIZARD_LEFT_SECTIONS,
  DATA_WIZARD_CENTER_TASKS,
  DATA_WIZARD_RIGHT_OUTPUTS,
  DATA_WIZARD_OUTPUT_MAPPINGS,
  VOICE_MAGIC_WORKFLOWS,
  VOICE_MAGIC_LEFT_SECTIONS,
  VOICE_MAGIC_CENTER_TASKS,
  VOICE_MAGIC_RIGHT_OUTPUTS,
  VOICE_MAGIC_OUTPUT_MAPPINGS
} from '@/data/workflows';
import { useIsMobile } from "@/hooks/use-mobile";

interface WorkflowDiagramProps {
  type: "product-brain" | "meeting-memory" | "tech-bridge" | "data-wizard" | "voice-magic";
  isPreview?: boolean;
}

export const WorkflowDiagram = ({ type, isPreview = false }: WorkflowDiagramProps) => {
  const isMobile = useIsMobile();
  
  // Check if device is touch-based (mobile or tablet) - no hover capability
  const isTouchDevice = isMobile || (typeof window !== 'undefined' && 'ontouchstart' in window);

  const renderDiagram = () => {
    switch (type) {
      case "product-brain":
        // WorkflowDiagram now only handles full view
        const productBrainProps = {
          workflowData: PRODUCT_BRAIN_WORKFLOWS,
          allLeftSections: PRODUCT_BRAIN_LEFT_SECTIONS,
          allCenterTasks: PRODUCT_BRAIN_CENTER_TASKS,
          allRightOutputs: PRODUCT_BRAIN_RIGHT_OUTPUTS,
          outputMappings: OUTPUT_MAPPINGS,
          workflowType: "product-brain" as const
        };
        return <FlowFull {...productBrainProps} />;
      case "meeting-memory":
        const meetingMemoryProps = {
          workflowData: MEETING_MEMORY_WORKFLOWS,
          allLeftSections: MEETING_MEMORY_LEFT_SECTIONS,
          allCenterTasks: MEETING_MEMORY_CENTER_TASKS,
          allRightOutputs: MEETING_MEMORY_RIGHT_OUTPUTS,
          outputMappings: MEETING_MEMORY_OUTPUT_MAPPINGS,
          workflowType: "meeting-memory" as const
        };
        return <FlowFull {...meetingMemoryProps} />;
      case "tech-bridge":
        const techBridgeProps = {
          workflowData: TECH_BRIDGE_WORKFLOWS,
          allLeftSections: TECH_BRIDGE_LEFT_SECTIONS,
          allCenterTasks: TECH_BRIDGE_CENTER_TASKS,
          allRightOutputs: TECH_BRIDGE_RIGHT_OUTPUTS,
          outputMappings: TECH_BRIDGE_OUTPUT_MAPPINGS,
          workflowType: "tech-bridge" as const
        };
        return <FlowFull {...techBridgeProps} />;
      case "data-wizard":
        const dataWizardProps = {
          workflowData: DATA_WIZARD_WORKFLOWS,
          allLeftSections: DATA_WIZARD_LEFT_SECTIONS,
          allCenterTasks: DATA_WIZARD_CENTER_TASKS,
          allRightOutputs: DATA_WIZARD_RIGHT_OUTPUTS,
          outputMappings: DATA_WIZARD_OUTPUT_MAPPINGS,
          workflowType: "data-wizard" as const
        };
        return <FlowFull {...dataWizardProps} />;
      case "voice-magic":
        const voiceMagicProps = {
          workflowData: VOICE_MAGIC_WORKFLOWS,
          allLeftSections: VOICE_MAGIC_LEFT_SECTIONS,
          allCenterTasks: VOICE_MAGIC_CENTER_TASKS,
          allRightOutputs: VOICE_MAGIC_RIGHT_OUTPUTS,
          outputMappings: VOICE_MAGIC_OUTPUT_MAPPINGS,
          workflowType: "voice-magic" as const
        };
        return <FlowFull {...voiceMagicProps} />;
      default:
        return <div className="flex items-center justify-center h-full text-muted-foreground">Diagram not available</div>;
    }
  };

  // WorkflowDiagram is now only for full view
  const containerClass = (type === "product-brain" || type === "meeting-memory" || type === "tech-bridge" || type === "data-wizard" || type === "voice-magic")
    ? `relative w-full h-full bg-background rounded-lg overflow-hidden`
    : `relative w-full h-full bg-background rounded-lg overflow-hidden flex items-center justify-center`;

  return (
    <div className={containerClass}>
      {renderDiagram()}
    </div>
  );
};

const MeetingMemorySVG = ({ isPreview }: { isPreview: boolean }) => {
  const size = isPreview ? { width: 280, height: 160 } : { width: 600, height: 350 };
  
  return (
    <svg 
      width={size.width} 
      height={size.height} 
      viewBox={`0 0 ${size.width} ${size.height}`} 
      className="w-full h-full max-w-full max-h-full"
    >
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
      
      {/* Flow elements */}
      <g>
        {/* Granola */}
        <rect x="20" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="60" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">Granola</text>
        <text x="60" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">Auto-record</text>
        
        {/* Arrow */}
        <path d={`M 105 ${size.height/2} L 135 ${size.height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Claude */}
        <rect x="140" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="180" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">Claude</text>
        <text x="180" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">Process</text>
        
        {/* Arrow */}
        <path d={`M 225 ${size.height/2} L 255 ${size.height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Output */}
        <rect x="260" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="300" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">TODOs</text>
        <text x="300" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">Organized</text>
      </g>
    </svg>
  );
};

const TechBridgeSVG = ({ isPreview }: { isPreview: boolean }) => {
  const size = isPreview ? { width: 280, height: 160 } : { width: 600, height: 350 };
  
  return (
    <svg 
      width={size.width} 
      height={size.height} 
      viewBox={`0 0 ${size.width} ${size.height}`} 
      className="w-full h-full max-w-full max-h-full"
    >
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
      
      {/* Flow elements */}
      <g>
        {/* GitHub Copilot */}
        <rect x="20" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="60" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">Copilot</text>
        <text x="60" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">Code AI</text>
        
        {/* Arrow */}
        <path d={`M 105 ${size.height/2} L 135 ${size.height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Repository Map */}
        <rect x="140" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="180" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">Repo Map</text>
        <text x="180" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">Navigate</text>
        
        {/* Arrow */}
        <path d={`M 225 ${size.height/2} L 255 ${size.height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Tech Q&A */}
        <rect x="260" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="300" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">Tech Q&A</text>
        <text x="300" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">Answers</text>
      </g>
    </svg>
  );
};

const DataWizardSVG = ({ isPreview }: { isPreview: boolean }) => {
  const size = isPreview ? { width: 280, height: 160 } : { width: 600, height: 350 };
  
  return (
    <svg 
      width={size.width} 
      height={size.height} 
      viewBox={`0 0 ${size.width} ${size.height}`} 
      className="w-full h-full max-w-full max-h-full"
    >
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
      
      {/* Flow elements */}
      <g>
        {/* Comet Browser */}
        <rect x="20" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="60" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">Comet</text>
        <text x="60" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">Browser</text>
        
        {/* Arrow */}
        <path d={`M 105 ${size.height/2} L 135 ${size.height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Perplexity Pro */}
        <rect x="140" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="180" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">Perplexity</text>
        <text x="180" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">Search</text>
        
        {/* Arrow */}
        <path d={`M 225 ${size.height/2} L 255 ${size.height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Auto-Analysis */}
        <rect x="260" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="300" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">Analysis</text>
        <text x="300" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">Insights</text>
      </g>
    </svg>
  );
};

const VoiceMagicSVG = ({ isPreview }: { isPreview: boolean }) => {
  const size = isPreview ? { width: 280, height: 160 } : { width: 600, height: 350 };
  
  return (
    <svg 
      width={size.width} 
      height={size.height} 
      viewBox={`0 0 ${size.width} ${size.height}`} 
      className="w-full h-full max-w-full max-h-full"
    >
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
      
      {/* Flow elements */}
      <g>
        {/* Wispr Flow */}
        <rect x="20" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="60" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">Wispr</text>
        <text x="60" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">Voice</text>
        
        {/* Arrow */}
        <path d={`M 105 ${size.height/2} L 135 ${size.height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Claude */}
        <rect x="140" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="180" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">Claude</text>
        <text x="180" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">Structure</text>
        
        {/* Arrow */}
        <path d={`M 225 ${size.height/2} L 255 ${size.height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Obsidian */}
        <rect x="260" y={size.height/2 - 20} width="80" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="300" y={size.height/2 - 5} textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">Obsidian</text>
        <text x="300" y={size.height/2 + 8} textAnchor="middle" fontSize="10" fill="#64748b">PRD Ready</text>
      </g>
    </svg>
  );
};