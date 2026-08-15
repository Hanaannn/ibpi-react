export default function House({ className }) {
  return (
    <svg viewBox="0 0 400 280" fill="none" className={className} aria-hidden="true">
      {/* ground line */}
      <line x1="40" y1="220" x2="360" y2="220" className="stroke-graphite-900/15" strokeWidth="1.5" />

      {/* structure */}
      <path
        d="M90 220V140L200 70L310 140V220H90Z"
        className="stroke-graphite-900"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M90 140H310" className="stroke-graphite-900/40" strokeWidth="1.5" />

      {/* door */}
      <rect x="185" y="168" width="30" height="52" rx="1" className="stroke-graphite-900" strokeWidth="2" />
      {/* windows */}
      <rect x="120" y="168" width="34" height="30" rx="1" className="stroke-graphite-900" strokeWidth="2" />
      <path d="M137 168V198M120 183H154" className="stroke-graphite-900" strokeWidth="1.5" />
      <rect x="246" y="168" width="34" height="30" rx="1" className="stroke-graphite-900" strokeWidth="2" />
      <path d="M263 168V198M246 183H280" className="stroke-graphite-900" strokeWidth="1.5" />

      {/* roof accent */}
      <path d="M90 140L200 70L310 140" className="stroke-amber-500" strokeWidth="3" strokeLinecap="round" />

      {/* dimension line */}
      <line x1="90" y1="240" x2="310" y2="240" className="stroke-blueprint-500/50" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="90" y1="234" x2="90" y2="246" className="stroke-blueprint-500/50" strokeWidth="1" />
      <line x1="310" y1="234" x2="310" y2="246" className="stroke-blueprint-500/50" strokeWidth="1" />
      <text x="200" y="256" textAnchor="middle" className="fill-blueprint-500/70 font-mono" fontSize="11">
        8.0 M
      </text>
    </svg>
  );
}
