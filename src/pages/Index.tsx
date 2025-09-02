import { WorkflowCard } from "@/components/WorkflowCard";
import { MetricBadge } from "@/components/MetricBadge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin, FileText, Beaker } from "lucide-react";

const Index = () => {
  const workflows = [
    {
      title: "🧠 1. The Product Knowledge Brain",
      tools: "Obsidian + Claude Code + A lot of patience setting it up",
      problem: "Every time I need AI to write a user story, I become a human copy-paste machine feeding it product context. Plus, in a big product org, we constantly collaborate across teams with complex interdependencies. It's impossible to remember all these collaborative contexts every time.",
      magic: "Built a self-updating Product Knowledge vault in Obsidian. Claude tags and organizes everything: meeting notes, reports, OKR updates. Now when I need a user story, it already knows our platform quirks and that weird legacy API we pretend doesn't exist.",
      metric: "Context setup time reduced by 95%. Turns out my brain has limited RAM for cross-team dependencies.",
      impact: "Team gets unblocked faster with technical context that grows daily. Enables real-time implementation suggestions during standups and tech discussions.",
      icon: "🧠"
    },
    {
      title: "📝 2. The Meeting Memory Machine",
      tools: "Granola + Obsidian + Claude Code + My undying gratitude",
      problem: "30 hours of meetings per week. I'm productive in meetings, but tracking all the decisions, promises, and \"can you send me that thing we discussed?\" requests? My brain is not THAT impressive!",
      magic: "I trained Claude to be my meeting secretary. Now it automatically tracks what I promised to whom and what others promised me. No more forgotten commitments or lost decisions.",
      metric: "Action item follow-through improved by 400%. Colleagues now suspect I have a memory superpower.",
      impact: "Faster execution support with documented context. No time wasted re-explaining decisions or searching for who committed to what.",
      icon: "📝"
    },
    {
      title: "💻 3. The Tech Knowledge Bridge",
      tools: "GitHub Copilot + Product Repository Map + Fake-it-till-you-make-it confidence",
      problem: "Brainstorming sessions always hit the \"wait, which API parameters are mandatory?\" wall. Not a showstopper question, but it affects UX decisions when you're rebuilding an input form and need to know what's actually required vs. nice-to-have.",
      magic: "Mapped out which repos handle which product flows, then trained myself to ask Copilot the right questions. Now I can verify tracking events, check form validations, understand API responses. Basically speak dev without actually learning to code.",
      metric: "Technical question response time reduced by 90%. Developers think I can code (Perplexity disagrees).",
      impact: "Proactive technical research reduces team dependency on explaining service architecture and tracking sequences during implementation.",
      icon: "💻"
    },
    {
      title: "📊 4. Data Analysis on Steroids",
      tools: "Comet Browser + Google Drive + Perplexity Pro + Perplexity Labs + Prayer",
      problem: "Weekly OKR reports meant manual CSV downloads, platform filtering, country breakdowns. All the soul-crushing data grunt work that makes you question your life choices. Plus our data is scattered across multiple dashboards like a digital treasure hunt.",
      magic: "Built an automated data pipeline that handles the dashboard filtering, metric extraction, and week-over-week calculations for me. Now I get precise answers instead of manually setting filters and copying numbers into reports.",
      metric: "Data analysis time reduced by 85%. Now I actually know my metrics instead of strategic nodding.",
      impact: "Hard decisions get defended with instant data visualization. Stakeholder alignment through 'look at these numbers' evidence instead of opinions.",
      icon: "📊"
    },
    {
      title: "🎤 5. The Voice Capture Engine",
      tools: "Wispr Flow + Obsidian + Claude Code + My exceptionally articulate inner monologue",
      problem: "Ever tried writing a Jira ticket in 15 minutes? It's like speed dating but with acceptance criteria. Voice-to-text tools exist, but they capture every \"uhm,\" \"ah,\" and that moment when your neighbor's dog barks during the important part.",
      magic: "Wispr Flow cleans up my rambling into actual sentences, handles product-specific terms, and lets me voice-note directly into any app. I dump quick thoughts into daily Obsidian notes, then Claude processes them into proper product documentation.",
      metric: "PRD creation time reduced by 80%. Some of my best features are conceived during beach walks in Lisbon.",
      impact: "Rapid documentation enables faster dev team support and immediate follow-up on implementation blockers.",
      icon: "🎤"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">My Lazy PM's AI Workbook</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-ocean bg-clip-text text-transparent leading-tight">
              My Lazy PM's AI Workbook
            </h1>
            
            <div className="flex flex-wrap justify-center gap-3">
              <MetricBadge percentage="95%" label="Context Reduction" variant="primary" />
              <MetricBadge percentage="400%" label="Follow-through" variant="accent" />
              <MetricBadge percentage="85%" label="Analysis Speed" variant="highlight" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="bg-card/50 border-border/50 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Hello 👋</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                I'm curious, I like tinkering, and I hate routine manual tasks. So what does a tinkerer do? Automate them to focus on strategic product work and being present for my team during delivery.
              </p>
              <p>
                The results? My dev team calls me unblocker and thinks I have supernatural memory powers. Stakeholders wonder how I get data so fast, and I somehow reduced context setup time by 95%. Want to know my secret?
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Framework */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="bg-card border-primary/20 shadow-[var(--shadow-elegant)]">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">How I Pick My Battles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-lg font-semibold text-foreground">
                  Pain level + Time consumed + Procrastination factor = Automation priority
                </div>
                <p className="text-muted-foreground">
                  I ask Claude/Perplexity endless questions over days and weeks until I crack each workflow. It's iterative, messy, and driven by my hatred of repetitive tasks. But once I build it, it works.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workflows Arsenal */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              My AI-Powered Arsenal
            </h2>
            <p className="text-lg text-muted-foreground">
              Battle-tested workflows working in real PM chaos.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {workflows.map((workflow, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <WorkflowCard {...workflow} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Section */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-card/80 border-accent/30">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-accent flex items-center gap-2">
                <Beaker className="h-6 w-6" />
                What's Cooking in the Lab 🧪
              </CardTitle>
              <CardDescription className="text-lg">
                Because the automation addiction is real and I can't stop tinkering:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>UAT Scenarios with Comet Browser</strong> - Because life's too short for manual testing workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Competitor Flow Analysis with Comet Browser</strong> - Automated intelligence that would make corporate spies jealous</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>UI Component Prototyping with Magic Patterns</strong> - Making designers wonder about my secret design school</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="bg-gradient-accent text-accent-foreground">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Let's Connect!</CardTitle>
              <CardDescription className="text-accent-foreground/80">
                Still here? Either you love efficiency hacks or you're avoiding work.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-accent-foreground/90">
                Want to chat about AI workflows, product strategy, or share your own automation wins? Always happy to connect with fellow product people who automate busy work to focus on what matters.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" className="bg-background/20 hover:bg-background/30 text-accent-foreground border-background/30">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
                <Button variant="secondary" className="bg-background/20 hover:bg-background/30 text-accent-foreground border-background/30">
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
                <Button variant="secondary" className="bg-background/20 hover:bg-background/30 text-accent-foreground border-background/30">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-background/50">
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
