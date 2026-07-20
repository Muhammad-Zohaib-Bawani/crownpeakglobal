export default function Logo({ size = 34, withText = true }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cpg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e5fff" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        {/* peak / crown mark */}
        <path d="M4 38 L16 14 L24 26 L32 8 L44 38 Z" stroke="url(#cpg)" strokeWidth="3" strokeLinejoin="round" fill="rgba(124,92,255,0.12)" />
        <circle cx="16" cy="14" r="3" fill="url(#cpg)" />
        <circle cx="32" cy="8" r="3" fill="url(#cpg)" />
        <circle cx="24" cy="26" r="2.5" fill="#06b6d4" />
      </svg>
      {withText && (
        <span style={{ fontWeight: 800, fontSize: size * 0.5, letterSpacing: "-0.02em" }}>
          CrownPeak<span className="text-gradient"> Global</span>
        </span>
      )}
    </div>
  );
}
