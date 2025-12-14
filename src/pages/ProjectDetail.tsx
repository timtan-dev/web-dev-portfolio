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
  "ai-document-assistant": {
    challenge: "A mid-sized enterprise had accumulated thousands of internal documents, FAQs, and process guides. Support staff spent hours searching for answers, leading to slow response times and inconsistent information delivery. The existing search was keyword-based and often returned irrelevant results.",
    solution: "Built a conversational AI assistant using OpenAI's GPT-4 with a custom RAG (Retrieval-Augmented Generation) pipeline. Documents were chunked, embedded using OpenAI embeddings, and stored in Pinecone for semantic search. The frontend provided a chat interface where users could ask questions naturally and receive accurate, sourced answers.",
    result: "Reduced average time-to-answer by 70%. Support team productivity increased significantly, and the system handled 40% of common queries without human intervention. The solution scaled to handle 500+ concurrent users.",
    architecture: "React frontend → FastAPI backend → Pinecone vector DB → OpenAI API. Document ingestion pipeline processes PDFs and markdown files automatically.",
    aiRelevance: "Core AI project demonstrating practical LLM integration, embedding models, vector databases, and production-ready RAG implementation.",
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/johndoe/doc-assistant",
  },
  "saas-analytics-dashboard": {
    challenge: "A B2B SaaS startup lacked visibility into critical business metrics. Data was scattered across Stripe, their app database, and third-party tools. Leadership couldn't make informed decisions without manual spreadsheet compilation.",
    solution: "Designed and built a unified analytics dashboard aggregating data from multiple sources. Implemented real-time data pipelines, custom metric calculations (MRR, churn, LTV), and interactive visualizations. Role-based access ensured appropriate data visibility across teams.",
    result: "Leadership gained instant access to KPIs. Identified a cohort with 2x higher churn, leading to targeted retention efforts that improved overall retention by 25% within 3 months.",
    architecture: "Next.js with server components for initial load performance. Supabase for real-time subscriptions. Edge functions for Stripe webhook processing.",
    liveUrl: "https://demo.example.com",
  },
  "automated-workflow-platform": {
    challenge: "An operations team was manually processing data exports, transforming formats, validating entries, and routing information—consuming over 20 hours per week. Error rates were high due to repetitive manual work.",
    solution: "Built an intelligent automation platform using LangChain for orchestration. Created specialized agents for data validation, format transformation, and routing decisions. Integrated with existing tools via APIs and webhooks.",
    result: "Automated 95% of the workflow. Manual processing time dropped from 20+ hours to under 1 hour weekly. Error rates decreased by 85%.",
    architecture: "Node.js orchestration layer → LangChain agents → AWS Lambda for scalable execution → MongoDB for job tracking and audit logs.",
    aiRelevance: "Showcases AI agents for business process automation, demonstrating how LLMs can make decisions previously requiring human judgment.",
    githubUrl: "https://github.com/johndoe/workflow-automation",
  },
  "e-commerce-storefront": {
    challenge: "A growing SMB needed to move from a dated, difficult-to-update website to a modern e-commerce platform. Key requirements: mobile-first design, fast checkout, and easy product management.",
    solution: "Built a custom React storefront with Stripe integration for payments. Supabase provided the backend for products, orders, and customer data. Implemented a headless CMS approach allowing non-technical staff to update products and content.",
    result: "Launched within 6 weeks. Online sales increased 40% in the first quarter. Mobile conversion rate doubled compared to the previous site.",
    architecture: "React + Tailwind for responsive UI → Supabase for data and auth → Stripe for payments → Cloudflare for edge caching.",
    liveUrl: "https://demo.example.com",
  },
  "customer-support-ai": {
    challenge: "A growing startup's support volume was increasing faster than they could hire. Response times were suffering, and the team was burning out handling repetitive queries.",
    solution: "Developed an AI-powered support agent that could understand customer queries, search knowledge bases, and provide accurate responses. Complex issues were seamlessly escalated to human agents with full context.",
    result: "60% of support queries resolved without human intervention. Average response time dropped from hours to seconds for common questions. Support team could focus on complex, high-value interactions.",
    architecture: "Python backend → OpenAI for understanding and generation → PostgreSQL for conversation history → Redis for caching frequent queries.",
    aiRelevance: "Production AI agent handling real customer interactions, demonstrating safe deployment of LLMs in customer-facing applications.",
  },
  "internal-knowledge-base": {
    challenge: "New employees took months to become productive due to scattered documentation, tribal knowledge, and lack of searchable resources. Key information lived in Slack threads, Google Docs, and people's heads.",
    solution: "Built a centralized knowledge platform with semantic search capabilities. Integrated with existing tools to automatically ingest and index content. Added AI-powered Q&A for natural language queries.",
    result: "Onboarding time reduced by 50%. Employees reported significantly less time spent searching for information. The platform became the single source of truth for company knowledge.",
    architecture: "Next.js app with Auth0 authentication → RAG pipeline for semantic search → Vector database for embeddings → Automated ingestion from connected tools.",
    aiRelevance: "Combines traditional knowledge management with AI capabilities for intelligent search and retrieval.",
    githubUrl: "https://github.com/johndoe/knowledge-base",
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
