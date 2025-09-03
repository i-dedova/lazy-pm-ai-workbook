import React, { useState, useCallback } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { FlowProps } from './types';

export const FlowStatic = ({ 
  workflowData, 
  allLeftSections, 
  allCenterTasks, 
  outputs 
}: FlowProps) => {
  const [zoom, setZoom] = useState(1);
  const [activeWorkflow, setActiveWorkflow] = useState<string | null>('answers');
  const isMobile = useIsMobile();

  const handleZoomIn = useCallback(() => {
    setZoom(prev => Math.min(prev + 0.2, 2));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  }, []);

  const handleReset = useCallback(() => {
    setZoom(1);
  }, []);

  const handleOutputClick = useCallback((outputType: string) => {
    setActiveWorkflow(activeWorkflow === outputType ? null : outputType);
  }, [activeWorkflow]);

  const workflow = activeWorkflow ? workflowData[activeWorkflow] : null;

  // Calculate responsive dimensions
  const containerWidth = isMobile ? 350 : 600;
  const containerHeight = isMobile ? 300 : 400;

  return (
    <div className="w-full h-full bg-gradient-surface rounded-lg overflow-hidden relative">
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleZoomOut}
          className="bg-background/80 backdrop-blur-sm"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          className="bg-background/80 backdrop-blur-sm"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleZoomIn}
          className="bg-background/80 backdrop-blur-sm"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Main Diagram Container */}
      <div className="w-full h-full overflow-auto">
        <div 
          className="flex items-center justify-center min-h-full p-4"
          style={{ 
            transform: `scale(${zoom})`,
            transformOrigin: 'center center',
            transition: 'transform 0.3s ease'
          }}
        >
          <svg
            width={containerWidth}
            height={containerHeight}
            viewBox={`0 0 ${containerWidth} ${containerHeight}`}
            className="w-full h-full max-w-full max-h-full"
          >
            <defs>
              <marker
                id="arrow"
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
              </marker>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.1" />
              </filter>
            </defs>

            {/* Output Nodes - Top Row */}
            {outputs.map((output, idx) => {
              const isActive = activeWorkflow === output.outputType;
              const x = 50 + idx * (isMobile ? 100 : 180);
              const y = 40;
              
              return (
                <g key={idx}>
                  {/* Output Node */}
                  <rect
                    x={x}
                    y={y}
                    width={isMobile ? 80 : 120}
                    height={60}
                    rx="12"
                    fill={isActive ? "hsl(43 74% 96%)" : "white"}
                    stroke={isActive ? "hsl(43 74% 66%)" : "hsl(220 13% 91%)"}
                    strokeWidth={isActive ? "2" : "1"}
                    filter="url(#shadow)"
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => handleOutputClick(output.outputType)}
                  />
                  
                  {/* Output Content */}
                  <circle
                    cx={x + (isMobile ? 15 : 20)}
                    cy={y + 20}
                    r="4"
                    fill={isActive ? "hsl(43 74% 66%)" : "hsl(43 74% 76%)"}
                  />
                  <text
                    x={x + (isMobile ? 40 : 70)}
                    y={y + 18}
                    textAnchor="middle"
                    fontSize={isMobile ? "10" : "12"}
                    fill="hsl(240 10% 15%)"
                    fontWeight="600"
                  >
                    Output
                  </text>
                  <text
                    x={x + (isMobile ? 40 : 70)}
                    y={y + 35}
                    textAnchor="middle"
                    fontSize={isMobile ? "9" : "11"}
                    fill="hsl(240 10% 15%)"
                    fontWeight="500"
                  >
                    {output.label}
                  </text>
                  <text
                    x={x + (isMobile ? 40 : 70)}
                    y={y + 48}
                    textAnchor="middle"
                    fontSize={isMobile ? "8" : "10"}
                    fill={isActive ? "hsl(43 74% 66%)" : "hsl(43 74% 76%)"}
                    fontWeight="600"
                  >
                    {output.time}
                  </text>
                </g>
              );
            })}

            {/* Left Node - Obsidian Vault */}
            <g>
              <rect
                x="50"
                y={isMobile ? 140 : 160}
                width={isMobile ? 120 : 160}
                height={isMobile ? 120 : 140}
                rx="12"
                fill="white"
                stroke="hsl(215 25% 47%)"
                strokeWidth="2"
                filter="url(#shadow)"
              />
              
              {/* Left Node Header */}
              <circle cx={isMobile ? 70 : 80} cy={isMobile ? 160 : 180} r="4" fill="hsl(215 25% 47%)" />
              <text
                x={isMobile ? 110 : 130}
                y={isMobile ? 165 : 185}
                textAnchor="middle"
                fontSize={isMobile ? "11" : "14"}
                fill="hsl(240 10% 15%)"
                fontWeight="700"
              >
                Obsidian Vault
              </text>
              
              {/* Left Node Sections */}
              {allLeftSections.slice(0, isMobile ? 3 : 4).map((section, idx) => {
                const isActive = workflow?.leftSections.includes(section) || false;
                const yPos = (isMobile ? 180 : 200) + idx * (isMobile ? 18 : 22);
                
                return (
                  <g key={idx}>
                    <circle
                      cx={isMobile ? 65 : 70}
                      cy={yPos}
                      r="2"
                      fill={isActive ? "hsl(215 25% 27%)" : "hsl(215 25% 67%)"}
                    />
                    <text
                      x={isMobile ? 75 : 80}
                      y={yPos + 3}
                      fontSize={isMobile ? "8" : "10"}
                      fill={isActive ? "hsl(240 10% 15%)" : "hsl(220 9% 46%)"}
                      fontWeight={isActive ? "600" : "400"}
                    >
                      {section.length > (isMobile ? 12 : 16) ? section.substring(0, isMobile ? 12 : 16) + '...' : section}
                    </text>
                  </g>
                );
              })}
            </g>

            {/* Center Node - Claude Code */}
            <g>
              <rect
                x={isMobile ? 220 : 300}
                y={isMobile ? 140 : 160}
                width={isMobile ? 120 : 160}
                height={isMobile ? 120 : 140}
                rx="12"
                fill="hsl(250 30% 95%)"
                stroke="hsl(250 30% 60%)"
                strokeWidth="2"
                filter="url(#shadow)"
              />
              
              {/* Center Node Header */}
              <circle cx={isMobile ? 240 : 330} cy={isMobile ? 160 : 180} r="4" fill="hsl(250 30% 40%)" />
              <text
                x={isMobile ? 280 : 380}
                y={isMobile ? 165 : 185}
                textAnchor="middle"
                fontSize={isMobile ? "11" : "14"}
                fill="hsl(250 30% 20%)"
                fontWeight="700"
              >
                Claude Code
              </text>
              
              {/* Center Node Tasks */}
              {allCenterTasks.slice(0, isMobile ? 3 : 4).map((task, idx) => {
                const isActive = workflow?.centerTasks.includes(task) || false;
                const yPos = (isMobile ? 180 : 200) + idx * (isMobile ? 18 : 22);
                
                return (
                  <g key={idx}>
                    <circle
                      cx={isMobile ? 235 : 320}
                      cy={yPos}
                      r="2"
                      fill={isActive ? "hsl(250 30% 40%)" : "hsl(250 30% 70%)"}
                    />
                    <text
                      x={isMobile ? 245 : 330}
                      y={yPos + 3}
                      fontSize={isMobile ? "8" : "10"}
                      fill={isActive ? "hsl(250 30% 20%)" : "hsl(250 30% 50%)"}
                      fontWeight={isActive ? "600" : "400"}
                    >
                      {task.length > (isMobile ? 12 : 16) ? task.substring(0, isMobile ? 12 : 16) + '...' : task}
                    </text>
                  </g>
                );
              })}
            </g>

            {/* Connection Lines */}
            {/* Left to Center (bidirectional) */}
            <path
              d={`M ${isMobile ? 170 : 210} ${isMobile ? 200 : 230} L ${isMobile ? 220 : 300} ${isMobile ? 200 : 230}`}
              stroke={workflow?.color || 'hsl(215 25% 27%)'}
              strokeWidth={workflow ? "3" : "2"}
              opacity={workflow ? "0.8" : "0.4"}
              markerEnd="url(#arrow)"
            />
            <path
              d={`M ${isMobile ? 220 : 300} ${isMobile ? 220 : 250} L ${isMobile ? 170 : 210} ${isMobile ? 220 : 250}`}
              stroke={workflow?.color || 'hsl(215 25% 27%)'}
              strokeWidth={workflow ? "3" : "2"}
              opacity={workflow ? "0.8" : "0.4"}
              markerEnd="url(#arrow)"
            />

            {/* Center to Outputs */}
            {outputs.map((output, idx) => {
              const isActiveOutput = activeWorkflow === output.outputType;
              const startX = isMobile ? 280 : 380;
              const startY = isMobile ? 140 : 160;
              const endX = 50 + idx * (isMobile ? 100 : 180) + (isMobile ? 40 : 60);
              const endY = 100;
              
              return (
                <path
                  key={idx}
                  d={`M ${startX} ${startY} Q ${startX} ${startY - 30} ${endX} ${endY}`}
                  stroke={isActiveOutput ? (workflow?.color || 'hsl(215 25% 27%)') : 'hsl(215 25% 27%)'}
                  strokeWidth={isActiveOutput ? "3" : "2"}
                  opacity={isActiveOutput ? "0.8" : "0.4"}
                  fill="none"
                  markerEnd="url(#arrow)"
                />
              );
            })}

            {/* Workflow Legend */}
            {workflow && (
              <g>
                <rect
                  x={isMobile ? 10 : 20}
                  y={containerHeight - (isMobile ? 60 : 80)}
                  width={isMobile ? 160 : 200}
                  height={isMobile ? 50 : 60}
                  rx="8"
                  fill="white"
                  stroke={workflow.color}
                  strokeWidth="2"
                  filter="url(#shadow)"
                />
                <text
                  x={isMobile ? 90 : 120}
                  y={containerHeight - (isMobile ? 45 : 60)}
                  textAnchor="middle"
                  fontSize={isMobile ? "10" : "12"}
                  fill="hsl(240 10% 15%)"
                  fontWeight="600"
                >
                  Active Workflow
                </text>
                <text
                  x={isMobile ? 90 : 120}
                  y={containerHeight - (isMobile ? 30 : 40)}
                  textAnchor="middle"
                  fontSize={isMobile ? "9" : "11"}
                  fill="hsl(220 9% 46%)"
                >
                  {workflow.name}
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Zoom Level Indicator */}
      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs text-muted-foreground">
        {Math.round(zoom * 100)}%
      </div>
    </div>
  );
};