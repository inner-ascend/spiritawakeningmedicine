import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

import { useLanguage } from '../../contexts/LanguageContext';
import integrationEN from '../../translations/pages/integration/en.json';
import integrationES from '../../translations/pages/integration/es.json';
import integrationFR from '../../translations/pages/integration/fr.json';

const translations = { en: integrationEN, es: integrationES, fr: integrationFR };

export default function IntegrationPage() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/atmosphere/ceremony-03.jpg"
            alt="Integration circle in nature with people reflecting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-4xl text-ocean-turquoise/90 font-serif font-light mb-8 italic leading-relaxed">
            "{t.hero.quote1}<br/>{t.hero.quote2}"
          </p>
          <p className="text-lg md:text-xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto">
            {t.hero.description1}<br/>
            {t.hero.description2}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-ocean-turquoise/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-ocean-turquoise/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Why Integration Is Sacred */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.whyNonNegotiable.title}
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg mb-16">
              <p className="text-2xl font-serif text-ocean-turquoise text-center mb-8">
                {t.whyNonNegotiable.subtitle1}<br/>
                {t.whyNonNegotiable.subtitle2}
              </p>

              <p>
                {t.whyNonNegotiable.p1}
              </p>

              <p>
                {t.whyNonNegotiable.p2}
              </p>

              <p>
                {t.whyNonNegotiable.p3}
              </p>

              <p className="border-l-4 border-ocean-turquoise/40 pl-6 italic text-earth-700/70">
                <strong className="text-earth-800 not-italic">{t.whyNonNegotiable.p4}</strong><br/>
                {t.whyNonNegotiable.p4Detail}
              </p>

              <p>
                <strong className="text-earth-800">{t.whyNonNegotiable.p5}</strong>{t.whyNonNegotiable.p5Detail}
              </p>

              <p>
                {t.whyNonNegotiable.p6}
              </p>

              <p>
                <strong className="text-earth-800">{t.whyNonNegotiable.p7}</strong>{t.whyNonNegotiable.p7Detail}
              </p>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8">
              <h3 className="text-2xl font-serif text-earth-800 mb-4">{t.whyNonNegotiable.includedTitle}</h3>
              <p className="text-earth-700/80 leading-relaxed">
                {t.whyNonNegotiable.includedDescription}
              </p>
            </div>

            {/* Integration circle images */}
            <div className="mt-20">
              <h3 className="text-2xl md:text-3xl font-serif text-earth-800 mb-8 text-center">
                Integration in Practice
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-square relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/images/atmosphere/ceremony-07.jpeg"
                    alt="Integration circles"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/images/atmosphere/ceremony-08.jpeg"
                    alt="Reflection practices"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/images/atmosphere/ceremony-11.jpeg"
                    alt="Nature connection"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/images/atmosphere/ceremony-12.jpeg"
                    alt="Community support"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nature Reflection Image */}
      <div className="h-[60vh] relative overflow-hidden">
        <img
          src="/images/atmosphere/ceremony-14.jpg"
          alt="Person journaling in nature for integration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/20 to-earth-900/50"></div>
      </div>

      {/* What Integration Includes */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              {t.whatIncludes.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-ocean-turquoise">◈</span>
                    {t.whatIncludes.emotional.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.whatIncludes.emotional.description}
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-ocean-turquoise">◈</span>
                    {t.whatIncludes.storyUnwinding.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.whatIncludes.storyUnwinding.description}
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-ocean-turquoise">◈</span>
                    {t.whatIncludes.identity.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.whatIncludes.identity.description}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-ocean-turquoise">◈</span>
                    {t.whatIncludes.trauma.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.whatIncludes.trauma.description}
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-ocean-turquoise">◈</span>
                    {t.whatIncludes.rituals.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.whatIncludes.rituals.description}
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-ocean-turquoise">◈</span>
                    {t.whatIncludes.life.title}
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    {t.whatIncludes.life.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-earth-700/80 leading-relaxed italic text-center">
                "{t.whatIncludes.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Packages CTA */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
              Integration Packages & Pricing
            </h2>
            <p className="text-lg text-earth-700/70 mb-8 leading-relaxed">
              View all integration options—single sessions, 4-session packages, and extended containers—plus our sliding scale accessibility program.
            </p>
            <Link
              to="/pricing"
              className="inline-block bg-ocean-turquoise hover:bg-sacred-gold text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Pricing & Packages →
            </Link>
          </div>
        </div>
      </div>

      {/* Integration Modalities */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.modalities.title}
            </h2>

            <p className="text-lg text-earth-700/80 text-center mb-16 max-w-3xl mx-auto">
              {t.modalities.intro}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-serif text-earth-800">
                  <span className="text-ocean-turquoise mr-2">⚛</span>
                  {t.modalities.energyHealing.title}
                </h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  {t.modalities.energyHealing.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-serif text-earth-800">
                  <span className="text-ocean-turquoise mr-2">⚛</span>
                  {t.modalities.familyConstellations.title}
                </h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  {t.modalities.familyConstellations.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-serif text-earth-800">
                  <span className="text-ocean-turquoise mr-2">⚛</span>
                  {t.modalities.somatic.title}
                </h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  {t.modalities.somatic.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-serif text-earth-800">
                  <span className="text-ocean-turquoise mr-2">⚛</span>
                  {t.modalities.meditation.title}
                </h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  {t.modalities.meditation.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-serif text-earth-800">
                  <span className="text-ocean-turquoise mr-2">⚛</span>
                  {t.modalities.innerChild.title}
                </h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  {t.modalities.innerChild.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-serif text-earth-800">
                  <span className="text-ocean-turquoise mr-2">⚛</span>
                  {t.modalities.channeled.title}
                </h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  {t.modalities.channeled.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When to Seek Integration */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.whenToSeek.title}
            </h2>

            <div className="space-y-6 text-earth-700/80 leading-relaxed">
              <div className="bg-white rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-ocean-turquoise text-2xl">⊕</span>
                  <span><strong className="text-earth-800">{t.whenToSeek.item1}</strong>{t.whenToSeek.item1Detail}</span>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-ocean-turquoise text-2xl">⊕</span>
                  <span><strong className="text-earth-800">{t.whenToSeek.item2}</strong>{t.whenToSeek.item2Detail}</span>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-ocean-turquoise text-2xl">⊕</span>
                  <span><strong className="text-earth-800">{t.whenToSeek.item3}</strong>{t.whenToSeek.item3Detail}</span>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-ocean-turquoise text-2xl">⊕</span>
                  <span><strong className="text-earth-800">{t.whenToSeek.item4}</strong>{t.whenToSeek.item4Detail}</span>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-ocean-turquoise text-2xl">⊕</span>
                  <span><strong className="text-earth-800">{t.whenToSeek.item5}</strong>{t.whenToSeek.item5Detail}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative py-48">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/70 to-earth-900/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-8">
              {t.cta.title}
            </h2>

            <div className="space-y-6 text-desert-sand/80 leading-relaxed text-lg mb-12">
              <p>
                {t.cta.p1}
              </p>
              <p className="italic text-desert-sand/70">
                {t.cta.p2}
              </p>
            </div>

            <div className="space-y-4">
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-ocean-turquoise text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                {t.cta.button}
              </Link>
              <p className="text-sm text-desert-sand/60">
                {t.cta.details}
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-desert-sand/20">
              <p className="text-desert-sand/70">
                <Link to="/ceremonies" className="text-ocean-turquoise hover:text-sacred-amber transition-colors">
                  {t.cta.linkCeremonies}
                </Link>
                <span className="mx-4 text-desert-sand/40">|</span>
                <Link to="/preparation" className="text-ocean-turquoise hover:text-sacred-amber transition-colors">
                  {t.cta.linkPreparation}
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
