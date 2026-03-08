const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Product Manager, FinovateX",
    quote:
      "Working together was seamless. He translated complex requirements into a polished platform that our users adopted quickly.",
  },
  {
    name: "Daniel Ortega",
    role: "CTO, MarketGrid",
    quote:
      "A strong engineer with excellent ownership. He improved code quality, delivery speed, and overall team confidence.",
  },
  {
    name: "Nadia Karim",
    role: "Founder, StudioNova",
    quote:
      "He delivered exactly what we needed: a fast, modern product that aligned with both our brand and business goals.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12 space-y-4">
          <span className="inline-flex rounded-full glass px-4 py-2 text-sm text-primary">Testimonials</span>
          <h2 className="text-3xl font-bold md:text-5xl">What clients and teams say.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl border border-border bg-card p-6">
              <p className="text-muted-foreground leading-relaxed">“{item.quote}”</p>
              <div className="mt-6 border-t border-border pt-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
