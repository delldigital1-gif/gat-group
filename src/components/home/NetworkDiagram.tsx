type Node = { label: string; sub?: string };

const brandNodes: Node[] = [
  { label: "Xylem", sub: "Eau & traitement" },
  { label: "Sedis", sub: "Chaînes & levage" },
  { label: "Castrol", sub: "Lubrifiants" },
  { label: "Maxwill", sub: "Alu menuiserie" },
  { label: "LOUKIL", sub: "Énergie & agro" },
];

const sectorNodes: Node[] = [
  { label: "Énergie" },
  { label: "Eau & assainissement" },
  { label: "BTP & électrification" },
  { label: "Télécommunications" },
  { label: "Industrie lourde" },
];

const LEFT_X = 118;
const RIGHT_X = 642;
const HUB_X = 380;
const HUB_Y = 240;
const NODE_W = 168;
const NODE_H = 46;
const YS = [38, 132, 226, 320, 414];

export function NetworkDiagram() {
  return (
    <div className="thin-scroll overflow-x-auto">
      <svg
        viewBox="0 0 880 480"
        width="880"
        height="480"
        className="min-w-[760px] max-w-full"
        role="img"
        aria-label="Schéma : GAT relie les marques mondiales partenaires aux secteurs de l'industrie africaine"
      >
        <title>GAT — nœud de distribution entre marques mondiales et secteurs africains</title>

        {/* Connexions marques -> hub */}
        {brandNodes.map((n, i) => {
          const y = YS[i] + NODE_H / 2;
          return (
            <g key={`b-line-${n.label}`}>
              <path
                d={`M ${LEFT_X + NODE_W} ${y} C ${LEFT_X + NODE_W + 90} ${y}, ${HUB_X - 90} ${HUB_Y}, ${HUB_X} ${HUB_Y}`}
                fill="none"
                stroke="var(--color-steel-soft)"
                strokeWidth="1.2"
                strokeDasharray="2 6"
                opacity="0.85"
              />
              <circle cx={LEFT_X + NODE_W} cy={y} r="3.5" fill="var(--color-copper)" />
            </g>
          );
        })}

        {/* Connexions hub -> secteurs */}
        {sectorNodes.map((n, i) => {
          const y = YS[i] + NODE_H / 2;
          return (
            <g key={`s-line-${n.label}`}>
              <path
                d={`M ${HUB_X} ${HUB_Y} C ${HUB_X + 90} ${HUB_Y}, ${RIGHT_X - 90} ${y}, ${RIGHT_X} ${y}`}
                fill="none"
                stroke="var(--color-steel-soft)"
                strokeWidth="1.2"
                strokeDasharray="2 6"
                opacity="0.85"
              />
              <circle cx={RIGHT_X} cy={y} r="3.5" fill="var(--color-copper)" />
            </g>
          );
        })}

        {/* Nœuds marques */}
        {brandNodes.map((n, i) => (
          <g key={n.label}>
            <rect
              x={LEFT_X}
              y={YS[i]}
              width={NODE_W}
              height={NODE_H}
              fill="var(--color-paper)"
              stroke="var(--color-steel-soft)"
              strokeWidth="1"
            />
            <text x={LEFT_X + 12} y={YS[i] + 19} className="font-display" fontSize="14" fontWeight="600" fill="var(--color-blueprint)">
              {n.label}
            </text>
            <text x={LEFT_X + 12} y={YS[i] + 34} className="font-mono" fontSize="10" fill="var(--color-steel)">
              {n.sub}
            </text>
          </g>
        ))}

        {/* Nœuds secteurs */}
        {sectorNodes.map((n, i) => (
          <g key={n.label}>
            <rect
              x={RIGHT_X}
              y={YS[i]}
              width={NODE_W}
              height={NODE_H}
              fill="var(--color-blueprint)"
              stroke="var(--color-blueprint-2)"
              strokeWidth="1"
            />
            <text
              x={RIGHT_X + 12}
              y={YS[i] + NODE_H / 2 + 4}
              className="font-mono"
              fontSize="11.5"
              fill="var(--color-mist)"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* Hub central GAT */}
        <circle cx={HUB_X} cy={HUB_Y} r="56" fill="var(--color-copper)" />
        <circle cx={HUB_X} cy={HUB_Y} r="56" fill="none" stroke="var(--color-copper-2)" strokeWidth="1.5" />
        <text
          x={HUB_X}
          y={HUB_Y - 2}
          textAnchor="middle"
          className="font-display"
          fontSize="20"
          fontWeight="700"
          fill="white"
        >
          GAT
        </text>
        <text
          x={HUB_X}
          y={HUB_Y + 16}
          textAnchor="middle"
          className="font-mono"
          fontSize="9.5"
          letterSpacing="0.5"
          fill="white"
        >
          DEPUIS 2007
        </text>
      </svg>
    </div>
  );
}
