import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const stats = [
  { label: "Focus areas", value: "8" },
  { label: "Research-led", value: "100%" },
  { label: "Markets served", value: "3+" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" title="About" />

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-start">
          <Reveal delay={0.1}>
            <p className="text-2xl sm:text-3xl font-display leading-snug text-bone-100">
              I am Shah Nawaz, a Digital Marketer and Researcher specializing
              in SEO, AI Marketing, GEO, AEO, Google Business Optimization,
              Social Media Marketing, and AI-powered creative solutions.
            </p>
            <p className="mt-6 text-bone-500 leading-relaxed max-w-xl">
              My approach combines research, technology, and creativity to
              build strategies that improve visibility, engagement, and
              digital growth.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass rounded-3xl p-6 grid grid-cols-3 lg:grid-cols-1 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-signal">
                    {stat.value}
                  </p>
                  <p className="text-xs text-bone-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
