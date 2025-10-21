import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Bufo Alvarius / 5-MeO-DMT?",
      answer: "Bufo Alvarius is 5-MeO-DMT extracted from the Sonoran Desert Toad. It is the most potent entheogenic compound on Earth, capable of inducing complete ego dissolution and non-dual consciousness within seconds. This is not a psychedelic in the traditional sense—it's a sacred teacher of death and pure remembrance. The experience is brief (15-30 minutes) but profoundly transformative."
    },
    {
      question: "How is Bufo different from other plant medicines like Ayahuasca or Psilocybin?",
      answer: "Unlike Ayahuasca or psilocybin, which provide hours of visionary journey and narrative content, Bufo creates instant and complete ego dissolution. There are typically no visions, no stories, no entities—just pure non-dual awareness. You dissolve into everything and remember what you are beyond form. The speed and intensity are unparalleled. Ayahuasca shows you; Bufo dissolves you."
    },
    {
      question: "Is Bufo safe?",
      answer: "When held in proper ceremony by trained facilitators with thorough preparation and medical screening, Bufo is physiologically safe for most people. However, it is psychologically and spiritually intense. Safety requires: (1) Medical screening to rule out contraindications, (2) Mandatory preparation sessions, (3) Trauma-informed facilitation, (4) Integration support. This is why ceremony is only offered after discernment and preparation—never sold directly."
    },
    {
      question: "What are the contraindications? Who should NOT work with Bufo?",
      answer: "Bufo is contraindicated for those with: heart conditions, high blood pressure, psychosis or schizophrenia, epilepsy, pregnancy/breastfeeding, active use of SSRIs or MAOIs, recent surgery (within 6 months), severe unprocessed trauma without therapeutic support, and active substance abuse. This is why medical screening is mandatory before ceremony."
    },
    {
      question: "Do I need previous experience with plant medicine?",
      answer: "No, previous experience is not required. However, this work IS for those who have done deep inner work through therapy, meditation, spiritual practice, or other healing modalities. Bufo is not an entry point—it's often a completion point. If you've never explored your psyche, shadow, or trauma, start there first."
    },
    {
      question: "What does the experience feel like?",
      answer: "There is no way to truly describe it because 'you' are not there to experience it. Within seconds of inhalation, your sense of self completely dissolves. You become everything and nothing simultaneously. Time, space, identity—gone. Many describe it as 'dying' or 'returning home' or 'remembering what I've always been.' The body may shake, vocalize, or move involuntarily as the ego structure releases. It's not pleasant or unpleasant—it's beyond that. And then you return."
    },
    {
      question: "Is the ceremony held individually or in groups?",
      answer: "Ceremonies are held in small, intimate settings of 2-4 people maximum. Individual and couple sessions are available. The small group size ensures full presence, safety, and energetic holding for each participant. This is not a retreat center model—it's deeply personal and sacred."
    },
    {
      question: "Where are ceremonies held?",
      answer: "All Bufo ceremonies are held in Mazunte, Oaxaca, Mexico in a private, nature-based container. The location is intentionally secluded and sacred, honoring the indigenous lineage of the medicine."
    },
    {
      question: "How long does the ceremony last?",
      answer: "The peak experience lasts 15-30 minutes, but the full ceremony day is much longer. Expect a full-day experience that includes opening prayer, sacred container creation, the ceremony itself, and ample post-ceremony rest and integration time. You'll receive an integration session within 48 hours and 2-week follow-up support."
    },
    {
      question: "Why is preparation mandatory?",
      answer: "Preparation is not bureaucracy—it's safety and sacred practice. Bufo creates instant ego dissolution. Without proper nervous system anchoring and emotional readiness, the experience can be traumatizing rather than liberating. Preparation sessions assess readiness, build trust, teach surrender practices, and create the container that holds you safe during dissolution. No ceremony is booked without completing 1-2 preparation sessions first."
    },
    {
      question: "What is the application process?",
      answer: "This work is application-based, not open enrollment. The process: (1) Submit private application, (2) Application reviewed in discernment, (3) If aligned, book preparation sessions, (4) Complete medical screening, (5) Only after preparation, discuss ceremony dates, (6) Ceremony in Mazunte, Mexico, (7) Integration support unfolds as needed. This protects the sacred nature of the work and ensures mutual fit."
    },
    {
      question: "Can I book the ceremony directly?",
      answer: "No. Ceremony is never booked directly. The sequence is sacred: Application → Preparation → Discernment → Ceremony. This filters out those seeking quick fixes or peak experiences and ensures you're truly ready for ego dissolution. If someone offers you Bufo without preparation, walk away."
    },
    {
      question: "What is the total investment for the full journey?",
      answer: "The complete journey typically costs €500-800+ and includes: Preparation (€111-222 for 1-2 sessions), Ceremony (€300-500), and Integration (€88-111+ per session or €300-400 for 4-session package). Sliding scale is available. BIPOC and single parent discounts offered. No one is turned away for lack of funds when the call is genuine."
    },
    {
      question: "Is integration really necessary?",
      answer: "Integration is non-negotiable. 'Insight without integration is just spiritual entertainment.' The ceremony shows you truth—integration teaches you how to live it. Without integration, the experience becomes a memory, a story you tell at parties. With integration, it becomes embodied wisdom. Every ceremony includes integration within 48 hours, and most people benefit from ongoing support."
    },
    {
      question: "What if I have a 'bad trip'?",
      answer: "Bufo doesn't really have 'bad trips' in the traditional sense—but it can have difficult passages. Resistance creates suffering. Surrender creates liberation. This is why preparation is critical: you learn how to surrender before the medicine demands it. During ceremony, the facilitator holds energetic space, uses breath/touch/sound to guide you through resistance, and ensures physical safety. The trauma-informed approach means all reactions are welcomed and held."
    },
    {
      question: "Can Bufo heal trauma?",
      answer: "Bufo is not a healing modality—it's a teacher. It can show you truth, dissolve ego structures, and create space for healing—but healing happens in integration. If you have severe unprocessed trauma, you need therapeutic support BEFORE medicine work, not instead of it. This work does not replace therapy, psychiatry, or medical care."
    },
    {
      question: "What should I do to prepare physically?",
      answer: "Before ceremony: (1) Fast for 4-6 hours (water okay), (2) Reduce stimulants (caffeine, alcohol, cannabis) for several days, (3) Eat clean, simple foods, (4) Get plenty of rest, (5) Spend time in nature if possible, (6) Journal on intentions and fears. Detailed preparation guidelines are provided during preparation sessions."
    },
    {
      question: "What's your lineage and training?",
      answer: "Nina and Astral have been initiated as daughter and son of the Seri Tribe by elders in the Sonoran Desert, Mexico—the indigenous lineage-holders of this medicine. We've trained in trauma-informed facilitation, energy healing, and shamanic practices for over a decade. We've sat with the medicine ourselves many times and hold this work with deep reverence. We're also guest speakers in facilitator training programs. This is not a side gig—it's our life's work."
    },
    {
      question: "Is this legal?",
      answer: "The legal status of 5-MeO-DMT varies by location. In Mexico, where ceremonies are held, the medicine is used within its indigenous cultural context. This work is not promoted publicly and is only offered through private application and discernment. All participants are informed of legal considerations before ceremony."
    },
    {
      question: "Can I bring a friend or partner?",
      answer: "Yes, couple sessions and small groups (2-4 people) are available. Many people find it powerful to journey with a trusted partner or friend. However, each person must complete their own application, preparation sessions, and medical screening independently."
    },
    {
      question: "What if I'm on medication?",
      answer: "Certain medications are contraindicated with Bufo, especially SSRIs, MAOIs, and some blood pressure medications. During medical screening, you'll disclose all medications, and we'll assess safety. In some cases, you may need to taper off medications (under medical supervision) before ceremony. Never stop medication without consulting your doctor."
    },
    {
      question: "How do I know if this is right for me?",
      answer: "You'll know. If you've read this far and something inside you says 'yes'—that's your signal. If you're curious but terrified, that's normal. If you're seeking a quick fix or peak experience, this isn't for you. If you're ready to die before you die, to surrender everything, to face truth without bypassing—then apply. The application and preparation process will clarify readiness through mutual discernment."
    }
  ];

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-earth-800/60 to-earth-900/80"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-5xl text-sacred-gold/60 mb-8">?</div>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            FAQ & Safety
          </h1>
          <p className="text-xl md:text-2xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto">
            Common questions about Bufo Alvarius ceremonies,<br/>
            safety protocols, and what to expect
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl border border-earth-700/10 overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-medicine-venom/30 transition-colors"
                  >
                    <span className="text-xl font-serif text-earth-800 pr-4">{faq.question}</span>
                    <span className="text-sacred-gold text-2xl flex-shrink-0">
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
                    <span className="text-2xl">👥</span>
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
                    <span className="text-2xl">🙏</span>
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
              Still Have Questions?
            </h2>

            <p className="text-lg text-desert-sand/80 leading-relaxed mb-12">
              If your question isn't answered here, reach out through the application form
              or send a message. We're here to provide clarity and discernment.
            </p>

            <div className="space-y-4">
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                Get in Touch
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
