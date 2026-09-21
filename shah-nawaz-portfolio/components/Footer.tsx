import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg text-bone-100">Shah Nawaz</p>
          <p className="text-sm text-bone-500 mt-1">
            Digital Marketer &amp; Researcher
          </p>
          <p className="text-xs text-signal/70 mt-2 tracking-wide">
            SEO × AI × Growth
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/shah-nawaz-ahmad-226030438"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-bone-300 hover:text-signal hover:border-signal/40 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:shahnawazahmad0044@gmail.com"
            aria-label="Email"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-bone-300 hover:text-signal hover:border-signal/40 transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-6 mt-8 text-xs text-bone-500/70">
        © {new Date().getFullYear()} Shah Nawaz. All rights reserved.
      </p>
    </footer>
  );
}
