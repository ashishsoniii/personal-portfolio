// Pixel AS monogram — 5×7 bitmap grid, spec from design system
// A in --fg, S in --fg, accent underbar under S only (split-tone variant)

const A_CELLS = [
  [1,0],[2,0],[3,0],
  [0,1],[4,1],
  [0,2],[4,2],
  [0,3],[1,3],[2,3],[3,3],[4,3],
  [0,4],[4,4],
  [0,5],[4,5],
  [0,6],[4,6],
];

const S_CELLS = [
  [7,0],[8,0],[9,0],[10,0],
  [6,1],
  [6,2],
  [7,3],[8,3],[9,3],
  [10,4],
  [10,5],
  [6,6],[7,6],[8,6],[9,6],
];

// Underbar — accent row beneath S only (col 6–10, row 7)
const U_CELLS = [[6,7],[7,7],[8,7],[9,7],[10,7]];

// cell × gap: cell is pixel size, gap is space between cells
// 11 cols (5 A + 1 gap + 5 S) × 8 rows (7 letterform + 1 underbar)
export function PixelMark({ cell = 8, gap = 2, style, className }) {
  const C = cell, G = gap;
  const step = C + G;
  const W = 11 * C + 10 * G;
  const H = 8 * C + 7 * G;
  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0, ...style }}
      className={className}
      aria-hidden="true"
    >
      {A_CELLS.map(([c, r]) => (
        <rect key={`a${c}${r}`} x={c * step} y={r * step} width={C} height={C} fill="var(--fg)" />
      ))}
      {S_CELLS.map(([c, r]) => (
        <rect key={`s${c}${r}`} x={c * step} y={r * step} width={C} height={C} fill="var(--fg)" />
      ))}
      {U_CELLS.map(([c, r]) => (
        <rect key={`u${c}`} x={c * step} y={r * step} width={C} height={C} fill="var(--accent)" />
      ))}
    </svg>
  );
}

// Horizontal lockup: pixel mark + "ASHISH · SONI" wordmark
// Used in navbars and email signatures
export function LogoLockup({ cell = 3, gap = 0.6, style }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, ...style }}>
      <PixelMark cell={cell} gap={gap} />
      <span
        className="mono"
        style={{
          fontSize: 11,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--muted-2)",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
      >
        ASHISH<span style={{ color: "var(--accent)" }}> · </span>SONI
      </span>
    </div>
  );
}
