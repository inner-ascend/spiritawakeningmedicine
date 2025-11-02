import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function CollaborationsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero - Full Screen Opening */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/locations/mazunte-beach-sunset.jpg"
            alt="Collaboration and sacred work"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/50 to-earth-900"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-sacred-white mb-8 font-light">
            Collaborations
          </h1>
          <p className="text-xl md:text-2xl text-jungle-emerald/90 font-serif font-light max-w-2xl mx-auto">
            Let's create something sacred together
          </p>
        </div>
      </div>

      {/* Vision - Why Collaboration Matters */}
      <div className="bg-sacred-cream pt-36 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800">
              Co-Creating Transformation
            </h2>
            <p className="text-xl text-earth-700/80 leading-relaxed">
              We believe the most powerful work happens when we unite our medicine.
            </p>
            <p className="text-lg text-earth-700/70 leading-relaxed">
              If you're a healer, facilitator, retreat center, group organizer, or conscious entrepreneur who feels the call
              to collaborate—we're listening. Let's explore how our paths might weave together.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section - Inspirational (moved early for impact) */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-700 via-earth-800 to-earth-900"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-4xl font-serif text-sacred-white leading-relaxed italic">
              "The most sacred work happens when healers come together—not in competition,
              but in collaboration. Not to build empires, but to serve transformation."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Image Gallery - Show the Sacred Work (emotional connection) */}
      <div className="bg-earth-900 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src="/images/atmosphere/ceremony-04.jpg"
                  alt="Ceremony preparation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src="/images/atmosphere/ceremony-08.jpeg"
                  alt="Sacred space"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src="/images/atmosphere/ceremony-11.jpeg"
                  alt="Integration circle"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src="/images/atmosphere/ceremony-12.jpeg"
                  alt="Ceremony altar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Work With - Define the 3 Audiences */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 text-center mb-16">
              Who We Love Working With
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="text-3xl text-jungle-emerald">✧</div>
                <h3 className="text-xl font-serif text-earth-800">Retreat Centers</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Centers in Mexico, Spain, Costa Rica, and beyond looking to offer medicine work
                  and transformational programming.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-3xl text-jungle-emerald">✧</div>
                <h3 className="text-xl font-serif text-earth-800">Healers & Facilitators</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Conscious practitioners who want to co-create retreats, workshops, or offer
                  medicine work to their communities.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-3xl text-jungle-emerald">✧</div>
                <h3 className="text-xl font-serif text-earth-800">Group Organizers</h3>
                <p className="text-earth-700/70 leading-relaxed text-sm">
                  Community leaders, yoga teachers, wellness practitioners bringing groups together
                  for transformational experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GROUP ORGANIZERS - Organize & Receive Free Benefits */}
      <div className="bg-earth-800 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
                Organize a Group & Receive Free Benefits
              </h2>
              <p className="text-xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto">
                Bring the medicine to your community and participate for free. When you organize a group of participants, you receive complimentary access to the full ceremony experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-earth-700/40 backdrop-blur-xl border border-jungle-emerald/20 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-jungle-emerald mb-4">✦</div>
                <h3 className="text-2xl font-serif text-sacred-white mb-4">What You Provide</h3>
                <ul className="space-y-3 text-desert-sand/80 leading-relaxed">
                  <li>• Organize a group of participants (minimum group size varies by location)</li>
                  <li>• Help coordinate logistics and accommodation if needed</li>
                  <li>• Assist with communication and pre-ceremony preparation</li>
                  <li>• Create a safe, welcoming container for your community</li>
                </ul>
              </div>

              <div className="bg-earth-700/40 backdrop-blur-xl border border-jungle-emerald/20 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-jungle-emerald mb-4">✦</div>
                <h3 className="text-2xl font-serif text-sacred-white mb-4">What You Receive</h3>
                <ul className="space-y-3 text-desert-sand/80 leading-relaxed">
                  <li>• <span className="text-jungle-emerald font-medium">Free ceremony participation</span> for yourself</li>
                  <li>• Preparation and integration sessions at no cost</li>
                  <li>• Priority access to future ceremonies and retreats</li>
                  <li>• Direct support from experienced facilitators</li>
                  <li>• The gift of bringing transformation to your community</li>
                </ul>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 max-w-4xl mx-auto text-center">
              <p className="text-lg text-earth-800 leading-relaxed mb-4">
                <span className="font-medium">Perfect for:</span> Yoga teachers, wellness practitioners, community leaders, retreat organizers, spiritual entrepreneurs, or anyone passionate about bringing sacred medicine work to their circle.
              </p>
              <p className="text-earth-700/80 italic">
                "When you serve the medicine, the medicine serves you."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desert Image - Visual Transition */}
      <div className="h-[60vh] relative overflow-hidden">
        <img
          src="/images/locations/sonoran-desert-sunset.jpg"
          alt="Sacred desert landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 to-earth-900/70"></div>
      </div>

      {/* FOR HEALERS & FACILITATORS - 4 Collaboration Types */}
      <div className="bg-earth-900 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white text-center mb-20">
              For Healers & Facilitators
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Medicine Facilitation */}
              <div className="bg-earth-800/60 backdrop-blur-xl border border-jungle-emerald/20 rounded-2xl p-8 space-y-6">
                <div className="text-4xl text-jungle-emerald">✦</div>
                <h3 className="text-2xl font-serif text-sacred-white">Bufo Alvarius Medicine Facilitation</h3>
                <p className="text-desert-sand/80 leading-relaxed">
                  Over a decade of experience holding sacred space for 5-MeO-DMT journeys. We bring preparation,
                  presence, integration support, and deep reverence for the medicine.
                </p>
                <ul className="space-y-3 text-desert-sand/70 text-sm">
                  <li>• Pre-ceremony preparation and screening</li>
                  <li>• Safe, trauma-informed facilitation</li>
                  <li>• Post-ceremony integration support</li>
                  <li>• Group and private ceremony formats</li>
                </ul>
              </div>

              {/* Teaching & Workshops */}
              <div className="bg-earth-800/60 backdrop-blur-xl border border-jungle-emerald/20 rounded-2xl p-8 space-y-6">
                <div className="text-4xl text-jungle-emerald">✦</div>
                <h3 className="text-2xl font-serif text-sacred-white">Workshops & Teachings</h3>
                <p className="text-desert-sand/80 leading-relaxed">
                  We offer experiential workshops on integration, energy healing, masculine embodiment,
                  and spiritual business. Tailored to your audience and container.
                </p>
                <ul className="space-y-3 text-desert-sand/70 text-sm">
                  <li>• Integration after plant medicine</li>
                  <li>• Energy healing & somatic release</li>
                  <li>• Sacred masculinity & men's work</li>
                  <li>• Spiritual entrepreneurship</li>
                </ul>
              </div>

              {/* Retreat Co-Facilitation */}
              <div className="bg-earth-800/60 backdrop-blur-xl border border-jungle-emerald/20 rounded-2xl p-8 space-y-6">
                <div className="text-4xl text-jungle-emerald">✦</div>
                <h3 className="text-2xl font-serif text-sacred-white">Retreat Co-Facilitation</h3>
                <p className="text-desert-sand/80 leading-relaxed">
                  Let's design transformational retreats together. We bring ceremony, healing sessions,
                  integration circles, and deep presence to multi-day immersions.
                </p>
                <ul className="space-y-3 text-desert-sand/70 text-sm">
                  <li>• 3-14 day retreat formats</li>
                  <li>• Custom program design</li>
                  <li>• Ceremony + integration containers</li>
                  <li>• Healing sessions & energy work</li>
                </ul>
              </div>

              {/* Guest Facilitation */}
              <div className="bg-earth-800/60 backdrop-blur-xl border border-jungle-emerald/20 rounded-2xl p-8 space-y-6">
                <div className="text-4xl text-jungle-emerald">✦</div>
                <h3 className="text-2xl font-serif text-sacred-white">Guest Facilitation at Your Center</h3>
                <p className="text-desert-sand/80 leading-relaxed">
                  If you run a retreat center, healing space, or conscious community—we're available for
                  guest facilitation residencies. Bring medicine work and transformational offerings to your space.
                </p>
                <ul className="space-y-3 text-desert-sand/70 text-sm">
                  <li>• 1-4 week residencies</li>
                  <li>• Medicine ceremonies for your community</li>
                  <li>• Workshops and teachings</li>
                  <li>• Private sessions for guests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work Together - The 4-Step Process */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 text-center mb-12">
              How We Can Work Together
            </h2>

            <div className="space-y-8 text-earth-800/70 leading-relaxed">
              <div className="bg-white rounded-2xl p-8 border border-earth-700/10">
                <h3 className="text-xl font-serif text-earth-800 mb-4">1. Discovery Call</h3>
                <p>
                  We start with a conversation. No pitches, no pressure—just an exploration of whether
                  our visions align and what we might create together.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-earth-700/10">
                <h3 className="text-xl font-serif text-earth-800 mb-4">2. Co-Design</h3>
                <p>
                  If it's a yes, we design the container together. What's the vision? Who are we serving?
                  What medicine wants to come through? We make it sacred from the start.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-earth-700/10">
                <h3 className="text-xl font-serif text-earth-800 mb-4">3. Aligned Action</h3>
                <p>
                  We handle our side—facilitation, ceremony, integration, content. You handle yours—venue,
                  logistics, marketing, or whatever gifts you bring. We trust the process.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-earth-700/10">
                <h3 className="text-xl font-serif text-earth-800 mb-4">4. We Show Up & Serve</h3>
                <p>
                  When it's time, we hold the container together. Presence over perfection. Service over ego.
                  Transformation over transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Past Collaborations - Proof of Success */}
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 text-center mb-16">
              Past Collaborations
            </h2>

            <div className="space-y-12">
              <div className="border-l-4 border-jungle-emerald/40 pl-8 py-4">
                <h3 className="text-xl font-serif text-earth-800 mb-2">
                  Retreat Centers in Mazunte, Mexico
                </h3>
                <p className="text-earth-800/70 leading-relaxed">
                  Multi-day transformational retreats combining Bufo ceremonies, integration circles,
                  energy healing, and ocean-based practices.
                </p>
              </div>

              <div className="border-l-4 border-jungle-emerald/40 pl-8 py-4">
                <h3 className="text-xl font-serif text-earth-800 mb-2">
                  Sacred Masculinity Workshops (Barcelona)
                </h3>
                <p className="text-earth-800/70 leading-relaxed">
                  Co-facilitated men's circles and weekend intensives focused on embodiment, emotional
                  release, and authentic power.
                </p>
              </div>

              <div className="border-l-4 border-jungle-emerald/40 pl-8 py-4">
                <h3 className="text-xl font-serif text-earth-800 mb-2">
                  Integration Programs for Ayahuasca Communities
                </h3>
                <p className="text-earth-800/70 leading-relaxed">
                  Post-ceremony integration workshops and ongoing support for communities working
                  with plant medicines.
                </p>
              </div>

              <div className="border-l-4 border-jungle-emerald/40 pl-8 py-4">
                <h3 className="text-xl font-serif text-earth-800 mb-2">
                  Spiritual Business Training for Healers
                </h3>
                <p className="text-earth-800/70 leading-relaxed">
                  Teaching conscious entrepreneurs how to build sustainable practices while staying
                  aligned with soul purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We're NOT Looking For - Set Boundaries */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-700 via-earth-800 to-earth-900"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-sacred-white text-center mb-12">
              What We're NOT Looking For
            </h2>

            <div className="space-y-6 text-desert-sand/80 leading-relaxed">
              <p className="text-lg">
                ✗ Transactional partnerships where it's just about the money
              </p>
              <p className="text-lg">
                ✗ Spaces that don't honor the medicine or prioritize participant safety
              </p>
              <p className="text-lg">
                ✗ "Spiritual tourism" vibes that commodify sacred practices
              </p>
              <p className="text-lg">
                ✗ Collaborations where we're not aligned on values, ethics, or vision
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="text-desert-sand/70 italic">
                We'd rather say no than compromise the integrity of the work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Interest List */}
      <div className="bg-earth-800 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-16 text-center">
              Join the Collaboration Interest List
            </h2>

            <div className="text-center space-y-8">
              <div className="bg-earth-700/40 backdrop-blur-xl border border-desert-sand/20 rounded-2xl p-12">
                <p className="text-2xl font-serif text-sacred-white mb-6">
                  Stay Informed About Collaboration Opportunities
                </p>
                <p className="text-lg text-desert-sand/80 leading-relaxed max-w-2xl mx-auto mb-8">
                  Be the first to know about upcoming retreat collaborations, facilitator training opportunities,
                  and partnership possibilities. Get priority access to collaborative projects that align with your vision.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-desert-sand/70">
                    <span className="text-jungle-emerald">✓</span>
                    <span>Priority notifications for collaboration opportunities</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-desert-sand/70">
                    <span className="text-jungle-emerald">✓</span>
                    <span>Early access to partnership discussions</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-desert-sand/70">
                    <span className="text-jungle-emerald">✓</span>
                    <span>Detailed information about upcoming projects</span>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-block px-10 py-4 bg-jungle-emerald text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                Join the Collaboration List
              </Link>
              <p className="text-sm text-desert-sand/60 italic">
                Include "Collaboration Interest" in your message
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA - Start the Conversation */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800">
              Ready to Explore a Collaboration?
            </h2>
            <p className="text-xl text-earth-700/70 leading-relaxed">
              Tell us about your vision. Share what you're creating. Let's see if our medicine
              is meant to weave together.
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-block px-12 py-4 bg-jungle-emerald text-earth-900 rounded-full hover:bg-sacred-amber shadow-lg transition-colors font-medium text-lg"
              >
                Start the conversation
              </Link>
            </div>
            <p className="text-sm text-earth-700/60 italic">
              Please include "Collaboration" in your message subject
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  );
}
