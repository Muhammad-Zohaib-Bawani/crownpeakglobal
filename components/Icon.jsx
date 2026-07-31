// One stroke-icon set, currentColor, 24px grid. Keeps the site dependency-free.
const paths = {
  palette: (
    <>
      <path d="M12 21a9 9 0 1 1 9-9c0 2.5-2 3.5-3.5 3.5H16a2 2 0 0 0-1.4 3.4A2 2 0 0 1 12 21Z" />
      <circle cx="8.5" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="9.5" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  code: (
    <>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
    </>
  ),
  device: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10.5 9.2v5.6l4.5-2.8z" fill="currentColor" stroke="none" />
    </>
  ),
  share: (
    <>
      <circle cx="17.5" cy="6" r="2.5" />
      <circle cx="6.5" cy="12" r="2.5" />
      <circle cx="17.5" cy="18" r="2.5" />
      <path d="m8.8 10.8 6.4-3.4M8.8 13.2l6.4 3.4" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20h4l10-10a2.6 2.6 0 0 0-3.7-3.7L4 16.4V20Z" />
      <path d="m13.5 6.5 4 4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrow: (
    <>
      <path d="M5 12h13" />
      <path d="m12.5 6 6 6-6 6" />
    </>
  ),
  plus: <path d="M12 6v12M6 12h12" />,
  minus: <path d="M6 12h12" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 20.5l-1.8-7.9L4.5 10.8 10.2 9 12 3.5Z" />
    </>
  ),
  shield: <path d="M12 3.5 5.5 6v5.5c0 4 2.7 7.3 6.5 9 3.8-1.7 6.5-5 6.5-9V6L12 3.5Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="9" r="3" />
      <path d="M4 19c0-3 2.5-4.8 5.5-4.8S15 16 15 19" />
      <path d="M16 8.2A2.8 2.8 0 0 1 16 14M17.5 18.8c0-2 -.6-3.4-1.6-4.3 2.6.2 4.1 1.9 4.1 4.3" />
    </>
  ),
  facebook: (
    <path d="M14.5 8.5h2V5.5h-2.2c-2 0-3.3 1.4-3.3 3.5v1.5H9v3h2v7h3v-7h2.2l.4-3H14v-1.2c0-.6.2-.8.5-.8Z" />
  ),
  linkedin: (
    <>
      <path d="M5.5 9.5v9M5.5 5.6v.1" />
      <path d="M10.5 18.5v-9m0 2.4c.7-1.6 2-2.4 3.6-2.4 2.2 0 3.4 1.4 3.4 4v5" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  x: <path d="M5 5l14 14M19 5 5 19" />,
};

export default function Icon({ name, size = 22, className = "", strokeWidth = 1.6 }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {d}
    </svg>
  );
}
