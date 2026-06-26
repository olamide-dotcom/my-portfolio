import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PORTRAIT } from "@/data/portfolio";
import { Reveal, SplitWords } from "./Reveal";

const TAGS = ["React", "Tailwind", "Motion", "TypeScript", "Figma", "A11y", "SEO", "Performance"];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-5">
          <motion.div style={{ y }} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border/80">
              <img
                src={PORTRAIT}
                alt="Portrait"
                width={800}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            {/* floating tags */}
            <div className="hidden md:block pointer-events-none absolute inset-0">
              {TAGS.map((t, i) => {
                const positions = [
                  "top-4 -left-10",
                  "top-1/3 -right-12",
                  "bottom-12 -left-8",
                  "bottom-4 right-6",
                  "top-1/2 -left-14",
                  "top-10 right-4",
                  "bottom-1/3 -right-10",
                  "top-2/3 right-1/2",
                ];
                return (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.6 }}
                    className={`absolute ${positions[i]} pointer-events-auto rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-md shadow-sm`}
                    style={{
                      animation: `blob ${10 + i}s ease-in-out infinite`,
                      animationDelay: `${-i}s`,
                    }}
                  >
                    {t}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-7 md:pl-10">
          <p className="mb-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            ( About — 01 )
          </p>
          <SplitWords
            text="A quiet practice"
            className="font-display text-[clamp(2.6rem,13vw,4rem)] font-light leading-[1.05] sm:text-5xl md:text-7xl"
          />
          <SplitWords
            text="of building beautiful, useful things."
            className="font-display text-[clamp(2.6rem,13vw,4rem)] font-light italic leading-[1.05] text-foreground/70 sm:text-5xl md:text-7xl"
            delay={0.15}
          />

          <div className="mt-10 grid gap-6 text-base leading-relaxed text-muted-foreground md:max-w-xl">
            <Reveal delay={0.1}>
              <p>
                I work at the seam between design and code — translating taste into typography,
                spacing, and motion that holds together at every scale. My favourite projects are
                the ones where nobody notices the work, only the result.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Lately I&apos;ve been working with React, Tailwind, and the small details: easing
                curves, magnetic targets, the right radius for a card. I treat every site like a
                product — shared timing, shared language, one cohesive feel.
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={0.3}
            className="mt-12 grid grid-cols-1 gap-6 border-t border-border/60 pt-8 sm:grid-cols-3"
          >
            {[
              { k: "3+", v: "Years writing interfaces" },
              { k: "100", v: "% satisfaction" },
              { k: "100", v: "% commitment" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-3xl md:text-4xl">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {s.v}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
