import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useLanguage } from '../../contexts/LanguageContext';
import testimonialsEN from '../../translations/pages/testimonials/en.json';
import testimonialsES from '../../translations/pages/testimonials/es.json';
import testimonialsFR from '../../translations/pages/testimonials/fr.json';

const translations = { en: testimonialsEN, es: testimonialsES, fr: testimonialsFR };

// Abstract nature images for testimonials (more authentic than stock portraits)
const testimonialImages = [
  'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&h=1000&fit=crop', // Desert landscape
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop', // Mountain vista
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=1000&fit=crop', // Night sky
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=1000&fit=crop', // Ocean waves
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1000&fit=crop', // Forest path
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=1000&fit=crop', // Sunset over water
];

export default function TestimonialsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const featured = t.testimonials.items.filter(item => item.featured);
  const grid = t.testimonials.items.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/atmosphere/ceremony-01.jpg"
            alt="Ceremony space at sunset - Mazunte, Mexico"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-sacred-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-desert-sand/90 font-serif italic leading-relaxed max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-ocean-turquoise/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-ocean-turquoise/60 rounded-full"></div>
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
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={testimonialImages[index % testimonialImages.length]}
                    alt="Sacred landscape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-earth-900/40"></div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="text-4xl text-ocean-turquoise/40">❝</div>

                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-earth-800 leading-relaxed italic">
                  {testimonial.quote}
                </blockquote>

                <div className="space-y-2">
                  <p className="text-xl font-serif text-ocean-turquoise">
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
                <div key={index} className="bg-earth-700/30 backdrop-blur-xl border border-desert-sand/20 rounded-2xl p-8 space-y-6">
                  <div className="text-3xl text-sacred-gold/40">❝</div>

                  <blockquote className="text-xl md:text-2xl font-serif text-desert-sand leading-relaxed italic">
                    {testimonial.quote}
                  </blockquote>

                  <div className="space-y-1 pt-4 border-t border-desert-sand/10">
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
        <img
          src="/images/locations/sonoran-desert-sunset.jpg"
          alt="Sonoran Desert landscape at golden hour"
          className="w-full h-full object-cover"
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
