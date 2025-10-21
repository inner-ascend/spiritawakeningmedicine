import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImagePlaceholder from '../ImagePlaceholder';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <ImagePlaceholder
            aspectRatio="21/9"
            altText="Sonoran Desert at sunset"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-5xl text-sacred-gold/60 mb-8">⊛</div>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            Nina & Astral
          </h1>
          <p className="text-2xl md:text-3xl text-desert-sand/80 font-serif italic leading-relaxed">
            Initiated by the Sonoran Desert · Servants of the Medicine
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* The Call */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              The Call
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg">
              <p>
                We didn't find the medicine. It found us.
              </p>

              <p>
                For years, we walked the seeker's path. Meditation retreats. Therapy. Energy work.
                Self-development courses. We thought we were healing. We thought we were growing.
              </p>

              <p>
                And then the medicine showed us we were still performing.
              </p>

              <p className="text-2xl font-serif text-sacred-gold italic text-center my-12">
                The first time we sat with Bufo, we died.
              </p>

              <p>
                Not metaphorically. Not symbolically. We died.
              </p>

              <p>
                Everything we thought we were—our names, our stories, our achievements, our wounds,
                our identities—dissolved. Gone. Within seconds.
              </p>

              <p>
                What remained was pure awareness. No separation. No "me" and "other."
                Just... everything. And nothing.
              </p>

              <p className="border-l-4 border-sacred-gold/40 pl-6 italic text-earth-700/70">
                We returned to our bodies different people. Or more accurately: we returned
                knowing there is no person. Only presence wearing temporary names.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portrait Images - Nina & Astral */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <ImagePlaceholder
              aspectRatio="3/4"
              altText="Nina - Co-facilitator portrait"
              className="shadow-lg"
              caption="Nina"
            />
            <ImagePlaceholder
              aspectRatio="3/4"
              altText="Astral - Co-facilitator portrait"
              className="shadow-lg"
              caption="Astral"
            />
          </div>
        </div>
      </div>

      {/* The Initiation */}
      <div className="relative py-48">
        <div className="absolute inset-0 bg-gradient-to-b from-earth-700 to-earth-900"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-12 text-center">
              Seri Tribe Lineage
            </h2>

            <div className="space-y-8 text-desert-sand/80 leading-relaxed text-lg">
              <p className="text-2xl font-serif text-sacred-gold text-center mb-8">
                Nina and Astral have been initiated as daughter and son of the Seri Tribe<br/>
                by elders in the Sonoran Desert, Mexico
              </p>

              <p>
                This medicine doesn't belong to us. It belongs to the indigenous people
                who have held it sacred for generations. The Seri Tribe of the Sonoran Desert—
                the original guardians of Bufo Alvarius.
              </p>

              <p>
                Our initiation wasn't a weekend workshop. It wasn't a certification.
                It was years of apprenticeship, ceremony, humility, and dying again and again
                until we learned how to truly hold space for death.
              </p>

              <p>
                We were taught by elders who understand that this medicine is not a tool—
                it's a teacher. And the facilitator is not a guide—they're a servant.
              </p>

              <p className="border-l-4 border-sacred-gold/40 pl-6 italic">
                We hold this work with reverence because we know its power. We've sat with
                the medicine hundreds of times. We've died, dissolved, returned, and broken
                again. We've witnessed others cross the threshold and come back transformed—
                or traumatized when the container wasn't held properly.
              </p>

              <p>
                This is why we demand preparation. Why we screen for contraindications. Why
                we refuse to work with people who aren't ready. <strong className="text-sacred-white">This isn't
                about money or ego—it's about protecting the sacred nature of the work.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Training & Approach */}
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              Training & Approach
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🌿</span>
                    Years of Inner Work
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Over a decade of deep self-development work. Hundreds/thousands of hours
                    in meditation, therapy, shadow work, and personal ceremony. We don't guide
                    people where we haven't gone ourselves.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🧠</span>
                    Trauma-Informed Training
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Specialized training in trauma-informed facilitation, nervous system work,
                    and somatic practices. Ego dissolution can be traumatizing if not held properly—
                    we work <em>with</em> your nervous system, not against it.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    Energy Healing & Shamanic Practices
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Trained in energy healing, family constellations, shamanic journeying,
                    and somatic bodywork. The medicine opens doors—these modalities help
                    integrate what emerges.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🎓</span>
                    Guest Speaker & Mentor
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Guest speaker in facilitator training programs. Mentoring other practitioners
                    in trauma-informed medicine work, integration practices, and ethical facilitation.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">🔄</span>
                    Continuous Learning
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Deepening studies with teachers in the USA and Mexico. This work is never
                    "finished"—we're perpetual students of consciousness, death, and the sacred.
                  </p>
                </div>

                <div className="bg-sacred-cream rounded-2xl p-6">
                  <h3 className="text-xl font-serif text-earth-800 mb-3 flex items-center gap-3">
                    <span className="text-2xl">💝</span>
                    Hundreds of Ceremonies
                  </h3>
                  <p className="text-earth-700/70 leading-relaxed text-sm">
                    Facilitated hundreds of Bufo ceremonies over the years. Every journey is
                    unique. Every dissolution is sacred. We hold each one with full presence
                    and reverence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-earth-700/80 leading-relaxed text-center italic">
                "We don't fix you. We don't save you. We hold space for you to remember your own
                wholeness. The transformation happens in the field between us—and in your
                willingness to surrender."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* My Personal Journey with Medicine */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              Our Journey with the Medicine
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg">
              <p>
                <strong className="text-earth-800">We are not above the medicine.</strong> We are students of it.
              </p>

              <p>
                We've sat with Bufo more times than we can count. Some journeys were transcendent—
                pure bliss, cosmic love, remembrance. Others were terrifying—confronting the void,
                facing the illusion of separation, experiencing total annihilation.
              </p>

              <p>
                We've also worked with Ayahuasca, psilocybin, San Pedro, and other plant teachers.
                Each has shown us different facets of truth. But Bufo is unique—it doesn't show you
                anything. It dissolves you completely. There's nowhere to hide.
              </p>

              <p className="text-2xl font-serif text-sacred-gold italic text-center my-12">
                "We have sat with the medicine. We have died, dissolved,<br/>
                returned, and broken again."
              </p>

              <p>
                This isn't romantic. It's not spiritual bypassing. It's the hard-earned wisdom
                of people who've walked through the fire and come back—again and again—
                until we learned how to hold others through their own passage.
              </p>

              <p className="border-l-4 border-sacred-gold/40 pl-6 italic text-earth-700/70">
                We don't facilitate because we've "mastered" anything. We facilitate because we've
                been humbled enough by the medicine to know our place: servants, not saviors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why I Do This Work */}
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              Why We Hold This Work
            </h2>

            <div className="space-y-8 text-earth-700/80 leading-relaxed text-lg">
              <p>
                Because the medicine saved our lives.
              </p>

              <p>
                Not by fixing us. Not by making our problems disappear. But by showing us
                that the "I" was the problem. The story, the identity, the constant seeking—
                all of it was a defense against the simplicity of just... being.
              </p>

              <p>
                We facilitate Bufo ceremonies because we know what it's like to be lost in
                spiritual concepts and hungry for truth. We know what it's like to seek and
                seek and never arrive. And we know what it's like to finally stop—to dissolve
                into the void and discover that the void is fullness.
              </p>

              <p className="text-2xl font-serif text-sacred-gold text-center my-12">
                This work is our prayer. Our service. Our way of honoring<br/>
                the gift we were given when we died before we died.
              </p>

              <p>
                <strong className="text-earth-800">This is not promoted publicly.</strong> If you're here,
                you've been guided, invited, or felt the call. Trust that. And trust yourself
                enough to walk slowly, discerningly, into this sacred territory.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Quote & CTA */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/70 to-earth-900/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl text-sacred-gold/60 mb-12">⊛</div>

            <blockquote className="space-y-8 text-desert-sand/90 leading-relaxed text-xl md:text-2xl font-serif italic mb-16">
              <p>
                "If you feel called, let's walk slowly.
              </p>
              <p>
                This is sacred territory—not a service.
              </p>
              <p className="text-sacred-gold/90">
                Trust yourself."
              </p>
            </blockquote>

            <div className="space-y-6">
              <Link
                to="/ceremonies"
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                Learn About Bufo Ceremonies
              </Link>
              <p className="text-desert-sand/60 text-sm">
                Or explore:
                <Link to="/preparation" className="text-sacred-gold hover:text-sacred-amber transition-colors ml-2">
                  Preparation
                </Link>
                <span className="mx-2">·</span>
                <Link to="/integration" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  Integration
                </Link>
                <span className="mx-2">·</span>
                <Link to="/faq" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  FAQ
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
