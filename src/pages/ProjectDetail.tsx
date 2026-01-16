import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { projects } from "./Projects";

const projectDetails: Record<string, {
  challenge: string;
  solution: string;
  result: string;
  architecture?: string;
  aiRelevance?: string;
  liveUrl?: string;
  githubUrl?: string;
}> = {
  "payment-gateway": {
    challenge: "As the fintech platform expanded partnerships with multiple payment providers and banks—each with different fee rates, contract terms, and transaction limits—the business faced escalating costs and declining success rates. Manual selection of payment routes was unsustainable as user volume grew from 2.4 million to 4.5 million active users.",
    solution: "Architected a distributed microservices system with three specialized services: (1) a routing engine that evaluates rules, filters, and priorities in real-time to select optimal payment providers, (2) a calculation service that aggregates transaction data to support routing decisions, and (3) a configuration service allowing business teams to update rules without developer intervention. Redis cached frequently-accessed rules and provider data, while MySQL persisted transaction records and configurations. RESTful APIs enabled seamless communication between services and external payment gateways.",
    result: "Achieved 2,000+ TPS with sub-200ms latency and 99.9% uptime with zero production errors. Intelligent routing saved $45,000 AUD monthly by automatically selecting cost-effective providers while maintaining high success rates. The system scaled horizontally to support the growth from 2.4M to 4.5M active users.",
    architecture: "Configuration Service updates rules → Redis cache. Main Routing Service queries Redis for rules → evaluates filters/priorities → calls Calculation Service API for real-time metrics → selects optimal payment provider. Calculation Service aggregates transaction data to MySQL (totals, failure rates) and exposes metrics via API.",
  },
  "ai-design-thinking": {
    challenge: "Design thinking practitioners lacked objective, quantitative methods to evaluate which AI models reliably support complex workflows like stakeholder identification and risk analysis. Existing research relied on consumer chatbots without configurability or reproducible benchmarks, making evidence-based model selection impossible.",
    solution: "Developed an open-source evaluation framework with six quantitative metrics: Stakeholder Coverage (25% weight), Risk Coverage (30%), Coherence and Consistency (30%), Processing Speed (7.5%), and API Cost (7.5%), combined into an Overall Reliability Index. Built a configurable workflow system using LangChain to integrate multiple LLM APIs (OpenAI, Claude, Grok), allowing researchers to test models systematically. Applied the framework to the real-world Whyalla Hydrogen Project case study to generate reproducible performance comparisons.",
    result: "Tested 4 premium LLMs and revealed Claude Sonnet 4.5 as most reliable while exposing a fundamental trade-off: high-performing models showed greater analytical depth but lower statistical consistency, requiring human oversight for reliable deployment. The framework enabled evidence-based model selection for design thinking applications.",
    architecture: "Streamlit interface for model selection and parameter configuration → LangChain orchestration layer calls LLM APIs (OpenAI/Claude/Grok) → responses analyzed against 6 quantitative metrics → statistical scoring engine calculates weighted Overall Reliability Index → results visualized for comparison.",
    aiRelevance: "Demonstrates systematic LLM evaluation methodology, multi-model API integration, and quantitative reliability assessment for AI-augmented workflows beyond typical chatbot applications.",
    liveUrl: "https://design-thinking-ai-chen2106.streamlit.app",
    githubUrl: "https://github.com/timtan-dev/design-thinking-ai",
  },
  "internal-operations-dashboard": {
    challenge: "Finance and payment operations teams managed over 10 disconnected systems, requiring manual SQL queries to extract data from billions of records, spreadsheet calculations for business metrics, and developer requests for every configuration change. This fragmented workflow caused hours of delays and prevented data-driven decision-making.",
    solution: "Built a unified Vue.js portal that consolidated workflows through RESTful APIs connecting to both modern Spring Boot services and legacy PHP systems. Implemented optimized database queries with indexing and caching to enable fast searches across billions of records. Designed an intuitive UX with customizable filters, one-click Excel exports, and self-service configuration tools that eliminated the need for technical staff intervention.",
    result: "Unified 10+ internal workflows into a single portal, reducing data lookup time by 60%. Operations teams gained self-service capabilities for configurations and reporting, freeing developers to focus on feature development rather than ad-hoc data requests.",
    architecture: "Vue.js SPA communicates via RESTful APIs → Spring Boot microservices handle business logic and database operations → legacy PHP services expose existing functionality through API endpoints → both backend systems query MySQL/Redis data sources with optimized indexing and caching.",
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const details = id ? projectDetails[id] : null;

  if (!project || !details) {
    return (
      <Layout>
        <div className="container py-24">
          <h1 className="text-2xl font-heading font-medium mb-4">Project not found</h1>
          <Button variant="premium-outline" asChild>
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="container">
          <Button
            variant="ghost"
            size="sm"
            className="mb-8 -ml-2 text-muted-foreground"
            asChild
          >
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4" />
              All Projects
            </Link>
          </Button>

          <header className="mb-12">
            <span className="text-sm uppercase tracking-wider text-muted-foreground mb-3 block">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {project.problem}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm text-secondary-foreground bg-secondary rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(details.liveUrl || details.githubUrl) && (
              <div className="flex gap-4 mt-8">
                {details.liveUrl && (
                  <Button variant="premium" size="sm" asChild>
                    <a href={details.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {details.githubUrl && (
                  <Button variant="premium-outline" size="sm" asChild>
                    <a href={details.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            )}
          </header>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="font-heading font-medium text-xl text-foreground mb-4">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {details.challenge}
                </p>
              </section>

              <section>
                <h2 className="font-heading font-medium text-xl text-foreground mb-4">
                  The Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {details.solution}
                </p>
              </section>

              <section>
                <h2 className="font-heading font-medium text-xl text-foreground mb-4">
                  The Result
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {details.result}
                </p>
              </section>
            </div>

            <aside className="space-y-8">
              {details.architecture && (
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-heading font-medium text-foreground mb-3">
                    Architecture
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {details.architecture}
                  </p>
                </div>
              )}

              {details.aiRelevance && (
                <div className="p-6 rounded-lg bg-accent/50 border border-border">
                  <h3 className="font-heading font-medium text-foreground mb-3">
                    AI Relevance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {details.aiRelevance}
                  </p>
                </div>
              )}

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-heading font-medium text-foreground mb-3">
                  Outcome
                </h3>
                <p className="text-sm font-medium text-foreground">
                  {project.outcome}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </Layout>
  );
}
