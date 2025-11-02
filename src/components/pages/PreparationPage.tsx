import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImagePlaceholder from '../ImagePlaceholder';
import { useLanguage } from '../../contexts/LanguageContext';
import preparationEN from '../../translations/pages/preparation/en.json';
import preparationES from '../../translations/pages/preparation/es.json';
import preparationFR from '../../translations/pages/preparation/fr.json';

const translations = { en: preparationEN, es: preparationES, fr: preparationFR };

export default function PreparationPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/atmosphere/ceremony-06.jpg"
            alt="Meditation altar with sacred objects for preparation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-desert-sage/90 font-serif font-light mb-6">
            {t.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto">
            {t.hero.description1}<br/>
            {t.hero.description2}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-desert-sage/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-desert-sage/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Why Preparation Matters */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.whyMandatory.title}
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg mb-16">
              <p className="text-2xl font-serif text-desert-sage text-center mb-8">
                {t.whyMandatory.subtitle1}<br/>
                {t.whyMandatory.subtitle2}
              </p>

              <p>
                {t.whyMandatory.p1}
              </p>

              <p>
                {t.whyMandatory.p2}
              </p>

              <p className="border-l-4 border-desert-sage/40 pl-6 italic text-earth-700/70">
                {t.whyMandatory.p3}
              </p>

              <p>
                <strong className="text-earth-800">{t.whyMandatory.p4}</strong>{t.whyMandatory.p4Detail}
              </p>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8">
              <h3 className="text-2xl font-serif text-earth-800 mb-4">{t.whyMandatory.noteTitle}</h3>
              <p className="text-earth-700/80 leading-relaxed">
                {t.whyMandatory.noteDescription}
              </p>
            </div>

            {/* Preparation practices gallery */}
            <div className="mt-20">
              <h3 className="text-2xl md:text-3xl font-serif text-earth-800 mb-8 text-center">
                Preparation Practices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/images/atmosphere/ceremony-18.jpeg"
                    alt="Meditation and breathwork practice"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth-900/90 to-transparent p-4">
                    <p className="text-sacred-white text-sm font-serif">Meditation & Breathwork</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/images/atmosphere/ceremony-05.jpg"
                    alt="Journaling and reflection"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth-900/90 to-transparent p-4">
                    <p className="text-sacred-white text-sm font-serif">Journaling & Reflection</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/images/atmosphere/ceremony-13.jpeg"
                    alt="Sacred space creation"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth-900/90 to-transparent p-4">
                    <p className="text-sacred-white text-sm font-serif">Sacred Space Creation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breathwork Image */}
      <div className="h-[60vh] relative overflow-hidden">
        <img
          src="/images/atmosphere/ceremony-09.jpg"
          alt="Person in meditative breathwork posture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/20 to-earth-900/50"></div>
      </div>

      {/* What Preparation Includes */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              {t.whatIncludes.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Session 1 */}
              <div className="bg-sacred-cream rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl text-desert-sage">○</span>
                  <h3 className="text-2xl font-serif text-earth-800">{t.whatIncludes.session1.title}</h3>
                </div>
                <p className="text-sm text-desert-sage mb-6">{t.whatIncludes.session1.duration}</p>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage mt-1">◇</span>
                    <span><strong>{t.whatIncludes.session1.item1Title}</strong>{t.whatIncludes.session1.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage mt-1">◇</span>
                    <span><strong>{t.whatIncludes.session1.item2Title}</strong>{t.whatIncludes.session1.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage mt-1">◇</span>
                    <span><strong>{t.whatIncludes.session1.item3Title}</strong>{t.whatIncludes.session1.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage mt-1">◇</span>
                    <span><strong>{t.whatIncludes.session1.item4Title}</strong>{t.whatIncludes.session1.item4}</span>
                  </p>
                </div>
              </div>

              {/* Session 2 (Optional but Recommended) */}
              <div className="bg-sacred-cream rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl text-desert-sage">◉</span>
                  <h3 className="text-2xl font-serif text-earth-800">{t.whatIncludes.session2.title}</h3>
                </div>
                <p className="text-sm text-desert-sage mb-6">{t.whatIncludes.session2.duration}</p>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage mt-1">◇</span>
                    <span><strong>{t.whatIncludes.session2.item1Title}</strong>{t.whatIncludes.session2.item1}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage mt-1">◇</span>
                    <span><strong>{t.whatIncludes.session2.item2Title}</strong>{t.whatIncludes.session2.item2}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage mt-1">◇</span>
                    <span><strong>{t.whatIncludes.session2.item3Title}</strong>{t.whatIncludes.session2.item3}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-sage mt-1">◇</span>
                    <span><strong>{t.whatIncludes.session2.item4Title}</strong>{t.whatIncludes.session2.item4}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 max-w-3xl mx-auto">
              <h4 className="text-xl font-serif text-earth-800 mb-4 text-center">{t.whatIncludes.betweenTitle}</h4>
              <p className="text-earth-700/80 leading-relaxed text-center">
                {t.whatIncludes.betweenDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Screening */}
      <div className="bg-sacred-cream py-48">
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

            <h3 className="text-2xl font-serif text-earth-800 mb-6">{t.medical.contraindicationsTitle}</h3>
            <p className="text-earth-700/80 mb-6">
              {t.medical.contraindicationsIntro}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="space-y-3 text-earth-700/80">
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.item1}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.item2}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.item3}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.item4}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.item5}</span>
                </p>
              </div>
              <div className="space-y-3 text-earth-700/80">
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.item6}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.item7}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.item8}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.item9}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>{t.medical.item10}</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-desert-sage/30">
              <p className="text-earth-700/80 leading-relaxed mb-4">
                <strong className="text-earth-800">{t.medical.disclaimer1}</strong>{t.medical.disclaimer2}
              </p>
              <p className="text-sm text-earth-700/70 italic">
                {t.medical.disclaimer3}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pre-Ceremony Practices */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.preCeremony.title}
            </h2>

            <p className="text-lg text-earth-700/80 leading-relaxed text-center mb-12 max-w-2xl mx-auto">
              {t.preCeremony.intro}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-serif text-earth-800">{t.preCeremony.somatic.title}</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  {t.preCeremony.somatic.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-serif text-earth-800">{t.preCeremony.rituals.title}</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  {t.preCeremony.rituals.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-serif text-earth-800">{t.preCeremony.dietary.title}</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  {t.preCeremony.dietary.description}
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8">
              <h4 className="text-xl font-serif text-earth-800 mb-4">{t.preCeremony.daysBeforeTitle}</h4>
              <div className="space-y-3 text-earth-700/80 leading-relaxed">
                <p className="flex items-start gap-3">
                  <span className="text-desert-sage">⊹</span>
                  <span>{t.preCeremony.daysBefore1}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-sage">⊹</span>
                  <span>{t.preCeremony.daysBefore2}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-sage">⊹</span>
                  <span>{t.preCeremony.daysBefore3}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-sage">⊹</span>
                  <span>{t.preCeremony.daysBefore4}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-sage">⊹</span>
                  <span>{t.preCeremony.daysBefore5}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12">
              {t.investment.title}
            </h2>

            <div className="bg-white rounded-2xl p-12 border border-earth-700/20 mb-12">
              <h3 className="text-3xl font-serif text-earth-800 mb-4">{t.investment.sessionTitle}</h3>
              <div className="text-5xl font-serif text-desert-sage mb-6">{t.investment.price}</div>
              <p className="text-lg text-earth-700/70 mb-8">{t.investment.perSession}</p>

              <div className="text-earth-700/80 leading-relaxed max-w-md mx-auto">
                <p className="mb-4">
                  <strong className="text-earth-800">{t.investment.typical}</strong>{t.investment.typicalDetail}
                </p>
                <p className="text-sm text-earth-700/60">
                  {t.investment.delivery}
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 mb-12">
              <h4 className="text-xl font-serif text-earth-800 mb-4">{t.investment.slidingTitle}</h4>
              <p className="text-earth-700/80 leading-relaxed">
                {t.investment.slidingDescription}
              </p>
              <p className="text-earth-700/70 italic mt-4">
                "{t.investment.quote}"
              </p>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg text-earth-700/80">
                {t.investment.readyQuestion}
              </p>
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-desert-sage text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                {t.investment.cta}
              </Link>
              <p className="text-sm text-earth-700/60">
                {t.investment.process}
              </p>
              <p className="text-base text-earth-700/70 mt-6">
                <Link to="/pricing" className="text-desert-sage hover:text-sacred-amber transition-colors">
                  View complete journey pricing →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="relative py-48">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/70 to-earth-900/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-sacred-white mb-8">
              {t.nextSteps.title}
            </h2>

            <div className="space-y-6 text-desert-sand/80 text-lg">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl font-serif text-desert-sage">{t.nextSteps.preparation}</span>
                <span className="text-desert-sand/50">→</span>
                <span className="text-2xl font-serif text-desert-sage">{t.nextSteps.ceremony}</span>
                <span className="text-desert-sand/50">→</span>
                <span className="text-2xl font-serif text-desert-sage">{t.nextSteps.integration}</span>
              </div>

              <p className="text-desert-sand/70 italic max-w-2xl mx-auto pt-8">
                {t.nextSteps.description}
              </p>
            </div>

            <div className="mt-12 space-y-4 text-desert-sand/70">
              <p>
                <Link to="/ceremonies" className="text-desert-sage hover:text-sacred-amber transition-colors">
                  {t.nextSteps.learnCeremony}
                </Link>
              </p>
              <p>
                <Link to="/integration" className="text-desert-sage hover:text-sacred-amber transition-colors">
                  {t.nextSteps.learnIntegration}
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
