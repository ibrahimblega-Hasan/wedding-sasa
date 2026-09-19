import { useEffect, useRef, useState } from 'react';
import { weddingData as d } from './data/wedding.js';
import LoadingScreen from './components/LoadingScreen.jsx';
import Cover from './components/Cover.jsx';
import Home from './components/Home.jsx';
import JourneyMap from './components/JourneyMap.jsx';
import QuranQuote from './components/QuranQuote.jsx';
import Couple from './components/Couple.jsx';
import Countdown from './components/Countdown.jsx';
import Event from './components/Event.jsx';
import LoveStory from './components/LoveStory.jsx';
import DressCode from './components/DressCode.jsx';
import Gallery from './components/Gallery.jsx';
import Wishes from './components/Wishes.jsx';
import Gift from './components/Gift.jsx';
import Closing from './components/Closing.jsx';
import BottomNavigation from './components/BottomNavigation.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';

export default function App() {
  const [phase, setPhase] = useState('loading');
  const [playing, setPlaying] = useState(false);
  const audio = useRef(null);

  useEffect(() => { const t = setTimeout(() => setPhase('cover'), 1600); return () => clearTimeout(t); }, []);
  useEffect(() => {
    if (phase !== 'main') return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.15 });
    document.querySelectorAll('.rv').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [phase]);

  const open = () => {
    const a = audio.current;
    if (a) a.play().then(() => setPlaying(true)).catch(() => {});
    setPhase('leaving');
    setTimeout(() => { setPhase('main'); window.scrollTo(0, 0); }, 700);
  };
  const toggle = () => {
    const a = audio.current; if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => {}); else { a.pause(); setPlaying(false); }
  };

  return (
    <div className="app">
      <audio ref={audio} src={d.music} loop preload="none" />
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true"><filter id="wobble" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".02" numOctaves="1" seed="3" /><feDisplacementMap in="SourceGraphic" scale="2.2" /></filter></svg>
      {phase === 'loading' && <LoadingScreen />}
      {(phase === 'cover' || phase === 'leaving') && <Cover data={d} onOpen={open} leaving={phase === 'leaving'} />}
      {phase === 'main' && (
        <>
          <main>
            <Home data={d}><JourneyMap data={d} /></Home>
            <QuranQuote data={d} />
            <Couple data={d} />
            <Countdown data={d} />
            <Event data={d} />
            <LoveStory data={d} />
            <DressCode data={d} />
            <Gallery data={d} />
            <Wishes data={d} />
            <Gift data={d} />
            <Closing data={d} />
          </main>
          <MusicPlayer playing={playing} onToggle={toggle} />
          <BottomNavigation />
        </>
      )}
    </div>
  );
}
