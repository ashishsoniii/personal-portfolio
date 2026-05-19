import { useRef, useState, useEffect } from 'react';
import { PORTFOLIO } from '../data.js';

function WorkflowFlow() {
  const stages = [
    { n: "01", kind: "Customer Research", d: "Talk to users. Find the real problem." },
    { n: "02", kind: "PRD & Spec",        d: "Write the spec everyone actually follows." },
    { n: "03", kind: "Design",            d: "Design until the interface is obvious." },
    { n: "04", kind: "Build & Test",      d: "Build it. Test it. Ship it clean." },
    { n: "05", kind: "Release & Improve", d: "Deploy. Measure. Loop back to step 01." },
  ];
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) setInView(true); });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="flow-wrap" ref={wrapRef}>
      <div className={`flow-cards ${inView ? "in-view" : ""}`}>
        {stages.map((s, i) => (
          <span key={s.n} style={{ display: "contents" }}>
            <div className="flow-card" style={{ '--i': i }}>
              <div className="flow-card-num mono">
                <span className="flow-card-numdigit">{s.n}</span>
                <span className="flow-card-numkind">{s.kind.toUpperCase()}</span>
              </div>
              <div className="flow-card-desc">{s.d}</div>
              <div className="flow-card-glow" />
            </div>
            {i < stages.length - 1 && (
              <div className="flow-connector" style={{ '--i': i }}>
                <svg viewBox="0 0 60 12" preserveAspectRatio="none" width="100%" height="12">
                  <defs>
                    <linearGradient id={`fc-grad-${i}`} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <line x1="2" y1="6" x2="52" y2="6" stroke={`url(#fc-grad-${i})`} strokeWidth="1.4" />
                  <path d="M 48 2 L 54 6 L 48 10" fill="none" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle className="flow-pulse" r="3" cy="6" fill="var(--accent)" style={{ '--i': i }} />
                </svg>
              </div>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const D = PORTFOLIO;
  return (
    <section id="about" style={{ padding: "120px 56px 140px", borderTop: "1px solid var(--line)", position: "relative" }}>
      <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>
        —— 02 / How I work
      </div>

      <div style={{ marginBottom: 64 }}>
        <h2 className="serif" style={{
          fontSize: "clamp(72px, 10vw, 144px)", lineHeight: 0.92,
          fontWeight: 400, letterSpacing: "-0.035em", margin: 0, color: "var(--fg)", maxWidth: 1400,
        }}>
          I own the <span style={{ color: "var(--accent)", fontStyle: "italic" }}>whole</span> workflow.<br />
          <span style={{ fontStyle: "italic" }}>Not just my ticket.</span>
        </h2>
      </div>

      <WorkflowFlow />

      {/* AI-first manifesto */}
      <div className="ai-strip" style={{ marginTop: 72 }}>
        <div className="ai-strip-inner">
          <h3 className="serif" style={{
            fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, margin: 0,
            fontWeight: 400, letterSpacing: "-0.025em", color: "var(--fg)",
          }}>
            I build <span style={{ color: "var(--accent)", fontStyle: "italic" }}>AI-first.</span> Every problem starts with the same question:<br />
            <span className="mono" style={{ fontSize: "0.42em", letterSpacing: "0.04em", color: "var(--muted-2)", fontWeight: 400 }}>
              <span style={{ color: "var(--accent)" }}>{">"}</span> can a model handle this — can it 10× the workflow — can it remove a step entirely?
            </span>
          </h3>
        </div>
      </div>

      {/* Highlights */}
      <div className="about-highlights" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 0, marginTop: 96, borderTop: "1px solid var(--line)" }}>
        {D.highlights.map((h, i) => (
          <div key={i} className="about-highlight-item" style={{
            padding: "32px 18px 0 0",
            borderRight: i < D.highlights.length - 1 ? "1px solid var(--line)" : "none",
            paddingLeft: i === 0 ? 0 : 22,
          }}>
            <div className="serif about-highlight-num" style={{ fontSize: 52, lineHeight: 1, color: "var(--accent)", marginBottom: 12, fontWeight: 400 }}>{h.v}</div>
            <div className="mono" style={{ fontSize: 9.5, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.5 }}>{h.k}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
