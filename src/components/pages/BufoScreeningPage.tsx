import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

import translationsEN from '../../translations/bufo/screening-en.json';
import translationsES from '../../translations/bufo/screening-es.json';

const translations = {
  en: translationsEN,
  es: translationsES,
};

interface ScreeningFormData {
  name: string;
  email: string;
  age: string;
  location: string;
  q1_calling: string;
  q2_medicine_experience: string;
  q3_medical_conditions: string;
  q4_medications: string;
  q5_mental_health_history: string;
  q6_current_state: string;
  q7_life_stress: string;
  q8_intention: string;
  q9_anxiety: string;
  q10_support: string;
  q11_additional: string;
}

export default function BufoScreeningPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [formData, setFormData] = useState<ScreeningFormData>({
    name: '',
    email: '',
    age: '',
    location: '',
    q1_calling: '',
    q2_medicine_experience: '',
    q3_medical_conditions: '',
    q4_medications: '',
    q5_mental_health_history: '',
    q6_current_state: '',
    q7_life_stress: '',
    q8_intention: '',
    q9_anxiety: '',
    q10_support: '',
    q11_additional: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    const formattedMessage = `
BUFO ALVARIUS SCREENING SUBMISSION

=== BASIC INFORMATION ===
Name: ${formData.name}
Email: ${formData.email}
Age: ${formData.age}
Location: ${formData.location}

=== SCREENING QUESTIONS ===

1. What is calling you to this experience right now?
${formData.q1_calling}

2. Have you worked with any plant medicines or psychedelics before?
${formData.q2_medicine_experience}

3. Do you have any medical conditions? (Heart, blood pressure, asthma, neurological)
${formData.q3_medical_conditions}

4. Are you currently taking any medications? (SSRIs, MAOIs, antidepressants, antipsychotics, benzodiazepines)
${formData.q4_medications}

5. Any history of bipolar, schizophrenia, psychosis, or hospitalization?
${formData.q5_mental_health_history}

6. How has your mental/emotional state been in the last 3 months?
${formData.q6_current_state}

7. Are you currently going through major life stress? (breakup, death, trauma, depression)
${formData.q7_life_stress}

8. What is your intention for this journey?
${formData.q8_intention}

9. Have you ever had panic attacks or strong anxiety?
${formData.q9_anxiety}

10. Do you feel grounded and supported in your life right now?
${formData.q10_support}

11. Anything else you'd like to share?
${formData.q11_additional}
    `;

    try {
      await emailjs.send(
        'service_ld9gstj',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: 'Bufo Screening Submission - Sacred Toad',
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
              <p className="text-desert-sand/70 leading-relaxed mb-4">
                {t.success.description}
              </p>
              <p className="text-desert-sand/60 leading-relaxed mb-8">
                {t.success.nextSteps}
              </p>
              <p className="text-desert-sand/50 italic mb-8">
                {t.success.closing}
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
      <div className="pt-32 pb-16 bg-earth-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
              {t.header.title}
            </h1>
            <p className="text-xl text-desert-sand/90 leading-relaxed mb-4">
              {t.header.subtitle}
            </p>
            <p className="text-desert-sand/70 leading-relaxed">
              {t.header.description}
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="py-16 bg-sacred-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Basic Info */}
              <div className="bg-white p-8 rounded-2xl space-y-6">
                <h2 className="text-2xl font-serif text-earth-800 mb-4">{t.basicInfo.title}</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-earth-800 font-medium mb-2">{t.basicInfo.name} {t.required}</label>
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
                    <label className="block text-earth-800 font-medium mb-2">{t.basicInfo.email} {t.required}</label>
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-earth-800 font-medium mb-2">{t.basicInfo.age} {t.required}</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="18"
                      className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-earth-800 font-medium mb-2">{t.basicInfo.location} {t.required}</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Screening Questions */}
              <div className="bg-white p-8 rounded-2xl space-y-8">
                <h2 className="text-2xl font-serif text-earth-800 mb-4">{t.questions.title}</h2>

                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.questions.q1.label} {t.required}</label>
                  <textarea
                    name="q1_calling"
                    value={formData.q1_calling}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white resize-none"
                    placeholder={t.questions.q1.placeholder}
                  />
                </div>

                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.questions.q2.label} {t.required}</label>
                  <p className="text-sm text-earth-700/60 mb-2">{t.questions.q2.hint}</p>
                  <textarea
                    name="q2_medicine_experience"
                    value={formData.q2_medicine_experience}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white resize-none"
                    placeholder={t.questions.q2.placeholder}
                  />
                </div>

                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.questions.q3.label} {t.required}</label>
                  <p className="text-sm text-earth-700/60 mb-2">{t.questions.q3.hint}</p>
                  <textarea
                    name="q3_medical_conditions"
                    value={formData.q3_medical_conditions}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white resize-none"
                    placeholder={t.questions.q3.placeholder}
                  />
                </div>

                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.questions.q4.label} {t.required}</label>
                  <p className="text-sm text-earth-700/60 mb-2">{t.questions.q4.hint}</p>
                  <textarea
                    name="q4_medications"
                    value={formData.q4_medications}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white resize-none"
                    placeholder={t.questions.q4.placeholder}
                  />
                </div>

                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.questions.q5.label} {t.required}</label>
                  <textarea
                    name="q5_mental_health_history"
                    value={formData.q5_mental_health_history}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white resize-none"
                    placeholder={t.questions.q5.placeholder}
                  />
                </div>

                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.questions.q6.label} {t.required}</label>
                  <textarea
                    name="q6_current_state"
                    value={formData.q6_current_state}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white resize-none"
                    placeholder={t.questions.q6.placeholder}
                  />
                </div>

                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.questions.q7.label} {t.required}</label>
                  <p className="text-sm text-earth-700/60 mb-2">{t.questions.q7.hint}</p>
                  <textarea
                    name="q7_life_stress"
                    value={formData.q7_life_stress}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white resize-none"
                    placeholder={t.questions.q7.placeholder}
                  />
                </div>

                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.questions.q8.label} {t.required}</label>
                  <textarea
                    name="q8_intention"
                    value={formData.q8_intention}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white resize-none"
                    placeholder={t.questions.q8.placeholder}
                  />
                </div>

                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.questions.q9.label} {t.required}</label>
                  <textarea
                    name="q9_anxiety"
                    value={formData.q9_anxiety}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white resize-none"
                    placeholder={t.questions.q9.placeholder}
                  />
                </div>

                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.questions.q10.label} {t.required}</label>
                  <textarea
                    name="q10_support"
                    value={formData.q10_support}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white resize-none"
                    placeholder={t.questions.q10.placeholder}
                  />
                </div>

                <div>
                  <label className="block text-earth-800 font-medium mb-2">{t.questions.q11.label}</label>
                  <textarea
                    name="q11_additional"
                    value={formData.q11_additional}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 bg-white resize-none"
                    placeholder={t.questions.q11.placeholder}
                  />
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-desert-clay/10 p-6 rounded-xl border-l-4 border-desert-clay">
                <p className="text-earth-700 leading-relaxed">
                  <strong className="text-earth-800">{t.notice.important}</strong> {t.notice.text}
                </p>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? t.submit.sending : t.submit.button}
                </button>

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
