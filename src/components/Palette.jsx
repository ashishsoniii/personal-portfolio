import { useState, useEffect } from 'react';
import { PORTFOLIO } from '../data.js';

export default function Palette({ open, onClose, toggleTheme, openTerminal }) {
  const D = PORTFOLIO;
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);

  const items = [
    { k: "→", l: "Go to Work",          a: () => { document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); onClose(); } },
    { k: "→", l: "Go to About",         a: () => { document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); onClose(); } },
    { k: "→", l: "Go to Career",        a: () => { document.getElementById("career")?.scrollIntoView({ behavior: "smooth" }); onClose(); } },
    { k: "→", l: "Go to Skills",        a: () => { document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }); onClose(); } },
    { k: "→", l: "Go to Contact",       a: () => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); onClose(); } },
    { k: "↓", l: "Download résumé",     a: () => { window.open("https://drive.google.com/file/d/1N0boS_DsTKJhfFVKdaff1DoKma-nHsWc/view?usp=sharing", "_blank"); onClose(); } },
    { k: "✉", l: `Email — ${D.email}`,  a: () => { window.location.href = `mailto:${D.email}`; onClose(); } },
    { k: "G", l: "Open GitHub",         a: () => { window.open(D.links.github, "_blank"); onClose(); } },
    { k: "L", l: "Open LinkedIn",       a: () => { window.open(D.links.linkedin, "_blank"); onClose(); } },
    { k: "☉", l: "Toggle theme",        a: () => { toggleTheme?.(); onClose(); } },
    { k: "▲", l: "Open hidden terminal",a: () => { openTerminal?.(); onClose(); } },
  ];

  const filtered = items.filter(it => it.l.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => setSel(0), [q]);

  const onKey = (e) => {
    if (e.key === "ArrowDown") { setSel(s => Math.min(filtered.length - 1, s + 1)); e.preventDefault(); }
    if (e.key === "ArrowUp")   { setSel(s => Math.max(0, s - 1)); e.preventDefault(); }
    if (e.key === "Enter")     { filtered[sel]?.a(); }
  };

  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(10px)", zIndex: 1000,
      display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "12vh",
    }}>
      <div onClick={e => e.stopPropagation()} className="mono" style={{
        width: 560, maxWidth: "92vw", background: "#161310",
        border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12,
        padding: 14, fontSize: 13, boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
      }}>
        <input
          autoFocus value={q} onChange={e => setQ(e.target.value)} onKeyDown={onKey}
          placeholder="Type a command or jump to a section…"
          style={{
            width: "100%", background: "transparent", border: "none", outline: "none",
            color: "#eaeaea", fontSize: 14, padding: "8px 6px",
            fontFamily: "inherit", boxSizing: "border-box",
          }}
        />
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "10px -14px 6px" }} />
        {filtered.length === 0 && <div style={{ padding: "14px 8px", color: "#888" }}>no results · try "github"</div>}
        {filtered.map((it, i) => (
          <div key={i} onClick={it.a} onMouseEnter={() => setSel(i)} style={{
            padding: "10px 10px", borderRadius: 7,
            display: "flex", gap: 14, cursor: "pointer",
            background: sel === i ? "rgba(255,94,58,0.12)" : "transparent",
            color: sel === i ? "#ff5e3a" : "#bbb",
          }}>
            <span style={{ width: 16, opacity: 0.7 }}>{it.k}</span>{it.l}
          </div>
        ))}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)", margin: "8px -14px 0",
          padding: "10px 14px 0", display: "flex", justifyContent: "space-between",
          color: "#666", fontSize: 10, letterSpacing: "0.08em",
        }}>
          <span>↑↓ NAVIGATE · ↵ SELECT · ESC CLOSE</span>
          <span>↑↑↓↓←→←→BA = ?</span>
        </div>
      </div>
    </div>
  );
}
