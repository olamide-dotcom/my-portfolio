import { ArrowUp } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-6 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-display text-3xl md:text-4xl">Until next time.</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              © {new Date().getFullYear()} TEMPO — Built with React &amp; Tailwind CSS
            </p>
          </div>
          <Magnetic>
            <a
              href="#top"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-background/40 px-5 py-3 text-sm backdrop-blur"
            >
              Back to top
              <span className="grid size-7 place-items-center rounded-full bg-foreground text-background transition-transform duration-500 group-hover:-translate-y-0.5">
                <ArrowUp size={14} />
              </span>
            </a>
          </Magnetic>
        </div>
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mt-6 flex flex-wrap justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>Lisbon — Available worldwide</span>
          <span>hello@example.com</span>
        </div>
      </div>
    </footer>
  );
}
