"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const projects = [
  {
    tag: "SEO Research",
    title: "AI SEO Intelligence Framework",
    description:
      "An AI-assisted SEO research framework designed to discover keyword opportunities, competitor insights, and content gaps.",
  },
  {
    tag: "Local SEO",
    title: "Local Search Growth Strategy",
    description:
      "A local SEO strategy focused on improving Google Business visibility and customer discovery.",
  },
  {
    tag: "AI Creative",
    title: "AI Creative Studio",
    description:
      "AI-powered creative workflows for generating marketing visuals and brand assets.",
  },
  {
    tag: "Content Strategy",
    title: "Content Growth Engine",
    description:
      "A content strategy system based on audience research, planning, and engagement insights.",
  },
  {
    tag: "Market Research",
    title: "Digital Market Research",
    description:
      "Competitive analysis and market research to identify growth opportunities.",
  },
  {
    tag: "AI Automation",
    title: "AI Marketing Automation",
    description:
      "AI workflows designed to improve marketing productivity and research processes.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          title="Projects"
          description="Selected frameworks and systems built at the intersection of research and AI."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group glass rounded-2xl p-7 h-full flex flex-col justify-between hover:border-signal/40 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-signal/80">{p.tag}</span>
                    <ArrowUpRight
                      size={18}
                      className="text-bone-500 group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-bone-100">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-bone-500 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
