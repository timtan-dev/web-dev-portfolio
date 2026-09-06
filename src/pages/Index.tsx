import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const techStack = [
  "Java",
  "Spring Boot",
  "Vue.js",
  "React",
  "Node.js",
  "MySQL",
  "Redis",
  "Python",
  "OpenAI",
  "Anthropic",
  "Docker",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center">
        <div className="container">
          <div className="max-w-3xl">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-muted-foreground text-sm mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Engineering Meets Business Discovery</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-tight tracking-tight text-foreground mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              I Build the Systems Businesses Actually Need
            </h1>

            <p
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Master of Computer Science from Flinders University with ~2 years building payment microservices at a NYSE-listed fintech, now running Diakresto (AI consultancy) and Joseph (a production automation pipeline live since April 2026) — all driven by the same instinct: understand the problem before building the solution.
            </p>
            <div 
              className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="premium" size="lg" asChild>
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="premium-outline" size="lg" asChild>
                <Link to="/contact">Contact</Link>
              </Button>
            </div>

            {/* Tech Stack */}
            <div 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm text-secondary-foreground bg-secondary rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Value Proposition */}
      <section className="py-24 border-t border-divider">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div className="space-y-3">
              <h3 className="font-heading font-medium text-foreground">
                High-Performance Systems
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Built payment gateway microservices handling 2,000+ TPS with 
                99.9% uptime. Experienced in scalable architecture and optimization.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-medium text-foreground">
                AI Consultancy
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Founded Diakresto, advising small businesses on AI adoption. First
                paid engagement turned a vague problem into a scoped, commercial roadmap.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-medium text-foreground">
                AI in Production
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Built Joseph, a production automation pipeline tracking 1,400+ jobs
                daily since April 2026, with real cost/quality trade-off evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
