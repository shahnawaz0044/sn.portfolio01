import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass rounded-3xl p-10 sm:p-16 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -z-10 -bottom-24 -right-24 w-72 h-72 rounded-full bg-signal/15 blur-3xl"
          />
          <Reveal>
            <p className="text-xs text-signal/80 mb-4">05 — Contact</p>
            <h2 className="font-display text-3xl sm:text-5xl text-bone-100 max-w-2xl leading-tight">
              Let&apos;s Work Together
            </h2>
            <p className="mt-5 text-bone-500 max-w-xl leading-relaxed">
              Have a project, collaboration idea, or digital growth
              challenge? Let&apos;s connect.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/shah-nawaz-ahmad-226030438"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink-950 hover:bg-signal-bright transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a
              href="mailto:shahnawazahmad0044@gmail.com"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-bone-100 hover:border-signal/50 transition-colors"
            >
              <Mail size={16} />
              shahnawazahmad0044@gmail.com
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
