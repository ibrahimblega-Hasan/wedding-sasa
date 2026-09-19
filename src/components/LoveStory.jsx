export default function LoveStory({ data: d }) {
  return (
    <section data-nav="event" className="sec story">
      <h2 className="h rv">{d.story.title.toUpperCase()}</h2>
      <p className="script rv">{d.story.years}</p>
      {d.story.paragraphs.map((t, i) => <p key={i} className="rv">{t}</p>)}
    </section>
  );
}
