import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-earth-900 border-t border-desert-sage/20 text-desert-sand">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-sacred-gold">Spirit Awakening Medicine</h3>
              <p className="text-desert-sand/60 text-sm leading-relaxed">
                Sacred Bufo Alvarius ceremonies held with reverence for indigenous lineage and trauma-informed practice.
              </p>
            </div>

            {/* Explore Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-desert-sand/80 uppercase tracking-wider">Explore</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/about" className="text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm">
                  About
                </Link>
                <Link to="/ceremonies" className="text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm">
                  Ceremonies
                </Link>
                <Link to="/preparation" className="text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm">
                  Preparation
                </Link>
                <Link to="/integration" className="text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm">
                  Integration
                </Link>
                <Link to="/faq" className="text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm">
                  FAQ
                </Link>
              </nav>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-desert-sand/80 uppercase tracking-wider">Resources</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/testimonials" className="text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm">
                  Testimonials
                </Link>
                <Link to="/contact" className="text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm">
                  Apply
                </Link>
                <Link to="/support" className="text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm">
                  Support
                </Link>
                <Link to="/privacy" className="text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm">
                  Privacy
                </Link>
              </nav>
            </div>

            {/* Connect Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-desert-sand/80 uppercase tracking-wider">Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:spiritawakeningmedicine@gmail.com"
                  className="block text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm"
                >
                  spiritawakeningmedicine@gmail.com
                </a>
                <a
                  href="https://instagram.com/inner__ascend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-desert-sand/60 hover:text-sacred-gold transition-colors text-sm"
                >
                  @inner__ascend
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
                © {new Date().getFullYear()} Spirit Awakening Medicine
                All rights reserved
              </p>
            </div>

            <div className="text-desert-sand/40 text-xs italic text-center md:text-right">
              <p className="flex items-center gap-2 justify-center md:justify-end">
                Made with <Heart className="w-3 h-3 text-sacred-gold/60 fill-sacred-gold/60" /> for seekers & initiates
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
