import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImagePlaceholder from '../ImagePlaceholder';

export default function BufoCeremoniesPage() {
  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <ImagePlaceholder
            aspectRatio="21/9"
            altText="Sonoran Desert toad - Bufo Alvarius"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-5xl text-sacred-gold/60 mb-8">⊹</div>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            Bufo Alvarius Ceremonies
          </h1>
          <p className="text-2xl md:text-3xl text-sacred-gold/90 font-serif font-light mb-6">
            Die Before You Die
          </p>
          <p className="text-lg md:text-xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto">
            The most potent and profound entheogenic compound on Earth.<br/>
            Sacred passage to ego dissolution and divine remembrance.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* What is Bufo Alvarius */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              What is Bufo Alvarius?
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg">
              <p className="text-2xl text-sacred-gold font-serif text-center mb-8">
                5-MeO-DMT from the Sonoran Desert Toad
              </p>

              <p>
                Bufo Alvarius—5-MeO-DMT—is the only substance that can reliably introduce individuals
                to a state of full non-dual awareness, override the energetic structure of the ego,
                and reveal the unitary nature of reality.
              </p>

              <p>
                This is not a psychedelic. It is a sacred teacher of death and pure remembrance.
                It is not for everyone, and it is not a shortcut.
              </p>

              <div className="bg-medicine-venom rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-serif text-earth-800 mb-6">The Experience</h3>
                <div className="space-y-4">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong className="text-earth-800">Speed:</strong> Effects begin within <strong>seconds</strong> of inhalation</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong className="text-earth-800">Duration:</strong> 15-30 minutes of peak experience</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong className="text-earth-800">Intensity:</strong> Complete ego dissolution and non-dual consciousness</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span><strong className="text-earth-800">Outcome:</strong> The remembrance of what you've always been</span>
                  </p>
                </div>
              </div>

              <p className="border-l-4 border-sacred-gold/40 pl-6 italic text-earth-700/70 text-xl">
                "This is not an offering we promote publicly. If you are here, you've been guided,
                invited, or felt the call. This path requires humility, surrender, and integration."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toad Close-up Image */}
      <div className="h-[60vh] relative overflow-hidden">
        <ImagePlaceholder
          aspectRatio="21/9"
          altText="Bufo Alvarius toad close-up in natural habitat"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/20 to-earth-900/50"></div>
      </div>

      {/* Ceremony Details */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              Ceremony Details
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🌿</span>
                    Facilitators
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    <strong className="text-earth-800">Nina & Astral</strong><br/>
                    Seri Tribe-initiated facilitators<br/>
                    Trauma-informed, hundreds of ceremonies held
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    <span className="text-3xl">📍</span>
                    Location
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    Mazunte, Oaxaca, Mexico<br/>
                    A sacred container in nature, held with deep reverence
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    <span className="text-3xl">👥</span>
                    Group Size
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    Small, intimate settings<br/>
                    2-4 people maximum<br/>
                    Individual or couple sessions available
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    <span className="text-3xl">⏰</span>
                    Timeline
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    Full day experience<br/>
                    Includes opening prayer, ceremony, and post-ceremony rest<br/>
                    Integration session within 48 hours<br/>
                    2-week follow-up support
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🙏</span>
                    What's Included
                  </h3>
                  <div className="space-y-3 text-earth-700/80 leading-relaxed">
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">✓</span>
                      <span>Pre-ceremony consultation</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">✓</span>
                      <span>Sacred container creation & opening prayer</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">✓</span>
                      <span>Bufo ceremony with full energetic holding</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">✓</span>
                      <span>Touch, breath, and sound-based guidance</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">✓</span>
                      <span>Full day of care and post-ceremony rest</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">✓</span>
                      <span>Integration session within 48 hours</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-sacred-gold mt-1">✓</span>
                      <span>2-week follow-up support</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-earth-800 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🌿</span>
                    Facilitator Approach
                  </h3>
                  <p className="text-earth-700/80 leading-relaxed">
                    Initiated by Seri Tribe elders<br/>
                    Trauma-informed protocols<br/>
                    Years of facilitator training<br/>
                    Full presence and energetic holding
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-serif text-earth-800 mb-4">Sacred Requirements</h3>
              <p className="text-earth-700/80 leading-relaxed max-w-2xl mx-auto">
                This ceremony is <strong>only offered after</strong> completion of 1-2 preparation sessions
                and mutual discernment between facilitator and participant. Medical screening is mandatory.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ceremony Space Image */}
      <div className="h-[70vh] relative overflow-hidden">
        <ImagePlaceholder
          aspectRatio="21/9"
          altText="Sacred ceremony space in nature - Mazunte, Mexico"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/30 to-earth-900/60 flex items-center justify-center">
          <p className="text-3xl md:text-5xl font-serif text-sacred-white italic text-center px-4 max-w-4xl leading-tight">
            "Sacred container held with reverence<br/>and deep presence"
          </p>
        </div>
      </div>

      {/* Who This Is For / Not For */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              Is This Medicine For You?
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* FOR */}
              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-4xl text-sacred-gold">✓</div>
                  <h3 className="text-2xl font-serif text-earth-800">This work is FOR:</h3>
                </div>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span>Those ready to die before they die</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span>Those who've done deep inner work and feel called to complete something</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span>Those seeking death of illusion, not an experience</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span>Those ready to meet resistance, ego, attachments and let them go</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span>Those ready to surrender and integrate</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span>Seekers tired of seeking</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">•</span>
                    <span>Those who can no longer pretend</span>
                  </p>
                </div>
              </div>

              {/* NOT FOR */}
              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-4xl text-desert-clay">✗</div>
                  <h3 className="text-2xl font-serif text-earth-800">This work is NOT for:</h3>
                </div>
                <div className="space-y-4 text-earth-700/80 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>Those with untreated trauma or psychosis</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>People chasing "highs" or peak states</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>Anyone expecting "healing from someone else"</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>Anyone who refuses to integrate or slow down</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>Spiritual tourists</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>Those seeking recreation</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-desert-clay mt-1">•</span>
                    <span>Those expecting quick fixes</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-earth-700/70 italic">
                "You're not broken. You're not lost. You're initiating."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contraindications & Medical Screening */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-desert-clay/10 border-l-4 border-desert-clay rounded-r-2xl p-8 mb-12">
              <h2 className="text-3xl font-serif text-earth-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">⚕️</span>
                Medical Screening Required
              </h2>
              <p className="text-earth-700/80 leading-relaxed mb-6">
                Safety is paramount. All participants must complete a thorough health questionnaire
                and medical screening before ceremony. This work is not suitable for everyone.
              </p>
            </div>

            <h3 className="text-2xl font-serif text-earth-800 mb-6">Contraindications</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="space-y-3 text-earth-700/80">
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Heart conditions or cardiovascular issues</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Psychosis or severe mental illness</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Certain medications (SSRIs, MAOIs, etc.)</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Pregnancy or breastfeeding</span>
                </p>
              </div>
              <div className="space-y-3 text-earth-700/80">
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Severe unresolved trauma without therapeutic support</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Recent surgical procedures</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>High blood pressure</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-desert-clay font-bold">×</span>
                  <span>Epilepsy or seizure disorders</span>
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-6 text-sm text-earth-700/70 leading-relaxed">
              <p className="font-semibold text-earth-800 mb-2">Medical Disclaimer:</p>
              <p>
                All services are complementary and do not replace medical, psychological, or psychiatric care.
                This is sacred medicine work, not medical treatment. If you have any medical conditions,
                please consult with your healthcare provider before applying.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12">
              Investment
            </h2>

            <div className="bg-white rounded-2xl p-12 border-2 border-sacred-gold/30 mb-12">
              <div className="text-5xl mb-6">🔥</div>
              <h3 className="text-3xl font-serif text-earth-800 mb-4">Bufo Alvarius Ceremony</h3>
              <div className="text-5xl font-serif text-sacred-gold mb-6">€300-500</div>
              <p className="text-lg text-earth-700/70 mb-8">per person</p>

              <div className="text-left max-w-2xl mx-auto space-y-3 text-earth-700/80 leading-relaxed">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold">✓</span>
                  <span>Pre-ceremony consultation</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold">✓</span>
                  <span>Full ceremony with energetic holding (2-4 people max)</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold">✓</span>
                  <span>Integration session within 48 hours</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold">✓</span>
                  <span>2-week follow-up support</span>
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 mb-12">
              <h4 className="text-xl font-serif text-earth-800 mb-4">Complete Journey Investment</h4>
              <p className="text-earth-700/80 leading-relaxed mb-6">
                The full sacred journey includes Preparation + Ceremony + Integration:
              </p>
              <div className="space-y-2 text-earth-700/80">
                <p>Preparation: €111-222 (1-2 sessions required)</p>
                <p>Ceremony: €300-500</p>
                <p>Integration: €88-111+ (1-4 sessions recommended)</p>
              </div>
              <p className="text-sm text-earth-700/60 mt-6 italic">
                Total investment typically ranges €500-800+ depending on preparation and integration needs
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg text-earth-700/80 mb-4">
                Sliding scale available | BIPOC and single parent discounts | Payment plans offered
              </p>
              <p className="text-earth-700/70 italic">
                "No one is ever turned away for lack of funds when the call is genuine."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="relative py-48">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/70 to-earth-900/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl text-sacred-gold/60 mb-8">⊹</div>
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-8">
              The Application Process
            </h2>

            <div className="space-y-6 text-desert-sand/80 leading-relaxed text-lg mb-12">
              <p className="text-2xl font-serif italic text-sacred-gold/90">
                "This work is never sold. Only offered."
              </p>

              <p>
                This is an invitation to discernment—for both of us. Not everyone is a fit.
                And that's sacred.
              </p>
            </div>

            <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-8 mb-12 text-left">
              <h3 className="text-2xl font-serif text-sacred-white mb-6">Steps:</h3>
              <div className="space-y-4 text-desert-sand/80">
                <p className="flex items-start gap-4">
                  <span className="text-sacred-gold font-bold">1.</span>
                  <span>Fill out private application (reviewed in deep presence)</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-gold font-bold">2.</span>
                  <span>If aligned: Book 1-2 preparation sessions</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-gold font-bold">3.</span>
                  <span>Complete medical screening questionnaire</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-gold font-bold">4.</span>
                  <span>Only after preparation: Agree on ceremony dates</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-gold font-bold">5.</span>
                  <span>Ceremony experience in Mazunte, Mexico</span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="text-sacred-gold font-bold">6.</span>
                  <span>Integration support unfolds as needed</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                Begin Your Application
              </Link>
              <p className="text-sm text-desert-sand/60">
                <Link to="/preparation" className="hover:text-sacred-gold transition-colors">
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
