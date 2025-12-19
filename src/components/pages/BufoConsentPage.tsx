import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import translationsEN from '../../translations/bufo/consent-en.json';
import translationsES from '../../translations/bufo/consent-es.json';

const translations = {
  en: translationsEN,
  es: translationsES,
};

interface ConsentFormData {
  name: string;
  email: string;
  date: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  agreedToTerms: boolean;
  agreedToRisks: boolean;
  agreedToMedical: boolean;
  agreedToConfidentiality: boolean;
  agreedToMedia: boolean;
  agreedToVoluntary: boolean;
  signature: string;
}

export default function BufoConsentPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [formData, setFormData] = useState<ConsentFormData>({
    name: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    emergencyContactName: '',
    emergencyContactPhone: '',
    agreedToTerms: false,
    agreedToRisks: false,
    agreedToMedical: false,
    agreedToConfidentiality: false,
    agreedToMedia: false,
    agreedToVoluntary: false,
    signature: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const allAgreementsChecked =
    formData.agreedToTerms &&
    formData.agreedToRisks &&
    formData.agreedToMedical &&
    formData.agreedToConfidentiality &&
    formData.agreedToMedia &&
    formData.agreedToVoluntary;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!allAgreementsChecked || !formData.signature) return;

    setFormStatus('sending');

    const formattedMessage = `
BUFO ALVARIUS CONSENT & WAIVER - SIGNED

=== PARTICIPANT INFORMATION ===
Name: ${formData.name}
Email: ${formData.email}
Date Signed: ${formData.date}

=== EMERGENCY CONTACT ===
Name: ${formData.emergencyContactName}
Phone: ${formData.emergencyContactPhone}

=== AGREEMENTS ACKNOWLEDGED ===
✓ Terms & Nature of Experience: ${formData.agreedToTerms ? 'AGREED' : 'NOT AGREED'}
✓ Risks & Responsibilities: ${formData.agreedToRisks ? 'AGREED' : 'NOT AGREED'}
✓ Medical Disclosure: ${formData.agreedToMedical ? 'AGREED' : 'NOT AGREED'}
✓ Confidentiality: ${formData.agreedToConfidentiality ? 'AGREED' : 'NOT AGREED'}
✓ Media & Recording: ${formData.agreedToMedia ? 'AGREED' : 'NOT AGREED'}
✓ Voluntary Participation: ${formData.agreedToVoluntary ? 'AGREED' : 'NOT AGREED'}

=== DIGITAL SIGNATURE ===
${formData.signature}

=== TIMESTAMP ===
${new Date().toISOString()}
    `;

    try {
      await emailjs.send(
        'service_ld9gstj',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: 'Bufo Consent & Waiver - SIGNED - Sacred Toad',
          message: formattedMessage,
          to_email: 'hello@sacredtoad.co'
        },
        'v57Ta98pwBDWpoe8o'
      );
      setFormStatus('success');
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  if (formStatus === 'success') {
    return (
      <div className="min-h-screen bg-earth-900">
        <Navigation />
        <div className="pt-32 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-ocean-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-ocean-turquoise" />
              </div>
              <h1 className="text-4xl font-serif text-sacred-white mb-6">
                {t.success.title}
              </h1>
              <p className="text-xl text-desert-sand/90 mb-4">
                {t.success.subtitle}
              </p>
              <p className="text-desert-sand/70 leading-relaxed mb-8">
                {t.success.description}
              </p>
              <p className="text-desert-sand/50 italic mb-8">
                {t.success.saveNote}
              </p>
              <a
                href="/"
                className="inline-block px-8 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-colors font-medium"
              >
                {t.success.returnHome}
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-12 bg-earth-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
              {t.header.title}
            </h1>
            <p className="text-xl text-desert-sand/80">
              {t.header.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="py-12 bg-sacred-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Warning */}
              <div className="bg-desert-clay/10 p-6 rounded-xl border-l-4 border-desert-clay">
                <div className="flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-desert-clay flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-earth-800 font-medium mb-2">{t.warning.title}</p>
                    <p className="text-sm text-earth-700/80 leading-relaxed">
                      {t.warning.text}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1: Nature of Experience */}
              <div className="bg-white p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-earth-800">{t.sections.nature.title}</h2>
                <div className="text-sm text-earth-700/80 leading-relaxed space-y-3">
                  {t.sections.nature.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-earth-700/30 text-sacred-gold focus:ring-sacred-gold"
                  />
                  <span className="text-earth-800 text-sm">{t.sections.nature.checkbox}</span>
                </label>
              </div>

              {/* Section 2: Risks */}
              <div className="bg-white p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-earth-800">{t.sections.risks.title}</h2>
                <div className="text-sm text-earth-700/80 leading-relaxed space-y-3">
                  <p>{t.sections.risks.intro}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {t.sections.risks.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p>{t.sections.risks.closing}</p>
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToRisks"
                    checked={formData.agreedToRisks}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-earth-700/30 text-sacred-gold focus:ring-sacred-gold"
                  />
                  <span className="text-earth-800 text-sm">{t.sections.risks.checkbox}</span>
                </label>
              </div>

              {/* Section 3: Medical Disclosure */}
              <div className="bg-white p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-earth-800">{t.sections.medical.title}</h2>
                <div className="text-sm text-earth-700/80 leading-relaxed space-y-3">
                  <p>{t.sections.medical.intro}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {t.sections.medical.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p>{t.sections.medical.closing}</p>
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToMedical"
                    checked={formData.agreedToMedical}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-earth-700/30 text-sacred-gold focus:ring-sacred-gold"
                  />
                  <span className="text-earth-800 text-sm">{t.sections.medical.checkbox}</span>
                </label>
              </div>

              {/* Section 4: Confidentiality */}
              <div className="bg-white p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-earth-800">{t.sections.confidentiality.title}</h2>
                <div className="text-sm text-earth-700/80 leading-relaxed space-y-3">
                  <p>{t.sections.confidentiality.intro}</p>
                  <p>{t.sections.confidentiality.alsoAgree}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {t.sections.confidentiality.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToConfidentiality"
                    checked={formData.agreedToConfidentiality}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-earth-700/30 text-sacred-gold focus:ring-sacred-gold"
                  />
                  <span className="text-earth-800 text-sm">{t.sections.confidentiality.checkbox}</span>
                </label>
              </div>

              {/* Section 5: Media */}
              <div className="bg-white p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-earth-800">{t.sections.media.title}</h2>
                <div className="text-sm text-earth-700/80 leading-relaxed space-y-3">
                  {t.sections.media.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToMedia"
                    checked={formData.agreedToMedia}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-earth-700/30 text-sacred-gold focus:ring-sacred-gold"
                  />
                  <span className="text-earth-800 text-sm">{t.sections.media.checkbox}</span>
                </label>
              </div>

              {/* Section 6: Voluntary Participation & Liability */}
              <div className="bg-white p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-earth-800">{t.sections.voluntary.title}</h2>
                <div className="text-sm text-earth-700/80 leading-relaxed space-y-3">
                  {t.sections.voluntary.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  <p><strong>{t.sections.voluntary.releaseTitle}</strong> {t.sections.voluntary.releaseText}</p>
                  <p>{t.sections.voluntary.releaseClosing}</p>
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToVoluntary"
                    checked={formData.agreedToVoluntary}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-earth-700/30 text-sacred-gold focus:ring-sacred-gold"
                  />
                  <span className="text-earth-800 text-sm">{t.sections.voluntary.checkbox}</span>
                </label>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white p-8 rounded-2xl space-y-6">
                <h2 className="text-xl font-serif text-earth-800">{t.emergencyContact.title}</h2>
                <p className="text-sm text-earth-700/70">{t.emergencyContact.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-earth-800 font-medium mb-2">{t.emergencyContact.name} {t.required}</label>
                    <input
                      type="text"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-earth-800 font-medium mb-2">{t.emergencyContact.phone} {t.required}</label>
                    <input
                      type="tel"
                      name="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="bg-white p-8 rounded-2xl space-y-6">
                <h2 className="text-xl font-serif text-earth-800">{t.signature.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-earth-800 font-medium mb-2">{t.signature.fullName} {t.required}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-earth-800 font-medium mb-2">{t.signature.email} {t.required}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.signature.date}</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.signature.signatureLabel} {t.required}</label>
                  <p className="text-sm text-earth-700/60 mb-2">{t.signature.signatureHint}</p>
                  <input
                    type="text"
                    name="signature"
                    value={formData.signature}
                    onChange={handleChange}
                    required
                    placeholder={t.signature.signaturePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white font-serif text-lg"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={formStatus === 'sending' || !allAgreementsChecked || !formData.signature}
                  className="px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? t.submit.sending : t.submit.button}
                </button>

                {!allAgreementsChecked && (
                  <p className="mt-4 text-earth-700/60 text-sm">
                    {t.submit.incomplete}
                  </p>
                )}

                {formStatus === 'error' && (
                  <p className="mt-4 text-desert-clay">
                    {t.submit.error}
                  </p>
                )}
              </div>

            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
