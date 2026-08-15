export default function SitePlan({ className }) {
  return (
    <svg viewBox="0 0 520 560" fill="none" className={className} aria-hidden="true">
      {/* site boundary */}
      <rect x="40" y="40" width="440" height="480" rx="4" className="stroke-paper-50/25" strokeWidth="1.5" strokeDasharray="6 5" />

      {/* access path */}
      <path d="M40 300H140M140 300V460" className="stroke-blueprint-300/50" strokeWidth="1.5" strokeDasharray="5 4" />

      {/* building A — residence */}
      <rect x="90" y="90" width="140" height="110" rx="2" className="stroke-paper-50" strokeWidth="2" />
      <path d="M90 90L230 200M230 90L90 200" className="stroke-paper-50/15" strokeWidth="1" />
      <text x="160" y="150" textAnchor="middle" className="fill-paper-50/70 font-mono" fontSize="11">
        RUMAH
      </text>

      {/* building B — warehouse */}
      <rect x="270" y="90" width="170" height="150" rx="2" className="stroke-paper-50" strokeWidth="2" />
      {[300, 330, 360, 390, 420].map((x) => (
        <line key={x} x1={x} y1="90" x2={x} y2="240" className="stroke-paper-50/10" strokeWidth="1" />
      ))}
      <text x="355" y="170" textAnchor="middle" className="fill-paper-50/70 font-mono" fontSize="11">
        GUDANG
      </text>

      {/* building C — hangar (large span, bottom) */}
      <rect x="90" y="330" width="350" height="150" rx="2" className="stroke-amber-400" strokeWidth="2.5" />
      <path d="M90 405H440" className="stroke-amber-400/40" strokeWidth="1" strokeDasharray="4 4" />
      <text x="265" y="410" textAnchor="middle" className="fill-amber-300 font-mono" fontSize="11">
        HANGAR
      </text>

      {/* dimension callouts */}
      <line x1="90" y1="215" x2="230" y2="215" className="stroke-paper-50/30" strokeWidth="1" />
      <text x="160" y="228" textAnchor="middle" className="fill-paper-50/50 font-mono" fontSize="9">
        14.0 M
      </text>

      <line x1="455" y1="90" x2="455" y2="240" className="stroke-paper-50/30" strokeWidth="1" />
      <text x="465" y="170" className="fill-paper-50/50 font-mono" fontSize="9">
        15.0 M
      </text>

      {/* compass mark */}
      <g transform="translate(400 480)">
        <circle cx="0" cy="0" r="22" className="stroke-paper-50/25" strokeWidth="1" />
        <path d="M0 -16V16M-16 0H16" className="stroke-paper-50/25" strokeWidth="1" />
        <path d="M0 -16L-5 -4H5L0 -16Z" className="fill-amber-400" />
        <text x="0" y="-26" textAnchor="middle" className="fill-paper-50/60 font-mono" fontSize="9">
          N
        </text>
      </g>
    </svg>
  );
}
