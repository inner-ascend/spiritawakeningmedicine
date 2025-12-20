import Navigation from '../Navigation';
import Footer from '../Footer';
import { useLanguage } from '../../contexts/LanguageContext';

export default function OnePagerPage() {
  const { language } = useLanguage();

  const t = language === 'es' ? {
    // Hero
    title: 'Medicina del Sapo Sagrado',
    subtitle: '5-MeO-DMT Ceremonial',
    location: 'Mazunte, Oaxaca · México',

    // What this is
    whatTitle: 'Lo Que Es',
    whatText: 'Trabajo ceremonial sagrado con Bufo Alvarius, sostenido con reverencia por el linaje indígena, cuidado informado en trauma y presencia profunda.',
    whatNote: 'Esto no es terapia. No es un atajo. Es un pasaje sagrado para aquellos que sienten el llamado.',

    // Who this is for
    forTitle: 'Esto Puede Ser Para Ti Si...',
    forItems: [
      'Has sido llamado a este trabajo a través de la sincronicidad, la oración o la guía interna',
      'Estás dispuesto a prepararte, rendirte e integrar',
      'Entiendes que esto requiere humildad y respeto',
      'No estás buscando una solución rápida o escape',
      'Estás en un lugar estable de vida y salud mental'
    ],

    // Who this is not for
    notForTitle: 'Esto No Es Para Todos',
    notForText: 'No trabajamos con todos los que preguntan. Este camino requiere discernimiento de ambos lados. Si no estás seguro, eso está bien. La claridad llegará.',

    // CTA
    ctaTitle: 'Comenzar una Conversación',
    ctaText: 'Si sientes resonancia, estamos abiertos a una conversación tranquila. Sin presión. Sin expectativas. Solo discernimiento.',
    ctaButton: 'Solicitar Discernimiento',
    ctaNote: 'Respondemos personalmente. Por favor, permite unos días.',

    // Footer quote
    footerQuote: 'Camina despacio. Si este es tu camino, te encontrará.'
  } : {
    // Hero
    title: 'Sacred Toad Medicine',
    subtitle: '5-MeO-DMT Ceremonial',
    location: 'Mazunte, Oaxaca · Mexico',

    // What this is
    whatTitle: 'What This Is',
    whatText: 'Sacred ceremonial work with Bufo Alvarius, held with reverence for indigenous lineage, trauma-informed care, and deep presence.',
    whatNote: 'This is not therapy. It is not a shortcut. It is a sacred passage for those who feel called.',

    // Who this is for
    forTitle: 'This May Be For You If...',
    forItems: [
      'You have been called to this work through synchronicity, prayer, or inner guidance',
      'You are willing to prepare, surrender, and integrate',
      'You understand this requires humility and respect',
      'You are not seeking a quick fix or escape',
      'You are in a stable place in life and mental health'
    ],

    // Who this is not for
    notForTitle: 'This Is Not For Everyone',
    notForText: 'We do not work with everyone who inquires. This path requires discernment on both sides. If you are unsure, that is okay. Clarity will come.',

    // CTA
    ctaTitle: 'Begin A Conversation',
    ctaText: 'If you feel resonance, we are open to a quiet conversation. No pressure. No expectations. Just discernment.',
    ctaButton: 'Request Discernment',
    ctaNote: 'We respond personally. Please allow a few days.',

    // Footer quote
    footerQuote: 'Walk slowly. If this is your path, it will find you.'
  };

  const whatsappMessage = language === 'es'
    ? 'Hola, me gustaría comenzar una conversación sobre el trabajo ceremonial.'
    : 'Hello, I would like to begin a conversation about ceremonial work.';

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section - Full Screen */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/atmosphere/ceremony-24.jpg"
            alt="Sacred ceremony space"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-sacred-white mb-4 tracking-wide">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-desert-sand/80 font-light mb-3">
            {t.subtitle}
          </p>
          <p className="text-sm text-desert-sand/50 tracking-widest uppercase">
            {t.location}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-desert-sand/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-desert-sand/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* What This Is */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-desert-sand/50 mb-8">
            {t.whatTitle}
          </h2>
          <p className="text-xl md:text-2xl text-sacred-white/90 leading-relaxed font-light mb-8">
            {t.whatText}
          </p>
          <p className="text-desert-sand/60 italic">
            {t.whatNote}
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-desert-sand/20"></div>
      </div>

      {/* Who This Is For */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.3em] text-desert-sand/50 mb-12 text-center">
            {t.forTitle}
          </h2>
          <ul className="space-y-6">
            {t.forItems.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-sacred-gold/60 mt-1">·</span>
                <span className="text-sacred-white/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-desert-sand/20"></div>
      </div>

      {/* Who This Is Not For */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-desert-sand/50 mb-8">
            {t.notForTitle}
          </h2>
          <p className="text-lg text-sacred-white/70 leading-relaxed">
            {t.notForText}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-earth-800/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-sacred-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-desert-sand/70 leading-relaxed mb-10">
            {t.ctaText}
          </p>
          <a
            href={`https://wa.me/33646396325?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-sacred-gold/10 border border-sacred-gold/30 text-sacred-gold rounded-full hover:bg-sacred-gold/20 hover:border-sacred-gold/50 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t.ctaButton}
          </a>
          <p className="text-desert-sand/40 text-sm mt-6 italic">
            {t.ctaNote}
          </p>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl text-desert-sand/50 italic font-light">
            "{t.footerQuote}"
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
