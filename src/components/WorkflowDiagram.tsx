import { useState } from "react";
import { Expand } from "lucide-react";
import { RadialFlow } from "./RadialFlow";
import { useIsMobile } from "@/hooks/use-mobile";

interface WorkflowDiagramProps {
  type: "product-brain" | "meeting-memory" | "tech-bridge" | "data-wizard" | "voice-magic";
  isPreview?: boolean;
}

export const WorkflowDiagram = ({ type, isPreview = false }: WorkflowDiagramProps) => {
  const isMobile = useIsMobile();

  const renderDiagram = () => {
    switch (type) {
      case "product-brain":
        return <RadialFlow isPreview={isPreview} useStatic={!isPreview} />;
      case "meeting-memory":
        return <MeetingMemorySVG isPreview={isPreview} />;
      case "tech-bridge":
        return <TechBridgeSVG isPreview={isPreview} />;
      case "data-wizard":
        return <DataWizardSVG isPreview={isPreview} />;
      case "voice-magic":
        return <VoiceMagicSVG isPreview={isPreview} />;
      default:
        return <div className="flex items-center justify-center h-full text-muted-foreground">Diagram not available</div>;
    }
  };

  return (
    <div className={`relative w-full ${isPreview ? 'h-48 md:h-64' : 'h-full'} bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden`}>
      {/* Main diagram container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {renderDiagram()}
      </div>
      
      {/* Expansion hint - only show in preview mode */}
      {isPreview && (
        <div className="absolute bottom-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="flex items-center space-x-2 text-xs text-gray-600 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 shadow-sm">
            <span>Click to expand</span>
            <Expand className="w-3 h-3" />
          </div>
        </div>
      )}
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