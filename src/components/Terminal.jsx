import { useState, useEffect, useRef } from 'react';
import { PORTFOLIO } from '../data.js';

export function HiddenTerminal({ open, onClose }) {
  const D = PORTFOLIO;
  const [history, setHistory] = useState([
    { type: "out", text: "Welcome to ashish.sh — type `help` for commands." },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 50); }, [open]);
  useEffect(() => { if (wrapRef.current) wrapRef.current.scrollTop = wrapRef.current.scrollHeight; }, [history]);

  const run = (cmd) => {
    const c = cmd.trim();
    let out = [];
    if (c === "help")      out = ["available commands:", "  whoami      — about me", "  ls          — list sections", "  projects    — list projects", "  contact     — how to reach me", "  konami      — hint", "  clear       — clear terminal", "  exit        — close"];
    else if (c === "whoami")   out = [`${D.name} · ${D.role} · ${D.location}`, D.oneliner];
    else if (c === "ls")       out = ["./hero  ./about  ./projects  ./career  ./skills  ./contact"];
    else if (c === "projects") out = D.projects.map((p, i) => `  0${i + 1}. ${p.title} (${p.year})`);
    else if (c === "contact")  out = [`email:    ${D.email}`, `github:   ${D.links.github}`, `linkedin: ${D.links.linkedin}`];
    else if (c === "konami")   out = ["try: ↑ ↑ ↓ ↓ ← → ← → B A"];
    else if (c === "clear")    { setHistory([]); return; }
    else if (c === "exit")     { onClose(); return; }
    else if (c === "")         out = [""];
    else                       out = [`zsh: command not found: ${c}`, "type `help` for commands"];
    setHistory(h => [...h, { type: "in", text: c }, ...out.map(t => ({ type: "out", text: t }))]);
  };

  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)",
      backdropFilter: "blur(8px)", zIndex: 999,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div onClick={e => e.stopPropagation()} className="mono" style={{
        width: 720, maxWidth: "92vw", height: 480, background: "#0c0a08",
        border: "1px solid rgba(255,94,58,0.3)", borderRadius: 10, overflow: "hidden",
        boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 60px rgba(255,94,58,0.15)",
        display: "flex", flexDirection: "column", fontSize: 13,
      }}>
        <div style={{
          padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex", gap: 8, alignItems: "center", background: "#15110f",
        }}>
          <span onClick={onClose} className="mac-close" style={{ width: 11, height: 11, borderRadius: 99, background: "#ff5e57", cursor: "pointer" }} />
          <span style={{ width: 11, height: 11, borderRadius: 99, background: "#febc2e" }} />
          <span style={{ width: 11, height: 11, borderRadius: 99, background: "#28c840" }} />
          <span style={{ marginLeft: 14, fontSize: 11, color: "#888" }}>ashish@portfolio: ~ — zsh</span>
        </div>
        <div ref={wrapRef} style={{ flex: 1, padding: "14px 18px", overflow: "auto", color: "#d6d0c4" }}>
          {history.map((h, i) => (
            <div key={i} style={{ marginBottom: 2, lineHeight: 1.6 }}>
              {h.type === "in"
                ? <div><span style={{ color: "#ff5e3a" }}>➜ ~ </span>{h.text}</div>
                : <div style={{ color: "#9d9484", whiteSpace: "pre" }}>{h.text}</div>
              }
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", marginTop: 4 }}>
            <span style={{ color: "#ff5e3a", marginRight: 6 }}>➜ ~ </span>
            <input
              ref={inputRef} value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") { run(input); setInput(""); } }}
              style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#eaeaea", fontFamily: "inherit", fontSize: "inherit" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function KonamiToast({ visible }) {
  if (!visible) return null;
  return (
    <div className="mono" style={{
      position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
      background: "#ff5e3a", color: "#fff", padding: "12px 22px", borderRadius: 99,
      fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", zIndex: 999,
      boxShadow: "0 12px 40px rgba(255,94,58,0.4)",
    }}>
      ★ Konami unlocked — you found me. Email me, you legend.
    </div>
  );
}
