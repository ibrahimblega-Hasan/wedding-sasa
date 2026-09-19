import { Arch, Pin } from '../assets/illustrations';
export default function Event({ data: d }) {
  const w = d.wedding;
  return (
    <section id="event" data-nav="event" className="sec event">
      <Arch size={200} className="rv float" />
      <h2 className="h rv">Akad Nikah<br />&amp; Resepsi</h2>
      <p className="script big rv">{w.date}</p>
      <p className="rv"><b>Akad</b><br />{w.akad.time}</p>
      <p className="rv"><b>Resepsi</b><br />{w.reception.time}</p>
      <p className="rv"><Pin size={26} /><br /><b>{w.venue}</b><br />{w.address}</p>
      <a className="btn rv" href={w.mapUrl} target="_blank" rel="noreferrer">Google Maps</a>
    </section>
  );
}
