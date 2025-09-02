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

// Individual SVG Components
const ProductBrainSVG = ({ isPreview }: { isPreview: boolean }) => (
  <svg viewBox="0 0 800 400" className="w-full h-full">
    {/* Obsidian Vault */}
    <g transform="translate(50, 80)">
      <rect width="120" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <image href="https://obsidian.md/favicon.ico" x="10" y="10" width="24" height="24"/>
      <text x="40" y="25" fontSize="12" fill="#334155" fontWeight="500">Obsidian Vault</text>
      <text x="10" y="45" fontSize="10" fill="#64748b">Knowledge Base</text>
    </g>

    {/* Smart Tagging System */}
    <g transform="translate(220, 60)">
      <rect width="100" height="40" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="11" fill="#334155" fontWeight="500">#tags</text>
      <text x="10" y="32" fontSize="9" fill="#64748b">Auto-linking</text>
    </g>

    {/* Document Templates */}
    <g transform="translate(220, 120)">
      <rect width="100" height="40" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="11" fill="#334155" fontWeight="500">Templates</text>
      <text x="10" y="32" fontSize="9" fill="#64748b">PRD, Stories</text>
    </g>

    {/* Claude Integration */}
    <g transform="translate(370, 80)">
      <rect width="120" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <circle cx="20" cy="30" r="12" fill="#ff6b35"/>
      <text x="40" y="25" fontSize="12" fill="#334155" fontWeight="500">Claude Code</text>
      <text x="40" y="40" fontSize="10" fill="#64748b">Context Engine</text>
    </g>

    {/* Cross-referencing */}
    <g transform="translate(220, 180)">
      <rect width="100" height="40" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="11" fill="#334155" fontWeight="500">[[Links]]</text>
      <text x="10" y="32" fontSize="9" fill="#64748b">Cross-refs</text>
    </g>

    {/* Generated Documents */}
    <g transform="translate(540, 60)">
      <rect width="120" height="80" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="12" fill="#334155" fontWeight="500">Generated</text>
      <text x="10" y="35" fontSize="10" fill="#64748b">• PRDs</text>
      <text x="10" y="48" fontSize="10" fill="#64748b">• User Stories</text>
      <text x="10" y="61" fontSize="10" fill="#64748b">• Reports</text>
    </g>

    {/* Connections */}
    <line x1="170" y1="110" x2="220" y2="80" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="170" y1="110" x2="220" y2="140" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="170" y1="110" x2="220" y2="200" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="320" y1="110" x2="370" y2="110" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="490" y1="110" x2="540" y2="100" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>

    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
      </marker>
    </defs>
  </svg>
);

const MeetingMemorySVG = ({ isPreview }: { isPreview: boolean }) => (
  <svg viewBox="0 0 800 400" className="w-full h-full">
    {/* Granola Recording */}
    <g transform="translate(50, 80)">
      <rect width="120" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <circle cx="20" cy="30" r="12" fill="#ef4444"/>
      <text x="40" y="25" fontSize="12" fill="#334155" fontWeight="500">Granola</text>
      <text x="40" y="40" fontSize="10" fill="#64748b">Auto-record</text>
    </g>

    {/* Claude Processing */}
    <g transform="translate(220, 80)">
      <rect width="120" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <circle cx="20" cy="30" r="12" fill="#ff6b35"/>
      <text x="40" y="25" fontSize="12" fill="#334155" fontWeight="500">Claude</text>
      <text x="40" y="40" fontSize="10" fill="#64748b">Process & Sort</text>
    </g>

    {/* Folder Organization */}
    <g transform="translate(390, 40)">
      <rect width="140" height="100" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="12" fill="#334155" fontWeight="500">Auto-Organization</text>
      <text x="10" y="35" fontSize="9" fill="#64748b">📁 /Team-Meetings/</text>
      <text x="10" y="48" fontSize="9" fill="#64748b">📁 /Cross-Functional/</text>
      <text x="10" y="61" fontSize="9" fill="#64748b">📁 /1-on-1s/</text>
      <text x="10" y="74" fontSize="9" fill="#64748b">📁 /Business-Reviews/</text>
      <text x="10" y="87" fontSize="9" fill="#64748b">📁 /Stakeholder-Reviews/</text>
    </g>

    {/* Action Items */}
    <g transform="translate(580, 60)">
      <rect width="120" height="80" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="12" fill="#334155" fontWeight="500">Daily TODOs</text>
      <text x="10" y="35" fontSize="10" fill="#64748b">✓ Action items</text>
      <text x="10" y="48" fontSize="10" fill="#64748b">✓ Commitments</text>
      <text x="10" y="61" fontSize="10" fill="#64748b">✓ Follow-ups</text>
    </g>

    {/* Tagging System */}
    <g transform="translate(220, 180)">
      <rect width="120" height="60" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="11" fill="#334155" fontWeight="500">Smart Tagging</text>
      <text x="10" y="35" fontSize="9" fill="#64748b">#psc #apsl #research</text>
      <text x="10" y="48" fontSize="9" fill="#64748b">#DE #IT #web #apps</text>
    </g>

    {/* Connections */}
    <line x1="170" y1="110" x2="220" y2="110" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="340" y1="110" x2="390" y2="90" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="530" y1="90" x2="580" y2="100" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="280" y1="140" x2="280" y2="180" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>

    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
      </marker>
    </defs>
  </svg>
);

const TechBridgeSVG = ({ isPreview }: { isPreview: boolean }) => (
  <svg viewBox="0 0 800 400" className="w-full h-full">
    {/* GitHub Copilot */}
    <g transform="translate(50, 80)">
      <rect width="120" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <rect x="10" y="15" width="20" height="20" rx="4" fill="#24292e"/>
      <text x="40" y="25" fontSize="12" fill="#334155" fontWeight="500">GitHub</text>
      <text x="40" y="40" fontSize="10" fill="#64748b">Copilot</text>
    </g>

    {/* Repository Map */}
    <g transform="translate(220, 80)">
      <rect width="120" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="25" fontSize="12" fill="#334155" fontWeight="500">Repository</text>
      <text x="10" y="40" fontSize="10" fill="#64748b">Code Map</text>
    </g>

    {/* API Documentation */}
    <g transform="translate(390, 40)">
      <rect width="120" height="40" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="11" fill="#334155" fontWeight="500">API Docs</text>
      <text x="10" y="32" fontSize="9" fill="#64748b">Real-time</text>
    </g>

    {/* Code Analysis */}
    <g transform="translate(390, 100)">
      <rect width="120" height="40" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="11" fill="#334155" fontWeight="500">Code Analysis</text>
      <text x="10" y="32" fontSize="9" fill="#64748b">Dependencies</text>
    </g>

    {/* Tech Q&A */}
    <g transform="translate(560, 80)">
      <rect width="120" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="25" fontSize="12" fill="#334155" fontWeight="500">Tech Q&A</text>
      <text x="10" y="40" fontSize="10" fill="#64748b">90% faster</text>
    </g>

    {/* Integration Context */}
    <g transform="translate(220, 180)">
      <rect width="120" height="60" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="11" fill="#334155" fontWeight="500">Context Bridge</text>
      <text x="10" y="35" fontSize="9" fill="#64748b">PM ↔ Engineering</text>
      <text x="10" y="48" fontSize="9" fill="#64748b">No code needed</text>
    </g>

    {/* Connections */}
    <line x1="170" y1="110" x2="220" y2="110" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="340" y1="110" x2="390" y2="60" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="340" y1="110" x2="390" y2="120" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="510" y1="110" x2="560" y2="110" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="280" y1="140" x2="280" y2="180" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>

    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
      </marker>
    </defs>
  </svg>
);

const DataWizardSVG = ({ isPreview }: { isPreview: boolean }) => (
  <svg viewBox="0 0 800 400" className="w-full h-full">
    {/* WBR Data Source */}
    <g transform="translate(50, 60)">
      <rect width="120" height="80" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="12" fill="#334155" fontWeight="500">WBR Data</text>
      <text x="10" y="35" fontSize="10" fill="#64748b">Weekly Reports</text>
      <text x="10" y="48" fontSize="9" fill="#64748b">• Metrics</text>
      <text x="10" y="61" fontSize="9" fill="#64748b">• KPIs</text>
      <text x="10" y="74" fontSize="9" fill="#64748b">• Performance</text>
    </g>

    {/* Comet Browser */}
    <g transform="translate(220, 80)">
      <rect width="120" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <circle cx="20" cy="30" r="12" fill="#3b82f6"/>
      <text x="40" y="25" fontSize="12" fill="#334155" fontWeight="500">Comet</text>
      <text x="40" y="40" fontSize="10" fill="#64748b">Auto-scrape</text>
    </g>

    {/* Perplexity Research */}
    <g transform="translate(390, 80)">
      <rect width="120" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <circle cx="20" cy="30" r="12" fill="#8b5cf6"/>
      <text x="40" y="25" fontSize="12" fill="#334155" fontWeight="500">Perplexity</text>
      <text x="40" y="40" fontSize="10" fill="#64748b">Context Search</text>
    </g>

    {/* Data Integration */}
    <g transform="translate(220, 180)">
      <rect width="290" height="60" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="12" fill="#334155" fontWeight="500">WBR Data Integration Workflow</text>
      <text x="10" y="35" fontSize="9" fill="#64748b">Automated dashboard filtering → Instant metric extraction</text>
      <text x="10" y="48" fontSize="9" fill="#64748b">Cross-reference with vault knowledge → Contextualized insights</text>
    </g>

    {/* Analysis Output */}
    <g transform="translate(560, 60)">
      <rect width="140" height="100" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="12" fill="#334155" fontWeight="500">Auto-Analysis</text>
      <text x="10" y="35" fontSize="10" fill="#64748b">85% less grunt work</text>
      <text x="10" y="50" fontSize="9" fill="#64748b">• Trend analysis</text>
      <text x="10" y="63" fontSize="9" fill="#64748b">• Competitive intel</text>
      <text x="10" y="76" fontSize="9" fill="#64748b">• Stakeholder reports</text>
      <text x="10" y="89" fontSize="9" fill="#64748b">• Data-driven decisions</text>
    </g>

    {/* Connections */}
    <line x1="170" y1="100" x2="220" y2="110" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="340" y1="110" x2="390" y2="110" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="365" y1="140" x2="365" y2="180" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="510" y1="210" x2="560" y2="110" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>

    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
      </marker>
    </defs>
  </svg>
);

const VoiceMagicSVG = ({ isPreview }: { isPreview: boolean }) => (
  <svg viewBox="0 0 800 400" className="w-full h-full">
    {/* Wispr Flow */}
    <g transform="translate(50, 80)">
      <rect width="120" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <circle cx="20" cy="30" r="12" fill="#ef4444"/>
      <text x="40" y="25" fontSize="12" fill="#334155" fontWeight="500">Wispr Flow</text>
      <text x="40" y="40" fontSize="10" fill="#64748b">Beach walks</text>
    </g>

    {/* Claude Processing */}
    <g transform="translate(220, 80)">
      <rect width="120" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <circle cx="20" cy="30" r="12" fill="#ff6b35"/>
      <text x="40" y="25" fontSize="12" fill="#334155" fontWeight="500">Claude</text>
      <text x="40" y="40" fontSize="10" fill="#64748b">Structure</text>
    </g>

    {/* Template System */}
    <g transform="translate(390, 40)">
      <rect width="140" height="80" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="12" fill="#334155" fontWeight="500">Template Engine</text>
      <text x="10" y="35" fontSize="9" fill="#64748b">• PRD templates</text>
      <text x="10" y="48" fontSize="9" fill="#64748b">• User story format</text>
      <text x="10" y="61" fontSize="9" fill="#64748b">• Document structure</text>
    </g>

    {/* Obsidian Integration */}
    <g transform="translate(390, 140)">
      <rect width="140" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <image href="https://obsidian.md/favicon.ico" x="10" y="15" width="20" height="20"/>
      <text x="40" y="25" fontSize="12" fill="#334155" fontWeight="500">Obsidian</text>
      <text x="40" y="40" fontSize="10" fill="#64748b">Vault Integration</text>
      <text x="10" y="55" fontSize="9" fill="#64748b">Auto-tagging & linking</text>
    </g>

    {/* Output Documents */}
    <g transform="translate(580, 60)">
      <rect width="140" height="100" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="12" fill="#334155" fontWeight="500">PRD Ready</text>
      <text x="10" y="35" fontSize="10" fill="#64748b">80% faster creation</text>
      <text x="10" y="50" fontSize="9" fill="#64748b">• Structured PRDs</text>
      <text x="10" y="63" fontSize="9" fill="#64748b">• Cross-referenced</text>
      <text x="10" y="76" fontSize="9" fill="#64748b">• Auto-tagged</text>
      <text x="10" y="89" fontSize="9" fill="#64748b">• Context-aware</text>
    </g>

    {/* Voice Processing Flow */}
    <g transform="translate(50, 200)">
      <rect width="480" height="80" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1"/>
      <text x="10" y="20" fontSize="12" fill="#334155" fontWeight="500">Voice-to-PRD Workflow</text>
      <text x="10" y="35" fontSize="9" fill="#64748b">Voice capture → AI transcription → Template matching → Context integration</text>
      <text x="10" y="48" fontSize="9" fill="#64748b">→ Auto-tagging → Vault storage → Cross-linking → Ready for stakeholders</text>
      <text x="10" y="65" fontSize="9" fill="#334155" fontWeight="500">Beach walks become structured product requirements in minutes</text>
    </g>

    {/* Connections */}
    <line x1="170" y1="110" x2="220" y2="110" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="340" y1="110" x2="390" y2="80" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="340" y1="110" x2="390" y2="170" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="530" y1="120" x2="580" y2="110" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <line x1="290" y1="140" x2="290" y2="200" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowhead)"/>

    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
      </marker>
    </defs>
  </svg>
);