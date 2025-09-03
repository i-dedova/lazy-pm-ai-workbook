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
        return <RadialFlow isPreview={isPreview} />;
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
    <div className="w-full h-full bg-gray-50 relative">
      {/* Main diagram area - leaves space for text */}
      <div className={`w-full ${isPreview ? 'h-[calc(100%-40px)]' : 'h-full'} flex items-center justify-center group`}>
        {renderDiagram()}
      </div>
      
      {/* Expansion hint - in dedicated space below diagram */}
      {isPreview && (
        <div className={`absolute bottom-2 right-4 z-10 pointer-events-none ${
          isMobile 
            ? 'opacity-100' 
            : 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100'
        } transition-opacity duration-200`}>
          <div className="flex items-center space-x-4 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
            <span className="leading-4">Detailed View</span>
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
        /* Expanded View - Free-Floating Design */
        <g>
          {/* Tier 1: Obsidian Vault - Free floating sections */}
          <text x="350" y="30" textAnchor="middle" fontSize="18" fill="hsl(215 25% 27%)" fontWeight="700">Obsidian Vault</text>
          
          {/* Column 1: Strategy & KPIs + User Research */}
          <text x="130" y="60" textAnchor="middle" fontSize="14" fill="hsl(240 10% 15%)" fontWeight="600">Strategy & KPIs</text>
          <text x="130" y="80" textAnchor="middle" fontSize="14" fill="hsl(240 10% 15%)" fontWeight="600">User Research</text>
          
          {/* Column 2: Feature Context + Competitor Knowledge */}
          <text x="350" y="60" textAnchor="middle" fontSize="14" fill="hsl(240 10% 15%)" fontWeight="600">Feature Context</text>
          <text x="350" y="80" textAnchor="middle" fontSize="14" fill="hsl(240 10% 15%)" fontWeight="600">Competitor Knowledge</text>
          
          {/* Column 3: Claude Config + Templates & Workflows */}
          <text x="570" y="60" textAnchor="middle" fontSize="14" fill="hsl(240 10% 15%)" fontWeight="600">Claude Config</text>
          <text x="570" y="80" textAnchor="middle" fontSize="14" fill="hsl(240 10% 15%)" fontWeight="600">Templates & Workflows</text>
          
          {/* Arrow 1 */}
          <path d="M 350 100 L 350 125" stroke="hsl(215 25% 27%)" strokeWidth="3" markerEnd="url(#arrow-primary)"/>
          
          {/* Tier 2: Claude Code - Tasks with icons */}
          <text x="350" y="145" textAnchor="middle" fontSize="18" fill="hsl(215 25% 27%)" fontWeight="700">Claude Code</text>
          
          {/* Task icons and labels */}
          <circle cx="120" cy="170" r="3" fill="hsl(250 30% 60%)"/>
          <text x="140" y="175" fontSize="12" fill="hsl(240 10% 15%)" fontWeight="500">Cross-link with tags</text>
          
          <circle cx="280" cy="170" r="3" fill="hsl(250 30% 60%)"/>
          <text x="300" y="175" fontSize="12" fill="hsl(240 10% 15%)" fontWeight="500">Scan & auto-correct</text>
          
          <circle cx="120" cy="195" r="3" fill="hsl(250 30% 60%)"/>
          <text x="140" y="200" fontSize="12" fill="hsl(240 10% 15%)" fontWeight="500">Update master notes</text>
          
          <circle cx="280" cy="195" r="3" fill="hsl(250 30% 60%)"/>
          <text x="300" y="200" fontSize="12" fill="hsl(240 10% 15%)" fontWeight="500">Review performance</text>
          
          <circle cx="450" cy="170" r="3" fill="hsl(250 30% 60%)"/>
          <text x="470" y="175" fontSize="12" fill="hsl(240 10% 15%)" fontWeight="500">Workflow commands</text>
          
          <circle cx="450" cy="195" r="3" fill="hsl(250 30% 60%)"/>
          <text x="470" y="200" fontSize="12" fill="hsl(240 10% 15%)" fontWeight="500">Brainstorm ideas</text>
          
          {/* Arrow 2 */}
          <path d="M 350 220 L 350 245" stroke="hsl(215 25% 27%)" strokeWidth="3" markerEnd="url(#arrow-primary)"/>
          
          {/* Tier 3: Outputs - Metric style with icons */}
          <text x="350" y="265" textAnchor="middle" fontSize="18" fill="hsl(215 25% 27%)" fontWeight="700">Outputs</text>
          
          {/* Output metrics styled like main page */}
          <g transform="translate(120, 285)">
            <circle cx="8" cy="8" r="6" fill="hsl(43 74% 66%)" opacity="0.2"/>
            <circle cx="8" cy="8" r="3" fill="hsl(43 74% 66%)"/>
            <text x="25" y="12" fontSize="13" fill="hsl(240 10% 15%)" fontWeight="600">Product Answers in ~1 min</text>
          </g>
          
          <g transform="translate(320, 285)">
            <circle cx="8" cy="8" r="6" fill="hsl(250 30% 60%)" opacity="0.2"/>
            <circle cx="8" cy="8" r="3" fill="hsl(250 30% 60%)"/>
            <text x="25" y="12" fontSize="13" fill="hsl(240 10% 15%)" fontWeight="600">Artifacts in ~30 mins</text>
          </g>
          
          <g transform="translate(520, 285)">
            <circle cx="8" cy="8" r="6" fill="hsl(215 25% 27%)" opacity="0.2"/>
            <circle cx="8" cy="8" r="3" fill="hsl(215 25% 27%)"/>
            <text x="25" y="12" fontSize="13" fill="hsl(240 10% 15%)" fontWeight="600">Performance Reports ~60 mins</text>
          </g>
        </g>
      )}
      </g>

      
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
        <marker id="arrow-primary" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="hsl(215 25% 27%)"/>
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