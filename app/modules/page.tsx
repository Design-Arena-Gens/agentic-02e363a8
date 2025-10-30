import Link from "next/link";

import { modules } from "@/data/modules";

export default function ModulesPage() {
  return (
    <main className="container section-spacing" style={{ paddingTop: "3.5rem" }}>
      <Link href="/" className="link-inline" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
        ← Back to home
      </Link>
      <header style={{ marginTop: "1.8rem", marginBottom: "2.4rem" }}>
        <div className="section-heading" style={{ marginBottom: "1.2rem" }}>
          <span role="img" aria-label="modules">
            🧭
          </span>
          Learning modules
        </div>
        <h1 className="subheading" style={{ marginBottom: "0.8rem" }}>Choose your starting point</h1>
        <p style={{ maxWidth: "640px" }}>
          Below you&apos;ll find the full journey, from quantum intuition to algorithms. Each card links to a deep dive with
          lessons, practice activities, and scaffolding resources.
        </p>
      </header>
      <div className="grid-2" style={{ gap: "1.8rem" }}>
        {modules.map((module) => (
          <article key={module.slug} className="card" style={{ display: "grid", gap: "0.9rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", alignItems: "center" }}>
              <span className="badge" style={{ background: "rgba(124, 58, 237, 0.18)" }}>{module.level}</span>
              <span className="chip" style={{ background: "rgba(148, 163, 184, 0.16)" }}>{module.duration}</span>
            </div>
            <h2 style={{ fontSize: "1.5rem" }}>{module.title}</h2>
            <p>{module.summary}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
              {module.conceptHighlights.map((concept) => (
                <span key={concept} className="chip">
                  {concept}
                </span>
              ))}
            </div>
            <Link href={`/modules/${module.slug}`} className="link-inline" style={{ fontWeight: 600 }}>
              View full module ↗
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
