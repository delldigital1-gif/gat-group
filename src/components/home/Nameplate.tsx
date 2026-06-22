const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "50+", label: "Clients satisfaits" },
  { value: "40+", label: "Projets exécutés" },
  { value: "10+", label: "Personnel formé" },
];

export function Nameplate() {
  return (
    <div className="border border-steel-soft/40 bg-blueprint">
      <div className="flex items-center justify-between border-b border-steel-soft/25 px-5 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel-soft">
          Plaque signalétique
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel-soft">
          GAT GROUP SARL
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 py-6 ${i !== 0 ? "border-l border-steel-soft/25" : ""} ${
              i >= 2 ? "border-t border-steel-soft/25 sm:border-t-0" : ""
            }`}
          >
            <p className="font-display text-3xl font-semibold text-white">{s.value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-steel-soft">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
