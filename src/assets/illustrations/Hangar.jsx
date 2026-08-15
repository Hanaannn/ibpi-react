export default function Hangar({ className }) {
  return (
    <svg viewBox="0 0 400 280" fill="none" className={className} aria-hidden="true">
      <line x1="20" y1="220" x2="380" y2="220" className="stroke-graphite-900/15" strokeWidth="1.5" />

      {/* wide arched shell */}
      <path
        d="M40 220V150Q200 60 360 150V220"
        className="stroke-graphite-900"
        strokeWidth="2.5"
      />
      <path d="M40 150Q200 60 360 150" className="stroke-amber-500" strokeWidth="3" strokeLinecap="round" />

      {/* rib lines across the arch */}
      {[0.15, 0.3, 0.45, 0.6, 0.75, 0.9].map((t) => {
        const x = 40 + t * 320;
        const y = 150 - Math.sin(t * Math.PI) * 60;
        return <line key={t} x1={x} y1={y + 6} x2={x} y2="220" className="stroke-graphite-900/12" strokeWidth="1" />;
      })}

      {/* hangar doors */}
      <rect x="150" y="150" width="100" height="70" className="stroke-graphite-900" strokeWidth="2" />
      <line x1="200" y1="150" x2="200" y2="220" className="stroke-graphite-900/40" strokeWidth="1.5" />
      {[165, 180, 195, 210].map((y) => (
        <line key={y} x1="150" y1={y} x2="250" y2={y} className="stroke-graphite-900/20" strokeWidth="1" />
      ))}

      <line x1="40" y1="240" x2="360" y2="240" className="stroke-blueprint-500/50" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="40" y1="234" x2="40" y2="246" className="stroke-blueprint-500/50" strokeWidth="1" />
      <line x1="360" y1="234" x2="360" y2="246" className="stroke-blueprint-500/50" strokeWidth="1" />
      <text x="200" y="256" textAnchor="middle" className="fill-blueprint-500/70 font-mono" fontSize="11">
        48.0 M
      </text>
    </svg>
  );
}
