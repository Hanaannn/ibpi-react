export default function Warehouse({ className }) {
  return (
    <svg viewBox="0 0 400 280" fill="none" className={className} aria-hidden="true">
      <line x1="30" y1="220" x2="370" y2="220" className="stroke-graphite-900/15" strokeWidth="1.5" />

      {/* main hall */}
      <path
        d="M70 220V120L130 90H310L340 120V220H70Z"
        className="stroke-graphite-900"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* curved roof accent */}
      <path d="M70 120Q205 82 340 120" className="stroke-amber-500" strokeWidth="3" strokeLinecap="round" />

      {/* corrugation lines */}
      {[100, 130, 160, 190, 220, 250, 280, 310].map((x) => (
        <line key={x} x1={x} y1="122" x2={x} y2="220" className="stroke-graphite-900/12" strokeWidth="1" />
      ))}

      {/* roller door */}
      <rect x="165" y="150" width="70" height="70" className="stroke-graphite-900" strokeWidth="2" />
      {[160, 172, 184, 196, 208].map((y) => (
        <line key={y} x1="165" y1={y} x2="235" y2={y} className="stroke-graphite-900/30" strokeWidth="1" />
      ))}

      {/* side entrance */}
      <rect x="285" y="180" width="24" height="40" className="stroke-graphite-900" strokeWidth="1.5" />

      <line x1="70" y1="240" x2="340" y2="240" className="stroke-blueprint-500/50" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="70" y1="234" x2="70" y2="246" className="stroke-blueprint-500/50" strokeWidth="1" />
      <line x1="340" y1="234" x2="340" y2="246" className="stroke-blueprint-500/50" strokeWidth="1" />
      <text x="205" y="256" textAnchor="middle" className="fill-blueprint-500/70 font-mono" fontSize="11">
        24.0 M
      </text>
    </svg>
  );
}
