import { useState, useEffect } from 'react';
import { PixelMark } from './Logo.jsx';

const isEUVisitor = Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("Europe/");
const RESUME_ID   = "1N0boS_DsTKJhfFVKdaff1DoKma-nHsWc";
const RESUME_PREVIEW  = `https://drive.google.com/file/d/${RESUME_ID}/preview`;
const RESUME_LINK     = `https://drive.google.com/file/d/${RESUME_ID}/view?usp=sharing`;
const RESUME_DOWNLOAD = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;

function ResumeModal({ onClose }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1100,
        background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
      }}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "min(960px, 94vw)", height: "min(860px, 90vh)",
          background: "#0c0a08",
          border: "1px solid rgba(255,94,58,0.3)", borderRadius: 12,
          overflow: "hidden", display: "flex", flexDirection: "column",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 60px rgba(255,94,58,0.1)",
        }}>
        {/* Header bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 18px", borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "#15110f", flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 6 }}>
              <span onClick={onClose} className="mac-close" style={{ width: 11, height: 11, borderRadius: 99, background: "#ff5e57", cursor: "pointer" }} />
              <span style={{ width: 11, height: 11, borderRadius: 99, background: "#febc2e" }} />
              <span style={{ width: 11, height: 11, borderRadius: 99, background: "#28c840" }} />
            </div>
            <span className="mono" style={{ fontSize: 11, color: "#888", marginLeft: 8, letterSpacing: "0.08em" }}>
              ashish-soni-resume.pdf
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <a
              href={RESUME_DOWNLOAD}
              download
              className="mono"
              style={{
                fontSize: 10, color: "var(--muted-2)", textDecoration: "none", letterSpacing: "0.1em",
                display: "flex", alignItems: "center", gap: 5,
              }}>
              ↓ download
            </a>
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noreferrer"
              className="mono"
              style={{ fontSize: 10, color: "var(--accent)", textDecoration: "none", letterSpacing: "0.1em" }}>
              open in drive ↗
            </a>
          </div>
        </div>

        {/* iframe — Google Drive native viewer */}
        <div style={{ flex: 1, position: "relative" }}>
          {!loaded && (
            <div style={{
              position: "absolute", inset: 0, zIndex: 2,
              background: "#0c0a08",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: 20,
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{
                    width: 7, height: 7, borderRadius: 99,
                    background: "var(--accent)",
                    animation: `dotPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                  }} />
                ))}
              </div>
              <div className="mono" style={{ fontSize: 12, color: "var(--muted-2)", letterSpacing: "0.12em" }}>
                <span style={{ color: "var(--accent)" }}>{'> '}</span>
                bringing résumé to you<span className="cursor-blink" />
              </div>
            </div>
          )}
          <iframe
            src={RESUME_PREVIEW}
            title="Ashish Soni — Resume"
            onLoad={() => setLoaded(true)}
            style={{
              border: "none", width: "100%", height: "100%", display: "block",
              opacity: loaded ? 1 : 0, transition: "opacity .4s ease",
            }}
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}

export default function Hero({ openPalette }) {
  const [typed, setTyped]           = useState("");
  const [resumeOpen, setResumeOpen] = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const phrases = [
      "problems, end-to-end — not just tickets.",
      "from customer call to production release.",
      "interfaces that feel inevitable.",
      "with an AI-first instinct, by default.",
    ];
    let i = 0, j = 0, deleting = false, alive = true;
    const tick = () => {
      if (!alive) return;
      const cur = phrases[i];
      if (!deleting) {
        j++; setTyped(cur.slice(0, j));
        if (j >= cur.length) { deleting = true; setTimeout(tick, 1800); return; }
      } else {
        j--; setTyped(cur.slice(0, j));
        if (j <= 0) { deleting = false; i = (i + 1) % phrases.length; }
      }
      setTimeout(tick, deleting ? 28 : 55);
    };
    tick();
    return () => { alive = false; };
  }, []);

  return (
    <section className="hero-section" style={{
      position: "relative", minHeight: "100vh", boxSizing: "border-box", overflow: "hidden",
    }}>

      {/* Cinematic full-height photo panel */}
      <div className="hero-photo-panel">
        <img src="/ashish.jpeg" alt="Ashish Soni at his desk" loading="lazy" className="hero-photo-full" />
        <div className="hero-photo-fade-left" />
        <div className="hero-photo-fade-bottom" />
        <div className="hero-photo-fade-top" />
      </div>

      {/* Nav */}
      <div className="hero-nav" style={{
        position: "absolute", top: 28, left: 56, right: 56,
        display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10,
      }}>
        <PixelMark cell={2.5} gap={0.5} />
        <nav role="navigation" aria-label="Main navigation" className="hero-nav-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {[["work","#work"],["about","#about"],["résumé",RESUME_LINK],["contact","#contact"]].map(([l,h]) => (
            <a key={l} href={h} className="hover-line mono"
              {...(h.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              style={{
                fontSize: 11, color: "var(--muted-2)", textDecoration: "none",
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>{l}</a>
          ))}
          <button onClick={openPalette} aria-label="Open command palette" className="mono kbd-btn">⌘ K</button>
        </nav>
        {/* Mobile hamburger */}
        <button
          className="hero-nav-hamburger mono"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Open menu"
          style={{ border: "none" }}
        >
          ☰
        </button>
      </div>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(10,9,8,0.97)", backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column", alignItems: "flex-start",
          justifyContent: "center", padding: "0 32px",
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute", top: 24, right: 24,
              background: "none", border: "1px solid var(--line)", borderRadius: 8,
              color: "var(--muted-2)", fontSize: 18, padding: "8px 12px", cursor: "pointer",
            }}
          >✕</button>
          <nav role="navigation" aria-label="Mobile navigation" style={{ display: "flex", flexDirection: "column", gap: 0, width: "100%" }}>
            {[["work","#work"],["about","#about"],["résumé",RESUME_LINK],["contact","#contact"]].map(([l,h]) => (
              <a key={l} href={h}
                onClick={() => setMenuOpen(false)}
                {...(h.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="mono"
                style={{
                  fontSize: 40, color: "var(--fg)", textDecoration: "none",
                  letterSpacing: "-0.02em", fontWeight: 500,
                  padding: "16px 0", borderBottom: "1px solid var(--line)",
                  display: "block", transition: "color .2s",
                }}
                onTouchStart={e => e.currentTarget.style.color = "var(--accent)"}
                onTouchEnd={e => e.currentTarget.style.color = "var(--fg)"}
              >{l}</a>
            ))}
          </nav>
          <button
            onClick={() => { openPalette(); setMenuOpen(false); }}
            className="mono kbd-btn"
            style={{ marginTop: 32, fontSize: 13, padding: "10px 18px" }}
          >⌘ K — command palette</button>
        </div>
      )}

      {/* Content — left column */}
      <div className="hero-content">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
          <span className="mono" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 12px", borderRadius: 99,
            background: "rgba(255,94,58,0.1)", border: "1px solid var(--accent)",
            color: "var(--accent)", fontSize: 9.5, letterSpacing: "0.18em", fontWeight: 600,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--accent)", boxShadow: "0 0 12px var(--accent)" }} />
            PROBLEM SOLVER · END-TO-END
          </span>
        </div>

        <h1 className="hero-h1" style={{
          lineHeight: 0.94, letterSpacing: "-0.045em",
          fontWeight: 500, margin: 0, marginBottom: 36, color: "var(--fg)",
        }}>
          Ashish<br />
          <span className="serif" style={{ color: "var(--accent)", fontWeight: 400 }}>Soni</span>—a{" "}
          <span className="serif h1-strike" style={{ color: "var(--muted)", fontStyle: "italic", fontWeight: 400 }}>frontend&nbsp;dev,</span><br />
          <span className="serif" style={{ color: "var(--accent)", fontWeight: 400, fontStyle: "italic" }}>problem solver.</span>
        </h1>

        <p style={{ fontSize: 17, lineHeight: 1.5, maxWidth: 520, color: "var(--muted-2)", margin: 0, marginBottom: 28, fontWeight: 300 }}>
          I build{" "}
          <span className="mono" style={{ color: "var(--accent)", fontSize: 15 }}>{typed}</span>
          <span className="cursor-blink" />
        </p>

        <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Bangalore, India{isEUVisitor ? <>&nbsp;&nbsp;·&nbsp;&nbsp;open to EU relocation</> : null}&nbsp;&nbsp;·&nbsp;&nbsp;product builder
        </div>

        <button
          onClick={() => setResumeOpen(true)}
          className="hover-line mono"
          style={{
            background: "none", border: "none", padding: 0, cursor: "pointer",
            fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.1em",
            marginTop: 18, display: "inline-block", textAlign: "left",
          }}
        >
          résumé ↗
        </button>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue" style={{ position: "absolute", bottom: 36, left: 56, zIndex: 5 }}>
        <div className="mono scroll-cue" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em" }}>
          SCROLL — ENTER DEV MODE ↓
        </div>
      </div>

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </section>
  );
}
