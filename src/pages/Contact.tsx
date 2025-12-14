import { Mail, Linkedin, Calendar, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@johndoe.dev",
    href: "mailto:hello@johndoe.dev",
    description: "For project inquiries and collaboration",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/johndoe",
    href: "https://linkedin.com/in/johndoe",
    description: "Connect professionally",
  },
  {
    icon: Calendar,
    label: "Schedule a Call",
    value: "Book 30 minutes",
    href: "https://calendly.com/johndoe",
    description: "For detailed project discussions",
  },
];

export default function Contact() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-foreground mb-4">
              Let's Connect
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in discussing new projects, interesting ideas, 
              or opportunities to create meaningful technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("mailto") ? undefined : "_blank"}
                rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group p-6 rounded-lg bg-card border border-border hover:border-foreground/20 transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-md bg-accent">
                    <method.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h2 className="font-heading font-medium text-foreground mb-1">
                  {method.label}
                </h2>
                <p className="text-sm text-primary mb-2">{method.value}</p>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </a>
            ))}
          </div>

          <div className="max-w-2xl p-8 md:p-12 rounded-lg bg-accent/50 border border-border">
            <h3 className="font-heading font-medium text-xl text-foreground mb-4">
              What to Expect
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                When you reach out, I aim to respond within 24-48 hours. For project 
                inquiries, it's helpful to share:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2" />
                  <span>A brief description of your project or challenge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2" />
                  <span>Your timeline and any key constraints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2" />
                  <span>Whether you're looking for full development or consulting</span>
                </li>
              </ul>
              <p className="leading-relaxed pt-2">
                I work with startups, SMBs, and teams within larger organizations. 
                Whether you need a complete application built or AI integrated into 
                existing systems, I'm here to help find the right approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
