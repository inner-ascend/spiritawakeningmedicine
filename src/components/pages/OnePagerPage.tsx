import { useState } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ResponsiveImage from '../shared/ResponsiveImage';
import { useLanguage } from '../../contexts/LanguageContext';

// Import consolidated translations for one-pager
import translationsEN from '../../translations/onepager/en.json';
import translationsES from '../../translations/onepager/es.json';

const translations = {
  en: translationsEN,
  es: translationsES,
  fr: translationsEN // Fallback to English for French
};

export default function OnePagerPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Select 6 FAQs for the one-pager
  const selectedFaqs = t.faq.items.slice(0, 6);

  return (
    <div className="min-h-screen bg-earth-900 text-sacred-white overflow-hidden">
      <Navigation />

      {/* ========== SECTION 1: HERO ========== */}
      <section id="home" className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <ResponsiveImage
            src="/images/locations/sonoran-desert-sunset.jpg"
            alt="Sonoran Desert landscape at golden hour"
            className="w-full h-full object-cover"
            priority={true}
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/50 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-sacred-white mb-6 animate-fadeIn leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-4xl text-sacred-gold/90 font-serif font-light tracking-wide mb-6">
            {t.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl text-desert-sand/90 font-light mb-4">
            {t.hero.tagline}
          </p>
          <p className="text-base md:text-lg text-desert-sand/70 font-light mb-8 max-w-3xl mx-auto">
            {t.hero.features}
          </p>
          <p className="text-sm md:text-base text-desert-sand/60 font-light italic max-w-2xl mx-auto mb-12">
            {t.hero.disclaimer}
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-sacred-gold/90 text-earth-900 rounded-full font-medium text-lg hover:bg-sacred-gold transition-all shadow-lg hover:shadow-xl"
          >
            {t.hero.ctaButton}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-ocean-turquoise/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-ocean-turquoise/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: WHAT IS BUFO ALVARIUS ========== */}
      <section id="about" className="bg-earth-800 pt-36 pb-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-8 leading-tight">
                {t.whatIsBufo.title}
              </h2>
              <p className="text-xl md:text-2xl text-desert-sand/80 leading-relaxed italic max-w-3xl mx-auto">
                {t.whatIsBufo.subtitle}
              </p>
            </div>

            <div className="space-y-8 text-desert-sand/80 leading-relaxed text-lg max-w-3xl mx-auto">
              <p className="text-xl text-sacred-gold/90 font-serif text-center">
                {t.whatIsBufo.intro}
              </p>
              <p>
                {t.whatIsBufo.paragraph1}
              </p>
              <p>
                {t.whatIsBufo.paragraph2} <span className="text-sacred-gold font-medium">{t.whatIsBufo.paragraph2Highlight}</span> {t.whatIsBufo.paragraph2Cont}
              </p>

              {/* Experience highlights from Ceremonies page */}
              <div className="bg-earth-900/50 rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-serif text-sacred-white mb-6 text-center">{t.whatIsBufo.experience.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-sacred-white">{t.whatIsBufo.experience.speed}</strong> {t.whatIsBufo.experience.speedValue}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-sacred-white">{t.whatIsBufo.experience.duration}</strong> {t.whatIsBufo.experience.durationValue}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-sacred-white">{t.whatIsBufo.experience.intensity}</strong> {t.whatIsBufo.experience.intensityValue}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-sacred-white">{t.whatIsBufo.experience.outcome}</strong> {t.whatIsBufo.experience.outcomeValue}</span>
                  </p>
                </div>
              </div>

              <p className="border-l-2 border-sacred-purple/40 pl-6 italic text-desert-sand/70">
                "{t.whatIsBufo.quote}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: IMAGE BREAK - Sonoran Medicine ========== */}
      <div className="h-[60vh] md:h-[60vh] relative overflow-hidden">
        <img
          src="/images/locations/nina-astral-ceremony.jpg"
          alt="Nina & Astral - Sacred ceremony space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/30 to-earth-900/60"></div>
      </div>

      {/* ========== SECTION 4: WHO THIS IS FOR / NOT FOR ========== */}
      <section className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                {t.whoThisIsFor.title}
              </h2>
              <p className="text-lg text-earth-700/70 italic">
                {t.whoThisIsFor.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* FOR */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-3xl text-ocean-turquoise">✓</div>
                  <h3 className="text-2xl font-serif text-earth-800">{t.whoThisIsFor.forTitle}</h3>
                </div>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  {t.whoThisIsFor.forList.map((item: string, index: number) => (
                    <p key={index} className="flex items-start gap-3">
                      <span className="text-ocean-turquoise mt-1">•</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* NOT FOR */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-3xl text-desert-clay">✗</div>
                  <h3 className="text-2xl font-serif text-earth-800">{t.whoThisIsFor.notForTitle}</h3>
                </div>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  {t.whoThisIsFor.notForList.map((item: string, index: number) => (
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
                "{t.whoThisIsFor.quote}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: THREE-PHASE JOURNEY ========== */}
      <section id="journey" className="bg-white pt-36 pb-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                {t.threePhaseJourney.title}
              </h2>
              <p className="text-lg text-earth-700/70 max-w-2xl mx-auto">
                {t.threePhaseJourney.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {/* Phase 1: Preparation */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/5] relative">
                  <ResponsiveImage
                    src="/images/atmosphere/ceremony-04.jpg"
                    alt="Preparation practices"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 via-earth-900/60 to-earth-900/90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center space-y-4">
                    <h3 className="text-2xl font-serif text-sacred-white">{t.threePhaseJourney.preparation.title}</h3>
                    <p className="text-desert-sand/90 leading-relaxed text-sm">
                      {t.threePhaseJourney.preparation.description}
                    </p>
                    <p className="text-xs text-desert-sage font-medium">{t.threePhaseJourney.preparation.price}</p>
                  </div>
                </div>
              </div>

              {/* Phase 2: Ceremony */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/5] relative">
                  <ResponsiveImage
                    src="/images/atmosphere/ceremony-05.jpg"
                    alt="Sacred ceremony space"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 via-earth-900/60 to-earth-900/90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center space-y-4">
                    <h3 className="text-2xl font-serif text-sacred-white">{t.threePhaseJourney.ceremony.title}</h3>
                    <p className="text-desert-sand/90 leading-relaxed text-sm">
                      {t.threePhaseJourney.ceremony.description}
                    </p>
                    <p className="text-xs text-sacred-purple font-medium">{t.threePhaseJourney.ceremony.price}</p>
                  </div>
                </div>
              </div>

              {/* Phase 3: Integration */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/5] relative">
                  <ResponsiveImage
                    src="/images/photos-new/IMG_9531.jpg"
                    alt="Integration and embodiment"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 via-earth-900/60 to-earth-900/90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center space-y-4">
                    <h3 className="text-2xl font-serif text-sacred-white">{t.threePhaseJourney.integration.title}</h3>
                    <p className="text-desert-sand/90 leading-relaxed text-sm">
                      {t.threePhaseJourney.integration.description}
                    </p>
                    <p className="text-xs text-ocean-turquoise font-medium">{t.threePhaseJourney.integration.price}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto border-t border-earth-700/10 pt-12">
              <p className="text-lg text-earth-700/70 italic leading-relaxed mb-8" style={{whiteSpace: 'pre-line'}}>
                "{t.threePhaseJourney.quote}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: IMAGE BREAK - Ceremony Space ========== */}
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

      {/* ========== SECTION 7: CEREMONY DETAILS ========== */}
      <section id="ceremonies" className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              {t.ceremonyDetails.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
                    {t.ceremonyDetails.facilitators.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    <strong className="text-earth-800">{t.ceremonyDetails.facilitators.name}</strong><br/>
                    {t.ceremonyDetails.facilitators.credentials}<br/>
                    {t.ceremonyDetails.facilitators.experience}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
                    {t.ceremonyDetails.location.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    {t.ceremonyDetails.location.place}<br/>
                    {t.ceremonyDetails.location.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
                    {t.ceremonyDetails.groupSize.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    {t.ceremonyDetails.groupSize.size}<br/>
                    {t.ceremonyDetails.groupSize.max}<br/>
                    {t.ceremonyDetails.groupSize.options}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
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
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
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
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
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
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: MEET YOUR FACILITATORS ========== */}
      <section id="facilitators" className="bg-earth-800 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
                {t.facilitators.title}
              </h2>
              <p className="text-xl text-desert-sand/80 italic">
                {t.facilitators.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <a
                href="https://nina-moore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative shadow-lg group overflow-hidden rounded-lg"
              >
                <img
                  src="/images/portraits/nina-portrait.jpg"
                  alt="Nina - Co-facilitator portrait"
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-sacred-white font-serif text-2xl mb-2">Nina Moore</p>
                    <p className="text-desert-sand/90 text-sm">Visit Nina's website →</p>
                  </div>
                </div>
              </a>
              <a
                href="https://astral-integration.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative shadow-lg group overflow-hidden rounded-lg"
              >
                <img
                  src="/images/portraits/astral-portrait.jpg"
                  alt="Astral - Co-facilitator portrait"
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-sacred-white font-serif text-2xl mb-2">Astral Amat</p>
                    <p className="text-desert-sand/90 text-sm">Visit Astral's website →</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Lineage text */}
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-desert-sand/80 leading-relaxed mb-6">
                {t.facilitators.paragraph1}
              </p>
              <p className="text-lg text-desert-sand/70 leading-relaxed mb-8">
                {t.facilitators.paragraph2}
              </p>
              <p className="text-desert-clay/90 italic font-serif text-xl">
                "{t.facilitators.quote}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 9: IMAGE BREAK - Mazunte Beach ========== */}
      <div className="h-[60vh] relative overflow-hidden">
        <img
          src="/images/atmosphere/ceremony-24.jpg"
          alt="Sacred ceremony moment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 to-earth-900/70 flex items-center justify-center">
          <p className="text-3xl md:text-5xl font-serif text-sacred-white italic text-center px-4 max-w-4xl leading-tight" style={{whiteSpace: 'pre-line'}}>
            "{t.imageQuote.quote}"
          </p>
        </div>
      </div>

      {/* ========== SECTION 10: RETREATS & SACRED CONTAINERS ========== */}
      <section id="retreats" className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                {t.retreats.title}
              </h2>
              <p className="text-xl text-earth-700/80 italic max-w-3xl mx-auto">
                {t.retreats.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Bufo Retreat Containers */}
              <div className="bg-sacred-cream rounded-2xl p-10">
                <h3 className="text-3xl font-serif text-earth-800 mb-4">
                  <span className="text-ocean-coral mr-2">✧</span>
                  {t.retreats.bufoRetreats.title}
                </h3>
                <p className="text-xl text-earth-700/80 italic mb-6">
                  {t.retreats.bufoRetreats.subtitle}
                </p>
                <p className="text-earth-700/80 leading-relaxed mb-6">
                  {t.retreats.bufoRetreats.description}
                </p>
                <div className="space-y-3 text-earth-700/80 mb-6">
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">✦</span>
                    <span><strong className="text-earth-800">{t.retreats.bufoRetreats.feature1Title}</strong> {t.retreats.bufoRetreats.feature1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">✦</span>
                    <span><strong className="text-earth-800">{t.retreats.bufoRetreats.feature2Title}</strong> {t.retreats.bufoRetreats.feature2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">✦</span>
                    <span><strong className="text-earth-800">{t.retreats.bufoRetreats.feature3Title}</strong> {t.retreats.bufoRetreats.feature3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">✦</span>
                    <span><strong className="text-earth-800">{t.retreats.bufoRetreats.feature4Title}</strong> {t.retreats.bufoRetreats.feature4}</span>
                  </p>
                </div>
                <div className="bg-medicine-venom rounded-xl p-4">
                  <p className="text-earth-800 font-medium">{t.retreats.bufoRetreats.investment} {t.retreats.bufoRetreats.investmentPrice}</p>
                </div>
              </div>

              {/* Integration Intensives */}
              <div className="bg-sacred-cream rounded-2xl p-10">
                <h3 className="text-3xl font-serif text-earth-800 mb-4">
                  <span className="text-ocean-coral mr-2">✧</span>
                  {t.retreats.integrationIntensives.title}
                </h3>
                <p className="text-xl text-earth-700/80 italic mb-6">
                  {t.retreats.integrationIntensives.subtitle}
                </p>
                <p className="text-earth-700/80 leading-relaxed mb-6">
                  {t.retreats.integrationIntensives.description}
                </p>
                <div className="space-y-3 text-earth-700/80 mb-6">
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">◆</span>
                    <span><strong className="text-earth-800">{t.retreats.integrationIntensives.feature1Title}</strong> {t.retreats.integrationIntensives.feature1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">◆</span>
                    <span><strong className="text-earth-800">{t.retreats.integrationIntensives.feature2Title}</strong> {t.retreats.integrationIntensives.feature2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">◆</span>
                    <span><strong className="text-earth-800">{t.retreats.integrationIntensives.feature3Title}</strong> {t.retreats.integrationIntensives.feature3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">◆</span>
                    <span><strong className="text-earth-800">{t.retreats.integrationIntensives.feature4Title}</strong> {t.retreats.integrationIntensives.feature4}</span>
                  </p>
                </div>
                <div className="bg-medicine-venom rounded-xl p-4">
                  <p className="text-earth-800 font-medium">{t.retreats.integrationIntensives.investment} {t.retreats.integrationIntensives.investmentPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 11: CEREMONY GALLERY ========== */}
      <section className="bg-earth-900 pt-36 pb-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
                {t.gallery.title}
              </h2>
              <p className="text-lg text-desert-sand/70 max-w-2xl mx-auto">
                {t.gallery.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {[
                { src: '/images/new-gallery/IMG_7127.jpg', alt: 'Preparation setting' },
                { src: '/images/photos-new/IMG_9409.jpg', alt: 'Sacred ceremony' },
                { src: '/images/atmosphere/ceremony-20.jpeg', alt: 'Ceremony atmosphere' },
                { src: '/images/photos-new/DSCF8199.jpg', alt: 'Ceremony space' },
                { src: '/images/new-gallery/IMG_8616.jpg', alt: 'Ceremony setting' },
                { src: '/images/photos-new/IMG_9416.jpg', alt: 'Sacred moment' },
                { src: '/images/atmosphere/ceremony-21.jpeg', alt: 'Sacred ceremony space' },
                { src: '/images/photos-new/IMG_0105.jpg', alt: 'Ritual atmosphere' },
                { src: '/images/new-gallery/IMG_5460.jpg', alt: 'Sacred ceremony space' },
                { src: '/images/photos-new/IMG_9509.jpg', alt: 'Integration circle' },
                { src: '/images/atmosphere/ceremony-22.jpeg', alt: 'Preparation setting' },
                { src: '/images/photos-new/DSCF8209.jpg', alt: 'Sacred space' },
                { src: '/images/new-gallery/IMG_7454.jpg', alt: 'Ritual space' },
                { src: '/images/atmosphere/ceremony-23.jpeg', alt: 'Integration circle' },
                { src: '/images/new-gallery/IMG_7709.jpg', alt: 'Sacred atmosphere' },
                { src: '/images/atmosphere/ceremony-24.jpg', alt: 'Sacred ceremony moment' },
                { src: '/images/new-gallery/IMG_6828.jpg', alt: 'Ceremony atmosphere' },
                { src: '/images/atmosphere/ceremony-25.jpg', alt: 'Ceremony practice' },
                { src: '/images/photos-new/DSCF8420.jpg', alt: 'Integration space' },
                { src: '/images/new-gallery/IMG_7369.jpg', alt: 'Ceremony practice' },
                { src: '/images/atmosphere/ceremony-26.jpg', alt: 'Ritual space' },
                { src: '/images/new-gallery/IMG_8404.jpg', alt: 'Sacred space' },
                { src: '/images/atmosphere/ceremony-27.jpg', alt: 'Sacred container' },
                { src: '/images/new-gallery/IMG_7161.jpg', alt: 'Integration circle' },
                { src: '/images/atmosphere/ceremony-28.jpg', alt: 'Ceremony environment' },
                { src: '/images/atmosphere/ceremony-29.jpg', alt: 'Sacred atmosphere' },
                { src: '/images/new-gallery/IMG_7227.jpg', alt: 'Sacred ceremony moment' },
                { src: '/images/new-gallery/IMG_7470.jpg', alt: 'Sacred container' },
                { src: '/images/new-gallery/IMG_8738.jpg', alt: 'Sacred moment' },
              ].map((image, index) => (
                <div key={index} className="aspect-square relative overflow-hidden rounded-lg group">
                  <ResponsiveImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-earth-900/20 group-hover:bg-earth-900/0 transition-colors"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 12: TESTIMONIALS (HIDDEN) ========== */}
      {/* Testimonials section hidden per request
      <section id="testimonials" className="bg-earth-800 pt-36 pb-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white text-center mb-20">
              {home.testimonials.title}
            </h2>

            <div className="space-y-20">
              {home.testimonials.items.map((testimonial: { quote: string; name: string }, index: number) => (
                <div key={index} className="max-w-4xl mx-auto">
                  <p className="text-2xl md:text-3xl font-serif text-desert-sand leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sacred-gold text-lg">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ========== SECTION 13: INVESTMENT & PRICING ========== */}
      <section id="pricing" className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                {t.pricing.title}
              </h2>
              <p className="text-lg text-earth-700/70 max-w-3xl mx-auto">
                {t.pricing.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Essential Journey */}
              <div className="bg-white rounded-2xl p-8 border border-desert-sage/30">
                <h3 className="text-2xl font-serif text-earth-800 mb-4">
                  <span className="text-desert-sage mr-2">○</span>
                  {t.pricing.essential.title}
                </h3>
                <div className="text-4xl font-serif text-desert-sage mb-4">{t.pricing.essential.price}</div>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {t.pricing.essential.description}
                </p>
                <div className="space-y-3 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage">○</span>
                    <span>{t.pricing.essential.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage">○</span>
                    <span>{t.pricing.essential.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage">○</span>
                    <span>{t.pricing.essential.item3}</span>
                  </p>
                </div>
              </div>

              {/* Complete Journey - Recommended */}
              <div className="bg-white rounded-2xl p-8 border-2 border-sacred-gold/30 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sacred-gold text-earth-900 px-4 py-1 rounded-full text-sm font-medium">
                  {t.pricing.complete.badge}
                </div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4">
                  <span className="text-mineral-copper mr-2">◉</span>
                  {t.pricing.complete.title}
                </h3>
                <div className="text-4xl font-serif text-mineral-copper mb-4">{t.pricing.complete.price}</div>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {t.pricing.complete.description}
                </p>
                <div className="space-y-3 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-mineral-copper">◉</span>
                    <span>{t.pricing.complete.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-mineral-copper">◉</span>
                    <span>{t.pricing.complete.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-mineral-copper">◉</span>
                    <span>{t.pricing.complete.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-mineral-copper">◉</span>
                    <span>{t.pricing.complete.item4}</span>
                  </p>
                </div>
              </div>

              {/* Deep Work Container */}
              <div className="bg-white rounded-2xl p-8 border border-sacred-purple/30">
                <h3 className="text-2xl font-serif text-earth-800 mb-4">
                  <span className="text-sacred-purple mr-2">⬢</span>
                  {t.pricing.deepWork.title}
                </h3>
                <div className="text-4xl font-serif text-sacred-purple mb-4">{t.pricing.deepWork.price}</div>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {t.pricing.deepWork.description}
                </p>
                <div className="space-y-3 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">⬢</span>
                    <span>{t.pricing.deepWork.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">⬢</span>
                    <span>{t.pricing.deepWork.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">⬢</span>
                    <span>{t.pricing.deepWork.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">⬢</span>
                    <span>{t.pricing.deepWork.item4}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Scholarships Note */}
            <div className="text-center max-w-2xl mx-auto mt-12">
              <p className="text-earth-700/70 italic">
                Scholarships available for BIPOC and those with limited resources. If finances are a barrier, speak openly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 14: MEDICAL SCREENING & CONTRAINDICATIONS ========== */}
      <section id="safety" className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-desert-clay/10 border-l-4 border-desert-clay rounded-r-2xl p-8 mb-12">
              <h2 className="text-3xl font-serif text-earth-800 mb-6 flex items-center gap-3">
                <span className="text-4xl text-desert-clay">⊕</span>
                {t.medical.title}
              </h2>
              <p className="text-earth-700/80 leading-relaxed">
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
              <p>{t.medical.disclaimer.text}</p>
            </div>

            {/* Safety Protocols */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-ocean-turquoise/10 rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-earth-800 mb-6 flex items-center gap-3">
                  <span className="text-ocean-turquoise text-2xl">◈</span>
                  {t.safety.protocols.title}
                </h3>
                <div className="space-y-3 text-earth-700/80">
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>{t.safety.protocols.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>{t.safety.protocols.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>{t.safety.protocols.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>{t.safety.protocols.item4}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>{t.safety.protocols.item5}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>{t.safety.protocols.item6}</span>
                  </p>
                </div>
              </div>

              <div className="bg-sacred-purple/10 rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-earth-800 mb-6 flex items-center gap-3">
                  <span className="text-sacred-purple text-2xl">◈</span>
                  {t.safety.ethics.title}
                </h3>
                <div className="space-y-3 text-earth-700/80">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>{t.safety.ethics.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>{t.safety.ethics.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>{t.safety.ethics.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>{t.safety.ethics.item4}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>{t.safety.ethics.item5}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>{t.safety.ethics.item6}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 15: FAQ ACCORDION ========== */}
      <section id="faq" className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.faq.title}
            </h2>

            <div className="space-y-4">
              {selectedFaqs.map((faqItem: { question: string; answer: string }, index: number) => (
                <div key={index} className="bg-white rounded-2xl border border-earth-700/10 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-medicine-venom/30 transition-colors"
                  >
                    <span className="text-xl font-serif text-earth-800 pr-4">{faqItem.question}</span>
                    <span className="text-sacred-gold text-2xl flex-shrink-0">
                      {openFaqIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-8 pb-6">
                      <p className="text-earth-700/80 leading-relaxed">{faqItem.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 17: CONTACT SECTION ========== */}
      <section id="contact" className="relative py-48">
        <div className="absolute inset-0">
          <img
            src="/images/locations/sonoran-desert-sunset.jpg"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/80 to-earth-900/95"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
                {t.contact.title}
              </h2>
              <p className="text-xl text-desert-sand/80 italic">
                "{t.contact.quote}"
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Primary CTA: Medical Screening */}
              <div className="bg-earth-900/50 backdrop-blur-xl rounded-2xl p-10 border border-sacred-gold/30 text-center mb-8">
                <h3 className="text-2xl font-serif text-sacred-white mb-4">{t.contact.readyTitle}</h3>
                <p className="text-desert-sand/80 leading-relaxed mb-8">
                  {t.contact.readyDescription}
                </p>
                <a
                  href="/bufo-screening"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-5 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-xl shadow-lg"
                >
                  {t.contact.screeningButton}
                </a>
              </div>

              {/* Secondary: Questions via WhatsApp */}
              <div className="bg-earth-900/50 backdrop-blur-xl rounded-2xl p-6 border border-desert-sand/10 text-center mb-8">
                <p className="text-desert-sand/70 mb-4">{t.contact.questionsTitle}</p>
                <a
                  href="https://wa.me/33646396325?text=Hello%2C%20I%20have%20a%20question%20about%20your%20ceremonies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-all font-medium shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.contact.whatsappButton}
                </a>
              </div>

              {/* Other Contact Options */}
              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href={`mailto:${t.contact.email.address}`}
                  className="bg-earth-900/50 backdrop-blur-xl rounded-2xl p-6 border border-desert-sand/10 text-center hover:border-sacred-gold/30 transition-colors"
                >
                  <h4 className="text-lg font-serif text-sacred-white mb-2">{t.contact.email.title}</h4>
                  <p className="text-sacred-gold text-sm">{t.contact.email.address}</p>
                </a>

                <a
                  href="https://instagram.com/inner__ascend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-earth-900/50 backdrop-blur-xl rounded-2xl p-6 border border-desert-sand/10 text-center hover:border-sacred-gold/30 transition-colors"
                >
                  <h4 className="text-lg font-serif text-sacred-white mb-2">{t.contact.instagram.title}</h4>
                  <p className="text-sacred-gold text-sm">{t.contact.instagram.handle}</p>
                </a>

                <div className="bg-earth-900/50 backdrop-blur-xl rounded-2xl p-6 border border-desert-sand/10 text-center">
                  <h4 className="text-lg font-serif text-sacred-white mb-2">{t.contact.location.title}</h4>
                  <p className="text-sacred-gold text-sm">{t.contact.location.place}</p>
                </div>
              </div>
            </div>

            {/* Softer Closing */}
            <div className="mt-16 text-center">
              <p className="text-2xl font-serif text-desert-sand/70 italic">
                {t.contact.closing}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 18: FOOTER ========== */}
      <Footer />
    </div>
  );
}
