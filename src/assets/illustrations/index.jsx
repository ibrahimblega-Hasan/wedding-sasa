// Ilustrasi SVG hand-drawn. Ganti path di sini untuk mengubah gaya.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Svg = ({ children, size = 80, label, ...p }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} {...base} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true} {...p}>{children}</svg>
);
const R = '#C58A82', G = '#788566', T = '#B76F64';
export const Flower = (p) => (
  <Svg {...p}>
    {[0, 72, 144, 216, 288].map((a) => <ellipse key={a} cx="50" cy="24" rx="8" ry="14" transform={`rotate(${a} 50 40)`} fill={R} fillOpacity=".35" />)}
    <circle cx="50" cy="40" r="6" fill="#E3B76F" fillOpacity=".7" />
    <path d="M50 54C48 70 52 82 50 96" /><path d="M50 76C38 70 30 72 26 62C40 60 47 66 50 76Z" fill={G} fillOpacity=".5" />
  </Svg>
);
export const Bouquet = (p) => (
  <Svg {...p}>
    <path d="M50 96L36 56M50 96L64 56M50 96V50" />
    {[[36, 44], [64, 44], [50, 32]].map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="13" fill={i === 1 ? T : R} fillOpacity=".4" /><path d={`M${x - 6} ${y}q6-8 12 0M${x - 4} ${y + 4}q4-5 8 0`} /></g>)}
    <path d="M30 62C18 58 14 48 20 42M70 62C82 58 86 48 80 42" stroke={G} />
    <path d="M42 82L58 82L54 92L46 92Z" fill={T} fillOpacity=".6" />
  </Svg>
);
export const Arch = (p) => (
  <Svg {...p}>
    <path d="M22 96V46C22 18 78 18 78 46V96" strokeWidth="2.2" /><path d="M28 96V47C28 26 72 26 72 47V96" strokeDasharray="2 3" />
    {[[22, 58, 8], [22, 80, 6], [78, 60, 7], [78, 82, 6], [50, 20, 9], [34, 26, 6], [66, 26, 6]].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill={i % 2 ? T : R} fillOpacity=".42" />)}
    <path d="M22 50q-9 3-11 11M22 72q-9 2-11 10M78 52q9 3 11 11M78 74q9 2 11 10M40 22q-8 0-14 6M60 22q8 0 14 6" stroke={G} />
    <path d="M8 96h84" />
  </Svg>
);
export const Heart = (p) => <Svg {...p}><path d="M50 84C20 62 14 40 28 30C38 24 47 30 50 38C53 30 62 24 72 30C86 40 80 62 50 84Z" fill={T} fillOpacity=".45" /></Svg>;
export const Pin = (p) => <Svg {...p}><path d="M50 90C30 62 26 52 26 40a24 24 0 0148 0c0 12-4 22-24 50Z" fill={T} fillOpacity=".5" /><circle cx="50" cy="40" r="8" /></Svg>;
export const Rings = (p) => <Svg {...p}><circle cx="38" cy="56" r="20" /><circle cx="62" cy="56" r="20" /><path d="M44 28l6-8 6 8-6 6Z" fill={R} fillOpacity=".5" /></Svg>;
export const Dress = (p) => <Svg {...p}><path d="M40 12L50 24L60 12M40 12L36 40L22 90H78L64 40L60 12" fill={R} fillOpacity=".3" /><path d="M36 40H64" /></Svg>;
export const Suit = (p) => <Svg {...p}><path d="M36 14L50 30L64 14L82 26L76 90H24L18 26Z" fill={G} fillOpacity=".3" /><path d="M50 30V90M44 20L50 44L56 20" /></Svg>;
export const Calendar = (p) => <Svg {...p}><rect x="16" y="22" width="68" height="64" rx="6" /><path d="M16 40H84M34 14V28M66 14V28" /><path d="M50 74C40 66 38 60 43 57C47 55 50 58 50 60C50 58 53 55 57 57C62 60 60 66 50 74Z" fill={T} fillOpacity=".6" /></Svg>;
export const Couple = (p) => (
  <Svg {...p}>
    <circle cx="38" cy="26" r="9" /><path d="M24 90V54C24 42 52 42 52 54V90Z" fill={G} fillOpacity=".3" />
    <circle cx="64" cy="30" r="8" /><path d="M52 90L56 56C58 46 78 46 80 56L86 90Z" fill={R} fillOpacity=".35" />
    <path d="M50 12q4-6 8 0q-4 6-8 0Z" fill={T} fillOpacity=".6" />
  </Svg>
);
