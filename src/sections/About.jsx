import { BadgeCheck, BriefcaseBusiness, Code2 } from "lucide-react";

const stats = [
  {
    label: "Years Experience",
    value: "5+",
    icon: BadgeCheck,
  },
  {
    label: "Delivered Projects",
    value: "32",
    icon: BriefcaseBusiness,
  },
  {
    label: "Technologies Used",
    value: "18+",
    icon: Code2,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full glass px-4 py-2 text-sm text-primary">
              About Me
            </span>
            <h2 className="text-3xl font-bold md:text-5xl">Building reliable products with business impact.</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I’m a full-stack software engineer focused on crafting secure and scalable digital products.
              Over the last few years, I’ve collaborated with startups and established companies to turn
              ideas into production-ready applications with clean architecture, strong API design, and
              user-centered interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines technical quality with clear communication: I prioritize maintainable
              code, transparent delivery, and measurable outcomes for every project.
            </p>
          </div>

          <div className="glass-strong rounded-3xl p-6 md:p-8 glow-border">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="https://source.unsplash.com/random/800x600?developer"
                alt="Professional developer portrait"
                className="h-72 w-full object-cover"
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <article key={stat.label} className="rounded-2xl bg-secondary/50 border border-border p-4">
                  <stat.icon className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
