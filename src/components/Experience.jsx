import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO } from '../data.js';

export default function Experience() {
  const D = PORTFOLIO;
  const hashes = useMemo(() =>
    D.experience.map((_, i) =>
      `${(0xa + i).toString(16)}f${(i * 13729 + 91243).toString(16).slice(-5)}`
    ), []);

  return (
    <section id="career" style={{
      padding: "100px 56px 120px", borderTop: "1px solid var(--accent-line)",
      position: "relative", background: "var(--dev-bg)",
    }}>
      <div className="mono" style={{ fontSize: 12, color: "var(--accent)", marginBottom: 6 }}>$ git log --oneline ./career</div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        marginBottom: 56, paddingBottom: 18, borderBottom: "1px solid var(--accent-line)",
      }}>
        <h2 className="grotesk" style={{ fontSize: "clamp(56px, 8vw, 96px)", margin: 0, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--fg)" }}>./career.log</h2>
        <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.12em" }}>—— 5 COMMITS · LATEST FIRST</span>
      </div>

      <div className="dev-card" style={{ padding: 0, borderRadius: 10, overflow: "hidden" }}>
        {D.experience.map((e, i) => (
          <div key={i} style={{
            padding: "30px 32px",
            borderTop: i > 0 ? "1px solid var(--accent-line)" : "none",
            display: "grid", gridTemplateColumns: "120px 1fr 200px",
            gap: 28, alignItems: "start",
          }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.05em", lineHeight: 1.7 }}>
              <div>commit</div>
              <div style={{ color: "var(--muted)" }}>{hashes[i]}</div>
              <div style={{ color: "var(--muted)", marginTop: 8 }}>{e.period.split(" — ")[0]}</div>
            </div>
            <div>
              <div className="grotesk" style={{ fontSize: 24, fontWeight: 500, color: "var(--fg)", marginBottom: 4, letterSpacing: "-0.01em" }}>
                {e.company}{" "}
                <span className="mono" style={{ color: "var(--muted)", fontSize: 12, fontWeight: 400 }}>· {e.role}</span>
              </div>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 14, letterSpacing: "0.05em" }}>
                {e.period} ◆ {e.location}
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {e.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: 13.5, color: "var(--muted-2)", lineHeight: 1.65, marginBottom: 5, paddingLeft: 18, position: "relative", fontWeight: 300 }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>+</span>{b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mono" style={{ fontSize: 10, color: "var(--muted)", lineHeight: 1.85, textAlign: "right", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>{e.stack.map(s => <div key={s}>· {s}</div>)}</div>
              <Link
                to={`/career/${e.id}`}
                className="hover-line"
                style={{ fontSize: 10, color: "var(--accent)", textDecoration: "none", letterSpacing: "0.08em", marginTop: 16, display: "inline-block" }}>
                view details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
