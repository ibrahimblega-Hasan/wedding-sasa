import { Flower } from '../assets/illustrations';
export default function LoadingScreen() {
  return <div className="loading" role="status" aria-label="Memuat undangan"><Flower size={72} className="float" /><p className="script">Loading...</p></div>;
}
