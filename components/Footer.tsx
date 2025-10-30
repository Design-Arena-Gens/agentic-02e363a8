import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      style={{
        padding: "3rem 0 2.5rem",
        background: "rgba(5, 11, 23, 0.85)",
        marginTop: "4rem",
        borderTop: "1px solid rgba(148, 163, 184, 0.18)"
      }}
    >
      <div className="container" style={{ display: "grid", gap: "1.5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between" }}>
          <div style={{ display: "grid", gap: "0.6rem" }}>
            <strong style={{ fontSize: "1.15rem" }}>Quantum Compass</strong>
            <p style={{ maxWidth: "420px" }}>
              A learning companion built to turn quantum computing curiosity into confident skill. Keep exploring,
              keep asking &ldquo;why&rdquo;, and ground insights in hands-on practice.
            </p>
          </div>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            <strong>Quick links</strong>
            <Link href="#modules" className="link-inline">
              Modules
            </Link>
            <Link href="#path" className="link-inline">
              Learning path
            </Link>
            <Link href="#resources" className="link-inline">
              Resources
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "rgba(148, 163, 184, 0.75)"
          }}
        >
          <span>© {new Date().getFullYear()} Quantum Compass. All rights reserved.</span>
          <span>Crafted for curious minds navigating the quantum frontier.</span>
        </div>
      </div>
    </footer>
  );
};
