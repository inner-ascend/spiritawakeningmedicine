import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImagePlaceholder from '../ImagePlaceholder';
import { useLanguage } from '../../contexts/LanguageContext';
import testimonialsEN from '../../translations/pages/testimonials/en.json';
import testimonialsES from '../../translations/pages/testimonials/es.json';
import testimonialsFR from '../../translations/pages/testimonials/fr.json';

const translations = { en: testimonialsEN, es: testimonialsES, fr: testimonialsFR };

export default function TestimonialsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const testimonials = [
    {
      name: "Holly",
      quote: "The healings I went through with Astral were deep and transformative. Through his practice, he is able to prise issues from the mind and release them through the heart. His compassion and belief allows vulnerability in the unknown, acceptance of ugly realities and enables you to rise above blocks we accumulate along with our lives. He showed me how to love myself, that experience is strength, and our power runs further than this body.",
      typeKey: "energyHealingIntegration",
      featured: true
    },
    {
      name: "Jon",
      quote: "Astral gave me a gift, by healing wounds that had been present in me since I was a child. We cleared issues that were causing me to have weird dynamics with women. He set me free and I'll never be the same. He made me a man. I feel confident in myself and my abilities now.",
      typeKey: "bufoCeremonyIntegration",
      featured: true
    },
    {
      name: "Nina",
      quote: "I could feel his presence in the higher realms—helping me to go deeper into the quest. I felt secure, held, seen, and fully accepted so I could trust and surrender. I feel so young! Clear and joyful, like a child. I accept where I'm at and know myself better.",
      typeKey: "bufoCeremony",
      featured: false
    },
    {
      name: "Hazel",
      quote: "The work with Astral was one of the most profound transformations I have ever had. He takes you straight into the subconscious mind so together you find the cause of your limiting beliefs and clear them. This is the healing of the future, in the 5th dimension, working in the quantum field that enables healing to be instantaneous.",
      typeKey: "energyHealing",
      featured: true
    },
    {
      name: "Anonymous",
      quote: "I came to the ceremony broken, seeking answers. I left without questions. The medicine didn't fix me—it showed me I was never broken. Nina and Astral held the space with such reverence and safety that I could finally let go completely.",
      typeKey: "bufoCeremony",
      featured: false
    },
    {
      name: "Marcus",
      quote: "The integration sessions after my ceremony were just as important as the journey itself. They helped me make sense of the dissolution, anchor the insights, and actually embody the remembrance in my daily life.",
      typeKey: "integrationSupport",
      featured: false
    }
  ];

  const featured = testimonials.filter(t => t.featured);
  const grid = testimonials.filter(t => !t.featured);

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <ImagePlaceholder
            aspectRatio="21/9"
            altText="Ceremony space at sunset - Mazunte, Mexico"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-5xl text-sacred-gold/60 mb-8">⊛</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-sacred-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-desert-sand/90 font-serif italic leading-relaxed max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Featured Testimonials - Full Width Alternating */}
      {featured.map((testimonial, index) => (
        <div key={index} className={`${index % 2 === 0 ? 'bg-sacred-cream' : 'bg-white'} py-48`}>
          <div className="container mx-auto px-4">
            <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <ImagePlaceholder
                  aspectRatio="4/5"
                  altText={`${testimonial.name} - Client portrait`}
                  className="shadow-2xl"
                />
              </div>

              {/* Testimonial Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="text-4xl text-sacred-gold/40">❝</div>

                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-earth-800 leading-relaxed italic">
                  {testimonial.quote}
                </blockquote>

                <div className="space-y-2">
                  <p className="text-xl font-serif text-sacred-gold">
                    — {testimonial.name}
                  </p>
                  <p className="text-sm text-earth-700/60 uppercase tracking-wider">
                    {t.testimonials.types[testimonial.typeKey as keyof typeof t.testimonials.types]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* More Testimonials - Grid Layout */}
      <div className="bg-earth-800 py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-white mb-20 text-center">
              {t.moreVoices.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {grid.map((testimonial, index) => (
                <div key={index} className="space-y-6">
                  {/* Small portrait */}
                  <div className="w-24 h-24 mx-auto">
                    <ImagePlaceholder
                      aspectRatio="1/1"
                      altText={`${testimonial.name} portrait`}
                      className="rounded-full overflow-hidden"
                    />
                  </div>

                  <blockquote className="text-xl md:text-2xl font-serif text-desert-sand leading-relaxed italic text-center">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="text-center space-y-1">
                    <p className="text-lg font-serif text-sacred-gold">
                      — {testimonial.name}
                    </p>
                    <p className="text-xs text-desert-sand/60 uppercase tracking-wider">
                      {t.testimonials.types[testimonial.typeKey as keyof typeof t.testimonials.types]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider Image Section */}
      <div className="h-[60vh] relative overflow-hidden">
        <ImagePlaceholder
          aspectRatio="21/9"
          altText="Sonoran Desert landscape at golden hour"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 via-transparent to-earth-900/40 flex items-center justify-center">
          <p className="text-3xl md:text-4xl font-serif text-sacred-white italic text-center px-4 max-w-4xl">
            "{t.divider.quote.split('\n').map((line: string, i: number) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}"
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-6">
              {t.cta.title}
            </h2>

            <p className="text-xl text-earth-700/80 leading-relaxed">
              {t.cta.description}
            </p>

            <div className="space-y-4 pt-8">
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg"
              >
                {t.cta.button}
              </Link>

              <p className="text-sm text-earth-700/60 italic">
                {t.cta.disclaimer}
              </p>
            </div>

            <div className="pt-12 space-y-4">
              <Link to="/ceremonies" className="block text-sacred-gold hover:text-sacred-amber transition-colors">
                {t.cta.links.ceremonies}
              </Link>
              <Link to="/faq" className="block text-sacred-gold hover:text-sacred-amber transition-colors">
                {t.cta.links.faq}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
