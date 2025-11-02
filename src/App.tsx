import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import './i18n';
import { useLanguage } from './contexts/LanguageContext';
import navEN from './translations/navigation/en.json';
import navES from './translations/navigation/es.json';
import navFR from './translations/navigation/fr.json';
import homeEN from './translations/pages/home/en.json';
import homeES from './translations/pages/home/es.json';
import homeFR from './translations/pages/home/fr.json';

const navTranslations = { en: navEN, es: navES, fr: navFR };
const homeTranslations = { en: homeEN, es: homeES, fr: homeFR };
import EventPreview from './components/EventPreview';
import PlacePreview from './components/PlacePreview';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';
import Footer from './components/Footer';
import AboutPageNew from './components/pages/AboutPageNew';
import BufoCeremoniesPage from './components/pages/BufoCeremoniesPage';
import PreparationPage from './components/pages/PreparationPage';
import IntegrationPage from './components/pages/IntegrationPage';
import FAQPage from './components/pages/FAQPage';
import ContactPage from './components/pages/ContactPage';
import TestimonialsPage from './components/pages/TestimonialsPage';
import RetreatsPage from './components/pages/RetreatsPage';
import PricingPage from './components/pages/PricingPage';
import ScrollToTop from './components/ScrollToTop';
import ImagePlaceholder from './components/ImagePlaceholder';
// Old pages - archived (keeping for backwards compatibility)
import ServicesPage from './components/pages/ServicesPage';
import InnerAscendPage from './components/pages/InnerAscendPage';
import ResourcesPage from './components/pages/ResourcesPage';
// Removed old section components - now using visual storytelling approach

// Main Landing Page Component
function LandingPage() {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nav = navTranslations[language];
  const home = homeTranslations[language];

  return (
    <div className="min-h-screen bg-earth-900 text-sacred-white overflow-hidden relative">
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-earth-900/80 border-b border-desert-sage/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <span className="text-xl font-serif text-sacred-gold">
                  Spirit Awakening Medicine
                </span>
              </Link>

              {/* Nav Links - Hidden on mobile */}
              <div className="hidden lg:flex items-center gap-5">
                <Link to="/about" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
                  {nav.about}
                </Link>
                <Link to="/ceremonies" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
                  {nav.ceremonies}
                </Link>
                <Link to="/preparation" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
                  {nav.preparation}
                </Link>
                <Link to="/integration" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
                  {nav.integration}
                </Link>
                <Link to="/retreats" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
                  {nav.retreats}
                </Link>
                <Link to="/pricing" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
                  {nav.pricing}
                </Link>
                <Link to="/testimonials" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
                  {nav.testimonials}
                </Link>
                <Link to="/faq" className="text-desert-sand/80 hover:text-sacred-gold transition-colors text-sm">
                  {nav.faq}
                </Link>
                <Link to="/contact" className="px-6 py-2 bg-sacred-gold text-earth-900 rounded-full font-semibold hover:bg-sacred-amber transition-all text-sm">
                  {nav.apply}
                </Link>
              </div>

              {/* Right Side: Language + Mobile Menu */}
              <div className="flex items-center gap-4">
                {/* Language Toggle */}
                <button
                  onClick={() => setLanguage(language === 'en' ? 'es' : language === 'es' ? 'fr' : 'en')}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-earth-700/30 backdrop-blur-xl border border-desert-sage/30 hover:bg-earth-700/40 transition-all"
                >
                  <Globe className="w-4 h-4 text-sacred-gold" />
                  <span className="text-sm font-medium text-desert-sand">{language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'FR'}</span>
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
                  {nav.about}
                </Link>
                <Link to="/ceremonies" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  {nav.ceremonies}
                </Link>
                <Link to="/preparation" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  {nav.preparation}
                </Link>
                <Link to="/integration" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  {nav.integration}
                </Link>
                <Link to="/retreats" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  {nav.retreats}
                </Link>
                <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  {nav.pricing}
                </Link>
                <Link to="/testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  {nav.testimonials}
                </Link>
                <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-desert-sand/80 hover:text-sacred-gold transition-colors">
                  {nav.faq}
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sacred-gold font-semibold">
                  {nav.apply}
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Full-Screen Hero */}
        <div className="h-screen relative flex items-center justify-center">
          {/* Hero Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/locations/sonoran-desert-sunset.jpg"
              alt="Sonoran Desert landscape at golden hour"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/50 to-earth-900"></div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-sacred-white mb-6 animate-fadeIn leading-tight">
              {home.hero.title}
            </h1>
            <p className="text-2xl md:text-4xl text-sacred-gold/90 font-serif font-light tracking-wide mb-6">
              {home.hero.subtitle}
            </p>
            <p className="text-lg md:text-xl text-desert-sand/90 font-light mb-4">
              {home.hero.tagline}
            </p>
            <p className="text-base md:text-lg text-desert-sand/70 font-light mb-8 max-w-3xl mx-auto">
              {home.hero.features}
            </p>
            <p className="text-sm md:text-base text-desert-sand/60 font-light italic max-w-2xl mx-auto mb-12">
              {home.hero.disclaimer}
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-sacred-gold/90 text-earth-900 rounded-full font-medium text-lg hover:bg-sacred-gold transition-all shadow-lg hover:shadow-xl"
            >
              {home.hero.ctaButton}
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* What is Bufo Alvarius Section */}
        <div className="bg-earth-800 py-48">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="text-4xl text-sacred-gold/40 mb-8">⊹</div>
                <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-8 leading-tight">
                  {home.whatIsBufo.title}
                </h2>
                <p className="text-xl md:text-2xl text-desert-sand/80 leading-relaxed italic max-w-3xl mx-auto">
                  {home.whatIsBufo.subtitle}
                </p>
              </div>

              <div className="space-y-8 text-desert-sand/80 leading-relaxed text-lg max-w-3xl mx-auto">
                <p className="text-xl text-sacred-gold/90 font-serif text-center">
                  {home.whatIsBufo.intro}
                </p>
                <p>
                  {home.whatIsBufo.paragraph1}
                </p>
                <p>
                  {home.whatIsBufo.paragraph2} <span className="text-sacred-gold font-medium">{home.whatIsBufo.paragraph2Highlight}</span> {home.whatIsBufo.paragraph2Cont}
                </p>
                <p className="border-l-2 border-sacred-gold/40 pl-6 italic text-desert-sand/70">
                  "{home.whatIsBufo.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who This Is For / Not For Section */}
        <div className="bg-sacred-cream py-48">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                  {home.whoThisIsFor.title}
                </h2>
                <p className="text-lg text-earth-700/70 italic">
                  {home.whoThisIsFor.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* FOR */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="text-3xl text-sacred-gold">✓</div>
                    <h3 className="text-2xl font-serif text-earth-800">{home.whoThisIsFor.forTitle}</h3>
                  </div>
                  <div className="space-y-4 text-earth-700/80 leading-relaxed">
                    {home.whoThisIsFor.forList.map((item, index) => (
                      <p key={index} className="flex items-start gap-3">
                        <span className="text-sacred-gold mt-1">•</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* NOT FOR */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="text-3xl text-desert-clay">✗</div>
                    <h3 className="text-2xl font-serif text-earth-800">{home.whoThisIsFor.notForTitle}</h3>
                  </div>
                  <div className="space-y-4 text-earth-700/80 leading-relaxed">
                    {home.whoThisIsFor.notForList.map((item, index) => (
                      <p key={index} className="flex items-start gap-3">
                        <span className="text-desert-clay mt-1">•</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center mt-16 max-w-2xl mx-auto">
                <p className="text-lg text-earth-700/70 italic leading-relaxed">
                  "{home.whoThisIsFor.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section 2 - Ceremony Space / Toad Close-up */}
        <div className="h-[60vh] relative overflow-hidden">
          <img
            src="/images/locations/bufo-toad.jpg"
            alt="Bufo Alvarius toad - Sacred medicine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/30 to-earth-900/60"></div>
        </div>

        {/* Three-Phase Process: Preparation → Ceremony → Integration */}
        <div className="bg-white py-48">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="text-4xl text-sacred-gold/40 mb-6">⊹</div>
                <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                  {home.threePhaseJourney.title}
                </h2>
                <p className="text-lg text-earth-700/70 max-w-2xl mx-auto">
                  {home.threePhaseJourney.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12 mb-16">
                {/* Phase 1: Preparation */}
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-4">🐚</div>
                  <h3 className="text-2xl font-serif text-earth-800">{home.threePhaseJourney.preparation.title}</h3>
                  <p className="text-earth-700/70 leading-relaxed">
                    {home.threePhaseJourney.preparation.description}
                  </p>
                  <p className="text-sm text-sacred-gold font-medium">{home.threePhaseJourney.preparation.price}</p>
                </div>

                {/* Phase 2: Ceremony */}
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-4">🔥</div>
                  <h3 className="text-2xl font-serif text-earth-800">{home.threePhaseJourney.ceremony.title}</h3>
                  <p className="text-earth-700/70 leading-relaxed">
                    {home.threePhaseJourney.ceremony.description}
                  </p>
                  <p className="text-sm text-sacred-gold font-medium">{home.threePhaseJourney.ceremony.price}</p>
                </div>

                {/* Phase 3: Integration */}
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-4">🌿</div>
                  <h3 className="text-2xl font-serif text-earth-800">{home.threePhaseJourney.integration.title}</h3>
                  <p className="text-earth-700/70 leading-relaxed">
                    {home.threePhaseJourney.integration.description}
                  </p>
                  <p className="text-sm text-sacred-gold font-medium">{home.threePhaseJourney.integration.price}</p>
                </div>
              </div>

              <div className="text-center max-w-3xl mx-auto border-t border-earth-700/10 pt-12">
                <p className="text-lg text-earth-700/70 italic leading-relaxed" style={{whiteSpace: 'pre-line'}}>
                  "{home.threePhaseJourney.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seri Tribe Lineage & Credibility Section */}
        <div className="relative py-48">
          <div className="absolute inset-0 bg-gradient-to-b from-earth-700 to-earth-900"></div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-4xl text-sacred-gold/60 mb-8">⊛</div>
              <h2 className="text-3xl md:text-5xl font-serif text-sacred-white leading-relaxed mb-12">
                {home.seriLineage.title}<br/>
                {home.seriLineage.subtitle}
              </h2>
              <div className="space-y-6 text-desert-sand/80 leading-relaxed text-lg max-w-3xl mx-auto">
                <p>
                  {home.seriLineage.paragraph1}
                </p>
                <p className="text-desert-sand/70">
                  {home.seriLineage.paragraph2}
                </p>
                <p className="text-sacred-gold/90 italic font-serif text-xl mt-8">
                  "{home.seriLineage.quote}"
                </p>
              </div>
              <div className="mt-12">
                <Link
                  to="/about"
                  className="inline-block text-sacred-gold hover:text-sacred-amber transition-colors text-lg font-medium"
                >
                  {home.seriLineage.link}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section 3 - Mazunte Beach / Nature */}
        <div className="h-[70vh] relative overflow-hidden">
          <img
            src="/images/locations/mazunte-beach-sunset.jpg"
            alt="Mazunte beach at sunset - Oaxaca, Mexico"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 to-earth-900/70 flex items-center justify-center">
            <p className="text-3xl md:text-5xl font-serif text-sacred-white italic text-center px-4 max-w-4xl leading-tight" style={{whiteSpace: 'pre-line'}}>
              "{home.imageQuote.quote}"
            </p>
          </div>
        </div>

        {/* Testimonials - Multiple Voices */}
        <div className="relative py-48">
          <div className="absolute inset-0 bg-earth-800"></div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif text-sacred-white text-center mb-20">
                {home.testimonials.title}
              </h2>

              <div className="space-y-20">
                {home.testimonials.items.map((testimonial, index) => (
                  <div key={index} className="max-w-4xl mx-auto">
                    <p className="text-2xl md:text-3xl font-serif text-desert-sand leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-sacred-gold text-lg">— {testimonial.name}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16">
                <Link
                  to="/testimonials"
                  className="inline-block text-sacred-gold hover:text-sacred-amber transition-colors text-lg font-medium"
                >
                  {home.testimonials.link}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Transparency Section */}
        <div className="bg-sacred-cream py-48">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                  {home.pricingTransparency.title}
                </h2>
                <p className="text-lg text-earth-700/70 italic">
                  {home.pricingTransparency.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* Preparation */}
                <div className="bg-white rounded-2xl p-8 border border-earth-700/10">
                  <div className="text-3xl mb-4 text-center">🐚</div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">{home.pricingTransparency.preparation.title}</h3>
                  <p className="text-earth-700/70 text-center mb-6 leading-relaxed">
                    {home.pricingTransparency.preparation.description}
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-sacred-gold mb-2">{home.pricingTransparency.preparation.price}</div>
                    <div className="text-sm text-earth-700/60">{home.pricingTransparency.preparation.unit}</div>
                  </div>
                </div>

                {/* Ceremony */}
                <div className="bg-white rounded-2xl p-8 border-2 border-sacred-gold/30 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sacred-gold text-earth-900 px-4 py-1 rounded-full text-sm font-medium">
                    {home.pricingTransparency.ceremony.badge}
                  </div>
                  <div className="text-3xl mb-4 text-center">🔥</div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">{home.pricingTransparency.ceremony.title}</h3>
                  <p className="text-earth-700/70 text-center mb-6 leading-relaxed">
                    {home.pricingTransparency.ceremony.description}
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-sacred-gold mb-2">{home.pricingTransparency.ceremony.price}</div>
                    <div className="text-sm text-earth-700/60">{home.pricingTransparency.ceremony.unit}</div>
                  </div>
                  <div className="mt-6 text-center text-sm text-earth-700/60 leading-relaxed">
                    {home.pricingTransparency.ceremony.includes}
                  </div>
                </div>

                {/* Integration */}
                <div className="bg-white rounded-2xl p-8 border border-earth-700/10">
                  <div className="text-3xl mb-4 text-center">🌿</div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">{home.pricingTransparency.integration.title}</h3>
                  <p className="text-earth-700/70 text-center mb-6 leading-relaxed">
                    {home.pricingTransparency.integration.description}
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-sacred-gold mb-2">{home.pricingTransparency.integration.price}</div>
                    <div className="text-sm text-earth-700/60 mb-4">{home.pricingTransparency.integration.unit}</div>
                    <div className="text-lg font-serif text-earth-800 mb-2">{home.pricingTransparency.integration.or}</div>
                    <div className="text-2xl font-serif text-sacred-gold mb-2">{home.pricingTransparency.integration.packagePrice}</div>
                    <div className="text-sm text-earth-700/60">{home.pricingTransparency.integration.packageUnit}</div>
                  </div>
                </div>
              </div>

              <div className="bg-medicine-venom rounded-2xl p-8 max-w-3xl mx-auto">
                <h4 className="text-xl font-serif text-earth-800 mb-4 text-center">{home.pricingTransparency.accessibility.title}</h4>
                <div className="space-y-3 text-earth-700/80 text-center leading-relaxed">
                  {home.pricingTransparency.accessibility.items.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                  <p className="italic text-earth-700/70 pt-4">
                    "{home.pricingTransparency.accessibility.quote}"
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-lg text-earth-700/70 leading-relaxed">
                  <Link to="/faq" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                    {home.pricingTransparency.link}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Application CTA Section */}
        <div className="relative py-48">
          <div className="absolute inset-0 bg-gradient-to-b from-earth-700 to-earth-900"></div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="text-4xl mb-8 text-sacred-gold/60">⊹</div>
              <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
                {home.readyToBegin.title}
              </h2>
              <p className="text-2xl md:text-3xl text-desert-sand/80 font-serif italic mb-8 leading-relaxed">
                "{home.readyToBegin.quote}"
              </p>
              <p className="text-lg text-desert-sand/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                {home.readyToBegin.description}
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
                >
                  {home.readyToBegin.button}
                </Link>
                <p className="text-sm text-desert-sand/60 italic">
                  {home.readyToBegin.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

// Event Route Component
function EventRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <EventPreview eventId={id || ''} language={language} />;
}

// Place Route Component
function PlaceRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <PlacePreview placeId={id || ''} language={language} />;
}

// Main App with Routing
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPageNew />} />
        <Route path="/ceremonies" element={<BufoCeremoniesPage />} />
        <Route path="/preparation" element={<PreparationPage />} />
        <Route path="/integration" element={<IntegrationPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/retreats" element={<RetreatsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Old routes - keeping for backwards compatibility */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/inner-ascend" element={<InnerAscendPage />} />
        <Route path="/collaborations" element={<RetreatsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        {/* Utility routes */}
        <Route path="/event/:id" element={<EventRoute />} />
        <Route path="/place/:id" element={<PlaceRoute />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
