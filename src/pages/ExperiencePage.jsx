import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useMemo } from 'react';
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

export default function ExperiencePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const D = PORTFOLIO;
  const idx = D.experience.findIndex(e => e.id === id);
  const exp = D.experience[idx];
  const prev = D.experience[idx - 1];
  const next = D.experience[idx + 1];

  const hash = useMemo(() =>
    idx >= 0 ? `${(0xa + idx).toString(16)}f${(idx * 13729 + 91243).toString(16).slice(-5)}` : "000000",
  [idx]);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  useEffect(() => {
    const els = document.querySelectorAll(".page-reveal");
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) en.target.classList.add("in"); });
    }, { threshold: 0.06 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [id]);

  if (!exp) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--bg)", gap: 24 }}>
        <div className="mono" style={{ fontSize: 12, color: "var(--accent)" }}>404 · not found</div>
        <Link to="/#career" className="mono hover-line" style={{ fontSize: 11, color: "var(--muted-2)", textDecoration: "none", letterSpacing: "0.1em" }}>← back to career</Link>
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
          ← career.log
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
            $ cat ./career/{exp.id}.log
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24, alignItems: "center" }}>
            <span className="mono" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "4px 12px", borderRadius: 99,
              background: "rgba(255,94,58,0.08)", border: "1px solid var(--accent-line)",
              fontSize: 10, color: "var(--accent)", letterSpacing: "0.14em",
            }}>commit {hash}</span>
            <span className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>{exp.period}</span>
            <span className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>·</span>
            <span className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>{exp.location}</span>
          </div>
          <h1 className="grotesk" style={{
            fontSize: "clamp(48px, 6vw, 88px)", margin: "0 0 12px",
            fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.0, color: "var(--fg)",
          }}>{exp.company}</h1>
          <div className="mono" style={{ fontSize: 13, color: "var(--accent)", letterSpacing: "0.04em", marginBottom: exp.context ? 24 : 0 }}>
            {exp.role}
          </div>
          {exp.context && (
            <p style={{ margin: 0, maxWidth: 580, color: "var(--muted-2)", lineHeight: 1.65, fontWeight: 300, fontSize: 15 }}>
              {exp.context}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "80px 56px" }}>

        {/* Bullets */}
        <div className="page-reveal" style={{ marginBottom: 72 }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 36 }}>
            —— WHAT I SHIPPED
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {exp.bullets.map((b, i) => (
              <li key={i} style={{
                display: "flex", gap: 18, paddingBottom: 28, marginBottom: 28,
                borderBottom: i < exp.bullets.length - 1 ? "1px solid var(--line)" : "none",
              }}>
                <span className="mono" style={{ color: "var(--accent)", fontSize: 18, flexShrink: 0, lineHeight: 1.4, marginTop: 1 }}>+</span>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: "var(--muted-2)", fontWeight: 300 }}>{b}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="page-reveal" style={{ marginBottom: 56 }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>
            —— TECH STACK
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {exp.stack.map(s => (
              <span key={s} className="mono dev-chip" style={{ fontSize: 12, padding: "7px 16px" }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Company link */}
        {exp.companyUrl && (
          <div className="page-reveal">
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="mono hover-line"
              style={{ fontSize: 12, color: "var(--accent)", textDecoration: "none", letterSpacing: "0.1em" }}>
              visit {exp.company.split("·")[0].trim().toLowerCase()} ↗
            </a>
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
          <Link to={`/career/${prev.id}`} className="mono hover-line" style={{ textDecoration: "none", color: "var(--muted-2)", fontSize: 11, letterSpacing: "0.08em" }}>
            ← {prev.company}
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/career/${next.id}`} className="mono hover-line" style={{ textDecoration: "none", color: "var(--muted-2)", fontSize: 11, letterSpacing: "0.08em" }}>
            {next.company} →
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
