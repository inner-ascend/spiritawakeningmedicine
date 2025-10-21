import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import './i18n';
import { useLanguage } from './contexts/LanguageContext';
import navEN from './translations/navigation/en.json';
import navES from './translations/navigation/es.json';
import navFR from './translations/navigation/fr.json';
import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';
import caTranslations from './translations/ca.json';

const navTranslations = { en: navEN, es: navES, fr: navFR };
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
import ScrollToTop from './components/ScrollToTop';
import ImagePlaceholder from './components/ImagePlaceholder';
// Old pages - archived (keeping for backwards compatibility)
import ServicesPage from './components/pages/ServicesPage';
import InnerAscendPage from './components/pages/InnerAscendPage';
import ResourcesPage from './components/pages/ResourcesPage';
import CollaborationsPage from './components/pages/CollaborationsPage';
// Removed old section components - now using visual storytelling approach

// Main Landing Page Component
function LandingPage() {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nav = navTranslations[language];
  const t = language === 'es' ? esTranslations : language === 'ca' ? caTranslations : enTranslations;

  return (
    <div className="min-h-screen bg-earth-900 text-sacred-white overflow-hidden relative">
      <div className="relative z-10">
        {/* Navigation */}
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
          {/* Simple Desert Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-desert-dusk via-earth-700 to-earth-900"></div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-sacred-white mb-6 animate-fadeIn leading-tight">
              Spirit Awakening Medicine
            </h1>
            <p className="text-2xl md:text-4xl text-sacred-gold/90 font-serif font-light tracking-wide mb-6">
              Open the Gates of Remembrance
            </p>
            <p className="text-lg md:text-xl text-desert-sand/90 font-light mb-4">
              The Sacred Medicine of Bufo Alvarius
            </p>
            <p className="text-base md:text-lg text-desert-sand/70 font-light mb-8 max-w-3xl mx-auto">
              Ego Dissolution | Non-Dual Consciousness | Divine Remembrance
            </p>
            <p className="text-sm md:text-base text-desert-sand/60 font-light italic max-w-2xl mx-auto mb-12">
              [Not for everyone. Only for those who feel the call.]
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-sacred-gold/90 text-earth-900 rounded-full font-medium text-lg hover:bg-sacred-gold transition-all shadow-lg hover:shadow-xl"
            >
              Begin with Discernment
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Full-Width Image Section 1 - Desert/Medicine Setting */}
        <div className="h-[70vh] relative overflow-hidden">
          <ImagePlaceholder
            aspectRatio="21/9"
            altText="Sonoran Desert landscape at golden hour"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 to-earth-900/40"></div>
        </div>

        {/* What is Bufo Alvarius Section */}
        <div className="bg-earth-800 py-48">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="text-4xl text-sacred-gold/40 mb-8">⊹</div>
                <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-8 leading-tight">
                  The Sacred Medicine of Bufo Alvarius
                </h2>
                <p className="text-xl md:text-2xl text-desert-sand/80 leading-relaxed italic max-w-3xl mx-auto">
                  Die before you die
                </p>
              </div>

              <div className="space-y-8 text-desert-sand/80 leading-relaxed text-lg max-w-3xl mx-auto">
                <p className="text-xl text-sacred-gold/90 font-serif text-center">
                  The most potent and profound entheogenic compound on Earth
                </p>
                <p>
                  Bufo Alvarius—5-MeO-DMT—is the only substance that can reliably introduce individuals
                  to a state of full non-dual awareness, override the energetic structure of the ego,
                  and reveal the unitary nature of reality.
                </p>
                <p>
                  This is not a psychedelic. It is a sacred teacher of death and pure remembrance.
                  The effects begin within <span className="text-sacred-gold font-medium">seconds</span> of inhalation.
                  Complete ego dissolution. Non-dual consciousness. The remembrance of what you've always been.
                </p>
                <p className="border-l-2 border-sacred-gold/40 pl-6 italic text-desert-sand/70">
                  "This is not an offering we promote publicly. If you are here, you've been guided,
                  invited, or felt the call. The toad is not for everyone, and it is not a shortcut.
                  This path requires humility, surrender, and integration."
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
                  This Medicine Is For...
                </h2>
                <p className="text-lg text-earth-700/70 italic">
                  (And who it's not for)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* FOR */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="text-3xl text-sacred-gold">✓</div>
                    <h3 className="text-2xl font-serif text-earth-800">This work is FOR:</h3>
                  </div>
                  <div className="space-y-4 text-earth-700/80 leading-relaxed">
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">•</span>
                      <span>Those ready to die before they die</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">•</span>
                      <span>Those who've done deep inner work and feel called to complete something</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">•</span>
                      <span>Those seeking death of illusion, not an experience</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">•</span>
                      <span>Those ready to surrender and integrate</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">•</span>
                      <span>Seekers tired of seeking</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">•</span>
                      <span>Those who can no longer pretend</span>
                    </p>
                  </div>
                </div>

                {/* NOT FOR */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="text-3xl text-desert-clay">✗</div>
                    <h3 className="text-2xl font-serif text-earth-800">This work is NOT for:</h3>
                  </div>
                  <div className="space-y-4 text-earth-700/80 leading-relaxed">
                    <p className="flex items-start gap-3">
                      <span className="text-desert-clay mt-1">•</span>
                      <span>Those with untreated trauma or psychosis</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-desert-clay mt-1">•</span>
                      <span>Spiritual tourists or peak-seekers</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-desert-clay mt-1">•</span>
                      <span>Those expecting to be "fixed"</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-desert-clay mt-1">•</span>
                      <span>Those refusing integration</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-desert-clay mt-1">•</span>
                      <span>Those wanting quick fixes</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-desert-clay mt-1">•</span>
                      <span>Recreational seekers</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-16 max-w-2xl mx-auto">
                <p className="text-lg text-earth-700/70 italic leading-relaxed">
                  "You're not broken. You're not lost. You're initiating."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section 2 - Ceremony Space / Toad Close-up */}
        <div className="h-[60vh] relative overflow-hidden">
          <ImagePlaceholder
            aspectRatio="21/9"
            altText="Bufo Alvarius toad - Sacred medicine"
            className="w-full h-full"
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
                  The Three-Phase Journey
                </h2>
                <p className="text-lg text-earth-700/70 max-w-2xl mx-auto">
                  Sacred medicine work requires preparation, presence, and integration.
                  This is not a shortcut. This is the work of a lifetime.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12 mb-16">
                {/* Phase 1: Preparation */}
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-4">🐚</div>
                  <h3 className="text-2xl font-serif text-earth-800">Preparation</h3>
                  <p className="text-earth-700/70 leading-relaxed">
                    1-2 sessions to assess emotional readiness, anchor your nervous system,
                    and create a sacred container for what's to come.
                  </p>
                  <p className="text-sm text-sacred-gold font-medium">€111 per session</p>
                </div>

                {/* Phase 2: Ceremony */}
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-4">🔥</div>
                  <h3 className="text-2xl font-serif text-earth-800">Ceremony</h3>
                  <p className="text-earth-700/70 leading-relaxed">
                    The sacred passage. Held in small, intimate settings (2-4 people max)
                    in Mazunte, Oaxaca, Mexico. Full energetic holding and support.
                  </p>
                  <p className="text-sm text-sacred-gold font-medium">€300-500 per person</p>
                </div>

                {/* Phase 3: Integration */}
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-4">🌿</div>
                  <h3 className="text-2xl font-serif text-earth-800">Integration</h3>
                  <p className="text-earth-700/70 leading-relaxed">
                    Where the real work happens. Post-journey support, meaning-making,
                    and embodying the remembrance into your daily life.
                  </p>
                  <p className="text-sm text-sacred-gold font-medium">€88-111 per session</p>
                </div>
              </div>

              <div className="text-center max-w-3xl mx-auto border-t border-earth-700/10 pt-12">
                <p className="text-lg text-earth-700/70 italic leading-relaxed">
                  "Insight without integration is just spiritual entertainment.<br/>
                  This isn't a quick fix. This isn't a weekend workshop.<br/>
                  This is the work of a lifetime—compressed into the time your soul needs."
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
                Nina & Astral<br/>
                Initiated by Seri Tribe Elders in the Sonoran Desert, Mexico
              </h2>
              <div className="space-y-6 text-desert-sand/80 leading-relaxed text-lg max-w-3xl mx-auto">
                <p>
                  This work is held with deep reverence for the indigenous lineage from which it comes.
                  Nina and Astral have been initiated as daughter and son of the Seri Tribe by elders in the desert of Sonora, Mexico.
                </p>
                <p className="text-desert-sand/70">
                  Years of training in trauma-informed approaches, energy healing, and the sacred art
                  of holding space for ego dissolution. Guest speakers in facilitator training programs.
                  Hundreds of ceremonies guided with safety, presence, and deep respect.
                </p>
                <p className="text-sacred-gold/90 italic font-serif text-xl mt-8">
                  "We have sat with the medicine. We have died, dissolved, returned, and broken again.
                  We hold this work with reverence. If you feel called, let's walk slowly.
                  This is sacred territory—not a service."
                </p>
              </div>
              <div className="mt-12">
                <Link
                  to="/about"
                  className="inline-block text-sacred-gold hover:text-sacred-amber transition-colors text-lg font-medium"
                >
                  Read our story →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section 3 - Mazunte Beach / Nature */}
        <div className="h-[70vh] relative overflow-hidden">
          <ImagePlaceholder
            aspectRatio="21/9"
            altText="Mazunte beach at sunset - Oaxaca, Mexico"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 to-earth-900/70 flex items-center justify-center">
            <p className="text-3xl md:text-5xl font-serif text-sacred-white italic text-center px-4 max-w-4xl leading-tight">
              "Die before you die, and discover<br/>there is no death."
            </p>
          </div>
        </div>

        {/* Testimonials - Multiple Voices */}
        <div className="relative py-48">
          <div className="absolute inset-0 bg-earth-800"></div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif text-sacred-white text-center mb-20">
                Voices From The Journey
              </h2>

              <div className="space-y-20">
                {/* Testimonial 1 - Holly */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-2xl md:text-3xl font-serif text-desert-sand leading-relaxed mb-8 italic">
                    "The healings I went through with Astral were deep and transformative. Through his practice,
                    he is able to prise issues from the mind and release them through the heart. His compassion
                    and belief allows vulnerability in the unknown, acceptance of ugly realities and enables you
                    to rise above blocks we accumulate along with our lives. He showed me how to love myself,
                    that experience is strength, and our power runs further than this body."
                  </p>
                  <p className="text-sacred-gold text-lg">— Holly</p>
                </div>

                {/* Testimonial 2 - Jon */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-2xl md:text-3xl font-serif text-desert-sand leading-relaxed mb-8 italic">
                    "Astral gave me a gift, by healing wounds that had been present in me since I was a child.
                    We cleared issues that were causing me to have weird dynamics with women. He set me free
                    and I'll never be the same. He made me a man. I feel confident in myself and my abilities now."
                  </p>
                  <p className="text-sacred-gold text-lg">— Jon</p>
                </div>

                {/* Testimonial 3 - Nina */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-2xl md:text-3xl font-serif text-desert-sand leading-relaxed mb-8 italic">
                    "I could feel his presence in the higher realms—helping me to go deeper into the quest.
                    I felt secure, held, seen, and fully accepted so I could trust and surrender. I feel so young!
                    Clear and joyful, like a child. I accept where I'm at and know myself better."
                  </p>
                  <p className="text-sacred-gold text-lg">— Nina</p>
                </div>

                {/* Testimonial 4 - Hazel */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-2xl md:text-3xl font-serif text-desert-sand leading-relaxed mb-8 italic">
                    "The work with Astral was one of the most profound transformations I have ever had.
                    He takes you straight into the subconscious mind so together you find the cause of your
                    limiting beliefs and clear them. This is the healing of the future, in the 5th dimension,
                    working in the quantum field that enables healing to be instantaneous."
                  </p>
                  <p className="text-sacred-gold text-lg">— Hazel</p>
                </div>
              </div>

              <div className="text-center mt-16">
                <Link
                  to="/testimonials"
                  className="inline-block text-sacred-gold hover:text-sacred-amber transition-colors text-lg font-medium"
                >
                  Read more testimonials →
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
                  Investment & Accessibility
                </h2>
                <p className="text-lg text-earth-700/70 italic">
                  Transparent pricing. Sliding scale available.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* Preparation */}
                <div className="bg-white rounded-2xl p-8 border border-earth-700/10">
                  <div className="text-3xl mb-4 text-center">🐚</div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">Preparation</h3>
                  <p className="text-earth-700/70 text-center mb-6 leading-relaxed">
                    1-2 sessions required before ceremony
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-sacred-gold mb-2">€111</div>
                    <div className="text-sm text-earth-700/60">per session</div>
                  </div>
                </div>

                {/* Ceremony */}
                <div className="bg-white rounded-2xl p-8 border-2 border-sacred-gold/30 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sacred-gold text-earth-900 px-4 py-1 rounded-full text-sm font-medium">
                    Sacred Passage
                  </div>
                  <div className="text-3xl mb-4 text-center">🔥</div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">Ceremony</h3>
                  <p className="text-earth-700/70 text-center mb-6 leading-relaxed">
                    2-4 people max, Mazunte, Mexico
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-sacred-gold mb-2">€300-500</div>
                    <div className="text-sm text-earth-700/60">per person</div>
                  </div>
                  <div className="mt-6 text-center text-sm text-earth-700/60 leading-relaxed">
                    Includes pre-ceremony consultation, ceremony, integration within 48hrs, 2-week follow-up
                  </div>
                </div>

                {/* Integration */}
                <div className="bg-white rounded-2xl p-8 border border-earth-700/10">
                  <div className="text-3xl mb-4 text-center">🌿</div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">Integration</h3>
                  <p className="text-earth-700/70 text-center mb-6 leading-relaxed">
                    Post-journey support
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-sacred-gold mb-2">€88-111</div>
                    <div className="text-sm text-earth-700/60 mb-4">per session</div>
                    <div className="text-lg font-serif text-earth-800 mb-2">or</div>
                    <div className="text-2xl font-serif text-sacred-gold mb-2">€300-400</div>
                    <div className="text-sm text-earth-700/60">4-session package</div>
                  </div>
                </div>
              </div>

              <div className="bg-medicine-venom rounded-2xl p-8 max-w-3xl mx-auto">
                <h4 className="text-xl font-serif text-earth-800 mb-4 text-center">Accessibility</h4>
                <div className="space-y-3 text-earth-700/80 text-center leading-relaxed">
                  <p>Sliding scale available based on financial situation</p>
                  <p>BIPOC and single parent discounts</p>
                  <p>Payment plans offered</p>
                  <p className="italic text-earth-700/70 pt-4">
                    "No one is ever turned away for lack of funds when the call is genuine."
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-lg text-earth-700/70 leading-relaxed">
                  <Link to="/faq" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                    Read FAQ & Safety Information →
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
                Ready to Begin?
              </h2>
              <p className="text-2xl md:text-3xl text-desert-sand/80 font-serif italic mb-8 leading-relaxed">
                "This work is never sold. Only offered."
              </p>
              <p className="text-lg text-desert-sand/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                If you feel the call, begin with the application process. This is an invitation to discernment—
                for both of us. Not everyone is a fit. And that's sacred.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
                >
                  Begin Your Application
                </Link>
                <p className="text-sm text-desert-sand/60 italic">
                  Private application · Discernment process · Medical screening required
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
