import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the one-pager (home page)
  const isOnePager = location.pathname === '/';

  // Handle smooth scroll for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (isOnePager) {
      e.preventDefault();
      const element = document.querySelector(anchor);
      if (element) {
        const navHeight = 80; // Height of fixed nav
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth'
        });
      }
      setMobileMenuOpen(false);
    }
  };

  // Navigation items for one-pager (anchor links)
  const onePageNavItems = [
    { label: 'About', href: '#about', color: 'hover:text-desert-clay' },
    { label: 'Ceremonies', href: '#ceremonies', color: 'hover:text-sacred-purple' },
    { label: 'Retreats', href: '#retreats', color: 'hover:text-ocean-coral' },
    { label: 'Pricing', href: '#pricing', color: 'hover:text-sacred-gold' },
    { label: 'FAQ', href: '#faq', color: 'hover:text-jungle-sage' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-earth-900/80 border-b border-desert-sage/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {isOnePager ? (
            <a
              href="#home"
              onClick={(e) => handleAnchorClick(e, '#home')}
              className="flex items-center gap-3"
            >
              <span className="text-xl font-serif text-sacred-gold">
                Inner Ascend
              </span>
            </a>
          ) : (
            <Link to="/" className="flex items-center gap-3">
              <span className="text-xl font-serif text-sacred-gold">
                Inner Ascend
              </span>
            </Link>
          )}

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-5">
            {isOnePager ? (
              // One-pager anchor navigation
              <>
                {onePageNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={`text-desert-sand/80 ${item.color} transition-colors text-sm cursor-pointer`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="px-6 py-2 bg-sacred-gold text-earth-900 rounded-full font-semibold hover:bg-sacred-amber transition-all text-sm cursor-pointer"
                >
                  Contact
                </a>
              </>
            ) : (
              // Multi-page navigation (for standalone pages)
              <>
                <Link to="/" className="text-desert-sand/80 hover:text-desert-clay transition-colors text-sm">
                  Home
                </Link>
                <Link to="/about" className="text-desert-sand/80 hover:text-desert-clay transition-colors text-sm">
                  About
                </Link>
                <Link to="/ceremonies" className="text-desert-sand/80 hover:text-sacred-purple transition-colors text-sm">
                  Ceremonies
                </Link>
                <Link to="/retreats" className="text-desert-sand/80 hover:text-ocean-coral transition-colors text-sm">
                  Retreats
                </Link>
                <Link to="/pricing" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
                  Pricing
                </Link>
                <Link to="/contact" className="px-6 py-2 bg-sacred-gold text-earth-900 rounded-full font-semibold hover:bg-sacred-amber transition-all text-sm">
                  Contact
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-desert-sand hover:text-sacred-gold transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-desert-sage/20">
            {isOnePager ? (
              // One-pager mobile anchor navigation
              <>
                {onePageNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="block py-2 text-sacred-gold font-semibold cursor-pointer"
                >
                  Contact
                </a>
              </>
            ) : (
              // Multi-page mobile navigation
              <>
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  Home
                </Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  About
                </Link>
                <Link to="/ceremonies" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  Ceremonies
                </Link>
                <Link to="/retreats" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  Retreats
                </Link>
                <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  Pricing
                </Link>
                <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  FAQ
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sacred-gold font-semibold">
                  Contact
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
