const spotlights = [
  {
    title: "Interference as computation",
    idea:
      "Quantum algorithms engineer constructive and destructive interference so that the correct answers emerge with higher probability.",
    takeaway: "Think in terms of wave patterns combining—not just bits flipping.",
    example: "In the Deutsch-Jozsa algorithm, equal superposition allows all inputs to be queried at once and interference cancels inconsistent answers.",
    badge: "Algorithm Intuition"
  },
  {
    title: "Entanglement vs classical correlation",
    idea:
      "Entangled qubits share a single state description; measuring one instantly constrains the other, beyond classical probability linkage.",
    takeaway: "Entanglement unlocks protocols like teleportation and error correction because it ties outcomes together non-locally.",
    example: "Bell states exhibit correlations that violate classical inequalities, proving the state's inseparability.",
    badge: "Systems Thinking"
  },
  {
    title: "Noise-aware design",
    idea:
      "Real hardware introduces decoherence and gate errors, so algorithms must consider depth, error mitigation, and robust encodings.",
    takeaway: "Optimizing for short, shallow circuits often beats theoretical optimal depth in noisy regimes.",
    example: "Variational algorithms trade exact answers for shorter circuits that tolerate noise via classical optimization loops.",
    badge: "Practical Engineering"
  }
];

export const ConceptSpotlight = () => {
  return (
    <section id="concepts" className="container section-spacing">
      <div className="section-heading" style={{ marginBottom: "1.3rem" }}>
        <span role="img" aria-label="spotlight">
          🔦
        </span>
        Concept spotlights
      </div>
      <div className="grid-3" style={{ gap: "1.4rem" }}>
        {spotlights.map((spotlight) => (
          <div key={spotlight.title} className="card" style={{ display: "grid", gap: "0.85rem" }}>
            <span className="badge" style={{ justifySelf: "start" }}>
              {spotlight.badge}
            </span>
            <h3 style={{ fontSize: "1.35rem" }}>{spotlight.title}</h3>
            <p>{spotlight.idea}</p>
            <div
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(148, 163, 184, 0.18)",
                borderRadius: "14px",
                padding: "0.95rem"
              }}
            >
              <strong style={{ display: "block", marginBottom: "0.4rem" }}>Applied example</strong>
              <p style={{ marginBottom: "0.4rem" }}>{spotlight.example}</p>
              <span style={{ color: "rgba(226, 232, 240, 0.75)", fontSize: "0.9rem" }}>
                Key takeaway: {spotlight.takeaway}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
