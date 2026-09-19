import { useState } from 'react';
import Modal from './Modal.jsx';
export default function Gallery({ data: d }) {
  const [open, setOpen] = useState(null);
  if (!d.gallery.length) return null;
  return (
    <section data-nav="more" className="sec gallery">
      <h2 className="h rv">OUR MOMENTS</h2>
      {d.gallery.map((g, i) => (
        <button key={g.src} className={'pol rv ' + (i % 2 ? 'r' : 'l')} style={{ '--r': (i % 2 ? 3 : -3) + 'deg' }} onClick={() => setOpen(g)} aria-label={`Buka foto: ${g.caption}`}>
          <img src={g.src} alt={g.caption} loading="lazy" /><span className="script">{g.caption}</span>
        </button>
      ))}
      {open && <Modal label={open.caption} onClose={() => setOpen(null)}><img className="full" src={open.src} alt={open.caption} /></Modal>}
    </section>
  );
}
