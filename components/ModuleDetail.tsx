import Link from "next/link";

import type { Module } from "@/data/modules";

type ModuleDetailProps = {
  module: Module;
};

export const ModuleDetail = ({ module }: ModuleDetailProps) => {
  return (
    <div className="container section-spacing" style={{ paddingTop: "3.5rem" }}>
      <Link href="/" className="link-inline" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
        ← Back to home
      </Link>

      <header
        className="gradient-border"
        style={{
          marginTop: "1.8rem",
          padding: "2px",
          borderRadius: "26px",
          background: module.coverGradient
        }}
      >
        <div className="glass" style={{ borderRadius: "24px", padding: "clamp(2.3rem, 6vw, 3.2rem)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
            <span className="badge" style={{ background: "rgba(124,58,237,0.28)" }}>
              {module.level}
            </span>
            <span className="chip" style={{ background: "rgba(59,130,246,0.18)" }}>
              {module.duration}
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.1rem)", marginBottom: "0.85rem" }}>{module.title}</h1>
          <p style={{ fontSize: "1.05rem", maxWidth: "680px" }}>{module.tagline}</p>
        </div>
      </header>

      <section className="split" style={{ marginTop: "2.8rem", gap: "2.4rem" }}>
        <div className="card" style={{ display: "grid", gap: "1.1rem" }}>
          <div>
            <h2 style={{ fontSize: "1.45rem", marginBottom: "0.5rem" }}>Module overview</h2>
            <p>{module.summary}</p>
          </div>
          <div>
            <strong style={{ display: "block", marginBottom: "0.5rem" }}>Prerequisites</strong>
            <ul>
              {module.prerequisites.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong style={{ display: "block", marginBottom: "0.5rem" }}>Learning outcomes</strong>
            <ul>
              {module.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {module.conceptHighlights.map((concept) => (
              <span key={concept} className="chip" style={{ background: "rgba(124, 58, 237, 0.18)" }}>
                {concept}
              </span>
            ))}
          </div>
        </div>

        <div className="grid" style={{ gap: "1.4rem" }}>
          {module.lessons.map((lesson, index) => (
            <article key={lesson.title} className="card" style={{ display: "grid", gap: "0.8rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="badge" style={{ background: "rgba(59,130,246,0.22)" }}>
                  Lesson {index + 1}
                </span>
                <span className="chip" style={{ background: "rgba(148, 163, 184, 0.16)" }}>Key ideas</span>
              </div>
              <h3 style={{ fontSize: "1.35rem" }}>{lesson.title}</h3>
              <p>{lesson.description}</p>
              <ul>
                {lesson.keyIdeas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ul>
              <div
                style={{
                  display: "grid",
                  gap: "0.5rem",
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(148, 163, 184, 0.18)",
                  borderRadius: "13px",
                  padding: "0.95rem"
                }}
              >
                <strong>Practice activity</strong>
                <p style={{ margin: 0 }}>{lesson.activity}</p>
              </div>
              <div
                style={{
                  display: "grid",
                  gap: "0.35rem",
                  background: "rgba(124, 58, 237, 0.12)",
                  borderRadius: "12px",
                  padding: "0.9rem"
                }}
              >
                <strong style={{ fontSize: "0.95rem", letterSpacing: "0.02em" }}>Learning artifact</strong>
                <span style={{ fontWeight: 600 }}>{lesson.artifact.heading}</span>
                <p style={{ margin: 0 }}>{lesson.artifact.description}</p>
                <span style={{ fontSize: "0.9rem", color: "rgba(226, 232, 240, 0.75)" }}>
                  Outcome: {lesson.artifact.objective}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
