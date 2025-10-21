import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImagePlaceholder from '../ImagePlaceholder';

export default function IntegrationPage() {
  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <ImagePlaceholder
            aspectRatio="21/9"
            altText="Integration circle in nature with people reflecting"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-6xl mb-8">🌿</div>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            Integration Support
          </h1>
          <p className="text-2xl md:text-4xl text-sacred-gold/90 font-serif font-light mb-8 italic leading-relaxed">
            "Insight without integration is just<br/>spiritual entertainment."
          </p>
          <p className="text-lg md:text-xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto">
            The ceremony is a doorway. Integration is the path.<br/>
            This is where the real work happens.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Why Integration Is Sacred */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              Why Integration Is Non-Negotiable
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg mb-16">
              <p className="text-2xl font-serif text-sacred-gold text-center mb-8">
                The medicine shows you everything.<br/>
                Integration teaches you how to live it.
              </p>

              <p>
                During a Bufo ceremony, you experience complete ego dissolution. You touch non-dual awareness.
                You remember what you are beyond name, form, story, identity. You die before you die.
              </p>

              <p>
                And then... you come back.
              </p>

              <p>
                Back to a body. Back to a life. Back to relationships, responsibilities, patterns, triggers,
                wounds. Back to the same world—but you are no longer the same.
              </p>

              <p className="border-l-4 border-sacred-gold/40 pl-6 italic text-earth-700/70">
                <strong className="text-earth-800 not-italic">This is the crisis.</strong><br/>
                You've seen truth. You've touched infinity. You've dissolved into everything—
                and now you're expected to go to work, pay bills, have conversations, navigate
                relationships as if nothing happened.
              </p>

              <p>
                <strong className="text-earth-800">Integration is the bridge</strong> between the mystical
                and the mundane. Between remembrance and daily life. Between dissolution and embodiment.
              </p>

              <p>
                Without integration, the experience becomes a memory. A story. Spiritual entertainment.
              </p>

              <p>
                <strong className="text-earth-800">With integration,</strong> the experience becomes lived truth.
              </p>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8">
              <h3 className="text-2xl font-serif text-earth-800 mb-4">Integration Is Included</h3>
              <p className="text-earth-700/80 leading-relaxed">
                Every Bufo ceremony includes an integration session within 48 hours and 2-week follow-up support.
                This is built into the ceremony investment. However, most people benefit from continued
                integration work beyond the initial sessions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nature Reflection Image */}
      <div className="h-[60vh] relative overflow-hidden">
        <ImagePlaceholder
          aspectRatio="21/9"
          altText="Person journaling in nature for integration"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/20 to-earth-900/50"></div>
      </div>

      {/* What Integration Includes */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              What Integration Includes
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">💬</span>
                    Post-Journey Emotional Support
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Processing what happened, what you saw, what dissolved, what wants to emerge.
                    Holding space for confusion, grief, ecstasy, terror, wonder—all of it.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">📖</span>
                    Story Unwinding & Meaning-Making
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    The mind wants to make sense of the experience. We work with symbols, visions,
                    messages—not to create new stories, but to unwind old ones.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🪞</span>
                    Identity Realignment
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Who are you now? What fell away? What's trying to be born?
                    How do you live from remembrance instead of forgetting?
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">❤️‍🩹</span>
                    Trauma Tending
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Sometimes the medicine brings up trauma that was buried. We don't bypass it—
                    we tend to it with somatic practices, energy work, and deep presence.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🕊️</span>
                    Rituals to Embody Remembrance
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Daily practices, ceremonies, anchors to keep you connected to what you
                    touched in the journey. Making the mystical practical.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🌍</span>
                    Life Integration Practices
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    How does this wisdom show up in relationships? Work? Daily life?
                    Moving from spiritual insight to embodied action.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-earth-700/80 leading-relaxed italic text-center">
                "Integration isn't about 'getting back to normal.' It's about living from a new normal—
                one where you remember who you actually are, even when the world forgets."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Packages */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              Integration Packages
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Single Session */}
              <div className="bg-white rounded-2xl p-8 border border-earth-700/20">
                <div className="text-4xl mb-4 text-center">🌱</div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">Single Session</h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-serif text-sacred-gold mb-2">€88-111</div>
                  <p className="text-sm text-earth-700/60">75 minutes | Sliding scale</p>
                </div>
                <p className="text-earth-700/70 leading-relaxed text-sm text-center">
                  For those who need one focused integration session or ongoing support
                  between ceremony experiences.
                </p>
              </div>

              {/* 4-Session Package */}
              <div className="bg-white rounded-2xl p-8 border-2 border-sacred-gold/40 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sacred-gold text-earth-900 px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <div className="text-4xl mb-4 text-center">🌿</div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">4-Session Package</h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-serif text-sacred-gold mb-2">€300-400</div>
                  <p className="text-sm text-earth-700/60">Over 4-8 weeks | Sliding scale</p>
                </div>
                <p className="text-earth-700/70 leading-relaxed text-sm text-center mb-6">
                  Comprehensive integration container. Ideal for post-ceremony support
                  or deep life transitions.
                </p>
                <div className="space-y-2 text-xs text-earth-700/70">
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">✓</span>
                    <span>Weekly or bi-weekly sessions</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">✓</span>
                    <span>WhatsApp support between sessions</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-sacred-gold">✓</span>
                    <span>Custom practices and rituals</span>
                  </p>
                </div>
              </div>

              {/* Extended Containers */}
              <div className="bg-white rounded-2xl p-8 border border-earth-700/20">
                <div className="text-4xl mb-4 text-center">🌳</div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4 text-center">Extended Containers</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-serif text-sacred-gold mb-2">€333-777</div>
                  <p className="text-sm text-earth-700/60 mb-3">6-Week Deep Presence</p>
                  <div className="text-3xl font-serif text-sacred-gold mb-2">€888-1,111</div>
                  <p className="text-sm text-earth-700/60">3-Month Journey</p>
                </div>
                <p className="text-earth-700/70 leading-relaxed text-sm text-center">
                  For major life transitions, deep transformation work, or those building
                  new foundations after medicine experiences.
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 max-w-3xl mx-auto">
              <h4 className="text-xl font-serif text-earth-800 mb-4 text-center">Sliding Scale Philosophy</h4>
              <div className="space-y-3 text-earth-700/80 text-center leading-relaxed">
                <p>All integration work is offered on a sliding scale</p>
                <p>BIPOC and single parent discounts available</p>
                <p>Payment plans offered for longer containers</p>
                <p className="italic text-earth-700/70 pt-4">
                  "No one is ever turned away for lack of funds when the call is genuine."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Modalities */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              Integration Modalities
            </h2>

            <p className="text-lg text-earth-700/80 text-center mb-16 max-w-3xl mx-auto">
              Integration sessions draw from multiple modalities depending on what you need.
              This is not formulaic—it's deeply intuitive and responsive.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="text-4xl">⚡</div>
                <h3 className="text-xl font-serif text-earth-800">Energy Healing</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Clearing blocks, releasing stuck emotions, restoring energetic coherence
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-4xl">🧬</div>
                <h3 className="text-xl font-serif text-earth-800">Family Constellations</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Uncovering ancestral patterns and systemic entanglements revealed in ceremony
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-4xl">🫀</div>
                <h3 className="text-xl font-serif text-earth-800">Somatic Bodywork</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Working with the body's wisdom, releasing trauma held in tissues
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-4xl">🧘</div>
                <h3 className="text-xl font-serif text-earth-800">Meditation & Breathwork</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Anchoring practices to stay present with what's emerging
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-4xl">👶</div>
                <h3 className="text-xl font-serif text-earth-800">Inner Child Work</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Reparenting wounded parts that surface during dissolution
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-4xl">📡</div>
                <h3 className="text-xl font-serif text-earth-800">Channeled Guidance</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Intuitive transmissions and Akashic records access when relevant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When to Seek Integration */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              When to Seek Integration Support
            </h2>

            <div className="space-y-6 text-earth-700/80 leading-relaxed">
              <div className="bg-white rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-2xl">✓</span>
                  <span><strong className="text-earth-800">After a Bufo ceremony</strong> — Integration within 48 hours is included, but ongoing support helps anchor the experience</span>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-2xl">✓</span>
                  <span><strong className="text-earth-800">After other plant medicine experiences</strong> — Ayahuasca, psilocybin, San Pedro, etc.</span>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-2xl">✓</span>
                  <span><strong className="text-earth-800">When life is falling apart</strong> — Sometimes dissolution happens without medicine. Transitions, breakdowns, dark nights of the soul</span>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-2xl">✓</span>
                  <span><strong className="text-earth-800">When you're stuck in spiritual bypassing</strong> — You've had insights but they're not landing in your life</span>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-2xl">✓</span>
                  <span><strong className="text-earth-800">When you're ready to embody truth</strong> — Moving from understanding to living it</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative py-48">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/70 to-earth-900/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl text-sacred-gold/60 mb-8">🌿</div>
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-8">
              Ready for Integration Support?
            </h2>

            <div className="space-y-6 text-desert-sand/80 leading-relaxed text-lg mb-12">
              <p>
                Integration sessions are available as standalone work or as part of the full
                Bufo journey (Preparation → Ceremony → Integration).
              </p>
              <p className="italic text-desert-sand/70">
                Whether you've sat with medicine recently or are navigating a major life
                transition, we're here to walk with you.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                Book Integration Session
              </Link>
              <p className="text-sm text-desert-sand/60">
                Online (video call) or in-person (Mazunte, Mexico)
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-desert-sand/20">
              <p className="text-desert-sand/70">
                <Link to="/ceremonies" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  ← Learn about Bufo Ceremonies
                </Link>
                <span className="mx-4 text-desert-sand/40">|</span>
                <Link to="/preparation" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  Learn about Preparation →
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
