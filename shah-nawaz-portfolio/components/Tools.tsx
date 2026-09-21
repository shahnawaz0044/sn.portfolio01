import { Reveal } from "./ui/Reveal";

const tools = [
  "Google Analytics",
  "Google Search Console",
  "Ahrefs",
  "SEMrush",
  "ChatGPT",
  "Midjourney",
  "Canva AI",
  "Adobe Photoshop",
];

export function Tools() {
  return (
    <section className="relative py-20 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs text-bone-500 mb-8">Tools & platforms</p>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <Reveal key={tool} delay={i * 0.04}>
              <span className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-bone-300 hover:border-signal/40 hover:text-bone-100 transition-colors">
                {tool}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
