import { Layout } from "@/components/Layout";
import { Code2, Server, Brain, Wrench, Handshake } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Building responsive, performant interfaces with modern frameworks and design principles.",
    skills: [
      "Vue.js / React",
      "JavaScript / TypeScript",
      "HTML / CSS",
      "UI/UX Principles",
      "Component Architecture",
      "Cross-browser Compatibility",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Scalable server architecture, APIs, and data management for production systems.",
    skills: [
      "Java / Spring Boot",
      "JUnit Testing",
      "Python",
      "Node.js",
      "RESTful APIs",
      "Microservices Architecture",
      "MySQL / PostgreSQL / Redis",
    ],
  },
  {
    title: "AI & Automation",
    icon: Brain,
    description: "Integrating AI capabilities and building evaluation frameworks for LLM-powered systems.",
    skills: [
      "OpenAI API / Claude API",
      "LangChain Integration",
      "Multi-Model LLM Integration",
      "Statistical Analysis",
      "Evaluation Frameworks",
      "Streamlit Applications",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    description: "DevOps, cloud infrastructure, and tooling for reliable, maintainable systems.",
    skills: [
      "Docker & Containerization",
      "CI/CD Pipelines",
      "AWS Cloud Services",
      "Git / GitLab",
      "Monitoring (Grafana, Prometheus)",
      "Maven / Gradle",
    ],
  },
  {
    title: "Consulting & Communication",
    icon: Handshake,
    description: "Scoping what a business actually needs and communicating it clearly to technical and non-technical stakeholders alike.",
    skills: [
      "Client Discovery & Requirements Gathering",
      "Stakeholder Communication",
      "Use-Case Roadmapping",
      "Research-Report Delivery",
      "AI Governance & Responsible AI Practices",
      "Commercial / Business-Outcomes Framing",
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
        </div>
      </section>
    </Layout>
  );
}
