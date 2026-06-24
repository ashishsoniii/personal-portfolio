import { useState, useEffect } from 'react';
import { PixelMark } from './Logo.jsx';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const rand  = () => CHARS[Math.floor(Math.random() * CHARS.length)];

function scramble(target, progress) {
  const fixed = Math.floor(progress * target.length);
  return target.split('').map((ch, i) => (i < fixed ? ch : rand())).join('');
}

export default function LoadingScreen({ onDone }) {
  const [line1, setLine1] = useState('000000');
  const [line2, setLine2] = useState('0000');
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const L1 = 'Ashish', L2 = 'Soni';
    const HOLD_MS    = 280;
    const L1_DUR     = 820;
    const L2_OFFSET  = 360;
    const L2_DUR     = 680;
    const SETTLE_MS  = 420;
    const FADE_MS    = 480;

    let raf, t0 = null, done = false;

    const step = (ts) => {
      if (t0 === null) t0 = ts;
      const e = ts - t0 - HOLD_MS;

      if (e < 0) { raf = requestAnimationFrame(step); return; }

      const p1 = Math.min(e / L1_DUR, 1);
      const p2 = Math.min(Math.max((e - L2_OFFSET) / L2_DUR, 0), 1);

      setLine1(scramble(L1, p1));
      setLine2(scramble(L2, p2));

      if (p1 < 1 || p2 < 1) {
        raf = requestAnimationFrame(step);
      } else if (!done) {
        done = true;
        setLine1(L1);
        setLine2(L2);
        setTimeout(() => {
          setFading(true);
          setTimeout(onDone, FADE_MS);
        }, SETTLE_MS);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'var(--bg, #0a0908)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: fading ? 0 : 1,
      transition: 'opacity 480ms cubic-bezier(0.4,0,0.2,1)',
      pointerEvents: fading ? 'none' : 'all',
    }}>
      <PixelMark cell={10} gap={2.5} style={{ marginBottom: 36, opacity: 0.9 }} />

      <div style={{
        fontSize: 'clamp(52px, 11vw, 100px)',
        lineHeight: 0.92,
        letterSpacing: '-0.045em',
        fontWeight: 500,
        userSelect: 'none',
      }}>
        <div style={{ color: 'var(--fg, #f0ece6)' }}>{line1}</div>
        <div className="serif" style={{
          color: 'var(--accent, #ff5e3a)',
          fontWeight: 400,
          fontStyle: 'italic',
        }}>{line2}</div>
      </div>

      {/* subtle bottom label */}
      <div className="mono" style={{
        position: 'absolute', bottom: 32,
        fontSize: 10, letterSpacing: '0.2em',
        color: 'var(--muted, #666)', textTransform: 'uppercase',
      }}>
        portfolio · {new Date().getFullYear()}
      </div>
    </div>
  );
}
