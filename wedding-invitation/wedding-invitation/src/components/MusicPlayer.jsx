export default function MusicPlayer({ playing, onToggle }) {
  return (
    <button className={'music' + (playing ? ' on' : '')} onClick={onToggle} aria-label={playing ? 'Jeda musik' : 'Putar musik'} aria-pressed={playing}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V6l10-2v12" /><circle cx="6.5" cy="18" r="2.5" /><circle cx="16.5" cy="16" r="2.5" /></svg>
    </button>
  );
}
