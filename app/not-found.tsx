import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container" style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}>
      <div className="card" style={{ maxWidth: "520px", textAlign: "center", padding: "2.5rem" }}>
        <span style={{ fontSize: "2.5rem" }} role="img" aria-label="astronaut">
          👩‍🚀
        </span>
        <h1 style={{ margin: "1rem 0 0.5rem" }}>Module not found</h1>
        <p style={{ marginBottom: "1.5rem" }}>
          The quantum location you were seeking slipped into another superposition. Let&apos;s navigate you back to
          familiar territory.
        </p>
        <Link href="/" className="link-inline" style={{ fontWeight: 600 }}>
          Return to home ↗
        </Link>
      </div>
    </main>
  );
}
