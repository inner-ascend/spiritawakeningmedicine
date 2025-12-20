import { Link } from 'react-router-dom';
import { AlertTriangle, Heart, Brain, Pill, ShieldAlert, HelpCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useLanguage } from '../../contexts/LanguageContext';
import translationsEN from '../../translations/bufo/contraindications-en.json';
import translationsES from '../../translations/bufo/contraindications-es.json';

const translations = {
  en: translationsEN,
  es: translationsES,
};

const BufoContraindicationsPage = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-sacred-cream">
      <Navigation />
      {/* Header */}
      <div className="pt-32 pb-16 bg-earth-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-desert-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldAlert className="w-8 h-8 text-desert-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
              {t.header.title}
            </h1>
            <p className="text-xl text-sacred-white/90 leading-relaxed mb-4">
              {t.header.subtitle}
            </p>
            <p className="text-sacred-white/70 leading-relaxed">
              {t.header.description}
            </p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-desert-400/10 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-desert-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-medium text-earth-900 mb-2">
                  {t.notice.title}
                </h2>
                <p className="text-earth-700 leading-relaxed">
                  {t.notice.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Medications Section */}
            <div className="bg-white/80 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-desert-400/20 rounded-full flex items-center justify-center">
                  <Pill className="w-6 h-6 text-desert-500" />
                </div>
                <h2 className="text-2xl font-serif text-earth-900">{t.medications.title}</h2>
              </div>

              <p className="text-earth-700 mb-6 leading-relaxed">
                {t.medications.description} <strong>{t.medications.warning}</strong>
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="text-lg font-medium text-earth-900 mb-2">
                    {t.medications.absolute.title}
                  </h3>
                  <ul className="space-y-2 text-earth-700">
                    {t.medications.absolute.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>{item.name}</strong> {item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-medium text-earth-900 mb-2">
                    {t.medications.assessment.title}
                  </h3>
                  <ul className="space-y-2 text-earth-700">
                    {t.medications.assessment.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span><strong>{item.name}</strong> {item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-sacred-cream rounded-xl">
                <p className="text-earth-600 text-sm leading-relaxed">
                  <strong>{t.medications.note.important}</strong> {t.medications.note.text}
                </p>
              </div>
            </div>

            {/* Cardiovascular Section */}
            <div className="bg-white/80 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-desert-400/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-desert-500" />
                </div>
                <h2 className="text-2xl font-serif text-earth-900">{t.cardiovascular.title}</h2>
              </div>

              <p className="text-earth-700 mb-6 leading-relaxed">
                {t.cardiovascular.description}
              </p>

              <ul className="space-y-3 text-earth-700">
                {t.cardiovascular.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>{item.name}</strong>{item.description && ` ${item.description}`}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Psychiatric Section */}
            <div className="bg-white/80 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-desert-400/20 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-desert-500" />
                </div>
                <h2 className="text-2xl font-serif text-earth-900">{t.psychiatric.title}</h2>
              </div>

              <p className="text-earth-700 mb-6 leading-relaxed">
                {t.psychiatric.description}
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="text-lg font-medium text-earth-900 mb-2">
                    {t.psychiatric.absolute.title}
                  </h3>
                  <ul className="space-y-2 text-earth-700">
                    {t.psychiatric.absolute.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>{item.name}</strong> {item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-medium text-earth-900 mb-2">
                    {t.psychiatric.assessment.title}
                  </h3>
                  <ul className="space-y-2 text-earth-700">
                    {t.psychiatric.assessment.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span><strong>{item.name}</strong> {item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="text-lg font-medium text-earth-900 mb-2">
                    {t.psychiatric.neurological.title}
                  </h3>
                  <ul className="space-y-2 text-earth-700">
                    {t.psychiatric.neurological.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>{item.name}</strong>{item.description && ` ${item.description}`}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Other Conditions */}
            <div className="bg-white/80 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-desert-400/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-desert-500" />
                </div>
                <h2 className="text-2xl font-serif text-earth-900">{t.other.title}</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-earth-900 mb-3">{t.other.pregnancy.title}</h3>
                  <p className="text-earth-700 leading-relaxed">
                    <strong>{t.other.pregnancy.label}</strong> {t.other.pregnancy.text}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-earth-900 mb-3">{t.other.respiratory.title}</h3>
                  <ul className="space-y-2 text-earth-700">
                    {t.other.respiratory.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>{item.name}</strong> {item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-earth-900 mb-3">{t.other.medical.title}</h3>
                  <ul className="space-y-2 text-earth-700">
                    {t.other.medical.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>{item.name}</strong> {item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-earth-900 mb-3">{t.other.substance.title}</h3>
                  <ul className="space-y-2 text-earth-700">
                    {t.other.substance.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className={`${item.type === 'absolute' ? 'text-red-500' : 'text-amber-500'} mt-1`}>•</span>
                        <span><strong>{item.name}</strong> {item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-earth-900 mb-3">{t.other.age.title}</h3>
                  <p className="text-earth-700 leading-relaxed">
                    {t.other.age.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Questions Section */}
            <div className="bg-desert-400/10 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-desert-400/20 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-desert-500" />
                </div>
                <h2 className="text-2xl font-serif text-earth-900">{t.questions.title}</h2>
              </div>

              <div className="space-y-4 text-earth-700 leading-relaxed">
                <p>
                  <strong>{t.questions.unsure}</strong> {t.questions.unsureText}
                </p>
                <p>
                  <strong>{t.questions.contraindicated}</strong> {t.questions.contraindicatedText}
                </p>
                <p>
                  <strong>{t.questions.medications}</strong> {t.questions.medicationsText}
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6">
              <p className="text-earth-600 italic">
                {t.cta.text}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/bufo-screening"
                  className="px-8 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-colors font-medium"
                >
                  {t.cta.screening}
                </Link>
                <Link
                  to="/#contact"
                  className="px-8 py-4 border-2 border-earth-700 text-earth-700 rounded-full hover:bg-earth-700 hover:text-sacred-cream transition-colors font-medium"
                >
                  {t.cta.contact}
                </Link>
              </div>

              <p className="text-earth-500 text-sm">
                {t.cta.note}
              </p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BufoContraindicationsPage;
