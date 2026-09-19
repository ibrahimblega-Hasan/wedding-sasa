import { Couple, Flower } from '../assets/illustrations';
import ShareButton from './ShareButton.jsx';
export default function Closing({ data: d }) {
  return (
    <section data-nav="more" className="sec closing band dark">
      <Couple size={120} className="rv float" />
      <p className="script big rv">Thank you for being<br />part of our story.</p>
      <h2 className="script names rv">{d.groom.nick}<span className="amp">&amp;</span>{d.bride.nick}</h2>
      <p className="rv">With Love</p>
      <ShareButton title={`${d.groom.nick} & ${d.bride.nick} — Wedding Invitation`} />
      <div className="row"><Flower size={50} /><Flower size={64} /><Flower size={50} /></div>
    </section>
  );
}
