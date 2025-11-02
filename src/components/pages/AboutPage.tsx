import { Link } from 'react-router-dom';
import Footer from '../Footer';

export default function AboutPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen with Portrait */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/locations/sonoran-desert-sunset.jpg"
            alt="Mountain landscape at dawn"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 via-earth-900/60 to-earth-900"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-sacred-white mb-8 font-light">
            The Journey to Here
          </h1>
          <p className="text-xl md:text-2xl text-desert-sand/90 font-serif font-light max-w-2xl mx-auto">
            Every healer has their own awakening. Mine began with a breakdown that became a breakthrough.
          </p>
        </div>
      </div>

      {/* Vision - Why This Work */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-8">
              From Breakdown to Breakthrough
            </h2>
            <div className="space-y-6 text-lg text-earth-700/80 leading-relaxed">
              <p>
                For years, we perform. We wear masks. We do what we think we're supposed to do.
                Until our body, mind, and soul say: NO MORE.
              </p>
              <p>
                The breakdown looked like psychosis, relationship collapse, identity dissolution—hitting rock bottom.
                What we didn't know then was that rock bottom would become our foundation.
              </p>
              <p className="text-xl text-desert-clay italic font-serif mt-8">
                "Sometimes we need to completely fall apart to remember who we truly are."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section - Early Impact */}
      <div className="bg-earth-800 py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-serif text-desert-sand/90 italic leading-relaxed mb-8">
              "Plant medicine showed us who we were beyond the story. Bufo Alvarius dissolved the ego
              we'd spent decades building. And in that dissolution, we found what we'd been searching for all along:
              Nothing. And everything."
            </blockquote>
            <p className="text-desert-sand/70">
              — The Awakening
            </p>
          </div>
        </div>
      </div>

      {/* Image Gallery - The Journey */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 text-center mb-16">
              The Path of Service
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/atmosphere/ceremony-01.jpg"
                  alt="Ceremony preparation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif text-sacred-white mb-2">Sacred Space</h3>
                  <p className="text-desert-sand/80 text-sm">Every ceremony is held with reverence and intention</p>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/atmosphere/ceremony-03.jpg"
                  alt="Integration circles"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif text-sacred-white mb-2">Integration Circles</h3>
                  <p className="text-desert-sand/80 text-sm">The real work happens after the medicine</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/atmosphere/ceremony-09.jpg"
                  alt="Energy healing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif text-sacred-white mb-2">Energy Healing</h3>
                  <p className="text-desert-sand/80 text-sm">Somatic work and subtle body awareness</p>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/atmosphere/ceremony-10.jpg"
                  alt="Community gathering"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif text-sacred-white mb-2">Community</h3>
                  <p className="text-desert-sand/80 text-sm">We rise together through shared experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Training & Experience */}
      <div className="bg-earth-800 py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white text-center mb-16">
              The Journey in Numbers
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8 bg-earth-700/40 backdrop-blur-xl border border-desert-sand/20 rounded-2xl">
                <div className="text-5xl font-bold text-sacred-gold mb-3">10+</div>
                <div className="text-desert-sand/80 text-lg">Years of Service</div>
              </div>
              <div className="text-center p-8 bg-earth-700/40 backdrop-blur-xl border border-desert-sand/20 rounded-2xl">
                <div className="text-5xl font-bold text-sacred-gold mb-3">500+</div>
                <div className="text-desert-sand/80 text-lg">Ceremonies Held</div>
              </div>
              <div className="text-center p-8 bg-earth-700/40 backdrop-blur-xl border border-desert-sand/20 rounded-2xl">
                <div className="text-5xl font-bold text-sacred-gold mb-3">1000+</div>
                <div className="text-desert-sand/80 text-lg">Souls Witnessed</div>
              </div>
            </div>

            <div className="bg-earth-700/30 backdrop-blur-xl border border-desert-sand/20 rounded-2xl p-12">
              <h3 className="text-2xl font-serif text-sacred-white mb-8 text-center">Training & Lineages</h3>
              <div className="grid md:grid-cols-2 gap-6 text-desert-sand/80">
                <div className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl mt-1">✦</span>
                  <div>
                    <p className="font-medium text-sacred-white">Bufo Alvarius Facilitation</p>
                    <p className="text-sm text-desert-sand/60">10+ years holding sacred space for 5-MeO-DMT journeys</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl mt-1">✦</span>
                  <div>
                    <p className="font-medium text-sacred-white">Family Constellations</p>
                    <p className="text-sm text-desert-sand/60">Systemic healing and ancestral work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl mt-1">✦</span>
                  <div>
                    <p className="font-medium text-sacred-white">Somatic Therapy & Bodywork</p>
                    <p className="text-sm text-desert-sand/60">Trauma-informed body-based healing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl mt-1">✦</span>
                  <div>
                    <p className="font-medium text-sacred-white">Energy Healing & Mystery Schools</p>
                    <p className="text-sm text-desert-sand/60">Subtle body awareness and energetic clearing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl mt-1">✦</span>
                  <div>
                    <p className="font-medium text-sacred-white">Access Consciousness</p>
                    <p className="text-sm text-desert-sand/60">Expanding awareness and choice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl mt-1">✦</span>
                  <div>
                    <p className="font-medium text-sacred-white">Theta Healing</p>
                    <p className="text-sm text-desert-sand/60">Belief work and subconscious reprogramming</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-desert-sage italic mt-8 text-lg">
                But our greatest teacher has been our own journey—and the thousands of souls we've had the honor to witness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desert Image Break */}
      <div className="relative h-[70vh]">
        <img
          src="/images/locations/mazunte-beach-sunset.jpg"
          alt="Sonoran desert landscape"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 via-transparent to-earth-900/40 flex items-center justify-center">
          <blockquote className="text-2xl md:text-4xl font-serif text-sacred-white text-center px-6 max-w-4xl italic">
            "This work is a crossing between coaching, teaching, energy healing, therapy, and mysticism."
          </blockquote>
        </div>
      </div>

      {/* Our Approach */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 text-center mb-16">
              Our Approach
            </h2>

            <div className="space-y-8 text-lg text-earth-700/80 leading-relaxed">
              <p className="text-center text-xl">
                We don't have all the answers. We don't perform miracles. We don't promise instant transformation.
              </p>

              <p className="text-2xl text-desert-clay italic font-serif text-center py-8 border-y border-earth-700/20">
                What we do is hold space for you to remember who you already are.
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-earth-800 mb-4">We believe in:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-ocean-turquoise mt-1">◆</span>
                      <span>The wisdom of the body and the intelligence of emotion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-ocean-turquoise mt-1">◆</span>
                      <span>Integration as the bridge between experience and embodiment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-ocean-turquoise mt-1">◆</span>
                      <span>Honoring both shadow and light in the healing journey</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-ocean-turquoise mt-1">◆</span>
                      <span>Sacred medicine as a catalyst, not a cure</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-earth-800 mb-4">We offer:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-sacred-amber mt-1">◆</span>
                      <span>Presence and witnessing without judgment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sacred-amber mt-1">◆</span>
                      <span>Trauma-informed facilitation and safe containers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sacred-amber mt-1">◆</span>
                      <span>Somatic tools and energetic support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sacred-amber mt-1">◆</span>
                      <span>Guidance rooted in lived experience and deep training</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-center text-earth-700/70 pt-8">
                Based between <span className="text-desert-clay font-medium">Mazunte, Mexico</span> and{' '}
                <span className="text-desert-clay font-medium">Barcelona, Spain</span>, we work with individuals,
                groups, and communities ready to shed the old and step into their divine essence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-earth-800 py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-sacred-white text-center mb-16">
              Voices from the Journey
            </h2>

            <div className="space-y-12">
              <div className="bg-earth-700/40 backdrop-blur-xl border border-desert-sand/20 rounded-2xl p-8">
                <p className="text-desert-sand/90 italic leading-relaxed mb-4">
                  "The preparation, ceremony, and integration work changed everything. Not overnight—but deeply.
                  The medicine showed me the door, but the integration gave me the keys to walk through it in my daily life."
                </p>
                <p className="text-desert-sand/60 text-sm">— Sarah M., Bufo Ceremony + Integration Package</p>
              </div>

              <div className="bg-earth-700/40 backdrop-blur-xl border border-desert-sand/20 rounded-2xl p-8">
                <p className="text-desert-sand/90 italic leading-relaxed mb-4">
                  "What sets this work apart is the genuine care and trauma-informed approach. I felt safe to go deep,
                  to fall apart, to rebuild. The facilitators hold space with wisdom, compassion, and realness."
                </p>
                <p className="text-desert-sand/60 text-sm">— Michael K., Integration Intensive</p>
              </div>

              <div className="bg-earth-700/40 backdrop-blur-xl border border-desert-sand/20 rounded-2xl p-8">
                <p className="text-desert-sand/90 italic leading-relaxed mb-4">
                  "I came for the medicine. I stayed for the integration. This isn't about chasing peak experiences—it's
                  about learning to live from the truth you touch in ceremony. That's where the real magic is."
                </p>
                <p className="text-desert-sand/60 text-sm">— Elena R., Deep Work Package</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/testimonials"
                onClick={scrollToTop}
                className="inline-block text-sacred-gold hover:text-sacred-amber transition-colors text-lg font-medium"
              >
                Read more testimonials →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What We're NOT About */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 text-center mb-16">
              What We're NOT About
            </h2>

            <div className="space-y-6 text-lg text-earth-700/80 leading-relaxed">
              <p>
                This work is not for everyone. And that's okay. We're not here to be everything to everyone.
              </p>

              <div className="bg-earth-800/5 border-l-4 border-desert-clay/40 p-6 rounded-r-xl space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay mt-1">✕</span>
                  <span>We're not selling quick fixes or spiritual bypassing</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay mt-1">✕</span>
                  <span>We're not claiming to be gurus or having all the answers</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay mt-1">✕</span>
                  <span>We're not facilitating ego inflation or spiritual materialism</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay mt-1">✕</span>
                  <span>We're not offering medicine without proper preparation and integration</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay mt-1">✕</span>
                  <span>We're not pushing anyone into experiences they're not ready for</span>
                </p>
              </div>

              <p className="text-center text-desert-clay italic font-serif text-xl pt-6">
                This work requires courage, commitment, and a willingness to face what you've been avoiding.
                But if you're ready—truly ready—we're here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-earth-800 py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-8">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-desert-sand/80 leading-relaxed mb-12">
              Explore the different pathways to work together, or reach out directly to discuss your journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/ceremonies"
                onClick={scrollToTop}
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber shadow-lg transition-colors font-medium text-lg"
              >
                Explore Ceremonies
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-block px-12 py-4 bg-earth-700/40 backdrop-blur-xl border border-desert-sand/30 text-desert-sand rounded-full hover:bg-earth-700/60 transition-all font-medium text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
