import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  // Translations
  const t = {
    siteName: language === 'es' ? 'Medicina del Sapo Sagrado' : 'Sacred Toad Medicine',
    description: language === 'es'
      ? 'Ceremonias sagradas de Bufo Alvarius con reverencia por el linaje indígena y práctica informada por trauma.'
      : 'Sacred Bufo Alvarius ceremonies held with reverence for indigenous lineage and trauma-informed practice.',
    facilitators: language === 'es' ? 'Facilitadores' : 'Facilitators',
    connect: language === 'es' ? 'Conectar' : 'Connect',
    allRights: language === 'es' ? 'Todos los derechos reservados' : 'All rights reserved',
    madeWith: language === 'es' ? 'Hecho con' : 'Made with',
    forSeekers: language === 'es' ? 'para buscadores e iniciados' : 'for seekers & initiates',
  };

  return (
    <footer className="bg-earth-900 border-t border-desert-sage/20 text-desert-sand">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Grid - Simplified */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-sacred-gold">{t.siteName}</h3>
              <p className="text-desert-sand/60 text-sm leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Facilitators Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-desert-sand/80 uppercase tracking-wider">{t.facilitators}</h4>
              <nav className="flex flex-col space-y-2">
                <a
                  href="https://nina-moore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm"
                >
                  Nina Moore →
                </a>
                <a
                  href="https://jordiamat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm"
                >
                  Astral Amat →
                </a>
              </nav>
            </div>

            {/* Connect Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-desert-sand/80 uppercase tracking-wider">{t.connect}</h4>
              <div className="space-y-3">
                <a
                  href="mailto:hello@sacredtoad.co"
                  className="block text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm"
                >
                  hello@sacredtoad.co
                </a>
                <a
                  href="https://instagram.com/sacredtoad.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm"
                >
                  @sacredtoad.co
                </a>
                <div className="text-desert-sand/60 text-sm">
                  <p>Mazunte, Oaxaca, Mexico</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-desert-sand/10 mb-8"></div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-desert-sand/50 text-sm text-center md:text-left">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                © {new Date().getFullYear()} {t.siteName}. {t.allRights}.
              </p>
            </div>

            <div className="text-desert-sand/40 text-xs italic text-center md:text-right">
              <p className="flex items-center gap-2 justify-center md:justify-end">
                {t.madeWith} <Heart className="w-3 h-3 text-sacred-gold/60 fill-sacred-gold/60" /> {t.forSeekers}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
