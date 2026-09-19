import { useEffect } from 'react';
export default function Modal({ onClose, label, children }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [onClose]);
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <button className="x" aria-label="Tutup" onClick={onClose}>×</button>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}
