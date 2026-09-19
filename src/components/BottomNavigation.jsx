import { useEffect, useState } from 'react';
const items = [
  { id: 'home', label: 'HOME', d: 'M3 11l9-8 9 8M5 10v10h14V10' },
  { id: 'couple', label: 'COUPLE', d: 'M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 3-5 6-5s6 2 6 5M17 10a2.5 2.5 0 100-5M17 15c2.5 0 4.5 1.5 4.5 4' },
  { id: 'event', label: 'EVENT', d: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4' },
  { id: 'wishes', label: 'WISHES', d: 'M4 5h16v11H9l-5 4z' },
  { id: 'more', label: 'MORE', d: 'M5 12h.01M12 12h.01M19 12h.01' }
];
export default function BottomNavigation() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.dataset.nav)), { rootMargin: '-45% 0px -45% 0px' });
    document.querySelectorAll('[data-nav]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <nav className="nav" aria-label="Navigasi utama">
      {items.map((i) => (
        <button key={i.id} className={active === i.id ? 'act' : ''} onClick={() => go(i.id)} aria-label={i.label} aria-current={active === i.id ? 'true' : undefined}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={i.id === 'more' ? 3 : 1.6} strokeLinecap="round" strokeLinejoin="round"><path d={i.d} /></svg>
          <span>{i.label}</span>
        </button>
      ))}
    </nav>
  );
}
