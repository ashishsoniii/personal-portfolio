import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen.jsx';
import Cursor from './components/Cursor.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Palette from './components/Palette.jsx';
import { HiddenTerminal, KonamiToast } from './components/Terminal.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

function MainPortfolio({ openPalette }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [konami, setKonami] = useState(false);

  useEffect(() => {
    const seq = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    let buf = [];
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault(); setPaletteOpen(p => !p); return;
      }
      if (e.key === "Escape") { setPaletteOpen(false); setTerminalOpen(false); return; }
      if (e.key === "`" || e.key === "~") { setTerminalOpen(t => !t); return; }
      buf.push(e.key); buf = buf.slice(-seq.length);
      if (buf.join(",").toLowerCase() === seq.join(",").toLowerCase()) {
        setKonami(true);
        document.documentElement.style.setProperty("--accent", "#39ff14");
        setTimeout(() => {
          setKonami(false);
          document.documentElement.style.setProperty("--accent", "#ff5e3a");
        }, 4500);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) en.target.classList.add("in"); });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a href="#about" className="skip-link mono">Skip to content</a>
      <Hero openPalette={() => setPaletteOpen(true)} />
      <div className="reveal"><About /></div>
      <div className="reveal"><Experience /></div>
      <div className="reveal"><Projects /></div>
      <div className="reveal"><Skills /></div>
      <div className="reveal"><Contact /></div>
      <Palette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        toggleTheme={() => {
          document.documentElement.classList.toggle("light");
          localStorage.setItem("theme", document.documentElement.classList.contains("light") ? "light" : "dark");
        }}
        openTerminal={() => setTerminalOpen(true)}
      />
      <HiddenTerminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <KonamiToast visible={konami} />
      <div className="mono" style={{
        position: "fixed", bottom: 18, right: 22, fontSize: 10,
        color: "var(--muted)", letterSpacing: "0.12em", zIndex: 50, pointerEvents: "none",
      }}>
        ⌘K · ` TERMINAL · ↑↑↓↓←→←→BA
      </div>
    </>
  );
}

function AppRoutes() {
  const [loaded, setLoaded] = useState(false);
  const { pathname } = useLocation();
  const showLoader = !loaded && pathname === '/';

  return (
    <>
      {showLoader && <LoadingScreen onDone={() => setLoaded(true)} />}
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/work/:id" element={<ProjectPage />} />
        <Route path="/career/:id" element={<ExperiencePage />} />
      </Routes>
    </>
  );
}

export default function App() {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") document.documentElement.classList.add("light");
  }, []);

  return (
    <BrowserRouter>
      <Cursor />
      <AppRoutes />
    </BrowserRouter>
  );
}
