import { motion } from "motion/react";
import { useSectionInView } from "@/lib/useSectionInView";
import { Magnetic } from "@/ui/Magnetic";

type Project = {
  name: string;
  date: string;
  blurb: string;
  tags: string[];
  live?: string;
  code?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Stride — AI Career Platform & StridePilot Extension",
    date: "May 2026",
    blurb:
      "AI career suite featuring sub-second ATS scoring, Chrome MV3 Shadow-DOM autofill HUD, and a 21-platform ingestion pipeline (13 active platforms on 3h cron). Backed by 64 test files / 592 tests (100% passing Vitest).",
    tags: ["Next.js 16", "React 19", "Chrome MV3", "Gemini API", "Vitest (592 Tests)", "Zustand"],
    live: "https://astrework.app/",
    code: "https://github.com/Ayushi507/Stride-Career-Engine",
  },
  {
    name: "Alyra Lock — Client-Side Zero-Knowledge Password Vault",
    date: "Feb 2026",
    blurb:
      "Client-side encrypted vault deriving keys strictly in browser memory via Web Crypto API (AES-GCM 256-bit, 600,000 PBKDF2 iterations) with JWT-authenticated Express sync. Zero plaintext leaves device.",
    tags: ["React", "TypeScript", "Web Crypto API", "AES-GCM", "PBKDF2 (600k)", "Express"],
    live: "https://alyra-lock.vercel.app/",
    code: "https://github.com/Ayushi507/Zero-knowledge-password-manager-",
  },
];

export function Modules() {
  const ref = useSectionInView("modules");
  return (
    <section
      id="modules"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen px-5 py-24 sm:px-8 md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="02 · Work" title="Selected Projects" caption="Systems I've designed, shipped, and open-sourced." />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
              className="glass-panel scan-hover flex flex-col gap-4 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl leading-tight" style={{ fontWeight: 500 }}>
                  {p.name}
                </h3>
                <span className="hud-label whitespace-nowrap">{p.date}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

              <ul className="flex flex-wrap gap-1.5 pt-1">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-card/60 px-2.5 py-1 font-mono text-[10px] tracking-widest text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex flex-wrap items-center gap-2 pt-2">
                {p.live && (
                  <Magnetic label="LIVE">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="scan-hover inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-4 py-2 text-[11px] font-medium text-background"
                    >
                      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--pink)" }} />
                      Live Demo
                    </a>
                  </Magnetic>
                )}
                {p.code && (
                  <Magnetic label="CODE">
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="scan-hover inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[11px] font-medium"
                    >
                      Source →
                    </a>
                  </Magnetic>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  caption,
}: {
  eyebrow: string;
  title: string;
  caption?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-foreground/40" />
        <span className="hud-label">{eyebrow}</span>
      </div>
      <h2
        className="mt-4 font-display text-4xl md:text-5xl"
        style={{ letterSpacing: "-0.015em", fontWeight: 400 }}
      >
        <span style={{ fontStyle: "italic" }} className="aurora-text">
          {title.split(" ")[0]}
        </span>{" "}
        {title.split(" ").slice(1).join(" ")}
      </h2>
      {caption && (
        <p className="mt-3 text-base text-muted-foreground">{caption}</p>
      )}
    </div>
  );
}
