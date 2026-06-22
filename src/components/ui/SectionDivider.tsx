export function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 py-2" role="presentation">
      {label && (
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel whitespace-nowrap">
          {label}
        </span>
      )}
      <div className="schematic-rule flex-1" />
    </div>
  );
}
