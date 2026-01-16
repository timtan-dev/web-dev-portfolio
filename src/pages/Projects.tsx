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
    id: "payment-gateway",
    title: "High-Performance Payment Gateway",
    problem: "Fintech platform needed to process thousands of concurrent transactions without bottlenecks",
    techStack: ["Java", "Spring Boot", "MySQL", "Redis", "Docker", "JUnit"],
    outcome: "Architected microservices handling 2,000+ TPS with sub-200ms latency, 99.9% uptime, and zero production errors",
    category: "Full-Stack",
  },
  {
    id: "ai-design-thinking",
    title: "AI-Augmented Design Thinking Platform",
    problem: "Design researchers lacked methods to quantitatively evaluate AI model reliability in design workflows",
    techStack: ["Python", "Streamlit", "OpenAI API", "Claude API", "Statistical Analysis"],
    outcome: "Built evaluation framework testing 4 LLMs on real-world case study, identifying performance trade-offs requiring human oversight",
    category: "AI / Automation",
  },
  {
    id: "internal-operations-dashboard",
    title: "Internal Operations Dashboard",
    problem: "Finance and payment teams using disconnected tools to query data and manage configurations",
    techStack: ["Vue.js", "Java", "Spring Boot", "MySQL", "PHP"],
    outcome: "Unified 10+ internal workflows into single portal, reducing data lookup time by 60%",
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
