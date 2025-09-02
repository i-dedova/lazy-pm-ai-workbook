import { WorkflowSnippet } from "@/components/WorkflowSnippet";
import { MobileNav } from "@/components/MobileNav";
import { StickyCTA } from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin, FileText, Beaker, Target, Zap } from "lucide-react";

const Index = () => {
  const workflows = [
    {
      title: "Product Brain",
      tools: "Obsidian + Claude Code",
      keyBenefits: [
        "No more copy-paste context feeding to AI",
        "Self-updating knowledge vault grows daily", 
        "Instant access to cross-team dependencies"
      ],
      metric: "95% less context setup time",
      icon: "brain" as const
    },
    {
      title: "Meeting Memory", 
      tools: "Granola + Claude Code",
      keyBenefits: [
        "Auto-tracks promises and commitments",
        "Never lose decisions or action items",
        "Supernatural memory powers unlocked"
      ],
      metric: "400% better follow-through",
      icon: "message" as const
    },
    {
      title: "Tech Bridge",
      tools: "GitHub Copilot + Repository Map", 
      keyBenefits: [
        "Answer API questions in real-time",
        "Speak dev without learning to code",
        "Proactive technical research"
      ],
      metric: "90% faster technical answers",
      icon: "code" as const
    },
    {
      title: "Data Wizard",
      tools: "Comet Browser + Perplexity Pro",
      keyBenefits: [
        "Automated dashboard filtering",
        "Instant metric extraction", 
        "Defend decisions with data"
      ],
      metric: "85% less data grunt work",
      icon: "chart" as const
    },
    {
      title: "Voice Magic",
      tools: "Wispr Flow + Obsidian",
      keyBenefits: [
        "Clean voice-to-text capture",
        "Beach walks become PRD sessions",
        "Rapid documentation workflow"
      ],
      metric: "80% faster PRD creation",
      icon: "mic" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      <MobileNav />
      <StickyCTA />

      {/* Hero Section - Clean & Simple */}
      <section className="py-12 lg:py-20">
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
      </section>

      {/* Quick Intro - Scannable */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="bg-card/50 border-border/50 animate-slide-up">
            <CardContent className="p-6 lg:p-8 text-center">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-semibold">Hello 👋</h2>
                <div className="space-y-4 text-muted-foreground max-w-3xl mx-auto">
                  <p className="text-base lg:text-lg">
                    I'm Inna Dedova. I'm curious, I like tinkering, and I hate routine tasks.<br />
                    So I automate them to focus on strategic work and support my team.
                  </p>
                  <p className="text-base lg:text-lg">
                    <strong className="text-foreground">The result:</strong> My dev team calls me "unblocker" with supernatural powers.<br />
                    Stakeholders wonder how I get data so fast.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
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
      <section id="framework" className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="bg-card border-primary/20 shadow-[var(--shadow-elegant)]">
            <CardHeader className="text-center pb-4">
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
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 max-w-3xl mx-auto">
              My AI Arsenal
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              5 workflows that eliminated my busywork
            </p>
          </div>
          
          <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {workflows.map((workflow, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <WorkflowSnippet {...workflow} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab - Condensed */}
      <section id="lab" className="py-12 lg:py-16 bg-accent/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="bg-card/80 border-accent/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl lg:text-3xl font-semibold text-accent flex items-center justify-center gap-3 max-w-3xl mx-auto">
                <Beaker className="h-6 w-6 lg:h-8 lg:w-8" />
                What's Cooking in the Lab
              </CardTitle>
              <CardDescription className="text-base lg:text-lg max-w-3xl mx-auto">
                Because the automation addiction is real
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 bg-background/50 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">UAT Automation</h4>
                  <p className="text-sm text-muted-foreground">Comet Browser magic</p>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">Competitor Intel</h4>
                  <p className="text-sm text-muted-foreground">Automated flow analysis</p>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">UI Prototyping</h4>
                  <p className="text-sm text-muted-foreground">Magic Patterns integration</p>
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
              <CardTitle className="text-3xl lg:text-4xl font-semibold max-w-3xl mx-auto">Let's Connect!</CardTitle>
              <CardDescription className="text-accent-foreground/80 text-lg lg:text-xl max-w-3xl mx-auto">
                Love efficiency hacks? Let's chat about AI workflows and product strategy.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-8">
              <p className="text-accent-foreground/90 text-base lg:text-lg max-w-3xl mx-auto">
                Always happy to connect with fellow product people who automate busy work to focus on what matters.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  variant="secondary" 
                  className="bg-background/20 hover:bg-background/30 text-accent-foreground border-background/30 px-8 py-4 text-lg font-semibold"
                >
                  <Linkedin className="w-6 h-6 mr-3" />
                  Connect on LinkedIn
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
            Built with curiosity, powered by productive laziness 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
