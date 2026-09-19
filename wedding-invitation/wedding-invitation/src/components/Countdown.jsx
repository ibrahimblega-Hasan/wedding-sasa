import { useEffect, useState } from 'react';
const calc = (t) => {
  const s = Math.max(0, new Date(t) - Date.now());
  return { Days: Math.floor(s / 864e5), Hours: Math.floor(s / 36e5) % 24, Minutes: Math.floor(s / 6e4) % 60, Seconds: Math.floor(s / 1e3) % 60 };
};
export default function Countdown({ data: d }) {
  const [t, setT] = useState(() => calc(d.wedding.countdownDate));
  useEffect(() => { const i = setInterval(() => setT(calc(d.wedding.countdownDate)), 1000); return () => clearInterval(i); }, [d.wedding.countdownDate]);
  return (
    <section data-nav="couple" className="sec countdown">
      <h2 className="script big rv">Save the Date</h2>
      <div className="count rv" role="timer" aria-label="Hitung mundur pernikahan">
        {Object.entries(t).map(([k, v]) => <div key={k}><strong>{String(v).padStart(2, '0')}</strong><span>{k}</span></div>)}
      </div>
    </section>
  );
}
