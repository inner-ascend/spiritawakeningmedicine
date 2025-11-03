import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useLanguage } from '../../contexts/LanguageContext';
import ceremoniesEN from '../../translations/pages/ceremonies/en.json';
import ceremoniesES from '../../translations/pages/ceremonies/es.json';
import ceremoniesFR from '../../translations/pages/ceremonies/fr.json';

const translations = { en: ceremoniesEN, es: ceremoniesES, fr: ceremoniesFR };

export default function BufoCeremoniesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/locations/bufo-toad.jpg"
            alt="Sonoran Desert toad - Bufo Alvarius"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-sacred-purple/90 font-serif font-light mb-6">
            {t.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto mb-10">
            {t.hero.description1}<br/>
            {t.hero.description2}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-sacred-purple hover:bg-sacred-gold text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Check Availability →
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-purple/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-purple/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* What is Bufo Alvarius */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.what.title}
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg">
              <p className="text-2xl text-sacred-purple font-serif text-center mb-8">
                {t.what.subtitle}
              </p>

              <p>
                {t.what.p1}
              </p>

              {/* Inline altar image */}
              <div className="grid md:grid-cols-2 gap-8 items-center my-12">
                <div>
                  <p>
                    {t.what.p2}
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/atmosphere/ceremony-15.jpeg"
                    alt="Sacred altar and ceremony objects"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-medicine-venom rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-serif text-earth-800 mb-6">{t.what.experience.title}</h3>
                <div className="space-y-4">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-earth-800">{t.what.experience.speed}</strong> {t.what.experience.speedValue}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-earth-800">{t.what.experience.duration}</strong> {t.what.experience.durationValue}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-earth-800">{t.what.experience.intensity}</strong> {t.what.experience.intensityValue}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-earth-800">{t.what.experience.outcome}</strong> {t.what.experience.outcomeValue}</span>
                  </p>
                </div>
              </div>

              <p className="border-l-4 border-sacred-purple/40 pl-6 italic text-earth-700/70 text-xl">
                "{t.what.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toad Close-up Image */}
      <div className="h-[60vh] relative overflow-hidden">
        <img
          src="/images/locations/bufo-toad.jpg"
          alt="Bufo Alvarius toad close-up in natural habitat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/20 to-earth-900/50"></div>
      </div>

      {/* Ceremony Details */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              {t.ceremonyDetails.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    {t.ceremonyDetails.facilitators.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    <strong className="text-earth-800">{t.ceremonyDetails.facilitators.name}</strong><br/>
                    {t.ceremonyDetails.facilitators.credentials}<br/>
                    {t.ceremonyDetails.facilitators.experience}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    {t.ceremonyDetails.location.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    {t.ceremonyDetails.location.place}<br/>
                    {t.ceremonyDetails.location.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    {t.ceremonyDetails.groupSize.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    {t.ceremonyDetails.groupSize.size}<br/>
                    {t.ceremonyDetails.groupSize.max}<br/>
                    {t.ceremonyDetails.groupSize.options}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    {t.ceremonyDetails.timeline.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    {t.ceremonyDetails.timeline.duration}<br/>
                    {t.ceremonyDetails.timeline.includes}<br/>
                    {t.ceremonyDetails.timeline.integration}<br/>
                    {t.ceremonyDetails.timeline.followUp}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    {t.ceremonyDetails.whatsIncluded.title}
                  </h3>
                  <div className="space-y-3 text-earth-700/80 leading-relaxed">
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{t.ceremonyDetails.whatsIncluded.item1}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{t.ceremonyDetails.whatsIncluded.item2}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{t.ceremonyDetails.whatsIncluded.item3}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{t.ceremonyDetails.whatsIncluded.item4}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{t.ceremonyDetails.whatsIncluded.item5}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{t.ceremonyDetails.whatsIncluded.item6}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{t.ceremonyDetails.whatsIncluded.item7}</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    {t.ceremonyDetails.approach.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    {t.ceremonyDetails.approach.line1}<br/>
                    {t.ceremonyDetails.approach.line2}<br/>
                    {t.ceremonyDetails.approach.line3}<br/>
                    {t.ceremonyDetails.approach.line4}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-serif text-earth-800 mb-4">{t.ceremonyDetails.requirements.title}</h3>
              <p className="text-earth-700/80 leading-relaxed max-w-2xl mx-auto">
                {t.ceremonyDetails.requirements.description}
              </p>
            </div>

            {/* Visual comparison: Ceremony phases */}
            <div className="grid md:grid-cols-2 gap-8 mt-20">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src="/images/atmosphere/ceremony-16.jpeg"
                  alt="Ceremony preparation and setting"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src="/images/atmosphere/ceremony-17.jpeg"
                  alt="Integration and closing circle"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who This Is For / Not For */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              {t.isThisForYou.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* FOR */}
              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-4xl text-sacred-purple">✓</div>
                  <h3 className="text-2xl font-serif text-earth-800">{t.isThisForYou.for.title}</h3>
                </div>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1">•</span>
                    <span>{t.isThisForYou.for.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1">•</span>
                    <span>{t.isThisForYou.for.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1">•</span>
                    <span>{t.isThisForYou.for.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1">•</span>
                    <span>{t.isThisForYou.for.item4}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1">•</span>
                    <span>{t.isThisForYou.for.item5}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1">•</span>
                    <span>{t.isThisForYou.for.item6}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1">•</span>
                    <span>{t.isThisForYou.for.item7}</span>
                  </p>
                </div>
              </div>

              {/* NOT FOR */}
              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-4xl text-desert-clay">✗</div>
                  <h3 className="text-2xl font-serif text-earth-800">{t.isThisForYou.notFor.title}</h3>
                </div>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>{t.isThisForYou.notFor.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>{t.isThisForYou.notFor.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>{t.isThisForYou.notFor.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>{t.isThisForYou.notFor.item4}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>{t.isThisForYou.notFor.item5}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>{t.isThisForYou.notFor.item6}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>{t.isThisForYou.notFor.item7}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-earth-700/70 italic">
                "{t.isThisForYou.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ceremony Space Image with Quote */}
      <div className="h-[70vh] relative overflow-hidden">
        <img
          src="/images/locations/ceremony-space-mazunte.jpg"
          alt="Sacred ceremony space in nature - Mazunte, Mexico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/30 to-earth-900/60 flex items-center justify-center">
          <p className="text-3xl md:text-5xl font-serif text-sacred-white italic text-center px-4 max-w-4xl leading-tight">
            "{t.ceremonySpace.quote}"
          </p>
        </div>
      </div>

      {/* Contraindications & Medical Screening */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-desert-clay/10 border-l-4 border-desert-clay rounded-r-2xl p-8 mb-12">
              <h2 className="text-3xl font-serif text-earth-800 mb-6 flex items-center gap-3">
                <span className="text-4xl text-desert-clay">⊕</span>
                {t.medical.title}
              </h2>
              <p className="text-earth-700/80 leading-relaxed mb-6">
                {t.medical.description}
              </p>
            </div>

            <h3 className="text-2xl font-serif text-earth-800 mb-6">{t.medical.contraindications.title}</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="space-y-3 text-earth-700/80">
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.contraindications.item1}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.contraindications.item2}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.contraindications.item3}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.contraindications.item4}</span>
                </p>
              </div>
              <div className="space-y-3 text-earth-700/80">
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.contraindications.item5}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.contraindications.item6}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.contraindications.item7}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.contraindications.item8}</span>
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-6 text-sm text-earth-700/70 leading-relaxed">
              <p className="font-semibold text-earth-800 mb-2">{t.medical.disclaimer.title}</p>
              <p>
                {t.medical.disclaimer.text}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desert Sunset Image Break */}
      <div className="h-[60vh] relative overflow-hidden">
        <img
          src="/images/locations/sonoran-desert-sunset.jpg"
          alt="Sonoran Desert landscape at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/20 to-earth-900/50"></div>
      </div>

      {/* Investment CTA */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
              Investment & Pricing
            </h2>
            <p className="text-lg text-earth-700/70 mb-8 leading-relaxed">
              View complete ceremony pricing, package options, and our sliding scale accessibility program.
            </p>
            <Link
              to="/pricing"
              className="inline-block bg-sacred-purple hover:bg-sacred-gold text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Pricing & Packages →
            </Link>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="relative py-48">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/70 to-earth-900/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-8">
              {t.application.title}
            </h2>

            <div className="space-y-6 text-desert-sand/80 leading-relaxed text-lg mb-12">
              <p className="text-2xl font-serif italic text-sacred-purple/90">
                "{t.application.quote}"
              </p>

              <p>
                {t.application.description}
              </p>
            </div>

            <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-8 mb-12 text-left">
              <h3 className="text-2xl font-serif text-sacred-white mb-6">{t.application.steps.title}</h3>
              <div className="space-y-4 text-desert-sand/80">
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">1.</span>
                  <span>{t.application.steps.step1}</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">2.</span>
                  <span>{t.application.steps.step2}</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">3.</span>
                  <span>{t.application.steps.step3}</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">4.</span>
                  <span>{t.application.steps.step4}</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">5.</span>
                  <span>{t.application.steps.step5}</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">6.</span>
                  <span>{t.application.steps.step6}</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-sacred-purple text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                {t.application.cta}
              </Link>
              <p className="text-sm text-desert-sand/60">
                <Link to="/preparation" className="hover:text-sacred-purple transition-colors">
                  {t.application.link}
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
