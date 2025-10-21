import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImagePlaceholder from '../ImagePlaceholder';

export default function PreparationPage() {
  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <ImagePlaceholder
            aspectRatio="21/9"
            altText="Meditation altar with sacred objects for preparation"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-6xl mb-8">🐚</div>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            Sacred Preparation
          </h1>
          <p className="text-2xl md:text-3xl text-sacred-gold/90 font-serif font-light mb-6">
            The Foundation of Safe Passage
          </p>
          <p className="text-lg md:text-xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto">
            Preparation is not optional. It is the container that holds you safe<br/>
            as you journey into the unknown.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Why Preparation Matters */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              Why Preparation Is Mandatory
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg mb-16">
              <p className="text-2xl font-serif text-sacred-gold text-center mb-8">
                The medicine doesn't care if you're ready.<br/>
                But your nervous system does.
              </p>

              <p>
                Bufo Alvarius is the most powerful entheogenic compound on Earth. The experience
                is complete ego dissolution within seconds. Your sense of self, your body, your identity—
                everything dissolves.
              </p>

              <p>
                Without proper preparation, the nervous system can go into shock. The mind can resist.
                The body can fight. This isn't just uncomfortable—it can be traumatizing.
              </p>

              <p className="border-l-4 border-sacred-gold/40 pl-6 italic text-earth-700/70">
                Preparation creates the foundation. It anchors your nervous system. It builds trust.
                It helps you understand what surrender actually means—and why resistance is futile.
              </p>

              <p>
                <strong className="text-earth-800">This is why 1-2 preparation sessions are required before any ceremony.</strong><br/>
                No exceptions.
              </p>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8">
              <h3 className="text-2xl font-serif text-earth-800 mb-4">Important Note</h3>
              <p className="text-earth-700/80 leading-relaxed">
                The ceremony is <strong>never booked directly</strong>. Only after completing preparation
                sessions and mutual discernment will ceremony dates be discussed. This protects both
                you and the sacred nature of the work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Breathwork Image */}
      <div className="h-[60vh] relative overflow-hidden">
        <ImagePlaceholder
          aspectRatio="21/9"
          altText="Person in meditative breathwork posture"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/20 to-earth-900/50"></div>
      </div>

      {/* What Preparation Includes */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              What Preparation Includes
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Session 1 */}
              <div className="bg-sacred-cream rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">1️⃣</span>
                  <h3 className="text-2xl font-serif text-earth-800">First Session</h3>
                </div>
                <p className="text-sm text-sacred-gold mb-6">60-75 minutes</p>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong>Emotional Readiness Assessment:</strong> Where are you? What's calling you? What are you running from?</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong>Nervous System Anchoring:</strong> Techniques to regulate before, during, and after the journey</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong>Facing Fears:</strong> What scares you about dissolution? What are you holding onto?</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong>Intention Setting:</strong> Not goals—but deep listening to what your soul needs</span>
                  </p>
                </div>
              </div>

              {/* Session 2 (Optional but Recommended) */}
              <div className="bg-sacred-cream rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">2️⃣</span>
                  <h3 className="text-2xl font-serif text-earth-800">Second Session</h3>
                </div>
                <p className="text-sm text-sacred-gold mb-6">60-75 minutes (if needed)</p>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong>Ceremony Orientation:</strong> What to expect, timeline, what happens during dissolution</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong>Surrender Practice:</strong> Breath work and somatic techniques for letting go</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong>Rituals to Open the Path:</strong> Personal practices to prepare body, mind, spirit</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong>Final Discernment:</strong> Is this the right time? Are you ready? Are we the right guides?</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 max-w-3xl mx-auto">
              <h4 className="text-xl font-serif text-earth-800 mb-4 text-center">Between Sessions</h4>
              <p className="text-earth-700/80 leading-relaxed text-center">
                You'll receive practices, reflections, and somatic exercises to continue preparation
                between sessions. This work doesn't start and stop in our meetings—it's a continuous
                unfolding.
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
                <span className="text-4xl">⚕️</span>
                Medical Screening Process
              </h2>
              <p className="text-earth-700/80 leading-relaxed mb-6">
                During preparation, you'll complete a comprehensive health questionnaire. This isn't bureaucracy—
                it's safety. Bufo is contraindicated for certain medical conditions, and we won't proceed
                without full transparency about your health.
              </p>
            </div>

            <h3 className="text-2xl font-serif text-earth-800 mb-6">Contraindications</h3>
            <p className="text-earth-700/80 mb-6">
              If you have any of the following, Bufo may not be safe for you:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="space-y-3 text-earth-700/80">
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Heart conditions or cardiovascular issues</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>High blood pressure (uncontrolled)</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Psychosis, schizophrenia, or severe mental illness</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Active use of SSRIs, MAOIs, or certain antidepressants</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Pregnancy or breastfeeding</span>
                </p>
              </div>
              <div className="space-y-3 text-earth-700/80">
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Epilepsy or seizure disorders</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Recent surgery (within 6 months)</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Severe unprocessed trauma without therapeutic support</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Active substance abuse or addiction</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Thyroid disorders (unmanaged)</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-sacred-gold/30">
              <p className="text-earth-700/80 leading-relaxed mb-4">
                <strong className="text-earth-800">If you have any medical conditions</strong>, please consult
                with your healthcare provider before applying. We reserve the right to decline working with
                anyone if medical screening reveals contraindications.
              </p>
              <p className="text-sm text-earth-700/70 italic">
                This work is not a substitute for medical or psychological treatment.
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
              Pre-Ceremony Practices
            </h2>

            <p className="text-lg text-earth-700/80 leading-relaxed text-center mb-12 max-w-2xl mx-auto">
              Between preparation and ceremony, you'll be given specific practices to deepen readiness.
              These may include:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center space-y-4">
                <div className="text-4xl">🧘</div>
                <h3 className="text-xl font-serif text-earth-800">Somatic Practices</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Breath work, body scanning, nervous system regulation
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-4xl">📿</div>
                <h3 className="text-xl font-serif text-earth-800">Rituals</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Personal ceremonies to create sacred space and intention
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-4xl">🌿</div>
                <h3 className="text-xl font-serif text-earth-800">Dietary Guidelines</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Simple, clean eating in the days before ceremony
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8">
              <h4 className="text-xl font-serif text-earth-800 mb-4">The Days Before Ceremony</h4>
              <div className="space-y-3 text-earth-700/80 leading-relaxed">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold">•</span>
                  <span>Reduce stimulants (caffeine, alcohol, cannabis)</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold">•</span>
                  <span>Increase rest and solitude</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold">•</span>
                  <span>Journal on fears, resistances, and prayers</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold">•</span>
                  <span>Spend time in nature if possible</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold">•</span>
                  <span>Fast for 4-6 hours before ceremony (water okay)</span>
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
              Investment
            </h2>

            <div className="bg-white rounded-2xl p-12 border border-earth-700/20 mb-12">
              <div className="text-5xl mb-6">🐚</div>
              <h3 className="text-3xl font-serif text-earth-800 mb-4">Preparation Sessions</h3>
              <div className="text-5xl font-serif text-sacred-gold mb-6">€111</div>
              <p className="text-lg text-earth-700/70 mb-8">per session (60-75 minutes)</p>

              <div className="text-earth-700/80 leading-relaxed max-w-md mx-auto">
                <p className="mb-4">
                  <strong className="text-earth-800">Typical journey:</strong> 1-2 sessions required
                </p>
                <p className="text-sm text-earth-700/60">
                  Sessions can be conducted online (video call) or in-person if you're traveling to Mexico
                  or if we're in your area
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 mb-12">
              <h4 className="text-xl font-serif text-earth-800 mb-4">Sliding Scale Available</h4>
              <p className="text-earth-700/80 leading-relaxed">
                We offer sliding scale pricing based on financial situation. BIPOC and single parent
                discounts available. Payment plans offered.
              </p>
              <p className="text-earth-700/70 italic mt-4">
                "No one is ever turned away for lack of funds when the call is genuine."
              </p>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg text-earth-700/80">
                Ready to begin preparation?
              </p>
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                Start Your Application
              </Link>
              <p className="text-sm text-earth-700/60">
                Application → Preparation → Discernment → Ceremony
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
              The Sacred Sequence
            </h2>

            <div className="space-y-6 text-desert-sand/80 text-lg">
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl">🐚</span>
                <span className="text-2xl font-serif text-sacred-gold">Preparation</span>
                <span className="text-desert-sand/50">→</span>
                <span className="text-3xl">🔥</span>
                <span className="text-2xl font-serif text-sacred-gold">Ceremony</span>
                <span className="text-desert-sand/50">→</span>
                <span className="text-3xl">🌿</span>
                <span className="text-2xl font-serif text-sacred-gold">Integration</span>
              </div>

              <p className="text-desert-sand/70 italic max-w-2xl mx-auto pt-8">
                Each phase is sacred. Each phase is necessary. This is not a transaction—
                it's a relationship. With the medicine. With yourself. With what wants to be remembered.
              </p>
            </div>

            <div className="mt-12 space-y-4 text-desert-sand/70">
              <p>
                <Link to="/ceremonies" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  Learn about the Ceremony →
                </Link>
              </p>
              <p>
                <Link to="/integration" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  Understand Integration →
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
