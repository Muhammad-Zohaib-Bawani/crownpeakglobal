// CSS-only infinite marquee: children rendered twice, track translated -50%.
export default function Marquee({ items, className = "" }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee relative overflow-hidden ${className}`}>
      <div className="marquee-track items-center gap-14">
        {row.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            aria-hidden="true"
            className="h-12 w-auto shrink-0 opacity-45 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-14"
          />
        ))}
      </div>
      {/* edge fade so logos dissolve instead of clipping */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
