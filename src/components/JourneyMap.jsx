import { Pin, Heart } from '../assets/illustrations';
export default function JourneyMap({ data: d }) {
  const m = d.map;
  return (
    <div className="rv journey" role="img" aria-label={`Perjalanan dari ${m.origin1} dan ${m.origin2} menuju ${m.destination}`}>
      <svg viewBox="0 0 300 400" width="100%" fill="none" stroke="#765044" strokeWidth="1.6" strokeLinecap="round">
        <path d="M20 40C30 14 90 10 118 32C136 50 120 82 86 88C50 96 14 78 20 40Z" fill="#B7C4A8" fillOpacity=".5" />
        <path d="M180 34C196 8 260 12 280 40C292 66 250 92 214 86C180 80 168 58 180 34Z" fill="#C58A82" fillOpacity=".35" />
        <path d="M70 300C60 270 110 250 160 256C220 262 250 290 226 326C200 362 110 372 78 346C68 336 72 318 70 300Z" fill="#B7C4A8" fillOpacity=".5" />
        <path className="draw" pathLength="1" d="M70 126C90 160 130 168 150 190" />
        <path className="draw" pathLength="1" d="M230 126C210 160 170 168 150 190" />
        <path className="draw" pathLength="1" d="M150 226C140 250 160 270 150 296" />
        <foreignObject x="132" y="170" width="36" height="36"><Heart size={36} className="float" /></foreignObject>
        <foreignObject x="52" y="40" width="34" height="34"><Pin size={34} /></foreignObject>
        <foreignObject x="212" y="36" width="34" height="34"><Pin size={34} /></foreignObject>
        <foreignObject x="132" y="290" width="34" height="34"><Pin size={34} /></foreignObject>
        <g fill="#765044" stroke="none" fontFamily="Playfair Display, serif" fontSize="15" textAnchor="middle" letterSpacing="2">
          <text x="70" y="114">{m.origin1.toUpperCase()}</text><text x="230" y="114">{m.origin2.toUpperCase()}</text>
          <text x="150" y="220" fontFamily="Great Vibes, cursive" fontSize="22" letterSpacing="0">love</text>
          <text x="150" y="382">{m.destination.toUpperCase()}</text>
        </g>
        <path d="M18 380l6-4M30 384l6-4M262 372q6-8 12 0M276 372q6-8 12 0" stroke="#788566" />
      </svg>
    </div>
  );
}
