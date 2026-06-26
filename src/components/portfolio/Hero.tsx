import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { SplitWords } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative grain min-h-[100svh] overflow-hidden pt-28 sm:pt-32 md:pt-40"
    >
      {/* animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blob-float absolute -left-40 top-20 size-[360px] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] opacity-70 sm:size-[520px] sm:opacity-80" />
        <div
          className="blob-float absolute -right-44 top-72 size-[380px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.13_30/0.35),transparent_65%)] sm:top-60 sm:size-[620px]"
          style={{ animationDelay: "-6s" }}
        />
        {/* grid */}
        <svg
          className="absolute inset-0 size-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="g" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M80 0H0V80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]"
        >
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Available — Q2 2026
          </span>
          <span className="hidden md:inline">Portfolio / Vol. 04</span>
        </motion.div>

        {/* Headline */}
        <div className="mt-10 max-w-full md:mt-16">
          <SplitWords
            text="Frontend engineer"
            className="font-display max-w-full text-[clamp(3.6rem,17vw,8.25rem)] font-light leading-[0.95] text-balance md:text-[9rem]"
          />
          <div className="mt-2 flex flex-wrap items-end gap-x-6 gap-y-2">
            <SplitWords
              text="crafting calm,"
              className="font-display text-[clamp(3.4rem,16vw,8.25rem)] font-light italic leading-[0.95] text-foreground/70 md:text-[9rem]"
              delay={0.15}
            />
            <SplitWords
              text="kinetic interfaces."
              className="font-display text-[clamp(3.4rem,16vw,8.25rem)] font-light leading-[0.95] md:text-[9rem]"
              delay={0.3}
            />
          </div>
        </div>

        {/* Sub row */}
        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="max-w-md text-base leading-relaxed text-muted-foreground md:col-span-5 md:col-start-2"
          >
            I design and build fast, motion-rich web experiences with React and Tailwind.
            Independent, detail-led, and quietly obsessed with how interfaces feel under the hand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:col-span-5"
          >
            <Magnetic>
              <a
                href="#work"
                className="group magnetic-btn w-full rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  See selected work
                  <ArrowDownRight
                    size={16}
                    className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="group magnetic-btn w-full rounded-full border border-border bg-background/40 px-6 py-4 text-sm font-medium backdrop-blur sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  Start a project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-20 flex flex-wrap items-end justify-between gap-4 border-t border-border/60 pt-6 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.2em] md:mt-32"
        >
          <span>Scroll</span>
          <span className="hidden md:block">React · Tailwind · Motion · Lenis · GSAP</span>
          <span>Lisbon — Remote</span>
        </motion.div>
      </div>
    </section>
  );
}
