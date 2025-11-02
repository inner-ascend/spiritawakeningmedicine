import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useLanguage } from '../../contexts/LanguageContext';
import pricingEN from '../../translations/pages/pricing/en.json';
import pricingES from '../../translations/pages/pricing/es.json';
import pricingFR from '../../translations/pages/pricing/fr.json';

const translations = { en: pricingEN, es: pricingES, fr: pricingFR };

export default function PricingPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/locations/sonoran-desert-sunset.jpg"
            alt="Sonoran Desert landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 via-earth-900/60 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-5xl text-sacred-gold/60 mb-8">⊹</div>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-sacred-gold/90 font-serif font-light mb-6">
            {t.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto mb-8">
            {t.hero.description}
          </p>
          <p className="text-base text-desert-sand/70 italic max-w-2xl mx-auto">
            "{t.hero.quote}"
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Journey Packages - Featured */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-4xl text-sacred-gold/40 mb-6">⊹</div>
              <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                {t.journeyPackages.title}
              </h2>
              <p className="text-lg text-earth-700/70 max-w-3xl mx-auto">
                {t.journeyPackages.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Essential Journey */}
              <div className="bg-white rounded-2xl p-8 border border-earth-700/10">
                <h3 className="text-2xl font-serif text-earth-800 mb-4">{t.journeyPackages.essential.title}</h3>
                <div className="text-4xl font-serif text-sacred-gold mb-4">{t.journeyPackages.essential.price}</div>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {t.journeyPackages.essential.description}
                </p>
                <div className="space-y-3 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.journeyPackages.essential.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.journeyPackages.essential.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.journeyPackages.essential.item3}</span>
                  </p>
                </div>
              </div>

              {/* Complete Journey - Recommended */}
              <div className="bg-white rounded-2xl p-8 border-2 border-sacred-gold/30 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sacred-gold text-earth-900 px-4 py-1 rounded-full text-sm font-medium">
                  {t.journeyPackages.complete.badge}
                </div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4">{t.journeyPackages.complete.title}</h3>
                <div className="text-4xl font-serif text-sacred-gold mb-4">{t.journeyPackages.complete.price}</div>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {t.journeyPackages.complete.description}
                </p>
                <div className="space-y-3 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.journeyPackages.complete.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.journeyPackages.complete.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.journeyPackages.complete.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.journeyPackages.complete.item4}</span>
                  </p>
                </div>
              </div>

              {/* Deep Work Container */}
              <div className="bg-white rounded-2xl p-8 border border-earth-700/10">
                <h3 className="text-2xl font-serif text-earth-800 mb-4">{t.journeyPackages.deepWork.title}</h3>
                <div className="text-4xl font-serif text-sacred-gold mb-4">{t.journeyPackages.deepWork.price}</div>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {t.journeyPackages.deepWork.description}
                </p>
                <div className="space-y-3 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.journeyPackages.deepWork.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.journeyPackages.deepWork.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.journeyPackages.deepWork.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.journeyPackages.deepWork.item4}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-earth-700/70 italic">
                "{t.journeyPackages.note}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Services Breakdown */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                {t.individualServices.title}
              </h2>
              <p className="text-lg text-earth-700/70">
                {t.individualServices.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Preparation */}
              <div className="bg-medicine-venom rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">{t.individualServices.preparation.title}</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-serif text-sacred-gold mb-2">{t.individualServices.preparation.price}</div>
                  <div className="text-sm text-earth-700/60">{t.individualServices.preparation.unit}</div>
                </div>
                <p className="text-earth-700/70 text-center mb-6 leading-relaxed">
                  {t.individualServices.preparation.description}
                </p>
                <div className="space-y-2 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.preparation.item1}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.preparation.item2}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.preparation.item3}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.preparation.item4}</span>
                  </p>
                </div>
              </div>

              {/* Ceremony */}
              <div className="bg-medicine-venom rounded-2xl p-8 border-2 border-sacred-gold/30 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sacred-gold text-earth-900 px-4 py-1 rounded-full text-sm font-medium">
                  {t.individualServices.ceremony.badge}
                </div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">{t.individualServices.ceremony.title}</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-serif text-sacred-gold mb-2">{t.individualServices.ceremony.price}</div>
                  <div className="text-sm text-earth-700/60">{t.individualServices.ceremony.unit}</div>
                </div>
                <p className="text-earth-700/70 text-center mb-6 leading-relaxed">
                  {t.individualServices.ceremony.description}
                </p>
                <div className="space-y-2 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.ceremony.item1}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.ceremony.item2}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.ceremony.item3}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.ceremony.item4}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.ceremony.item5}</span>
                  </p>
                </div>
              </div>

              {/* Integration */}
              <div className="bg-medicine-venom rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">{t.individualServices.integration.title}</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-serif text-sacred-gold mb-2">{t.individualServices.integration.price}</div>
                  <div className="text-sm text-earth-700/60 mb-3">{t.individualServices.integration.unit}</div>
                  <div className="text-lg font-serif text-earth-800 mb-2">{t.individualServices.integration.or}</div>
                  <div className="text-2xl font-serif text-sacred-gold mb-2">{t.individualServices.integration.packagePrice}</div>
                  <div className="text-sm text-earth-700/60">{t.individualServices.integration.packageUnit}</div>
                </div>
                <p className="text-earth-700/70 text-center mb-6 leading-relaxed">
                  {t.individualServices.integration.description}
                </p>
                <div className="space-y-2 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.integration.item1}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.integration.item2}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.integration.item3}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.individualServices.integration.item4}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Retreat Options */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                {t.retreats.title}
              </h2>
              <p className="text-lg text-earth-700/70">
                {t.retreats.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Bufo Retreat Containers */}
              <div className="bg-white rounded-2xl p-10">
                <h3 className="text-3xl font-serif text-earth-800 mb-4">{t.retreats.bufoRetreats.title}</h3>
                <div className="text-4xl font-serif text-sacred-gold mb-4">{t.retreats.bufoRetreats.price}</div>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {t.retreats.bufoRetreats.description}
                </p>
                <div className="space-y-3 text-earth-700/80">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.retreats.bufoRetreats.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.retreats.bufoRetreats.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.retreats.bufoRetreats.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.retreats.bufoRetreats.item4}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.retreats.bufoRetreats.item5}</span>
                  </p>
                </div>
              </div>

              {/* Integration Intensives */}
              <div className="bg-white rounded-2xl p-10">
                <h3 className="text-3xl font-serif text-earth-800 mb-4">{t.retreats.integrationIntensives.title}</h3>
                <div className="text-4xl font-serif text-sacred-gold mb-4">{t.retreats.integrationIntensives.price}</div>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {t.retreats.integrationIntensives.description}
                </p>
                <div className="space-y-3 text-earth-700/80">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.retreats.integrationIntensives.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.retreats.integrationIntensives.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.retreats.integrationIntensives.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">✓</span>
                    <span>{t.retreats.integrationIntensives.item4}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/retreats"
                className="inline-block text-sacred-gold hover:text-sacred-amber transition-colors text-lg font-medium"
              >
                {t.retreats.link}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility & Payment Methods */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                {t.accessibility.title}
              </h2>
              <p className="text-lg text-earth-700/70">
                {t.accessibility.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Sliding Scale */}
              <div className="bg-medicine-venom rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-earth-800 mb-6">{t.accessibility.slidingScale.title}</h3>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.accessibility.slidingScale.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.accessibility.slidingScale.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.accessibility.slidingScale.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.accessibility.slidingScale.item4}</span>
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-medicine-venom rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-earth-800 mb-6">{t.accessibility.paymentMethods.title}</h3>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.accessibility.paymentMethods.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.accessibility.paymentMethods.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.accessibility.paymentMethods.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold">•</span>
                    <span>{t.accessibility.paymentMethods.item4}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-earth-800 rounded-2xl p-8 text-center">
              <p className="text-2xl md:text-3xl font-serif text-desert-sand/90 italic leading-relaxed">
                "{t.accessibility.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ & CTA */}
      <div className="relative py-48">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800 to-earth-900"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl text-sacred-gold/60 mb-8">⊹</div>
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-8">
              {t.cta.title}
            </h2>
            <p className="text-xl text-desert-sand/80 leading-relaxed mb-12">
              {t.cta.description}
            </p>

            <div className="space-y-6 mb-12">
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                {t.cta.button}
              </Link>
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-desert-sand/70">
                <Link to="/faq" className="hover:text-sacred-gold transition-colors">
                  {t.cta.faqLink}
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link to="/preparation" className="hover:text-sacred-gold transition-colors">
                  {t.cta.preparationLink}
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link to="/integration" className="hover:text-sacred-gold transition-colors">
                  {t.cta.integrationLink}
                </Link>
              </div>
            </div>

            <p className="text-sm text-desert-sand/60 italic">
              {t.cta.disclaimer}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
