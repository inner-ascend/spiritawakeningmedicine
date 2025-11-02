import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImagePlaceholder from '../ImagePlaceholder';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../contexts/LanguageContext';
import contactEN from '../../translations/pages/contact/en.json';
import contactES from '../../translations/pages/contact/es.json';
import contactFR from '../../translations/pages/contact/fr.json';

const translations = { en: contactEN, es: contactES, fr: contactFR };

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      await emailjs.send(
        'service_ld9gstj',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'spiritawakeningmedicine@gmail.com'
        },
        'v57Ta98pwBDWpoe8o'
      );

      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(t.contactForm.error);
      console.error('EmailJS error:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/atmosphere/ceremony-02.jpg"
            alt="Sacred entrance to ceremony space in Mazunte"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-sacred-gold/90 font-serif italic mb-8">
            "{t.hero.quote}"
          </p>
          <p className="text-lg md:text-xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto">
            {t.hero.description1}<br/>
            {t.hero.description2}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.applicationProcess.title}
            </h2>

            <div className="space-y-6 text-earth-700/80 leading-relaxed text-lg mb-16">
              <p className="text-center text-2xl font-serif text-sacred-gold italic mb-8">
                {t.applicationProcess.subtitle}
              </p>

              <p>
                {t.applicationProcess.intro1}
              </p>

              <p>
                <strong className="text-earth-800">{t.applicationProcess.intro2}</strong>{t.applicationProcess.intro2Strong}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-serif text-earth-800 mb-8 text-center">{t.applicationProcess.stepsTitle}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">{t.applicationProcess.step1.title}</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      {t.applicationProcess.step1.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">{t.applicationProcess.step2.title}</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      {t.applicationProcess.step2.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">{t.applicationProcess.step3.title}</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      {t.applicationProcess.step3.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">{t.applicationProcess.step4.title}</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      {t.applicationProcess.step4.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">{t.applicationProcess.step5.title}</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      {t.applicationProcess.step5.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">{t.applicationProcess.step6.title}</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      {t.applicationProcess.step6.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-6 text-center">
              <p className="text-earth-700/80 leading-relaxed italic">
                "{t.applicationProcess.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nina & Astral Portrait */}
      <div className="h-[60vh] relative overflow-hidden">
        <img
          src="/images/portraits/nina-astral-together.jpg"
          alt="Nina and Astral - Ceremony facilitators"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/20 to-earth-900/50"></div>
      </div>

      {/* Tally Form Embed */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-8 text-center">
              {t.tallyForm.title}
            </h2>

            <p className="text-lg text-earth-700/70 text-center mb-12 leading-relaxed">
              {t.tallyForm.description}
            </p>

            {/* Tally Form Iframe */}
            <div className="bg-sacred-cream rounded-2xl p-8">
              <iframe
                src="https://tally.so/r/mYXQVN"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title={t.tallyForm.iframeTitle}
                className="rounded-lg"
              />
            </div>

            <p className="text-sm text-earth-700/60 text-center mt-8">
              {t.tallyForm.troubleText}{' '}
              <a
                href="https://tally.so/r/mYXQVN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sacred-gold hover:text-sacred-amber transition-colors"
              >
                {t.tallyForm.openInNew}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Simple Contact Form */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-8 text-center">
              {t.contactForm.title}
            </h2>

            <p className="text-lg text-earth-700/70 text-center mb-12 leading-relaxed">
              {t.contactForm.description}
            </p>

            {sent ? (
              <div className="bg-white rounded-2xl p-12 text-center border-2 border-sacred-gold/40">
                <h3 className="text-2xl font-serif text-earth-800 mb-4">{t.contactForm.successTitle}</h3>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  {t.contactForm.successMessage}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-sacred-gold hover:text-sacred-amber transition-colors font-medium"
                >
                  {t.contactForm.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-earth-800 font-serif mb-2">
                    {t.contactForm.fields.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 transition-all"
                    placeholder={t.contactForm.fields.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-earth-800 font-serif mb-2">
                    {t.contactForm.fields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 transition-all"
                    placeholder={t.contactForm.fields.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-earth-800 font-serif mb-2">
                    {t.contactForm.fields.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 transition-all"
                    placeholder={t.contactForm.fields.subjectPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-earth-800 font-serif mb-2">
                    {t.contactForm.fields.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 transition-all resize-none"
                    placeholder={t.contactForm.fields.messagePlaceholder}
                  />
                </div>

                {error && (
                  <div className="bg-desert-clay/10 border-l-4 border-desert-clay rounded-r-lg p-4">
                    <p className="text-earth-700/80 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? t.contactForm.sending : t.contactForm.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Alternative Contact Methods */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              {t.otherWays.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Email */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4">{t.otherWays.email.title}</h3>
                <p className="text-earth-700/70 mb-4 leading-relaxed text-sm">
                  {t.otherWays.email.description}
                </p>
                <a
                  href="mailto:spiritawakeningmedicine@gmail.com"
                  className="text-sacred-gold hover:text-sacred-amber transition-colors font-medium"
                >
                  {t.otherWays.email.address}
                </a>
              </div>

              {/* WhatsApp/Telegram */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif text-earth-800 mb-4">{t.otherWays.messaging.title}</h3>
                <p className="text-earth-700/70 mb-4 leading-relaxed text-sm">
                  {t.otherWays.messaging.description}
                </p>
                <p className="text-sacred-gold font-medium mb-2">{t.otherWays.messaging.phone}</p>
                <p className="text-xs text-earth-700/60">
                  {t.otherWays.messaging.telegram}
                </p>
              </div>

              {/* Instagram */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4">{t.otherWays.instagram.title}</h3>
                <p className="text-earth-700/70 mb-4 leading-relaxed text-sm">
                  {t.otherWays.instagram.description}
                </p>
                <a
                  href="https://instagram.com/inner__ascend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sacred-gold hover:text-sacred-amber transition-colors font-medium"
                >
                  {t.otherWays.instagram.handle}
                </a>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif text-earth-800 mb-4">{t.otherWays.location.title}</h3>
                <p className="text-earth-700/70 mb-4 leading-relaxed text-sm">
                  {t.otherWays.location.description}
                </p>
                <p className="text-sacred-gold font-medium">
                  {t.otherWays.location.place}
                </p>
                <p className="text-xs text-earth-700/60 mt-2">
                  {t.otherWays.location.note}
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 max-w-2xl mx-auto">
              <h4 className="text-xl font-serif text-earth-800 mb-4 text-center">{t.otherWays.responseTime.title}</h4>
              <p className="text-earth-700/80 leading-relaxed text-center text-sm">
                {t.otherWays.responseTime.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="relative py-48">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/70 to-earth-900/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-sacred-white mb-8">
                {t.important.title}
              </h2>
            </div>

            <div className="space-y-6 text-desert-sand/80 leading-relaxed">
              <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl">•</span>
                  <span><strong className="text-sacred-white">{t.important.item1}</strong>{t.important.item1Detail}</span>
                </p>
              </div>

              <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl">•</span>
                  <span><strong className="text-sacred-white">{t.important.item2}</strong>{t.important.item2Detail}</span>
                </p>
              </div>

              <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl">•</span>
                  <span><strong className="text-sacred-white">{t.important.item3}</strong>{t.important.item3Detail}</span>
                </p>
              </div>

              <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl">•</span>
                  <span><strong className="text-sacred-white">{t.important.item4}</strong>{t.important.item4Detail}</span>
                </p>
              </div>

              <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl">•</span>
                  <span><strong className="text-sacred-white">{t.important.item5}</strong>{t.important.item5Detail}</span>
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-2xl font-serif text-sacred-gold/90 italic leading-relaxed">
                "{t.important.quote1}<br/>
                {t.important.quote2}"
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="text-desert-sand/70">
                <Link to="/ceremonies" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  {t.important.linkCeremonies}
                </Link>
                <span className="mx-4 text-desert-sand/40">|</span>
                <Link to="/faq" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  {t.important.linkFaq}
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
