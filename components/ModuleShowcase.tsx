import Link from "next/link";

import { modules } from "@/data/modules";

const accentColors = [
  "rgba(124,58,237,0.28)",
  "rgba(59,130,246,0.3)",
  "rgba(14,165,233,0.28)",
  "rgba(244,114,182,0.32)"
];

export const ModuleShowcase = () => {
  return (
    <section id="modules" className="container section-spacing" style={{ position: "relative" }}>
      <div className="section-heading" style={{ marginBottom: "1.2rem" }}>
        <span role="img" aria-label="circuit">
          🧭
        </span>
        Learning modules
      </div>
      <div className="split" style={{ marginBottom: "2.5rem" }}>
        <div style={{ display: "grid", gap: "1.1rem" }}>
          <h2 className="subheading" style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)" }}>
            A scaffolded curriculum that translates quantum mystique into practical understanding.
          </h2>
          <p>
            Each module distills core concepts into digestible narratives, visualization-first explanations,
            and practice prompts. Master the fundamentals and build towards algorithm design with reflective
            artifacts to cement your knowledge.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[
              "Story-driven explanations",
              "Mathematical walkthroughs",
              "Interactive practice",
              "Curated resources",
              "Reflection artifacts"
            ].map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="card" style={{ alignSelf: "stretch" }}>
          <h3 style={{ marginBottom: "0.65rem" }}>How to use the modules</h3>
          <ul style={{ margin: 0 }}>
            <li>Skim the summary to preview the conceptual terrain.</li>
            <li>Dive into lessons, pausing to test yourself with the key idea callouts.</li>
            <li>Create the suggested learning artifact to reinforce long-term recall.</li>
            <li>Jump to the glossary when new vocabulary appears and log insights.</li>
          </ul>
        </div>
      </div>

      <div className="grid-2" style={{ gap: "1.6rem" }}>
        {modules.map((module, index) => (
          <article
            key={module.slug}
            className="card"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(148, 163, 184, 0.22)",
              background: "rgba(10, 18, 36, 0.78)",
              display: "grid",
              gap: "1.2rem"
            }}
          >
            <div
              style={{
                height: "5px",
                background: module.coverGradient,
                borderRadius: "1rem",
                margin: "-0.2rem -0.2rem 0"
              }}
            />
            <div style={{ display: "grid", gap: "0.65rem" }}>
              <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
                <span className="mono" style={{ color: "rgba(226, 232, 240, 0.7)" }}>
                  #{index + 1}
                </span>
                <span className="badge" style={{ background: accentColors[index % accentColors.length] }}>
                  {module.level}
                </span>
                <span className="chip" style={{ background: "rgba(148, 163, 184, 0.16)" }}>
                  {module.duration}
                </span>
              </div>
              <h3 style={{ fontSize: "1.55rem" }}>{module.title}</h3>
              <p>{module.summary}</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
              {module.conceptHighlights.map((concept) => (
                <span key={concept} className="chip" style={{ background: "rgba(124, 58, 237, 0.14)" }}>
                  {concept}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "grid", gap: "0.3rem" }}>
                <span style={{ color: "rgba(226, 232, 240, 0.68)", fontSize: "0.9rem" }}>Learning outcomes</span>
                <ul style={{ margin: 0 }}>
                  {module.outcomes.slice(0, 2).map((outcome) => (
                    <li key={outcome} style={{ marginBottom: "0.25rem" }}>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/modules/${module.slug}`}
                className="link-inline"
                style={{ alignSelf: "end", fontWeight: 600 }}
              >
                Dive into module ↗
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
