import { useState } from "react";
import { Expand } from "lucide-react";

interface WorkflowDiagramProps {
  type: "product-brain" | "meeting-memory" | "tech-bridge" | "data-wizard" | "voice-magic";
  isPreview?: boolean;
}

export const WorkflowDiagram = ({ type, isPreview = false }: WorkflowDiagramProps) => {
  const renderDiagram = () => {
    switch (type) {
      case "product-brain":
        return <ProductBrainSVG isPreview={isPreview} />;
      case "meeting-memory":
        return <MeetingMemorySVG isPreview={isPreview} />;
      case "tech-bridge":
        return <TechBridgeSVG isPreview={isPreview} />;
      case "data-wizard":
        return <DataWizardSVG isPreview={isPreview} />;
      case "voice-magic":
        return <VoiceMagicSVG isPreview={isPreview} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 relative group">
      {renderDiagram()}
      
      {/* Expansion hint - always visible on mobile/tablet, hover on desktop */}
      {isPreview && (
        <div className="absolute bottom-2 right-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-white px-2 py-1 rounded-md shadow-md flex items-center space-x-1 text-xs font-medium text-gray-600 border">
            <span>Detailed View</span>
            <Expand className="w-3 h-3" />
          </div>
        </div>
      )}
    </div>
  );
};

const ProductBrainSVG = ({ isPreview }: { isPreview: boolean }) => {
  const width = isPreview ? 300 : 700;
  const height = isPreview ? 150 : 400;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Main Flow */}
      <g>
        {/* Obsidian Vault - Left position in collapsed view */}
        <rect x="50" y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={isPreview ? 90 : 110} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">
          {isPreview ? "Obsidian" : "Obsidian Vault"}
        </text>
        {!isPreview && <text x="110" y="90" textAnchor="middle" fontSize="12" fill="#64748b">Knowledge Base</text>}
        
        {/* Claude - Middle position */}
        <rect x={isPreview ? width/2 - 40 : width/2 - 60} y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">
          {isPreview ? "Claude" : "Claude Code"}
        </text>
        {!isPreview && <text x={width/2} y="90" textAnchor="middle" fontSize="12" fill="#64748b">Context Engine</text>}
        
        {/* Generated Docs - Right position in collapsed view */}
        <rect x={isPreview ? width - 130 : width - 170} y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={isPreview ? width - 90 : width - 110} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">
          Generated Docs
        </text>
        {!isPreview && <text x={width - 110} y="90" textAnchor="middle" fontSize="12" fill="#64748b">PRDs, Stories</text>}
        
        {/* Arrows */}
        <path d={`M ${isPreview ? 130 : 170} ${isPreview ? height/2 : 85} L ${isPreview ? width/2 - 40 : width/2 - 60} ${isPreview ? height/2 : 85}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${isPreview ? width/2 + 40 : width/2 + 60} ${isPreview ? height/2 : 85} L ${isPreview ? width - 130 : width - 170} ${isPreview ? height/2 : 85}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>

      {/* Expanded Details - Show immediately when not preview */}
      {!isPreview && (
        <g>
          {/* Standardized 4 grey nodes - centrally aligned */}
          <rect x="140" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="190" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">#smart-tags</text>
          <text x="190" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Auto-linking</text>

          <rect x="260" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="310" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Templates</text>
          <text x="310" y="167" textAnchor="middle" fontSize="9" fill="#64748b">PRD, Stories</text>

          <rect x="380" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="430" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Cross-refs</text>
          <text x="430" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Auto-connections</text>

          <rect x="500" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="550" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Doc Types</text>
          <text x="550" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Strategy, Research</text>

          {/* Context Layer - consistent spacing */}
          <rect x="80" y="220" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x="350" y="240" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Interconnected Knowledge System</text>
          <text x="350" y="255" textAnchor="middle" fontSize="10" fill="#65a30d">Strategic tagging creates automatic connections across product areas</text>
          <text x="350" y="268" textAnchor="middle" fontSize="10" fill="#65a30d">Transform scattered notes into structured product documentation</text>
        </g>
      )}
      
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
};

const MeetingMemorySVG = ({ isPreview }: { isPreview: boolean }) => {
  const width = isPreview ? 300 : 700;
  const height = isPreview ? 150 : 400;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Main Flow */}
      <g>
        {/* Granola - Left position in collapsed view */}
        <rect x="50" y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={isPreview ? 90 : 110} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">Granola</text>
        {!isPreview && <text x="110" y="90" textAnchor="middle" fontSize="12" fill="#64748b">Auto-record</text>}
        
        {/* Claude - Middle position */}
        <rect x={isPreview ? width/2 - 40 : width/2 - 60} y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">Claude</text>
        {!isPreview && <text x={width/2} y="90" textAnchor="middle" fontSize="12" fill="#64748b">Process & Sort</text>}
        
        {/* Daily TODOs - Right position in collapsed view */}
        <rect x={isPreview ? width - 130 : width - 170} y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={isPreview ? width - 90 : width - 110} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">Daily TODOs</text>
        {!isPreview && <text x={width - 110} y="90" textAnchor="middle" fontSize="12" fill="#64748b">Action Items</text>}
        
        {/* Arrows */}
        <path d={`M ${isPreview ? 130 : 170} ${isPreview ? height/2 : 85} L ${isPreview ? width/2 - 40 : width/2 - 60} ${isPreview ? height/2 : 85}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${isPreview ? width/2 + 40 : width/2 + 60} ${isPreview ? height/2 : 85} L ${isPreview ? width - 130 : width - 170} ${isPreview ? height/2 : 85}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>

      {!isPreview && (
        <g>
          {/* Standardized 4 grey nodes - centrally aligned */}
          <rect x="140" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="190" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Smart Tags</text>
          <text x="190" y="167" textAnchor="middle" fontSize="9" fill="#64748b">#psc #research</text>

          <rect x="260" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="310" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Meeting Sync</text>
          <text x="310" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Auto-process</text>

          <rect x="380" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="430" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Folder Sort</text>
          <text x="430" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Organization</text>

          <rect x="500" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="550" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Action Items</text>
          <text x="550" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Track commitments</text>

          {/* Context Layer - consistent spacing */}
          <rect x="80" y="220" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x="350" y="240" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Meeting Memory System</text>
          <text x="350" y="255" textAnchor="middle" fontSize="10" fill="#65a30d">Auto-tracks commitments and action items across all meetings</text>
          <text x="350" y="268" textAnchor="middle" fontSize="10" fill="#65a30d">Never lose track of decisions or who committed to what</text>
        </g>
      )}
      
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
};

const TechBridgeSVG = ({ isPreview }: { isPreview: boolean }) => {
  const width = isPreview ? 300 : 700;
  const height = isPreview ? 150 : 380;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Main Flow */}
      <g>
        {/* GitHub Copilot - Left position in collapsed view */}
        <rect x="50" y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={isPreview ? 90 : 110} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">
          {isPreview ? "Copilot" : "GitHub Copilot"}
        </text>
        {!isPreview && <text x="110" y="90" textAnchor="middle" fontSize="12" fill="#64748b">Code Assistant</text>}
        
        {/* Repository Map - Middle position */}
        <rect x={isPreview ? width/2 - 40 : width/2 - 60} y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">
          {isPreview ? "Repo Map" : "Repository Map"}
        </text>
        {!isPreview && <text x={width/2} y="90" textAnchor="middle" fontSize="12" fill="#64748b">Code Navigation</text>}
        
        {/* Tech Q&A - Right position in collapsed view */}
        <rect x={isPreview ? width - 130 : width - 170} y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={isPreview ? width - 90 : width - 110} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">Tech Q&A</text>
        {!isPreview && <text x={width - 110} y="90" textAnchor="middle" fontSize="12" fill="#64748b">Real-time answers</text>}
        
        {/* Arrows */}
        <path d={`M ${isPreview ? 130 : 170} ${isPreview ? height/2 : 85} L ${isPreview ? width/2 - 40 : width/2 - 60} ${isPreview ? height/2 : 85}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${isPreview ? width/2 + 40 : width/2 + 60} ${isPreview ? height/2 : 85} L ${isPreview ? width - 130 : width - 170} ${isPreview ? height/2 : 85}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>

      {!isPreview && (
        <g>
          {/* Standardized 4 grey nodes - centrally aligned */}
          <rect x="140" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="190" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">API Docs</text>
          <text x="190" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Real-time status</text>

          <rect x="260" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="310" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Dependencies</text>
          <text x="310" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Service mapping</text>

          <rect x="380" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="430" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Code Analysis</text>
          <text x="430" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Complexity review</text>

          <rect x="500" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="550" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">PM Bridge</text>
          <text x="550" y="167" textAnchor="middle" fontSize="9" fill="#64748b">No code needed</text>

          {/* Context Layer - consistent spacing */}
          <rect x="80" y="220" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x="350" y="240" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Technical Bridge for Product Managers</text>
          <text x="350" y="255" textAnchor="middle" fontSize="10" fill="#65a30d">Answer API questions instantly, understand technical dependencies</text>
          <text x="350" y="268" textAnchor="middle" fontSize="10" fill="#65a30d">Make informed product decisions with real-time technical insights</text>
        </g>
      )}
      
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
};

const DataWizardSVG = ({ isPreview }: { isPreview: boolean }) => {
  const width = isPreview ? 300 : 700;
  const height = isPreview ? 150 : 380;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Main Flow */}
      <g>
        {/* Comet Browser - Left position in collapsed view */}
        <rect x="50" y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={isPreview ? 90 : 110} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">
          {isPreview ? "Comet" : "Comet Browser"}
        </text>
        {!isPreview && <text x="110" y="90" textAnchor="middle" fontSize="12" fill="#64748b">Auto-scraping</text>}
        
        {/* Perplexity Pro - Middle position */}
        <rect x={isPreview ? width/2 - 40 : width/2 - 60} y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">Perplexity</text>
        {!isPreview && <text x={width/2} y="90" textAnchor="middle" fontSize="12" fill="#64748b">Context Search</text>}
        
        {/* Auto-Analysis - Right position in collapsed view */}
        <rect x={isPreview ? width - 130 : width - 170} y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={isPreview ? width - 90 : width - 110} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">
          {isPreview ? "Analysis" : "Auto-Analysis"}
        </text>
        {!isPreview && <text x={width - 110} y="90" textAnchor="middle" fontSize="12" fill="#64748b">Insights</text>}
        
        {/* Arrows */}
        <path d={`M ${isPreview ? 130 : 170} ${isPreview ? height/2 : 85} L ${isPreview ? width/2 - 40 : width/2 - 60} ${isPreview ? height/2 : 85}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${isPreview ? width/2 + 40 : width/2 + 60} ${isPreview ? height/2 : 85} L ${isPreview ? width - 130 : width - 170} ${isPreview ? height/2 : 85}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>

      {!isPreview && (
        <g>
          {/* Standardized 4 grey nodes - centrally aligned */}
          <rect x="140" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="190" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Business KPIs</text>
          <text x="190" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Weekly metrics</text>

          <rect x="260" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="310" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Data Integration</text>
          <text x="310" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Auto-filter</text>

          <rect x="380" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="430" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Competitor Intel</text>
          <text x="430" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Market analysis</text>

          <rect x="500" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="550" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Insights</text>
          <text x="550" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Data-driven</text>

          {/* Context Layer - consistent spacing */}
          <rect x="80" y="220" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x="350" y="240" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Business Intelligence Automation</text>
          <text x="350" y="255" textAnchor="middle" fontSize="10" fill="#65a30d">Extract insights from competitor data and industry trends</text>
          <text x="350" y="268" textAnchor="middle" fontSize="10" fill="#65a30d">Transform raw information into strategic business intelligence</text>
        </g>
      )}
      
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
};

const VoiceMagicSVG = ({ isPreview }: { isPreview: boolean }) => {
  const width = isPreview ? 300 : 700;
  const height = isPreview ? 150 : 380;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Main Flow */}
      <g>
        {/* Wispr Flow - Left position in collapsed view */}
        <rect x="50" y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={isPreview ? 90 : 110} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">
          {isPreview ? "Wispr" : "Wispr Flow"}
        </text>
        {!isPreview && <text x="110" y="90" textAnchor="middle" fontSize="12" fill="#64748b">Voice Capture</text>}
        
        {/* Claude - Middle position */}
        <rect x={isPreview ? width/2 - 40 : width/2 - 60} y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">Claude</text>
        {!isPreview && <text x={width/2} y="90" textAnchor="middle" fontSize="12" fill="#64748b">Structure</text>}
        
        {/* Obsidian - Right position in collapsed view */}
        <rect x={isPreview ? width - 130 : width - 170} y={isPreview ? height/2 - 20 : 60} width={isPreview ? 80 : 120} height={isPreview ? 40 : 50} rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={isPreview ? width - 90 : width - 110} y={isPreview ? height/2 : 75} textAnchor="middle" fontSize={isPreview ? "11" : "14"} fill="#1e293b" fontWeight="600">Obsidian</text>
        {!isPreview && <text x={width - 110} y="90" textAnchor="middle" fontSize="12" fill="#64748b">PRD Ready</text>}
        
        {/* Arrows */}
        <path d={`M ${isPreview ? 130 : 170} ${isPreview ? height/2 : 85} L ${isPreview ? width/2 - 40 : width/2 - 60} ${isPreview ? height/2 : 85}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${isPreview ? width/2 + 40 : width/2 + 60} ${isPreview ? height/2 : 85} L ${isPreview ? width - 130 : width - 170} ${isPreview ? height/2 : 85}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>

      {!isPreview && (
        <g>
          {/* Standardized 4 grey nodes - centrally aligned */}
          <rect x="140" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="190" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Voice Processing</text>
          <text x="190" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Clean transcription</text>

          <rect x="260" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="310" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Templates</text>
          <text x="310" y="167" textAnchor="middle" fontSize="9" fill="#64748b">PRD format</text>

          <rect x="380" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="430" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Vault Sync</text>
          <text x="430" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Auto-tagging</text>

          <rect x="500" y="140" width="100" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="550" y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">PRD Output</text>
          <text x="550" y="167" textAnchor="middle" fontSize="9" fill="#64748b">Stakeholder ready</text>

          {/* Context Layer - consistent spacing */}
          <rect x="80" y="220" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x="350" y="240" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Voice-to-PRD Workflow</text>
          <text x="350" y="255" textAnchor="middle" fontSize="10" fill="#65a30d">Transform voice notes into structured product requirements</text>
          <text x="350" y="268" textAnchor="middle" fontSize="10" fill="#65a30d">From beach walks to stakeholder-ready documents in minutes</text>
        </g>
      )}
      
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
};