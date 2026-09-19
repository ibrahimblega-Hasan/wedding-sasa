import { useState } from 'react';
import { Bouquet } from '../assets/illustrations';
const KEY = 'wishes-v1';
export default function Wishes({ data: d }) {
  const [list, setList] = useState(() => { try { return JSON.parse(localStorage.getItem(KEY)) || d.wishes; } catch { return d.wishes; } });
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const name = String(f.get('name')).trim(), msg = String(f.get('msg')).trim();
    if (!name || !msg) return;
    const next = [{ name, msg }, ...list];
    setList(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
    e.target.reset();
  };
  return (
    <section id="wishes" data-nav="wishes" className="sec wishes">
      <h2 className="h rv">WISHES</h2>
      <p className="script big rv">For the Newlyweds</p>
      <Bouquet size={110} className="rv float" />
      <p className="rv"><b>{list.length} Comments</b></p>
      <form className="rv" onSubmit={submit}>
        <label>Nama<input name="name" maxLength="40" required autoComplete="name" /></label>
        <label>Ucapan<textarea name="msg" rows="4" maxLength="300" required /></label>
        <button className="btn" type="submit">Kirim</button>
      </form>
      <ul className="cmts">{list.map((c, i) => <li key={i}><b className="script">{c.name}</b><p>“{c.msg}”</p></li>)}</ul>
    </section>
  );
}
