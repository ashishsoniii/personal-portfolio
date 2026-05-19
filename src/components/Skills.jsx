import { useRef, useState, useEffect } from 'react';
import { PORTFOLIO } from '../data.js';

const CATS = [
  { id: "Frontend", label: "FRONTEND", cx: 0.20, cy: 0.50, color: "#ff5e3a" },
  { id: "Backend",  label: "BACKEND",  cx: 0.54, cy: 0.36, color: "#ffb84a" },
  { id: "Tools",    label: "TOOLS",    cx: 0.84, cy: 0.60, color: "#7ad7ff" },
];

const RINGS  = [125, 178, 220];
const SPEEDS = [0.65, -0.45, 0.38];

function ClassicView({ meta, filter, setFilter }) {
  return (
    <div style={{ padding: "32px 28px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 36, overflowY: "auto", maxHeight: 680 }}>
      {CATS.map(c => {
        const skills = Object.entries(meta)
          .filter(([, m]) => m.cat === c.id)
          .sort(([, a], [, b]) => b.lvl - a.lvl);
        const dimmed = filter && filter !== c.id;
        return (
          <div key={c.id} style={{ opacity: dimmed ? 0.2 : 1, transition: "opacity .3s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, cursor: "pointer" }}
              onClick={() => setFilter(filter === c.id ? null : c.id)}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: c.color, display: "inline-block", flexShrink: 0, boxShadow: `0 0 10px ${c.color}` }} />
              <span className="mono" style={{ fontSize: 10, color: c.color, letterSpacing: "0.2em", fontWeight: 700 }}>{c.label}</span>
              <span className="mono" style={{ fontSize: 9, color: "var(--muted)", letterSpacing: "0.1em" }}>{skills.length} SKILLS</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {skills.map(([name, m]) => (
                <div key={name}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "8px 10px", borderRadius: 6,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid transparent",
                    transition: "all .15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${c.color}12`; e.currentTarget.style.borderColor = `${c.color}30`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "transparent"; }}>
                  <span className="mono" style={{ fontSize: 11.5, color: "var(--fg)", letterSpacing: "0.02em" }}>{name}</span>
                  <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                    {[1,2,3,4,5].map(i => (
                      <div key={i} style={{
                        width: 7, height: 7, borderRadius: 99,
                        background: i <= m.lvl ? c.color : "rgba(255,255,255,0.09)",
                        boxShadow: i <= m.lvl ? `0 0 5px ${c.color}80` : "none",
                        transition: "background .15s",
                      }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  const D = PORTFOLIO;
  const meta = D.skillMeta;
  const wrapRef = useRef(null);
  const [size, setSize]       = useState({ w: 1200, h: 680 });
  const [hovered, setHovered] = useState(null);
  const [filter, setFilter]   = useState(null);
  const [t, setT]             = useState(0);
  const [viewMode, setViewMode] = useState("orbital");

  useEffect(() => {
    const onR = () => {
      if (wrapRef.current) setSize({ w: wrapRef.current.offsetWidth, h: wrapRef.current.offsetHeight });
    };
    onR();
    const ro = new ResizeObserver(onR);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (viewMode !== "orbital") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf, last = performance.now();
    const tick = (now) => { setT(s => s + (now - last) * 0.0001); last = now; raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [viewMode]);

  const nodes = [];
  if (viewMode === "orbital") {
    CATS.forEach((c, ci) => {
      const skills = Object.entries(meta).filter(([, m]) => m.cat === c.id);
      skills.forEach(([name, m]) => {
        const ringIdx = m.lvl >= 4 ? 0 : (m.lvl >= 3 ? 1 : 2);
        const radius  = RINGS[ringIdx];
        const ringSkills = skills.filter(([, mm]) => (mm.lvl >= 4 ? 0 : mm.lvl >= 3 ? 1 : 2) === ringIdx);
        const idxInRing  = ringSkills.findIndex(([n]) => n === name);
        const total      = ringSkills.length;
        const speed      = SPEEDS[ringIdx];
        const phase      = (idxInRing / total) * Math.PI * 2 + t * speed + ci * 1.4;
        const hubX = c.cx * size.w;
        const hubY = c.cy * size.h;
        const x = hubX + Math.cos(phase) * radius;
        const y = hubY + Math.sin(phase) * radius;
        const r = 7 + m.lvl * 3.4;
        const angle     = Math.atan2(y - hubY, x - hubX);
        const labelDist = r + 15;
        const lx = x + Math.cos(angle) * labelDist;
        const ly = y + Math.sin(angle) * labelDist;
        nodes.push({ name, ...m, x, y, r, lx, ly, color: c.color, cat: c.id, ringIdx, cx: hubX, cy: hubY });
      });
    });
  }

  const dim = (n) => filter && n.cat !== filter;

  return (
    <section id="skills" style={{
      padding: "100px 56px 120px", borderTop: "1px solid var(--accent-line)",
      background: "var(--dev-bg)", position: "relative", overflow: "hidden",
    }}>
      <div className="mono" style={{ fontSize: 12, color: "var(--accent)", marginBottom: 6 }}>$ ./skills --visualize --orbital</div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        marginBottom: 8, paddingBottom: 14, borderBottom: "1px solid var(--accent-line)",
      }}>
        <h2 className="grotesk" style={{ fontSize: "clamp(56px, 8vw, 96px)", margin: 0, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--fg)" }}>./constellation</h2>
        <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.12em" }}>—— {Object.keys(meta).length} SKILLS · 3 DOMAINS</span>
      </div>

      {viewMode === "orbital" && (
        <div className="mono" style={{ fontSize: 10, color: "var(--muted-2)", letterSpacing: "0.11em", marginBottom: 16, lineHeight: 1.6 }}>
          INNER ORBIT = DAILY DRIVER &nbsp;·&nbsp; NODE SIZE = PROFICIENCY &nbsp;·&nbsp; HOVER TO INSPECT &nbsp;·&nbsp; CLICK TO FILTER
        </div>
      )}

      {/* Controls row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          {CATS.map(c => (
            <button key={c.id} onClick={() => setFilter(filter === c.id ? null : c.id)}
              className="mono skill-node"
              style={{
                background: filter === c.id ? c.color : "transparent",
                border: `1px solid ${c.color}`,
                color: filter === c.id ? "#0a0908" : c.color,
                padding: "6px 14px", borderRadius: 99, fontSize: 10,
                letterSpacing: "0.14em", fontWeight: 600,
              }}>{c.label}</button>
          ))}
          {filter && (
            <button onClick={() => setFilter(null)} className="mono skill-node" style={{
              background: "transparent", border: "1px solid var(--muted)",
              color: "var(--muted)", padding: "6px 14px", borderRadius: 99, fontSize: 10, letterSpacing: "0.14em",
            }}>CLEAR ✕</button>
          )}
        </div>

        {/* View mode toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <span className="mono" style={{ fontSize: 9, color: viewMode === "orbital" ? "var(--accent)" : "var(--muted)", letterSpacing: "0.12em", transition: "color .2s" }}>ORBITAL</span>
          <button
            onClick={() => setViewMode(v => v === "orbital" ? "classic" : "orbital")}
            aria-label="Toggle view mode"
            style={{
              width: 42, height: 24, borderRadius: 99, padding: 0, border: "1px solid var(--accent)",
              background: viewMode === "classic" ? "var(--accent)" : "transparent",
              cursor: "pointer", position: "relative", flexShrink: 0, transition: "background .2s",
            }}>
            <div style={{
              width: 16, height: 16, borderRadius: 99,
              background: viewMode === "classic" ? "#0a0908" : "var(--accent)",
              position: "absolute", top: 3,
              left: viewMode === "orbital" ? 3 : 21,
              transition: "left .22s cubic-bezier(.4,0,.2,1), background .2s",
            }} />
          </button>
          <span className="mono" style={{ fontSize: 9, color: viewMode === "classic" ? "var(--accent)" : "var(--muted)", letterSpacing: "0.12em", transition: "color .2s" }}>CLASSIC</span>
        </div>
      </div>

      {/* Visualization container */}
      <div ref={viewMode === "orbital" ? wrapRef : null} style={{
        position: "relative", width: "100%",
        minHeight: viewMode === "classic" ? "auto" : 680,
        height: viewMode === "orbital" ? 680 : "auto",
        borderRadius: 12,
        overflow: viewMode === "orbital" ? "hidden" : "visible",
        background: viewMode === "orbital"
          ? "radial-gradient(ellipse at 30% 50%, rgba(255,94,58,0.05), transparent 50%), radial-gradient(ellipse at 75% 40%, rgba(255,184,74,0.04), transparent 40%)"
          : "transparent",
        border: "1px solid var(--accent-line)",
        transition: "background .3s",
      }}>
        {viewMode === "orbital" ? (
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
            <defs>
              {CATS.map(c => (
                <radialGradient key={c.id} id={`g-${c.id}`}>
                  <stop offset="0%"   stopColor={c.color} stopOpacity="0.38" />
                  <stop offset="55%"  stopColor={c.color} stopOpacity="0.06" />
                  <stop offset="100%" stopColor={c.color} stopOpacity="0" />
                </radialGradient>
              ))}
              <filter id="label-shadow">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0a0908" floodOpacity="1" />
              </filter>
            </defs>

            {Array.from({ length: 55 }).map((_, i) => {
              const sx = ((i * 137.5) % 100);
              const sy = ((i * 73.3)  % 100);
              const op = 0.08 + ((Math.sin(t * 3.5 + i) + 1) / 2) * 0.32;
              return <circle key={i} cx={`${sx}%`} cy={`${sy}%`} r="1" fill="#fff" opacity={op} />;
            })}

            {CATS.map(c => {
              const dimC = filter && filter !== c.id;
              const hx = c.cx * size.w;
              const hy = c.cy * size.h;
              return (
                <g key={c.id} opacity={dimC ? 0.1 : 1} style={{ transition: "opacity .4s" }}>
                  <circle cx={hx} cy={hy} r="210" fill={`url(#g-${c.id})`} />
                  {RINGS.map((r, ri) => (
                    <circle key={ri} cx={hx} cy={hy} r={r}
                      fill="none" stroke={c.color} strokeOpacity="0.14" strokeWidth="1" strokeDasharray="4 9" />
                  ))}
                  <circle cx={hx} cy={hy} r="26" fill={c.color} />
                  <circle cx={hx} cy={hy} r="26" fill="none" stroke={c.color} strokeOpacity="0.45">
                    <animate attributeName="r" from="26" to="52" dur="2.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  <text x={hx} y={hy + 4} textAnchor="middle" fill="#0a0908"
                    className="mono" style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: "0.13em" }}>{c.label}</text>
                </g>
              );
            })}

            {hovered && (() => {
              const n = nodes.find(nd => nd.name === hovered);
              if (!n) return null;
              return <line x1={n.cx} y1={n.cy} x2={n.x} y2={n.y}
                stroke={n.color} strokeWidth="1.2" strokeOpacity="0.7" strokeDasharray="4 4" />;
            })()}

            {nodes.map(n => {
              const isHov  = hovered === n.name;
              const dimmed = dim(n);
              return (
                <g key={n.name}
                  opacity={dimmed ? 0.08 : 1}
                  style={{ transition: "opacity .35s", cursor: "pointer" }}
                  onMouseEnter={() => setHovered(n.name)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setFilter(n.cat)}>
                  <circle cx={n.x} cy={n.y} r={n.r + 10} fill={n.color}
                    fillOpacity={isHov ? 0.22 : 0} style={{ transition: "fill-opacity .2s" }} />
                  <circle cx={n.x} cy={n.y} r={n.r}
                    fill={n.color} fillOpacity={isHov ? 1 : 0.84}
                    stroke={n.color} strokeOpacity={isHov ? 1 : 0.3} strokeWidth={isHov ? 2 : 0.5} />
                  <text x={n.lx} y={n.ly + 4} textAnchor="middle"
                    className="mono"
                    filter="url(#label-shadow)"
                    style={{
                      fontSize: isHov ? 11.5 : 10,
                      fontWeight: isHov ? 700 : 400,
                      fill: isHov ? n.color : "#d6cfc5",
                      letterSpacing: "0.05em",
                      transition: "all .2s",
                      pointerEvents: "none",
                    }}>
                    {n.name}
                  </text>
                </g>
              );
            })}
          </svg>
        ) : (
          <ClassicView meta={meta} filter={filter} setFilter={setFilter} />
        )}

        {/* Hover detail card — orbital only */}
        {viewMode === "orbital" && hovered && (() => {
          const n = nodes.find(nd => nd.name === hovered);
          if (!n) return null;
          return (
            <div className="mono" style={{
              position: "absolute", bottom: 18, left: 18, padding: "14px 20px",
              background: "rgba(10,9,8,0.94)", border: `1px solid ${n.color}`, borderRadius: 8,
              backdropFilter: "blur(12px)", fontSize: 11, color: "var(--fg)", minWidth: 210, pointerEvents: "none",
              boxShadow: `0 0 32px ${n.color}22`,
            }}>
              <div style={{ fontSize: 19, fontWeight: 600, color: n.color, marginBottom: 4 }}>{n.name}</div>
              <div style={{ color: "var(--muted)", letterSpacing: "0.1em", fontSize: 9.5, marginBottom: 12 }}>
                {n.cat.toUpperCase()} &nbsp;·&nbsp; {n.yrs} YR{n.yrs === 1 ? "" : "S"} EXPERIENCE
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {[1,2,3,4,5].map(i => (
                  <div key={i} style={{
                    flex: 1, height: 4, borderRadius: 2,
                    background: i <= n.lvl ? n.color : "rgba(255,255,255,0.07)",
                  }} />
                ))}
              </div>
              <div style={{ marginTop: 8, color: "var(--muted)", fontSize: 9.5, letterSpacing: "0.1em" }}>PROFICIENCY · {n.lvl}/5</div>
            </div>
          );
        })()}

        {/* Legend — orbital only */}
        {viewMode === "orbital" && (
          <div className="mono" style={{
            position: "absolute", bottom: 18, right: 18, fontSize: 9,
            color: "var(--muted)", letterSpacing: "0.11em", textAlign: "right", lineHeight: 1.85, pointerEvents: "none",
          }}>
            <div>● INNER ORBIT &nbsp;·&nbsp; LVL 4–5 &nbsp;·&nbsp; DAILY DRIVER</div>
            <div>● MID ORBIT &nbsp;·&nbsp; LVL 3 &nbsp;·&nbsp; COMFORTABLE</div>
            <div>● OUTER ORBIT &nbsp;·&nbsp; LVL 1–2 &nbsp;·&nbsp; FAMILIAR</div>
          </div>
        )}
      </div>

      {/* Daily drivers chips */}
      <div style={{ marginTop: 28 }}>
        <div className="mono" style={{ fontSize: 9, color: "var(--muted)", letterSpacing: "0.18em", marginBottom: 10 }}>DAILY DRIVERS · LVL 4–5</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {Object.entries(D.skillMeta)
            .filter(([, m]) => m.lvl >= 4)
            .map(([name]) => (
              <span key={name} className="mono dev-chip">{name}</span>
            ))}
        </div>
      </div>

      <div style={{ marginTop: 32, fontSize: 13, color: "var(--muted)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
        <span className="mono">{D.education.school} · {D.education.degree} · <span style={{ color: "var(--accent)" }}>{D.education.gpa}</span></span>
        <span className="mono">{D.education.period}</span>
      </div>
    </section>
  );
}
