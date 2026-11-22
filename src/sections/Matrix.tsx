import { motion } from "motion/react";
import { useSectionInView } from "@/lib/useSectionInView";
import { SectionHeader } from "./Modules";

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "Rust", "C#", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend & UI Architecture",
    items: ["React 19", "Next.js 16", "Redux", "Zustand", "Tailwind CSS", "Monaco Editor", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend, APIs & Caching",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Spring Boot",
      ".NET Core",
      "REST APIs",
      "WebSockets",
      "Turso LibSQL",
      "SQLite",
      "PostgreSQL",
      "MongoDB",
      "Redis 7",
      "Prisma ORM",
    ],
  },
  {
    title: "AI, Security & Quality",
    items: [
      "Google GenAI SDK",
      "Multi-LLM Routing",
      "Prompt Architecture & LLMs",
      "Chrome MV3",
      "ChromaDB",
      "Web Crypto API (AES-GCM)",
      "PBKDF2 (600,000 iter)",
      "Vitest",
      "PyTest",
      "Docker",
      "Git",
    ],
  },
];

export function Matrix() {
  const ref = useSectionInView("matrix");
  return (
    <section
      id="matrix"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen px-5 py-24 sm:px-8 md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="04 · Skills"
          title="Technical Stack"
          caption="A snapshot of the tools I use to design and ship systems."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="glass-panel p-6 md:p-7"
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--pink)" }}
                />
                <h3
                  className="font-display text-lg italic"
                  style={{ fontWeight: 500 }}
                >
                  {g.title}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-[12px] font-medium text-foreground/85"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
