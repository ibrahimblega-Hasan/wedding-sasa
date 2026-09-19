import { Dress, Suit } from '../assets/illustrations';
export default function DressCode({ data: d }) {
  const c = d.dressCode;
  return (
    <section data-nav="event" className="sec dress">
      <h2 className="h rv">DRESS CODE</h2>
      <p className="script big rv">“{c.theme}”</p>
      <ul className="pal rv">{c.colors.map((x) => <li key={x.name}><i style={{ background: x.hex }} /><span>{x.name}</span></li>)}</ul>
      <div className="icons rv"><Dress size={54} /><Suit size={54} /></div>
      <p className="note rv">{c.note}</p>
    </section>
  );
}
