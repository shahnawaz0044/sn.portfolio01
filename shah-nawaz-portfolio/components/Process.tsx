import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const steps = [
  { n: "01", title: "Research", description: "Understand the market, audience, and search landscape." },
  { n: "02", title: "Strategy", description: "Translate research into a focused growth plan." },
  { n: "03", title: "Create", description: "Build content, campaigns, and creative assets." },
  { n: "04", title: "Optimize", description: "Refine based on performance and search signals." },
  { n: "05", title: "Grow", description: "Scale what works across channels and markets." },
];

export function Process() {
  return (
    <section className="relative py-28 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04" title="Process" />

        <div className="relative">
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-signal shadow-glow mb-5" />
                  <p className="text-xs text-bone-500">{step.n}</p>
                  <h3 className="font-display text-lg text-bone-100 mt-1">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-bone-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
