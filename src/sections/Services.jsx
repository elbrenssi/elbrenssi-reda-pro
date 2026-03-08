import { Code2, Smartphone, Server, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive web apps built with React, performance optimization, and maintainable architecture.",
    icon: Code2,
  },
  {
    title: "API Development",
    description: "Robust REST APIs with secure authentication, clean documentation, and scalable backend services.",
    icon: Server,
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile experiences using React Native with smooth UX and production-ready integrations.",
    icon: Smartphone,
  },
  {
    title: "Consulting",
    description: "Technical guidance on architecture, team workflows, and roadmap planning for digital products.",
    icon: Lightbulb,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12 space-y-4">
          <span className="inline-flex rounded-full glass px-4 py-2 text-sm text-primary">Services</span>
          <h2 className="text-3xl font-bold md:text-5xl">How I can help your team ship faster.</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-border bg-card p-6 transition hover:border-primary/50">
              <service.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
