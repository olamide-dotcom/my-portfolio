import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { PROJECTS } from "@/data/portfolio";
import { Reveal, SplitWords } from "./Reveal";
import { Magnetic } from "./Magnetic";

function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const flipped = i % 2 === 1;

  return (
    <div ref={ref} className="grid items-center gap-8 md:grid-cols-12 md:gap-16">
      {/* image */}
      <motion.a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        data-hover
        style={{ y }}
        className={`group relative block overflow-hidden rounded-3xl border border-border/80 bg-muted md:col-span-7 ${
          flipped ? "md:order-2" : ""
        }`}
      >
        <div className="overflow-hidden">
          <motion.img
            src={p.image}
            alt={p.title}
            width={1280}
            height={800}
            loading="lazy"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
          />
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 via-background/0 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="flex w-full items-center justify-between p-4 sm:p-6">
            <span className="font-display text-xl">View live</span>
            <span className="grid size-12 place-items-center rounded-full bg-foreground text-background">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
        <span className="absolute left-5 top-5 rounded-full border border-border/80 bg-background/70 px-3 py-1 font-mono text-xs backdrop-blur-md">
          {p.index} / Project
        </span>
      </motion.a>

      {/* text */}
      <div className={`md:col-span-5 ${flipped ? "md:order-1 md:pr-6" : "md:pl-6"}`}>
        <Reveal>
          <h3 className="font-display text-[clamp(2.4rem,12vw,3.5rem)] font-light leading-tight md:text-5xl">
            {p.title}
          </h3>
          <p className="mt-2 font-display text-[clamp(1.6rem,8vw,2.25rem)] italic text-foreground/60 md:text-3xl">
            {p.tagline}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          <p>{p.description}</p>
        </Reveal>
        <Reveal delay={0.15} className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/80 bg-background/50 px-3 py-1 text-xs font-medium backdrop-blur"
            >
              {t}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {p.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm">
              <span className="inline-block size-1 rounded-full bg-accent" />
              <span className="text-foreground/80">{f}</span>
            </div>
          ))}
        </Reveal>

        <Reveal
          delay={0.25}
          className="mt-8 grid grid-cols-1 gap-4 border-t border-border/60 pt-6 sm:grid-cols-3"
        >
          {p.stats.map((s) => (
            <div key={s.v}>
              <p className="font-display text-2xl">{s.k}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {s.v}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex items-center gap-4">
          <Magnetic>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              Live demo
              <ArrowUpRight
                size={15}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8 sm:mb-20 md:mb-28">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              ( Selected Work — 03 )
            </p>
            <SplitWords
              text="A few projects"
              className="font-display text-[clamp(2.6rem,13vw,4rem)] font-light leading-[1.05] sm:text-5xl md:text-7xl"
            />
            <SplitWords
              text="I'm proud of."
              className="font-display text-[clamp(2.6rem,13vw,4rem)] font-light italic leading-[0.95] text-foreground/70 sm:text-5xl md:text-7xl"
              delay={0.15}
            />
          </div>
          <Reveal className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Each one is small, focused, and shipped. Click any to preview.
          </Reveal>
        </div>

        <div className="space-y-24 sm:space-y-32 md:space-y-48">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
