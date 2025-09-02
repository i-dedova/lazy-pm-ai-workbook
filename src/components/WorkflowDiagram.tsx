import { ReactFlow, Node, Edge, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ProductBrainDiagram } from './diagrams/ProductBrainDiagram';
import { MeetingMemoryDiagram } from './diagrams/MeetingMemoryDiagram';
import { TechBridgeDiagram } from './diagrams/TechBridgeDiagram';
import { DataWizardDiagram } from './diagrams/DataWizardDiagram';
import { VoiceMagicDiagram } from './diagrams/VoiceMagicDiagram';

interface WorkflowDiagramProps {
  type: "product-brain" | "meeting-memory" | "tech-bridge" | "data-wizard" | "voice-magic";
  isPreview?: boolean;
}

export const WorkflowDiagram = ({ type, isPreview = false }: WorkflowDiagramProps) => {
  const renderDiagram = () => {
    switch (type) {
      case "product-brain":
        return <ProductBrainDiagram isPreview={isPreview} />;
      case "meeting-memory":
        return <MeetingMemoryDiagram isPreview={isPreview} />;
      case "tech-bridge":
        return <TechBridgeDiagram isPreview={isPreview} />;
      case "data-wizard":
        return <DataWizardDiagram isPreview={isPreview} />;
      case "voice-magic":
        return <VoiceMagicDiagram isPreview={isPreview} />;
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