"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-grid-glow"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(242,246,243,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,246,243,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-bone-300 mb-8"
          >
            <Sparkles size={14} className="text-signal" />
            Digital Marketer & Researcher
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] font-medium text-bone-100"
          >
            Shah Nawaz
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 font-display text-2xl sm:text-3xl text-bone-300"
          >
            Digital Marketer
            <br />
            &amp; Researcher
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-8 text-xl sm:text-2xl text-gradient font-display font-medium max-w-xl leading-snug"
          >
            Building Digital Growth Strategies Through SEO, AI &amp; Research
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-bone-500 max-w-lg leading-relaxed"
          >
            I help brands improve their online presence through data-driven
            marketing strategies, AI-powered solutions, search optimization,
            and creative digital experiences.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink-950 hover:bg-signal-bright transition-colors"
            >
              View Projects
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-bone-100 hover:border-signal/50 transition-colors"
            >
              Contact Me
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass rounded-3xl p-6 shadow-glow animate-float">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs text-bone-500">Growth Dashboard</span>
              <span className="flex items-center gap-1 text-xs text-signal">
                <TrendingUp size={13} /> Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/8 bg-ink-900/60 p-4">
                <p className="text-xs text-bone-500">SEO Score</p>
                <p className="font-display text-3xl text-bone-100 mt-1">92</p>
                <div className="mt-3 h-1.5 rounded-full bg-ink-700 overflow-hidden">
                  <div className="h-full w-[92%] rounded-full bg-signal" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-ink-900/60 p-4">
                <p className="text-xs text-bone-500">Keyword Growth</p>
                <p className="font-display text-3xl text-bone-100 mt-1">
                  +64%
                </p>
                <div className="mt-3 flex items-end gap-1 h-6">
                  {[40, 55, 45, 70, 60, 85, 92].map((h, i) => (
                    <span
                      key={i}
                      className="w-2 rounded-sm bg-signal/70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-ink-900/60 p-4 col-span-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-bone-500">AI Insights</p>
                  <Sparkles size={14} className="text-signal" />
                </div>
                <p className="mt-2 text-sm text-bone-300 leading-snug">
                  Search visibility trending up across 3 markets this cycle.
                </p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-ink-900/60 p-4">
                <p className="text-xs text-bone-500">Search Visibility</p>
                <p className="font-display text-3xl text-bone-100 mt-1">
                  78%
                </p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-ink-900/60 p-4">
                <p className="text-xs text-bone-500">Growth Analytics</p>
                <p className="font-display text-3xl text-bone-100 mt-1">
                  4.2x
                </p>
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="absolute -z-10 -top-10 -right-10 w-56 h-56 rounded-full bg-signal/20 blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
