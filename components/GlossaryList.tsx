import { glossary } from "@/data/glossary";

export const GlossaryList = () => {
  return (
    <section className="container section-spacing">
      <div className="section-heading" style={{ marginBottom: "1.3rem" }}>
        <span role="img" aria-label="glossary">
          📖
        </span>
        Quantum glossary
      </div>
      <div className="grid-2">
        {glossary.map((entry) => (
          <article key={entry.term} className="card" style={{ display: "grid", gap: "0.55rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: "1.2rem" }}>{entry.term}</h3>
              <span className="badge" style={{ background: "rgba(124, 58, 237, 0.18)" }}>
                Key term
              </span>
            </div>
            <p>{entry.definition}</p>
            <p style={{ marginBottom: 0, color: "rgba(226, 232, 240, 0.72)", fontSize: "0.95rem" }}>
              Why it matters: {entry.context}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
              {entry.related.map((term) => (
                <span key={term} className="chip">
                  {term}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
