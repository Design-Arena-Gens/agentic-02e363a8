import { learningPath } from "@/data/path";

export const LearningPath = () => {
  return (
    <section id="path" className="container section-spacing">
      <div className="section-heading" style={{ marginBottom: "1.4rem" }}>
        <span role="img" aria-label="map">
          🗺️
        </span>
        Guided progression
      </div>
      <div className="split" style={{ gap: "2rem" }}>
        <div>
          <h2 className="subheading" style={{ marginBottom: "1rem" }}>
            Navigate from foundational intuition to algorithmic mastery with consistent checkpoints.
          </h2>
          <p>
            The journey is intentionally scaffolded. Each milestone introduces a new mental model, offers
            reflective prompts, and connects you with tooling that mirrors industry practice.
          </p>
          <div className="card" style={{ marginTop: "1.5rem", display: "grid", gap: "0.75rem" }}>
            <strong>Study cadence tips</strong>
            <ul style={{ margin: 0 }}>
              <li>Set aside focused 45-minute sessions for each lesson and capture insights in a learning log.</li>
              <li>Alternate between conceptual reading and hands-on experimentation to strengthen intuition.</li>
              <li>Share your artifacts with peers for feedback—teaching solidifies understanding.</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="timeline">
            {learningPath.map((milestone) => (
              <div key={milestone.step} className="timeline-step" data-step={milestone.step}>
                <h3 style={{ marginBottom: "0.35rem", fontSize: "1.25rem" }}>{milestone.title}</h3>
                <p style={{ marginBottom: "0.55rem" }}>{milestone.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "0.75rem" }}>
                  {milestone.focus.map((focusItem) => (
                    <span key={focusItem} className="chip">
                      {focusItem}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: "0.9rem", color: "rgba(226, 232, 240, 0.75)" }}>
                  Milestone artifact: <strong>{milestone.deliverable}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
