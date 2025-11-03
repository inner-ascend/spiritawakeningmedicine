import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-sacred-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-desert-sand/90 font-serif italic leading-relaxed max-w-3xl mx-auto mb-10">
            {t.hero.subtitle}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-ocean-coral hover:bg-sacred-amber text-earth-900 px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Check Availability →
          </Link>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-ocean-coral/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-ocean-coral/60 rounded-full"></div>
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
                    <span className="text-ocean-coral mt-1">✦</span>
                    <span><strong className="text-earth-800">{t.bufoRetreats.feature1Title}</strong> {t.bufoRetreats.feature1}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-ocean-coral mt-1">✦</span>
                    <span><strong className="text-earth-800">{t.bufoRetreats.feature2Title}</strong> {t.bufoRetreats.feature2}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-ocean-coral mt-1">✦</span>
                    <span><strong className="text-earth-800">{t.bufoRetreats.feature3Title}</strong> {t.bufoRetreats.feature3}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-ocean-coral mt-1">✦</span>
                    <span><strong className="text-earth-800">{t.bufoRetreats.feature4Title}</strong> {t.bufoRetreats.feature4}</span>
                  </div>
                </div>

                <div className="bg-medicine-venom rounded-xl p-6 mt-8">
                  <p className="text-earth-800"><strong>{t.bufoRetreats.investment}</strong> {t.bufoRetreats.investmentPrice}</p>
                  <p className="text-sm text-earth-700/70 mt-2">{t.bufoRetreats.investmentDetails}</p>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    to="/pricing"
                    className="inline-block text-ocean-coral hover:text-sacred-amber transition-colors font-medium"
                  >
                    See all retreat & ceremony pricing →
                  </Link>
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
                    <span className="text-ocean-coral mt-1">◆</span>
                    <span><strong className="text-earth-800">{t.integrationIntensives.feature1Title}</strong> {t.integrationIntensives.feature1}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-ocean-coral mt-1">◆</span>
                    <span><strong className="text-earth-800">{t.integrationIntensives.feature2Title}</strong> {t.integrationIntensives.feature2}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-ocean-coral mt-1">◆</span>
                    <span><strong className="text-earth-800">{t.integrationIntensives.feature3Title}</strong> {t.integrationIntensives.feature3}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-ocean-coral mt-1">◆</span>
                    <span><strong className="text-earth-800">{t.integrationIntensives.feature4Title}</strong> {t.integrationIntensives.feature4}</span>
                  </div>
                </div>

                <div className="bg-medicine-venom rounded-xl p-6 mt-8">
                  <p className="text-earth-800"><strong>{t.integrationIntensives.investment}</strong> {t.integrationIntensives.investmentPrice}</p>
                  <p className="text-sm text-earth-700/70 mt-2">{t.integrationIntensives.investmentDetails}</p>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    to="/pricing"
                    className="inline-block text-ocean-coral hover:text-sacred-amber transition-colors font-medium"
                  >
                    See all retreat & ceremony pricing →
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:order-2">
              <div className="relative shadow-2xl">
                <img
                  src="/images/atmosphere/ceremony-10.jpg"
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

      {/* Collaborations CTA */}
      <div className="bg-earth-800 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
              Interested in Collaborating?
            </h2>
            <p className="text-lg text-desert-sand/80 mb-8 leading-relaxed">
              We partner with retreat centers, communities, facilitators, and healers to create transformational containers.
            </p>
            <Link
              to="/collaborations"
              className="inline-block bg-ocean-coral hover:bg-sacred-amber text-earth-900 px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Learn About Partnerships →
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials from Past Retreats */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              Voices from the Journey
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-sacred-cream border border-earth-700/10 rounded-2xl p-8 space-y-6">
                <div className="text-3xl text-ocean-coral/40">❝</div>
                <p className="text-xl text-earth-800 italic leading-relaxed">
                  "The retreat was transformative beyond words. The combination of ceremony, integration circles, and
                  the natural beauty of Mazunte created a container for deep healing. I left feeling more connected to
                  myself and my purpose than ever before."
                </p>
                <div className="pt-4 border-t border-earth-700/10">
                  <p className="text-lg font-serif text-ocean-coral">— Sarah M.</p>
                  <p className="text-sm text-earth-700/60">7-Day Bufo Retreat, Mazunte</p>
                </div>
              </div>

              <div className="bg-sacred-cream border border-earth-700/10 rounded-2xl p-8 space-y-6">
                <div className="text-3xl text-ocean-coral/40">❝</div>
                <p className="text-xl text-earth-800 italic leading-relaxed">
                  "What makes these retreats special is the genuine care and expertise of the facilitators. They hold
                  space with wisdom, compassion, and deep knowledge of the medicine and integration process. I felt
                  safe to go deep."
                </p>
                <div className="pt-4 border-t border-earth-700/10">
                  <p className="text-lg font-serif text-ocean-coral">— Michael R.</p>
                  <p className="text-sm text-earth-700/60">5-Day Integration Intensive</p>
                </div>
              </div>

              <div className="bg-sacred-cream border border-earth-700/10 rounded-2xl p-8 space-y-6">
                <div className="text-3xl text-ocean-coral/40">❝</div>
                <p className="text-xl text-earth-800 italic leading-relaxed">
                  "The retreat gave me tools and practices I still use daily. The ocean, the ceremonies, the group
                  sharing—everything worked together to create lasting change. This wasn't just a vacation, it was a
                  true initiation."
                </p>
                <div className="pt-4 border-t border-earth-700/10">
                  <p className="text-lg font-serif text-ocean-coral">— Elena P.</p>
                  <p className="text-sm text-earth-700/60">10-Day Bufo & Integration Retreat</p>
                </div>
              </div>

              <div className="bg-sacred-cream border border-earth-700/10 rounded-2xl p-8 space-y-6">
                <div className="text-3xl text-ocean-coral/40">❝</div>
                <p className="text-xl text-earth-800 italic leading-relaxed">
                  "Coming to the retreat solo was one of the best decisions I've made. The group became family, and
                  the practices we learned together created bonds that go beyond the week we shared. I'm still in
                  touch with everyone."
                </p>
                <div className="pt-4 border-t border-earth-700/10">
                  <p className="text-lg font-serif text-ocean-coral">— David K.</p>
                  <p className="text-sm text-earth-700/60">5-Day Bufo Ceremony Retreat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Retreats */}
      <div className="bg-earth-800 py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-16 text-center">
              {t.upcomingRetreats.title}
            </h2>

            <div className="text-center space-y-8">
              <div className="bg-earth-700/40 backdrop-blur-xl border border-desert-sand/20 rounded-2xl p-12">
                <p className="text-2xl font-serif text-sacred-white mb-6">
                  Join the Waitlist for 2025 Retreats
                </p>
                <p className="text-lg text-desert-sand/80 leading-relaxed max-w-2xl mx-auto mb-8">
                  We're currently planning our 2025 retreat calendar. Get notified first when new retreat dates are announced,
                  and receive early-bird pricing for being on the waitlist.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-desert-sand/70">
                    <span className="text-ocean-coral">✓</span>
                    <span>Priority booking for retreat spots</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-desert-sand/70">
                    <span className="text-ocean-coral">✓</span>
                    <span>Early-bird discount notifications</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-desert-sand/70">
                    <span className="text-ocean-coral">✓</span>
                    <span>Detailed retreat itineraries and information</span>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-ocean-coral text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                Join the Retreat Waitlist
              </Link>
              <p className="text-sm text-desert-sand/60 italic">
                Include "Retreat Waitlist" in your message
              </p>
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
                className="inline-block px-12 py-4 bg-ocean-coral text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
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
