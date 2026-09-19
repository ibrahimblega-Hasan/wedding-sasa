import { Flower, Heart } from '../assets/illustrations';
export default function Cover({ data: d, onOpen, leaving }) {
  return (
    <section className={'cover' + (leaving ? ' leave' : '')} aria-label="Sampul undangan">
      <Flower size={90} className="float corner tl" /><Flower size={90} className="float corner br" />
      <p className="small">THE WEDDING OF</p>
      <h1 className="script names">{d.groom.nick}<span className="amp">&amp;</span>{d.bride.nick}</h1>
      <Heart size={34} className="float" />
      <p className="date">{d.wedding.shortDate}</p>
      <button className="btn" onClick={onOpen} aria-label="Buka undangan">OPEN INVITATION</button>
    </section>
  );
}
