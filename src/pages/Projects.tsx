import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";

export interface Project {
  id: string;
  title: string;
  problem: string;
  techStack: string[];
  outcome: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "ai-document-assistant",
    title: "AI Document Assistant",
    problem: "Enterprise teams spending hours searching through documentation",
    techStack: ["React", "Python", "OpenAI", "Pinecone", "FastAPI"],
    outcome: "70% reduction in time-to-answer for support queries",
    category: "AI / Automation",
  },
  {
    id: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    problem: "Startup lacking visibility into key business metrics",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Recharts", "Supabase"],
    outcome: "Real-time insights driving 25% improvement in retention",
    category: "Full-Stack",
  },
  {
    id: "automated-workflow-platform",
    title: "Automated Workflow Platform",
    problem: "Manual data processing consuming 20+ hours weekly",
    techStack: ["Node.js", "LangChain", "AWS Lambda", "MongoDB"],
    outcome: "95% automation of repetitive tasks, saving 80+ hours/month",
    category: "AI / Automation",
  },
  {
    id: "e-commerce-storefront",
    title: "E-Commerce Storefront",
    problem: "SMB needing a modern, conversion-optimized online presence",
    techStack: ["React", "Stripe", "Supabase", "Tailwind CSS"],
    outcome: "40% increase in online sales within first quarter",
    category: "Full-Stack",
  },
  {
    id: "customer-support-ai",
    title: "Customer Support AI Agent",
    problem: "Growing support volume overwhelming small team",
    techStack: ["Python", "OpenAI", "PostgreSQL", "Redis"],
    outcome: "60% of queries resolved without human intervention",
    category: "AI / Automation",
  },
  {
    id: "internal-knowledge-base",
    title: "Internal Knowledge Base",
    problem: "Onboarding friction and scattered company knowledge",
    techStack: ["Next.js", "RAG Pipeline", "Vector DB", "Auth0"],
    outcome: "50% faster onboarding, centralized searchable docs",
    category: "Full-Stack",
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-foreground mb-4">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Selected work demonstrating full-stack development and AI integration. 
              Each project represents a real business problem solved through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group p-6 rounded-lg bg-card border border-border hover:border-foreground/20 transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>

                <h2 className="font-heading font-medium text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.problem}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs text-secondary-foreground bg-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 text-xs text-muted-foreground">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-foreground">
                  {project.outcome}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
