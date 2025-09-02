import { useState } from "react";

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
    <div className="w-full h-full flex items-center justify-center bg-gray-50">
      {renderDiagram()}
    </div>
  );
};

const ProductBrainSVG = ({ isPreview }: { isPreview: boolean }) => {
  const width = isPreview ? 300 : 700;
  const height = isPreview ? 150 : 450; // Always show expanded height when not preview
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Main Flow */}
      <g>
        {/* Obsidian Vault */}
        <rect x="50" y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="110" y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Obsidian Vault</text>
        <text x="110" y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Knowledge Base</text>
        
        {/* Claude */}
        <rect x={width/2 - 60} y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Claude Code</text>
        <text x={width/2} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Context Engine</text>
        
        {/* Generated Docs */}
        <rect x={width - 170} y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width - 110} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Generated Docs</text>
        <text x={width - 110} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">PRDs, Stories</text>
        
        {/* Arrows */}
        <path d={`M 170 ${height/2} L ${width/2 - 60} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${width/2 + 60} ${height/2} L ${width - 170} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>

      {/* Expanded Details - Show immediately when not preview */}
      {!isPreview && (
        <g>
          {/* Smart Tagging Layer - Better aligned */}
          <rect x="70" y="80" width="110" height="40" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="125" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">#smart-tags</text>
          <text x="125" y="108" textAnchor="middle" fontSize="9" fill="#64748b">Auto-linking & Cross-graphs</text>

          {/* Templates */}
          <rect x="200" y="80" width="110" height="40" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="255" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Templates</text>
          <text x="255" y="108" textAnchor="middle" fontSize="9" fill="#64748b">PRD, Stories, Reports</text>

          {/* Cross-referencing */}
          <rect x="330" y="80" width="110" height="40" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="385" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">[[Cross-refs]]</text>
          <text x="385" y="108" textAnchor="middle" fontSize="9" fill="#64748b">Auto-connections</text>

          {/* Document Types */}
          <rect x="460" y="80" width="110" height="40" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="515" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">Doc Types</text>
          <text x="515" y="108" textAnchor="middle" fontSize="9" fill="#64748b">Strategy, Research</text>

          {/* Context Layer */}
          <rect x="80" y="360" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x="350" y="380" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Interconnected Knowledge System</text>
          <text x="350" y="395" textAnchor="middle" fontSize="10" fill="#65a30d">Strategic tagging creates automatic connections across product areas</text>
          <text x="350" y="408" textAnchor="middle" fontSize="10" fill="#65a30d">#psc #apsl #research #DE #IT #web #apps #user-story #prd #meeting-notes</text>

          {/* Connection lines to main flow */}
          <path d="M 125 120 L 110 ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 255 120 L ${width/2} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 385 120 L ${width/2} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 515 120 L ${width - 110} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
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
  const height = isPreview ? 150 : 480;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Main Flow */}
      <g>
        <rect x="50" y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="110" y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Granola</text>
        <text x="110" y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Auto-record</text>
        
        <rect x={width/2 - 60} y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Claude</text>
        <text x={width/2} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Process & Sort</text>
        
        <rect x={width - 170} y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width - 110} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Daily TODOs</text>
        <text x={width - 110} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Action Items</text>
        
        <path d={`M 170 ${height/2} L ${width/2 - 60} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${width/2 + 60} ${height/2} L ${width - 170} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>

      {!isPreview && (
        <g>
          {/* Folder Organization */}
          <rect x="60" y="80" width="110" height="80" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="115" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">Meeting Folders</text>
          <text x="70" y="110" fontSize="9" fill="#64748b">📁 /Team-Meetings/PSC/</text>
          <text x="70" y="122" fontSize="9" fill="#64748b">📁 /Cross-Functional/UX/</text>
          <text x="70" y="134" fontSize="9" fill="#64748b">📁 /1-on-1s/Manager/</text>
          <text x="70" y="146" fontSize="9" fill="#64748b">📁 /Business-Reviews/WBR/</text>

          {/* Smart Tagging */}
          <rect x="190" y="80" width="110" height="50" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="245" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">Smart Tagging</text>
          <text x="200" y="110" fontSize="9" fill="#64748b">#psc #apsl #research</text>
          <text x="200" y="122" fontSize="9" fill="#64748b">#DE #IT #web #apps</text>

          {/* Granola-sync workflow */}
          <rect x="320" y="80" width="120" height="50" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="380" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">granola-sync</text>
          <text x="330" y="110" fontSize="9" fill="#64748b">Process all new meetings</text>
          <text x="330" y="122" fontSize="9" fill="#64748b">Sort to Processed/ folders</text>

          {/* Daily TODO workflow */}
          <rect x="460" y="80" width="120" height="50" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="520" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">daily-todo</text>
          <text x="470" y="110" fontSize="9" fill="#64748b">Generate action items</text>
          <text x="470" y="122" fontSize="9" fill="#64748b">From processed meetings</text>

          {/* Context Layer */}
          <rect x="80" y="380" width="540" height="80" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x="350" y="400" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Meeting Memory Supernatural Powers</text>
          <text x="350" y="415" textAnchor="middle" fontSize="10" fill="#65a30d">Auto-tracks promises, commitments, and action items across all meetings</text>
          <text x="350" y="428" textAnchor="middle" fontSize="10" fill="#65a30d">Cross-references decisions with vault knowledge for context awareness</text>
          <text x="350" y="441" textAnchor="middle" fontSize="10" fill="#65a30d">Never lose track of what was decided or who committed to what</text>
          <text x="350" y="454" textAnchor="middle" fontSize="10" fill="#65a30d">400% better follow-through on commitments</text>

          {/* Connection lines */}
          <path d="M 245 130 L ${width/2} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 380 130 L ${width/2} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 520 130 L ${width - 110} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
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
  const height = isPreview ? 150 : 420;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Main Flow */}
      <g>
        <rect x="50" y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="110" y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">GitHub Copilot</text>
        <text x="110" y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Code Assistant</text>
        
        <rect x={width/2 - 60} y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Repository Map</text>
        <text x={width/2} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Code Navigation</text>
        
        <rect x={width - 170} y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width - 110} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Tech Q&A</text>
        <text x={width - 110} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Real-time answers</text>
        
        <path d={`M 170 ${height/2} L ${width/2 - 60} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${width/2 + 60} ${height/2} L ${width - 170} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>

      {!isPreview && (
        <g>
          {/* Technical Capabilities */}
          <rect x="60" y="80" width="100" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="110" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">API Docs</text>
          <text x="70" y="110" fontSize="9" fill="#64748b">• Real-time API status</text>
          <text x="70" y="122" fontSize="9" fill="#64748b">• Endpoint documentation</text>
          <text x="70" y="134" fontSize="9" fill="#64748b">• Response examples</text>

          <rect x="180" y="80" width="100" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="230" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">Dependencies</text>
          <text x="190" y="110" fontSize="9" fill="#64748b">• Service mapping</text>
          <text x="190" y="122" fontSize="9" fill="#64748b">• Integration points</text>
          <text x="190" y="134" fontSize="9" fill="#64748b">• Technical debt</text>

          <rect x="300" y="80" width="100" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="350" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">Code Analysis</text>
          <text x="310" y="110" fontSize="9" fill="#64748b">• Feature complexity</text>
          <text x="310" y="122" fontSize="9" fill="#64748b">• Development scope</text>
          <text x="310" y="134" fontSize="9" fill="#64748b">• Risk assessment</text>

          <rect x="420" y="80" width="100" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="470" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">Context Bridge</text>
          <text x="430" y="110" fontSize="9" fill="#64748b">• PM ↔ Engineering</text>
          <text x="430" y="122" fontSize="9" fill="#64748b">• No code required</text>
          <text x="430" y="134" fontSize="9" fill="#64748b">• Instant translation</text>

          {/* Context Layer */}
          <rect x="80" y="330" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x="350" y="350" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Speak Dev Without Learning to Code</text>
          <text x="350" y="365" textAnchor="middle" fontSize="10" fill="#65a30d">Answer API questions in real-time, understand technical dependencies</text>
          <text x="350" y="378" textAnchor="middle" fontSize="10" fill="#65a30d">Proactive technical research for informed product decisions - 90% faster technical answers</text>

          {/* Connection lines */}
          <path d="M 110 150 L 110 ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 230 150 L ${width/2} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 350 150 L ${width/2} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 470 150 L ${width - 110} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
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
  const height = isPreview ? 150 : 450;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Main Flow */}
      <g>
        <rect x="50" y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="110" y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Comet Browser</text>
        <text x="110" y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Auto-scraping</text>
        
        <rect x={width/2 - 60} y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Perplexity Pro</text>
        <text x={width/2} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Context Search</text>
        
        <rect x={width - 170} y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width - 110} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Auto-Analysis</text>
        <text x={width - 110} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Insights</text>
        
        <path d={`M 170 ${height/2} L ${width/2 - 60} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${width/2 + 60} ${height/2} L ${width - 170} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>

      {!isPreview && (
        <g>
          {/* Data Sources */}
          <rect x="60" y="80" width="100" height="80" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="110" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">WBR Data</text>
          <text x="70" y="110" fontSize="9" fill="#64748b">• Weekly metrics</text>
          <text x="70" y="122" fontSize="9" fill="#64748b">• Performance KPIs</text>
          <text x="70" y="134" fontSize="9" fill="#64748b">• Business reviews</text>
          <text x="70" y="146" fontSize="9" fill="#64748b">• Dashboard data</text>

          {/* Processing Layer */}
          <rect x="180" y="80" width="120" height="50" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="240" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">Data Integration</text>
          <text x="190" y="110" fontSize="9" fill="#64748b">Auto-filter dashboards</text>
          <text x="190" y="122" fontSize="9" fill="#64748b">Extract key metrics</text>

          {/* Competitive Analysis */}
          <rect x="320" y="80" width="100" height="50" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="370" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">Competitor Intel</text>
          <text x="330" y="110" fontSize="9" fill="#64748b">Market analysis</text>
          <text x="330" y="122" fontSize="9" fill="#64748b">Feature tracking</text>

          {/* Output Types */}
          <rect x="440" y="80" width="120" height="80" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="500" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">Generated Insights</text>
          <text x="450" y="110" fontSize="9" fill="#64748b">• Trend analysis</text>
          <text x="450" y="122" fontSize="9" fill="#64748b">• Stakeholder reports</text>
          <text x="450" y="134" fontSize="9" fill="#64748b">• Data-driven decisions</text>
          <text x="450" y="146" fontSize="9" fill="#64748b">• Competitive positioning</text>

          {/* Context Layer */}
          <rect x="80" y="360" width="540" height="60" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x="350" y="380" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Defend Decisions with Data</text>
          <text x="350" y="395" textAnchor="middle" fontSize="10" fill="#65a30d">Automated dashboard filtering, instant metric extraction, contextualized insights</text>
          <text x="350" y="408" textAnchor="middle" fontSize="10" fill="#65a30d">Cross-reference with vault knowledge for strategic context - 85% less data grunt work</text>

          {/* Connection lines */}
          <path d="M 110 160 L 110 ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 240 130 L ${width/2} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 370 130 L ${width/2} ${height/2 + 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 500 160 L ${width - 110} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
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
  const height = isPreview ? 150 : 480;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Main Flow */}
      <g>
        <rect x="50" y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="110" y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Wispr Flow</text>
        <text x="110" y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Voice Capture</text>
        
        <rect x={width/2 - 60} y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Claude</text>
        <text x={width/2} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Structure</text>
        
        <rect x={width - 170} y={height/2 - 25} width="120" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width - 110} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Obsidian</text>
        <text x={width - 110} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">PRD Ready</text>
        
        <path d={`M 170 ${height/2} L ${width/2 - 60} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${width/2 + 60} ${height/2} L ${width - 170} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>

      {!isPreview && (
        <g>
          {/* Voice Processing */}
          <rect x="60" y="80" width="100" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="110" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">Voice Processing</text>
          <text x="70" y="110" fontSize="9" fill="#64748b">• Beach walks</text>
          <text x="70" y="122" fontSize="9" fill="#64748b">• Clean transcription</text>
          <text x="70" y="134" fontSize="9" fill="#64748b">• Natural capture</text>

          {/* Template Engine */}
          <rect x="180" y="80" width="100" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="230" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">Template Engine</text>
          <text x="190" y="110" fontSize="9" fill="#64748b">• PRD templates</text>
          <text x="190" y="122" fontSize="9" fill="#64748b">• User story format</text>
          <text x="190" y="134" fontSize="9" fill="#64748b">• Structure matching</text>

          {/* Vault Integration */}
          <rect x="300" y="80" width="100" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="350" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">Vault Integration</text>
          <text x="310" y="110" fontSize="9" fill="#64748b">• Auto-tagging</text>
          <text x="310" y="122" fontSize="9" fill="#64748b">• Cross-linking</text>
          <text x="310" y="134" fontSize="9" fill="#64748b">• Context awareness</text>

          {/* Output Quality */}
          <rect x="420" y="80" width="120" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
          <text x="480" y="95" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">PRD Output</text>
          <text x="430" y="110" fontSize="9" fill="#64748b">• Structured documents</text>
          <text x="430" y="122" fontSize="9" fill="#64748b">• Cross-referenced</text>
          <text x="430" y="134" fontSize="9" fill="#64748b">• Stakeholder ready</text>

          {/* Voice-to-PRD Flow */}
          <rect x="80" y="170" width="540" height="80" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="1"/>
          <text x="350" y="190" textAnchor="middle" fontSize="12" fill="#14532d" fontWeight="600">Voice-to-PRD Workflow Pipeline</text>
          <text x="350" y="205" textAnchor="middle" fontSize="10" fill="#166534">Voice capture → AI transcription → Template matching → Context integration</text>
          <text x="350" y="218" textAnchor="middle" fontSize="10" fill="#166534">→ Auto-tagging → Vault storage → Cross-linking → Ready for stakeholders</text>
          <text x="350" y="235" textAnchor="middle" fontSize="11" fill="#14532d" fontWeight="600">Beach walks become structured product requirements in minutes</text>

          {/* Context Layer */}
          <rect x="80" y="380" width="540" height="80" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="1"/>
          <text x="350" y="400" textAnchor="middle" fontSize="12" fill="#365314" fontWeight="600">Rapid Documentation Workflow</text>
          <text x="350" y="415" textAnchor="middle" fontSize="10" fill="#65a30d">Clean voice-to-text capture during beach walks becomes structured PRD sessions</text>
          <text x="350" y="428" textAnchor="middle" fontSize="10" fill="#65a30d">Automatic template matching and vault integration with smart cross-referencing</text>
          <text x="350" y="441" textAnchor="middle" fontSize="10" fill="#65a30d">80% faster PRD creation - from voice notes to stakeholder-ready documents</text>
          <text x="350" y="454" textAnchor="middle" fontSize="10" fill="#65a30d">Perfect for remote work and creative thinking sessions</text>

          {/* Connection lines */}
          <path d="M 110 140 L 110 ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 230 140 L ${width/2} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 350 140 L ${width/2} ${height/2 + 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
          <path d="M 480 140 L ${width - 110} ${height/2 - 25}" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3"/>
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