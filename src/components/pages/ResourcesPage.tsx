import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function ResourcesPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resources = {
    integration: [
      {
        title: 'Bufo Integration Companion',
        description: 'A comprehensive guide for integrating your Bufo ceremony experience into daily life with practices, reflection prompts, and grounding tools.',
        file: '/resources/Bufo_Integration_Companion.docx'
      },
      {
        title: 'Post-Ceremony Integration Workbook',
        description: 'Essential tools to ground your medicine journey insights into embodied wisdom and lasting transformation.',
        file: '/resources/Post_Ceremony_Integration_Workbook.docx'
      },
      {
        title: 'Timeline Shifting Meditation',
        description: 'A powerful guided journey to realign with your highest timeline and consciously shift your reality.',
        file: '/resources/Timeline_Shifting_Meditation.docx'
      }
    ],
    healing: [
      {
        title: 'Ancestral Healing Guide',
        description: 'Sacred practices to clear inherited patterns, honor your lineage, and break generational cycles.',
        file: '/resources/Ancestral_Healing_Guide.docx'
      },
      {
        title: 'Somatic Healing & Trauma Release',
        description: 'Body-based practices to release stored trauma and reclaim safety in your nervous system.',
        file: '/resources/Somatic_Healing_Trauma_Release.docx'
      },
      {
        title: 'Grief & Sacred Sorrow',
        description: 'A compassionate companion for navigating loss and honoring the sacred medicine of grief.',
        file: '/resources/Grief_Sacred_Sorrow.docx'
      },
      {
        title: 'Sacred Rupture Journey',
        description: 'Tools for transforming betrayal, heartbreak, and rupture into portals of profound growth.',
        file: '/resources/Sacred_Rupture_Journey.docx'
      }
    ],
    practice: [
      {
        title: 'Building Your Sacred Practice',
        description: 'Create a daily spiritual practice that aligns with your soul and sustains your awakening.',
        file: '/resources/Building_Your_Sacred_Practice.docx'
      },
      {
        title: 'Death Practice & Mortality',
        description: 'Contemplations and practices for befriending death and living with radical presence.',
        file: '/resources/Death_Practice_Mortality.docx'
      },
      {
        title: 'The Void Companion',
        description: 'Guidance for navigating the dark night of the soul and the fertile emptiness of transition.',
        file: '/resources/The_Void_Companion.docx'
      }
    ],
    identity: [
      {
        title: 'The Feminine Journey',
        description: 'Reclaiming sacred femininity, cyclical wisdom, and the power of receptivity and creation.',
        file: '/resources/The_Feminine_Journey.docx'
      },
      {
        title: 'The Masculine Journey',
        description: 'Embodying sacred masculinity through presence, purpose, protection, and authentic power.',
        file: '/resources/The_Masculine_Journey.docx'
      },
      {
        title: 'Couples & Conscious Partnership',
        description: 'Tools for transforming relationship into sacred practice and union into awakening.',
        file: '/resources/Couples_Conscious_Partnership.docx'
      },
      {
        title: 'Sacred Business Blueprint',
        description: 'Align your offerings with soul purpose, universal flow, and authentic service.',
        file: '/resources/Sacred_Business_Blueprint.docx'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero - Full Screen Opening */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/atmosphere/ceremony-14.jpg"
            alt="Sacred resources and teachings"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/50 to-earth-900"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-sacred-white mb-8 font-light">
            Resources
          </h1>
          <p className="text-xl md:text-2xl text-ocean-turquoise/90 font-serif font-light max-w-2xl mx-auto">
            Free tools, teachings, and practices for your journey
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-sacred-cream pt-36 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800">
              Wisdom for Your Path
            </h2>
            <p className="text-xl text-earth-700/80 leading-relaxed">
              These resources are offered freely to support your healing, awakening, and integration.
            </p>
            <p className="text-lg text-earth-700/70 leading-relaxed">
              Each workbook is a transmission—designed to meet you exactly where you are and guide you deeper
              into embodied transformation. Download what calls to you.
            </p>
          </div>
        </div>
      </div>

      {/* Integration & Ceremony Resources */}
      <div className="bg-earth-800 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-5xl text-ocean-turquoise mb-4">✧</div>
              <h3 className="text-3xl md:text-4xl font-serif text-sacred-white mb-4">
                Integration & Ceremony
              </h3>
              <p className="text-desert-sand/70 text-lg">
                Tools for grounding your medicine experiences
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.integration.map((resource, index) => (
                <div key={index} className="bg-earth-700/40 backdrop-blur-xl border border-ocean-turquoise/20 rounded-2xl p-8 hover:border-ocean-turquoise/40 transition-all hover:shadow-xl">
                  <div className="space-y-4">
                    <div className="text-3xl text-ocean-turquoise">◆</div>
                    <h4 className="text-xl font-serif text-sacred-white">{resource.title}</h4>
                    <p className="text-desert-sand/70 leading-relaxed text-sm">
                      {resource.description}
                    </p>
                    <div className="pt-4">
                      <a
                        href={resource.file}
                        download
                        className="inline-flex items-center text-ocean-turquoise hover:text-ocean-turquoise/80 transition-colors font-medium text-sm"
                      >
                        Download →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Healing Journeys Resources */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-5xl text-ocean-turquoise mb-4">✧</div>
              <h3 className="text-3xl md:text-4xl font-serif text-earth-800 mb-4">
                Healing Journeys
              </h3>
              <p className="text-earth-700/70 text-lg">
                Companions for trauma, grief, and ancestral work
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {resources.healing.map((resource, index) => (
                <div key={index} className="bg-white border border-ocean-turquoise/10 rounded-2xl p-8 hover:border-ocean-turquoise/30 hover:shadow-xl transition-all">
                  <div className="space-y-4">
                    <div className="text-3xl text-ocean-turquoise">◆</div>
                    <h4 className="text-xl font-serif text-earth-800">{resource.title}</h4>
                    <p className="text-earth-700/70 leading-relaxed text-sm">
                      {resource.description}
                    </p>
                    <div className="pt-4">
                      <a
                        href={resource.file}
                        download
                        className="inline-flex items-center text-ocean-turquoise hover:text-ocean-turquoise/80 transition-colors font-medium text-sm"
                      >
                        Download →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sacred Practice Resources */}
      <div className="bg-earth-800 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-5xl text-ocean-turquoise mb-4">✧</div>
              <h3 className="text-3xl md:text-4xl font-serif text-sacred-white mb-4">
                Sacred Practice
              </h3>
              <p className="text-desert-sand/70 text-lg">
                Building a life of presence and depth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.practice.map((resource, index) => (
                <div key={index} className="bg-earth-700/40 backdrop-blur-xl border border-ocean-turquoise/20 rounded-2xl p-8 hover:border-ocean-turquoise/40 transition-all hover:shadow-xl">
                  <div className="space-y-4">
                    <div className="text-3xl text-ocean-turquoise">◆</div>
                    <h4 className="text-xl font-serif text-sacred-white">{resource.title}</h4>
                    <p className="text-desert-sand/70 leading-relaxed text-sm">
                      {resource.description}
                    </p>
                    <div className="pt-4">
                      <a
                        href={resource.file}
                        download
                        className="inline-flex items-center text-ocean-turquoise hover:text-ocean-turquoise/80 transition-colors font-medium text-sm"
                      >
                        Download →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Relationships & Identity Resources */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-5xl text-ocean-turquoise mb-4">✧</div>
              <h3 className="text-3xl md:text-4xl font-serif text-earth-800 mb-4">
                Relationships & Identity
              </h3>
              <p className="text-earth-700/70 text-lg">
                Embodying sacred masculinity, femininity, and conscious partnership
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {resources.identity.map((resource, index) => (
                <div key={index} className="bg-white border border-ocean-turquoise/10 rounded-2xl p-8 hover:border-ocean-turquoise/30 hover:shadow-xl transition-all">
                  <div className="space-y-4">
                    <div className="text-3xl text-ocean-turquoise">◆</div>
                    <h4 className="text-xl font-serif text-earth-800">{resource.title}</h4>
                    <p className="text-earth-700/70 leading-relaxed text-sm">
                      {resource.description}
                    </p>
                    <div className="pt-4">
                      <a
                        href={resource.file}
                        download
                        className="inline-flex items-center text-ocean-turquoise hover:text-ocean-turquoise/80 transition-colors font-medium text-sm"
                      >
                        Download →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Visual Divider - Image Section */}
      <div className="h-[60vh] relative overflow-hidden">
        <img
          src="/images/atmosphere/ceremony-17.jpeg"
          alt="Sacred journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 via-transparent to-earth-900/40 flex items-center justify-center">
          <blockquote className="text-2xl md:text-4xl font-serif text-sacred-white leading-relaxed italic text-center px-4 max-w-3xl">
            "True transformation happens not in a single moment, but in the daily practice of
            integration, reflection, and embodiment."
          </blockquote>
        </div>
      </div>

      {/* Recent Writings */}
      <div className="relative py-48">
        <div className="absolute inset-0">
          <img
            src="/images/atmosphere/ceremony-18.jpeg"
            alt="Writings and reflections"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/30 via-cosmic-900/50 to-black/60"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon text-center mb-20">
              Recent Writings
            </h2>

            <div className="space-y-12">
              <div className="border-l-4 border-ocean-turquoise/40 pl-8 py-4">
                <h3 className="text-2xl font-serif text-sacred-moon mb-3">
                  The Fall of Society: 2025-2100
                </h3>
                <p className="text-sacred-moon/70">
                  What's coming, and how to prepare your soul for the great transition.
                </p>
              </div>

              <div className="border-l-4 border-ocean-turquoise/40 pl-8 py-4">
                <h3 className="text-2xl font-serif text-sacred-moon mb-3">
                  Becoming Love: Ego Dissolution
                </h3>
                <p className="text-sacred-moon/70">
                  What Bufo taught me about surrendering identity and remembering wholeness.
                </p>
              </div>

              <div className="border-l-4 border-ocean-turquoise/40 pl-8 py-4">
                <h3 className="text-2xl font-serif text-sacred-moon mb-3">
                  The Masculine Awakening
                </h3>
                <p className="text-sacred-moon/70">
                  Why men's work is the most important work right now, and what it means to embody sacred masculinity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep text-center mb-20">
              Voices From The Journey
            </h2>

            <div className="space-y-16">
              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-indigo-deep/80 leading-relaxed italic">
                  "Working with Astral changed their life. Not in a cliché way—in a 'they can't go back to who
                  they were' way. He sees you. Really sees you. And he holds space for whatever needs to emerge."
                </p>
                <p className="text-ocean-turquoise font-medium">— Maria, Barcelona</p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-indigo-deep/80 leading-relaxed italic">
                  "The Bufo ceremony was the most profound experience of my life. Astral's preparation,
                  presence, and integration support made me feel completely safe to surrender. I finally
                  understand what 'coming home to myself' means."
                </p>
                <p className="text-ocean-turquoise font-medium">— David, USA</p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-indigo-deep/80 leading-relaxed italic">
                  "The men's circle gave me permission to feel everything I'd been holding back for decades.
                  To cry. To rage. To laugh. To finally be myself without apology."
                </p>
                <p className="text-ocean-turquoise font-medium">— Carlos, Mexico</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/atmosphere/ceremony-19.jpeg"
            alt="Begin your journey"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/50 via-mystic-purple/40 to-cosmic-900/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon">
              Ready to begin your journey?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link
                to="/ceremonies"
                onClick={scrollToTop}
                className="px-10 py-4 bg-sacred-cream text-indigo-deep rounded-full hover:bg-sacred-moon transition-colors font-medium"
              >
                Explore ceremonies
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="px-10 py-4 border-2 border-sacred-cream text-sacred-cream rounded-full hover:bg-sacred-cream hover:text-indigo-deep transition-colors font-medium"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
