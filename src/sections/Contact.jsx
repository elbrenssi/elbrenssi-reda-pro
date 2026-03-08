import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/Button";

const links = [
  {
    label: "Email",
    value: "reda.elbrenssi.dev@gmail.com",
    href: "mailto:reda.elbrenssi.dev@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/reda-elbrenssi",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/reda-elbrenssi",
    href: "https://github.com",
    icon: Github,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center md:p-12">
          <span className="inline-flex rounded-full glass px-4 py-2 text-sm text-primary">Contact</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Let’s build something meaningful.</h2>
          <p className="mt-4 text-muted-foreground">
            I’m available for freelance projects, long-term product collaborations, and technical consulting.
          </p>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-4 hover:border-primary/60"
              >
                <item.icon className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium break-all">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button size="lg">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
