"use client";

import { motion } from "framer-motion";
import {
  Search,
  Radar,
  Cpu,
  MapPin,
  Share2,
  Palette,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const items = [
  {
    icon: Search,
    title: "SEO Strategy",
    description:
      "Keyword research, competitor analysis, content optimization, and search growth strategies.",
  },
  {
    icon: Radar,
    title: "GEO & AEO",
    description:
      "Optimizing brands for AI-powered search experiences and future discovery platforms.",
  },
  {
    icon: Cpu,
    title: "AI Marketing",
    description:
      "Using artificial intelligence to improve marketing workflows, research, and content strategies.",
  },
  {
    icon: MapPin,
    title: "Google Business Optimization",
    description: "Improving local search visibility and customer discovery.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Creating strategies that increase engagement and strengthen brand presence.",
  },
  {
    icon: Palette,
    title: "AI Graphic Design",
    description:
      "Creating modern visual assets using AI-powered creative workflows.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative py-28 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          title="Expertise"
          description="A cross-disciplinary toolkit for search, AI systems, and audience growth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="glass rounded-2xl p-6 h-full hover:border-signal/40 hover:shadow-glow transition-[box-shadow,border-color] duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-signal-soft flex items-center justify-center mb-5">
                  <it.icon size={20} className="text-signal" />
                </div>
                <h3 className="font-display text-lg text-bone-100">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-bone-500 leading-relaxed">
                  {it.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
