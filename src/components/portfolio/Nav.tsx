import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { NAV } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "0% 50%" }}
      className="fixed left-0 top-0 z-[60] h-px w-full bg-accent"
    />
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 md:px-10 md:py-5">
        <a href="#top" className="flex items-center gap-2 font-display text-lg">
          <span className="relative inline-block size-2 rounded-full bg-accent">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
          </span>
          <span className="font-medium tracking-tight">TEMPO</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid size-9 place-items-center rounded-full border border-border/80 bg-background/60 backdrop-blur transition-transform hover:scale-105"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid size-9 place-items-center rounded-full border border-border/80 md:hidden"
          >
            <span
              className={`block h-px w-4 bg-current transition-transform ${open ? "translate-y-[2px] rotate-45" : "-translate-y-[3px]"}`}
            />
            <span
              className={`block h-px w-4 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"} -mt-px`}
            />
            <span
              className={`block h-px w-4 bg-current transition-transform ${open ? "-translate-y-[2px] -rotate-45" : "translate-y-[3px]"} -mt-px`}
            />
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-border/60 bg-background/90 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col gap-1 px-5 py-4 sm:px-6">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 font-display text-2xl"
            >
              {n.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
