"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#modules", label: "Learning Modules" },
  { href: "#path", label: "Learning Path" },
  { href: "#concepts", label: "Concept Spotlights" },
  { href: "#resources", label: "Resources" }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container" style={{ padding: "1.6rem 0 0.8rem" }}>
      <div
        className="glass"
        style={{
          padding: "0.85rem 1.4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "16px"
        }}
      >
        <Link href="#top" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            className="mono"
            style={{
              display: "inline-grid",
              placeItems: "center",
              width: "2.6rem",
              height: "2.6rem",
              borderRadius: "12px",
              background: "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(59,130,246,0.55))",
              border: "1px solid rgba(124, 58, 237, 0.35)",
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "#f8fafc"
            }}
          >
            Q|
          </span>
          <div>
            <strong style={{ fontSize: "1.05rem", letterSpacing: "0.015em" }}>Quantum Compass</strong>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(226, 232, 240, 0.75)" }}>
              Navigate the quantum landscape with clarity
            </p>
          </div>
        </Link>

        <nav className="pill-nav" style={{ display: "none" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          style={{
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(148, 163, 184, 0.22)",
            color: "rgba(226, 232, 240, 0.85)",
            borderRadius: "12px",
            padding: "0.55rem 0.75rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            cursor: "pointer"
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>Menu</span>
          <span aria-hidden>{isOpen ? "−" : "+"}</span>
        </button>
      </div>

      {isOpen && (
        <nav
          className="glass"
          style={{
            marginTop: "0.85rem",
            padding: "0.75rem",
            display: "grid",
            gap: "0.45rem",
            borderRadius: "14px"
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                padding: "0.6rem 0.75rem",
                borderRadius: "10px",
                color: "rgba(226, 232, 240, 0.85)",
                background: "rgba(15, 23, 42, 0.55)"
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          header button {
            display: none;
          }

          header nav.pill-nav {
            display: flex !important;
          }

          header > nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
