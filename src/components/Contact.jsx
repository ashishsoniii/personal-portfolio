import { PORTFOLIO } from '../data.js';

export default function Contact() {
  const D = PORTFOLIO;
  return (
    <section id="contact" style={{
      padding: "120px 56px 80px", borderTop: "1px solid var(--accent-line)",
      background: "var(--dev-bg)", position: "relative",
    }}>
      <div className="mono" style={{ fontSize: 12, color: "var(--accent)", marginBottom: 18 }}>$ echo "let's build something."</div>
      <h2 className="serif" style={{
        fontSize: "clamp(80px, 13vw, 168px)", lineHeight: 0.95,
        fontWeight: 400, letterSpacing: "-0.04em", margin: 0, marginBottom: 56, color: "var(--fg)",
      }}>
        Have something<br /><span style={{ color: "var(--accent)", fontStyle: "italic" }}>worth building?</span>
      </h2>
      <div style={{ display: "flex", gap: 36, alignItems: "baseline", flexWrap: "wrap", marginBottom: 64 }}>
        <a href={`mailto:${D.email}`} className="mono" style={{
          fontSize: 18, color: "var(--fg)", textDecoration: "none",
          borderBottom: "1px solid var(--accent)", paddingBottom: 4, letterSpacing: "0.02em",
        }}>{D.email} ↗</a>
        <a href={D.links.github} target="_blank" rel="noreferrer" className="hover-line mono" style={{ fontSize: 13, color: "var(--muted-2)", textDecoration: "none", letterSpacing: "0.05em" }}>github ↗</a>
        <a href={D.links.linkedin} target="_blank" rel="noreferrer" className="hover-line mono" style={{ fontSize: 13, color: "var(--muted-2)", textDecoration: "none", letterSpacing: "0.05em" }}>linkedin ↗</a>
      </div>
      <footer style={{
        display: "flex", justifyContent: "space-between",
        paddingTop: 24, borderTop: "1px solid var(--line)", flexWrap: "wrap", gap: 12,
      }}>
        <span className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.12em" }}>EXIT 0 · © 2026 ASHISH SONI · CRAFTED IN BANGALORE</span>
        <span className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.12em" }}>● ALL SYSTEMS NOMINAL · v3.0.0</span>
      </footer>
    </section>
  );
}
