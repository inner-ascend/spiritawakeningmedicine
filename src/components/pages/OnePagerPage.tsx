import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useLanguage } from '../../contexts/LanguageContext';

export default function OnePagerPage() {
  const { language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const t = language === 'es' ? {
    // Hero
    hero: {
      title: 'Sacred Toad Medicine',
      subtitle: 'Abrir las puertas del recuerdo',
      description: 'Un pasaje ceremonial con 5-MeO-DMT (Bufo).',
      description2: 'Sostenido con reverencia, cuidado informado por trauma y presencia profunda.',
      disclaimer: 'Solo por aplicación — para quienes sienten el llamado y están listos para caminar despacio.',
      cta: 'Comenzar con discernimiento',
      location: 'Grupos pequeños · Mazunte, Oaxaca'
    },

    // Orientation
    orientation: {
      label: 'La medicina',
      p1: 'El 5-MeO-DMT es una medicina enteógena muy potente, utilizada en contextos ceremoniales para apoyar la claridad, la rendición y el recuerdo de lo esencial.',
      p2: 'Este trabajo no es recreativo, no es un atajo, ni una experiencia para coleccionar. Es un umbral — que pide preparación, honestidad e integración.',
      p3: 'Si estás considerando este camino, te invitamos a acercarte con humildad, apoyo enraizado y cuidado del sistema nervioso.'
    },

    // Who it's for
    whoFor: {
      title: 'Para quién es',
      forYou: 'Este trabajo puede ser para ti si:',
      forItems: [
        'Sientes un llamado real, no solo curiosidad',
        'Ya has hecho trabajo interior y estás lista/o para una rendición más profunda',
        'Buscas verdad e integración — no intensidad',
        'Estás dispuesta/o a prepararte, ser evaluada/o y sostener el proceso después'
      ],
      notForYou: 'Este trabajo no es para ti si:',
      notItems: [
        'Buscas un arreglo rápido o una "revelación" sin integración',
        'Estás en un periodo frágil o inestable de salud mental',
        'Buscas espectáculo, "peak experience" o turismo espiritual',
        'No estás dispuesta/o a un proceso de evaluación o a respetar contraindicaciones'
      ],
      closing: 'El discernimiento protege la medicina — y te protege a ti.'
    },

    // The Arc
    arc: {
      title: 'El viaje en tres fases',
      subtitle: 'Este trabajo se sostiene como un arco completo — no un solo momento.',
      phases: [
        {
          name: 'Preparación',
          description: 'Clarificar intenciones. Estabilizar el sistema nervioso. Establecer confianza y disposición.',
          note: '(Sesiones opcionales disponibles.)'
        },
        {
          name: 'Ceremonia',
          description: 'Un pasaje ceremonial guiado, sostenido con consentimiento claro, presencia plena y ritmo conservador.',
          note: '(Una sesión de integración incluida.)'
        },
        {
          name: 'Integración',
          description: 'Anclar lo revelado en la vida cotidiana — relaciones, decisiones, encarnación, dirección.',
          note: '(Sesiones adicionales disponibles.)'
        }
      ],
      quote: 'La claridad sin integración se desvanece.',
      quote2: 'La integración es donde el trabajo se vuelve real.'
    },

    // Ceremony Container
    ceremony: {
      title: 'Detalles de la ceremonia',
      details: [
        { label: 'Ubicación', value: 'Mazunte, Oaxaca, México' },
        { label: 'Tamaño del grupo', value: 'Pequeño (2–4 personas). Sesiones privadas por solicitud.' },
        { label: 'Duración', value: 'Contenedor de día completo + descanso después' },
        { label: 'Seguimiento', value: 'Integración dentro de 48 horas, más un seguimiento posterior' }
      ],
      included: {
        title: 'Qué incluye',
        items: [
          'Consulta pre-ceremonia + evaluación de disposición',
          'Apertura + establecimiento del contenedor',
          'Facilitación basada en consentimiento e informada por trauma',
          'Cuidado post-ceremonia + anclaje',
          'Sesión de integración dentro de 48 horas',
          'Apoyo de seguimiento después de la sesión'
        ]
      },
      safety: 'Nota de seguridad: Se requiere evaluación médica. Si este camino no es adecuado para ti ahora, lo diremos.',
      safetyLink: 'Ver contraindicaciones',
      consentLink: 'Formulario de consentimiento'
    },

    // Facilitators
    facilitators: {
      title: 'Facilitadores',
      p1: 'Hemos sido formados por este camino antes de sostener espacio para otros. Conocemos el terreno desde adentro.',
      p2: 'Este trabajo se sostiene con reverencia por el linaje indígena del que proviene, y con un enfoque informado por trauma para la seguridad, el consentimiento y la integración.',
      closing: 'Si sientes el llamado, nos movemos despacio.',
      closing2: 'Esto es territorio sagrado — no un servicio.'
    },

    // Pricing
    pricing: {
      title: 'Inversión',
      p1: 'Debido a que este trabajo se basa en el discernimiento y varía según el contenedor (grupal/privado, necesidades de preparación, apoyo de integración), los precios se comparten durante la conversación.',
      range: 'Los contenedores de ceremonia generalmente están en el rango de:',
      rangeText: '$250–500 USD',
      retreats: 'Los contenedores de retiro e inmersiones de varios días se ofrecen selectivamente.'
    },

    // FAQ
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Es esto terapia o tratamiento médico?',
          a: 'No. Este es trabajo ceremonial y educativo. No proporcionamos servicios médicos o clínicos.'
        },
        {
          q: '¿Evalúan contraindicaciones?',
          a: 'Sí. Se requiere evaluación antes de considerar cualquier ceremonia.',
          link: '/bufo-contraindications',
          linkText: 'Ver lista completa'
        },
        {
          q: '¿Qué pasa si no estoy segura/o?',
          a: 'Es normal. Comienza con discernimiento. Si no está alineado, lo diremos.'
        }
      ]
    },

    // CTA
    cta: {
      title: 'Comenzar con discernimiento',
      p1: 'Si sientes el llamado, comienza con una conversación.',
      p2: 'Exploraremos la disposición, la seguridad y si este trabajo es apropiado para ti.',
      button: 'Comenzar discernimiento',
      altButton: 'Hacer una pregunta por WhatsApp',
      email: 'hello@sacredtoad.co',
      closing: 'Camina despacio. Si es tu camino, lo sabrás.'
    },

    // Legal
    legal: 'Este trabajo es de naturaleza ceremonial y educativa. No diagnosticamos, tratamos ni curamos ninguna condición. La participación requiere evaluación médica y responsabilidad personal. Consulta a un profesional de salud autorizado con cualquier inquietud médica.'

  } : {
    // Hero
    hero: {
      title: 'Sacred Toad Medicine',
      subtitle: 'Open the Gates of Remembrance',
      description: 'A ceremonial passage with 5-MeO-DMT (Bufo).',
      description2: 'Held with reverence, trauma-informed care, and deep presence.',
      disclaimer: 'By application only — for those who feel the call and are ready to walk slowly.',
      cta: 'Begin with Discernment',
      location: 'Small groups · Mazunte, Oaxaca'
    },

    // Orientation
    orientation: {
      label: 'The Medicine',
      p1: '5-MeO-DMT is a powerful entheogenic medicine used in ceremonial contexts to support insight, surrender, and remembrance.',
      p2: 'The work we offer is not recreational, not a shortcut, and not an experience to collect. It is a threshold — one that asks for preparation, honesty, and integration.',
      p3: 'If you\'re considering this path, approach it with humility, grounded support, and care for your nervous system.'
    },

    // Who it's for
    whoFor: {
      title: 'Who It\'s For',
      forYou: 'This work may be for you if:',
      forItems: [
        'You feel genuinely called, not curious for novelty',
        'You\'ve done inner work and are ready for deeper surrender',
        'You\'re seeking truth and integration — not intensity',
        'You\'re willing to prepare, be screened, and follow through afterward'
      ],
      notForYou: 'This work is not for you if:',
      notItems: [
        'You want a quick fix or a breakthrough without integration',
        'You\'re in a fragile or unstable mental health period',
        'You\'re seeking spectacle, peak-chasing, or spiritual tourism',
        'You\'re unwilling to be screened or respect contraindications'
      ],
      closing: 'Discernment protects the medicine — and it protects you.'
    },

    // The Arc
    arc: {
      title: 'The Three-Phase Journey',
      subtitle: 'This work is held as a complete arc — not a single moment.',
      phases: [
        {
          name: 'Preparation',
          description: 'Clarify intentions. Stabilize the nervous system. Establish trust and readiness.',
          note: '(Optional sessions available.)'
        },
        {
          name: 'Ceremony',
          description: 'A guided ceremonial passage held with clear consent, full presence, and conservative pacing.',
          note: '(One integration session included.)'
        },
        {
          name: 'Integration',
          description: 'Anchoring what was revealed into daily life — relationships, choices, embodiment, direction.',
          note: '(Additional sessions available.)'
        }
      ],
      quote: 'Insight without integration fades.',
      quote2: 'Integration is where the work becomes real.'
    },

    // Ceremony Container
    ceremony: {
      title: 'Ceremony Details',
      details: [
        { label: 'Location', value: 'Mazunte, Oaxaca, Mexico' },
        { label: 'Group size', value: 'Small (2–4 people). Private sessions by request.' },
        { label: 'Timeline', value: 'Full-day container + rest afterward' },
        { label: 'Follow-up', value: 'Integration within 48 hours, plus a check-in afterward' }
      ],
      included: {
        title: 'What\'s Included',
        items: [
          'Pre-ceremony consultation + readiness screening',
          'Opening + container setting',
          'Consent-based, trauma-informed facilitation',
          'Post-ceremony care + grounding',
          'Integration session within 48 hours',
          'Follow-up support after the session'
        ]
      },
      safety: 'Safety note: Medical screening is required. If this path is not right for you right now, we will say so.',
      safetyLink: 'View contraindications',
      consentLink: 'Consent form'
    },

    // Facilitators
    facilitators: {
      title: 'Facilitators',
      p1: 'We\'ve been shaped by this path before we ever held space for others. We know the terrain from the inside.',
      p2: 'This work is held with reverence for the indigenous lineage it comes through, and with a trauma-informed approach to safety, consent, and integration.',
      closing: 'If you feel called, we move slowly.',
      closing2: 'This is sacred territory — not a service.'
    },

    // Pricing
    pricing: {
      title: 'Investment',
      p1: 'Because this work is discernment-based and varies by container (group/private, preparation needs, integration support), pricing is shared during the conversation.',
      range: 'Ceremony containers typically fall within the range of:',
      rangeText: '$250–500 USD',
      retreats: 'Retreat containers and multi-day immersions are offered selectively.'
    },

    // FAQ
    faq: {
      title: 'Common Questions',
      items: [
        {
          q: 'Is this therapy or medical treatment?',
          a: 'No. This is ceremonial and educational work. We do not provide medical or clinical services.'
        },
        {
          q: 'Do you screen for contraindications?',
          a: 'Yes. Screening is required before any ceremony is considered.',
          link: '/bufo-contraindications',
          linkText: 'View full list'
        },
        {
          q: 'What if I\'m unsure?',
          a: 'That\'s normal. Begin with discernment. If it\'s not aligned, we\'ll say so.'
        }
      ]
    },

    // CTA
    cta: {
      title: 'Begin with Discernment',
      p1: 'If you feel the call, start with a conversation.',
      p2: 'We\'ll explore readiness, safety, and whether this work is appropriate for you.',
      button: 'Start Discernment',
      altButton: 'Ask a Question on WhatsApp',
      email: 'hello@sacredtoad.co',
      closing: 'Walk slowly. If it\'s your path, you\'ll know.'
    },

    // Legal
    legal: 'This work is ceremonial and educational in nature. We do not diagnose, treat, or cure any condition. Participation requires medical screening and personal responsibility. Consult a licensed healthcare professional with any medical concerns.'
  };

  const whatsappMessage = language === 'es'
    ? 'Hola, me gustaría comenzar una conversación sobre el trabajo ceremonial.'
    : 'Hello, I would like to begin a conversation about ceremonial work.';

  return (
    <div className="min-h-screen bg-earth-900 text-sacred-white">
      <Navigation />

      {/* ========== HERO ========== */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0">
          <img
            src="/images/locations/sonoran-desert-sunset.jpg"
            alt="Sonoran Desert at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 via-earth-900/50 to-earth-900"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-sacred-white mb-6 tracking-wide">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-desert-sand/90 font-light mb-4">
            {t.hero.subtitle}
          </p>
          <div className="space-y-2 mb-8">
            <p className="text-lg text-desert-sand/70">{t.hero.description}</p>
            <p className="text-lg text-desert-sand/70">{t.hero.description2}</p>
          </div>
          <p className="text-desert-sand/50 italic mb-10 text-sm md:text-base">
            {t.hero.disclaimer}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-sacred-gold/10 border border-sacred-gold/40 text-sacred-gold rounded-full hover:bg-sacred-gold/20 transition-all duration-300 mb-6"
          >
            {t.hero.cta}
          </a>
          <p className="text-desert-sand/40 text-sm tracking-widest uppercase">
            {t.hero.location}
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 border-2 border-desert-sand/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-desert-sand/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ========== ORIENTATION ========== */}
      <section id="medicine" className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.3em] text-desert-sand/50 mb-10 text-center">
            {t.orientation.label}
          </h2>
          <div className="space-y-6 text-lg text-sacred-white/80 leading-relaxed">
            <p>{t.orientation.p1}</p>
            <p>{t.orientation.p2}</p>
            <p>{t.orientation.p3}</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center"><div className="w-16 h-px bg-desert-sand/20"></div></div>

      {/* ========== WHO IT'S FOR ========== */}
      <section id="who-its-for" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.3em] text-desert-sand/50 mb-16 text-center">
            {t.whoFor.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* For You */}
            <div>
              <h3 className="text-sacred-gold/80 font-medium mb-6">{t.whoFor.forYou}</h3>
              <ul className="space-y-4">
                {t.whoFor.forItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sacred-gold/60 mt-1">✓</span>
                    <span className="text-sacred-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For You */}
            <div>
              <h3 className="text-desert-sand/60 font-medium mb-6">{t.whoFor.notForYou}</h3>
              <ul className="space-y-4">
                {t.whoFor.notItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-desert-sand/40 mt-1">×</span>
                    <span className="text-sacred-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-desert-sand/60 italic mt-12">
            {t.whoFor.closing}
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center"><div className="w-16 h-px bg-desert-sand/20"></div></div>

      {/* ========== THE ARC ========== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-sacred-white text-center mb-4">
            {t.arc.title}
          </h2>
          <p className="text-desert-sand/60 text-center mb-16">
            {t.arc.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {t.arc.phases.map((phase, i) => (
              <div key={i} className="text-center p-6 border border-desert-sand/10 rounded-2xl">
                <div className="text-sacred-gold/60 text-sm mb-4">{i + 1}</div>
                <h3 className="text-xl font-serif text-sacred-white mb-4">{phase.name}</h3>
                <p className="text-sacred-white/60 text-sm leading-relaxed mb-2">
                  {phase.description}
                </p>
                <p className="text-desert-sand/40 text-xs italic">{phase.note}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-1">
            <p className="text-desert-sand/60 italic">{t.arc.quote}</p>
            <p className="text-sacred-white/70">{t.arc.quote2}</p>
          </div>
        </div>
      </section>

      {/* ========== IMAGE BREAK ========== */}
      <div className="h-[50vh] relative overflow-hidden">
        <img
          src="/images/atmosphere/ceremony-24.jpg"
          alt="Ceremony space"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900 via-transparent to-earth-900"></div>
      </div>

      {/* ========== CEREMONY CONTAINER ========== */}
      <section id="ceremony" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-sacred-white text-center mb-12">
            {t.ceremony.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {t.ceremony.details.map((detail, i) => (
              <div key={i} className="p-5 border border-desert-sand/10 rounded-xl">
                <p className="text-desert-sand/50 text-xs uppercase tracking-wider mb-2">{detail.label}</p>
                <p className="text-sacred-white/80">{detail.value}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-earth-800/50 rounded-2xl mb-8">
            <h3 className="text-sacred-gold/80 font-medium mb-4">{t.ceremony.included.title}</h3>
            <ul className="space-y-2">
              {t.ceremony.included.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-sacred-gold/60 mt-0.5">✓</span>
                  <span className="text-sacred-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-desert-sand/50 text-sm italic">
            {t.ceremony.safety}{' '}
            <Link to="/bufo-contraindications" className="text-sacred-gold/70 hover:text-sacred-gold underline">
              {t.ceremony.safetyLink}
            </Link>
            {' · '}
            <Link to="/bufo-consent" className="text-sacred-gold/70 hover:text-sacred-gold underline">
              {t.ceremony.consentLink}
            </Link>
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center"><div className="w-16 h-px bg-desert-sand/20"></div></div>

      {/* ========== FACILITATORS ========== */}
      <section id="facilitators" className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-sacred-white mb-8">
            {t.facilitators.title}
          </h2>

          <div className="flex justify-center gap-8 mb-10">
            <a href="https://nina-moore.com" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-desert-sand/20 group-hover:border-sacred-gold/50 transition-colors">
                <img src="/images/portraits/nina-portrait.jpg" alt="Nina Moore" className="w-full h-full object-cover" />
              </div>
              <p className="text-sacred-white/70 text-sm mt-3 group-hover:text-sacred-gold transition-colors">Nina →</p>
            </a>
            <a href="https://astralintegration.co" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-desert-sand/20 group-hover:border-sacred-gold/50 transition-colors">
                <img src="/images/portraits/astral-portrait.jpg" alt="Astral Amat" className="w-full h-full object-cover" />
              </div>
              <p className="text-sacred-white/70 text-sm mt-3 group-hover:text-sacred-gold transition-colors">Astral →</p>
            </a>
          </div>

          <div className="space-y-4 text-sacred-white/70 leading-relaxed mb-8">
            <p>{t.facilitators.p1}</p>
            <p>{t.facilitators.p2}</p>
          </div>

          <p className="text-desert-sand/60 italic">
            {t.facilitators.closing}<br />
            <span className="text-sacred-white/70">{t.facilitators.closing2}</span>
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center"><div className="w-16 h-px bg-desert-sand/20"></div></div>

      {/* ========== PRICING ========== */}
      <section id="pricing" className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-sacred-white mb-8">
            {t.pricing.title}
          </h2>

          <p className="text-sacred-white/70 leading-relaxed mb-6">
            {t.pricing.p1}
          </p>

          <div className="p-6 bg-earth-800/50 rounded-2xl inline-block mb-6">
            <p className="text-desert-sand/60 text-sm mb-2">{t.pricing.range}</p>
            <p className="text-sacred-gold text-xl">{t.pricing.rangeText}</p>
          </div>

          <p className="text-desert-sand/50 text-sm italic">
            {t.pricing.retreats}
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center"><div className="w-16 h-px bg-desert-sand/20"></div></div>

      {/* ========== FAQ ========== */}
      <section id="faq" className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-sacred-white text-center mb-12">
            {t.faq.title}
          </h2>

          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div
                key={i}
                className="border border-desert-sand/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-earth-800/30 transition-colors"
                >
                  <span className="text-sacred-white/90">{item.q}</span>
                  <span className="text-desert-sand/50 text-xl ml-4">
                    {openFaqIndex === i ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === i && (
                  <div className="px-5 pb-5 text-sacred-white/60 text-sm leading-relaxed">
                    {item.a}
                    {item.link && (
                      <>
                        {' '}
                        <Link to={item.link} className="text-sacred-gold/70 hover:text-sacred-gold underline">
                          {item.linkText} →
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-earth-800/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-sacred-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-sacred-white/70 mb-2">{t.cta.p1}</p>
          <p className="text-desert-sand/60 mb-10">{t.cta.p2}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/bufo-screening"
              className="px-8 py-4 bg-sacred-gold text-earth-900 font-medium rounded-full hover:bg-sacred-gold/90 transition-colors"
            >
              {t.cta.button}
            </Link>
            <a
              href={`https://wa.me/33646396325?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-desert-sand/30 text-desert-sand rounded-full hover:border-sacred-gold/50 hover:text-sacred-gold transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.cta.altButton}
            </a>
          </div>

          <p className="text-desert-sand/40 text-sm mb-2">{t.cta.email}</p>
          <p className="text-desert-sand/50 italic">{t.cta.closing}</p>
        </div>
      </section>

      {/* ========== LEGAL ========== */}
      <section className="py-12 px-6 border-t border-desert-sand/10">
        <div className="max-w-2xl mx-auto">
          <p className="text-desert-sand/40 text-xs text-center leading-relaxed">
            {t.legal}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
