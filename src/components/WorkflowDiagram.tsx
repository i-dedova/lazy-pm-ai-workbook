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
    <div className="w-full h-full">
      {renderDiagram()}
    </div>
  );
};

// Individual SVG Components with responsive design
const ProductBrainSVG = ({ isPreview }: { isPreview: boolean }) => (
  <svg viewBox={isPreview ? "0 0 400 200" : "0 0 800 400"} className="w-full h-full">
    {/* Desktop/Tablet Layout */}
    <g className="hidden md:block">
      {/* Row 1: Input */}
      <g transform="translate(60, 80)">
        <rect width="120" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <image href="https://obsidian.md/favicon.ico" x="10" y="12" width="16" height="16"/>
        <text x="32" y="22" fontSize="13" fill="#334155" fontWeight="500">Obsidian Vault</text>
        <text x="10" y="38" fontSize="10" fill="#64748b">Personal PM knowledge</text>
      </g>

      {/* Row 2: Processing */}
      <g transform="translate(240, 80)">
        <rect width="100" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <circle cx="15" cy="25" r="8" fill="#ff6b35"/>
        <text x="28" y="22" fontSize="13" fill="#334155" fontWeight="500">Claude</text>
        <text x="28" y="35" fontSize="10" fill="#64748b">AI Analysis</text>
      </g>

      {/* Row 3: Smart Features */}
      <g transform="translate(400, 50)">
        <rect width="90" height="35" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
        <text x="8" y="18" fontSize="11" fill="#334155" fontWeight="500">#smart-tags</text>
        <text x="8" y="30" fontSize="9" fill="#64748b">Auto-linking</text>
      </g>

      <g transform="translate(400, 95)">
        <rect width="90" height="35" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
        <text x="8" y="18" fontSize="11" fill="#334155" fontWeight="500">Templates</text>
        <text x="8" y="30" fontSize="9" fill="#64748b">PRD, Stories</text>
      </g>

      {/* Row 4: Output */}
      <g transform="translate(540, 80)">
        <rect width="120" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="13" fill="#334155" fontWeight="500">Generated Docs</text>
        <text x="10" y="32" fontSize="10" fill="#64748b">PRDs, User Stories</text>
        <text x="10" y="44" fontSize="9" fill="#64748b">95% less setup time</text>
      </g>

      {/* Connections */}
      <line x1="180" y1="105" x2="240" y2="105" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="340" y1="105" x2="400" y2="75" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="340" y1="105" x2="400" y2="115" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="490" y1="105" x2="540" y2="105" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    </g>

    {/* Mobile Layout */}
    <g className="block md:hidden">
      <g transform="translate(50, 20)">
        <rect width="120" height="40" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="12" fill="#334155" fontWeight="500">Obsidian Vault</text>
        <text x="10" y="32" fontSize="9" fill="#64748b">PM knowledge</text>
      </g>

      <g transform="translate(70, 80)">
        <rect width="80" height="35" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">Claude</text>
        <text x="10" y="30" fontSize="9" fill="#64748b">AI Analysis</text>
      </g>

      <g transform="translate(50, 135)">
        <rect width="120" height="40" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="12" fill="#334155" fontWeight="500">Generated Docs</text>
        <text x="10" y="32" fontSize="9" fill="#64748b">PRDs, Stories</text>
      </g>

      {/* Mobile connections */}
      <line x1="110" y1="60" x2="110" y2="80" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="110" y1="115" x2="110" y2="135" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    </g>

    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#64748b"/>
      </marker>
    </defs>
  </svg>
);

const MeetingMemorySVG = ({ isPreview }: { isPreview: boolean }) => (
  <svg viewBox={isPreview ? "0 0 400 200" : "0 0 800 400"} className="w-full h-full">
    {/* Desktop/Tablet Layout */}
    <g className="hidden md:block">
      {/* Row 1: Recording */}
      <g transform="translate(60, 80)">
        <rect width="100" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <circle cx="15" cy="25" r="8" fill="#ef4444"/>
        <text x="28" y="22" fontSize="13" fill="#334155" fontWeight="500">Granola</text>
        <text x="28" y="35" fontSize="10" fill="#64748b">Auto-record</text>
      </g>

      {/* Row 2: Processing */}
      <g transform="translate(200, 80)">
        <rect width="100" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <circle cx="15" cy="25" r="8" fill="#ff6b35"/>
        <text x="28" y="22" fontSize="13" fill="#334155" fontWeight="500">Claude</text>
        <text x="28" y="35" fontSize="10" fill="#64748b">Process</text>
      </g>

      {/* Row 3: Organization */}
      <g transform="translate(340, 50)">
        <rect width="120" height="70" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
        <text x="8" y="15" fontSize="12" fill="#334155" fontWeight="500">Auto-Organize</text>
        <text x="8" y="28" fontSize="9" fill="#64748b">📁 Team Meetings</text>
        <text x="8" y="40" fontSize="9" fill="#64748b">📁 Cross-Functional</text>
        <text x="8" y="52" fontSize="9" fill="#64748b">📁 1-on-1s</text>
        <text x="8" y="64" fontSize="9" fill="#64748b">📁 Reviews</text>
      </g>

      {/* Row 4: Output */}
      <g transform="translate(500, 80)">
        <rect width="120" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="13" fill="#334155" fontWeight="500">Daily TODOs</text>
        <text x="10" y="32" fontSize="10" fill="#64748b">Action items tracked</text>
        <text x="10" y="44" fontSize="9" fill="#64748b">400% better follow-through</text>
      </g>

      {/* Connections */}
      <line x1="160" y1="105" x2="200" y2="105" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="300" y1="105" x2="340" y2="85" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="460" y1="85" x2="500" y2="105" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    </g>

    {/* Mobile Layout */}
    <g className="block md:hidden">
      <g transform="translate(60, 20)">
        <rect width="100" height="35" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="12" fill="#334155" fontWeight="500">Granola</text>
        <text x="10" y="30" fontSize="9" fill="#64748b">Record</text>
      </g>

      <g transform="translate(70, 75)">
        <rect width="80" height="35" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">Claude</text>
        <text x="10" y="30" fontSize="9" fill="#64748b">Process</text>
      </g>

      <g transform="translate(50, 130)">
        <rect width="120" height="40" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="12" fill="#334155" fontWeight="500">Daily TODOs</text>
        <text x="10" y="32" fontSize="9" fill="#64748b">Auto-organized</text>
      </g>

      <line x1="110" y1="55" x2="110" y2="75" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="110" y1="110" x2="110" y2="130" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    </g>

    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#64748b"/>
      </marker>
    </defs>
  </svg>
);

const TechBridgeSVG = ({ isPreview }: { isPreview: boolean }) => (
  <svg viewBox={isPreview ? "0 0 400 200" : "0 0 800 400"} className="w-full h-full">
    {/* Desktop/Tablet Layout */}
    <g className="hidden md:block">
      {/* Row 1: Input Tools */}
      <g transform="translate(60, 80)">
        <rect width="110" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <rect x="8" y="12" width="16" height="16" rx="3" fill="#24292e"/>
        <text x="28" y="22" fontSize="13" fill="#334155" fontWeight="500">GitHub</text>
        <text x="28" y="35" fontSize="10" fill="#64748b">Copilot</text>
      </g>

      {/* Row 2: Repository Analysis */}
      <g transform="translate(200, 80)">
        <rect width="110" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="22" fontSize="13" fill="#334155" fontWeight="500">Repository</text>
        <text x="10" y="35" fontSize="10" fill="#64748b">Code mapping</text>
      </g>

      {/* Row 3: Documentation Layer */}
      <g transform="translate(340, 60)">
        <rect width="100" height="35" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
        <text x="8" y="18" fontSize="11" fill="#334155" fontWeight="500">API Docs</text>
        <text x="8" y="30" fontSize="9" fill="#64748b">Real-time</text>
      </g>

      <g transform="translate(340, 105)">
        <rect width="100" height="35" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
        <text x="8" y="18" fontSize="11" fill="#334155" fontWeight="500">Dependencies</text>
        <text x="8" y="30" fontSize="9" fill="#64748b">Analysis</text>
      </g>

      {/* Row 4: Output */}
      <g transform="translate(480, 80)">
        <rect width="120" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="13" fill="#334155" fontWeight="500">Tech Q&A</text>
        <text x="10" y="32" fontSize="10" fill="#64748b">Real-time answers</text>
        <text x="10" y="44" fontSize="9" fill="#64748b">90% faster</text>
      </g>

      {/* Connections - Clean logical flow */}
      <line x1="170" y1="105" x2="200" y2="105" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="310" y1="105" x2="340" y2="77" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="310" y1="105" x2="340" y2="122" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="440" y1="105" x2="480" y2="105" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    </g>

    {/* Mobile Layout */}
    <g className="block md:hidden">
      <g transform="translate(70, 20)">
        <rect width="80" height="35" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">GitHub</text>
        <text x="10" y="30" fontSize="9" fill="#64748b">Copilot</text>
      </g>

      <g transform="translate(60, 75)">
        <rect width="100" height="35" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">Repository</text>
        <text x="10" y="30" fontSize="9" fill="#64748b">Mapping</text>
      </g>

      <g transform="translate(70, 130)">
        <rect width="80" height="35" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">Tech Q&A</text>
        <text x="10" y="30" fontSize="9" fill="#64748b">90% faster</text>
      </g>

      <line x1="110" y1="55" x2="110" y2="75" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="110" y1="110" x2="110" y2="130" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    </g>

    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#64748b"/>
      </marker>
    </defs>
  </svg>
);

const DataWizardSVG = ({ isPreview }: { isPreview: boolean }) => (
  <svg viewBox={isPreview ? "0 0 400 200" : "0 0 800 400"} className="w-full h-full">
    {/* Desktop/Tablet Layout */}
    <g className="hidden md:block">
      {/* Row 1: Data Sources */}
      <g transform="translate(60, 70)">
        <rect width="100" height="60" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="12" fill="#334155" fontWeight="500">WBR Data</text>
        <text x="10" y="32" fontSize="9" fill="#64748b">• Weekly metrics</text>
        <text x="10" y="44" fontSize="9" fill="#64748b">• Performance</text>
        <text x="10" y="56" fontSize="9" fill="#64748b">• KPIs</text>
      </g>

      {/* Row 2: Tools */}
      <g transform="translate(200, 80)">
        <rect width="90" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <circle cx="15" cy="25" r="8" fill="#3b82f6"/>
        <text x="28" y="22" fontSize="12" fill="#334155" fontWeight="500">Comet</text>
        <text x="28" y="35" fontSize="10" fill="#64748b">Auto-scrape</text>
      </g>

      <g transform="translate(320, 80)">
        <rect width="90" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <circle cx="15" cy="25" r="8" fill="#8b5cf6"/>
        <text x="28" y="22" fontSize="12" fill="#334155" fontWeight="500">Perplexity</text>
        <text x="28" y="35" fontSize="10" fill="#64748b">Research</text>
      </g>

      {/* Row 3: Processing */}
      <g transform="translate(200, 150)">
        <rect width="210" height="40" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">Data Integration Workflow</text>
        <text x="10" y="32" fontSize="9" fill="#64748b">Auto-filter → Extract metrics → Cross-reference vault</text>
      </g>

      {/* Row 4: Output */}
      <g transform="translate(450, 70)">
        <rect width="120" height="60" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="12" fill="#334155" fontWeight="500">Auto-Analysis</text>
        <text x="10" y="32" fontSize="10" fill="#64748b">85% less work</text>
        <text x="10" y="44" fontSize="9" fill="#64748b">• Trend analysis</text>
        <text x="10" y="56" fontSize="9" fill="#64748b">• Insights</text>
      </g>

      {/* Connections */}
      <line x1="160" y1="100" x2="200" y2="105" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="160" y1="100" x2="320" y2="105" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="305" y1="130" x2="305" y2="150" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="410" y1="170" x2="450" y2="100" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    </g>

    {/* Mobile Layout */}
    <g className="block md:hidden">
      <g transform="translate(70, 15)">
        <rect width="80" height="35" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">WBR Data</text>
        <text x="10" y="30" fontSize="9" fill="#64748b">Weekly</text>
      </g>

      <g transform="translate(50, 70)">
        <rect width="60" height="30" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="8" y="16" fontSize="10" fill="#334155" fontWeight="500">Comet</text>
        <text x="8" y="26" fontSize="8" fill="#64748b">Scrape</text>
      </g>

      <g transform="translate(120, 70)">
        <rect width="70" height="30" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="8" y="16" fontSize="10" fill="#334155" fontWeight="500">Perplexity</text>
        <text x="8" y="26" fontSize="8" fill="#64748b">Research</text>
      </g>

      <g transform="translate(60, 120)">
        <rect width="100" height="35" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">Auto-Analysis</text>
        <text x="10" y="30" fontSize="9" fill="#64748b">85% less work</text>
      </g>

      <line x1="110" y1="50" x2="80" y2="70" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="110" y1="50" x2="155" y2="70" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="110" y1="100" x2="110" y2="120" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    </g>

    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#64748b"/>
      </marker>
    </defs>
  </svg>
);

const VoiceMagicSVG = ({ isPreview }: { isPreview: boolean }) => (
  <svg viewBox={isPreview ? "0 0 400 200" : "0 0 800 400"} className="w-full h-full">
    {/* Desktop/Tablet Layout */}
    <g className="hidden md:block">
      {/* Row 1: Voice Input */}
      <g transform="translate(60, 80)">
        <rect width="100" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <circle cx="15" cy="25" r="8" fill="#ef4444"/>
        <text x="28" y="22" fontSize="13" fill="#334155" fontWeight="500">Wispr</text>
        <text x="28" y="35" fontSize="10" fill="#64748b">Voice capture</text>
      </g>

      {/* Row 2: Processing */}
      <g transform="translate(200, 80)">
        <rect width="100" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <circle cx="15" cy="25" r="8" fill="#ff6b35"/>
        <text x="28" y="22" fontSize="13" fill="#334155" fontWeight="500">Claude</text>
        <text x="28" y="35" fontSize="10" fill="#64748b">Structure</text>
      </g>

      {/* Row 3: Template System */}
      <g transform="translate(340, 50)">
        <rect width="110" height="35" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
        <text x="8" y="18" fontSize="11" fill="#334155" fontWeight="500">PRD Templates</text>
        <text x="8" y="30" fontSize="9" fill="#64748b">Auto-format</text>
      </g>

      <g transform="translate(340, 95)">
        <rect width="110" height="35" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
        <text x="8" y="18" fontSize="11" fill="#334155" fontWeight="500">Vault Integration</text>
        <text x="8" y="30" fontSize="9" fill="#64748b">Auto-tagging</text>
      </g>

      {/* Row 4: Output */}
      <g transform="translate(490, 80)">
        <rect width="120" height="50" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="13" fill="#334155" fontWeight="500">PRD Ready</text>
        <text x="10" y="32" fontSize="10" fill="#64748b">Structured docs</text>
        <text x="10" y="44" fontSize="9" fill="#64748b">80% faster creation</text>
      </g>

      {/* Beach Walk Context */}
      <g transform="translate(60, 160)">
        <rect width="430" height="30" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">Beach walks → Voice notes → Structured PRDs → Auto-tagged vault entries</text>
      </g>

      {/* Connections */}
      <line x1="160" y1="105" x2="200" y2="105" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="300" y1="105" x2="340" y2="67" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="300" y1="105" x2="340" y2="112" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="450" y1="105" x2="490" y2="105" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="275" y1="130" x2="275" y2="160" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)"/>
    </g>

    {/* Mobile Layout */}
    <g className="block md:hidden">
      <g transform="translate(70, 20)">
        <rect width="80" height="35" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">Wispr</text>
        <text x="10" y="30" fontSize="9" fill="#64748b">Voice</text>
      </g>

      <g transform="translate(70, 75)">
        <rect width="80" height="35" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">Claude</text>
        <text x="10" y="30" fontSize="9" fill="#64748b">Structure</text>
      </g>

      <g transform="translate(60, 130)">
        <rect width="100" height="35" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
        <text x="10" y="18" fontSize="11" fill="#334155" fontWeight="500">PRD Ready</text>
        <text x="10" y="30" fontSize="9" fill="#64748b">80% faster</text>
      </g>

      <line x1="110" y1="55" x2="110" y2="75" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="110" y1="110" x2="110" y2="130" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    </g>

    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#64748b"/>
      </marker>
    </defs>
  </svg>
);