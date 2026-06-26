import { Code2, Layers, Wrench, Sparkles } from "lucide-react";
import { SKILLS } from "@/data/portfolio";
import { Reveal, SplitWords } from "./Reveal";
import { Tilt } from "./Magnetic";

const ICONS = [Code2, Layers, Wrench, Sparkles];

export function Craft() {
  return (
    <section id="craft" className="relative py-24 sm:py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8 sm:mb-16">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              ( Craft — 02 )
            </p>
            <SplitWords
              text="The tools"
              className="font-display text-[clamp(2.6rem,13vw,4rem)] font-light leading-[1.05] sm:text-5xl md:text-7xl"
            />
            <SplitWords
              text="behind the work."
              className="font-display text-[clamp(2.6rem,13vw,4rem)] font-light italic leading-[1.05] text-foreground/70 sm:text-5xl md:text-7xl"
              delay={0.15}
            />
          </div>
          <Reveal className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A small, well-loved kit — chosen for speed of iteration and quality of result. I&apos;d
            rather know four tools deeply than forty briefly.
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((cat, i) => {
            const Icon = ICONS[i] ?? Sparkles;
            return (
              <Reveal key={cat.title} delay={i * 0.08}>
                <Tilt>
                  <div
                    data-hover
                    className="group relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_oklch(0_0_0/0.25)] sm:p-7"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    />
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-2xl bg-foreground/5 text-foreground/80">
                        <Icon size={18} strokeWidth={1.5} />
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-medium">{cat.title}</h3>
                    <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                      {cat.items.map((item, j) => (
                        <li
                          key={item}
                          className="flex items-center justify-between border-t border-border/60 pt-2.5 first:border-0 first:pt-0"
                        >
                          <span className="text-foreground/85">{item}</span>
                          <span
                            aria-hidden
                            className="ml-3 h-px flex-1 bg-gradient-to-r from-border to-transparent opacity-60"
                            style={{ maxWidth: `${30 + ((j * 17) % 60)}%` }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
