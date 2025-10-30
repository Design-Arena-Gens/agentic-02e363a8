import Link from "next/link";

export const Hero = () => {
  return (
    <section id="top" className="container" style={{ padding: "3.5rem 0 2.5rem" }}>
      <div
        className="gradient-border sparkle"
        style={{
          padding: "2px",
          borderRadius: "26px",
          background: "linear-gradient(135deg, rgba(124,58,237,0.45), rgba(59,130,246,0.35))"
        }}
      >
        <div
          className="glass"
          style={{
            padding: "clamp(2.4rem, 6vw, 3.5rem)",
            borderRadius: "24px",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.35), transparent 55%), radial-gradient(circle at 75% 25%, rgba(14,165,233,0.28), transparent 65%)",
              opacity: 0.6,
              zIndex: 0
            }}
          />

          <div style={{ position: "relative", zIndex: 1, display: "grid", gap: "1.75rem" }}>
            <div className="badge" style={{ justifySelf: "start" }}>
              <span role="img" aria-label="spark">
                ✨
              </span>
              Guided learning journey for future quantum builders
            </div>

            <div style={{ maxWidth: "640px" }}>
              <h1 style={{ fontSize: "clamp(2.8rem, 5.4vw, 3.85rem)", marginBottom: "1rem", lineHeight: 1.1 }}>
                Learn quantum computing with clarity, intuition, and hands-on practice.
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(226, 232, 240, 0.8)", maxWidth: "580px" }}>
                Quantum Compass is your curated path from foundational qubit intuition to
                algorithmic thinking. Each module blends storytelling, math, and
                interactive exploration to help you truly understand quantum phenomena.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="#modules" passHref>
                <button className="cta" type="button">
                  Start the journey
                  <span aria-hidden>→</span>
                </button>
              </Link>
              <Link
                href="#resources"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.75rem 1.1rem",
                  borderRadius: "14px",
                  background: "rgba(15, 23, 42, 0.68)",
                  border: "1px solid rgba(148, 163, 184, 0.25)",
                  fontWeight: 500
                }}
              >
                Explore resources
                <span aria-hidden role="img">
                  📚
                </span>
              </Link>
            </div>

            <div
              className="frosted"
              style={{
                display: "grid",
                gap: "1.25rem",
                padding: "1.35rem 1.8rem",
                borderRadius: "18px",
                border: "1px solid rgba(148, 163, 184, 0.18)"
              }}
            >
              <div style={{ display: "grid", gap: "0.35rem" }}>
                <span style={{ color: "rgba(226, 232, 240, 0.75)", fontSize: "0.85rem" }}>
                  What you will master
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                  {[
                    "Visualizing qubits on the Bloch sphere",
                    "Designing quantum gate sequences",
                    "Reading and sketching circuits",
                    "Connecting theory to real hardware limitations"
                  ].map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gap: "0.4rem" }}>
                <span style={{ color: "rgba(226, 232, 240, 0.75)", fontSize: "0.85rem" }}>
                  Learning format
                </span>
                <div className="grid-3" style={{ gap: "0.9rem" }}>
                  {[
                    {
                      label: "Guided modules",
                      detail: "Blend of narrative explanation, math, and visual intuition"
                    },
                    {
                      label: "Hands-on practice",
                      detail: "Interactive prompts and circuit simulations grounded in real tooling"
                    },
                    {
                      label: "Knowledge scaffolding",
                      detail: "Glossary, resource library, and milestone checklists"
                    }
                  ].map((item) => (
                    <div key={item.label} className="card" style={{ padding: "1rem 1.1rem" }}>
                      <strong>{item.label}</strong>
                      <p style={{ marginBottom: 0 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
