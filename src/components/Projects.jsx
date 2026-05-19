import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO } from '../data.js';

function DevCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ctx = c.getContext("2d");
    let raf;
    const resize = () => { c.width = c.offsetWidth * dpr; c.height = c.offsetHeight * dpr; };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(c);
    const N = 70;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - .5) * .0004, vy: (Math.random() - .5) * .0004,
    }));
    let mx = .5, my = .5;
    const onMove = (e) => { const r = c.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width; my = (e.clientY - r.top) / r.height; };
    window.addEventListener("mousemove", onMove);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const draw = () => {
      const W = c.width, H = c.height;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(255,94,58,0.04)"; ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 60 * dpr) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 60 * dpr) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        const dx = mx - p.x, dy = my - p.y;
        p.vx += dx * .000003; p.vy += dy * .000003;
      });
      pts.forEach((p, i) => {
        ctx.fillStyle = "rgba(255,94,58,0.55)";
        ctx.beginPath(); ctx.arc(p.x * W, p.y * H, 1.4 * dpr, 0, Math.PI * 2); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = (p.x - q.x) * W, dy = (p.y - q.y) * H, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130 * dpr) {
            ctx.strokeStyle = `rgba(255,94,58,${(1 - d / (130 * dpr)) * 0.18})`;
            ctx.beginPath(); ctx.moveTo(p.x * W, p.y * H); ctx.lineTo(q.x * W, q.y * H); ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); window.removeEventListener("mousemove", onMove); };
  }, []);
  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: .9 }} />;
}

export default function Projects() {
  const D = PORTFOLIO;
  const [hover, setHover] = useState(null);

  return (
    <section id="work" style={{
      padding: "100px 56px 120px", position: "relative",
      borderTop: "1px solid var(--accent-line)", background: "var(--dev-bg)",
    }}>
      <DevCanvas />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="mono" style={{ fontSize: 12, color: "var(--accent)", marginBottom: 6 }}>$ ls -la ./projects/</div>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          marginBottom: 56, paddingBottom: 18, borderBottom: "1px solid var(--accent-line)",
          flexWrap: "wrap", gap: 8,
        }}>
          <h2 className="grotesk projects-section-heading" style={{ fontSize: "clamp(36px, 8vw, 96px)", margin: 0, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--fg)" }}>./projects</h2>
          <span className="mono projects-section-meta" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.12em" }}>—— 5 ENTRIES · SORTED BY IMPACT</span>
        </div>

        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
          {D.projects.map((p, i) => (
            <div key={p.id}
              onMouseEnter={() => setHover(p.id)}
              onMouseLeave={() => setHover(null)}
              className="dev-card project-card"
              style={{
                gridColumn: i === 0 ? "span 2" : "span 1",
                padding: i === 0 ? 36 : 26,
                borderRadius: 10, cursor: "pointer",
                transition: "all .25s",
                transform: hover === p.id ? "translateY(-3px)" : "none",
              }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em", textTransform: "uppercase" }}>0{i + 1} · {p.kind}</span>
                <span className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>{p.year}</span>
              </div>
              <h3 className={`grotesk${i === 0 ? " project-title-featured" : ""}`} style={{
                fontSize: i === 0 ? 52 : 28, margin: 0, marginBottom: 12,
                fontWeight: 500, letterSpacing: "-0.02em", color: "var(--fg)", lineHeight: 1.05,
              }}>{p.title}</h3>
              <p style={{ fontSize: i === 0 ? 17 : 13.5, color: "var(--muted-2)", lineHeight: 1.6, margin: 0, marginBottom: 18, fontWeight: 300, maxWidth: 720 }}>{p.detail}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tech.map(t => <span key={t} className="mono dev-chip">{t}</span>)}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16, alignItems: "center" }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer"
                     className="mono"
                     style={{ fontSize: 10, color: "var(--accent)", textDecoration: "none",
                       border: "1px solid var(--accent-line)", padding: "4px 12px", borderRadius: 99,
                       letterSpacing: "0.1em", transition: "border-color .2s" }}
                     onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
                     onMouseLeave={e => e.currentTarget.style.borderColor = "var(--accent-line)"}>
                    view code ↗
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                     className="mono"
                     style={{ fontSize: 10, color: "var(--muted-2)", textDecoration: "none",
                       border: "1px solid var(--line)", padding: "4px 12px", borderRadius: 99,
                       letterSpacing: "0.1em", transition: "border-color .2s" }}
                     onMouseEnter={e => e.currentTarget.style.borderColor = "var(--muted-2)"}
                     onMouseLeave={e => e.currentTarget.style.borderColor = "var(--line)"}>
                    live demo ↗
                  </a>
                )}
                <Link
                  to={`/work/${p.id}`}
                  className="mono hover-line"
                  style={{ fontSize: 10, color: "var(--muted)", textDecoration: "none", letterSpacing: "0.08em", marginLeft: "auto" }}>
                  case study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
