// Wordmark + peak mark. Flat, single accent colour, no gradients (RULES.md §4).
export default function Logo({ size = 38, withText = true, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className="shrink-0">
        <rect
          x="0.75"
          y="0.75"
          width="38.5"
          height="38.5"
          rx="11"
          fill="#121316"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
        />
        {/* peak: two ascending ridges to a summit */}
        <path
          d="M8 28.5 L16 15 L20.5 21.5 L27 10 L32 28.5"
          stroke="#F9B515"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="27" cy="10" r="2.6" fill="#F9B515" />
      </svg>

      {withText && (
        <span className="leading-none">
          <span className="block text-[15px] font-bold uppercase tracking-[0.08em] text-white">Crown Peak</span>
          <span className="mt-[3px] block text-[10px] font-bold uppercase tracking-[0.42em] text-accent">Global</span>
        </span>
      )}
    </span>
  );
}
