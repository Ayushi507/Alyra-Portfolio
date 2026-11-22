import { motion } from "motion/react";
import { useSectionInView } from "@/lib/useSectionInView";
import { SectionHeader } from "./Modules";

type Role = {
  org: string;
  title: string;
  date: string;
  points: string[];
  stack: string[];
};

const ROLES: Role[] = [
  {
    org: "Commonwealth Bank (CommBank)",
    title: "Software Development Virtual Simulation",
    date: "June 2026",
    points: [
      "Resolved UI state desynchronization and unvalidated input payloads on the CommBank Goal Manager dashboard.",
      "Modernized the React/Redux Goal Manager UI with debounced form handlers and strict client-side financial validation schemas.",
      "Built automated component integration tests covering state resets, ensuring 0% layout shift across mobile and desktop viewports.",
    ],
    stack: ["React", "Redux", "Form Handlers", "Validation Schemas", "Integration Testing"],
  },
  {
    org: "Y Combinator · Shiptivity",
    title: "Software Development Virtual Simulation",
    date: "June 2026",
    points: [
      "Fixed dropped drag events, key-constraint warnings, and sluggish re-rendering on a real-time Kanban workflow board.",
      "Integrated Dragula drag-and-drop state hooks in React and memoized card components to eliminate redundant rendering cycles.",
      "Cut UI component re-render overhead by 30%, ensuring smooth 60 FPS card dragging across 500+ active task items.",
    ],
    stack: ["React.js", "Dragula", "Node.js", "Webpack", "OpenSSL", "Memoization"],
  },
  {
    org: "Walmart USA",
    title: "Advanced Software Development Virtual Simulation",
    date: "May 2026",
    points: [
      "Solved data entry bottlenecks and inconsistent record structures caused by unnormalized retail inventory spreadsheets.",
      "Designed a normalized 3NF relational schema in SQLite and built automated Python validation scripts to clean corrupted CSV feeds.",
      "Eliminated 100% of duplicate inventory SKUs and structured raw retail records into query-ready database tables.",
    ],
    stack: ["Python", "SQLite", "3NF Normalization", "Relational Schemas", "Data Validation"],
  },
];

export function Experience() {
  const ref = useSectionInView("experience");
  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen px-5 py-24 sm:px-8 md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="03 · Experience"
          title="Experience Log"
          caption="Real-world simulations across product and enterprise platforms."
        />

        <div className="mt-14 flex flex-col gap-6">
          {ROLES.map((r, i) => (
            <motion.article
              key={r.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="glass-panel grid gap-6 p-6 md:grid-cols-[240px_1fr] md:p-8"
            >
              <div>
                <span className="hud-label">{r.date}</span>
                <h3
                  className="mt-2 font-display text-xl leading-tight"
                  style={{ fontWeight: 500 }}
                >
                  {r.org}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.title}</p>
              </div>
              <div>
                <ul className="flex flex-col gap-2.5 text-sm leading-relaxed">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span
                        className="mt-2 inline-block h-1 w-3 shrink-0"
                        style={{ background: "var(--pink)" }}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {r.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-card/60 px-2.5 py-1 font-mono text-[10px] tracking-widest text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
