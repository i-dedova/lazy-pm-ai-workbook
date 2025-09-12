import React, { useCallback, useMemo, useState, useEffect, useRef } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useIsMobile } from '@/hooks/use-mobile';
import { nodeTypes } from './nodes';
import { FlowProps } from './types';
import { MousePointerClick } from 'lucide-react';


const FlowFullInner = ({ 
  workflowData, 
  allLeftSections, 
  allCenterTasks, 
  allRightOutputs,
  outputMappings,
  workflowType = "product-brain"
}: FlowProps) => {
  const [activeWorkflow, setActiveWorkflow] = useState<string | null>(null);
  const [activeOutput, setActiveOutput] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const reactFlowInstance = useReactFlow();
  
  // Refs for node connections
  const leftNodeRef = useRef<HTMLDivElement>(null);
  const centerNodeRef = useRef<HTMLDivElement>(null);
  
  // Handle canvas click to deselect highlights
  const handlePaneClick = useCallback(() => {
    setActiveWorkflow(null);
    setActiveOutput(null);
  }, []);
  
  
  // Add tablet detection for better responsive behavior
  const [isTablet, setIsTablet] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const [isTabletLandscape, setIsTabletLandscape] = useState(false);
  
  useEffect(() => {
    const checkDeviceOrientation = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isTabletNow = width >= 768 && width < 1024;
      const isMobileLandscapeNow = width <= 896 && height <= 414 && width > height; // Mobile landscape (including rotated phones)
      const isTabletLandscapeNow = isTabletNow && width > height; // Tablet landscape
      
      
      setIsTablet(isTabletNow);
      setIsMobileLandscape(isMobileLandscapeNow);
      setIsTabletLandscape(isTabletLandscapeNow);
    };
    
    checkDeviceOrientation();
    window.addEventListener('resize', checkDeviceOrientation);
    return () => window.removeEventListener('resize', checkDeviceOrientation);
  }, [isMobile]);

  // Tooltip guidance state
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Show tooltip immediately when FlowFull opens and no output is selected
  useEffect(() => {
    if (!activeOutput && !activeWorkflow) {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  }, [activeOutput, activeWorkflow]);
  
  // No auto-hide timer - tooltip stays until user interacts

  const handleOutputClick = useCallback((outputName: string) => {
    const newActiveOutput = activeOutput === outputName ? null : outputName;
    setActiveOutput(newActiveOutput);
    // Clear workflow selection when clicking outputs
    setActiveWorkflow(null);
    // Tooltip will hide automatically via useEffect when activeOutput changes
  }, [activeOutput]);

  const initialNodes: Node[] = useMemo(() => {
    const workflow = activeWorkflow ? workflowData[activeWorkflow] : null;
    const outputMapping = activeOutput && outputMappings ? outputMappings[activeOutput] : null;
    const nodes: Node[] = [];

    // Determine if we're in zigzag mode (mobile portrait or tablet portrait)
    const isZigzagMode = (isMobile && !isMobileLandscape) || (isTablet && !isTabletLandscape);
    

    // Right node - positioned like zigzag chess pattern (bottom-left, aligned with left node)
    const rightX = isZigzagMode ? 20 : isMobile ? 550 : isTablet ? 700 : 850; // Bottom-left for zigzag, aligned with left
    const rightY = isZigzagMode ? (isTablet ? 520 : 470) : isMobileLandscape ? 220 : isMobile ? 280 : 320; // More spacing for tablet portrait
    
    // Check if there's any active workflow (active sections, tasks, or output)
    const hasActiveWorkflow = !!(activeWorkflow || activeOutput);
    
    nodes.push({
      id: 'right-node',
      type: 'right',
      position: { x: rightX, y: rightY },
      data: {
        title: 'Outputs',
        outputs: allRightOutputs.map(output => ({
          name: output,
          active: activeOutput === output
        })),
        onOutputClick: handleOutputClick,
        isPreview: false,
        hasActiveWorkflow,
        isMobile,
        isTablet,
        isMobileLandscape,
        isTabletLandscape
      },
      draggable: false,
    });

    // Calculate all positions first - zigzag chess pattern for portrait modes
    const leftX = isZigzagMode ? 20 : isMobile ? 50 : isTablet ? 100 : 150;
    const leftY = isZigzagMode ? (isTablet ? -10 : -30) : isMobileLandscape ? 220 : isMobile ? 280 : 320; // More Y spacing for tablet portrait
    const centerX = isZigzagMode ? (isTablet ? 350 : 380) : isMobile ? 300 : isTablet ? 400 : 500; // Proper zigzag positioning for both mobile and tablet
    const centerY = isZigzagMode ? (isTablet ? 270 : 220) : isMobileLandscape ? 220 : isMobile ? 280 : 320; // More Y spacing between nodes for tablet portrait

    // Left node - responsive positioning with better spacing
    const getBaseNodeTitle = () => {
      switch (workflowType) {
        case "meeting-memory":
          return "Granola";
        case "product-brain":
          return "Obsidian Vault";
        case "tech-bridge":
          return "Obsidian Vault";
        case "data-wizard":
          return "Comet Browser";
        case "voice-magic":
          return "Wispr Flow";
        default:
          return "Obsidian Vault";
      }
    };

    const getCenterNodeTitle = () => {
      switch (workflowType) {
        case "meeting-memory":
          return "Claude Code";
        case "product-brain":
          return "Claude Code";
        case "tech-bridge":
          return "GitHub Copilot";
        case "data-wizard":
          return "Perplexity Pro";
        case "voice-magic":
          return "Obsidian Vault";
        default:
          return "Claude Code";
      }
    };

    nodes.push({
      id: 'left-node',
      type: 'list',
      position: { x: leftX, y: leftY },
      data: {
        title: getBaseNodeTitle(),
        sections: allLeftSections.map(section => ({
          name: section,
          active: (workflow?.leftSections.includes(section)) || 
                 (outputMapping?.leftSections.includes(section)) || 
                 false
        })),
        isPreview: false,
        nodeRef: leftNodeRef,
        isMobile,
        isTablet,
        isMobileLandscape,
        isTabletLandscape
      },
      draggable: false,
    });

    // Convergence dot between left and center - positioned at center of active connections
    // Match BaseNode sizeStyles exactly: sm=200px, md=220px, lg=240px
    const nodeWidth = isMobile ? 200 : isTablet ? 220 : 240;
    
    // For mobile portrait zigzag layout, position convergence dots differently
    const convergence1X = isMobile && !isMobileLandscape 
      ? (leftX + nodeWidth) + ((centerX - (leftX + nodeWidth)) / 2)  // True center between left node right edge and center node left edge
      : leftX + nodeWidth + (centerX - (leftX + nodeWidth)) / 2;
    
    // Calculate range center for active left sections
    const activeSections = allLeftSections.filter(section => 
      (workflow?.leftSections.includes(section)) || 
      (outputMapping?.leftSections.includes(section))
    );
    
    const nodeHeaderHeight = isMobile ? 50 : 60;
    const itemHeight = isMobile ? 32 : 36;
    const itemSpacing = 4;
    
    // Find topmost and bottommost active left sections - their connector dot positions
    let leftTopConnectorY = Infinity;
    let leftBottomConnectorY = -Infinity;
    activeSections.forEach(section => {
      const sectionIndex = allLeftSections.indexOf(section);
      // Connector dots are at the center of each list item (top-1/2 -translate-y-1/2)
      const connectorDotY = nodeHeaderHeight + (sectionIndex * (itemHeight + itemSpacing)) + (itemHeight / 2);
      leftTopConnectorY = Math.min(leftTopConnectorY, connectorDotY);
      leftBottomConnectorY = Math.max(leftBottomConnectorY, connectorDotY);
    });
    
    const leftRangeCenter = activeSections.length > 0 
      ? (leftTopConnectorY + leftBottomConnectorY) / 2
      : (isMobile ? 140 : 160); // fallback to middle
      

    // Center node - responsive positioning with better spacing
    nodes.push({
      id: 'center-node',
      type: 'center',
      position: { x: centerX, y: centerY },
      data: {
        title: getCenterNodeTitle(),
        tasks: allCenterTasks.map(task => ({
          name: task,
          active: (workflow?.centerTasks.includes(task)) || 
                 (outputMapping?.centerTasks.includes(task)) || 
                 false
        })),
        isPreview: false,
        nodeRef: centerNodeRef,
        isMobile,
        isTablet,
        isMobileLandscape,
        isTabletLandscape
      },
      draggable: false,
    });

    // Convergence dot between center and right - positioned at center of active center tasks
    const convergence2X = isMobile && !isMobileLandscape
      ? (rightX + nodeWidth) + ((centerX - (rightX + nodeWidth)) / 2)  // True center between right node right edge and center node left edge
      : centerX + nodeWidth + (rightX - (centerX + nodeWidth)) / 2;
    
    // Calculate range center for active center tasks (for convergence dot 1)
    const activeTasks = allCenterTasks.filter(task => 
      (workflow?.centerTasks.includes(task)) || 
      (outputMapping?.centerTasks.includes(task))
    );
    
    // Find topmost and bottommost active center tasks - their connector dot positions
    let centerTopConnectorY = Infinity;
    let centerBottomConnectorY = -Infinity;
    activeTasks.forEach(task => {
      const taskIndex = allCenterTasks.indexOf(task);
      // Connector dots are at the center of each list item (top-1/2 -translate-y-1/2)
      const connectorDotY = nodeHeaderHeight + (taskIndex * (itemHeight + itemSpacing)) + (itemHeight / 2);
      centerTopConnectorY = Math.min(centerTopConnectorY, connectorDotY);
      centerBottomConnectorY = Math.max(centerBottomConnectorY, connectorDotY);
    });
    
    const centerRangeCenter = activeTasks.length > 0 
      ? (centerTopConnectorY + centerBottomConnectorY) / 2
      : (isMobile ? 100 : 125); // fallback to middle of shorter center node
      
      
    // Position convergence dot 1 - calculate midpoint between each node's range midpoints
    // Calculate absolute midpoint of left node's activated range
    const leftRangeMidpointAbs = activeSections.length > 0 
      ? leftY + (leftTopConnectorY + leftBottomConnectorY) / 2
      : leftY + leftRangeCenter;
    
    // Calculate absolute midpoint of center node's activated range
    const centerRangeMidpointAbs = activeTasks.length > 0 
      ? centerY + (centerTopConnectorY + centerBottomConnectorY) / 2
      : centerY + centerRangeCenter;
    
    // Check if either node has its topmost item at index 0
    const leftTopIndex = activeSections.length > 0 ? Math.min(...activeSections.map(s => allLeftSections.indexOf(s))) : -1;
    const centerTopIndex = activeTasks.length > 0 ? Math.min(...activeTasks.map(t => allCenterTasks.indexOf(t))) : -1;
    
    // Apply 40px adjustment only if neither top item is at index 0 OR 1
    const shouldAdjust = leftTopIndex !== 0 && leftTopIndex !== 1 && centerTopIndex !== 0 && centerTopIndex !== 1;
    
    // Convergence dot positioned at specific connector dot levels
    const convergence1Y = isZigzagMode
      ? centerY + nodeHeaderHeight + (2 * (itemHeight + itemSpacing)) + (itemHeight / 2)  // Level of index 2 connector dot of center node
      : shouldAdjust 
      ? ((leftRangeMidpointAbs + centerRangeMidpointAbs) / 2) - 40
      : (leftRangeMidpointAbs + centerRangeMidpointAbs) / 2;
    
    
    // Position convergence dot 2 - calculate midpoint between center tasks and right output
    // Find the active right output position
    const activeRightOutputIndex = activeOutput ? allRightOutputs.indexOf(activeOutput) : -1;
    const rightItemY = activeRightOutputIndex !== -1 
      ? nodeHeaderHeight + (activeRightOutputIndex * (itemHeight + itemSpacing)) + (itemHeight / 2)
      : (isMobile ? 140 : 160); // fallback
    const rightItemAbsY = rightY + rightItemY;
    
    // Calculate absolute midpoint of center node's activated range for convergence dot 2
    const centerRangeMidpointAbs2 = activeTasks.length > 0 
      ? centerY + (centerTopConnectorY + centerBottomConnectorY) / 2
      : centerY + centerRangeCenter;
    
    // Apply same adjustment rule to convergence dot 2 (check if center top index or right output index is 0 OR 1)
    const shouldAdjust2 = centerTopIndex !== 0 && centerTopIndex !== 1 && activeRightOutputIndex !== 0 && activeRightOutputIndex !== 1;
    
    // Convergence dot 2 positioned at specific connector dot levels  
    const convergence2Y = isMobile && !isMobileLandscape
      ? rightY + nodeHeaderHeight + (0 * (itemHeight + itemSpacing)) + (itemHeight / 2)  // Level of index 0 connector dot of right node
      : shouldAdjust2 
      ? ((centerRangeMidpointAbs2 + rightItemAbsY) / 2) - 40
      : (centerRangeMidpointAbs2 + rightItemAbsY) / 2;
    
    
    // Only add convergence dot 2 if not in zigzag mode (portrait modes)
    if (!isZigzagMode) {
      nodes.push({
        id: 'convergence-2',
        type: 'convergence',
        position: { x: convergence2X, y: convergence2Y },
        data: {
          active: !!activeOutput,
          isMobile,
          isMobileLandscape,
          isTablet,
          isTabletLandscape
        },
        draggable: false,
      });
    }
    
    // Add convergence nodes after all calculations
    nodes.push({
      id: 'convergence-1',
      type: 'convergence',
      position: { x: convergence1X, y: convergence1Y },
      data: {
        active: !!activeOutput,
        isMobile,
        isMobileLandscape,
        isTablet,
        isTabletLandscape
      },
      draggable: false,
    });

    return nodes;
  }, [activeWorkflow, activeOutput, outputMappings, isMobile, isTablet, isMobileLandscape, isTabletLandscape, workflowData, allLeftSections, allCenterTasks, allRightOutputs, handleOutputClick]);

  const initialEdges: Edge[] = useMemo(() => {
    if (!activeOutput) {
      return [];
    }

    // Determine if we're in zigzag mode (mobile portrait or tablet portrait)
    const isZigzagMode = (isMobile && !isMobileLandscape) || (isTablet && !isTabletLandscape);

    const workflow = activeWorkflow ? workflowData[activeWorkflow] : null;
    const outputMapping = activeOutput && outputMappings ? outputMappings[activeOutput] : null;
    const edges: Edge[] = [];

    // Get active sections and tasks
    const activeSections = allLeftSections.filter(section => 
      (workflow?.leftSections.includes(section)) || 
      (outputMapping?.leftSections.includes(section))
    );
    
    const activeTasks = allCenterTasks.filter(task => 
      (workflow?.centerTasks.includes(task)) || 
      (outputMapping?.centerTasks.includes(task))
    );

    // Create edges from active left sections to convergence dot 1
    activeSections.forEach((section, idx) => {
      const sectionIndex = allLeftSections.indexOf(section);
      edges.push({
        id: `left-${sectionIndex}-to-convergence1`,
        source: 'left-node',
        sourceHandle: `left-${sectionIndex}`,
        target: 'convergence-1',
        type: 'default',
        style: {
          stroke: 'var(--connection-color, #E09E47)',
          strokeWidth: 1,
          opacity: 0.8,
        },
        animated: true,
      });
    });

    // Convergence dot 1 to active center tasks
    activeTasks.forEach((task, idx) => {
      const taskIndex = allCenterTasks.indexOf(task);
      edges.push({
        id: `convergence1-to-center-${taskIndex}`,
        source: 'convergence-1',
        target: 'center-node',
        targetHandle: `center-left-${taskIndex}`,
        type: 'default',
        style: {
          stroke: 'var(--connection-color, #E09E47)',
          strokeWidth: 1,
          opacity: 0.8,
        },
        animated: true,
      });
    });

    // In zigzag mode (portrait modes), connect Right node directly to convergence 1
    // Otherwise, use the normal convergence 2 flow
    if (isZigzagMode) {
      // Right node to convergence 1 (single convergence dot flow from right to bottom)
      const activeOutputIndex = allRightOutputs.indexOf(activeOutput);
      if (activeOutputIndex !== -1) {
        edges.push({
          id: `right-${activeOutputIndex}-to-convergence1-bottom`,
          source: 'right-node',
          sourceHandle: `right-source-${activeOutputIndex}`,
          target: 'convergence-1',
          targetHandle: 'convergence-bottom',
          type: 'default',
          style: {
            stroke: 'var(--connection-color, #E09E47)',
            strokeWidth: 1,
            opacity: 0.8,
          },
          animated: true,
        });
      }
    } else {
      // Normal flow with convergence dot 2
      // Active center tasks to convergence dot 2
      activeTasks.forEach((task, idx) => {
        const taskIndex = allCenterTasks.indexOf(task);
        edges.push({
          id: `center-${taskIndex}-to-convergence2`,
          source: 'center-node',
          sourceHandle: `center-right-${taskIndex}`, // Use right-side connectors for normal layout
          target: 'convergence-2',
          type: 'default',
          style: {
            stroke: 'var(--connection-color, #E09E47)',
            strokeWidth: 1,
            opacity: 0.8,
          },
          animated: true,
        });
      });

      // Convergence dot 2 to active right output
      const activeOutputIndex = allRightOutputs.indexOf(activeOutput);
      if (activeOutputIndex !== -1) {
        edges.push({
          id: `convergence2-to-right-${activeOutputIndex}`,
          source: 'convergence-2',
          target: 'right-node',
          targetHandle: `right-target-${activeOutputIndex}`,
          type: 'default',
          style: {
            stroke: 'var(--connection-color, #E09E47)',
            strokeWidth: 1,
            opacity: 0.8,
          },
          animated: true,
        });
      }
    }


    return edges;
  }, [activeOutput, activeWorkflow, workflowData, outputMappings, allLeftSections, allCenterTasks, allRightOutputs, isMobile, isTablet, isMobileLandscape, isTabletLandscape]);

  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  // Dynamic connection points now handled inside ReactFlow by DynamicConnectionLines

  // Update nodes when activeWorkflow changes
  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  // Handle viewport when orientation changes
  useEffect(() => {
    if (reactFlowInstance) {
      setTimeout(() => {
        if (isMobileLandscape) {
          // Force position for mobile landscape - disable auto centering
          reactFlowInstance.setViewport({ x: -300, y: -50, zoom: 0.5 });
        } else {
          reactFlowInstance.fitView({
            padding: isMobile ? 0.4 : isTablet ? 0.35 : 0.25,
            maxZoom: 2.0,
            minZoom: 0.3
          });
        }
      }, 100);
    }
  }, [isMobileLandscape, isMobile, isTablet, reactFlowInstance]);


  // Calculate responsive dimensions for modal appearance
  const getResponsiveDimensions = () => {
    if (isMobile) {
      // Mobile: Use full container width/height
      return {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%'
      };
    } else if (isTablet) {
      // Tablet: Use full container width/height
      return {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%'
      };
    } else {
      // Desktop: Use full container width/height
      return {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%'
      };
    }
  };

  const dimensions = getResponsiveDimensions();

  return (
    <div 
      className={`w-full bg-background rounded-lg dark:[--connection-color:hsl(var(--highlight))] ${isMobileLandscape ? 'mobile-landscape' : ''}`}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        maxWidth: dimensions.maxWidth,
        maxHeight: dimensions.maxHeight,
        '--connection-color': '#E09E47'
      } as React.CSSProperties}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView={!isMobileLandscape}
        attributionPosition="bottom-right"
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        panOnDrag={true}
        zoomOnScroll={true}
        zoomOnPinch={true}
        onPaneClick={handlePaneClick}
        fitViewOptions={{ 
          padding: isMobile ? 0.4 : isTablet ? 0.35 : 0.25,
          maxZoom: 2.0,
          minZoom: 0.3,
          includeHiddenNodes: false
        }}
        onInit={(instance) => {
          setTimeout(() => {
            if (isMobileLandscape) {
              instance.setViewport({ x: -300, y: 50, zoom: 0.5 });
            } else {
              instance.fitView({
                padding: isMobile ? 0.4 : isTablet ? 0.35 : 0.25,
                maxZoom: 2.0,
                minZoom: 0.3
              });
            }
          }, 100);
        }}
      >
        <Background 
          color="hsl(var(--muted-foreground) / 0.1)" 
          size={1}
          gap={30}
        />
        <Controls 
          className={`!bg-background !border-border !backdrop-blur-sm !rounded-lg !shadow-lg [&_button]:!bg-background [&_button]:!border-border [&_button]:!text-foreground [&_button:hover]:!bg-muted ${
            isMobile ? '!bottom-4 !left-4' : isTablet ? '!bottom-6 !left-6' : ''
          }`}
          showInteractive={false}
          showZoom={true}
          showFitView={true}
          position={isMobile ? 'bottom-left' : isTablet ? 'bottom-left' : 'bottom-left'}
          fitViewOptions={{
            padding: 0.2,
            maxZoom: 2.0,
            minZoom: 0.3
          }}
        />
        {/* Using ReactFlow's built-in edge system instead of custom lines */}
      </ReactFlow>
      
      {/* Contextual Tooltip for First-Time Users */}
      {showTooltip && (
        <div 
          className={`absolute bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-300 ${
            isMobile && isMobileLandscape
              ? 'bottom-4 left-1/2 -translate-x-1/2 px-3 py-2' // Bottom center for mobile landscape
              : isMobile 
                ? 'top-20 left-1/2 -translate-x-1/2 px-3 py-2' // Top center for mobile portrait, pushed down 20px
                : 'top-20 left-1/2 -translate-x-1/2 px-3 py-2 xl:top-4 xl:left-auto xl:right-4 xl:translate-x-0 xl:p-3 xl:max-w-xs' // Center for tablet, right for desktop
          }`}
        >
          <div className={`flex items-center gap-2 text-foreground ${
            (isMobile && isMobileLandscape)
              ? 'text-sm justify-center whitespace-nowrap' // Mobile landscape: text-sm
              : isMobile 
                ? 'text-sm justify-center whitespace-nowrap' // Mobile portrait: text-sm
                : 'text-base justify-center whitespace-nowrap xl:text-lg xl:justify-start' // Tablet centered, desktop left
          }`}>
            <MousePointerClick className={`${isMobile ? 'w-4 h-4' : 'w-4 h-4 xl:w-5 xl:h-5'} text-primary flex-shrink-0`} />
            <span>Click any output to explore the workflow</span>
          </div>
          {!isMobile && (
            <div className="hidden xl:block absolute -bottom-2 right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border/50"
              style={{ 
                filter: 'drop-shadow(0 1px 0 hsl(var(--card) / 0.95))'
              }}
            />
          )}
          {false && (
            <div 
              className="absolute -bottom-2 right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border/50"
              style={{ 
                filter: 'drop-shadow(0 1px 0 hsl(var(--card) / 0.95))'
              }}
            />
          )}
        </div>
      )}
      
      {/* Animated cursor demonstration */}
      {false && showAnimatedCursor && (
        <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
          {/* Animated cursor that moves from tooltip to first output */}
          <div 
            className={`absolute transition-all duration-[3000ms] ease-in-out ${
              isMobile && isMobileLandscape
                ? 'animate-[cursor-demo-mobile-landscape_3s_ease-in-out_forwards]'
                : isMobile 
                  ? 'animate-[cursor-demo-mobile_3s_ease-in-out_forwards]'
                  : 'animate-[cursor-demo-desktop_3s_ease-in-out_forwards]'
            }`}
            style={{
              // Start from exact tooltip icon position
              top: isMobile && isMobileLandscape 
                ? '26px' // Bottom of tooltip + icon centering
                : isMobile 
                  ? '24px' // Top of tooltip + icon centering  
                  : '36px', // Desktop tooltip + icon centering
              right: isMobile && isMobileLandscape
                ? '52px' // Right edge of tooltip - icon position
                : isMobile 
                  ? '52px' // Same for mobile portrait
                  : '104px', // Desktop - account for larger tooltip padding
            }}
          >
            <MousePointerClick className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} text-primary drop-shadow-md`} />
          </div>
          
          {/* Pulsing highlight around target output */}
          <div 
            className={`absolute rounded-lg border-2 border-primary animate-pulse opacity-0 ${
              isMobile && isMobileLandscape
                ? 'animate-[target-highlight-mobile-landscape_3s_ease-in-out_1.5s_forwards]'
                : isMobile 
                  ? 'animate-[target-highlight-mobile_3s_ease-in-out_1.5s_forwards]'
                  : 'animate-[target-highlight-desktop_3s_ease-in-out_1.5s_forwards]'
            }`}
            style={{
              width: isMobile ? '120px' : '180px',
              height: isMobile ? '40px' : '50px',
              top: isMobile ? '45%' : '40%',
              right: isMobile ? '10px' : '50px',
            }}
          />
        </div>
      )}
    </div>
  );
};

export const FlowFull = (props: FlowProps) => {
  return (
    <ReactFlowProvider>
      <FlowFullInner {...props} />
    </ReactFlowProvider>
  );
};