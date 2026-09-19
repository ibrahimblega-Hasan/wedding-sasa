import { Flower } from '../assets/illustrations';
export default function QuranQuote({ data: d }) {
  return (
    <section data-nav="home" className="sec quote band">
      <Flower size={56} className="rv float" />
      <h2 className="h rv">{d.quote.source}</h2>
      <p className="script big rv">“{d.quote.text}”</p>
      <p className="note rv">{d.quote.note}</p>
    </section>
  );
}
