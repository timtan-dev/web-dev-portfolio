import { Layout } from "@/components/Layout";
import { Code2, Server, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Building responsive, performant interfaces with modern frameworks and design systems.",
    skills: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "State Management (Zustand, Redux)",
      "Testing (Vitest, Playwright)",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Scalable server architecture, APIs, and data management for production systems.",
    skills: [
      "Node.js / Express",
      "Python / FastAPI",
      "PostgreSQL / MongoDB",
      "REST & GraphQL APIs",
      "Authentication & Security",
      "Microservices Architecture",
    ],
  },
  {
    title: "AI & Automation",
    icon: Brain,
    description: "Integrating AI capabilities to enhance products and automate complex workflows.",
    skills: [
      "OpenAI API / GPT Integration",
      "LangChain / LlamaIndex",
      "Vector Databases (Pinecone)",
      "RAG Pipelines",
      "Custom AI Agents",
      "Process Automation",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    description: "DevOps, cloud infrastructure, and tooling for reliable, maintainable systems.",
    skills: [
      "AWS / Vercel / Railway",
      "Docker & Containerization",
      "CI/CD (GitHub Actions)",
      "Git & Version Control",
      "Monitoring & Logging",
      "Supabase / Firebase",
    ],
  },
];

export default function Skills() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-foreground mb-4">
              Skills & Capabilities
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive toolkit for building modern, AI-enhanced applications—from 
              frontend interfaces to backend systems and intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-8 rounded-lg bg-card border border-border opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-accent">
                    <category.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="font-heading font-medium text-xl text-foreground">
                    {category.title}
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-secondary-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* AI Integration Callout */}
          <div className="mt-16 p-8 md:p-12 rounded-lg bg-accent/50 border border-border">
            <div className="max-w-2xl">
              <h3 className="font-heading font-medium text-xl text-foreground mb-4">
                AI Integration as a Core Competency
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beyond traditional development, I specialize in embedding AI capabilities 
                into products and workflows. This includes working with large language models, 
                building retrieval-augmented generation (RAG) systems, creating custom AI agents, 
                and designing automation pipelines that reduce manual work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's adding intelligent search to an existing platform, building a 
                document Q&A system, or creating AI-powered customer support—I deliver 
                solutions that are practical, scalable, and production-ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
