import { useState } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ResponsiveImage from '../shared/ResponsiveImage';
import { useLanguage } from '../../contexts/LanguageContext';

// Import translations from existing pages
import homeEN from '../../translations/pages/home/en.json';
import homeES from '../../translations/pages/home/es.json';
import homeFR from '../../translations/pages/home/fr.json';
import ceremoniesEN from '../../translations/pages/ceremonies/en.json';
import ceremoniesES from '../../translations/pages/ceremonies/es.json';
import ceremoniesFR from '../../translations/pages/ceremonies/fr.json';
import pricingEN from '../../translations/pages/pricing/en.json';
import pricingES from '../../translations/pages/pricing/es.json';
import pricingFR from '../../translations/pages/pricing/fr.json';
import contactEN from '../../translations/pages/contact/en.json';
import contactES from '../../translations/pages/contact/es.json';
import contactFR from '../../translations/pages/contact/fr.json';
import faqEN from '../../translations/pages/faq/en.json';
import faqES from '../../translations/pages/faq/es.json';
import faqFR from '../../translations/pages/faq/fr.json';
import retreatsEN from '../../translations/pages/retreats/en.json';
import retreatsES from '../../translations/pages/retreats/es.json';
import retreatsFR from '../../translations/pages/retreats/fr.json';
import aboutEN from '../../translations/pages/about/en.json';
import aboutES from '../../translations/pages/about/es.json';
import aboutFR from '../../translations/pages/about/fr.json';

const homeTranslations = { en: homeEN, es: homeES, fr: homeFR };
const ceremoniesTranslations = { en: ceremoniesEN, es: ceremoniesES, fr: ceremoniesFR };
const pricingTranslations = { en: pricingEN, es: pricingES, fr: pricingFR };
const contactTranslations = { en: contactEN, es: contactES, fr: contactFR };
const faqTranslations = { en: faqEN, es: faqES, fr: faqFR };
const retreatsTranslations = { en: retreatsEN, es: retreatsES, fr: retreatsFR };
const aboutTranslations = { en: aboutEN, es: aboutES, fr: aboutFR };

export default function OnePagerPage() {
  const { language } = useLanguage();
  const home = homeTranslations[language];
  const ceremonies = ceremoniesTranslations[language];
  const pricing = pricingTranslations[language];
  const contact = contactTranslations[language];
  const faq = faqTranslations[language];
  const retreats = retreatsTranslations[language];
  const about = aboutTranslations[language];

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Select 6 FAQs for the one-pager
  const selectedFaqs = faq.faqs.slice(0, 6);

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
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-sacred-gold/90 text-earth-900 rounded-full font-medium text-lg hover:bg-sacred-gold transition-all shadow-lg hover:shadow-xl"
          >
            {home.hero.ctaButton}
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

              {/* Experience highlights from Ceremonies page */}
              <div className="bg-earth-900/50 rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-serif text-sacred-white mb-6 text-center">{ceremonies.what.experience.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-sacred-white">{ceremonies.what.experience.speed}</strong> {ceremonies.what.experience.speedValue}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-sacred-white">{ceremonies.what.experience.duration}</strong> {ceremonies.what.experience.durationValue}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-sacred-white">{ceremonies.what.experience.intensity}</strong> {ceremonies.what.experience.intensityValue}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple mt-1 text-xl">◆</span>
                    <span><strong className="text-sacred-white">{ceremonies.what.experience.outcome}</strong> {ceremonies.what.experience.outcomeValue}</span>
                  </p>
                </div>
              </div>

              <p className="border-l-2 border-sacred-purple/40 pl-6 italic text-desert-sand/70">
                "{home.whatIsBufo.quote}"
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
                  <div className="text-3xl text-ocean-turquoise">✓</div>
                  <h3 className="text-2xl font-serif text-earth-800">{home.whoThisIsFor.forTitle}</h3>
                </div>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  {home.whoThisIsFor.forList.map((item: string, index: number) => (
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
                  <h3 className="text-2xl font-serif text-earth-800">{home.whoThisIsFor.notForTitle}</h3>
                </div>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  {home.whoThisIsFor.notForList.map((item: string, index: number) => (
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
      </section>

      {/* ========== SECTION 5: THREE-PHASE JOURNEY ========== */}
      <section id="journey" className="bg-white pt-36 pb-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                {home.threePhaseJourney.title}
              </h2>
              <p className="text-lg text-earth-700/70 max-w-2xl mx-auto">
                {home.threePhaseJourney.description}
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
                    <h3 className="text-2xl font-serif text-sacred-white">{home.threePhaseJourney.preparation.title}</h3>
                    <p className="text-desert-sand/90 leading-relaxed text-sm">
                      {home.threePhaseJourney.preparation.description}
                    </p>
                    <p className="text-xs text-desert-sage font-medium">{home.threePhaseJourney.preparation.price}</p>
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
                    <h3 className="text-2xl font-serif text-sacred-white">{home.threePhaseJourney.ceremony.title}</h3>
                    <p className="text-desert-sand/90 leading-relaxed text-sm">
                      {home.threePhaseJourney.ceremony.description}
                    </p>
                    <p className="text-xs text-sacred-purple font-medium">{home.threePhaseJourney.ceremony.price}</p>
                  </div>
                </div>
              </div>

              {/* Phase 3: Integration */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-[4/5] relative">
                  <ResponsiveImage
                    src="/images/atmosphere/ceremony-07.jpeg"
                    alt="Integration and embodiment"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 via-earth-900/60 to-earth-900/90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center space-y-4">
                    <h3 className="text-2xl font-serif text-sacred-white">{home.threePhaseJourney.integration.title}</h3>
                    <p className="text-desert-sand/90 leading-relaxed text-sm">
                      {home.threePhaseJourney.integration.description}
                    </p>
                    <p className="text-xs text-ocean-turquoise font-medium">{home.threePhaseJourney.integration.price}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto border-t border-earth-700/10 pt-12">
              <p className="text-lg text-earth-700/70 italic leading-relaxed mb-8" style={{whiteSpace: 'pre-line'}}>
                "{home.threePhaseJourney.quote}"
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
            "{ceremonies.ceremonySpace.quote}"
          </p>
        </div>
      </div>

      {/* ========== SECTION 7: CEREMONY DETAILS ========== */}
      <section id="ceremonies" className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              {ceremonies.ceremonyDetails.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
                    {ceremonies.ceremonyDetails.facilitators.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    <strong className="text-earth-800">{ceremonies.ceremonyDetails.facilitators.name}</strong><br/>
                    {ceremonies.ceremonyDetails.facilitators.credentials}<br/>
                    {ceremonies.ceremonyDetails.facilitators.experience}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
                    {ceremonies.ceremonyDetails.location.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    {ceremonies.ceremonyDetails.location.place}<br/>
                    {ceremonies.ceremonyDetails.location.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
                    {ceremonies.ceremonyDetails.groupSize.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    {ceremonies.ceremonyDetails.groupSize.size}<br/>
                    {ceremonies.ceremonyDetails.groupSize.max}<br/>
                    {ceremonies.ceremonyDetails.groupSize.options}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
                    {ceremonies.ceremonyDetails.timeline.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    {ceremonies.ceremonyDetails.timeline.duration}<br/>
                    {ceremonies.ceremonyDetails.timeline.includes}<br/>
                    {ceremonies.ceremonyDetails.timeline.integration}<br/>
                    {ceremonies.ceremonyDetails.timeline.followUp}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
                    {ceremonies.ceremonyDetails.whatsIncluded.title}
                  </h3>
                  <div className="space-y-3 text-earth-700/80 leading-relaxed">
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{ceremonies.ceremonyDetails.whatsIncluded.item1}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{ceremonies.ceremonyDetails.whatsIncluded.item2}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{ceremonies.ceremonyDetails.whatsIncluded.item3}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{ceremonies.ceremonyDetails.whatsIncluded.item4}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{ceremonies.ceremonyDetails.whatsIncluded.item5}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{ceremonies.ceremonyDetails.whatsIncluded.item6}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-purple mt-1">✓</span>
                      <span>{ceremonies.ceremonyDetails.whatsIncluded.item7}</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4">
                    {ceremonies.ceremonyDetails.approach.title}
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    {ceremonies.ceremonyDetails.approach.line1}<br/>
                    {ceremonies.ceremonyDetails.approach.line2}<br/>
                    {ceremonies.ceremonyDetails.approach.line3}<br/>
                    {ceremonies.ceremonyDetails.approach.line4}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-serif text-earth-800 mb-4">{ceremonies.ceremonyDetails.requirements.title}</h3>
              <p className="text-earth-700/80 leading-relaxed max-w-2xl mx-auto">
                {ceremonies.ceremonyDetails.requirements.description}
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
                {about.hero.title}
              </h2>
              <p className="text-xl text-desert-sand/80 italic">
                {about.hero.subtitle}
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
                {home.seriLineage.paragraph1}
              </p>
              <p className="text-lg text-desert-sand/70 leading-relaxed mb-8">
                {home.seriLineage.paragraph2}
              </p>
              <p className="text-desert-clay/90 italic font-serif text-xl">
                "{home.seriLineage.quote}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 9: IMAGE BREAK - Mazunte Beach ========== */}
      <div className="h-[60vh] relative overflow-hidden">
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

      {/* ========== SECTION 10: RETREATS & SACRED CONTAINERS ========== */}
      <section id="retreats" className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                {retreats.hero.title}
              </h2>
              <p className="text-xl text-earth-700/80 italic max-w-3xl mx-auto">
                {retreats.hero.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Bufo Retreat Containers */}
              <div className="bg-sacred-cream rounded-2xl p-10">
                <h3 className="text-3xl font-serif text-earth-800 mb-4">
                  <span className="text-ocean-coral mr-2">✧</span>
                  {retreats.bufoRetreats.title}
                </h3>
                <p className="text-xl text-earth-700/80 italic mb-6">
                  {retreats.bufoRetreats.subtitle}
                </p>
                <p className="text-earth-700/80 leading-relaxed mb-6">
                  {retreats.bufoRetreats.description}
                </p>
                <div className="space-y-3 text-earth-700/80 mb-6">
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">✦</span>
                    <span><strong className="text-earth-800">{retreats.bufoRetreats.feature1Title}</strong> {retreats.bufoRetreats.feature1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">✦</span>
                    <span><strong className="text-earth-800">{retreats.bufoRetreats.feature2Title}</strong> {retreats.bufoRetreats.feature2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">✦</span>
                    <span><strong className="text-earth-800">{retreats.bufoRetreats.feature3Title}</strong> {retreats.bufoRetreats.feature3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">✦</span>
                    <span><strong className="text-earth-800">{retreats.bufoRetreats.feature4Title}</strong> {retreats.bufoRetreats.feature4}</span>
                  </p>
                </div>
                <div className="bg-medicine-venom rounded-xl p-4">
                  <p className="text-earth-800 font-medium">{retreats.bufoRetreats.investment} {retreats.bufoRetreats.investmentPrice}</p>
                </div>
              </div>

              {/* Integration Intensives */}
              <div className="bg-sacred-cream rounded-2xl p-10">
                <h3 className="text-3xl font-serif text-earth-800 mb-4">
                  <span className="text-ocean-coral mr-2">✧</span>
                  {retreats.integrationIntensives.title}
                </h3>
                <p className="text-xl text-earth-700/80 italic mb-6">
                  {retreats.integrationIntensives.subtitle}
                </p>
                <p className="text-earth-700/80 leading-relaxed mb-6">
                  {retreats.integrationIntensives.description}
                </p>
                <div className="space-y-3 text-earth-700/80 mb-6">
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">◆</span>
                    <span><strong className="text-earth-800">{retreats.integrationIntensives.feature1Title}</strong> {retreats.integrationIntensives.feature1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">◆</span>
                    <span><strong className="text-earth-800">{retreats.integrationIntensives.feature2Title}</strong> {retreats.integrationIntensives.feature2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">◆</span>
                    <span><strong className="text-earth-800">{retreats.integrationIntensives.feature3Title}</strong> {retreats.integrationIntensives.feature3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-coral">◆</span>
                    <span><strong className="text-earth-800">{retreats.integrationIntensives.feature4Title}</strong> {retreats.integrationIntensives.feature4}</span>
                  </p>
                </div>
                <div className="bg-medicine-venom rounded-xl p-4">
                  <p className="text-earth-800 font-medium">{retreats.integrationIntensives.investment} {retreats.integrationIntensives.investmentPrice}</p>
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
                The Sacred Space
              </h2>
              <p className="text-lg text-desert-sand/70 max-w-2xl mx-auto">
                A glimpse into the ceremony environment we create together
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {[
                { src: '/images/atmosphere/ceremony-20.jpeg', alt: 'Ceremony atmosphere' },
                { src: '/images/atmosphere/ceremony-21.jpeg', alt: 'Sacred ceremony space' },
                { src: '/images/atmosphere/ceremony-22.jpeg', alt: 'Preparation setting' },
                { src: '/images/atmosphere/ceremony-23.jpeg', alt: 'Integration circle' },
                { src: '/images/atmosphere/ceremony-24.jpg', alt: 'Sacred ceremony moment' },
                { src: '/images/atmosphere/ceremony-25.jpg', alt: 'Ceremony practice' },
                { src: '/images/atmosphere/ceremony-26.jpg', alt: 'Ritual space' },
                { src: '/images/atmosphere/ceremony-27.jpg', alt: 'Sacred container' },
                { src: '/images/atmosphere/ceremony-28.jpg', alt: 'Ceremony environment' },
                { src: '/images/atmosphere/ceremony-29.jpg', alt: 'Sacred atmosphere' },
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
                {pricing.journeyPackages.title}
              </h2>
              <p className="text-lg text-earth-700/70 max-w-3xl mx-auto">
                {pricing.journeyPackages.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Essential Journey */}
              <div className="bg-white rounded-2xl p-8 border border-desert-sage/30">
                <h3 className="text-2xl font-serif text-earth-800 mb-4">
                  <span className="text-desert-sage mr-2">○</span>
                  {pricing.journeyPackages.essential.title}
                </h3>
                <div className="text-4xl font-serif text-desert-sage mb-4">{pricing.journeyPackages.essential.price}</div>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {pricing.journeyPackages.essential.description}
                </p>
                <div className="space-y-3 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage">○</span>
                    <span>{pricing.journeyPackages.essential.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage">○</span>
                    <span>{pricing.journeyPackages.essential.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage">○</span>
                    <span>{pricing.journeyPackages.essential.item3}</span>
                  </p>
                </div>
              </div>

              {/* Complete Journey - Recommended */}
              <div className="bg-white rounded-2xl p-8 border-2 border-sacred-gold/30 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sacred-gold text-earth-900 px-4 py-1 rounded-full text-sm font-medium">
                  {pricing.journeyPackages.complete.badge}
                </div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4">
                  <span className="text-mineral-copper mr-2">◉</span>
                  {pricing.journeyPackages.complete.title}
                </h3>
                <div className="text-4xl font-serif text-mineral-copper mb-4">{pricing.journeyPackages.complete.price}</div>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {pricing.journeyPackages.complete.description}
                </p>
                <div className="space-y-3 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-mineral-copper">◉</span>
                    <span>{pricing.journeyPackages.complete.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-mineral-copper">◉</span>
                    <span>{pricing.journeyPackages.complete.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-mineral-copper">◉</span>
                    <span>{pricing.journeyPackages.complete.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-mineral-copper">◉</span>
                    <span>{pricing.journeyPackages.complete.item4}</span>
                  </p>
                </div>
              </div>

              {/* Deep Work Container */}
              <div className="bg-white rounded-2xl p-8 border border-sacred-purple/30">
                <h3 className="text-2xl font-serif text-earth-800 mb-4">
                  <span className="text-sacred-purple mr-2">⬢</span>
                  {pricing.journeyPackages.deepWork.title}
                </h3>
                <div className="text-4xl font-serif text-sacred-purple mb-4">{pricing.journeyPackages.deepWork.price}</div>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {pricing.journeyPackages.deepWork.description}
                </p>
                <div className="space-y-3 text-earth-700/80 text-sm">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">⬢</span>
                    <span>{pricing.journeyPackages.deepWork.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">⬢</span>
                    <span>{pricing.journeyPackages.deepWork.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">⬢</span>
                    <span>{pricing.journeyPackages.deepWork.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">⬢</span>
                    <span>{pricing.journeyPackages.deepWork.item4}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Accessibility */}
            <div className="bg-earth-800 rounded-2xl p-8 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-serif text-sacred-white mb-4">{pricing.accessibility.title}</h3>
              <p className="text-desert-sand/80 leading-relaxed mb-4">
                {pricing.accessibility.subtitle}
              </p>
              <p className="text-lg text-desert-sand/90 italic">
                "{pricing.accessibility.quote}"
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
                {ceremonies.medical.title}
              </h2>
              <p className="text-earth-700/80 leading-relaxed">
                {ceremonies.medical.description}
              </p>
            </div>

            <h3 className="text-2xl font-serif text-earth-800 mb-6">{ceremonies.medical.contraindications.title}</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="space-y-3 text-earth-700/80">
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{ceremonies.medical.contraindications.item1}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{ceremonies.medical.contraindications.item2}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{ceremonies.medical.contraindications.item3}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{ceremonies.medical.contraindications.item4}</span>
                </p>
              </div>
              <div className="space-y-3 text-earth-700/80">
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{ceremonies.medical.contraindications.item5}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{ceremonies.medical.contraindications.item6}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{ceremonies.medical.contraindications.item7}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{ceremonies.medical.contraindications.item8}</span>
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-6 text-sm text-earth-700/70 leading-relaxed">
              <p className="font-semibold text-earth-800 mb-2">{ceremonies.medical.disclaimer.title}</p>
              <p>{ceremonies.medical.disclaimer.text}</p>
            </div>

            {/* Safety Protocols */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-ocean-turquoise/10 rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-earth-800 mb-6 flex items-center gap-3">
                  <span className="text-ocean-turquoise text-2xl">◈</span>
                  Safety Protocols
                </h3>
                <div className="space-y-3 text-earth-700/80">
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>Somatic grounding techniques throughout</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>Breath anchoring and co-regulation</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>Full presence and energetic holding</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>Intentional, conservative dosing</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>Emergency protocols in place</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-ocean-turquoise">✓</span>
                    <span>Integration check-ins at 48hrs and 2 weeks</span>
                  </p>
                </div>
              </div>

              <div className="bg-sacred-purple/10 rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-earth-800 mb-6 flex items-center gap-3">
                  <span className="text-sacred-purple text-2xl">◈</span>
                  Our Ethics
                </h3>
                <div className="space-y-3 text-earth-700/80">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>Natural Bufo secretion obtained ethically—toads never harmed. We honor the desert, the lineage, and the beings who carry this medicine.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>Lineage-guided practices by trained specialists</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>Deep respect for Seri lineage and traditions</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>No spiritual bypassing—real integration required</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>Full consent and autonomy honored</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-purple">✓</span>
                    <span>Strict confidentiality maintained</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 15: APPLICATION PROCESS ========== */}
      <section id="apply" className="relative py-48">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-700 to-earth-900"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-8">
              {ceremonies.application.title}
            </h2>

            <p className="text-2xl font-serif italic text-sacred-purple/90 mb-8">
              "{ceremonies.application.quote}"
            </p>

            <p className="text-lg text-desert-sand/80 mb-12">
              {ceremonies.application.description}
            </p>

            <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-8 mb-12 text-left">
              <h3 className="text-2xl font-serif text-sacred-white mb-6 text-center">{ceremonies.application.steps.title}</h3>
              <div className="space-y-4 text-desert-sand/80">
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">1.</span>
                  <span>{ceremonies.application.steps.step1}</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">2.</span>
                  <span>{ceremonies.application.steps.step2}</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">3.</span>
                  <span>{ceremonies.application.steps.step3}</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">4.</span>
                  <span>{ceremonies.application.steps.step4}</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">5.</span>
                  <span>{ceremonies.application.steps.step5}</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-purple font-bold">6.</span>
                  <span>{ceremonies.application.steps.step6}</span>
                </p>
              </div>
            </div>

            {/* Direct Application Links */}
            <div className="space-y-8">
              {/* Safety & Screening Links */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#safety"
                  className="inline-block px-8 py-4 border-2 border-desert-clay text-desert-clay rounded-full hover:bg-desert-clay hover:text-white transition-all font-medium text-lg"
                >
                  Review Safety & Contraindications
                </a>
                <a
                  href="/bufo-screening"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-sacred-purple text-white rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
                >
                  Start Medical Screening →
                </a>
              </div>

              {/* Consent Form with Intro */}
              <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-8 border border-desert-sand/10">
                <h4 className="text-xl font-serif text-sacred-white mb-4">Before the Ceremony</h4>
                <p className="text-desert-sand/80 leading-relaxed mb-6">
                  The consent form is a sacred agreement between you and us. It ensures you understand the nature of this work, the risks involved, and your own responsibility in this process. Please read it with full presence before signing.
                </p>
                <a
                  href="/bufo-consent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-earth-800 text-white rounded-full hover:bg-earth-700 transition-all font-medium text-lg shadow-lg"
                >
                  Read & Sign Ceremony Consent Form →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 16: FAQ ACCORDION ========== */}
      <section id="faq" className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {faq.title}
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
                {contact.hero.title}
              </h2>
              <p className="text-xl text-desert-sand/80 italic">
                "{contact.hero.quote}"
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Primary CTA: Medical Screening */}
              <div className="bg-earth-900/50 backdrop-blur-xl rounded-2xl p-10 border border-sacred-gold/30 text-center mb-8">
                <h3 className="text-2xl font-serif text-sacred-white mb-4">Ready to Begin?</h3>
                <p className="text-desert-sand/80 leading-relaxed mb-8">
                  Start by completing the medical screening. This helps us understand if this work is right for you.
                </p>
                <a
                  href="/bufo-screening"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-5 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-xl shadow-lg"
                >
                  Start Medical Screening
                </a>
              </div>

              {/* Secondary: Questions via WhatsApp */}
              <div className="bg-earth-900/50 backdrop-blur-xl rounded-2xl p-6 border border-desert-sand/10 text-center mb-8">
                <p className="text-desert-sand/70 mb-4">Have questions first?</p>
                <a
                  href="https://wa.me/33646396325?text=Hello%2C%20I%20have%20a%20question%20about%20your%20ceremonies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-all font-medium shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Ask a Question on WhatsApp
                </a>
              </div>

              {/* Other Contact Options */}
              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href="mailto:hello@inner-ascend.com"
                  className="bg-earth-900/50 backdrop-blur-xl rounded-2xl p-6 border border-desert-sand/10 text-center hover:border-sacred-gold/30 transition-colors"
                >
                  <h4 className="text-lg font-serif text-sacred-white mb-2">Email</h4>
                  <p className="text-sacred-gold text-sm">hello@inner-ascend.com</p>
                </a>

                <a
                  href="https://instagram.com/inner__ascend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-earth-900/50 backdrop-blur-xl rounded-2xl p-6 border border-desert-sand/10 text-center hover:border-sacred-gold/30 transition-colors"
                >
                  <h4 className="text-lg font-serif text-sacred-white mb-2">Instagram</h4>
                  <p className="text-sacred-gold text-sm">@inner__ascend</p>
                </a>

                <div className="bg-earth-900/50 backdrop-blur-xl rounded-2xl p-6 border border-desert-sand/10 text-center">
                  <h4 className="text-lg font-serif text-sacred-white mb-2">Location</h4>
                  <p className="text-sacred-gold text-sm">Mazunte, Oaxaca, Mexico</p>
                </div>
              </div>
            </div>

            {/* Softer Closing */}
            <div className="mt-16 text-center">
              <p className="text-2xl font-serif text-desert-sand/70 italic">
                Walk slowly. If this is your path, you'll know.
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
