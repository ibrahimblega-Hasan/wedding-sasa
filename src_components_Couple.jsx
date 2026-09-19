import { Flower, Couple as Pair } from '../assets/illustrations';
function Person({ label, p, role }) {
  return (
    <div className="person rv">
      <p className="small">{label}</p>
      <div className="frame">
        <Flower size={54} className="fl a" /><Flower size={54} className="fl b" /><Flower size={64} className="fl c" />
        <div className="ph"><Pair size={90} /><img src={p.photo} alt={`Foto ${p.name}`} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /></div>
      </div>
      <h3 className="script name">{p.name}</h3>
      <p>{role} dari<br />Bapak {p.father}<br />&amp;<br />Ibu {p.mother}</p>
    </div>
  );
}
export default function Couple({ data: d }) {
  return (
    <section id="couple" data-nav="couple" className="sec couple">
      <Person label="THE BRIDE" p={d.bride} role="Putri" />
      <Person label="THE GROOM" p={d.groom} role="Putra" />
    </section>
  );
}
