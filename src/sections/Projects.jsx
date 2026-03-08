import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    description:
      "A multi-tenant analytics platform with custom reports, role-based access control, and actionable KPI widgets for product teams.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
    image: "https://source.unsplash.com/random/800x600?technology",
  },
  {
    title: "E-Commerce API Platform",
    description:
      "Scalable API-first backend for catalog, checkout, and payment workflows, built to support high traffic campaigns and integrations.",
    stack: ["Laravel", "MySQL", "Redis", "Docker"],
    github: "#",
    demo: "#",
    image: "https://source.unsplash.com/random/800x600?coding",
  },
  {
    title: "Project Management Suite",
    description:
      "Collaboration web app for distributed teams featuring sprint planning, document sharing, and real-time task tracking.",
    stack: ["React", "Spring Boot", "WebSocket", "Tailwind"],
    github: "#",
    demo: "#",
    image: "https://source.unsplash.com/random/800x600?developer",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12 space-y-4">
          <span className="inline-flex rounded-full glass px-4 py-2 text-sm text-primary">Projects</span>
          <h2 className="text-3xl font-bold md:text-5xl">Recent work that solves real business challenges.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/50">
              <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
                  >
                    <ArrowUpRight className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
