import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const rippleLayer = useRef(null);

  useEffect(() => {
    const dot = dotRef.current, ring = ringRef.current, label = labelRef.current, layer = rippleLayer.current;
    if (!dot || !ring) return;
    if (matchMedia("(pointer: coarse)").matches) return;

    let mx = innerWidth / 2, my = innerHeight / 2;
    let dx = mx, dy = my, rx = mx, ry = my;
    let mode = "default";

    const setMode = (next, text = "") => {
      if (next === mode && label.textContent === text) return;
      mode = next;
      ring.dataset.mode = next;
      label.textContent = text;
    };

    const detectMode = (target) => {
      if (!target) return setMode("default");
      const link = target.closest?.("a[href]");
      if (link) {
        const href = link.getAttribute("href") || "";
        const txt = (link.textContent || "").toLowerCase();
        if (href.startsWith("mailto:")) return setMode("email", "EMAIL");
        if (href.includes("github") || txt.includes("github")) return setMode("github", "GITHUB");
        if (href.includes("linkedin") || txt.includes("linkedin")) return setMode("linkedin", "IN");
        if (txt.includes("resume") || txt.includes("résumé") || txt.includes("download")) return setMode("resume", "PDF");
        return setMode("link", "OPEN");
      }
      if (target.closest?.("button, [role=button], .clickable, .kbd-btn, .skill-node, .palette-item")) {
        return setMode("link", "CLICK");
      }
      const big = target.closest?.("h1, h2, .serif");
      if (big) {
        const fs = parseFloat(getComputedStyle(big).fontSize);
        if (fs > 56) return setMode("read", "READ");
      }
      if (target.matches?.("input, textarea, [contenteditable]")) return setMode("text", "");
      if (target.matches?.("p, li, span, pre, code, blockquote")) return setMode("text", "");
      setMode("default");
    };

    const onMove = (e) => { mx = e.clientX; my = e.clientY; detectMode(e.target); };
    const onOver = (e) => detectMode(e.target);
    const onLeave = () => { dot.style.opacity = 0; ring.style.opacity = 0; };
    const onEnter = () => { dot.style.opacity = 1; ring.style.opacity = 1; };
    const onDown = (e) => {
      const r = document.createElement("div");
      r.className = "cc-ripple";
      r.style.left = e.clientX + "px";
      r.style.top = e.clientY + "px";
      layer.appendChild(r);
      setTimeout(() => r.remove(), 700);
      ring.classList.add("cc-press");
    };
    const onUp = () => ring.classList.remove("cc-press");

    addEventListener("mousemove", onMove);
    addEventListener("mouseover", onOver);
    addEventListener("mousedown", onDown);
    addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    let raf;
    const tick = () => {
      dx += (mx - dx) * 0.55;
      dy += (my - dy) * 0.55;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMove);
      removeEventListener("mouseover", onOver);
      removeEventListener("mousedown", onDown);
      removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div ref={rippleLayer} className="cc-ripple-layer" />
      <div ref={ringRef} className="cc-ring" data-mode="default">
        <span ref={labelRef} className="cc-label mono" />
      </div>
      <div ref={dotRef} className="cc-dot" />
    </>
  );
}
