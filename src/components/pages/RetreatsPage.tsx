import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImagePlaceholder from '../ImagePlaceholder';
import { useLanguage } from '../../contexts/LanguageContext';
import retreatsEN from '../../translations/pages/retreats/en.json';
import retreatsES from '../../translations/pages/retreats/es.json';
import retreatsFR from '../../translations/pages/retreats/fr.json';

const translations = { en: retreatsEN, es: retreatsES, fr: retreatsFR };

export default function RetreatsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/locations/mazunte-beach-sunset.jpg"
            alt="Retreat space in Mazunte with ocean view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/50 to-earth-900"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-5xl text-sacred-gold/60 mb-8">⊹</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-sacred-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-desert-sand/90 font-serif italic leading-relaxed max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bufo Retreat Containers - Section 1 */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Left */}
            <div>
              <div className="relative shadow-2xl">
                <img
                  src="/images/locations/ceremony-space-mazunte.jpg"
                  alt="Retreat ceremony space in nature"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>

            {/* Text Right */}
            <div className="space-y-8">
              <div>
                <div className="text-4xl text-sacred-gold/40 mb-4">🌿</div>
                <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                  {t.bufoRetreats.title}
                </h2>
                <p className="text-xl text-earth-700/80 leading-relaxed italic mb-8">
                  {t.bufoRetreats.subtitle}
                </p>
              </div>

              <div className="space-y-6 text-lg text-earth-700/80 leading-relaxed">
                <p>
                  {t.bufoRetreats.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">{t.bufoRetreats.feature1Title}</strong> {t.bufoRetreats.feature1}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">{t.bufoRetreats.feature2Title}</strong> {t.bufoRetreats.feature2}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">{t.bufoRetreats.feature3Title}</strong> {t.bufoRetreats.feature3}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">{t.bufoRetreats.feature4Title}</strong> {t.bufoRetreats.feature4}</span>
                  </div>
                </div>

                <div className="bg-medicine-venom rounded-xl p-6 mt-8">
                  <p className="text-earth-800"><strong>{t.bufoRetreats.investment}</strong> {t.bufoRetreats.investmentPrice}</p>
                  <p className="text-sm text-earth-700/70 mt-2">{t.bufoRetreats.investmentDetails}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Intensives - Section 2 */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Left */}
            <div className="space-y-8 lg:order-1">
              <div>
                <div className="text-4xl text-sacred-gold/40 mb-4">🔥</div>
                <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                  {t.integrationIntensives.title}
                </h2>
                <p className="text-xl text-earth-700/80 leading-relaxed italic mb-8">
                  {t.integrationIntensives.subtitle}
                </p>
              </div>

              <div className="space-y-6 text-lg text-earth-700/80 leading-relaxed">
                <p>
                  {t.integrationIntensives.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">{t.integrationIntensives.feature1Title}</strong> {t.integrationIntensives.feature1}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">{t.integrationIntensives.feature2Title}</strong> {t.integrationIntensives.feature2}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">{t.integrationIntensives.feature3Title}</strong> {t.integrationIntensives.feature3}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">{t.integrationIntensives.feature4Title}</strong> {t.integrationIntensives.feature4}</span>
                  </div>
                </div>

                <div className="bg-medicine-venom rounded-xl p-6 mt-8">
                  <p className="text-earth-800"><strong>{t.integrationIntensives.investment}</strong> {t.integrationIntensives.investmentPrice}</p>
                  <p className="text-sm text-earth-700/70 mt-2">{t.integrationIntensives.investmentDetails}</p>
                </div>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:order-2">
              <div className="relative shadow-2xl">
                <img
                  src="/images/locations/mazunte-beach-sunset.jpg"
                  alt="Integration circle with participants"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Image Break */}
      <div className="h-[70vh] relative overflow-hidden">
        <img
          src="/images/locations/mazunte-beach-sunset.jpg"
          alt="Mazunte beach at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 to-earth-900/60"></div>
      </div>

      {/* Collaborations Section */}
      <div className="bg-earth-800 py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Left */}
            <div>
              <div className="relative shadow-2xl">
                <img
                  src="/images/portraits/nina-astral-together.jpg"
                  alt="Collaborative retreat facilitation"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>

            {/* Text Right */}
            <div className="space-y-8">
              <div>
                <div className="text-4xl text-sacred-gold/60 mb-4">⊛</div>
                <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
                  {t.collaborations.title}
                </h2>
                <p className="text-xl text-desert-sand/80 leading-relaxed italic mb-8">
                  {t.collaborations.subtitle}
                </p>
              </div>

              <div className="space-y-6 text-lg text-desert-sand/80 leading-relaxed">
                <p>
                  {t.collaborations.description}
                </p>

                <h3 className="text-2xl font-serif text-sacred-gold pt-4">{t.collaborations.whatWeOffer}</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-sacred-white">{t.collaborations.offer1Title}</strong> {t.collaborations.offer1}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-sacred-white">{t.collaborations.offer2Title}</strong> {t.collaborations.offer2}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-sacred-white">{t.collaborations.offer3Title}</strong> {t.collaborations.offer3}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-sacred-white">{t.collaborations.offer4Title}</strong> {t.collaborations.offer4}</span>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    to="/contact"
                    className="inline-block px-10 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
                  >
                    {t.collaborations.button}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Collaborate With */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              {t.whoWeCollaborateWith.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-earth-800 flex items-center gap-3">
                  <span className="text-3xl">🏡</span>
                  {t.whoWeCollaborateWith.retreatCenters.title}
                </h3>
                <p className="text-earth-700/80 leading-relaxed">
                  {t.whoWeCollaborateWith.retreatCenters.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-earth-800 flex items-center gap-3">
                  <span className="text-3xl">🌐</span>
                  {t.whoWeCollaborateWith.communities.title}
                </h3>
                <p className="text-earth-700/80 leading-relaxed">
                  {t.whoWeCollaborateWith.communities.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-earth-800 flex items-center gap-3">
                  <span className="text-3xl">🤝</span>
                  {t.whoWeCollaborateWith.facilitators.title}
                </h3>
                <p className="text-earth-700/80 leading-relaxed">
                  {t.whoWeCollaborateWith.facilitators.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-earth-800 flex items-center gap-3">
                  <span className="text-3xl">🎓</span>
                  {t.whoWeCollaborateWith.training.title}
                </h3>
                <p className="text-earth-700/80 leading-relaxed">
                  {t.whoWeCollaborateWith.training.description}
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 text-center">
              <p className="text-earth-700/80 leading-relaxed italic">
                "{t.whoWeCollaborateWith.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Retreats */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              {t.upcomingRetreats.title}
            </h2>

            <div className="text-center space-y-8">
              <div className="bg-sacred-cream rounded-2xl p-12">
                <div className="text-5xl mb-6">🌅</div>
                <p className="text-2xl font-serif text-earth-800 mb-4">
                  {t.upcomingRetreats.comingSoonTitle}
                </p>
                <p className="text-lg text-earth-700/80 leading-relaxed max-w-2xl mx-auto">
                  {t.upcomingRetreats.comingSoonDescription}
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                {t.upcomingRetreats.button}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-earth-900 py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
              {t.finalCta.title}
            </h2>

            <p className="text-xl text-desert-sand/80 leading-relaxed">
              {t.finalCta.description}
            </p>

            <div className="space-y-4 pt-8">
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                {t.finalCta.button}
              </Link>

              <p className="text-sm text-desert-sand/60 italic">
                {t.finalCta.details}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
