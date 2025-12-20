import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  // Translations
  const t = {
    siteName: language === 'es' ? 'Medicina del Sapo Sagrado' : 'Sacred Toad Medicine',
    description: language === 'es'
      ? 'Ceremonias sagradas de Bufo Alvarius con reverencia por el linaje indígena y práctica informada en trauma.'
      : 'Sacred Bufo Alvarius ceremonies held with reverence for indigenous lineage and trauma-informed practice.',
    explore: language === 'es' ? 'Explorar' : 'Explore',
    about: language === 'es' ? 'Nosotros' : 'About',
    ceremonies: language === 'es' ? 'Ceremonias' : 'Ceremonies',
    retreats: language === 'es' ? 'Retiros' : 'Retreats',
    collaborations: language === 'es' ? 'Colaboraciones' : 'Collaborations',
    pricing: language === 'es' ? 'Precios' : 'Pricing',
    resources: language === 'es' ? 'Recursos' : 'Resources',
    preparation: language === 'es' ? 'Preparación' : 'Preparation',
    integration: language === 'es' ? 'Integración' : 'Integration',
    testimonials: language === 'es' ? 'Testimonios' : 'Testimonials',
    contact: language === 'es' ? 'Contacto' : 'Contact',
    facilitators: language === 'es' ? 'Facilitadores' : 'Facilitators',
    connect: language === 'es' ? 'Conectar' : 'Connect',
    allRights: language === 'es' ? 'Todos los derechos reservados' : 'All rights reserved',
    madeWith: language === 'es' ? 'Hecho con' : 'Made with',
    forSeekers: language === 'es' ? 'para buscadores e iniciados' : 'for seekers & initiates',
  };

  return (
    <footer className="bg-earth-900 border-t border-desert-sage/20 text-desert-sand">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-sacred-gold">{t.siteName}</h3>
              <p className="text-desert-sand/60 text-sm leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Explore Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-desert-sand/80 uppercase tracking-wider">{t.explore}</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/about" className="text-desert-sand/60 hover:text-desert-clay transition-colors text-sm">
                  {t.about}
                </Link>
                <Link to="/ceremonies" className="text-desert-sand/60 hover:text-sacred-purple transition-colors text-sm">
                  {t.ceremonies}
                </Link>
                <Link to="/retreats" className="text-desert-sand/60 hover:text-ocean-coral transition-colors text-sm">
                  {t.retreats}
                </Link>
                <Link to="/collaborations" className="text-desert-sand/60 hover:text-jungle-emerald transition-colors text-sm">
                  {t.collaborations}
                </Link>
                <Link to="/pricing" className="text-desert-sand/60 hover:text-mineral-copper transition-colors text-sm">
                  {t.pricing}
                </Link>
              </nav>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-desert-sand/80 uppercase tracking-wider">{t.resources}</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/preparation" className="text-desert-sand/60 hover:text-desert-sage transition-colors text-sm">
                  {t.preparation}
                </Link>
                <Link to="/integration" className="text-desert-sand/60 hover:text-ocean-turquoise transition-colors text-sm">
                  {t.integration}
                </Link>
                <Link to="/faq" className="text-desert-sand/60 hover:text-jungle-sage transition-colors text-sm">
                  FAQ
                </Link>
                <Link to="/testimonials" className="text-desert-sand/60 hover:text-ocean-turquoise transition-colors text-sm">
                  {t.testimonials}
                </Link>
                <Link to="/contact" className="text-desert-sand/60 hover:text-sunset-rose transition-colors text-sm">
                  {t.contact}
                </Link>
              </nav>
            </div>

            {/* Facilitators Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-desert-sand/80 uppercase tracking-wider">{t.facilitators}</h4>
              <nav className="flex flex-col space-y-2">
                <a
                  href="https://nina-moore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-desert-sand/60 hover:text-sunset-peach transition-colors text-sm"
                >
                  Nina Moore →
                </a>
                <a
                  href="https://astral-integration.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-desert-sand/60 hover:text-mineral-terracotta transition-colors text-sm"
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
                  <p>Mazunte, Oaxaca</p>
                  <p>Mexico</p>
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
                © {new Date().getFullYear()} {t.siteName}
                {t.allRights}
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
