const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Nova Digital Labs",
    period: "2022 — Present",
    description:
      "Lead development of enterprise web platforms, improved deployment pipelines, and mentored junior engineers to accelerate team delivery.",
  },
  {
    role: "Backend Developer",
    company: "CloudBridge Solutions",
    period: "2020 — 2022",
    description:
      "Designed and maintained RESTful APIs for fintech and retail products, focusing on performance optimization and secure authentication flows.",
  },
  {
    role: "Frontend Developer",
    company: "PixelForge Studio",
    period: "2018 — 2020",
    description:
      "Built responsive React interfaces and design-system components for client projects, increasing consistency and reducing UI delivery time.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12 space-y-4">
          <span className="inline-flex rounded-full glass px-4 py-2 text-sm text-primary">Experience</span>
          <h2 className="text-3xl font-bold md:text-5xl">Career timeline</h2>
        </div>

        <div className="relative space-y-8 before:absolute before:left-3 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-border md:before:left-1/2">
          {experiences.map((item, index) => (
            <article
              key={item.role}
              className={`relative md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"}`}
            >
              <span className="absolute left-0 top-6 h-3 w-3 rounded-full bg-primary md:left-auto md:right-[-0.4rem]" />
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10">
                <p className="text-sm text-primary">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
