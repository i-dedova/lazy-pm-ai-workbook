import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  PRODUCT_BRAIN_WORKFLOWS,
  PRODUCT_BRAIN_LEFT_SECTIONS,
  PRODUCT_BRAIN_CENTER_TASKS,
  PRODUCT_BRAIN_RIGHT_OUTPUTS,
  OUTPUT_MAPPINGS,
  MEETING_MEMORY_WORKFLOWS,
  MEETING_MEMORY_LEFT_SECTIONS,
  MEETING_MEMORY_CENTER_TASKS,
  MEETING_MEMORY_RIGHT_OUTPUTS,
  MEETING_MEMORY_OUTPUT_MAPPINGS
} from '@/data/workflows';

interface WorkflowPreviewProps {
  type: "product-brain" | "meeting-memory" | "tech-bridge" | "data-wizard" | "voice-magic";
}

// Mobile preview component for Product Brain - simple 3-node flow
const MobilePreviewProductBrain = () => {
  return (
    <div className="flex items-center gap-0.5 px-1 py-2 landscape:gap-2 landscape:px-2">
      {/* Left Node - Obsidian Vault */}
      <div className="rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-foreground text-center truncate leading-tight">Obsidian Vault</h3>
        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>

      {/* Connection Line 1 */}
      <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2">
        <line x1="0" y1="1" x2="32" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse" />
      </svg>

      {/* Center Node - Claude Code */}
      <div className="rounded-lg bg-gradient-accent backdrop-blur-sm shadow-glow w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-accent-foreground text-center truncate leading-tight">Claude Code</h3>
        <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>

      {/* Connection Line 2 */}
      <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2">
        <line x1="0" y1="1" x2="32" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse animation-delay-500" />
      </svg>

      {/* Right Node - Outputs */}
      <div className="rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-foreground text-center truncate leading-tight">Outputs</h3>
        <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>
    </div>
  );
};

// Mobile preview component for Voice Magic - simple 3-node flow
const MobilePreviewVoiceMagic = () => {
  return (
    <div className="flex items-center gap-0.5 px-1 py-2 landscape:gap-2 landscape:px-2">
      {/* Left Node - Wispr Flow */}
      <div className="rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-foreground text-center truncate leading-tight">Wispr Flow</h3>
        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>

      {/* Connection Line 1 */}
      <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2">
        <line x1="0" y1="1" x2="32" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse" />
      </svg>

      {/* Center Node - Obsidian Vault */}
      <div className="rounded-lg bg-gradient-accent backdrop-blur-sm shadow-glow w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-accent-foreground text-center truncate leading-tight">Obsidian Vault</h3>
        <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>

      {/* Connection Line 2 */}
      <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2">
        <line x1="0" y1="1" x2="32" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse animation-delay-500" />
      </svg>

      {/* Right Node - Outputs */}
      <div className="rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-foreground text-center truncate leading-tight">Outputs</h3>
        <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>
    </div>
  );
};

// Mobile preview component for Data Wizard - simple 3-node flow
const MobilePreviewDataWizard = () => {
  return (
    <div className="flex items-center gap-0.5 px-1 py-2 landscape:gap-2 landscape:px-2">
      {/* Left Node - Comet Browser */}
      <div className="rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-foreground text-center truncate leading-tight">Comet Browser</h3>
        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>

      {/* Connection Line 1 */}
      <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2">
        <line x1="0" y1="1" x2="32" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse" />
      </svg>

      {/* Center Node - Perplexity Pro */}
      <div className="rounded-lg bg-gradient-accent backdrop-blur-sm shadow-glow w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-accent-foreground text-center truncate leading-tight">Perplexity Pro</h3>
        <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>

      {/* Connection Line 2 */}
      <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2">
        <line x1="0" y1="1" x2="32" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse animation-delay-500" />
      </svg>

      {/* Right Node - Outputs */}
      <div className="rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-foreground text-center truncate leading-tight">Outputs</h3>
        <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>
    </div>
  );
};

// Mobile preview component for Tech Bridge - simple 3-node flow
const MobilePreviewTechBridge = () => {
  return (
    <div className="flex items-center gap-0.5 px-1 py-2 landscape:gap-2 landscape:px-2">
      {/* Left Node - Obsidian Vault */}
      <div className="rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-foreground text-center truncate leading-tight">Obsidian Vault</h3>
        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>

      {/* Connection Line 1 */}
      <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2">
        <line x1="0" y1="1" x2="32" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse" />
      </svg>

      {/* Center Node - GitHub Copilot */}
      <div className="rounded-lg bg-gradient-accent backdrop-blur-sm shadow-glow w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-accent-foreground text-center truncate leading-tight">GitHub Copilot</h3>
        <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>

      {/* Connection Line 2 */}
      <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2">
        <line x1="0" y1="1" x2="32" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse animation-delay-500" />
      </svg>

      {/* Right Node - Outputs */}
      <div className="rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-foreground text-center truncate leading-tight">Outputs</h3>
        <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>
    </div>
  );
};

// Mobile preview component for Meeting Memory - simple 3-node flow
const MobilePreviewMeetingMemory = () => {
  return (
    <div className="flex items-center gap-0.5 px-1 py-2 landscape:gap-2 landscape:px-2">
      {/* Left Node - Granola */}
      <div className="rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-foreground text-center truncate leading-tight">Granola</h3>
        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>

      {/* Connection Line 1 */}
      <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2">
        <line x1="0" y1="1" x2="32" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse" />
      </svg>

      {/* Center Node - Claude Code */}
      <div className="rounded-lg bg-gradient-accent backdrop-blur-sm shadow-glow w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-accent-foreground text-center truncate leading-tight">Claude Code</h3>
        <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>

      {/* Connection Line 2 */}
      <svg className="w-3 h-0.5 landscape:w-8 landscape:h-0.5" viewBox="0 0 32 2">
        <line x1="0" y1="1" x2="32" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse animation-delay-500" />
      </svg>

      {/* Right Node - Outputs */}
      <div className="rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant w-[70px] min-w-[70px] h-[28px] p-0.5 text-[8px] flex items-center justify-center relative landscape:w-[140px] landscape:min-w-[140px] landscape:h-[32px] landscape:text-[11px] landscape:px-2 landscape:p-1">
        <h3 className="font-semibold text-foreground text-center truncate leading-tight">Outputs</h3>
        <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-sm z-10" />
      </div>
    </div>
  );
};

// Desktop preview component - workflow with list nodes
const DesktopPreview = () => {
  return (
    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
      {/* BaseNode - Left Column */}
      <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Obsidian Vault</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Active: Claude Config */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-primary/20 border border-primary/40 scale-105">
            <span className="text-foreground font-medium truncate text-center">Claude Config</span>
          </div>
          {/* Active: Feature Content */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-primary/20 border border-primary/40 scale-105">
            <span className="text-foreground font-medium truncate text-center">Feature Content</span>
          </div>
          {/* Active: Meeting Notes */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-primary/20 border border-primary/40 scale-105">
            <span className="text-foreground font-medium truncate text-center">Meeting Notes</span>
          </div>
        </div>
        
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>

      {/* Connection Line 1 */}
      <svg className="w-3 h-0.5 md:w-4 lg:w-5" viewBox="0 0 24 2">
        <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse" />
      </svg>

      {/* CenterNode - Middle Column */}
      <div className="bg-gradient-accent backdrop-blur-sm shadow-glow rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-accent-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Claude Code</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Active: Scan & Update */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/30 scale-105 shadow-md">
            <span className="text-accent-foreground font-medium truncate text-center">Scan & Update</span>
          </div>
          {/* Active: Cross-link & Tag */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/30 scale-105 shadow-md">
            <span className="text-accent-foreground font-medium truncate text-center">Cross-link & Tag</span>
          </div>
          {/* Active: Run Workflows */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/30 scale-105 shadow-md">
            <span className="text-accent-foreground font-medium truncate text-center">Run Workflows</span>
          </div>
        </div>
        
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>

      {/* Connection Line 2 */}
      <svg className="w-3 h-0.5 md:w-4 lg:w-5" viewBox="0 0 24 2">
        <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse animation-delay-500" />
      </svg>

      {/* RightNode - Right Column */}
      <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Outputs</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Selected: Up-to-date Docs */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-[#E09E47]/20 border border-[#E09E47] ring-1 ring-[#E09E47]/50 dark:bg-highlight/20 dark:border-highlight dark:ring-highlight/50 shadow-sm">
            <span className="text-foreground font-medium truncate text-center">Up-to-date Docs</span>
          </div>
          {/* Deselected: Feature Answers */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-muted/30 border border-muted opacity-60">
            <span className="text-muted-foreground truncate text-center">Feature Answers</span>
          </div>
          {/* Deselected: Product Artifacts */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-muted/30 border border-muted opacity-60">
            <span className="text-muted-foreground truncate text-center">Product Artifacts</span>
          </div>
        </div>
        
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>
    </div>
  );
};

// Meeting Memory preview component
const MeetingMemoryPreview = () => {
  return (
    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
      {/* Granola - Left Column */}
      <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Granola</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Active: Meeting Transcription */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-primary/20 border border-primary/40 scale-105">
            <span className="text-foreground font-medium truncate text-center">Meeting Transcription</span>
          </div>
          {/* Active: Obsidian Sync */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-primary/20 border border-primary/40 scale-105">
            <span className="text-foreground font-medium truncate text-center">Obsidian Sync</span>
          </div>
          {/* Inactive: Custom Templates */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-secondary/50">
            <span className="text-muted-foreground truncate text-center">Custom Templates</span>
          </div>
        </div>
        
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>

      {/* Connection Line 1 */}
      <svg className="w-3 h-0.5 md:w-4 lg:w-5" viewBox="0 0 24 2">
        <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse" />
      </svg>

      {/* Claude Code - Middle Column */}
      <div className="bg-gradient-accent backdrop-blur-sm shadow-glow rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-accent-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Claude Code</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Active: Proofread & Correct */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/30 scale-105 shadow-md">
            <span className="text-accent-foreground font-medium truncate text-center">Proofread & Correct</span>
          </div>
          {/* Active: Cross-link & Tag */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/30 scale-105 shadow-md">
            <span className="text-accent-foreground font-medium truncate text-center">Cross-link & Tag</span>
          </div>
          {/* Inactive: Process & Sort */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/10">
            <span className="text-accent-foreground/80 truncate text-center">Process & Sort</span>
          </div>
        </div>
        
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>

      {/* Connection Line 2 */}
      <svg className="w-3 h-0.5 md:w-4 lg:w-5" viewBox="0 0 24 2">
        <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse animation-delay-500" />
      </svg>

      {/* Outputs - Right Column */}
      <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Outputs</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Selected: Updated Docs */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-[#E09E47]/20 border border-[#E09E47] ring-1 ring-[#E09E47]/50 dark:bg-highlight/20 dark:border-highlight dark:ring-highlight/50 shadow-sm">
            <span className="text-foreground font-medium truncate text-center">Updated Docs</span>
          </div>
          {/* Deselected: Daily ToDo */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-muted/30 border border-muted opacity-60">
            <span className="text-muted-foreground truncate text-center">Daily ToDo</span>
          </div>
        </div>
        
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>
    </div>
  );
};

// Tech Bridge preview component
const TechBridgePreview = () => {
  return (
    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
      {/* Obsidian Vault - Left Column */}
      <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Obsidian Vault</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Active: Repository Directory */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-primary/20 border border-primary/40 scale-105">
            <span className="text-foreground font-medium truncate text-center">Repository Directory</span>
          </div>
          {/* Active: Service Description */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-primary/20 border border-primary/40 scale-105">
            <span className="text-foreground font-medium truncate text-center">Service Description</span>
          </div>
        </div>
        
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>

      {/* Connection Line 1 */}
      <svg className="w-3 h-0.5 md:w-4 lg:w-5" viewBox="0 0 24 2">
        <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse" />
      </svg>

      {/* GitHub Copilot - Middle Column */}
      <div className="bg-gradient-accent backdrop-blur-sm shadow-glow rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-accent-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">GitHub Copilot</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Active: Chat with Repository */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/30 scale-105 shadow-md">
            <span className="text-accent-foreground font-medium truncate text-center">Chat with Repository</span>
          </div>
          {/* Active: Recent PRs */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/30 scale-105 shadow-md">
            <span className="text-accent-foreground font-medium truncate text-center">Recent PRs</span>
          </div>
        </div>
        
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>

      {/* Connection Line 2 */}
      <svg className="w-3 h-0.5 md:w-4 lg:w-5" viewBox="0 0 24 2">
        <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse animation-delay-500" />
      </svg>

      {/* Outputs - Right Column */}
      <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Outputs</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Selected: Understand APIs */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-[#E09E47]/20 border border-[#E09E47] ring-1 ring-[#E09E47]/50 dark:bg-highlight/20 dark:border-highlight dark:ring-highlight/50 shadow-sm">
            <span className="text-foreground font-medium truncate text-center">Understand APIs</span>
          </div>
          {/* Deselected: Check Tracking Triggers */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-muted/30 border border-muted opacity-60">
            <span className="text-muted-foreground truncate text-center">Check Tracking Triggers</span>
          </div>
        </div>
        
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>
    </div>
  );
};

// Data Wizard preview component
const DataWizardPreview = () => {
  return (
    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
      {/* Comet Browser - Left Column */}
      <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Comet Browser</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Active: Check Dashboards */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-primary/20 border border-primary/40 scale-105">
            <span className="text-foreground font-medium truncate text-center">Check Dashboards</span>
          </div>
          {/* Active: Download CSVs */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-primary/20 border border-primary/40 scale-105">
            <span className="text-foreground font-medium truncate text-center">Download CSVs</span>
          </div>
          {/* Inactive: Edit Google Sheets */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-secondary/50">
            <span className="text-muted-foreground truncate text-center">Edit Google Sheets</span>
          </div>
        </div>
        
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>

      {/* Connection Line 1 */}
      <svg className="w-3 h-0.5 md:w-4 lg:w-5" viewBox="0 0 24 2">
        <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse" />
      </svg>

      {/* Perplexity Pro - Middle Column */}
      <div className="bg-gradient-accent backdrop-blur-sm shadow-glow rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-accent-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Perplexity Pro</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Active: Calculate KPIs */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/30 scale-105 shadow-md">
            <span className="text-accent-foreground font-medium truncate text-center">Calculate KPIs</span>
          </div>
          {/* Inactive: Data Projections */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/10">
            <span className="text-accent-foreground/80 truncate text-center">Data Projections</span>
          </div>
          {/* Inactive: Seasonal Analysis */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/10">
            <span className="text-accent-foreground/80 truncate text-center">Seasonal Analysis</span>
          </div>
        </div>
        
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>

      {/* Connection Line 2 */}
      <svg className="w-3 h-0.5 md:w-4 lg:w-5" viewBox="0 0 24 2">
        <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse animation-delay-500" />
      </svg>

      {/* Outputs - Right Column */}
      <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Outputs</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Deselected: Post-Incident Analysis */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-muted/30 border border-muted opacity-60">
            <span className="text-muted-foreground truncate text-center">Post-Incident Analysis</span>
          </div>
          {/* Selected: KPI Reports */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-[#E09E47]/20 border border-[#E09E47] ring-1 ring-[#E09E47]/50 dark:bg-highlight/20 dark:border-highlight dark:ring-highlight/50 shadow-sm">
            <span className="text-foreground font-medium truncate text-center">KPI Reports</span>
          </div>
          {/* Deselected: Weekly OKR Update */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-muted/30 border border-muted opacity-60">
            <span className="text-muted-foreground truncate text-center">Weekly OKR Update</span>
          </div>
        </div>
        
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>
    </div>
  );
};

// Voice Magic preview component
const VoiceMagicPreview = () => {
  return (
    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
      {/* Wispr Flow - Left Column */}
      <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Wispr Flow</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Active: Just Talk, A LOT */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-primary/20 border border-primary/40 scale-105">
            <span className="text-foreground font-medium truncate text-center">Just Talk, A LOT</span>
          </div>
          {/* Inactive: Snippet Copy-Paste */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-secondary/50">
            <span className="text-muted-foreground truncate text-center">Snippet Copy-Paste</span>
          </div>
        </div>
        
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>

      {/* Connection Line 1 */}
      <svg className="w-3 h-0.5 md:w-4 lg:w-5" viewBox="0 0 24 2">
        <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse" />
      </svg>

      {/* Obsidian Vault - Middle Column */}
      <div className="bg-gradient-accent backdrop-blur-sm shadow-glow rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-accent-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Obsidian Vault</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Active: Cross-Device Notes */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/30 scale-105 shadow-md">
            <span className="text-accent-foreground font-medium truncate text-center">Cross-Device Notes</span>
          </div>
          {/* Inactive: Claude Workflows */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/10">
            <span className="text-accent-foreground/80 truncate text-center">Claude Workflows</span>
          </div>
          {/* Inactive: Artifact Templates */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-accent-foreground/10">
            <span className="text-accent-foreground/80 truncate text-center">Artifact Templates</span>
          </div>
        </div>
        
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>

      {/* Connection Line 2 */}
      <svg className="w-3 h-0.5 md:w-4 lg:w-5" viewBox="0 0 24 2">
        <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(250 30% 60%)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" className="animate-pulse animation-delay-500" />
      </svg>

      {/* Outputs - Right Column */}
      <div className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-lg p-1.5 w-[90px] min-w-[90px] relative md:w-[100px] md:min-w-[100px] lg:w-[120px] lg:min-w-[120px]">
        <h3 className="font-semibold text-foreground text-center text-[10px] mb-1 md:text-xs lg:text-sm">Outputs</h3>
        
        <div className="space-y-0.5 text-[9px] md:text-[10px] lg:text-xs">
          {/* Selected: Ideas Captured */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-[#E09E47]/20 border border-[#E09E47] ring-1 ring-[#E09E47]/50 dark:bg-highlight/20 dark:border-highlight dark:ring-highlight/50 shadow-sm">
            <span className="text-foreground font-medium truncate text-center">Ideas Captured</span>
          </div>
          {/* Deselected: Product Artifacts */}
          <div className="flex items-center justify-center py-0.5 px-0.5 rounded bg-muted/30 border border-muted opacity-60">
            <span className="text-muted-foreground truncate text-center">Product Artifacts</span>
          </div>
        </div>
        
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#E09E47] bg-[#E09E47] dark:bg-highlight dark:border-highlight shadow-md z-10"></div>
      </div>
    </div>
  );
};

// Simple SVG previews for other workflow types
const SimpleSVGPreview = ({ type }: { type: string }) => {
  // For now, return a placeholder that maintains full width/height
  return (
    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
      {type} preview
    </div>
  );
};

// Main preview component with clean architecture
export const WorkflowPreview = ({ type }: WorkflowPreviewProps) => {
  const isMobile = useIsMobile();
  
  // Container handles ALL layout/centering concerns
  // Child components ONLY render content
  return (
    <div className="h-full w-full flex items-center justify-center">
      {type === "product-brain" ? (
        isMobile ? <MobilePreviewProductBrain /> : <DesktopPreview />
      ) : type === "meeting-memory" ? (
        isMobile ? <MobilePreviewMeetingMemory /> : <MeetingMemoryPreview />
      ) : type === "tech-bridge" ? (
        isMobile ? <MobilePreviewTechBridge /> : <TechBridgePreview />
      ) : type === "data-wizard" ? (
        isMobile ? <MobilePreviewDataWizard /> : <DataWizardPreview />
      ) : type === "voice-magic" ? (
        isMobile ? <MobilePreviewVoiceMagic /> : <VoiceMagicPreview />
      ) : (
        <SimpleSVGPreview type={type} />
      )}
    </div>
  );
};