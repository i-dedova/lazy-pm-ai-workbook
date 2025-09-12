import React from 'react';
import { FlowProps } from './types';
import { useIsMobile } from '@/hooks/use-mobile';

const FlowPreviewMobile = ({ 
  workflowData, 
  allLeftSections, 
  allCenterTasks, 
  allRightOutputs,
  outputMappings 
}: FlowProps) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex items-center gap-0.5 px-1 py-3 landscape:gap-2 landscape:px-2 landscape:py-2">
        {/* Left Node - Obsidian Vault (Portrait: compact, Landscape: much wider) */}
        <div className="rounded-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
          <h3 className="font-semibold text-foreground text-center truncate leading-tight">Obsidian Vault</h3>
          {/* Right connector dot */}
          <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border bg-highlight border-highlight shadow-sm z-10" />
        </div>

        {/* Animated dotted line 1 */}
        <div className="flex-shrink-0">
          <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2" xmlns="http://www.w3.org/2000/svg">
            <line 
              x1="0" 
              y1="1" 
              x2="32" 
              y2="1" 
              stroke="hsl(var(--highlight))" 
              strokeWidth="1"
              strokeDasharray="2 2"
              opacity="0.8"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Center Node - Claude Code (Portrait: compact, Landscape: much wider) */}
        <div className="rounded-lg transition-all duration-300 bg-gradient-accent backdrop-blur-sm shadow-glow w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
          <h3 className="font-semibold text-accent-foreground text-center truncate leading-tight">Claude Code</h3>
          {/* Left connector dot */}
          <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border bg-highlight border-highlight shadow-sm z-10" />
          {/* Right connector dot */}
          <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border bg-highlight border-highlight shadow-sm z-10" />
        </div>

        {/* Animated dotted line 2 */}
        <div className="flex-shrink-0">
          <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2" xmlns="http://www.w3.org/2000/svg">
            <line 
              x1="0" 
              y1="1" 
              x2="32" 
              y2="1" 
              stroke="hsl(var(--highlight))" 
              strokeWidth="1"
              strokeDasharray="2 2"
              opacity="0.8"
              className="animate-pulse animation-delay-500"
            />
          </svg>
        </div>

        {/* Right Node - Outputs (Portrait: compact, Landscape: much wider) */}
        <div className="rounded-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
          <h3 className="font-semibold text-foreground text-center truncate leading-tight">Outputs</h3>
          {/* Left connector dot */}
          <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border bg-highlight border-highlight shadow-sm z-10" />
        </div>
      </div>
    </div>
  );
};

const FlowPreviewDesktop = ({ 
  workflowData, 
  allLeftSections, 
  allCenterTasks, 
  allRightOutputs,
  outputMappings 
}: FlowProps) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
        
        {/* BaseNode - Left Column */}
        <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-2 w-[110px] min-w-[110px] relative md:w-[130px] md:min-w-[130px] lg:w-[150px] lg:min-w-[150px]">
          <h3 className="font-semibold text-foreground text-center text-xs mb-2 md:text-sm">Obsidian Vault</h3>
          
          <div className="space-y-0.5 text-[10px] md:text-xs">
            <div className="flex items-center gap-1 py-0.5 px-1 rounded bg-accent/10 border border-accent/20">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <span className="text-foreground truncate">Claude config</span>
            </div>
            <div className="flex items-center gap-1 py-0.5 px-1 rounded bg-accent/10 border border-accent/20">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <span className="text-foreground truncate">Feature content</span>
            </div>
            <div className="flex items-center gap-1 py-0.5 px-1 rounded bg-accent/10 border border-accent/20">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <span className="text-foreground truncate">Meeting notes</span>
            </div>
          </div>
          
          {/* Right connector */}
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border bg-highlight border-highlight shadow-md z-10"></div>
        </div>

        {/* Connection Line 1 */}
        <div className="flex-shrink-0">
          <svg className="w-4 h-0.5 md:w-5 lg:w-6" viewBox="0 0 24 2" xmlns="http://www.w3.org/2000/svg">
            <line 
              x1="0" 
              y1="1" 
              x2="24" 
              y2="1" 
              stroke="hsl(var(--highlight))" 
              strokeWidth="1"
              strokeDasharray="2 2"
              opacity="0.8"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* CenterNode - Middle Column */}
        <div className="bg-gradient-accent backdrop-blur-sm shadow-glow rounded-lg p-2 w-[110px] min-w-[110px] relative md:w-[130px] md:min-w-[130px] lg:w-[150px] lg:min-w-[150px]">
          <h3 className="font-semibold text-accent-foreground text-center text-xs mb-2 md:text-sm">Claude Code</h3>
          
          <div className="space-y-0.5 text-[10px] md:text-xs">
            <div className="flex items-center gap-1 py-0.5 px-1 rounded bg-accent-foreground/20 border border-accent-foreground/30">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-foreground"></div>
              <span className="text-accent-foreground truncate">Scan & update</span>
            </div>
            <div className="flex items-center gap-1 py-0.5 px-1 rounded bg-accent-foreground/20 border border-accent-foreground/30">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-foreground"></div>
              <span className="text-accent-foreground truncate">Cross-link & tag</span>
            </div>
            <div className="flex items-center gap-1 py-0.5 px-1 rounded bg-accent-foreground/20 border border-accent-foreground/30">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-foreground"></div>
              <span className="text-accent-foreground truncate">Run workflows</span>
            </div>
          </div>
          
          {/* Left connector */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border bg-highlight border-highlight shadow-md z-10"></div>
          {/* Right connector */}
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border bg-highlight border-highlight shadow-md z-10"></div>
        </div>

        {/* Connection Line 2 */}
        <div className="flex-shrink-0">
          <svg className="w-4 h-0.5 md:w-5 lg:w-6" viewBox="0 0 24 2" xmlns="http://www.w3.org/2000/svg">
            <line 
              x1="0" 
              y1="1" 
              x2="24" 
              y2="1" 
              stroke="hsl(var(--highlight))" 
              strokeWidth="1"
              strokeDasharray="2 2"
              opacity="0.8"
              className="animate-pulse animation-delay-500"
            />
          </svg>
        </div>

        {/* RightNode - Right Column */}
        <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-2 w-[110px] min-w-[110px] relative md:w-[130px] md:min-w-[130px] lg:w-[150px] lg:min-w-[150px]">
          <h3 className="font-semibold text-foreground text-center text-xs mb-2 md:text-sm">Outputs</h3>
          
          <div className="space-y-0.5 text-[10px] md:text-xs">
            {/* Selected: Up-to-date docs */}
            <div className="flex items-center gap-1 py-0.5 px-1 rounded bg-highlight/20 border border-highlight ring-1 ring-highlight/50 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-highlight shadow-sm"></div>
              <span className="text-foreground font-medium truncate">Up-to-date docs</span>
            </div>
            {/* Deselected: Feature answers */}
            <div className="flex items-center gap-1 py-0.5 px-1 rounded bg-muted/30 border border-muted opacity-60">
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40"></div>
              <span className="text-muted-foreground truncate">Feature answers</span>
            </div>
            {/* Deselected: Product artifacts */}
            <div className="flex items-center gap-1 py-0.5 px-1 rounded bg-muted/30 border border-muted opacity-60">
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40"></div>
              <span className="text-muted-foreground truncate">Product artifacts</span>
            </div>
          </div>
          
          {/* Left connector */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border bg-highlight border-highlight shadow-md z-10"></div>
        </div>
      </div>
    </div>
  );
};

export const FlowPreview = (props: FlowProps) => {
  const isMobile = useIsMobile();
  
  return isMobile ? <FlowPreviewMobile {...props} /> : <FlowPreviewDesktop {...props} />;
};