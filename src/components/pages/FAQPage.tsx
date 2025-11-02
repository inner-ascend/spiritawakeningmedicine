import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useLanguage } from '../../contexts/LanguageContext';
import en from '../../translations/pages/faq/en.json';
import es from '../../translations/pages/faq/es.json';
import fr from '../../translations/pages/faq/fr.json';

const translations = { en, es, fr };

export default function FAQPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = t.faqs;

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-earth-800/60 to-earth-900/80"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-5xl text-jungle-sage/60 mb-8">?</div>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto">
            {t.hero.description}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-jungle-sage/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-jungle-sage/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.title}
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl border border-earth-700/10 overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-medicine-venom/30 transition-colors"
                  >
                    <span className="text-xl font-serif text-earth-800 pr-4">{faq.question}</span>
                    <span className="text-jungle-sage text-2xl flex-shrink-0">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-8 pb-6">
                      <p className="text-earth-700/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Safety Protocols */}
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              Safety Protocols
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">⚕️</span>
                    Medical Screening
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Comprehensive health questionnaire required before ceremony. Medical history,
                    current medications, and contraindications are thoroughly reviewed.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🧠</span>
                    Trauma-Informed Approach
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    All facilitation is trauma-informed. Your nervous system is respected. All reactions
                    are welcomed. No pushing, no forcing. Full presence and energetic holding.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    Small Group Size
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Maximum 2-4 people per ceremony ensures every participant receives full attention,
                    energetic holding, and physical safety monitoring.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🏔️</span>
                    Sacred Container
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Ceremonies held in private, nature-based setting in Mazunte, Mexico. No crowds,
                    no distractions. Full day dedicated to the journey and integration.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🔄</span>
                    Integration Support
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Integration session within 48 hours included with every ceremony. 2-week follow-up
                    support. Ongoing integration packages available.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    Lineage Respect
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Work held in deep respect for the Seri Tribe lineage. Not commercialized, not
                    marketed publicly. Offered only through discernment and sacred relationship.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-desert-clay/10 border-l-4 border-desert-clay rounded-r-2xl p-8">
              <h3 className="text-2xl font-serif text-earth-800 mb-4">Medical Disclaimer</h3>
              <p className="text-earth-700/80 leading-relaxed mb-4">
                <strong>All services are complementary and do not replace medical, psychological, or psychiatric care.</strong>
              </p>
              <p className="text-earth-700/70 leading-relaxed">
                This is sacred medicine work, not medical treatment. If you have any medical conditions,
                please consult with your healthcare provider before applying. The facilitator reserves
                the right to decline working with anyone if medical screening reveals contraindications
                or if mutual discernment suggests this is not the right time or fit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contraindications Detail */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              Detailed Contraindications
            </h2>

            <div className="bg-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-serif text-earth-800 mb-6">Do NOT work with Bufo if you have:</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2 flex items-center gap-2">
                      <span className="text-desert-clay">×</span>
                      Cardiovascular Issues
                    </h4>
                    <p className="text-sm text-earth-700/70 pl-6">
                      Heart disease, arrhythmia, angina, history of heart attack, uncontrolled high blood pressure
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2 flex items-center gap-2">
                      <span className="text-desert-clay">×</span>
                      Mental Health Conditions
                    </h4>
                    <p className="text-sm text-earth-700/70 pl-6">
                      Schizophrenia, psychosis, bipolar disorder (manic phase), severe dissociative disorders
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2 flex items-center gap-2">
                      <span className="text-desert-clay">×</span>
                      Neurological Conditions
                    </h4>
                    <p className="text-sm text-earth-700/70 pl-6">
                      Epilepsy, seizure disorders, severe migraines, recent head trauma
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2 flex items-center gap-2">
                      <span className="text-desert-clay">×</span>
                      Pregnancy & Nursing
                    </h4>
                    <p className="text-sm text-earth-700/70 pl-6">
                      Pregnant, breastfeeding, or trying to conceive
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2 flex items-center gap-2">
                      <span className="text-desert-clay">×</span>
                      Medication Interactions
                    </h4>
                    <p className="text-sm text-earth-700/70 pl-6">
                      SSRIs, SNRIs, MAOIs, lithium, some blood pressure medications, anticoagulants
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2 flex items-center gap-2">
                      <span className="text-desert-clay">×</span>
                      Recent Surgery
                    </h4>
                    <p className="text-sm text-earth-700/70 pl-6">
                      Major surgery within the last 6 months, ongoing recovery from injury
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2 flex items-center gap-2">
                      <span className="text-desert-clay">×</span>
                      Active Substance Use
                    </h4>
                    <p className="text-sm text-earth-700/70 pl-6">
                      Active alcohol or drug addiction, substance abuse without recovery support
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2 flex items-center gap-2">
                      <span className="text-desert-clay">×</span>
                      Severe Unprocessed Trauma
                    </h4>
                    <p className="text-sm text-earth-700/70 pl-6">
                      Recent severe trauma without therapeutic support, active PTSD without treatment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-6 text-center">
              <p className="text-earth-700/80 leading-relaxed">
                <strong className="text-earth-800">If you're unsure whether you have any contraindications,</strong><br/>
                consult with your healthcare provider and disclose all information during the medical screening process.
                Honesty saves lives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Still Have Questions */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/70 to-earth-900/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl text-sacred-gold/60 mb-8">✦</div>
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-8">
              {t.cta.title}
            </h2>

            <p className="text-lg text-desert-sand/80 leading-relaxed mb-12">
              {t.cta.description}
            </p>

            <div className="space-y-4">
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                {t.cta.button}
              </Link>
              <p className="text-sm text-desert-sand/60">
                Or explore:
                <Link to="/ceremonies" className="text-sacred-gold hover:text-sacred-amber transition-colors ml-2">
                  Ceremonies
                </Link>
                <span className="mx-2">·</span>
                <Link to="/preparation" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  Preparation
                </Link>
                <span className="mx-2">·</span>
                <Link to="/integration" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  Integration
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
