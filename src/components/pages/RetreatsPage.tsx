import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImagePlaceholder from '../ImagePlaceholder';

export default function RetreatsPage() {
  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <ImagePlaceholder
            aspectRatio="21/9"
            altText="Retreat space in Mazunte with ocean view"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/50 to-earth-900"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-5xl text-sacred-gold/60 mb-8">⊹</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-sacred-white mb-8 leading-tight">
            Retreats & Sacred Containers
          </h1>
          <p className="text-2xl md:text-3xl text-desert-sand/90 font-serif italic leading-relaxed max-w-3xl mx-auto">
            Multi-day immersions and collaborative offerings
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bufo Retreat Containers - Section 1 */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Left */}
            <div>
              <ImagePlaceholder
                aspectRatio="4/5"
                altText="Retreat ceremony space in nature"
                className="shadow-2xl"
                caption="Intimate ceremony space in Mazunte"
              />
            </div>

            {/* Text Right */}
            <div className="space-y-8">
              <div>
                <div className="text-4xl text-sacred-gold/40 mb-4">🌿</div>
                <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                  Bufo Retreat Containers
                </h2>
                <p className="text-xl text-earth-700/80 leading-relaxed italic mb-8">
                  3-7 day immersive journeys
                </p>
              </div>

              <div className="space-y-6 text-lg text-earth-700/80 leading-relaxed">
                <p>
                  Our multi-day retreats offer a complete container for transformation—
                  preparation, ceremony, and integration held within one sacred journey.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">Small groups:</strong> 2-6 people maximum for intimate holding</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">Complete journey:</strong> Preparation sessions, Bufo ceremony, integration support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">Sacred location:</strong> Mazunte, Oaxaca, Mexico—ocean, jungle, tranquility</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">Includes:</strong> Accommodation, meals, ceremony, integration circles, nature immersion</span>
                  </div>
                </div>

                <div className="bg-medicine-venom rounded-xl p-6 mt-8">
                  <p className="text-earth-800"><strong>Investment:</strong> €1,500-3,000 per person</p>
                  <p className="text-sm text-earth-700/70 mt-2">Sliding scale available · Payment plans offered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Intensives - Section 2 */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Left */}
            <div className="space-y-8 lg:order-1">
              <div>
                <div className="text-4xl text-sacred-gold/40 mb-4">🔥</div>
                <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
                  Integration Intensives
                </h2>
                <p className="text-xl text-earth-700/80 leading-relaxed italic mb-8">
                  Weekend containers for post-ceremony integration
                </p>
              </div>

              <div className="space-y-6 text-lg text-earth-700/80 leading-relaxed">
                <p>
                  For those who've already sat with medicine and need support anchoring
                  the insights into embodied reality.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">Group circles:</strong> Sharing, witnessing, meaning-making</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">Somatic practices:</strong> Breathwork, movement, trauma release</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">Nature immersion:</strong> Beach, jungle, silent walks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-earth-800">Energy work:</strong> Individual sessions available</span>
                  </div>
                </div>

                <div className="bg-medicine-venom rounded-xl p-6 mt-8">
                  <p className="text-earth-800"><strong>Investment:</strong> €500-1,200 per person</p>
                  <p className="text-sm text-earth-700/70 mt-2">2-4 day formats · Sliding scale available</p>
                </div>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:order-2">
              <ImagePlaceholder
                aspectRatio="4/5"
                altText="Integration circle with participants"
                className="shadow-2xl"
                caption="Integration circles in nature"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Image Break */}
      <div className="h-[70vh] relative overflow-hidden">
        <ImagePlaceholder
          aspectRatio="21/9"
          altText="Mazunte beach at sunset"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 to-earth-900/60"></div>
      </div>

      {/* Collaborations Section */}
      <div className="bg-earth-800 py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Left */}
            <div>
              <ImagePlaceholder
                aspectRatio="4/5"
                altText="Collaborative retreat facilitation"
                className="shadow-2xl"
                caption="Co-facilitating transformational experiences"
              />
            </div>

            {/* Text Right */}
            <div className="space-y-8">
              <div>
                <div className="text-4xl text-sacred-gold/60 mb-4">⊛</div>
                <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
                  Collaborations & Guest Facilitation
                </h2>
                <p className="text-xl text-desert-sand/80 leading-relaxed italic mb-8">
                  We collaborate with retreat centers, facilitators, and conscious communities
                </p>
              </div>

              <div className="space-y-6 text-lg text-desert-sand/80 leading-relaxed">
                <p>
                  The most powerful transformational work happens when medicine holders unite
                  their gifts. We're open to co-creating sacred containers with aligned partners.
                </p>

                <h3 className="text-2xl font-serif text-sacred-gold pt-4">What We Offer:</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-sacred-white">Bufo ceremony facilitation:</strong> Guest ceremonies at your retreat center or event</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-sacred-white">Integration workshops:</strong> Post-ceremony integration for your community</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-sacred-white">Co-created retreats:</strong> Design and facilitate multi-day transformational containers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✓</span>
                    <span><strong className="text-sacred-white">Training support:</strong> Guest speakers for facilitator training programs</span>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    to="/contact"
                    className="inline-block px-10 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
                  >
                    Explore Collaboration
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Collaborate With */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              Who We Collaborate With
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-earth-800 flex items-center gap-3">
                  <span className="text-3xl">🏡</span>
                  Retreat Centers
                </h3>
                <p className="text-earth-700/80 leading-relaxed">
                  Centers offering transformational retreats who want to include Bufo ceremonies
                  or integration support within their programming.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-earth-800 flex items-center gap-3">
                  <span className="text-3xl">🌐</span>
                  Conscious Communities
                </h3>
                <p className="text-earth-700/80 leading-relaxed">
                  Intentional communities, eco-villages, and healing centers seeking guest
                  facilitators for medicine work.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-earth-800 flex items-center gap-3">
                  <span className="text-3xl">🤝</span>
                  Fellow Facilitators
                </h3>
                <p className="text-earth-700/80 leading-relaxed">
                  Other medicine facilitators, therapists, and integration specialists
                  interested in co-creating multi-modality containers.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-earth-800 flex items-center gap-3">
                  <span className="text-3xl">🎓</span>
                  Training Programs
                </h3>
                <p className="text-earth-700/80 leading-relaxed">
                  Facilitator training programs seeking guest speakers on trauma-informed
                  Bufo facilitation and integration.
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 text-center">
              <p className="text-earth-700/80 leading-relaxed italic">
                "We believe the most powerful work happens when we unite our medicine.
                If you're creating transformational containers and feel called to collaborate,
                let's have a conversation."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Retreats */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-16 text-center">
              Upcoming Retreats
            </h2>

            <div className="text-center space-y-8">
              <div className="bg-sacred-cream rounded-2xl p-12">
                <div className="text-5xl mb-6">🌅</div>
                <p className="text-2xl font-serif text-earth-800 mb-4">
                  2025 Retreat Dates Coming Soon
                </p>
                <p className="text-lg text-earth-700/80 leading-relaxed max-w-2xl mx-auto">
                  We're currently planning our 2025 retreat calendar. Join the waitlist to be
                  notified when dates are announced.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                Join Retreat Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-earth-900 py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-6">
              Interested in Attending or Collaborating?
            </h2>

            <p className="text-xl text-desert-sand/80 leading-relaxed">
              Whether you're called to join a retreat or interested in co-creating
              transformational containers, we'd love to hear from you.
            </p>

            <div className="space-y-4 pt-8">
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                Get In Touch
              </Link>

              <p className="text-sm text-desert-sand/60 italic">
                Retreat inquiries · Collaboration proposals · Waitlist
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
