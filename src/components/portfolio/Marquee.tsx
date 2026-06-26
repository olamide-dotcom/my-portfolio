export function Marquee() {
  const items = [
    "Frontend",
    "Motion",
    "React",
    "Tailwind",
    "Interfaces",
    "Performance",
    "Accessibility",
    "Design Systems",
  ];
  const row = [...items, ...items];
  return (
    <section aria-hidden className="overflow-hidden border-y border-border/60 py-6 sm:py-8">
      <div className="flex w-max marquee gap-8 whitespace-nowrap font-display text-3xl text-foreground/80 sm:gap-12 sm:text-4xl md:text-7xl">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-8 sm:gap-12">
            <span>{s}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
