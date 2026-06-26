import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { JOURNEY } from "@/data/portfolio";
import { Reveal, SplitWords } from "./Reveal";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="relative py-24 sm:py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="mb-14 max-w-3xl sm:mb-20">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            ( Learning Journey — 04 )
          </p>
          <SplitWords
            text="Always practicing,"
            className="font-display text-[clamp(2.6rem,13vw,4rem)] font-light leading-[1.05] sm:text-5xl md:text-7xl"
          />
          <SplitWords
            text="never finished."
            className="font-display text-[clamp(2.6rem,13vw,4rem)] font-light italic leading-[1.05] text-foreground/70 sm:text-5xl md:text-7xl"
            delay={0.15}
          />
        </div>

        <div ref={ref} className="relative mx-auto max-w-4xl">
          {/* timeline track */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-4 top-0 h-full w-px bg-foreground md:left-1/2"
          />

          <div className="space-y-14 md:space-y-20">
            {JOURNEY.map((j, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={j.title} delay={0.05}>
                  <div
                    className={`relative flex flex-col items-start gap-6 pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                      right ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* dot */}
                    <span className="absolute left-[11px] top-2 size-2.5 -translate-x-1/2 rounded-full border border-background bg-foreground md:left-1/2" />

                    <div className={`md:px-8 ${right ? "md:text-left" : "md:text-right"}`}>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {j.year}
                      </p>
                      <h4 className="mt-2 font-display text-2xl font-light md:text-3xl">
                        {j.title}
                      </h4>
                    </div>
                    <div className="md:px-8">
                      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                        {j.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
