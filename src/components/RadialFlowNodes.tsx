// Custom Node Components for RadialFlow
export const ObsidianNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-elegant min-w-[220px] md:min-w-[280px]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-4 h-4 rounded-full bg-primary/60"></div>
        <h3 className="font-bold text-foreground text-lg">Obsidian Vault</h3>
      </div>
      <div className="space-y-2">
        {data.sections?.map((section: { name: string; active: boolean }, idx: number) => (
          <div key={idx} className={`flex items-center gap-2 text-sm rounded-lg px-3 py-2 transition-all duration-300 ${
            section.active 
              ? 'text-foreground bg-primary/20 border border-primary/40 scale-105' 
              : 'text-muted-foreground bg-secondary/50'
          }`}>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              section.active ? 'bg-primary animate-pulse' : 'bg-primary/60'
            }`}></div>
            <span className="truncate">{section.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ClaudeNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-gradient-accent backdrop-blur-sm rounded-2xl p-6 shadow-glow min-w-[220px] md:min-w-[280px] text-center relative">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-4 h-4 rounded-full bg-accent-foreground/80"></div>
        <h3 className="font-bold text-accent-foreground text-lg">Claude Code</h3>
      </div>
      
      <div className="space-y-2">
        {data.tasks?.map((task: { name: string; active: boolean }, idx: number) => (
          <div key={idx} className={`flex items-center gap-2 text-sm rounded-lg px-3 py-2 transition-all duration-300 ${
            task.active 
              ? 'text-accent-foreground bg-accent-foreground/30 scale-105 shadow-md' 
              : 'text-accent-foreground/80 bg-accent-foreground/10'
          }`}>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              task.active ? 'bg-accent-foreground animate-pulse' : 'bg-accent-foreground/60'
            }`}></div>
            <span className="truncate">{task.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const OutputNode = ({ data }: { data: any }) => {
  const isActive = data.isActive;
  
  return (
    <div 
      onClick={() => data.onClick(data.outputType)}
      className={`bg-card/80 backdrop-blur-sm border rounded-xl p-4 shadow-elegant w-[200px] cursor-pointer transition-all duration-300 hover:scale-105 ${
        isActive ? 'border-highlight/60 shadow-glow scale-110' : 'border-highlight/30 hover:border-highlight/50'
      }`}
      style={{
        zIndex: isActive ? 1000 : 1,
        position: 'relative',
        transform: isActive ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.2)' : undefined
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
          isActive ? 'bg-highlight animate-pulse' : 'bg-highlight/70'
        }`}></div>
        <h3 className="font-semibold text-foreground text-sm">Output</h3>
      </div>
      <div className={`rounded-lg p-3 transition-all duration-300 ${
        isActive ? 'bg-highlight/20' : 'bg-highlight/10'
      }`}>
        <div className="text-sm font-medium text-foreground">{data.label}</div>
        <div className={`text-xs font-semibold transition-all duration-300 ${
          isActive ? 'text-highlight' : 'text-highlight/80'
        }`}>{data.time}</div>
      </div>
    </div>
  );
};

export const nodeTypes = {
  obsidian: ObsidianNode,
  claude: ClaudeNode,
  output: OutputNode,
};