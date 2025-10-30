import Link from "next/link";

import { curatedResources, practicePrompts } from "@/data/resources";

const categoryColors: Record<string, string> = {
  Primer: "rgba(59,130,246,0.22)",
  Simulation: "rgba(16,185,129,0.22)",
  Course: "rgba(244,114,182,0.24)",
  Paper: "rgba(56,189,248,0.24)",
  Toolkit: "rgba(99,102,241,0.24)",
  Community: "rgba(236,72,153,0.22)"
};

export const ResourceShowcase = () => {
  return (
    <section id="resources" className="container section-spacing">
      <div className="section-heading" style={{ marginBottom: "1.4rem" }}>
        <span role="img" aria-label="books">
          📚
        </span>
        Resource library
      </div>
      <div className="split" style={{ gap: "2.4rem" }}>
        <div style={{ display: "grid", gap: "1rem" }}>
          <h2 className="subheading">Curated primers, tooling, and communities to extend your learning.</h2>
          <p>
            Quantum technology evolves quickly. This board highlights resources vetted by educators and
            practitioners so you can keep sharpening your skills, get unstuck, and connect with peers.
          </p>
          <div
            style={{
              display: "grid",
              gap: "0.8rem",
              background: "rgba(15, 23, 42, 0.62)",
              border: "1px solid rgba(148, 163, 184, 0.22)",
              borderRadius: "16px",
              padding: "1.1rem"
            }}
          >
            <strong>How to explore</strong>
            <ul style={{ margin: 0 }}>
              <li>Pair each module with at least one supporting article or tool.</li>
              <li>Rotate between reading, coding, and community discussions.</li>
              <li>Create your own annotated resource map to track insights.</li>
            </ul>
          </div>
        </div>
        <div className="grid" style={{ gap: "1.1rem" }}>
          {curatedResources.map((resource) => (
            <article
              key={resource.title}
              className="card"
              style={{
                display: "grid",
                gap: "0.65rem",
                borderLeft: `3px solid ${categoryColors[resource.category] ?? "rgba(124,58,237,0.25)"}`
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  className="badge"
                  style={{ background: categoryColors[resource.category] ?? "rgba(124,58,237,0.22)" }}
                >
                  {resource.category}
                </span>
                <span className="chip" style={{ background: "rgba(148, 163, 184, 0.16)" }}>
                  {resource.level}
                </span>
              </div>
              <h3 style={{ fontSize: "1.2rem" }}>{resource.title}</h3>
              <p>{resource.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link href={resource.url} className="link-inline" target="_blank" rel="noopener noreferrer">
                  Access resource ↗
                </Link>
                {resource.duration && (
                  <span style={{ color: "rgba(226, 232, 240, 0.7)", fontSize: "0.9rem" }}>
                    {resource.duration}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "3rem",
          display: "grid",
          gap: "1.2rem",
          background: "rgba(10, 18, 36, 0.72)",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          borderRadius: "18px",
          padding: "1.8rem"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h3 style={{ marginBottom: "0.35rem" }}>Practice prompts</h3>
            <p style={{ marginBottom: 0 }}>Use these reflection challenges to synthesize and apply what you learn.</p>
          </div>
          <Link
            href="https://quantumcomputing.stackexchange.com"
            className="link-inline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the community ↗
          </Link>
        </div>
        <div className="grid-3" style={{ gap: "1.1rem" }}>
          {practicePrompts.map((prompt) => (
            <div key={prompt.title} className="card" style={{ gap: "0.75rem" }}>
              <h4 style={{ fontSize: "1.05rem" }}>{prompt.title}</h4>
              <p>{prompt.teaser}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {prompt.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
