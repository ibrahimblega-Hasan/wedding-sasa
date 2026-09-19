export default function Home({ data: d, children }) {
  return (
    <section id="home" data-nav="home" className="sec home">
      <p className="intro rv">{d.intro}</p>
      {children}
      <h2 className="script names rv">{d.groom.nick}<span className="amp">&amp;</span>{d.bride.nick}</h2>
      <p className="date rv">{d.wedding.shortDate}</p>
    </section>
  );
}
