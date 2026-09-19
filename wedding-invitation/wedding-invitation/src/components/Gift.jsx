import { useState } from 'react';
import Modal from './Modal.jsx';
import { Rings } from '../assets/illustrations';
export default function Gift({ data: d }) {
  const b = d.bank;
  const [toast, setToast] = useState(false);
  const [qr, setQr] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(b.accountNumber); }
    catch { const t = document.createElement('textarea'); t.value = b.accountNumber; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); }
    setToast(true); setTimeout(() => setToast(false), 2200);
  };
  return (
    <section id="more" data-nav="more" className="sec gift">
      <Rings size={80} className="rv float" />
      <h2 className="h rv">WEDDING GIFT</h2>
      <p className="script big rv">“Your presence is the greatest gift.”</p>
      <div className="acct rv"><b>{b.name}</b><strong>{b.accountNumber}</strong><span>a.n. {b.accountName}</span></div>
      <button className="btn rv" onClick={copy}>COPY ACCOUNT NUMBER</button>
      <button className="qris rv" onClick={() => setQr(true)} aria-label="Perbesar QRIS"><img src={b.qris} alt="QRIS" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span>Ketuk untuk memperbesar QRIS</span></button>
      {qr && <Modal label="QRIS" onClose={() => setQr(false)}><img className="full" src={b.qris} alt="QRIS" /></Modal>}
      {toast && <div className="toast" role="status">Nomor rekening berhasil disalin</div>}
    </section>
  );
}
