import { WorkflowSnippet } from "@/components/WorkflowSnippet";
import { MobileNav } from "@/components/MobileNav";
import { StickyCTA } from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin, FileText, Beaker, Target, Zap, TestTube, Eye, Palette } from "lucide-react";
const Index = () => {
  const workflows = [{
    title: "Product Brain",
    tools: "Obsidian + Claude Code",
    keyBenefits: ["No more copy-paste context feeding to AI", "Self-updating knowledge vault grows daily", "Instant access to cross-team dependencies"],
    metric: "95% less context setup time",
    icon: "brain" as const
  }, {
    title: "Meeting Memory",
    tools: "Granola + Claude Code",
    keyBenefits: ["Auto-tracks promises and commitments", "Never lose decisions or action items", "Supernatural memory powers unlocked"],
    metric: "400% better follow-through",
    icon: "message" as const
  }, {
    title: "Tech Bridge",
    tools: "GitHub Copilot + Repository Map",
    keyBenefits: ["Answer API questions in real-time", "Speak dev without learning to code", "Proactive technical research"],
    metric: "90% faster technical answers",
    icon: "code" as const
  }, {
    title: "Data Wizard",
    tools: "Comet Browser + Perplexity Pro",
    keyBenefits: ["Automated dashboard filtering", "Instant metric extraction", "Defend decisions with data"],
    metric: "85% less data grunt work",
    icon: "chart" as const
  }, {
    title: "Voice Magic",
    tools: "Wispr Flow + Obsidian",
    keyBenefits: ["Clean voice-to-text capture", "Beach walks become PRD sessions", "Rapid documentation workflow"],
    metric: "80% faster PRD creation",
    icon: "mic" as const
  }];
  return <div className="min-h-screen bg-gradient-surface">
      <MobileNav />
      <StickyCTA />

      {/* Hero Section - Clean & Simple */}
      <section className="py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background dark:from-accent/12 dark:via-background dark:to-background"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center space-y-6 lg:space-y-8 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight max-w-4xl mx-auto">
                My Lazy PM's AI Workbook
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                Battle-tested workflows that turn procrastination into execution excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hello Section - Rebuilt to match Framework structure exactly */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="bg-card/50 border-border/50 animate-slide-up">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl lg:text-3xl font-semibold">Hello 👋</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                  I'm Inna Dedova. I'm curious, I like tinkering, and I hate routine tasks.<br />
                  So I automate them to focus on strategic work and support my team.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                  <strong className="text-foreground">The result:</strong> My dev team calls me "unblocker" with supernatural powers.<br />
                  Stakeholders wonder how I get data so fast.
                </p>
                <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Zap className="h-4 w-4" />
                    95% faster context setup
                  </div>
                  <div className="flex items-center gap-2 text-sm text-accent font-medium">
                    <Target className="h-4 w-4" />
                    400% better follow-through
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Framework - Simplified */}
      <section id="framework" className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="bg-card/80 border-primary/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl lg:text-3xl font-semibold text-primary">
                How I Pick My Battles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <div className="text-xl lg:text-2xl font-semibold text-foreground max-w-3xl mx-auto">
                  Pain Level + Time Consumed + Procrastination Factor = Priority
                </div>
                <p className="text-muted-foreground text-base lg:text-lg max-w-3xl mx-auto">
                  I ask Claude/Perplexity endless questions until I crack each workflow. Messy but effective.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Arsenal - Mobile-Optimized Cards */}
      <section id="arsenal" className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              My AI Arsenal
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              5 workflows that eliminated my busywork
            </p>
          </div>
          
          <div className="space-y-6">
            {workflows.map((workflow, index) => <div key={index} className="animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <WorkflowSnippet {...workflow} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Lab - Condensed */}
      <section id="lab" className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="bg-card/80 border-accent/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl lg:text-3xl font-semibold text-accent flex items-center justify-center gap-3">
                <Beaker className="h-6 w-6 lg:h-8 lg:w-8" />
                Cooking in the Lab
              </CardTitle>
              <CardDescription className="text-base lg:text-lg max-w-3xl mx-auto py-[6px]">
                Because the automation addiction is real
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 bg-background/50 rounded-xl">
                  <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <TestTube className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">UAT Automation</h4>
                    <p className="text-sm text-muted-foreground">Comet Browser magic</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-background/50 rounded-xl">
                  <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <Eye className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Competitor Intel</h4>
                    <p className="text-sm text-muted-foreground">Automated flow analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-background/50 rounded-xl">
                  <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <Palette className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">UI Prototyping</h4>
                    <p className="text-sm text-muted-foreground">Magic Patterns integration</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Connect - Prominent CTAs */}
      <section id="connect" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="bg-gradient-accent text-accent-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl lg:text-4xl font-semibold">Let's Connect!</CardTitle>
              <CardDescription className="text-accent-foreground/80 text-lg lg:text-xl max-w-3xl mx-auto py-[10px]">
                Love efficiency hacks? Let's chat about AI workflows and product strategy. 
                <br />
                Always happy to connect with fellow builders who automate busy work.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-8">
              <div className="flex justify-center">
                <Button size="lg" variant="secondary" className="bg-background/20 hover:bg-background/30 text-accent-foreground border-background/30 px-8 py-4 text-lg font-semibold" asChild>
                  <a href="https://www.linkedin.com/in/innadedova/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 mr-3" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-border/50 bg-background/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Built with curiosity, powered by laziness 🚀
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;