import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { PORTFOLIO } from '../data.js';
import { PixelMark } from '../components/Logo.jsx';

function DevCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ctx = c.getContext("2d");
    let raf;
    const resize = () => { c.width = c.offsetWidth * dpr; c.height = c.offsetHeight * dpr; };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(c);
    const N = 40;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - .5) * .0003, vy: (Math.random() - .5) * .0003,
    }));
    let mx = .5, my = .5;
    const onMove = (e) => { const r = c.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width; my = (e.clientY - r.top) / r.height; };
    window.addEventListener("mousemove", onMove);
    const draw = () => {
      const W = c.width, H = c.height;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(255,94,58,0.03)"; ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 80 * dpr) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 80 * dpr) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        p.vx += (mx - p.x) * .000002; p.vy += (my - p.y) * .000002;
      });
      pts.forEach((p, i) => {
        ctx.fillStyle = "rgba(255,94,58,0.4)";
        ctx.beginPath(); ctx.arc(p.x * W, p.y * H, 1.2 * dpr, 0, Math.PI * 2); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = (p.x - q.x) * W, dy = (p.y - q.y) * H, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100 * dpr) {
            ctx.strokeStyle = `rgba(255,94,58,${(1 - d / (100 * dpr)) * 0.12})`;
            ctx.beginPath(); ctx.moveTo(p.x * W, p.y * H); ctx.lineTo(q.x * W, q.y * H); ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); window.removeEventListener("mousemove", onMove); };
  }, []);
  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.7 }} />;
}

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const D = PORTFOLIO;
  const idx = D.projects.findIndex(p => p.id === id);
  const project = D.projects[idx];
  const prev = D.projects[idx - 1];
  const next = D.projects[idx + 1];

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  useEffect(() => {
    const els = document.querySelectorAll(".page-reveal");
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) en.target.classList.add("in"); });
    }, { threshold: 0.06 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [id]);

  if (!project) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--bg)", gap: 24 }}>
        <div className="mono" style={{ fontSize: 12, color: "var(--accent)" }}>404 · not found</div>
        <Link to="/#work" className="mono hover-line" style={{ fontSize: 11, color: "var(--muted-2)", textDecoration: "none", letterSpacing: "0.1em" }}>← back to projects</Link>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--fg)" }}>

      {/* Fixed nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "18px 56px", display: "flex", justifyContent: "space-between", alignItems: "center",
        backdropFilter: "blur(20px)", borderBottom: "1px solid var(--line)",
        background: "rgba(10,9,8,0.82)",
      }}>
        <button
          onClick={() => navigate(-1)}
          className="mono hover-line"
          style={{ background: "none", border: "none", padding: 0, fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          ← projects
        </button>
        <PixelMark cell={2} gap={0.4} />
        <Link to="/" className="mono" style={{ fontSize: 11, color: "var(--muted)", textDecoration: "none", letterSpacing: "0.08em" }}>portfolio ↗</Link>
      </nav>

      {/* Hero */}
      <section style={{
        paddingTop: 120, paddingBottom: 80, paddingLeft: 56, paddingRight: 56,
        position: "relative", overflow: "hidden", borderBottom: "1px solid var(--accent-line)",
        minHeight: 420, display: "flex", alignItems: "flex-end",
      }}>
        <DevCanvas />
        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="mono" style={{ fontSize: 12, color: "var(--accent)", marginBottom: 20, letterSpacing: "0.08em" }}>
            $ cat ./projects/{project.id}.md
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24, alignItems: "center" }}>
            <span className="mono" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "4px 12px", borderRadius: 99,
              background: "rgba(255,94,58,0.08)", border: "1px solid var(--accent-line)",
              fontSize: 10, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase",
            }}>{project.kind}</span>
            <span className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>{project.year}</span>
          </div>
          <h1 className="grotesk" style={{
            fontSize: "clamp(42px, 5.5vw, 84px)", margin: "0 0 16px",
            fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.0, color: "var(--fg)",
          }}>{project.title}</h1>
          <p style={{ margin: 0, maxWidth: 560, color: "var(--muted-2)", lineHeight: 1.6, fontWeight: 300, fontSize: 17 }}>
            {project.summary}
          </p>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "80px 56px" }}>

        {/* Overview */}
        <div className="page-reveal" style={{ marginBottom: 72 }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 28 }}>
            —— OVERVIEW
          </div>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.8, color: "var(--muted-2)", fontWeight: 300, maxWidth: 720 }}>
            {project.detail}
          </p>
        </div>

        {/* Tech stack */}
        <div className="page-reveal" style={{ marginBottom: 72 }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>
            —— TECH STACK
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {project.tech.map(t => (
              <span key={t} className="mono dev-chip" style={{ fontSize: 12, padding: "7px 16px" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.github || project.live) && (
          <div className="page-reveal">
            <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>
              —— LINKS
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mono"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "12px 24px", borderRadius: 99,
                    border: "1px solid var(--accent)", color: "var(--accent)",
                    textDecoration: "none", fontSize: 12, letterSpacing: "0.1em",
                    transition: "all .2s", background: "rgba(255,94,58,0.06)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,94,58,0.14)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,94,58,0.06)"; }}>
                  view code ↗
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mono"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "12px 24px", borderRadius: 99,
                    border: "1px solid var(--line)", color: "var(--muted-2)",
                    textDecoration: "none", fontSize: 12, letterSpacing: "0.1em",
                    transition: "all .2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--muted-2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; }}>
                  live demo ↗
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Prev / Next */}
      <div style={{
        padding: "40px 56px 72px",
        borderTop: "1px solid var(--line)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        maxWidth: 860, margin: "0 auto",
      }}>
        {prev ? (
          <Link to={`/work/${prev.id}`} className="mono hover-line" style={{ textDecoration: "none", color: "var(--muted-2)", fontSize: 11, letterSpacing: "0.08em" }}>
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/work/${next.id}`} className="mono hover-line" style={{ textDecoration: "none", color: "var(--muted-2)", fontSize: 11, letterSpacing: "0.08em" }}>
            {next.title} →
          </Link>
        ) : <span />}
      </div>

      {/* Footer */}
      <div className="mono" style={{
        textAlign: "center", padding: "24px 56px 40px",
        fontSize: 10, color: "var(--muted)", letterSpacing: "0.14em",
        borderTop: "1px solid var(--line)",
      }}>
        EXIT 0 · <Link to="/" style={{ color: "var(--muted)", textDecoration: "none" }}>← BACK TO PORTFOLIO</Link> · © 2026 ASHISH SONI
      </div>
    </div>
  );
}
