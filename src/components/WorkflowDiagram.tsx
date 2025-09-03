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
      
      {/* Expansion hint - subtle text only */}
      {isPreview && (
        <div className="absolute bottom-1 right-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="flex items-center space-x-1 text-xs text-gray-500">
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
      {isPreview ? (
        /* Collapsed View - Clean Badge Flow */
        <g>
          {/* Obsidian Vault */}
          <rect x="30" y={height/2 - 15} width="70" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="65" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Obsidian</text>
          
          {/* Arrow 1 */}
          <path d={`M 105 ${height/2} L 125 ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Claude */}
          <rect x="130" y={height/2 - 15} width="60" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="160" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Claude</text>
          
          {/* Arrow 2 */}
          <path d={`M 195 ${height/2} L 215 ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Generated Docs */}
          <rect x="220" y={height/2 - 15} width="70" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="255" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Docs</text>
        </g>
      ) : (
        /* Expanded View - Three-Tier Layout */
        <g>
          {/* Tier 1: Obsidian Vault */}
          <rect x="50" y="20" width="600" height="80" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x="350" y="40" textAnchor="middle" fontSize="16" fill="#1e293b" fontWeight="600">Obsidian Vault</text>
          
          {/* Top row items */}
          <rect x="70" y="50" width="100" height="25" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="120" y="66" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="500">Competitor Knowledge</text>
          
          <rect x="185" y="50" width="80" height="25" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="225" y="66" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="500">Feature Context</text>
          
          <rect x="280" y="50" width="80" height="25" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="320" y="66" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="500">User Research</text>
          
          <rect x="375" y="50" width="80" height="25" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="415" y="66" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="500">Strategy & KPIs</text>
          
          {/* Bottom row items */}
          <rect x="200" y="75" width="80" height="20" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="240" y="87" textAnchor="middle" fontSize="9" fill="#475569">Claude Config</text>
          
          <rect x="290" y="75" width="80" height="20" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="330" y="87" textAnchor="middle" fontSize="9" fill="#475569">Doc Templates</text>
          
          <rect x="380" y="75" width="70" height="20" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="415" y="87" textAnchor="middle" fontSize="9" fill="#475569">Workflows</text>
          
          {/* Arrow 1 */}
          <path d="M 350 105 L 350 135" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Tier 2: Claude Code */}
          <rect x="50" y="140" width="600" height="70" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x="350" y="160" textAnchor="middle" fontSize="16" fill="#1e293b" fontWeight="600">Claude Code</text>
          
          <rect x="80" y="170" width="110" height="25" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="135" y="182" textAnchor="middle" fontSize="9" fill="#334155" fontWeight="500">smart-tags auto-linking</text>
          
          <rect x="205" y="170" width="110" height="25" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="260" y="182" textAnchor="middle" fontSize="9" fill="#334155" fontWeight="500">Scan & auto-correct</text>
          
          <rect x="330" y="170" width="110" height="25" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="385" y="182" textAnchor="middle" fontSize="9" fill="#334155" fontWeight="500">Update Master Files</text>
          
          <rect x="455" y="170" width="110" height="25" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="510" y="182" textAnchor="middle" fontSize="9" fill="#334155" fontWeight="500">Review Performance</text>
          
          {/* Arrow 2 */}
          <path d="M 350 215 L 350 245" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Tier 3: Outputs */}
          <rect x="50" y="250" width="600" height="70" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x="350" y="270" textAnchor="middle" fontSize="16" fill="#1e293b" fontWeight="600">Outputs</text>
          
          {/* Yellow output boxes */}
          <rect x="120" y="285" width="70" height="25" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
          <text x="155" y="299" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="500">PRDs</text>
          
          <rect x="210" y="285" width="70" height="25" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
          <text x="245" y="299" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="500">User Stories</text>
          
          <rect x="300" y="285" width="90" height="25" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
          <text x="345" y="299" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="500">Stakeholder Reports</text>
          
          <rect x="410" y="285" width="70" height="25" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
          <text x="445" y="299" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="500">New Ideas</text>
          
          {/* Timing information */}
          <text x="70" y="345" fontSize="10" fill="#64748b">~1 min to get answers on features and competitors</text>
          <text x="70" y="360" fontSize="10" fill="#64748b">~30 mins to generate artifacts including edits</text>
          <text x="70" y="375" fontSize="10" fill="#64748b">~60 mins to brainstorm ideas aligned with strategy & OKRs</text>
        </g>
      )}
      </g>

      
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
      {isPreview ? (
        /* Collapsed View - Clean Badge Flow */
        <g>
          {/* Granola */}
          <rect x="30" y={height/2 - 15} width="60" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="60" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Granola</text>
          
          {/* Arrow 1 */}
          <path d={`M 95 ${height/2} L 115 ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Claude */}
          <rect x="120" y={height/2 - 15} width="50" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="145" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Claude</text>
          
          {/* Arrow 2 */}
          <path d={`M 175 ${height/2} L 195 ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Daily TODOs */}
          <rect x="200" y={height/2 - 15} width="75" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="237" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">TODOs</text>
        </g>
      ) : (
        /* Expanded View - Full Layout */
        <g>
          {/* Granola */}
          <rect x="50" y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x="110" y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">Granola</text>
          <text x="110" y="95" textAnchor="middle" fontSize="12" fill="#64748b">Auto-record</text>
          
          {/* Claude */}
          <rect x={width/2 - 60} y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x={width/2} y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">Claude</text>
          <text x={width/2} y="95" textAnchor="middle" fontSize="12" fill="#64748b">Process & Sort</text>
          
          {/* Daily TODOs */}
          <rect x={width - 170} y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x={width - 110} y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">Daily TODOs</text>
          <text x={width - 110} y="95" textAnchor="middle" fontSize="12" fill="#64748b">Action Items</text>
          
          {/* Arrows */}
          <path d={`M 170 85 L ${width/2 - 60} 85`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          <path d={`M ${width/2 + 60} 85 L ${width - 170} 85`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        </g>
      )}
      </g>

      {!isPreview && (
        <g>
          {/* Standardized 4 grey nodes - properly centered */}
          <rect x={width/2 - 190} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 - 145} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Smart Tags</text>
          <text x={width/2 - 145} y="167" textAnchor="middle" fontSize="9" fill="#64748b">#psc #research</text>

          <rect x={width/2 - 90} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 - 45} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Meeting Sync</text>
          <text x={width/2 - 45} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Auto-process</text>

          <rect x={width/2 + 10} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 + 55} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Folder Sort</text>
          <text x={width/2 + 55} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Organization</text>

          <rect x={width/2 + 110} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 + 155} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Action Items</text>
          <text x={width/2 + 155} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Track commitments</text>

          {/* Context Layer - properly centered */}
          <rect x={width/2 - 270} y="220" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x={width/2} y="240" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Meeting Memory System</text>
          <text x={width/2} y="255" textAnchor="middle" fontSize="10" fill="#65a30d">Auto-tracks commitments and action items across all meetings</text>
          <text x={width/2} y="268" textAnchor="middle" fontSize="10" fill="#65a30d">Never lose track of decisions or who committed to what</text>
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
      {isPreview ? (
        /* Collapsed View - Clean Badge Flow */
        <g>
          {/* GitHub Copilot */}
          <rect x="30" y={height/2 - 15} width="60" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="60" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Copilot</text>
          
          {/* Arrow 1 */}
          <path d={`M 95 ${height/2} L 115 ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Repository Map */}
          <rect x="120" y={height/2 - 15} width="75" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="157" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Repo Map</text>
          
          {/* Arrow 2 */}
          <path d={`M 200 ${height/2} L 220 ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Tech Q&A */}
          <rect x="225" y={height/2 - 15} width="65" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="257" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Tech Q&A</text>
        </g>
      ) : (
        /* Expanded View - Full Layout */
        <g>
          {/* GitHub Copilot */}
          <rect x="50" y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x="110" y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">GitHub Copilot</text>
          <text x="110" y="95" textAnchor="middle" fontSize="12" fill="#64748b">Code Assistant</text>
          
          {/* Repository Map */}
          <rect x={width/2 - 60} y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x={width/2} y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">Repository Map</text>
          <text x={width/2} y="95" textAnchor="middle" fontSize="12" fill="#64748b">Code Navigation</text>
          
          {/* Tech Q&A */}
          <rect x={width - 170} y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x={width - 110} y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">Tech Q&A</text>
          <text x={width - 110} y="95" textAnchor="middle" fontSize="12" fill="#64748b">Real-time answers</text>
          
          {/* Arrows */}
          <path d={`M 170 85 L ${width/2 - 60} 85`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          <path d={`M ${width/2 + 60} 85 L ${width - 170} 85`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        </g>
      )}
      </g>

      {!isPreview && (
        <g>
          {/* Standardized 4 grey nodes - properly centered */}
          <rect x={width/2 - 190} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 - 145} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">API Docs</text>
          <text x={width/2 - 145} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Real-time status</text>

          <rect x={width/2 - 90} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 - 45} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Dependencies</text>
          <text x={width/2 - 45} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Service mapping</text>

          <rect x={width/2 + 10} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 + 55} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Code Analysis</text>
          <text x={width/2 + 55} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Complexity review</text>

          <rect x={width/2 + 110} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 + 155} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">PM Bridge</text>
          <text x={width/2 + 155} y="167" textAnchor="middle" fontSize="9" fill="#64748b">No code needed</text>

          {/* Context Layer - properly centered */}
          <rect x={width/2 - 270} y="220" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x={width/2} y="240" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Technical Bridge for Product Managers</text>
          <text x={width/2} y="255" textAnchor="middle" fontSize="10" fill="#65a30d">Answer API questions instantly, understand technical dependencies</text>
          <text x={width/2} y="268" textAnchor="middle" fontSize="10" fill="#65a30d">Make informed product decisions with real-time technical insights</text>
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
      {isPreview ? (
        /* Collapsed View - Clean Badge Flow */
        <g>
          {/* Comet Browser */}
          <rect x="30" y={height/2 - 15} width="55" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="57" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Comet</text>
          
          {/* Arrow 1 */}
          <path d={`M 90 ${height/2} L 110 ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Perplexity Pro */}
          <rect x="115" y={height/2 - 15} width="75" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="152" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Perplexity</text>
          
          {/* Arrow 2 */}
          <path d={`M 195 ${height/2} L 215 ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Auto-Analysis */}
          <rect x="220" y={height/2 - 15} width="70" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="255" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Analysis</text>
        </g>
      ) : (
        /* Expanded View - Full Layout */
        <g>
          {/* Comet Browser */}
          <rect x="50" y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x="110" y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">Comet Browser</text>
          <text x="110" y="95" textAnchor="middle" fontSize="12" fill="#64748b">Auto-scraping</text>
          
          {/* Perplexity Pro */}
          <rect x={width/2 - 60} y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x={width/2} y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">Perplexity Pro</text>
          <text x={width/2} y="95" textAnchor="middle" fontSize="12" fill="#64748b">Context Search</text>
          
          {/* Auto-Analysis */}
          <rect x={width - 170} y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x={width - 110} y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">Auto-Analysis</text>
          <text x={width - 110} y="95" textAnchor="middle" fontSize="12" fill="#64748b">Insights</text>
          
          {/* Arrows */}
          <path d={`M 170 85 L ${width/2 - 60} 85`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          <path d={`M ${width/2 + 60} 85 L ${width - 170} 85`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        </g>
      )}
      </g>

      {!isPreview && (
        <g>
          {/* Standardized 4 grey nodes - properly centered */}
          <rect x={width/2 - 190} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 - 145} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Business KPIs</text>
          <text x={width/2 - 145} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Weekly metrics</text>

          <rect x={width/2 - 90} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 - 45} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Data Filters</text>
          <text x={width/2 - 45} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Auto-filtering</text>

          <rect x={width/2 + 10} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 + 55} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Trend Analysis</text>
          <text x={width/2 + 55} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Pattern detection</text>

          <rect x={width/2 + 110} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 + 155} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Insights</text>
          <text x={width/2 + 155} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Strategic decisions</text>

          {/* Context Layer - properly centered */}
          <rect x={width/2 - 270} y="220" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x={width/2} y="240" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Business Intelligence Automation</text>
          <text x={width/2} y="255" textAnchor="middle" fontSize="10" fill="#65a30d">Extract insights from competitor data and industry trends</text>
          <text x={width/2} y="268" textAnchor="middle" fontSize="10" fill="#65a30d">Transform raw information into strategic business intelligence</text>
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
      {isPreview ? (
        /* Collapsed View - Clean Badge Flow */
        <g>
          {/* Wispr Flow */}
          <rect x="30" y={height/2 - 15} width="55" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="57" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Wispr</text>
          
          {/* Arrow 1 */}
          <path d={`M 90 ${height/2} L 110 ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Claude */}
          <rect x="115" y={height/2 - 15} width="50" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="140" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Claude</text>
          
          {/* Arrow 2 */}
          <path d={`M 170 ${height/2} L 190 ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          
          {/* Obsidian */}
          <rect x="195" y={height/2 - 15} width="70" height="30" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
          <text x="230" y={height/2 + 4} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="500">Obsidian</text>
        </g>
      ) : (
        /* Expanded View - Full Layout */
        <g>
          {/* Wispr Flow */}
          <rect x="50" y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x="110" y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">Wispr Flow</text>
          <text x="110" y="95" textAnchor="middle" fontSize="12" fill="#64748b">Voice Capture</text>
          
          {/* Claude */}
          <rect x={width/2 - 60} y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x={width/2} y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">Claude</text>
          <text x={width/2} y="95" textAnchor="middle" fontSize="12" fill="#64748b">Structure</text>
          
          {/* Obsidian */}
          <rect x={width - 170} y="60" width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
          <text x={width - 110} y="80" textAnchor="middle" fontSize="14" fill="#1e293b" fontWeight="600">Obsidian</text>
          <text x={width - 110} y="95" textAnchor="middle" fontSize="12" fill="#64748b">PRD Ready</text>
          
          {/* Arrows */}
          <path d={`M 170 85 L ${width/2 - 60} 85`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
          <path d={`M ${width/2 + 60} 85 L ${width - 170} 85`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        </g>
      )}
      </g>

      {!isPreview && (
        <g>
          {/* Standardized 4 grey nodes - properly centered */}
          <rect x={width/2 - 190} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 - 145} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Voice Processing</text>
          <text x={width/2 - 145} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Clean transcription</text>

          <rect x={width/2 - 90} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 - 45} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Templates</text>
          <text x={width/2 - 45} y="167" textAnchor="middle" fontSize="9" fill="#64748b">PRD format</text>

          <rect x={width/2 + 10} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 + 55} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Vault Sync</text>
          <text x={width/2 + 55} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Auto-tagging</text>

          <rect x={width/2 + 110} y="140" width="90" height="35" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x={width/2 + 155} y="155" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">PRD Output</text>
          <text x={width/2 + 155} y="167" textAnchor="middle" fontSize="9" fill="#64748b">Stakeholder ready</text>

          {/* Context Layer - properly centered */}
          <rect x={width/2 - 270} y="220" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x={width/2} y="240" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Voice-to-PRD Workflow</text>
          <text x={width/2} y="255" textAnchor="middle" fontSize="10" fill="#65a30d">Transform voice notes into structured product requirements</text>
          <text x={width/2} y="268" textAnchor="middle" fontSize="10" fill="#65a30d">From beach walks to stakeholder-ready documents in minutes</text>
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