import React, { useState } from "react";
import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";
import { Reveal, SplitWords } from "./Reveal";
import { Magnetic } from "./Magnetic";

const FIELDS = [
  { name: "name", label: "Your name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "company", label: "Company / project", type: "text" },
];

const ICONS = { GitHub: Github, Email: Mail, Phone: Phone };
const CONTACT_LINKS: Record<keyof typeof ICONS, string> = {
  GitHub: "https://github.com/Olamide-dotcom",
  Email: "mailto:ireolami02@gmail.com",
  Phone: "tel:+2348145334390",
};

export function Contact() {
  const [vals, setVals] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState("");
  const endpoint = import.meta.env.VITE_FORMSPARK_URL ?? "https://submit-form.com/G84fxULnR";

  return (
    <section id="contact" className="relative py-24 sm:py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="mb-12 grid items-end gap-10 sm:mb-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              ( Contact — 05 )
            </p>
            <SplitWords
              text="Let's build"
              className="font-display text-[clamp(3rem,15vw,5rem)] font-light leading-[1] sm:text-6xl md:text-8xl"
            />
            <SplitWords
              text="something quietly great."
              className="font-display text-[clamp(3rem,15vw,5rem)] font-light italic leading-[1] text-foreground/70 sm:text-6xl md:text-8xl"
              delay={0.15}
            />
          </div>
          <Reveal className="md:col-span-5 md:pl-6 text-sm leading-relaxed text-muted-foreground">
            Open to freelance work, collaborations, and full-time roles where craft is valued. Tell
            me a little about the project — I&apos;ll reply within a day or two.
          </Reveal>
        </div>

        <Reveal>
          <form
            action={endpoint}
            method="POST"
            className="relative w-full max-w-full overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-5 backdrop-blur-xl sm:p-6 md:p-12"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -left-10 -top-16 size-[260px] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_60%)] opacity-70 sm:-left-16 sm:-top-20 sm:size-[320px] md:-left-20 md:-top-32 md:size-[420px]"
            />

            <div className="relative grid gap-8 md:grid-cols-2">
              {FIELDS.map((f) => (
                <FloatingInput
                  key={f.name}
                  {...f}
                  value={vals[f.name] ?? ""}
                  onChange={(v) => setVals((s) => ({ ...s, [f.name]: v }))}
                />
              ))}
              <div className="md:col-span-2">
                <FloatingInput
                  name="message"
                  label="Tell me about your project"
                  textarea
                  value={msg}
                  onChange={setMsg}
                />
              </div>

              <div className="md:col-span-2 mt-2 flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Estimated reply · 24h
                </p>
                <Magnetic>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
                  >
                    Send message
                    <span className="grid size-7 place-items-center rounded-full bg-background/15 transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight size={14} />
                    </span>
                  </button>
                </Magnetic>
              </div>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Or find me on</p>
          <div className="flex flex-wrap gap-3">
            {(Object.keys(ICONS) as Array<keyof typeof ICONS>).map((k) => {
              const Icon = ICONS[k];
              return (
                <Magnetic key={k}>
                  <a
                    href={CONTACT_LINKS[k]}
                    target="_blank"
                    rel="noreferrer"
                    data-hover
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2.5 text-sm backdrop-blur transition-colors hover:bg-foreground hover:text-background"
                  >
                    <Icon size={14} />
                    {k}
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FloatingInput({
  name,
  label,
  type = "text",
  textarea = false,
  value,
  onChange,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const filled = value.length > 0;
  const C: React.ElementType = textarea ? "textarea" : "input";
  return (
    <label className="group relative block">
      <span
        className={`pointer-events-none absolute left-0 top-3 origin-left text-sm text-muted-foreground transition-all duration-300 group-focus-within:-translate-y-3 group-focus-within:scale-90 group-focus-within:text-foreground ${
          filled ? "-translate-y-3 scale-90 text-foreground" : ""
        }`}
      >
        {label}
      </span>
      <C
        name={name}
        type={type}
        rows={textarea ? 4 : undefined}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        className="peer w-full min-h-[3rem] resize-none border-b border-border bg-transparent pb-2 pt-5 text-base text-foreground outline-none transition-colors focus:border-foreground"
      />
      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 peer-focus:scale-x-100" />
    </label>
  );
}
