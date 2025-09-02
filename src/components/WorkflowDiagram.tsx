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
  const width = isPreview ? 300 : 600;
  const height = isPreview ? 150 : 300;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Clean horizontal flow */}
      <g>
        {/* Obsidian */}
        <rect x="20" y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="70" y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Obsidian</text>
        <text x="70" y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Vault</text>
        
        {/* Claude */}
        <rect x={width/2 - 50} y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Claude</text>
        <text x={width/2} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">AI Engine</text>
        
        {/* Output */}
        <rect x={width - 120} y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width - 70} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">PRDs</text>
        <text x={width - 70} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Generated</text>
        
        {/* Clean arrows */}
        <path d={`M 120 ${height/2} L ${width/2 - 50} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${width/2 + 50} ${height/2} L ${width - 120} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
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
  const width = isPreview ? 300 : 600;
  const height = isPreview ? 150 : 300;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <g>
        {/* Granola */}
        <rect x="20" y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="70" y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Granola</text>
        <text x="70" y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Record</text>
        
        {/* Claude */}
        <rect x={width/2 - 50} y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Claude</text>
        <text x={width/2} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Process</text>
        
        {/* TODOs */}
        <rect x={width - 120} y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width - 70} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">TODOs</text>
        <text x={width - 70} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Daily</text>
        
        {/* Clean arrows */}
        <path d={`M 120 ${height/2} L ${width/2 - 50} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${width/2 + 50} ${height/2} L ${width - 120} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>
      
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
};

const TechBridgeSVG = ({ isPreview }: { isPreview: boolean }) => {
  const width = isPreview ? 300 : 600;
  const height = isPreview ? 150 : 300;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <g>
        {/* GitHub */}
        <rect x="20" y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="70" y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">GitHub</text>
        <text x="70" y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Copilot</text>
        
        {/* Repository */}
        <rect x={width/2 - 50} y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Repository</text>
        <text x={width/2} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Map</text>
        
        {/* Tech Q&A */}
        <rect x={width - 120} y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width - 70} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Tech Q&A</text>
        <text x={width - 70} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Real-time</text>
        
        {/* Clean arrows */}
        <path d={`M 120 ${height/2} L ${width/2 - 50} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${width/2 + 50} ${height/2} L ${width - 120} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>
      
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
};

const DataWizardSVG = ({ isPreview }: { isPreview: boolean }) => {
  const width = isPreview ? 300 : 600;
  const height = isPreview ? 150 : 300;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <g>
        {/* Comet */}
        <rect x="20" y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="70" y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Comet</text>
        <text x="70" y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Browser</text>
        
        {/* Perplexity */}
        <rect x={width/2 - 50} y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Perplexity</text>
        <text x={width/2} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Research</text>
        
        {/* Insights */}
        <rect x={width - 120} y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width - 70} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Insights</text>
        <text x={width - 70} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Auto-analysis</text>
        
        {/* Clean arrows */}
        <path d={`M 120 ${height/2} L ${width/2 - 50} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${width/2 + 50} ${height/2} L ${width - 120} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>
      
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
};

const VoiceMagicSVG = ({ isPreview }: { isPreview: boolean }) => {
  const width = isPreview ? 300 : 600;
  const height = isPreview ? 150 : 300;
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <g>
        {/* Wispr */}
        <rect x="20" y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="70" y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Wispr</text>
        <text x="70" y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Voice</text>
        
        {/* Claude */}
        <rect x={width/2 - 50} y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width/2} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Claude</text>
        <text x={width/2} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">Structure</text>
        
        {/* Obsidian */}
        <rect x={width - 120} y={height/2 - 25} width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x={width - 70} y={height/2 - 5} textAnchor="middle" fontSize={isPreview ? "12" : "14"} fill="#1e293b" fontWeight="600">Obsidian</text>
        <text x={width - 70} y={height/2 + 10} textAnchor="middle" fontSize={isPreview ? "10" : "12"} fill="#64748b">PRD Ready</text>
        
        {/* Clean arrows */}
        <path d={`M 120 ${height/2} L ${width/2 - 50} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d={`M ${width/2 + 50} ${height/2} L ${width - 120} ${height/2}`} stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
      </g>
      
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
        </marker>
      </defs>
    </svg>
  );
};