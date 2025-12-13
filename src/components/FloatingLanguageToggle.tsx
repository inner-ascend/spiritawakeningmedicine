import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function FloatingLanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-earth-800/90 backdrop-blur-sm text-sacred-white rounded-full shadow-lg hover:bg-earth-700 transition-all duration-300 border border-desert-sand/20 hover:border-sacred-gold/40 group"
      aria-label={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
    >
      <Globe className="w-4 h-4 text-sacred-gold" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'ES' : 'EN'}
      </span>
      {/* Tooltip on hover */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-earth-900 text-sacred-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      </span>
    </button>
  );
}
