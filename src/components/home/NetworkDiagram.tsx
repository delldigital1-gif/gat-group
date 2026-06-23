import Link from "next/link";

type BrandNode = { label: string; sub: string; href: string };
type SectorNode = { label: string; href: string };

const brandNodes: BrandNode[] = [
  { label: "Xylem", sub: "Eau & traitement", href: "/marques/xylem" },
  { label: "Sedis", sub: "Chaînes & levage", href: "/marques/sedis" },
  { label: "Castrol", sub: "Lubrifiants", href: "/marques/castrol" },
  { label: "Maxwill", sub: "Alu menuiserie", href: "/marques/maxwill" },
  { label: "LOUKIL", sub: "Énergie & agro", href: "/marques/loukil" },
];

const sectorNodes: SectorNode[] = [
  { label: "Énergie", href: "/secteurs#energie" },
  { label: "Eau & assainissement", href: "/secteurs#eau-assainissement" },
  { label: "BTP & électrification", href: "/secteurs#btp-electrification" },
  { label: "Télécommunications", href: "/secteurs#telecommunications" },
  { label: "Industrie lourde", href: "/secteurs#petrolier-industrie-lourde" },
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
    <svg
      viewBox="0 0 880 480"
      className="h-auto w-full"
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

      {/* Nœuds marques — cliquables vers leur page */}
      {brandNodes.map((n, i) => (
        <foreignObject key={n.label} x={LEFT_X} y={YS[i]} width={NODE_W} height={NODE_H}>
          <div style={{ width: "100%", height: "100%" }}>
            <Link
              href={n.href}
              className="group flex h-full w-full flex-col justify-center border border-steel-soft bg-paper px-3 py-1.5 no-underline transition-colors hover:border-copper hover:bg-mist-2"
            >
              <span className="font-display text-[14px] font-semibold leading-tight text-blueprint group-hover:text-copper">
                {n.label}
              </span>
              <span className="font-mono text-[10px] leading-tight text-steel">{n.sub}</span>
            </Link>
          </div>
        </foreignObject>
      ))}

      {/* Nœuds secteurs — cliquables vers leur page */}
      {sectorNodes.map((n, i) => (
        <foreignObject key={n.label} x={RIGHT_X} y={YS[i]} width={NODE_W} height={NODE_H}>
          <div style={{ width: "100%", height: "100%" }}>
            <Link
              href={n.href}
              className="group flex h-full w-full items-center border border-blueprint-2 bg-blueprint px-3 no-underline transition-colors hover:bg-blueprint-2"
            >
              <span className="font-mono text-[11.5px] leading-tight text-mist group-hover:text-white">
                {n.label}
              </span>
            </Link>
          </div>
        </foreignObject>
      ))}

      {/* Hub central GAT — lien vers Qui sommes-nous */}
      <foreignObject x={HUB_X - 56} y={HUB_Y - 56} width={112} height={112}>
        <div style={{ width: "100%", height: "100%" }}>
          <Link
            href="/qui-sommes-nous"
            className="flex h-full w-full flex-col items-center justify-center rounded-full border border-copper-2 bg-copper text-center no-underline transition-colors hover:bg-copper-2"
          >
            <span className="font-display text-xl font-bold text-white">GAT</span>
            <span className="mt-1 font-mono text-[9.5px] tracking-wide text-white">DEPUIS 2007</span>
          </Link>
        </div>
      </foreignObject>
    </svg>
  );
}
