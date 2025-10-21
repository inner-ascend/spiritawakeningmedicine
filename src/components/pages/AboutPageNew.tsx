import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImagePlaceholder from '../ImagePlaceholder';
import { useLanguage } from '../../contexts/LanguageContext';
import aboutEN from '../../translations/pages/about/en.json';
import aboutES from '../../translations/pages/about/es.json';
import aboutFR from '../../translations/pages/about/fr.json';

const translations = { en: aboutEN, es: aboutES, fr: aboutFR };

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <ImagePlaceholder
            aspectRatio="21/9"
            altText="Sonoran Desert at sunset"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-5xl text-sacred-gold/60 mb-8">⊛</div>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-desert-sand/80 font-serif italic leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* The Call */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.call.title}
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg">
              <p>
                {t.call.p1}
              </p>

              <p>
                {t.call.p2}
              </p>

              <p>
                {t.call.p3}
              </p>

              <p className="text-2xl font-serif text-sacred-gold italic text-center my-12">
                {t.call.quote1}
              </p>

              <p>
                {t.call.p4}
              </p>

              <p>
                {t.call.p5}
              </p>

              <p>
                {t.call.p6}
              </p>

              <p className="border-l-4 border-sacred-gold/40 pl-6 italic text-earth-700/70">
                {t.call.p7}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portrait Images - Nina & Astral */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <ImagePlaceholder
              aspectRatio="3/4"
              altText="Nina - Co-facilitator portrait"
              className="shadow-lg"
              caption="Nina"
            />
            <ImagePlaceholder
              aspectRatio="3/4"
              altText="Astral - Co-facilitator portrait"
              className="shadow-lg"
              caption="Astral"
            />
          </div>
        </div>
      </div>

      {/* The Initiation */}
      <div className="relative py-48">
        <div className="absolute inset-0 bg-gradient-to-b from-earth-700 to-earth-900"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-12 text-center">
              {t.lineage.title}
            </h2>

            <div className="space-y-8 text-desert-sand/80 leading-relaxed text-lg">
              <p className="text-2xl font-serif text-sacred-gold text-center mb-8">
                {t.lineage.subtitle}
              </p>

              <p>
                {t.lineage.p1}
              </p>

              <p>
                {t.lineage.p2}
              </p>

              <p>
                {t.lineage.p3}
              </p>

              <p className="border-l-4 border-sacred-gold/40 pl-6 italic">
                {t.lineage.p4}
              </p>

              <p>
                {t.lineage.p5} <strong className="text-sacred-white">{t.lineage.p5Strong}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Training & Approach */}
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              {t.training.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🌿</span>
                    {t.training.innerWork.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.training.innerWork.description}
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🧠</span>
                    {t.training.traumaInformed.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.training.traumaInformed.description}
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    {t.training.energyHealing.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.training.energyHealing.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🎓</span>
                    {t.training.guestSpeaker.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.training.guestSpeaker.description}
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🔄</span>
                    {t.training.continuousLearning.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.training.continuousLearning.description}
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">💝</span>
                    {t.training.ceremonies.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.training.ceremonies.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-earth-700/80 leading-relaxed text-center italic">
                "{t.training.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* My Personal Journey with Medicine */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.journey.title}
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg">
              <p>
                <strong className="text-earth-800">{t.journey.p1}</strong>{t.journey.p1Strong}
              </p>

              <p>
                {t.journey.p2}
              </p>

              <p>
                {t.journey.p3}
              </p>

              <p className="text-2xl font-serif text-sacred-gold italic text-center my-12">
                "{t.journey.quote}"
              </p>

              <p>
                {t.journey.p4}
              </p>

              <p className="border-l-4 border-sacred-gold/40 pl-6 italic text-earth-700/70">
                {t.journey.p5}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why I Do This Work */}
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.why.title}
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg">
              <p>
                {t.why.p1}
              </p>

              <p>
                {t.why.p2}
              </p>

              <p>
                {t.why.p3}
              </p>

              <p className="text-2xl font-serif text-sacred-gold text-center my-12">
                {t.why.quote}
              </p>

              <p>
                <strong className="text-earth-800">{t.why.p4}</strong>{t.why.p4Strong}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Quote & CTA */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/70 to-earth-900/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl text-sacred-gold/60 mb-12">⊛</div>

            <blockquote className="space-y-8 text-desert-sand/90 leading-relaxed text-xl md:text-2xl font-serif italic mb-16">
              <p>
                "{t.cta.quote1}
              </p>
              <p>
                {t.cta.quote2}
              </p>
              <p className="text-sacred-gold/90">
                {t.cta.quote3}"
              </p>
            </blockquote>

            <div className="space-y-6">
              <Link
                to="/ceremonies"
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                {t.cta.button}
              </Link>
              <p className="text-desert-sand/60 text-sm">
                {t.cta.explore}
                <Link to="/preparation" className="text-sacred-gold hover:text-sacred-amber transition-colors ml-2">
                  {t.cta.preparation}
                </Link>
                <span className="mx-2">·</span>
                <Link to="/integration" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  {t.cta.integration}
                </Link>
                <span className="mx-2">·</span>
                <Link to="/faq" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  {t.cta.faq}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
