import { useState } from 'react';
export default function ShareButton({ title }) {
  const [msg, setMsg] = useState('');
  const url = window.location.href;
  const say = (t) => { setMsg(t); setTimeout(() => setMsg(''), 2200); };
  const copy = async () => { try { await navigator.clipboard.writeText(url); say('Link berhasil disalin'); } catch { say('Salin link dari address bar'); } };
  const share = async () => { if (navigator.share) { try { await navigator.share({ title, url }); } catch {} } else copy(); };
  return (
    <div className="share">
      <button className="btn" onClick={share}>{navigator.share ? 'SHARE INVITATION' : 'COPY LINK'}</button>
      <a className="btn alt" href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`} target="_blank" rel="noreferrer">WHATSAPP</a>
      {msg && <p className="note" role="status">{msg}</p>}
    </div>
  );
}
