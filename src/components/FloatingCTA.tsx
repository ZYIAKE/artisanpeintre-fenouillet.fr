import { Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';

export default function FloatingCTA() {
  return (
    <a
      href={BUSINESS.phoneTel}
      className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 bg-accent-500 text-white font-bold px-5 py-3.5 rounded-full shadow-xl shadow-accent-500/30 hover:bg-accent-600 active:bg-accent-700 transition-all duration-200 hover:scale-105"
      aria-label={`Appeler le ${BUSINESS.trade}`}
    >
      <Phone className="w-5 h-5" />
      <span className="text-sm">Appeler</span>
    </a>
  );
}
