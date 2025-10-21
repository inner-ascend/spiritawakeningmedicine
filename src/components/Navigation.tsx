import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-earth-900/80 border-b border-desert-sage/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="text-3xl">🔥</span>
            <span className="text-xl font-serif text-sacred-gold">
              Spirit Awakening Medicine
            </span>
          </Link>

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-5">
            <Link to="/about" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
              About
            </Link>
            <Link to="/ceremonies" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
              Ceremonies
            </Link>
            <Link to="/preparation" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
              Preparation
            </Link>
            <Link to="/integration" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
              Integration
            </Link>
            <Link to="/retreats" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
              Retreats
            </Link>
            <Link to="/testimonials" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
              Testimonials
            </Link>
            <Link to="/faq" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
              FAQ
            </Link>
            <Link to="/contact" className="px-6 py-2 bg-sacred-gold text-earth-900 rounded-full font-semibold hover:bg-sacred-amber transition-all text-sm">
              Apply
            </Link>
          </div>

          {/* Right Side: Language + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : language === 'es' ? 'ca' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-earth-700/30 backdrop-blur-xl border border-desert-sage/30 hover:bg-earth-700/40 transition-all"
            >
              <Globe className="w-4 h-4 text-sacred-gold" />
              <span className="text-sm font-medium text-desert-sand">{language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'CA'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-desert-sand hover:text-sacred-gold transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-desert-sage/20">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
              About
            </Link>
            <Link to="/ceremonies" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
              Ceremonies
            </Link>
            <Link to="/preparation" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
              Preparation
            </Link>
            <Link to="/integration" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
              Integration
            </Link>
            <Link to="/retreats" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
              Retreats
            </Link>
            <Link to="/testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
              Testimonials
            </Link>
            <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
              FAQ
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sacred-gold font-semibold">
              Apply
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
