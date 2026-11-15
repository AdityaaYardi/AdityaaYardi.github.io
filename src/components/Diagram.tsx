import type { Diagram as DiagramData } from "@/data/projects";

/**
 * Diagram: columns of nodes joined by hairlines, drawn from data.
 * Labels are live text. On a narrow container the flow turns vertical.
 * The accent pulse along the lines only runs while the surrounding card is
 * hovered or focused (see globals.css), so nothing loops unattended.
 */

const centre = (index: number, count: number) => ((index + 0.5) / count) * 100;

function pairs(from: number, to: number): [number, number][] {
  if (from === to) return Array.from({ length: from }, (_, i) => [i, i]);
  const out: [number, number][] = [];
  for (let i = 0; i < from; i++) for (let j = 0; j < to; j++) out.push([i, j]);
  return out;
}

function Wire({ from, to }: { from: number; to: number }) {
  const links = pairs(from, to);
  return (
    <>
      <svg className="dg__wire dg__wire--h" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {links.map(([i, j]) => {
          const a = centre(i, from);
          const b = centre(j, to);
          const d = `M0,${a} C50,${a} 50,${b} 100,${b}`;
          return (
            <g key={`${i}-${j}`}>
              <path d={d} />
              <path d={d} className="dg__pulse" pathLength={100} />
            </g>
          );
        })}
      </svg>
      <svg className="dg__wire dg__wire--v" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {links.map(([i, j]) => {
          const a = centre(i, from);
          const b = centre(j, to);
          const d = `M${a},0 C${a},50 ${b},50 ${b},100`;
          return (
            <g key={`${i}-${j}`}>
              <path d={d} />
              <path d={d} className="dg__pulse" pathLength={100} />
            </g>
          );
        })}
      </svg>
    </>
  );
}

export function Diagram({ data }: { data: DiagramData }) {
  return (
    <div className="dg" role="img" aria-label={data.label}>
      <div className="dg__flow" aria-hidden="true">
        {data.columns.map((column, index) => (
          <div key={index} className="contents">
            {index > 0 ? <Wire from={data.columns[index - 1].length} to={column.length} /> : null}
            <div className="dg__col">
              {column.map((node) => (
                <div key={node.label} className={`dg__node ${node.main ? "dg__node--main" : ""}`}>
                  {node.label}
                  {node.sub ? <small>{node.sub}</small> : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Coil figure: a schematic of a non-planar winding path, generated from a
 * saddle-shaped parametric curve. It is a drawing of the idea, not project data.
 */
function coilPoints(scale: number, steps = 96) {
  const points: [number, number][] = [];
  for (let k = 0; k < steps; k++) {
    const t = (k / steps) * Math.PI * 2;
    const x = 1.6 * Math.cos(t) * scale;
    const y = 1.0 * Math.sin(t) * scale;
    const z = 0.3 * Math.cos(2 * t) * scale;
    // Oblique view: turned 30 degrees, seen from 35 degrees above.
    const sx = 220 + 108 * (0.87 * x - 0.5 * y);
    const sy = 104 + 108 * 0.57 * (0.5 * x + 0.87 * y) - 108 * 0.82 * z;
    points.push([Math.round(sx * 10) / 10, Math.round(sy * 10) / 10]);
  }
  return points;
}

const toPath = (points: [number, number][]) =>
  `M${points.map(([x, y]) => `${x},${y}`).join(" L")} Z`;

export function CoilFigure() {
  const main = coilPoints(1);
  const mainPath = toPath(main);
  const turns = [0.76, 0.84, 0.92].map((s) => toPath(coilPoints(s)));
  const waypoints = main.filter((_, index) => index % 8 === 0);
  return (
    <svg viewBox="0 0 440 208" className="h-auto w-full" aria-hidden="true">
      {turns.map((d) => (
        <path key={d.slice(0, 24)} d={d} className="coil__turn" />
      ))}
      <path d={mainPath} className="coil__path" />
      {waypoints.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3" className="coil__way" />
      ))}
      <circle r="6" className="coil__tool" style={{ offsetPath: `path("${mainPath}")` }} />
    </svg>
  );
}
